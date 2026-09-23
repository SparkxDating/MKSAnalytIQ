import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Preview } from "./previews";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
      <Preview slug={project.slug} />
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{project.kind}</p>
        <h3 className="mt-1 font-display text-lg font-bold">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={project.github}
            className={cn("inline-flex items-center gap-1 text-ink hover:text-primary")}
          >
            Repository <ArrowUpRight className="size-4" />
          </a>
          {project.live ? (
            <a href={project.live} className="inline-flex items-center gap-1 text-primary">
              Live <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
