import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/shell";
import { businessGraph } from "@/lib/seo";
import appCss from "../styles.css?url";

const description =
  "MKSANALYTIQ is a Noida-based technology and digital growth studio offering digital marketing, web development, software, app and AI solutions across Delhi NCR and India.";

function analyticsScripts() {
  const scripts: { children: string }[] = [];
  const gtm = import.meta.env.VITE_GTM_ID;
  const pixel = import.meta.env.VITE_META_PIXEL_ID;
  if (typeof gtm === "string" && /^GTM-[A-Z0-9]+$/.test(gtm)) {
    scripts.push({
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`,
    });
  }
  if (typeof pixel === "string" && /^\d{5,20}$/.test(pixel)) {
    scripts.push({
      children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`,
    });
  }
  return scripts;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MKSANALYTIQ | Digital Marketing & Software Development Company in Noida" },
      { name: "description", content: description },
      { name: "theme-color", content: "#f7fbff" },
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
    scripts: analyticsScripts(),
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

