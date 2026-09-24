import { projects } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Preview({ slug, className }: { slug: string; className?: string }) {
  const name = projects.find((project) => project.slug === slug)?.name ?? "Project";
  return (
    <div className={cn("relative h-44 overflow-hidden bg-navy", className)}>
      <img
        src={`/media/work/${slug}.jpg`}
        alt={`${name} thumbnail`}
        width={1280}
        height={720}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
