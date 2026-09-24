import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
  "MKSANALYTIQ is a Noida-based digital marketing, web development, software, app and AI development company serving businesses across Delhi NCR and India.";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "MKSANALYTIQ | Digital Marketing & Software Development Company in Noida",
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
    glow: "from-fuchsia-500/30 to-violet-500/10",
    iconBg: "bg-fuchsia-500/20 text-fuchsia-200",
  },
  {
    title: "Web Development",
    slug: "web-development",
    text: "Business websites, web applications, ecommerce and custom digital experiences.",
    icon: Code2,
    glow: "from-blue-500/30 to-cyan-500/10",
    iconBg: "bg-blue-500/20 text-blue-200",
  },
  {
    title: "Software Development",
    slug: "software-development",
    text: "Custom software, SaaS, dashboards, APIs and business automation.",
    icon: Target,
    glow: "from-orange-500/30 to-amber-500/10",
    iconBg: "bg-orange-500/20 text-orange-200",
  },
  {
    title: "App Development",
    slug: "app-development",
    text: "Android, iOS and cross-platform mobile applications.",
    icon: Smartphone,
    glow: "from-emerald-500/30 to-teal-500/10",
    iconBg: "bg-emerald-500/20 text-emerald-200",
  },
  {
    title: "AI & Automation",
    slug: "ai-development",
    text: "AI applications, chatbots, automation workflows and intelligent business solutions.",
    icon: Brain,
    glow: "from-violet-500/30 to-indigo-500/10",
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

const floats: { title: string; icon: LucideIcon; className: string; delay: string }[] = [
  { title: "Digital Marketing", icon: Megaphone, className: "left-[2%] top-[18%] -rotate-6", delay: "0s" },
  { title: "Web Development", icon: Code2, className: "right-[0%] top-[8%] rotate-6", delay: "0.6s" },
  { title: "Software Development", icon: Target, className: "right-[4%] bottom-[16%] rotate-3", delay: "1.1s" },
  { title: "App Development", icon: Smartphone, className: "left-[6%] bottom-[18%] -rotate-3", delay: "0.4s" },
  { title: "AI & Automation", icon: Brain, className: "left-[28%] top-[2%] -rotate-2", delay: "1.4s" },
];

function Home() {
  return (
    <SiteShell cta={false} tone="night">
      <JsonLd data={faqSchema(homeFaqs)} />
      <div className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="tech-grid absolute inset-0 opacity-30" />
        </div>

        <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-8 sm:pt-12 lg:grid-cols-2 lg:gap-6 lg:pb-4 lg:pt-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden />
              Technology + Digital Growth • Noida
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Build Digital.
              <span className="mt-1 block bg-gradient-to-r from-[#4d8dff] to-[#9a6bff] bg-clip-text text-transparent">
                Grow Smarter.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              MKSANALYTIQ is a Noida-based technology and digital growth studio helping businesses across{" "}
              <Link to="/digital-marketing-software-delhi-ncr" className="text-white underline decoration-white/30 underline-offset-4">
                Delhi NCR
              </Link>{" "}
              and India with digital marketing, web development, software, apps and AI solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                className="border-0 bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white shadow-[0_0_28px_rgba(70,110,255,0.4)] hover:brightness-110"
              >
                <Link to="/contact" onClick={() => track("hero_cta_click", { source: "hero" })}>
                  Book Free Consultation <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <WhatsAppButton source="hero" variant="ghost">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trust.map((item) => (
                <li key={item.title} className="flex items-start gap-2 text-sm">
                  <item.icon className="mt-0.5 size-4 shrink-0 text-cyan-300" aria-hidden />
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

        <section className="relative mx-auto max-w-6xl px-5 pb-16">
          <dl className="glass-card grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-5">
            <Stat kicker="01" title="Strategy. Build. Grow." text="One team for product + growth." />
            <Stat kicker="5+" title="Core Services" text="Marketing through AI." />
            <Stat kicker="End to End" title="Digital & Tech Solutions" text="One written scope." />
            <Stat kicker="Noida" title="Based" text="Sector 8, the only office." />
            <Stat kicker="Delhi NCR & India" title="Service Coverage" text="No other offices." />
          </dl>
        </section>
      </div>

      <section id="solutions" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-8 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-200">
              What we do
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Our Core Services</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              From digital marketing to custom software, we help businesses plan, build and grow with the right mix of
              strategy, technology and creative execution.
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
                className="svc-card glass-card group relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl p-5"
              >
                <span className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${service.glow}`} aria-hidden />
                <span className={`svc-icon relative grid size-12 place-items-center rounded-2xl ${service.iconBg}`}>
                  <service.icon className="size-6" aria-hidden />
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

      <section id="work" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-14">
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
                <article className="glass-card overflow-hidden rounded-3xl">
                  <Link to="/portfolio/$slug" params={{ slug: project.slug }} className="block">
                    <Preview slug={project.slug} loading="lazy" className="h-44 sm:h-48" />
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold">{project.name}</h3>
                      <p className="mt-1 text-xs text-white/55">{project.kind}</p>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">{project.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                        View {project.name} <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
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
              <li key={step.n} className="relative">
                {index < homeSteps.length - 1 ? (
                  <span className="absolute left-8 top-5 hidden h-px w-[calc(100%-1rem)] bg-white/15 lg:block" aria-hidden />
                ) : null}
                <span className="relative grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
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
              <li key={name} className="glass-card flex h-24 flex-col items-center justify-center rounded-2xl text-center">
                <span className="font-display text-sm font-bold text-white">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="glass-card relative overflow-hidden rounded-[2rem] px-5 py-10 sm:px-10 lg:py-14">
          <div className="pointer-events-none absolute -left-8 bottom-0 hidden h-48 w-48 lg:block" aria-hidden>
            <div className="absolute left-6 top-8 h-28 w-28 rotate-12 rounded-3xl bg-gradient-to-br from-cyan-300/70 to-blue-700/30 blur-[1px]" />
            <div className="absolute left-16 top-2 h-20 w-20 -rotate-6 rounded-2xl bg-gradient-to-br from-violet-400/70 to-blue-900/40" />
          </div>
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl lg:pl-36">
              <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s Build Something Great</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Ready to grow your business with digital marketing, web development, software, apps or AI? Let’s discuss
                your project.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="border-0 bg-gradient-to-r from-[#2f6bff] to-[#7a4dff] text-white shadow-[0_0_28px_rgba(70,110,255,0.35)] hover:brightness-110"
                >
                  <Link to="/contact" onClick={() => track("quote_click", { source: "home-final" })}>
                    Book Free Consultation <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <WhatsAppButton source="home-final" variant="ghost">
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-white/80">
                <span className="block font-semibold text-white">Based in Noida</span>
                Serving Delhi NCR and India
              </p>
              <div className="globe relative grid size-28 shrink-0 place-items-center overflow-hidden rounded-full sm:size-36" aria-hidden>
                <div className="globe-spin absolute inset-3 rounded-full border border-cyan-200/30" />
                <div className="absolute inset-6 rounded-full border border-white/20" />
                <div className="absolute h-px w-full bg-white/25" />
                <div className="absolute h-full w-px bg-white/20" />
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
    <div className="bg-white/[0.02] px-5 py-6 sm:border-l sm:border-white/10 first:sm:border-l-0">
      <dt className="font-display text-2xl font-extrabold text-white">{kicker}</dt>
      <dd className="mt-1 text-sm font-semibold text-white/90">{title}</dd>
      <dd className="mt-1 text-xs leading-relaxed text-white/50">{text}</dd>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="home-stage relative mx-auto h-[420px] w-full max-w-xl sm:h-[480px]" aria-hidden>
      <div className="absolute inset-x-10 bottom-6 h-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full border border-cyan-300/30" />
      <div className="absolute bottom-6 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-blue-400/20" />
      <div className="laptop absolute bottom-16 left-1/2 w-64 -translate-x-1/2 sm:w-72">
        <div className="rounded-t-2xl border border-cyan-200/30 bg-[#07111f] p-2 shadow-[0_30px_80px_rgba(20,60,180,0.35)]">
          <div className="flex h-36 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#12306e] to-[#070d1c] sm:h-40">
            <span className="font-display text-5xl font-extrabold text-cyan-100">A</span>
            <span className="mt-1 text-xs font-semibold tracking-[0.2em] text-white">MKSANALYTIQ</span>
            <span className="mt-1 text-[10px] text-white/50">Ideas. Technology. Growth.</span>
          </div>
        </div>
        <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-gradient-to-b from-slate-300/70 to-slate-700/80" />
        <div className="mx-auto h-2 w-24 rounded-b-md bg-slate-500/70" />
      </div>
      {floats.map((card) => (
        <div
          key={card.title}
          className={`float-card glass-card absolute hidden w-36 rounded-2xl p-3 sm:block ${card.className}`}
          style={{ animationDelay: card.delay }}
        >
          <card.icon className="size-4 text-cyan-200" />
          <p className="mt-2 text-xs font-semibold leading-snug text-white">{card.title}</p>
        </div>
      ))}
    </div>
  );
}
