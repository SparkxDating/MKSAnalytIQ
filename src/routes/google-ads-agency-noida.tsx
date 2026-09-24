import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/lead-form";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { company, site } from "@/lib/content";
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
  {
    id: "ads-meta",
    q: "Can Meta Ads be included?",
    a: "Yes. Meta Ads can sit in the same scope as Google Ads when you want both. What is included is listed before anything launches.",
    tags: ["ads"],
  },
  {
    id: "ads-where",
    q: "Where is the studio?",
    a: `The studio is at ${company.addressOneLine}. Campaigns for Delhi NCR businesses are run from there.`,
    tags: ["ads"],
  },
];

const included = [
  "Google Ads account structure for the offers you approve",
  "A landing page, or changes to a page you already have",
  "Conversion tracking for the form, call or WhatsApp you choose",
  "A monthly note of spend and enquiries, without invented totals",
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
          areaServed: "Delhi NCR",
          provider: { "@id": `${site.url}/#organization` },
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Noida</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Google Ads for Noida businesses
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Campaigns are planned with the page they send people to. MKSAnalytIQ is based at {company.addressOneLine}.
            This work is part of{" "}
            <Link to="/services/$service" params={{ service: "digital-marketing" }} className="font-semibold text-primary">
              digital marketing
            </Link>
            . Search pages that are not ads are on the{" "}
            <Link to="/seo-services-noida" className="font-semibold text-primary">
              SEO services page
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <article className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-2xl font-extrabold">The problem</h2>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Spend starts before the offer, the landing page and the tracking agree. Then it is hard to tell what an
              enquiry cost.
            </p>
          </article>
          <article className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-2xl font-extrabold">What a scope can include</h2>
            <ul className="mt-3 space-y-2 text-sm text-mute">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-2xl font-extrabold">How to start</h2>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Share the offer, whether a page already exists, and a budget range. You get a written scope before a
              campaign launches. The same steps are written up on the{" "}
              <Link to="/process" className="font-semibold text-primary">
                process page
              </Link>
              .
            </p>
          </article>
          <article className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-2xl font-extrabold">Questions</h2>
            {questions.map((item) => (
              <div key={item.id} className="mt-4">
                <h3 className="font-bold">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">{item.a}</p>
              </div>
            ))}
          </article>
        </div>
        <div className="lg:col-span-2">
          <LeadForm source="ads-noida" />
        </div>
      </section>
    </SiteShell>
  );
}
