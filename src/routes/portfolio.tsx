import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/project-card";
import { SiteShell } from "@/components/site/shell";
import { company, projects } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — MKSAnalytIQ" },
      {
        name: "description",
        content:
          "Products and platforms built by MKSAnalytIQ, published on GitHub under SparkxDating.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Projects that make an impact
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Public software from the studio’s GitHub, {company.githubHandle}. Client marketing and
            private event work isn’t listed here — ask on a call and we’ll walk through relevant examples.
          </p>
          <a className="mt-4 inline-block text-sm font-semibold text-primary" href={company.github}>
            All repositories
          </a>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <div className="h-16 md:hidden" />
    </SiteShell>
  );
}
