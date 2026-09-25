import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";
import type { projects } from "@/lib/content";
import { Preview } from "./previews";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
      <Preview slug={project.slug} loading="lazy" />
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.kind}</p>
        <h3 className="mt-1 font-display text-lg font-bold">
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="hover:text-primary"
            onClick={() => track("portfolio_project_click", { project: project.slug, source: "card-title" })}
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technology">
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold">
          <Link
            to="/portfolio/$slug"
            params={{ slug: project.slug }}
            className="inline-flex h-11 items-center gap-1 text-primary"
            onClick={() => track("portfolio_project_click", { project: project.slug, source: "card" })}
          >
            View project <ArrowRight className="size-4" aria-hidden />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              className="inline-flex h-11 items-center gap-1 text-ink hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              className="inline-flex h-11 items-center gap-1 text-ink hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <ArrowUpRight className="size-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
