import { Link } from "@tanstack/react-router";
import { company } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label={company.name}>
      <img src="/media/mark.png" alt="" className="h-9 w-auto" />
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          tone === "paper" ? "text-paper" : "text-ink",
        )}
      >
        {company.wordLeft}
        <span className="wordmark-iq">{company.wordRight}</span>
      </span>
    </Link>
  );
}
