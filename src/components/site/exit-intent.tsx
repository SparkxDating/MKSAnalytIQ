import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function ExitIntent() {
  const [open, setOpen] = useState(false);

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-ink/50 p-4 sm:place-items-center" role="presentation">
      <div role="dialog" aria-labelledby="exit-title" className="w-full max-w-md rounded-3xl bg-card p-6 text-ink shadow-2xl">
        <h2 id="exit-title" className="text-2xl font-extrabold">
          Free website and SEO audit
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-mute">
          Ask for a look at the site and the search basics. We’ll reply from the Noida studio. This is a conversation, not a
          published ranking or a guaranteed result.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link to="/contact" onClick={() => setOpen(false)}>
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
