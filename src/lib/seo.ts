import { company, site } from "@/lib/content";

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

/** Cities and regions MKSAnalytIQ serves. The studio address is in Noida. */
export function areaServedPlaces() {
  return [
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "Country", name: "India" },
  ];
}

export function businessGraph(description: string) {
  const origin = site.url;
  const organizationId = `${origin}/#organization`;
  const localId = `${origin}/#localbusiness`;
  const websiteId = `${origin}/#website`;
  const address = {
    "@type": "PostalAddress",
    streetAddress: "C-81, C Block, Sector 8",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201306",
    addressCountry: "IN",
  };
  const founder = {
    "@type": "Person",
    name: company.proprietor,
  };
  const logo = absoluteUrl("/media/logo.png");
  const image = absoluteUrl("/media/office.jpg");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: company.name,
        url: origin,
        email: company.email,
        telephone: company.phoneTel,
        logo,
        image,
        founder,
        address,
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": localId,
        name: company.name,
        url: origin,
        image,
        logo,
        email: company.email,
        telephone: company.phoneTel,
        founder,
        description,
        parentOrganization: { "@id": organizationId },
        address,
        areaServed: areaServedPlaces(),
        hasMap: company.maps,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: company.name,
        url: origin,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
        description,
      },
    ],
  };
}

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(site.ogImage);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:locale", content: site.locale },
      { property: "og:site_name", content: company.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
