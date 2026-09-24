import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { servicesForProject, site, company, type projects } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { Button } from "./button";
import { JsonLd } from "./json-ld";
import { Preview } from "./previews";
import { WhatsAppButton } from "./whatsapp";

type Project = (typeof projects)[number];

export function CaseStudy({ project }: { project: Project }) {
  const linked = servicesForProject(project);

  useEffect(() => {
    track("case_study_view", { project: project.slug });
  }, [project.slug]);

  const sameAs = [project.live, project.github].filter((url) => url.length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/portfolio" },
          { name: project.name, path: `/portfolio/${project.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": project.category === "software" ? "SoftwareApplication" : "CreativeWork",
          name: project.name,
          description: project.summary,
          url: absoluteUrl(`/portfolio/${project.slug}`),
          image: absoluteUrl(`/media/work/${project.slug}.jpg`),
          featureList: project.features,
          author: { "@id": `${site.url}/#organization` },
          isPartOf: { "@id": `${site.url}/#website` },
          ...(sameAs.length ? { sameAs } : {}),
        }}
      />
      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-mute">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/portfolio" className="hover:text-ink">
                  Work
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{project.name}</li>
            </ol>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">{project.kind}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">{project.summary}</p>
        </div>
      </section>

      <article className="mx-auto grid max-w-6xl gap-6 px-5 py-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Project overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              <span className="font-semibold text-ink">Project type: </span>
              {project.kind}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mute">{project.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              This page lists the documented scope and features. Any business outcomes shown here are verified and
              approved for sharing.
            </p>
          </section>

          {project.objective ? (
            <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">Objective</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{project.objective}</p>
            </section>
          ) : null}

          {project.approach ? (
            <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{project.approach}</p>
            </section>
          ) : null}

          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Key features</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {project.stack.length ? (
            <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">Implementation</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                The published build uses {project.stack.join(", ")}.
              </p>
            </section>
          ) : null}

          <section className="overflow-hidden rounded-3xl border border-line bg-card">
            <h2 className="px-5 pt-5 text-2xl font-extrabold">Screenshot</h2>
            <div className="mt-4">
              <Preview slug={project.slug} />
            </div>
            <p className="px-5 py-4 text-sm leading-relaxed text-mute">
              Project screenshot: {project.name}.
            </p>
          </section>

          {linked.length ? (
            <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">Related services</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold">
                {linked.map((service) => (
                  <li key={service.slug}>
                    <Link to="/services/$service" params={{ service: service.slug }} className="text-primary hover:text-ink">
                      {service.linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="space-y-4">
          <section className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-lg font-bold">Technology</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium">
                  {tag}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-line bg-card p-5">
            <h2 className="text-lg font-bold">Links</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold">
              {project.github ? (
                <a
                  href={project.github}
                  className="inline-flex h-11 items-center gap-1 text-ink hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : (
                <p className="text-sm font-normal leading-relaxed text-mute">Source repository is private.</p>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  className="inline-flex h-11 items-center gap-1 text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : (
                <p className="text-sm font-normal leading-relaxed text-mute">No public live demo is listed.</p>
              )}
            </div>
          </section>
          <p className="text-xs leading-relaxed text-mute">
            Public repositories are under {company.githubHandle}. That account publishes product code; it is not a
            separate office.
          </p>
          <section className="rounded-3xl bg-navy p-5 text-paper">
            <h2 className="text-lg font-bold">Start a similar brief</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/80">
              Tell us what you’re trying to build or promote. The first conversation is to see if the work is a fit.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link to="/contact">Request Free Consultation</Link>
            </Button>
            <WhatsAppButton
              source={`case-${project.slug}`}
              variant="ghost"
              className="mt-3 w-full"
              message={`Hello, I’d like to talk about a project similar to ${project.name}.`}
            />
          </section>
        </aside>
      </article>
    </>
  );
}
