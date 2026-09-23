import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { z } from "zod";
import { Button } from "@/components/site/button";
import { SiteShell } from "@/components/site/shell";
import { company, faqs, services } from "@/lib/content";

const schema = z.object({
  name: z.string().trim().min(2, "Add your name."),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Use a 10-digit Indian mobile number."),
  email: z.string().trim().email("That email doesn’t look right."),
  service: z.string().min(1, "Pick a service."),
  message: z.string().trim().min(12, "A sentence or two is enough — at least 12 characters."),
});

type Fields = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    if (typeof search.service === "string" && search.service.length > 0) {
      return { service: search.service };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Contact — MKSAnalytIQ" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email MKSAnalytIQ in Sector 8, Noida. Proprietor Manoj Kumar Singh.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const preset = Route.useSearch().service ?? "";
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<Fields | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Fields]) next[key as keyof Fields] = issue.message;
      }
      setErrors(next);
      setSent(null);
      return;
    }
    setErrors({});
    setSent(parsed.data);
    const serviceLabel = services.find((item) => item.id === parsed.data.service)?.title ?? parsed.data.service;
    const body = [
      `Name: ${parsed.data.name}`,
      `Phone: ${parsed.data.phone}`,
      `Email: ${parsed.data.email}`,
      `Service: ${serviceLabel}`,
      "",
      parsed.data.message,
    ].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Quote request — ${serviceLabel}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get a free consultation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Write what you need. The form opens an email to {company.email} so nothing is stored on
            this site. Or skip the form and call.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-card p-5 sm:p-6 lg:col-span-3" noValidate>
          <Field label="Name" name="name" error={errors.name} autoComplete="name" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Mobile" name="phone" error={errors.phone} inputMode="numeric" autoComplete="tel" placeholder="9560814623" />
            <Field label="Email" name="email" error={errors.email} type="email" autoComplete="email" />
          </div>
          <label className="block text-sm font-semibold">
            Service
            <select
              name="service"
              defaultValue={preset}
              className="mt-1.5 h-12 w-full rounded-2xl border border-line bg-paper px-3 text-sm font-normal"
            >
              <option value="">Choose one</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
              <option value="unsure">Not sure yet</option>
            </select>
            {errors.service ? <span className="mt-1 block text-xs font-normal text-deep">{errors.service}</span> : null}
          </label>
          <label className="block text-sm font-semibold">
            What do you need?
            <textarea
              name="message"
              rows={5}
              className="mt-1.5 w-full rounded-2xl border border-line bg-paper px-3 py-3 text-sm font-normal"
              placeholder="Offer, city, and when you want it live."
            />
            {errors.message ? <span className="mt-1 block text-xs font-normal text-deep">{errors.message}</span> : null}
          </label>
          <Button type="submit">Send the brief</Button>
          {sent ? (
            <p className="rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink" role="status">
              Your email app should open with this brief to {company.email}. If it doesn’t, send it
              yourself — {sent.name}, {sent.phone}.
            </p>
          ) : null}
        </form>

        <aside className="space-y-4 lg:col-span-2">
          <a href={`tel:${company.phoneTel}`} className="flex gap-3 rounded-3xl border border-line bg-card p-4">
            <Phone className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-mute">Call</span>
              <span className="font-display text-lg font-bold">{company.phoneDisplay}</span>
            </span>
          </a>
          <a href={`mailto:${company.email}`} className="flex gap-3 rounded-3xl border border-line bg-card p-4">
            <Mail className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-mute">Email</span>
              <span className="font-semibold">{company.email}</span>
            </span>
          </a>
          <a href={company.maps} className="flex gap-3 rounded-3xl border border-line bg-card p-4">
            <MapPin className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-mute">Studio</span>
              <span className="text-sm leading-relaxed">{company.addressOneLine}</span>
            </span>
          </a>
          <a
            href={company.whatsapp}
            className="flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-card"
          >
            Message on WhatsApp
          </a>
          <img
            src="/media/event.jpg"
            alt="Event floor prepared before guests arrive"
            className="h-40 w-full rounded-3xl object-cover"
          />
        </aside>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="text-2xl font-extrabold">Before you write</h2>
        <div className="mt-4 divide-y divide-line rounded-3xl border border-line bg-card px-5">
          {faqs.map((item) => (
            <details key={item.q} className="py-4">
              <summary className="font-display text-base font-bold">{item.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </SiteShell>
  );
}

function Field({
  label,
  name,
  error,
  ...props
}: {
  label: string;
  name: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        name={name}
        className="mt-1.5 h-12 w-full rounded-2xl border border-line bg-paper px-3 text-sm font-normal"
        {...props}
      />
      {error ? <span className="mt-1 block text-xs font-normal text-deep">{error}</span> : null}
    </label>
  );
}
