import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { company, nav } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { Logo } from "./logo";

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative py-2 text-sm font-medium text-mute transition-colors hover:text-ink",
                    active && "text-ink",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">
                Get a Quote <span aria-hidden>→</span>
              </Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line bg-card px-5 py-3 md:hidden" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center border-b border-line text-base font-medium last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        ) : null}
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-line bg-ink pb-24 text-paper md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo tone="paper" />
            <p className="mt-4 text-sm leading-relaxed text-paper/75">
              Digital marketing, social media, events and software — from a studio in Sector 8, Noida.
            </p>
            <p className="mt-4 text-sm text-paper/75">
              Proprietor
              <br />
              <span className="font-medium text-paper">{company.proprietor}</span>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Visit</p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-paper/80">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a className="mt-3 inline-block text-sm font-medium text-accent" href={company.maps}>
              Open in Maps
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Talk</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="hover:text-accent" href={`tel:${company.phoneTel}`}>
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={company.whatsapp}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={company.github}>
                  GitHub · {company.githubHandle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Pages</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/80 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/10">
          <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-paper/55">
            © {new Date().getFullYear()} {company.name}. Proprietorship of {company.proprietor}.
          </p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card p-2 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${company.phoneTel}`}
            className="inline-flex h-11 items-center justify-center gap-1 rounded-full bg-paper text-sm font-semibold text-ink"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href={company.whatsapp}
            className="inline-flex h-11 items-center justify-center rounded-full bg-paper text-sm font-semibold text-ink"
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-card"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
