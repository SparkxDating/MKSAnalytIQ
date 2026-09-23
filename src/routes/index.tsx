import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarRange, Code2, Megaphone, Share2 } from "lucide-react";
import { Button } from "@/components/site/button";
import { HeroStage } from "@/components/site/hero-stage";
import { ProjectCard } from "@/components/site/project-card";
import { SiteShell } from "@/components/site/shell";
import { projects, services, stats } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
});

const icons = {
  marketing: Megaphone,
  social: Share2,
  events: CalendarRange,
  software: Code2,
};

function Home() {
  return (
    <SiteShell>
      <section className="hero-wash text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Ideas · Strategy · Growth
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We turn ideas into <span className="text-accent">digital success</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg">
              Marketing, social, events and software for businesses that want a clearer offer and a
              faster way to grow. Studio in Sector 8, Noida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/portfolio">Our Work</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["MK", "AS", "RP", "NK"].map((initials) => (
                  <span
                    key={initials}
                    className="flex size-10 items-center justify-center rounded-full border-2 border-ink bg-navy text-xs font-bold"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold">100+ happy clients</span>
                <span className="block text-paper/70">Growing businesses together</span>
              </p>
            </div>
          </div>
          <HeroStage />
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
          <div className="flex max-w-sm items-center gap-4">
            <p className="text-sm leading-relaxed text-mute">
              Creativity, technology and a report you can read. One studio for the campaign and the
              thing it points to.
            </p>
            <Link
              to="/services"
              className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-primary text-card sm:inline-flex"
              aria-label="View all services"
            >
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <Link
                key={service.id}
                to="/services"
                hash={service.id}
                className="group flex flex-col rounded-3xl border border-line bg-card p-5 transition-shadow duration-200 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-paper text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{service.blurb}</p>
                <span className="mt-5 inline-flex size-9 items-center justify-center rounded-full border border-line text-mute transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your digital <span className="text-primary">growth partner</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              MKSAnalytIQ helps businesses build a stronger presence — marketing that can be measured,
              social that sounds like you, events that actually fill the room, and software your team
              keeps after launch. The aim is simple: real results, and a relationship that lasts longer
              than one campaign.
            </p>
            <Button asChild className="mt-6">
              <Link to="/about">
                Learn More <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative lg:col-span-5">
            <img
              src="/media/office.jpg"
              alt="Conference room at the MKSAnalytIQ studio"
              className="h-72 w-full rounded-3xl object-cover sm:h-80"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-card/95 px-3 py-2 shadow-lg">
              <img src="/media/mark.png" alt="" className="h-8 w-auto" />
              <span className="font-display text-sm font-extrabold">
                MKS<span className="wordmark-iq">ANALYTIQ</span>
              </span>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <li key={stat.label} className="rounded-2xl border border-line bg-paper px-4 py-3">
                <p className="font-display text-xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm text-mute">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our work</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Projects that <span className="text-primary">make an impact</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
              Software and campaign systems published by the studio. Marketing retainers stay private
              to each client.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:hidden">
          View all projects <ArrowRight className="size-4" />
        </Link>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <img src="/media/ridge.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Let’s work together</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to take your business to the <span className="text-accent">next level</span>?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">
              Tell us the project. We’ll say plainly whether we should do it, and what the first month looks like.
            </p>
          </div>
          <Button asChild className="bg-card text-ink hover:bg-paper">
            <Link to="/contact">
              Get a Free Consultation <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
      <div className="h-16 md:hidden" />
    </SiteShell>
  );
}
