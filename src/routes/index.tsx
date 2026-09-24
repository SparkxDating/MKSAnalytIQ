import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code2,
  Compass,
  Cpu,
  Map,
  Megaphone,
  Rocket,
  Smartphone,
  Sparkles,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/site/button";
import { FaqList } from "@/components/site/faq";
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
  "MKSAnalytIQ is a digital marketing agency in Noida Sector 8 for SEO, Google Ads, social media, websites and software across Delhi NCR.";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Digital Marketing Agency in Noida Sector 8 | MKSAnalytIQ",
      description,
      path: "/",
    }),
  component: Home,
});

const services = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    text: "SEO, Google Ads, Meta Ads, social media, content and lead generation.",
    icon: Megaphone,
    glow: "from-fuchsia-500/18 to-violet-500/5",
    iconBg: "bg-fuchsia-500/20 text-fuchsia-200",
  },
  {
    title: "Web Development",
    slug: "web-development",
    text: "Business websites, web applications, ecommerce and custom digital experiences.",
    icon: Code2,
    glow: "from-blue-500/18 to-cyan-500/5",
    iconBg: "bg-blue-500/20 text-blue-200",
  },
  {
    title: "Software Development",
    slug: "software-development",
    text: "Custom software, SaaS, dashboards, APIs and business automation.",
    icon: Target,
    glow: "from-amber-500/18 to-orange-500/5",
    iconBg: "bg-orange-500/20 text-orange-200",
  },
  {
    title: "App Development",
    slug: "app-development",
    text: "Android, iOS and cross-platform mobile applications.",
    icon: Smartphone,
    glow: "from-teal-500/18 to-emerald-500/5",
    iconBg: "bg-emerald-500/20 text-emerald-200",
  },
  {
    title: "AI & Automation",
    slug: "ai-development",
    text: "AI applications, chatbots, automation workflows and intelligent business solutions.",
    icon: Brain,
    glow: "from-indigo-500/18 to-violet-500/5",
    iconBg: "bg-violet-500/20 text-violet-200",
  },
] as const;

const featuredSlugs = ["shortgen", "taxpilot", "influencer-os"] as const;

const featured = featuredSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const stackNames = new Set(projects.flatMap((project) => project.stack));
const stackCatalog = [
  ["Next.js", "Next.js"],
  ["TypeScript", "TypeScript"],
  ["Python", "Python"],
  ["NestJS", "NestJS"],
  ["PostgreSQL", "Postgres"],
  ["Prisma", "Prisma"],
  ["Expo", "Expo"],
  ["Supabase", "Supabase"],
  ["Swift", "Swift"],
  ["Kotlin", "Kotlin"],
  ["JavaScript", "JavaScript"],
] as const;
const technologies = stackCatalog.filter(([, key]) => stackNames.has(key)).map(([label]) => label);

const homeSteps: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  { n: "01", title: "Understand", text: "Your goals & challenges", icon: UserRound },
  { n: "02", title: "Plan", text: "Strategy & roadmap", icon: Map },
  { n: "03", title: "Build", text: "Design & development", icon: Code2 },
  { n: "04", title: "Launch", text: "Testing & deployment", icon: Rocket },
  { n: "05", title: "Grow", text: "Ongoing support & optimization", icon: Sparkles },
];

const trust = [
  { icon: Compass, title: "Strategy", text: "First" },
  { icon: Cpu, title: "Technology", text: "Driven" },
  { icon: Target, title: "Growth", text: "Focused" },
  { icon: Sparkles, title: "Noida Based", text: "Pan India" },
];

const floats: {
  title: string;
  icon: LucideIcon;
  className: string;
  delay: string;
  z: number;
  rotate: number;
  rx: number;
  ry: number;
  scale: number;
}[] = [
  { title: "AI & Automation", icon: Brain, className: "left-[26%] top-[2%]", delay: "0.2s", z: -48, rotate: -6, rx: 10, ry: -8, scale: 0.9 },
  { title: "Web Development", icon: Code2, className: "right-[1%] top-[8%]", delay: "1.1s", z: -18, rotate: 7, rx: 8, ry: 10, scale: 0.94 },
  { title: "Software Development", icon: Target, className: "right-[4%] top-[40%]", delay: "0.6s", z: 28, rotate: 4, rx: 4, ry: 12, scale: 1 },
  { title: "Digital Marketing", icon: Megaphone, className: "left-[0%] bottom-[20%]", delay: "0s", z: 70, rotate: -8, rx: 2, ry: -12, scale: 1.05 },
  { title: "App Development", icon: Smartphone, className: "left-[8%] bottom-[2%]", delay: "1.5s", z: 92, rotate: -3, rx: 0, ry: -6, scale: 1.06 },
];

function Home() {
  return (
    <SiteShell cta={false} tone="night">
      <JsonLd data={faqSchema(homeFaqs)} />
      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-[20%] rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute right-10 top-16 h-64 w-64 rounded-full bg-violet-600/16 blur-3xl" />
          <div className="absolute bottom-16 right-1/3 h-28 w-56 rounded-full bg-cyan-400/6 blur-3xl" />
          <div className="tech-grid absolute inset-0 opacity-[0.16]" />
          <span className="absolute left-[18%] top-24 size-1 rounded-full bg-white/50" />
          <span className="absolute right-[22%] top-40 size-1 rounded-full bg-cyan-200/70" />
          <span className="absolute right-[12%] top-64 size-1.5 rounded-full bg-violet-200/50" />
          <span className="absolute left-[42%] top-[28rem] size-1 rounded-full bg-white/40" />
        </div>

        <section className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-4 pt-6 sm:pt-8 lg:grid-cols-2 lg:gap-4 lg:pb-2 lg:pt-6">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" aria-hidden />
              Technology + Digital Growth • Noida
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.35rem]">
              Build Digital.
              <span className="mt-1 block bg-gradient-to-r from-[#4d8dff] to-[#9a6bff] bg-clip-text text-transparent">
                Grow Smarter.
              </span>
            </h1>
            <p className="mt-5 max-w-[33.5rem] text-base leading-relaxed text-white/70">
              Need more qualified enquiries, or a digital product your team can use? MKSAnalytIQ brings marketing and
              technology together for businesses in Noida, Delhi NCR, and across India. Explore our{" "}
              <Link to="/digital-marketing-software-delhi-ncr" className="text-white underline decoration-white/30 underline-offset-4">
                Delhi NCR services
              </Link>{" "}
              or browse our{" "}
              <Link to="/portfolio" className="text-white underline decoration-white/30 underline-offset-4">
                selected work
              </Link>
              .
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="border-0 bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white shadow-[0_0_28px_rgba(70,110,255,0.4)] hover:brightness-110"
              >
                <Link to="/contact" onClick={() => track("hero_cta_click", { source: "hero" })}>
                Request Free Consultation <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <WhatsAppButton source="hero" variant="ghost">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
              {trust.map((item) => (
                <li key={item.title} className="flex items-start gap-2 text-xs sm:text-sm">
                  <item.icon className="mt-0.5 size-3.5 shrink-0 text-cyan-200/90" aria-hidden />
                  <span>
                    <span className="block font-semibold text-white">{item.title}</span>
                    <span className="text-white/55">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </section>

        <section className="relative mx-auto max-w-6xl px-5 pb-4 pt-1">
          <dl className="stats-panel glass-card grid overflow-hidden rounded-[1.6rem] sm:grid-cols-2 lg:grid-cols-5">
            <Stat kicker="01" title="Strategy. Build. Grow." text="One team for product + growth." />
            <Stat kicker="5+" title="Core Services" text="Marketing through AI." />
            <Stat kicker="End to End" title="Digital & Tech Solutions" text="" />
            <Stat kicker="Noida" title="Based" text="" />
            <Stat kicker="Delhi NCR & India" title="Service Coverage" text="" />
          </dl>
        </section>
      </div>

      <section id="solutions" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              What we do
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Our Core Services</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              From digital marketing to custom software, we help businesses plan, build and grow with the right mix of
              strategy, technology and creative execution. In Noida that includes{" "}
              <Link to="/seo-services-noida" className="text-white underline decoration-white/30 underline-offset-4">
                SEO
              </Link>{" "}
              and{" "}
              <Link to="/google-ads-agency-noida" className="text-white underline decoration-white/30 underline-offset-4">
                Google Ads
              </Link>
              .
            </p>
          </div>
          <Button asChild variant="ghost" className="bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white hover:brightness-110">
            <Link to="/services">
              Explore All Services <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to="/services/$service"
                params={{ service: service.slug }}
                className="svc-card glass-card group relative flex h-full min-h-72 flex-col overflow-hidden rounded-3xl p-5"
              >
                <span className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${service.glow}`} aria-hidden />
                <span className={`svc-icon relative grid size-14 place-items-center rounded-2xl ${service.iconBg}`}>
                  <service.icon className="size-7" aria-hidden />
                </span>
                <h3 className="relative mt-8 font-display text-lg font-bold">{service.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/60">{service.text}</p>
                <span className="relative mt-6 grid size-8 place-items-center rounded-full border border-white/15 text-white/80">
                  <ArrowRight className="size-4" aria-hidden />
                  <span className="sr-only">Open {service.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-white/55">
          <Link to="/services/$service" params={{ service: "social-media" }} className="font-semibold text-white">
            Social media
          </Link>{" "}
          can be scoped on its own. Event management is available when the brief needs it.
        </p>
      </section>

      <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-10">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Real Projects.
              <span className="block">Real Solutions.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              A look at some of the products and platforms we’ve built across industries.
            </p>
            <Button asChild className="mt-6 border-0 bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white hover:brightness-110">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <ul className="flex gap-4 overflow-x-auto pb-2 lg:col-span-8 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {featured.map((project) => (
              <li key={project.slug} className="w-[78%] shrink-0 sm:w-[46%] lg:w-auto">
                <article className="work-card glass-card group flex h-full flex-col overflow-hidden rounded-3xl">
                  <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="relative block">
                    <Preview slug={project.slug} loading="lazy" className="h-56 rounded-t-3xl sm:h-60" />
                    <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur">
                      <ArrowRight className="size-4" aria-hidden />
                      <span className="sr-only">View {project.name}</span>
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-display text-lg font-bold">
                      <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="hover:text-cyan-100">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-white/55">{project.kind}</p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{project.summary}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: project.slug }}
                        className="inline-flex min-h-11 items-center gap-1 text-white"
                      >
                        Project details <ArrowRight className="size-4" aria-hidden />
                      </Link>
                      {project.live ? (
                        <a
                          href={project.live}
                          className="inline-flex min-h-11 items-center gap-1 text-white/75 hover:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live demo <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      ) : null}
                      {project.github ? (
                        <a
                          href={project.github}
                          className="inline-flex min-h-11 items-center gap-1 text-white/75 hover:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              Our process
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">From Idea to Impact</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              A clear, collaborative process to turn your ideas into a scoped digital product. The same five steps are
              written up on the{" "}
              <Link to="/process" className="font-semibold text-white">
                process page
              </Link>
              .
            </p>
          </div>
          <ol className="grid gap-6 lg:col-span-8 lg:grid-cols-5">
            {homeSteps.map((step, index) => (
              <li key={step.n} className="relative border-l border-cyan-300/25 pl-4 lg:border-0 lg:pl-0">
                {index < homeSteps.length - 1 ? (
                  <span
                    className="absolute left-10 top-6 hidden h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-cyan-300/80 to-transparent shadow-[0_0_8px_rgba(103,232,249,0.6)] lg:block"
                    aria-hidden
                  />
                ) : null}
                <span className="relative grid size-12 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-400/10 text-cyan-100 shadow-[0_0_22px_rgba(80,180,255,0.28)]">
                  <step.icon className="size-4" aria-hidden />
                </span>
                <p className="mt-3 text-xs font-semibold text-white/45">{step.n}</p>
                <h3 className="mt-1 font-display text-base font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              Technology
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
              Modern Stack.
              <span className="block">Real Solutions.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Tools named on published studio projects. Nothing is listed here that those projects do not already use.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-8">
            {technologies.map((name) => (
              <li key={name} className="glass-card flex h-24 flex-col items-center justify-center gap-2 rounded-2xl text-center">
                <TechMark name={name} />
                <span className="font-display text-xs font-bold text-white">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="glass-card relative overflow-hidden rounded-[2rem] border-white/15 px-5 py-8 shadow-[0_0_60px_rgba(60,100,255,0.12)] sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-violet-600/15" aria-hidden />
          <div className="pointer-events-none absolute -left-4 bottom-0 hidden h-56 w-56 lg:block" aria-hidden>
            <div className="absolute left-8 top-16 h-28 w-24 rotate-12 rounded-3xl bg-gradient-to-br from-cyan-200/80 to-blue-700/20 shadow-[0_20px_40px_rgba(40,80,200,0.35)]" />
            <div className="absolute left-20 top-6 h-24 w-20 -rotate-12 rounded-2xl bg-gradient-to-br from-violet-300/70 to-blue-950/50" />
            <div className="absolute left-4 top-6 h-16 w-16 rotate-45 rounded-xl bg-gradient-to-br from-white/30 to-cyan-500/10" />
          </div>
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl lg:pl-40">
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s Build Something Great</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                Ready to grow your business with digital marketing, web development, software, apps or AI? Let’s discuss
                your project.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="border-0 bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white shadow-[0_0_28px_rgba(70,110,255,0.4)] hover:brightness-110"
                >
                  <Link to="/contact" onClick={() => track("quote_click", { source: "home-final" })}>
                    Request Free Consultation <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <WhatsAppButton source="home-final" variant="ghost">
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-3 text-sm leading-relaxed text-white/80 backdrop-blur">
                <span className="block font-semibold text-white">Based in Noida</span>
                Serving Delhi NCR and India
              </p>
              <div className="globe relative size-24 shrink-0 overflow-hidden rounded-full sm:size-36" aria-hidden>
                <div className="globe-spin absolute inset-0">
                  <div className="absolute left-1/2 top-2 h-[92%] w-10 -translate-x-1/2 rounded-full border border-white/25" />
                  <div className="absolute left-2 top-1/2 h-10 w-[92%] -translate-y-1/2 rounded-full border border-white/20" />
                  <div className="absolute inset-5 rounded-full border border-cyan-100/25" />
                </div>
                <div className="absolute inset-x-3 top-1/2 h-px bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={homeFaqs} heading="FAQ" />
      </section>
      <Testimonials />
    </SiteShell>
  );
}

function Stat({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="border-white/10 px-5 py-5 sm:border-l sm:first:border-l-0">
      <dt className="font-display text-2xl font-extrabold tracking-tight text-white">{kicker}</dt>
      <dd className="mt-1 text-sm font-semibold text-white/90">{title}</dd>
      {text ? <dd className="mt-1 text-xs leading-relaxed text-white/50">{text}</dd> : null}
    </div>
  );
}

function TechMark({ name }: { name: string }) {
  const marks: Record<string, string> = {
    "Next.js": "N",
    TypeScript: "TS",
    Python: "Py",
    NestJS: "Ne",
    PostgreSQL: "Pg",
    Prisma: "Pr",
    Expo: "Ex",
    Supabase: "Sb",
    Swift: "Sw",
    Kotlin: "Kt",
    JavaScript: "JS",
  };
  return (
    <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 font-display text-xs font-extrabold text-cyan-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
      {marks[name] ?? name.slice(0, 2)}
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="home-stage relative mx-auto h-[360px] w-full max-w-xl sm:h-[440px] lg:h-[500px] lg:max-w-none" aria-hidden>
      <div className="absolute bottom-6 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border border-cyan-200/25" />
      <div className="absolute bottom-4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-blue-400/15" />
      <div className="laptop absolute bottom-8 left-1/2 w-[88%] max-w-[30rem] -translate-x-1/2">
        <div className="rounded-t-[1.35rem] border border-cyan-100/25 bg-gradient-to-b from-slate-400/70 to-[#090f1c] p-2 shadow-[0_28px_50px_rgba(0,0,0,0.45)]">
          <div className="laptop-screen relative aspect-video overflow-hidden rounded-xl">
            <img
              src="/media/work/shortgen.jpg"
              alt=""
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/50 via-transparent to-white/5" aria-hidden />
            <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-[#050816]/75 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur">
              Selected project · ShortGen
            </span>
          </div>
        </div>
        <div className="relative mx-auto h-4 w-[114%] -translate-x-[6%] rounded-b-2xl bg-gradient-to-b from-slate-300/70 via-slate-600 to-[#05070d] shadow-[0_18px_24px_rgba(0,0,0,0.5)]">
          <span className="absolute inset-x-6 top-1.5 h-px bg-white/25" />
          <span className="absolute left-[18%] top-1 flex gap-1">
            <span className="h-1 w-3 rounded-sm bg-slate-900/40" />
            <span className="h-1 w-3 rounded-sm bg-slate-900/40" />
            <span className="h-1 w-3 rounded-sm bg-slate-900/40" />
          </span>
          <span className="absolute left-1/2 top-1 h-1 w-14 -translate-x-1/2 rounded-full bg-slate-950/60" />
        </div>
        <div className="mx-auto h-2.5 w-32 rounded-b-md bg-[#070b14]" />
      </div>
      {floats.map((card) => (
        <div
          key={card.title}
          className={`float-card absolute hidden w-36 rounded-2xl p-3 lg:block ${card.className}`}
          style={{
            transform: `translateZ(${card.z}px) rotateX(${card.rx}deg) rotateY(${card.ry}deg) rotate(${card.rotate}deg) scale(${card.scale})`,
            animationDelay: card.delay,
          }}
        >
          <span className="grid size-7 place-items-center rounded-lg border border-white/10 bg-white/10 text-cyan-100">
            <card.icon className="size-3.5" />
          </span>
          <p className="mt-2 text-xs font-semibold leading-snug text-white">{card.title}</p>
        </div>
      ))}
    </div>
  );
}
