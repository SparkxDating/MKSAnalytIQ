import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BusinessInfo } from "@/components/site/business-info";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { company, faqsFor, publishedStats, trustNotes } from "@/lib/content";
import { faqSchema, pageMeta } from "@/lib/seo";

const questions = faqsFor("about");
const figures = publishedStats.length ? publishedStats : trustNotes;

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About MKSAnalytIQ — Noida Studio",
      description:
        "MKSAnalytIQ is the proprietorship of Manoj Kumar Singh in Sector 8, Noida — digital marketing, social media, events and software.",
      path: "/about",
    }),
  component: About,
});

const beliefs = [
  {
    title: "One brief, several crafts",
    text: "A launch is not only a post, a site or a venue. We keep those pieces in the same conversation so the date, the message and the link agree.",
  },
  {
    title: "You can see the work",
    text: "Repos, ad accounts and content calendars sit with you. We don’t hide the files behind a login you can’t export.",
  },
  {
    title: "Noida, not nowhere",
    text: "You can visit C-81, C Block. Calls and WhatsApp cover the rest of the country when a visit isn’t practical.",
  },
];

function About() {
  return (
    <SiteShell>
      {questions.length ? <JsonLd data={faqSchema(questions)} /> : null}
      <section className="border-b border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">About</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              A Noida studio for growth you can explain
            </h1>
          </div>
          <p className="text-base leading-relaxed text-mute">
            MKSAnalytIQ is run by {company.proprietor}. The studio is in Sector 8, Noida, and works with businesses
            across Delhi NCR and India. The work is digital marketing, websites, software, apps and AI, plus social
            media and event management when the brief needs them.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-5">
        <img
          src="/media/office.jpg"
          alt="MKSAnalytIQ office in Noida"
          width={1280}
          height={720}
          className="h-80 w-full rounded-3xl object-cover lg:col-span-3 lg:h-full"
        />
        <div className="flex flex-col justify-center rounded-3xl bg-ink p-6 text-paper lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Proprietor</p>
          <h2 className="mt-3 text-3xl font-extrabold">{company.proprietor}</h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            Manoj leads client conversations himself — the brief, the quote and the handover. The studio publishes
            product software under the GitHub account {company.githubHandle}, alongside client work that stays off the
            public web.
          </p>
          <a className="mt-6 text-sm font-semibold text-accent" href={company.github}>
            github.com/{company.githubHandle}
          </a>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-line p-5">
              <p className="font-display text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-mute">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">How we think about the work</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {beliefs.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-card p-5">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-12 lg:grid-cols-2">
        <BusinessInfo source="about" />
        <div className="flex flex-col justify-between rounded-3xl bg-navy p-6 text-paper">
          <div>
            <h2 className="text-2xl font-extrabold">Bring the brief</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              A page, a month of social, an event date, or a product you want built. If it isn’t a fit, we’ll say so
              on the first call.
            </p>
          </div>
          <Button asChild className="mt-6 w-fit">
            <Link to="/contact">
              Request Free Consultation <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      {questions.length ? (
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <FaqList items={questions} />
        </section>
      ) : null}
    </SiteShell>
  );
}
