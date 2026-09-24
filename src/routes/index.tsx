import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
import { HeroStage } from "@/components/site/hero-stage";
import { JsonLd } from "@/components/site/json-ld";
import { Preview } from "@/components/site/previews";
import { SiteShell } from "@/components/site/shell";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsAppButton } from "@/components/site/whatsapp";
import { track } from "@/lib/analytics";
import { faqsFor, projects } from "@/lib/content";
import { faqSchema, pageMeta } from "@/lib/seo";

const homeFaqs = faqsFor("home");
const description =
  "MKSAnalytIQ helps businesses generate leads, build their digital presence and launch digital products. Digital marketing, software and growth from a studio in Noida.";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Digital Marketing, Software & Growth Systems | MKSAnalytIQ Noida",
      description,
      path: "/",
    }),
  component: Home,
});

const growth = [
  { title: "Performance Marketing", to: "/services", hash: "marketing" },
  { title: "Social Media", to: "/services", hash: "social" },
  { title: "SEO & Content", to: "/services", hash: "marketing" },
  { title: "Analytics", to: "/services", hash: "marketing" },
] as const;

const technology = [
  { title: "Website Development", to: "/services", hash: "software" },
  { title: "Web Applications", to: "/services", hash: "software" },
  { title: "Mobile Apps", to: "/services", hash: "software" },
  { title: "SaaS Development", to: "/services", hash: "software" },
  { title: "AI & Automation", to: "/", hash: "technology" },
] as const;

const featuredSlugs = ["shortgen", "taxpilot", "influencer-os"] as const;

const featured = featuredSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const stackNames = new Set(projects.flatMap((project) => project.stack));
const technologies = [
  stackNames.has("Next.js") ? "Next.js" : "",
  stackNames.has("Next.js") ? "React" : "",
  stackNames.has("TypeScript") ? "TypeScript" : "",
  stackNames.has("Python") ? "Python" : "",
  stackNames.has("Postgres") ? "PostgreSQL" : "",
  projects.some((project) => `${project.name} ${project.summary} ${project.features.join(" ")}`.includes("AI"))
    ? "AI"
    : "",
].filter((name) => name.length > 0);

const reasons = [
  {
    title: "Strategy-first",
    text: "The offer, the audience and the scope are written down before anyone designs or codes.",
  },
  {
    title: "Technology-driven",
    text: "Websites, apps and automation sit next to the marketing, so the system does not depend on four vendors.",
  },
  {
    title: "Transparent",
    text: "Scopes, files and repositories stay with you. You see the work while it is being made.",
  },
  {
    title: "Built for growth",
    text: "Launch is the start. We keep what is working and change what is not.",
  },
];

const homeSteps = [
  { n: "01", title: "Discover", text: "The idea, the audience and what a useful first version looks like." },
  { n: "02", title: "Strategy", text: "Channels, product scope and a sequence you can approve." },
  { n: "03", title: "Design", text: "Interface, message and the path a person actually takes." },
  { n: "04", title: "Build", text: "Site, app, campaign or automation — in the open, not on the last day." },
  { n: "05", title: "Launch & Grow", text: "Ship it, watch what moves, and decide the next build." },
];

function Home() {
  return (
    <SiteShell cta={false}>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="hero-wash relative overflow-hidden text-paper">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Technology + Digital Growth · Noida
            </p>
            <h1 className="mt-5 max-w-full font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Build digital.
              <span className="mt-2 block text-accent">Grow smarter.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
              We build websites, apps, AI solutions and digital growth systems that help businesses move forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild>
                <Link to="/contact" onClick={() => track("hero_cta_click", { source: "hero" })}>
                  Start a Project <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#work">View Our Work</a>
              </Button>
            </div>
          </div>
          <HeroStage />
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <h2 className="max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            One team for the product and the growth.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            From digital strategy and customer acquisition to websites, apps, SaaS and AI automation — we help
            businesses build and grow their digital presence.
          </p>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">What we do</p>
        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Technology and digital growth.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ServiceGroup kicker="Digital Growth" index="01" tone="paper" items={growth} />
          <ServiceGroup kicker="Technology" index="02" tone="ink" items={technology} />
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Selected work</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                Selected work, built for real use.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
                Public products from the studio. The full list is on Work.
              </p>
            </div>
            <Link to="/portfolio" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
              All work <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featured.map((project, index) => (
              <article
                key={project.slug}
                className={
                  index === 0
                    ? "group overflow-hidden border border-line bg-paper transition-colors duration-200 hover:border-primary/40 lg:col-span-2 lg:grid lg:grid-cols-5"
                    : "group overflow-hidden border border-line bg-paper transition-colors duration-200 hover:border-primary/40"
                }
              >
                <Preview
                  slug={project.slug}
                  className={index === 0 ? "h-72 sm:h-96 lg:col-span-3 lg:h-full lg:min-h-96" : "h-64 sm:h-72"}
                />
                <div className={index === 0 ? "flex flex-col justify-end p-6 sm:p-8 lg:col-span-2" : "p-6"}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.kind}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{project.name}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-mute">{project.summary}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mute">
                    {project.stack.join(" · ")}
                  </p>
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: project.slug }}
                    className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-ink hover:text-primary"
                  >
                    View Case Study <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          A practical studio, from strategy to shipped product.
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="technology" className="scroll-mt-20 border-y border-line bg-ink text-paper">
        <div className="tech-grid">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Technology</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {technologies.map((name) => (
                <li key={name} className="font-display text-sm font-bold uppercase tracking-widest text-paper sm:text-base">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-2xl text-sm text-paper/65">From products the studio has shipped.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Process</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">How a project moves</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {homeSteps.map((step) => (
              <li key={step.n} className="border-t border-line pt-5">
                <p className="font-display text-3xl font-extrabold text-primary">{step.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Next</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          Let’s build something.
        </h2>
        <p className="mt-5 max-w-lg text-base text-mute">Have an idea, product or business you want to take online?</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild>
            <Link to="/contact" onClick={() => track("quote_click", { source: "home-final" })}>
              Start a Project <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <WhatsAppButton source="home-final" variant="line">
            WhatsApp Us
          </WhatsAppButton>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={homeFaqs} heading="FAQ" />
      </section>

      <Testimonials />
    </SiteShell>
  );
}

function ServiceGroup({
  kicker,
  index,
  tone,
  items,
}: {
  kicker: string;
  index: string;
  tone: "paper" | "ink";
  items: readonly { title: string; to: "/" | "/services"; hash: string }[];
}) {
  const dark = tone === "ink";
  return (
    <div className={dark ? "border border-ink bg-ink px-6 py-8 text-paper sm:px-8 sm:py-10" : "border border-line bg-card px-6 py-8 sm:px-8 sm:py-10"}>
      <p className={dark ? "text-xs font-semibold uppercase tracking-widest text-accent" : "text-xs font-semibold uppercase tracking-widest text-primary"}>
        {index}
      </p>
      <h3 className="mt-3 font-display text-2xl font-extrabold uppercase tracking-tight">{kicker}</h3>
      <ul className={dark ? "mt-6 border-t border-paper/15" : "mt-6 border-t border-line"}>
        {items.map((item) => (
          <li key={item.title}>
            <Link
              to={item.to}
              hash={item.hash}
              activeOptions={{ includeHash: true }}
              className={
                dark
                  ? "group flex min-h-14 items-center justify-between border-b border-paper/15 py-3 text-base font-semibold text-paper transition-colors duration-200 hover:text-accent"
                  : "group flex min-h-14 items-center justify-between border-b border-line py-3 text-base font-semibold transition-colors duration-200 hover:text-primary"
              }
            >
              {item.title}
              <ArrowRight
                className={
                  dark
                    ? "size-4 text-paper/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    : "size-4 text-mute transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
                }
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
