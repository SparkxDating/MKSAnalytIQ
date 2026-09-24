import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BusinessInfo } from "@/components/site/business-info";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { company, site } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

const path = "/digital-marketing-software-delhi-ncr";
const title = "Digital Marketing & Software Development in Delhi NCR | MKSANALYTIQ";
const description =
  "MKSANALYTIQ is a Noida-based digital marketing and software development company serving businesses across Delhi NCR with websites, apps, custom software, AI and growth services.";

const questions = [
  {
    id: "ncr-office",
    q: "Where is MKSAnalytIQ based?",
    a: "The office is at C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306, India. That is the only office.",
    tags: ["ncr"],
  },
  {
    id: "ncr-branches",
    q: "Do you have offices in Delhi, Gurugram or other NCR cities?",
    a: "No. Noida, Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad are places the studio serves. They are not additional offices. Work is done from Noida, with calls and WhatsApp when a visit is not needed.",
    tags: ["ncr"],
  },
  {
    id: "ncr-services",
    q: "What can you do for a business in Delhi NCR?",
    a: "Digital marketing, websites and web applications, custom software, app development and AI development. Social media and event management are available when they are part of the brief. The scope is written before work starts.",
    tags: ["ncr"],
  },
];

const offers = [
  { slug: "digital-marketing", label: "digital marketing services" },
  { slug: "web-development", label: "web development services" },
  { slug: "software-development", label: "custom software development" },
  { slug: "app-development", label: "app development" },
  { slug: "ai-development", label: "AI development" },
] as const;

export const Route = createFileRoute("/digital-marketing-software-delhi-ncr")({
  head: () => pageMeta({ title, description, path }),
  component: DelhiNcrPage,
});

function DelhiNcrPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Delhi NCR", path },
        ])}
      />
      <JsonLd data={faqSchema(questions)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: absoluteUrl(path),
          isPartOf: { "@id": `${site.url}/#website` },
          about: { "@id": `${site.url}/#localbusiness` },
        }}
      />

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Delhi NCR</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Digital Marketing & Software Development for Delhi NCR
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            MKSAnalytIQ is based at {company.addressOneLine}. From that Noida studio, the team works with businesses
            across Delhi NCR and elsewhere in India. There is no second office.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="line">
              <Link to="/portfolio">View the portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-extrabold tracking-tight">Where the work goes</h2>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            Service areas include Noida, Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad, and projects also
            run elsewhere in India. A city in that list is a place we can work with a business. It is not a claim of a
            local branch.
          </p>
          <h2 className="mt-10 text-3xl font-extrabold tracking-tight">What that work usually is</h2>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            Most briefs are a mix of growth and a product: a site or app that can take an enquiry, and the marketing
            that sends people there. Pick the practice that matches the job, or start with a conversation and we will
            say if it is a fit.
          </p>
          <ul className="mt-5 space-y-2 text-sm font-semibold">
            {offers.map((item) => (
              <li key={item.slug}>
                <Link to="/services/$service" params={{ service: item.slug }} className="text-primary hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <BusinessInfo source="delhi-ncr" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={questions} />
      </section>
    </SiteShell>
  );
}
