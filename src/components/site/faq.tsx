import { ChevronDown } from "lucide-react";
import type { faqs } from "@/lib/content";

export function FaqList({
  items,
  heading = "Questions",
}: {
  items: typeof faqs;
  heading?: string;
}) {
  if (!items.length) return null;
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{heading}</h2>
      <div className="mt-4 divide-y divide-line rounded-3xl border border-line bg-card px-5">
        {items.map((item) => (
          <details key={item.id} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown
                className="size-4 shrink-0 text-mute transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
