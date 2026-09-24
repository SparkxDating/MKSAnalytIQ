import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/lead-form";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";
import { site } from "@/lib/content";

const path = "/seo-services-noida";
const title = "SEO Services in Noida | MKSAnalytIQ";
const description =
  "SEO and content from MKSAnalytIQ in Sector 8, Noida: service pages, on-page structure and reporting for Delhi NCR businesses. No ranking guarantee.";

const questions = [
  {
    id: "seo-what",
    q: "What does SEO work include?",
    a: "A written scope can include service pages, headings, internal links and a monthly read of what was published. It does not promise a Google position.",
    tags: ["seo"],
  },
  {
    id: "seo-where",
    q: "Where is the studio?",
    a: "C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306. That is the only office. Delhi NCR businesses are served from there.",
    tags: ["seo"],
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
          provider: { "@id": `${site.url}/#organization` },
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Noida</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">SEO services in Noida</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            MKSAnalytIQ plans the pages people should find, then writes them so they match the offer. The studio is in
            Sector 8 and works with businesses across Delhi NCR. Paid search, when you want it, sits with{" "}
            <Link to="/services/$service" params={{ service: "digital-marketing" }} className="font-semibold text-primary">
              digital marketing
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
              The site and the sales conversation describe different offers, so search traffic has nowhere useful to land.
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
          <LeadForm source="seo-noida" />
        </div>
      </section>
    </SiteShell>
  );
}
