import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "./button";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (sessionStorage.getItem("mks-exit") === "1") return;
    const onOut = (event: MouseEvent) => {
      if (event.clientY > 8 || event.relatedTarget) return;
      sessionStorage.setItem("mks-exit", "1");
      setOpen(true);
    };
    document.documentElement.addEventListener("mouseout", onOut);
    return () => document.documentElement.removeEventListener("mouseout", onOut);
  }, []);

  useEffect(() => {
    if (!open) return;
    panel.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-ink/50 p-4 sm:place-items-center">
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        tabIndex={-1}
        className="w-full max-w-md rounded-3xl bg-card p-6 text-ink shadow-2xl outline-none"
      >
        <h2 id="exit-title" className="text-2xl font-extrabold">
          Free website and SEO audit
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-mute">
          Ask for a look at the site and the search basics. We’ll reply from the Noida studio. This is a conversation, not a
          published ranking or a guaranteed result.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link
              to="/contact"
              onClick={() => {
                track("quote_click", { source: "exit" });
                setOpen(false);
              }}
            >
              Request the audit
            </Link>
          </Button>
          <Button type="button" variant="line" onClick={() => setOpen(false)}>
            Not now
          </Button>
        </div>
      </div>
    </div>
  );
}