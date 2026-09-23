import { createFileRoute } from "@tanstack/react-router";
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
      title: "Work — Software, Campaigns & Events | MKSAnalytIQ",
      description:
        "Public software, campaign and event projects from MKSAnalytIQ. Client retainers stay private. Repositories are listed under the configured GitHub account.",
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
            Projects that make an impact
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Public software from the studio’s GitHub, {company.githubHandle}. Client marketing and private event work
            isn’t listed here — ask on a call and we’ll walk through relevant examples.
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
