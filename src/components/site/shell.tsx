import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics";
import { company, footerCompany, nav, services } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Button } from "./button";
import { FinalCta } from "./final-cta";
import { Logo } from "./logo";
import { WhatsAppButton } from "./whatsapp";

export function SiteShell({ children, cta = true }: { children: ReactNode; cta?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === path) return;
    lastPath.current = path;
    track("page_view", { path });
  }, [path]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

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
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={"hash" in item ? item.hash : undefined}
                  aria-current={active ? "page" : undefined}
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
            <WhatsAppButton source="nav" className="hidden h-11 px-4 xl:inline-flex" />
            <Button asChild className="hidden h-11 lg:inline-flex">
              <Link to="/contact" onClick={() => track("quote_click", { source: "nav" })}>
                Start a Project
              </Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-line bg-card px-5 py-3 lg:hidden" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                className="flex h-12 items-center border-b border-line text-base font-medium last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <WhatsAppButton source="nav-menu" className="w-full" />
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => track("quote_click", { source: "nav-menu" })}>
                  Start a Project
                </Link>
              </Button>
            </div>
          </nav>
        ) : null}
      </header>
      <main id="main">
        {children}
        <div className="h-16 md:hidden" aria-hidden />
      </main>
      {cta ? <FinalCta /> : null}
      <footer className="border-t border-line bg-ink pb-24 text-paper md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: service.slug }}
                    className="text-paper/80 hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerCompany.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-paper/80 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Talk</p>
            <address className="mt-3 text-sm not-italic leading-relaxed text-paper/80">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-accent"
                  href={`tel:${company.phoneTel}`}
                  onClick={() => track("call_click", { source: "footer" })}
                >
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent"
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "footer" })}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={company.maps}>
                  Get Directions
                </a>
              </li>
              <li>
                <a className="hover:text-accent" href={company.github} target="_blank" rel="noopener noreferrer">
                  GitHub · {company.githubHandle}
                </a>
              </li>
              {company.hours ? <li className="text-paper/75">{company.hours}</li> : null}
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
            onClick={() => track("call_click", { source: "mobile-bar" })}
          >
            <Phone className="size-4" aria-hidden /> Call
          </a>
          <a
            href={company.whatsapp}
            className="inline-flex h-11 items-center justify-center rounded-full bg-paper text-sm font-semibold text-ink"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "mobile-bar" })}
          >
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-card"
            onClick={() => track("quote_click", { source: "mobile-bar" })}
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
