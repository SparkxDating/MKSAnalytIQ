import { useState } from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, LockKeyhole, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/shell";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Studio sign in | MKSAnalytIQ" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Login,
});

function Login() {
  const { user, isPending } = useCurrentUserState();
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");

  if (isPending) {
    return <SiteShell cta={false}><section className="mx-auto max-w-lg px-5 py-24 text-center text-mute">Checking your session…</section></SiteShell>;
  }
  if (user) return <Navigate to="/studio" />;

  return (
    <SiteShell cta={false}>
      <section className="mx-auto grid min-h-[68vh] max-w-5xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" aria-hidden /> Back to MKSAnalytIQ
          </Link>
          <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="size-3.5" aria-hidden /> Private workspace
          </p>
          <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">Your email marketing desk.</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mute">
            Manage opted-in contacts, prepare campaigns, and keep every send under your control.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-card p-6 shadow-xl shadow-ink/5 sm:p-8">
          <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <LockKeyhole className="size-5" aria-hidden />
          </div>
          <h2 className="mt-5 text-xl font-bold">Sign in to continue</h2>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            Use the Google account authorized for the MKSAnalytIQ studio.
          </p>
          {error ? <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-800" role="alert">{error}</p> : null}
          {!authEnabled ? (
            <p className="mt-5 rounded-xl bg-paper p-4 text-sm leading-relaxed text-mute">
              Sign-in is not enabled for this deployment, so the private studio is unavailable.
            </p>
          ) : (
            <div className="mt-6 space-y-3">
              {GROK_PROVIDERS.filter((provider) => provider.idp === "google").map((provider) => (
                <button
                  key={provider.providerId}
                  type="button"
                  disabled={Boolean(busy)}
                  onClick={() => {
                    setError("");
                    setBusy(provider.providerId);
                    void signIn(provider.providerId, { callbackURL: "/studio", errorCallbackURL: "/login" })
                      .catch((cause: unknown) => {
                        setError(cause instanceof Error ? cause.message : "Sign-in failed. Please try again.");
                        setBusy("");
                      });
                  }}
                  className="flex h-12 w-full items-center justify-between rounded-xl border border-line px-4 text-sm font-semibold transition hover:border-primary/40 hover:bg-paper disabled:cursor-wait disabled:opacity-60"
                >
                  <span>{busy === provider.providerId ? "Opening sign-in…" : `Continue with ${provider.label}`}</span>
                  <ArrowRight className="size-4 text-primary" aria-hidden />
                </button>
              ))}
            </div>
          )}
          <p className="mt-6 text-xs leading-relaxed text-mute">
            This area is private. Only approved workspace members can view contact details or send campaigns.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
