import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { z } from "zod";
import { BusinessInfo } from "@/components/site/business-info";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { track } from "@/lib/analytics";
import {
  budgetOptions,
  company,
  faqsFor,
  services,
  timelineOptions,
  whatsappHref,
} from "@/lib/content";
import { faqSchema, pageMeta } from "@/lib/seo";

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  company: z.string().trim().max(120, "Keep the business name under 120 characters."),
  phone: z
    .string()
    .trim()
    .refine((value) => !value || /^[6-9]\d{9}$/.test(value), "Use a 10-digit Indian mobile number."),
  email: z
    .string()
    .trim()
    .refine((value) => !value || z.email().safeParse(value).success, "Add a valid email address or leave this blank."),
  website: z
    .string()
    .trim()
    .max(200)
    .refine((value) => {
      if (!value) return true;
      if (value.startsWith("@") && value.length > 1 && !/\s/.test(value)) return true;
      return /^(https?:\/\/)?[^\s]+\.[^\s]{2,}$/i.test(value);
    }, "Add a website, domain, or @handle — or leave this blank."),
  service: z.string().min(1, "Pick a service."),
  budget: z.union([z.enum(budgetOptions), z.literal("")]),
  timeline: z.union([z.enum(timelineOptions), z.literal("")]),
  preferred: z.enum(["whatsapp", "email", "phone"], { message: "Choose how you prefer we reply." }),
  message: z.string().trim().min(12, "A sentence or two is enough — at least 12 characters."),
}).superRefine((data, context) => {
  if (!data.phone && !data.email) {
    context.addIssue({
      code: "custom",
      path: ["phone"],
      message: "Add a mobile number or email so we can reply.",
    });
  }
});

type Fields = z.infer<typeof schema>;
type FieldName = keyof Fields;

const questions = faqsFor("contact");

function enquiryServiceLabel(id: string) {
  if (id === "other" || id === "unsure") return "Other";
  if (id === "ai") return "AI Development & Automation";
  return services.find((item) => item.id === id)?.title ?? id;
}

const preferredLabels = {
  whatsapp: "WhatsApp",
  email: "Email",
  phone: "Phone call",
} as const;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    if (typeof search.service === "string" && search.service.length > 0) return { service: search.service };
    return {};
  },
  head: () =>
    pageMeta({
      title: "Contact MKSAnalytIQ | Start a Project Conversation",
      description:
        "Start a project conversation with MKSAnalytIQ in Noida. Send a short brief by WhatsApp or email, or call the studio.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const rawPreset = Route.useSearch().service ?? "";
  const preset = rawPreset === "unsure" ? "other" : rawPreset;
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "opened" | "duplicate">("idle");
  const started = useRef(false);
  const lastKey = useRef("");
  const [busy, setBusy] = useState(false);
  const draft = useRef<{ data: Fields; channel: "email" | "whatsapp" } | null>(null);

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("contact_form_start");
  }

  function openComposer(data: Fields, channel: "email" | "whatsapp") {
    const serviceLabel = enquiryServiceLabel(data.service);
    const preferred = preferredLabels[data.preferred];
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company || "—"}`,
      `Mobile: ${data.phone || "—"}`,
      `Email: ${data.email || "—"}`,
      `Website / Instagram: ${data.website || "—"}`,
      `Service: ${serviceLabel}`,
      `Budget: ${data.budget || "Not specified"}`,
      `Timeline: ${data.timeline || "Not specified"}`,
      `Preferred contact: ${preferred}`,
      "",
      data.message,
    ].join("\n");
    const href =
      channel === "whatsapp"
        ? whatsappHref(body)
        : `mailto:${company.email}?subject=${encodeURIComponent(`Project enquiry — ${serviceLabel}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const channel = submitter instanceof HTMLButtonElement && submitter.value === "email" ? "email" : "whatsapp";
    const data = Object.fromEntries(new FormData(event.currentTarget));
    if (typeof data.fax === "string" && data.fax.trim().length > 0) {
      setErrors({});
      setStatus("opened");
      return;
    }
    const parsed = schema.safeParse({
      ...data,
      website: typeof data.website === "string" ? data.website : "",
      preferred: typeof data.preferred === "string" ? data.preferred : "",
    });
    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as FieldName]) next[key as FieldName] = issue.message;
      }
      setErrors(next);
      setStatus("invalid");
      const first = Object.keys(next)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }

    const key = JSON.stringify([channel, parsed.data]);
    if (key === lastKey.current) {
      draft.current = { data: parsed.data, channel };
      setErrors({});
      setStatus("duplicate");
      return;
    }

    setBusy(true);
    lastKey.current = key;
    draft.current = { data: parsed.data, channel };
    setErrors({});
    setStatus("opened");
    track("contact_form_submit", {
      service: parsed.data.service,
      budget: parsed.data.budget || "not_specified",
      timeline: parsed.data.timeline || "not_specified",
      preferred: parsed.data.preferred,
      delivery_channel: channel,
    });
    if (channel === "email") track("email_click", { source: "contact-form" });
    openComposer(parsed.data, channel);
    window.setTimeout(() => setBusy(false), 2000);
  }

  return (
    <SiteShell cta={false}>
      <JsonLd data={faqSchema(questions)} />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Start a project conversation</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Share your name, what you need, and one way for us to reply. Continue in WhatsApp or prepare an email; this
            site does not store your brief.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <form
          onSubmit={onSubmit}
          onFocus={onStart}
          className="relative space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-6 lg:col-span-3"
          noValidate
          aria-busy={busy}
        >
          {status === "invalid" ? (
            <p className="rounded-2xl bg-paper p-4 text-sm text-ink" role="alert">
              Please fix the highlighted fields.
            </p>
          ) : null}
          <p className="text-sm leading-relaxed text-mute">
            Required: name, service, project description, how you prefer we reply, and either a mobile number or email.
            Business, website, budget and timing are optional. This page does not store the brief.
          </p>
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              Fax
              <input name="fax" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" name="name" error={errors.name} autoComplete="name" required />
            <Field id="company" label="Business / company (optional)" name="company" error={errors.company} autoComplete="organization" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="phone"
              label="Phone / WhatsApp"
              name="phone"
              error={errors.phone}
              inputMode="numeric"
              autoComplete="tel"
              placeholder="9560814623"
            />
            <Field id="email" label="Email" name="email" error={errors.email} type="email" autoComplete="email" />
          </div>
          <p className="-mt-2 text-xs text-mute">Enter at least one contact detail so we can reply.</p>
          <Field
            id="website"
            label="Website / Instagram (optional)"
            name="website"
            error={errors.website}
            autoComplete="url"
            placeholder="example.com or @handle"
          />
          <Select id="service" label="Service required" name="service" error={errors.service} defaultValue={preset} required>
            <option value="">Choose one</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {enquiryServiceLabel(service.id)}
              </option>
            ))}
            <option value="other">Other</option>
          </Select>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select id="budget" label="Budget range (optional)" name="budget" error={errors.budget} defaultValue="">
              <option value="">Choose one</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Select id="timeline" label="Timeline (optional)" name="timeline" error={errors.timeline} defaultValue="">
              <option value="">Choose one</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <Select id="preferred" label="Preferred contact method" name="preferred" error={errors.preferred} defaultValue="whatsapp" required>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
            <option value="phone">Phone call</option>
          </Select>
          <label className="block text-sm font-semibold" htmlFor="message">
            Project description <span className="text-primary">*</span>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-1.5 w-full rounded-2xl border border-line bg-paper px-3 py-3 text-sm font-normal"
              placeholder="What you’re trying to build, market or improve."
            />
            {errors.message ? (
              <span id="message-error" className="mt-1 block text-xs font-normal text-deep" role="alert">
                {errors.message}
              </span>
            ) : null}
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" name="channel" value="whatsapp" disabled={busy} className="flex-1">
              {busy ? "Opening…" : "Continue in WhatsApp"}
            </Button>
            <Button type="submit" name="channel" value="email" variant="line" disabled={busy} className="flex-1">
              {busy ? "Opening…" : "Prepare email"}
            </Button>
          </div>
          {status === "opened" ? (
            <p className="rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink" role="status">
              Your email or WhatsApp app should open with this brief. Review it there before you send. This website does
              not store the form. If nothing opened, use the button below.
            </p>
          ) : null}
          {status === "duplicate" ? (
            <div className="rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink" role="status">
              <p>This brief is already prepared, so it wasn’t opened again.</p>
              <button
                type="button"
                className="mt-3 font-semibold text-primary"
                onClick={() => {
                  if (draft.current) openComposer(draft.current.data, draft.current.channel);
                }}
              >
                {draft.current?.channel === "whatsapp" ? "Open WhatsApp again" : "Open the email draft again"}
              </button>
            </div>
          ) : null}
        </form>
        <div className="lg:col-span-2">
          <BusinessInfo source="contact" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="overflow-hidden rounded-3xl border border-line bg-card">
          <div className="flex flex-wrap items-end justify-between gap-3 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-lg font-bold">Find the studio</h2>
              <p className="mt-1 text-sm text-mute">{company.addressOneLine}</p>
            </div>
            <a
              className="inline-flex h-11 items-center text-sm font-semibold text-primary"
              href={company.maps}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("directions_click", { source: "contact-map" })}
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="MKSAnalytIQ studio on Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(company.addressOneLine)}&z=16&output=embed`}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={questions} heading="Before you write" />
      </section>
    </SiteShell>
  );
}

function Field({
  id,
  label,
  name,
  error,
  required,
  ...props
}: {
  id: string;
  label: string;
  name: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm font-semibold" htmlFor={id}>
      {label}
      <input
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 h-12 w-full rounded-2xl border border-line bg-paper px-3 text-sm font-normal"
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-xs font-normal text-deep" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function Select({
  id,
  label,
  name,
  error,
  defaultValue,
  required = false,
  children,
}: {
  id: string;
  label: string;
  name: string;
  error?: string;
  defaultValue?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold" htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 h-12 w-full rounded-2xl border border-line bg-paper px-3 text-sm font-normal"
      >
        {children}
      </select>
      {error ? (
        <span id={`${id}-error`} className="mt-1 block text-xs font-normal text-deep" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
