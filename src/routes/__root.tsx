import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/shell";
import { businessGraph } from "@/lib/seo";
import appCss from "../styles.css?url";

const description =
  "MKSANALYTIQ is a Noida-based digital marketing, web development, software, app and AI development company serving businesses across Delhi NCR and India.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MKSANALYTIQ | Digital Marketing & Software Development Company in Noida" },
      { name: "description", content: description },
      { name: "theme-color", content: "#071426" },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400..700;1,400..700&family=Outfit:wght@500;600;700;800&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  const schema = businessGraph(description);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <SiteShell cta={false}>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-mute">That address isn’t on this site.</p>
        <Link to="/" className="mt-6 inline-flex h-12 items-center font-semibold text-primary">
          Back to home
        </Link>
      </section>
    </SiteShell>
  );
}

