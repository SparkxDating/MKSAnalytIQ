import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarRange, Code2, Megaphone, Share2 } from "lucide-react";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { HeroStage } from "@/components/site/hero-stage";
import { JsonLd } from "@/components/site/json-ld";
import { ProcessSteps } from "@/components/site/process-steps";
import { ProjectBrowser } from "@/components/site/project-browser";
import { SiteShell } from "@/components/site/shell";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { WhySection } from "@/components/site/why";
import { track } from "@/lib/analytics";
import { faqsFor, hero, publishedStats, services, trustNotes, trustStatement } from "@/lib/content";
import { faqSchema, pageMeta } from "@/lib/seo";

const homeFaqs = faqsFor("home");
const description =
  "MKSAnalytIQ helps businesses generate leads, build their digital presence and launch digital products. Digital marketing, software and growth from a studio in Noida.";

export const Route = createFileRoute("/")({
  head: () => pageMeta({
    title: "Digital Marketing, Software & Growth Systems | MKSAnalytIQ Noida",
    description,
    path: "/",
  }),
  component: Home,
});

const icons = {
  marketing: Megaphone,
  social: Share2,
  events: CalendarRange,
  software: Code2,
};

const figures = publishedStats.length ? publishedStats : trustNotes;

function Home() {
  return (
    <SiteShell>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="hero-wash text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Noida · Marketing and technology
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">{hero.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild>
                <Link to="/contact" onClick={() => track("hero_cta_click", { source: "hero" })}>
                  {hero.primaryCta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <WhatsAppButton source="hero" variant="ghost" message="Hello, I’d like a free consultation.">
                {hero.secondaryCta}
              </WhatsAppButton>
            </div>
            <p className="mt-6 text-sm text-paper/75">{hero.trust}</p>
          </div>
          <HeroStage />
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">{trustStatement}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
            Campaigns, content, events and the software they point to — planned by the same studio in Sector 8, Noida.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((item) => (
              <li key={item.label} className="rounded-2xl border border-line bg-paper px-4 py-3">
                <p className="font-display text-xl font-extrabold text-primary">{item.value}</p>
                <p className="text-sm text-mute">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need to <span className="text-primary">build and grow online</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-mute">
            Creativity, technology and a report you can read. One studio for the campaign and the thing it points to.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <article key={service.id} className="flex flex-col rounded-3xl border border-line bg-card p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-paper text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{service.blurb}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-mute">Deliverables</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2 text-sm">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mute">
                  <span className="font-semibold text-ink">Suitable for: </span>
                  {service.suitable}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link
                      to="/contact"
                      search={{ service: service.id }}
                      onClick={() => track("quote_click", { source: `home-${service.id}` })}
                    >
                      {service.cta} <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="line">
                    <Link to="/services/$service" params={{ service: service.slug }}>
                      View service
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <WhySection />

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your digital <span className="text-primary">growth partner</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              MKSAnalytIQ helps businesses build a stronger presence — marketing that can be measured, social that
              sounds like you, events that actually fill the room, and software your team keeps after launch. The aim
              is simple: real results, and a relationship that lasts longer than one campaign.
            </p>
            <Button asChild className="mt-6">
              <Link to="/about">
                Learn More <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="/media/office.jpg"
              alt="Conference room at the MKSAnalytIQ studio"
              width={1792}
              height={1008}
              loading="lazy"
              decoding="async"
              className="h-72 w-full rounded-3xl object-cover sm:h-80"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-card/95 px-3 py-2 shadow-lg">
              <img src="/media/mark.png" alt="" width={808} height={572} className="h-8 w-auto" />
              <span className="font-display text-sm font-extrabold">
                MKS<span className="wordmark-iq">ANALYTIQ</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our process</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Our Process</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          Whether the job is a social retainer, a one-day event or a product build, the shape stays the same.
        </p>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Projects that <span className="text-primary">make an impact</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">
            Software and campaign systems published by the studio. Marketing retainers stay private to each client.
          </p>
        </div>
        <div className="mt-8">
          <ProjectBrowser />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={homeFaqs} heading="FAQ" />
      </section>

      <Testimonials />
    </SiteShell>
  );
}
