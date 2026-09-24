import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { authMiddleware } from "@/lib/auth/middleware";

export type MarketingSubscriber = {
  id: string;
  email: string;
  first_name: string;
  status: "active" | "unsubscribed" | "bounced";
  consent_source: string;
  consented_at: string;
};

export type MarketingCampaign = {
  id: string;
  name: string;
  subject: string;
  preview_text: string;
  body_text: string;
  status: "draft" | "sending" | "queued" | "failed";
  provider_campaign_id: string | null;
  recipient_count: number;
  last_error: string | null;
  created_at: string;
  queued_at: string | null;
};

export type MarketingStudioData = {
  totals: { active: number; unsubscribed: number; campaigns: number; drafts: number };
  subscribers: MarketingSubscriber[];
  campaigns: MarketingCampaign[];
  delivery: { ready: boolean; missing: string[]; provider: "Brevo" };
};

const subscriberInput = z.object({
  email: z.email().trim().max(254),
  firstName: z.string().trim().max(80).default(""),
  consentSource: z.string().trim().min(3).max(120),
  consentConfirmed: z.literal(true),
});

const subscriberImportInput = z.object({
  contacts: z.array(z.object({
    email: z.email().trim().max(254),
    firstName: z.string().trim().max(80).default(""),
    consentSource: z.string().trim().min(3).max(120),
    consentedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  })).min(1).max(500),
  consentConfirmed: z.literal(true),
});

const campaignInput = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(2).max(100),
  subject: z.string().trim().min(2).max(160),
  previewText: z.string().trim().max(160).default(""),
  bodyText: z.string().trim().min(20).max(12000),
});

const idInput = z.object({ id: z.string().uuid() });

type WorkspaceSql = Awaited<ReturnType<typeof import("@/lib/db").getSql>>;

async function resolveWorkspace(sql: WorkspaceSql, userId: string) {
  const existing = await sql.query<{ workspace_id: string; role: string }>(
    "select workspace_id, role from marketing_memberships where user_id = $1 limit 1",
    [userId],
  );
  if (existing[0]) return { id: existing[0].workspace_id, role: existing[0].role };

  const users = await sql.query<{ email: string }>(
    'select email from "user" where "id" = $1 limit 1',
    [userId],
  );
  const { company } = await import("@/lib/content");
  const ownerEmail = (process.env.MARKETING_OWNER_EMAIL || company.email).trim().toLowerCase();
  if (!users[0]?.email || users[0].email.trim().toLowerCase() !== ownerEmail) {
    throw new Error("This account is not a member of the MKSAnalytIQ workspace.");
  }

  const workspaces = await sql.query<{ id: string }>(
    "select id from marketing_workspaces where slug = $1 limit 1",
    ["mksanalytIQ"],
  );
  if (!workspaces[0]) throw new Error("The marketing workspace is not initialized yet.");
  await sql.query(
    "insert into marketing_memberships (workspace_id, user_id, role) values ($1, $2, 'owner') on conflict do nothing",
    [workspaces[0].id, userId],
  );
  return { id: workspaces[0].id, role: "owner" };
}

async function workspaceForUser(userId: string) {
  const { getSql } = await import("@/lib/db");
  const sql = await getSql();
  return { sql, ...(await resolveWorkspace(sql, userId)) };
}

function deliveryStatus() {
  const missing: string[] = [];
  if (!process.env.BREVO_API_KEY?.trim()) missing.push("Brevo API key");
  if (!process.env.BREVO_LIST_ID?.trim()) missing.push("dedicated Brevo contact-list ID");
  if (!process.env.BREVO_SENDER_EMAIL?.trim()) missing.push("verified sender email");
  if (!process.env.BREVO_SENDER_NAME?.trim()) missing.push("sender name");
  return { ready: missing.length === 0, missing, provider: "Brevo" as const };
}

export const getMarketingStudio = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<MarketingStudioData> => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    const [counts, subscribers, campaigns] = await Promise.all([
      sql.query<{ active: number; unsubscribed: number; campaigns: number; drafts: number }>(
        `select
           count(*) filter (where status = 'active')::int as active,
           count(*) filter (where status = 'unsubscribed')::int as unsubscribed,
           (select count(*)::int from marketing_campaigns where workspace_id = $1) as campaigns,
           (select count(*)::int from marketing_campaigns where workspace_id = $1 and status = 'draft') as drafts
         from marketing_subscribers where workspace_id = $1`,
        [workspaceId],
      ),
      sql.query<MarketingSubscriber>(
        `select id, email, first_name, status, consent_source,
                consented_at::text as consented_at
         from marketing_subscribers where workspace_id = $1
         order by created_at desc limit 250`,
        [workspaceId],
      ),
      sql.query<MarketingCampaign>(
        `select id, name, subject, preview_text, body_text, status, provider_campaign_id,
                recipient_count, last_error, created_at::text as created_at,
                queued_at::text as queued_at
         from marketing_campaigns where workspace_id = $1
         order by updated_at desc limit 50`,
        [workspaceId],
      ),
    ]);
    return {
      totals: counts[0] ?? { active: 0, unsubscribed: 0, campaigns: 0, drafts: 0 },
      subscribers,
      campaigns,
      delivery: deliveryStatus(),
    };
  });

export const addMarketingSubscriber = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(subscriberInput)
  .handler(async ({ data, context }) => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    const email = data.email.trim();
    const normalized = email.toLowerCase();
    const result = await sql.query<{ id: string }>(
      `insert into marketing_subscribers
         (id, workspace_id, email, email_normalized, first_name, status, consent_source, consented_at, unsubscribed_at, updated_at)
       values ($1, $2, $3, $4, $5, 'active', $6, now(), null, now())
       on conflict (workspace_id, email_normalized) do update set
         email = excluded.email,
         first_name = excluded.first_name,
         status = 'active',
         consent_source = excluded.consent_source,
         consented_at = now(),
         unsubscribed_at = null,
         updated_at = now()
       where marketing_subscribers.status <> 'active'
       returning id`,
      [crypto.randomUUID(), workspaceId, email, normalized, data.firstName, data.consentSource],
    );
    if (!result[0]) throw new Error("This email is already active on your list.");
    return { id: result[0].id };
  });

export const importMarketingSubscribers = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(subscriberImportInput)
  .handler(async ({ data, context }) => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    const unique = new Map<string, (typeof data.contacts)[number]>();
    for (const contact of data.contacts) unique.set(contact.email.trim().toLowerCase(), contact);
    const rows = [...unique.entries()];
    const values: unknown[] = [];
    const tuples = rows.map(([normalized, contact], index) => {
      const offset = index * 7;
      values.push(
        crypto.randomUUID(),
        workspaceId,
        contact.email.trim(),
        normalized,
        contact.firstName.trim(),
        contact.consentSource.trim(),
        contact.consentedAt ?? new Date().toISOString(),
      );
      return `($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4}, $${offset + 5}, 'active', $${offset + 6}, $${offset + 7}, null, now())`;
    });
    const imported = await sql.query<{ id: string }>(
      `insert into marketing_subscribers
         (id, workspace_id, email, email_normalized, first_name, status, consent_source, consented_at, unsubscribed_at, updated_at)
       values ${tuples.join(", ")}
       on conflict (workspace_id, email_normalized) do update set
         email = excluded.email,
         first_name = excluded.first_name,
         status = 'active',
         consent_source = excluded.consent_source,
         consented_at = excluded.consented_at,
         unsubscribed_at = null,
         updated_at = now()
       where marketing_subscribers.status <> 'active'
       returning id`,
      values,
    );
    return { imported: imported.length, skipped: data.contacts.length - imported.length };
  });

export const unsubscribeMarketingSubscriber = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(idInput)
  .handler(async ({ data, context }) => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    await sql.query(
      `update marketing_subscribers
       set status = 'unsubscribed', unsubscribed_at = now(), updated_at = now()
       where id = $1 and workspace_id = $2`,
      [data.id, workspaceId],
    );
    return { success: true };
  });

export const saveMarketingCampaign = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(campaignInput)
  .handler(async ({ data, context }) => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    if (data.id) {
      const saved = await sql.query<{ id: string }>(
        `update marketing_campaigns
         set name = $3, subject = $4, preview_text = $5, body_text = $6,
             status = 'draft', last_error = null, updated_at = now()
         where id = $1 and workspace_id = $2 and status in ('draft', 'failed')
         returning id`,
        [data.id, workspaceId, data.name, data.subject, data.previewText, data.bodyText],
      );
      if (!saved[0]) throw new Error("This campaign can’t be edited in its current status.");
      return { id: saved[0].id };
    }

    const id = crypto.randomUUID();
    await sql.query(
      `insert into marketing_campaigns
         (id, workspace_id, name, subject, preview_text, body_text, status, created_by)
       values ($1, $2, $3, $4, $5, $6, 'draft', $7)`,
      [id, workspaceId, data.name, data.subject, data.previewText, data.bodyText, context.userId],
    );
    return { id };
  });

type BrevoContact = { email: string; first_name: string; status: string };
type BrevoCampaign = { id: number };

async function brevoRequest<T>(apiKey: string, path: string, method: string, body?: unknown): Promise<T> {
  const response = await fetch(`https://api.brevo.com/v3${path}`, {
    method,
    headers: {
      "api-key": apiKey,
      accept: "application/json",
      ...(body === undefined ? {} : { "content-type": "application/json" }),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  if (!response.ok) {
    if (response.status === 404) throw new Error("CONTACT_NOT_FOUND");
    throw new Error(`Brevo request failed with status ${response.status}.`);
  }
  if (response.status === 204) return {} as T;
  return (await response.json()) as T;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

async function syncContact(
  apiKey: string,
  listId: number,
  subscriber: BrevoContact,
): Promise<boolean> {
  const contactPath = `/contacts/${encodeURIComponent(subscriber.email)}`;
  if (subscriber.status !== "active") {
    try {
      await brevoRequest(apiKey, contactPath, "PUT", {
        emailBlacklisted: true,
        unlinkListIds: [listId],
      });
    } catch (error) {
      if (!(error instanceof Error) || error.message !== "CONTACT_NOT_FOUND") throw error;
    }
    return false;
  }
  const payload = {
    email: subscriber.email,
    listIds: [listId],
    updateEnabled: true,
    attributes: subscriber.first_name ? { FNAME: subscriber.first_name } : {},
  };
  try {
    // Deliberately omit emailBlacklisted here: a contact who unsubscribed in
    // Brevo must stay suppressed. updateEnabled only syncs safe profile fields
    // and list membership; it cannot silently opt them back in.
    await brevoRequest(apiKey, "/contacts", "POST", payload);
  } catch {
    throw new Error("Brevo could not sync the opted-in contact list.");
  }
  return true;
}

async function syncContacts(apiKey: string, listId: number, contacts: BrevoContact[]) {
  let next = 0;
  let activeCount = 0;
  const workers = Array.from({ length: Math.min(4, contacts.length) }, async () => {
    while (next < contacts.length) {
      const index = next++;
      if (await syncContact(apiKey, listId, contacts[index])) activeCount += 1;
    }
  });
  await Promise.all(workers);
  return activeCount;
}

function campaignHtml(bodyText: string, address: string) {
  const body = escapeHtml(bodyText).replace(/\r?\n/g, "<br>");
  return `<!doctype html><html><body style="margin:0;background:#f4f7fb;font-family:Arial,sans-serif;color:#071426"><div style="max-width:640px;margin:32px auto;padding:32px;background:#fff;border:1px solid #e3e9f2;border-radius:20px;line-height:1.7"><div style="font-size:18px;font-weight:700;color:#084a9e">MKSAnalytIQ</div><div style="margin-top:24px">${body}</div><hr style="margin:28px 0;border:0;border-top:1px solid #e3e9f2"><p style="font-size:12px;color:#5c6b80">You’re receiving this message because you chose to hear from MKSAnalytIQ. ${escapeHtml(address)}. <a href="{{ unsubscribe }}" style="color:#084a9e">Unsubscribe</a></p></div></body></html>`;
}

export const sendMarketingCampaign = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator(idInput)
  .handler(async ({ data, context }) => {
    const { sql, id: workspaceId } = await workspaceForUser(context.userId);
    const apiKey = process.env.BREVO_API_KEY?.trim();
    const listId = Number(process.env.BREVO_LIST_ID);
    const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
    const senderName = process.env.BREVO_SENDER_NAME?.trim();
    if (!apiKey || !Number.isInteger(listId) || listId < 1 || !senderEmail || !senderName) {
      throw new Error("Brevo isn’t connected yet. Add its API key, dedicated list ID, verified sender email, and sender name to the server configuration.");
    }

    const locked = await sql.query<MarketingCampaign>(
      `update marketing_campaigns set status = 'sending', last_error = null, updated_at = now()
       where id = $1 and workspace_id = $2 and status in ('draft', 'failed')
       returning id, name, subject, preview_text, body_text, status, provider_campaign_id, recipient_count,
                 last_error, created_at::text as created_at, queued_at::text as queued_at`,
      [data.id, workspaceId],
    );
    if (!locked[0]) throw new Error("This campaign is already queued or is being sent.");

    try {
      const contactRows = await sql.query<BrevoContact>(
        `select email, first_name, status from marketing_subscribers
         where workspace_id = $1 order by created_at`,
        [workspaceId],
      );
      const recipientCount = await syncContacts(apiKey, listId, contactRows);
      if (recipientCount === 0) throw new Error("There are no active, deliverable subscribers in your list.");

      const payload = {
        name: locked[0].name,
        subject: locked[0].subject,
        previewText: locked[0].preview_text,
        sender: { name: senderName, email: senderEmail },
        replyTo: senderEmail,
        recipients: { listIds: [listId] },
        htmlContent: campaignHtml(locked[0].body_text, (await import("@/lib/content")).company.addressOneLine),
      };
      let providerId = locked[0].provider_campaign_id ? Number(locked[0].provider_campaign_id) : NaN;
      if (Number.isInteger(providerId) && providerId > 0) {
        await brevoRequest(apiKey, `/emailCampaigns/${providerId}`, "PUT", payload);
      } else {
        const remote = await brevoRequest<BrevoCampaign>(apiKey, "/emailCampaigns", "POST", payload);
        providerId = remote.id;
        await sql.query(
          "update marketing_campaigns set provider_campaign_id = $3, recipient_count = $4, updated_at = now() where id = $1 and workspace_id = $2",
          [data.id, workspaceId, String(providerId), recipientCount],
        );
      }
      await brevoRequest(apiKey, `/emailCampaigns/${providerId}/sendNow`, "POST");
      await sql.query(
        `update marketing_campaigns
         set status = 'queued', recipient_count = $3, queued_at = now(), last_error = null, updated_at = now()
         where id = $1 and workspace_id = $2`,
        [data.id, workspaceId, recipientCount],
      );
      return { status: "queued" as const, recipientCount };
    } catch (error) {
      const message = error instanceof Error ? error.message : "Campaign delivery failed.";
      const safeMessage = message.startsWith("Brevo ") || message.startsWith("There are ")
        ? message
        : "Brevo couldn’t prepare this campaign. Check the API key, sender, list ID, and contact attributes.";
      await sql.query(
        `update marketing_campaigns set status = 'failed', last_error = $3, updated_at = now()
         where id = $1 and workspace_id = $2`,
        [data.id, workspaceId, safeMessage.slice(0, 240)],
      );
      throw new Error(safeMessage);
    }
  });
