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
  contactMethods,
  faqsFor,
  services,
  timelineOptions,
} from "@/lib/content";
import { faqSchema, pageMeta } from "@/lib/seo";

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  company: z.string().trim().min(2, "Add the company or business name."),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Use a 10-digit Indian mobile number."),
  email: z.string().trim().email("That email doesn’t look right."),
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
  budget: z.enum(budgetOptions, { error: "Pick a budget range." }),
  timeline: z.enum(timelineOptions, { error: "Pick a timeline." }),
  contactMethod: z.enum(contactMethods, { error: "Pick how we should reply." }),
  message: z.string().trim().min(12, "A sentence or two is enough — at least 12 characters."),
});

type Fields = z.infer<typeof schema>;
type FieldName = keyof Fields;

const questions = faqsFor("contact");

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    if (typeof search.service === "string" && search.service.length > 0) return { service: search.service };
    return {};
  },
  head: () =>
    pageMeta({
      title: "Book a Free Consultation | MKSAnalytIQ Noida",
      description:
        "Book a free consultation with MKSAnalytIQ in Sector 8, Noida. Call, WhatsApp or email Manoj Kumar Singh.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const preset = Route.useSearch().service ?? "";
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "opened" | "duplicate">("idle");
  const started = useRef(false);
  const lastKey = useRef("");
  const [busy, setBusy] = useState(false);
  const draft = useRef<Fields | null>(null);

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("contact_form_start");
  }

  function openDraft(data: Fields) {
    const serviceLabel = services.find((item) => item.id === data.service)?.title ?? data.service;
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Mobile: ${data.phone}`,
      `Email: ${data.email}`,
      `Website / Instagram: ${data.website || "—"}`,
      `Service: ${serviceLabel}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      `Preferred contact: ${data.contactMethod}`,
      "",
      data.message,
    ].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Consultation — ${serviceLabel}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = schema.safeParse({
      ...data,
      website: typeof data.website === "string" ? data.website : "",
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

    const key = JSON.stringify(parsed.data);
    if (key === lastKey.current) {
      draft.current = parsed.data;
      setErrors({});
      setStatus("duplicate");
      return;
    }

    setBusy(true);
    lastKey.current = key;
    draft.current = parsed.data;
    setErrors({});
    setStatus("opened");
    track("contact_form_submit", {
      service: parsed.data.service,
      budget: parsed.data.budget,
      timeline: parsed.data.timeline,
      contact_method: parsed.data.contactMethod,
    });
    openDraft(parsed.data);
    window.setTimeout(() => setBusy(false), 2000);
  }

  return (
    <SiteShell cta={false}>
      <JsonLd data={faqSchema(questions)} />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Book a free consultation</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            The form opens an email to {company.email}. Nothing is stored on this site. You can also call or use
            WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <form
          onSubmit={onSubmit}
          onFocus={onStart}
          className="space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-6 lg:col-span-3"
          noValidate
        >
          {status === "invalid" ? (
            <p className="rounded-2xl bg-paper p-4 text-sm text-ink" role="alert">
              Please fix the highlighted fields.
            </p>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Name" name="name" error={errors.name} autoComplete="name" />
            <Field id="company" label="Company / Business" name="company" error={errors.company} autoComplete="organization" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="phone"
              label="Mobile"
              name="phone"
              error={errors.phone}
              inputMode="numeric"
              autoComplete="tel"
              placeholder="9560814623"
            />
            <Field id="email" label="Email" name="email" error={errors.email} type="email" autoComplete="email" />
          </div>
          <Field
            id="website"
            label="Website / Instagram"
            name="website"
            error={errors.website}
            autoComplete="url"
            placeholder="example.com or @handle"
          />
          <Select id="service" label="Service" name="service" error={errors.service} defaultValue={preset}>
            <option value="">Choose one</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </Select>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select id="budget" label="Budget range" name="budget" error={errors.budget} defaultValue="">
              <option value="">Choose one</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Select id="timeline" label="Timeline" name="timeline" error={errors.timeline} defaultValue="">
              <option value="">Choose one</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <fieldset>
            <legend className="text-sm font-semibold">Preferred contact method</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <label key={method} className="flex h-12 items-center gap-2 rounded-2xl border border-line bg-paper px-3 text-sm font-medium">
                  <input type="radio" name="contactMethod" value={method} className="size-4 accent-primary" />
                  {method}
                </label>
              ))}
            </div>
            {errors.contactMethod ? (
              <span id="contactMethod-error" className="mt-1 block text-xs font-normal text-deep" role="alert">
                {errors.contactMethod}
              </span>
            ) : null}
          </fieldset>
          <label className="block text-sm font-semibold" htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              rows={5}
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
          <Button type="submit" disabled={busy}>
            Book Free Consultation
          </Button>
          {status === "opened" ? (
            <p className="rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink" role="status">
              Your email app should open with this brief to {company.email}. If it doesn’t, send the same details
              yourself. We don’t store the form on this website.
            </p>
          ) : null}
          {status === "duplicate" ? (
            <div className="rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink" role="status">
              <p>This brief is already prepared, so it wasn’t opened again.</p>
              <button
                type="button"
                className="mt-3 font-semibold text-primary"
                onClick={() => {
                  if (draft.current) openDraft(draft.current);
                }}
              >
                Open the email draft again
              </button>
            </div>
          ) : null}
        </form>
        <div className="lg:col-span-2">
          <BusinessInfo source="contact" />
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
  children,
}: {
  id: string;
  label: string;
  name: string;
  error?: string;
  defaultValue?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-semibold" htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
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
