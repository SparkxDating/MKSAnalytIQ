import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics";
import { finalCta } from "@/lib/content";
import { Button } from "./button";
import { WhatsAppButton } from "./whatsapp";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper" aria-labelledby="final-cta-title">
      <img
        src="/media/ridge.jpg"
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 id="final-cta-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-paper/80 sm:text-base">{finalCta.text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-card text-ink hover:bg-paper">
            <Link to="/contact" onClick={() => track("quote_click", { source: "final" })}>
              {finalCta.primary} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <WhatsAppButton source="final" variant="ghost">
            {finalCta.secondary}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
