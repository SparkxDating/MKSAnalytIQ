import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/lead-form";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { company, site } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

const path = "/seo-services-noida";
const title = "SEO Services in Noida | MKSAnalytIQ";
const description =
  "SEO and content from MKSAnalytIQ in Sector 8, Noida: page plans, on-page structure and a monthly read for Delhi NCR businesses. No ranking guarantee.";

const questions = [
  {
    id: "seo-what",
    q: "What does SEO work include?",
    a: "A written scope can include a page plan, the copy for those pages, headings, internal links and a monthly note of what was published. It does not promise a Google position.",
    tags: ["seo"],
  },
  {
    id: "seo-who",
    q: "Who is this for?",
    a: "Businesses in Noida and across Delhi NCR that need search and the sales conversation to describe the same offer. Paid search can be added in the same scope.",
    tags: ["seo"],
  },
  {
    id: "seo-where",
    q: "Where is the studio?",
    a: "C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306. Delhi NCR businesses are served from that studio.",
    tags: ["seo"],
  },
];

const sections = [
  {
    title: "The problem",
    text: "The website and the sales conversation describe different offers, so a search visit has nowhere useful to land.",
  },
  {
    title: "What is included",
    text: "A page plan, the copy for those pages, headings, internal links to the related service, and a note of what changed. Google Ads are a separate line in the scope when you want them.",
  },
  {
    title: "How the work runs",
    text: "We write down the offer, list the pages that should exist, publish the ones you approve, and then read what was published. The same five steps are on the process page.",
  },
  {
    title: "How to start",
    text: "Send the current site, or say that one does not exist yet, and the offer you want found. You get a written scope before pages are published.",
  },
];

export const Route = createFileRoute("/seo-services-noida")({
  head: () => pageMeta({ title, description, path }),
  component: SeoNoidaPage,
});

function SeoNoidaPage() {
  return (
    <SiteShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "SEO in Noida", path }])} />
      <JsonLd data={faqSchema(questions)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SEO and content in Noida",
          description,
          url: absoluteUrl(path),
          areaServed: "Delhi NCR",
          provider: { "@id": `${site.url}/#organization` },
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Noida</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">SEO services in Noida</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            MKSAnalytIQ plans the pages a business should be found for, then writes them so they match the offer. The
            studio is at {company.addressOneLine} and takes this work for businesses across Delhi NCR. This page does
            not promise a ranking.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            SEO sits inside{" "}
            <Link to="/services/$service" params={{ service: "digital-marketing" }} className="font-semibold text-primary">
              digital marketing
            </Link>
            . A new site, when you need one, is{" "}
            <Link to="/services/$service" params={{ service: "web-development" }} className="font-semibold text-primary">
              web development
            </Link>
            . Paid search is covered on the{" "}
            <Link to="/google-ads-agency-noida" className="font-semibold text-primary">
              Google Ads page
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-line bg-card p-5">
              <h2 className="text-2xl font-extrabold">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{section.text}</p>
            </article>
          ))}
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
          <LeadForm source="seo-noida" />
        </div>
      </section>
    </SiteShell>
  );
}
