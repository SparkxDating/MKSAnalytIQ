import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { company } from "@/lib/content";
import appCss from "../styles.css?url";

const description =
  "MKSAnalytIQ is a Noida studio for digital marketing, social media, events, and software. Proprietor Manoj Kumar Singh.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MKSAnalytIQ — Ideas, strategy, growth" },
      { name: "description", content: description },
      { name: "theme-color", content: "#071426" },
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
});

function Root() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url: "https://mksanalytiq.example",
    image: "/media/logo.png",
    email: company.email,
    telephone: company.phoneTel,
    founder: company.proprietor,
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-81, C Block, Sector 8",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201306",
      addressCountry: "IN",
    },
    areaServed: "IN",
    description,
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Scripts />
      </body>
    </html>
  );
}
