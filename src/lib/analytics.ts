export const analyticsEvents = [
  "page_view",
  "hero_cta_click",
  "whatsapp_click",
  "call_click",
  "quote_click",
  "consultation_click",
  "service_view",
  "service_page_view",
  "case_study_view",
  "portfolio_project_click",
  "contact_form_start",
  "contact_form_submit",
  "lead_form_submit",
  "cta_click",
  "directions_click",
] as const;

export type AnalyticsEventName = (typeof analyticsEvents)[number];

export type AnalyticsProps = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

/**
 * Provider-agnostic events. No names, emails, phone numbers or message text.
 * If `gtag` or `dataLayer` exists on the page, events are forwarded. Otherwise
 * they stay on a `mks-analytics` CustomEvent so a provider can be attached later.
 */
export function track(name: AnalyticsEventName, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;

  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined) clean[key] = value;
  }

  const detail = { event: name, ...clean };
  window.dispatchEvent(new CustomEvent("mks-analytics", { detail }));
  forward(name, clean);
  if (name === "contact_form_submit") forward("lead_form_submit", clean);
  if (name === "hero_cta_click" || name === "quote_click") {
    forward("cta_click", clean);
    forward("consultation_click", clean);
  }
  if (name === "service_view") forward("service_page_view", clean);
}

function forward(name: string, clean: Record<string, string | number | boolean>) {
  const detail = { event: name, ...clean };
  const host = window as AnalyticsWindow;
  if (Array.isArray(host.dataLayer) || typeof host.gtag === "function") {
    host.dataLayer = host.dataLayer ?? [];
    host.dataLayer.push(detail);
  }
  if (typeof host.gtag === "function") {
    host.gtag("event", name, clean);
  }
}
