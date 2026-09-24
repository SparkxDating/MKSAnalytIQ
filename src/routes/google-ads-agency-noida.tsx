import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/lead-form";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { site } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

const path = "/google-ads-agency-noida";
const title = "Google Ads Agency in Noida | MKSAnalytIQ";
const description =
  "Google Ads and landing pages from MKSAnalytIQ in Sector 8, Noida. Spend, tracking and the page are scoped together for Delhi NCR businesses.";

const questions = [
  {
    id: "ads-what",
    q: "Do you manage Google Ads in Noida?",
    a: "Yes, when the written scope includes them. A typical brief can cover Google Ads, a landing page, conversion tracking and a monthly read of spend. Results are not promised in advance.",
    tags: ["ads"],
  },
];

export const Route = createFileRoute("/google-ads-agency-noida")({
  head: () => pageMeta({ title, description, path }),
  component: AdsPage,
});

function AdsPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Google Ads in Noida", path }])} />
      <JsonLd data={faqSchema(questions)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads in Noida",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Noida</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Google Ads for Noida businesses</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Campaigns are planned with the page they send people to. MKSAnalytIQ is based at C-81, Sector 8, Noida, and
            this work is part of{" "}
            <Link to="/services/$service" params={{ service: "digital-marketing" }} className="font-semibold text-primary">
              digital marketing
            </Link>
            . Meta Ads can be added in the same scope when you want them.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <article className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-2xl font-extrabold">What a scope can include</h2>
            <h3 className="mt-6 font-bold">{questions[0].q}</h3>
            <p className="mt-1 text-sm leading-relaxed text-mute">{questions[0].a}</p>
          </article>
        </div>
        <div className="lg:col-span-2">
          <LeadForm source="ads-noida" />
        </div>
      </section>
    </SiteShell>
  );
}
