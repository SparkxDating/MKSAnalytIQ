import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectBrowser } from "@/components/site/project-browser";
import { SiteShell } from "@/components/site/shell";
import { company, projectCategories, type ProjectCategory } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

const allowed = new Set(projectCategories.map((item) => item.id));

export const Route = createFileRoute("/portfolio/")({
  validateSearch: (search: Record<string, unknown>): { filter?: "all" | ProjectCategory } => {
    if (typeof search.filter === "string" && allowed.has(search.filter as "all" | ProjectCategory)) {
      return { filter: search.filter as "all" | ProjectCategory };
    }
    return {};
  },
  head: () =>
    pageMeta({
      title: "Portfolio — Public Products & Projects | MKSAnalytIQ",
      description:
        "Explore public work from MKSAnalytIQ. Project pages share documented scope, features and technology, with a live demo or repository when available.",
      path: "/portfolio",
    }),
  component: Portfolio,
});

function Portfolio() {
  const { filter } = Route.useSearch();
  return (
    <SiteShell>
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Work</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Selected work, shown in detail
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Browse public projects from the studio. Each project page covers its documented scope, features and
            technology, with a live demo or repository when one is available. Client results appear only when approved
            for sharing. Related work links to{" "}
            <Link to="/services/$service" params={{ service: "web-development" }} className="font-semibold text-primary">
              web development services
            </Link>
            ,{" "}
            <Link to="/services/$service" params={{ service: "software-development" }} className="font-semibold text-primary">
              custom software development
            </Link>
            ,{" "}
            <Link to="/services/$service" params={{ service: "digital-marketing" }} className="font-semibold text-primary">
              digital marketing services
            </Link>{" "}
            or{" "}
            <Link to="/services/$service" params={{ service: "ai-development" }} className="font-semibold text-primary">
              AI development
            </Link>{" "}
            where the project matches.
          </p>
          <a className="mt-4 inline-block text-sm font-semibold text-primary" href={company.github}>
            All repositories
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <ProjectBrowser initial={filter ?? "all"} />
      </section>
    </SiteShell>
  );
}
