import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BusinessInfo } from "@/components/site/business-info";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { company, site, steps } from "@/lib/content";
import { track } from "@/lib/analytics";
import { absoluteUrl, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

const path = "/digital-marketing-software-delhi-ncr";
const title = "Digital Marketing & Software Development in Delhi NCR | MKSAnalytIQ";
const description =
  "MKSAnalytIQ is a Noida-based digital marketing and software development company serving businesses across Delhi NCR with websites, apps, custom software, AI and growth services.";

const questions = [
  {
    id: "ncr-office",
    q: "Where is MKSAnalytIQ based?",
    a: "The studio is at C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306, India.",
    tags: ["ncr"],
  },
  {
    id: "ncr-branches",
    q: "Do you have offices in Delhi, Gurugram or other NCR cities?",
    a: "Delhi, Gurugram, Ghaziabad, Faridabad and Greater Noida are served from the Noida studio, with calls and WhatsApp when a visit is not needed.",
    tags: ["ncr"],
  },
  {
    id: "ncr-services",
    q: "What can you do for a business in Delhi NCR?",
    a: "Digital marketing, websites and web applications, custom software, app development and AI development. Social media and event management are available when they are part of the brief. The scope is written before work starts.",
    tags: ["ncr"],
  },
  {
    id: "ncr-visit",
    q: "Do I need to visit Noida to start a project?",
    a: "No. A visit helps when you want one, and the address is public. Otherwise the same brief can start on a call or WhatsApp. The written scope does not depend on which NCR city the business is in.",
    tags: ["ncr"],
  },
];

const offers = [
  {
    slug: "digital-marketing",
    title: "Digital marketing in Delhi NCR",
    label: "Digital marketing services",
    text: "Performance marketing, Google Ads, Meta Ads, SEO, content and reporting for a business that sells in Noida, Delhi, Gurugram or another NCR city. The page and the follow-up path are part of the same scope.",
  },
  {
    slug: "web-development",
    title: "Web development in Delhi NCR",
    label: "Web development services",
    text: "Business websites, landing pages, e-commerce sites and web applications. The build is done from the Noida studio. There is no separate web team in each city.",
  },
  {
    slug: "software-development",
    title: "Software development in Delhi NCR",
    label: "Custom software development",
    text: "Custom software, SaaS products, dashboards and the APIs behind them. You approve what is included, including a repository when that is part of the agreement.",
  },
  {
    slug: "app-development",
    title: "App development in Delhi NCR",
    label: "App development",
    text: "Android, iOS and cross-platform business apps, with an admin panel and API when the app has to share data with a site or another system.",
  },
  {
    slug: "ai-development",
    title: "AI development and automation in Delhi NCR",
    label: "AI development",
    text: "Chatbots, workflow automation and AI features inside a product a person still reviews. This is scoped software, not a claim of a proprietary model.",
  },
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
            MKSANALYTIQ is based in Noida and serves businesses across Delhi NCR and India. The studio is at{" "}
            {company.addressOneLine}. Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad are served from that
            studio. There is no other office.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mute">
            Based in Noida • Serving Delhi NCR and India
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact" onClick={() => track("quote_click", { source: "delhi-ncr" })}>
                Book Free Consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <WhatsAppButton source="delhi-ncr" message="Hello, I need help with a project in Delhi NCR." />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          {offers.map((item) => (
            <article key={item.slug} className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.text}</p>
              <Link
                to="/services/$service"
                params={{ service: item.slug }}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary"
              >
                {item.label}
              </Link>
            </article>
          ))}
        </div>
        <div className="lg:col-span-2">
          <BusinessInfo source="delhi-ncr" />
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">How projects are handled</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
            A Delhi NCR brief uses the same sequence as any other project. Distance does not add an office, and it
            does not skip the written scope. The fuller version of this is on the{" "}
            <Link to="/process" className="font-semibold text-primary">
              process page
            </Link>
            .
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n} className="rounded-3xl border border-line p-4">
                <p className="font-display text-2xl font-extrabold text-primary">{step.n}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <FaqList items={questions} />
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-mute">
          Based in Noida • Serving Delhi NCR and India
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/contact" onClick={() => track("quote_click", { source: "delhi-ncr-end" })}>
              Book Free Consultation <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="line">
            <Link to="/portfolio">View the portfolio</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
