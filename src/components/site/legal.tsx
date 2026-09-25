import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { company, site } from "@/lib/content";
import { SiteShell } from "./shell";

export function LegalLayout({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <SiteShell cta={false}>
      <article className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{kicker}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-mute">Last updated {site.legalUpdated}. This page is a plain-language notice, not legal advice.</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-mute [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_strong]:text-ink">
          {children}
        </div>
        <p className="mt-10 text-sm leading-relaxed">
          {company.name}
          <br />
          {company.addressOneLine}
          <br />
          <a
            className="font-semibold text-primary"
            href={`mailto:${company.email}`}
            onClick={() => track("email_click", { source: "legal" })}
          >
            {company.email}
          </a>
          <br />
          <a
            className="font-semibold text-primary"
            href={`tel:${company.phoneTel}`}
            onClick={() => track("call_click", { source: "legal" })}
          >
            {company.phoneDisplay}
          </a>
        </p>
      </article>
    </SiteShell>
  );
}
