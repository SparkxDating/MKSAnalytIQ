import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudyCard } from "@/components/site/case-study-page";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/shell";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, pageMeta } from "@/lib/seo";

const title = "Case Studies | MKSANALYTIQ";
const description =
  "Case studies of public digital, software, app and AI projects from MKSANALYTIQ in Noida. Each page documents scope, features and technology, without traffic or revenue figures.";

export const Route = createFileRoute("/case-studies/")({
  head: () => {
    const meta = pageMeta({ title, description, path: "/case-studies" });
    return {
      meta: [...meta.meta, { name: "robots", content: "index,follow" }],
      links: meta.links,
    };
  },
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Case Studies",
          description,
          url: absoluteUrl("/case-studies"),
          isPartOf: { "@id": `${site.url}/#website` },
          publisher: { "@id": `${site.url}/#organization` },
          ...(caseStudies.length
            ? {
                mainEntity: {
                  "@type": "ItemList",
                  itemListElement: caseStudies.map((study, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: study.title,
                    url: absoluteUrl(`/case-studies/${study.slug}`),
                  })),
                },
              }
            : {}),
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-mute">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">Case Studies</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            MKSANALYTIQ writes these pages from public digital, software, app and AI projects. Each one records the
            documented scope, the features and the technology. None of them adds a user count, a revenue figure or a
            ranking. To talk about a similar brief,{" "}
            <Link to="/contact" className="font-semibold text-primary hover:text-ink">
              contact the studio
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        {caseStudies.length ? (
          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <li key={study.slug}>
                <CaseStudyCard study={study} imageLoading={index === 0 ? "eager" : "lazy"} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-2xl rounded-3xl border border-line bg-card p-5 text-sm leading-relaxed text-mute">
            No public case studies are listed yet. The page only shows projects already documented by the studio.{" "}
            <Link to="/contact" className="font-semibold text-primary hover:text-ink">
              Contact the studio
            </Link>{" "}
            and we can walk through relevant work on a call.
          </p>
        )}
      </section>
    </SiteShell>
  );
}
