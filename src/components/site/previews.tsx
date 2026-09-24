import { projects } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Preview({
  slug,
  className,
  loading = "eager",
}: {
  slug: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const project = projects.find((item) => item.slug === slug);
  const name = project?.name ?? "Project";
  const alt = project ? `${project.name}, a ${project.kind.toLowerCase()} project by MKSAnalytIQ` : `${name} project image`;
  return (
    <div className={cn("relative h-44 overflow-hidden bg-navy", className)}>
      <img
        src={`/media/work/${slug}.jpg`}
        alt={alt}
        width={1280}
        height={720}
        loading={loading}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
