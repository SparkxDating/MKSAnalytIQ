import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary text-card shadow-sm hover:bg-deep focus-visible:outline-primary",
  ghost:
    "border border-paper/30 bg-transparent text-paper hover:bg-paper/10 focus-visible:outline-paper",
  line: "border border-line bg-card text-ink hover:border-primary/40 hover:bg-paper focus-visible:outline-primary",
  soft: "bg-ink text-paper hover:bg-navy focus-visible:outline-primary",
} as const;

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  asChild,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
