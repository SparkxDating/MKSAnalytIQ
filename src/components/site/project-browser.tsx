import { useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/lib/content";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./project-card";

export function ProjectBrowser({
  initial = "all",
  limit,
}: {
  initial?: "all" | ProjectCategory;
  limit?: number;
}) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>(initial);
  const visible = useMemo(() => {
    const list = filter === "all" ? projects : projects.filter((project) => project.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {projectCategories.map((category) => {
          const selected = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={cn(
                "h-11 rounded-full border px-4 text-sm font-semibold transition-colors",
                selected
                  ? "border-primary bg-primary text-card"
                  : "border-line bg-card text-ink hover:border-primary/40",
              )}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>
      {visible.length ? (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug} className="rise">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded-3xl border border-line bg-card p-5 text-sm leading-relaxed text-mute">
          No public projects in this category yet. Client marketing and private event work stays off
          this list.
        </p>
      )}
    </div>
  );
}
