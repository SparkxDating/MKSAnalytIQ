import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import {
  caseStudyPath,
  relatedCaseStudies,
  type CaseStudyRecord,
} from "@/lib/case-studies";
import { site } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { Button } from "./button";
import { JsonLd } from "./json-ld";
import { Preview } from "./previews";
import { WhatsAppButton } from "./whatsapp";

function isVercelHost(url: string) {
  try {
    const host = new URL(url).hostname;
    return host === "vercel.app" || host.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

function tagsFor(study: CaseStudyRecord) {
  return [...study.services.map((service) => service.label), ...study.technologies].slice(0, 4);
}

export function CaseStudyCard({
  study,
  imageLoading = "lazy",
  heading = "h2",
}: {
  study: CaseStudyRecord;
  imageLoading?: "eager" | "lazy";
  heading?: "h2" | "h3";
}) {
  const tags = tagsFor(study);
  const Title = heading;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
      <Preview slug={study.slug} loading={imageLoading} />
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{study.category}</p>
        <Title className="mt-1 font-display text-lg font-bold">
          <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="hover:text-primary">
            {study.title}
          </Link>
        </Title>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-mute">{study.shortDescription}</p>
        {tags.length ? (
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Services and technology">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          to="/case-studies/$slug"
          params={{ slug: study.slug }}
          className="mt-4 inline-flex h-11 items-center gap-1 text-sm font-semibold text-primary"
        >
          View Case Study <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudyRecord }) {
  const related = relatedCaseStudies(study.slug);
  const tags = [...study.services.map((service) => service.label), ...study.technologies];

  useEffect(() => {
    track("case_study_view", { project: study.slug, source: "case-studies" });
  }, [study.slug]);

  const sameAs = [study.live, study.github].filter((url) => url.length > 0 && !isVercelHost(url));
  const consult = () => track("quote_click", { source: `case-study-${study.slug}` });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: caseStudyPath(study.slug) },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.title,
          description: study.shortDescription,
          url: absoluteUrl(caseStudyPath(study.slug)),
          image: absoluteUrl(study.heroImage),
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
          isPartOf: { "@id": `${site.url}/#website` },
          ...(study.services.length
            ? { about: study.services.map((service) => ({ "@type": "Service", name: service.label })) }
            : {}),
          ...(study.technologies.length ? { keywords: study.technologies.join(", ") } : {}),
          ...(sameAs.length ? { sameAs } : {}),
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
              <li>
                <Link to="/case-studies" className="hover:text-ink">
                  Case Studies
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-ink">{study.title}</li>
            </ol>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">{study.category}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{study.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">{study.shortDescription}</p>
          {tags.length ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Services and technology">
              {tags.map((tag) => (
                <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-6 overflow-hidden rounded-3xl border border-line">
            <img
              src={study.heroImage}
              alt={study.heroAlt}
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link to="/contact" onClick={() => track("quote_click", { source: `case-study-${study.slug}-hero` })}>
                Discuss Your Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-6xl space-y-6 px-5 py-10 sm:py-12">
        <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">Project overview</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-ink">Project type</dt>
              <dd className="mt-1 text-mute">{study.projectType}</dd>
            </div>
            {study.industry ? (
              <div>
                <dt className="font-semibold text-ink">Industry</dt>
                <dd className="mt-1 text-mute">{study.industry}</dd>
              </div>
            ) : null}
            {study.clientName ? (
              <div>
                <dt className="font-semibold text-ink">Built for</dt>
                <dd className="mt-1 text-mute">{study.clientName}</dd>
              </div>
            ) : null}
            {study.services.length ? (
              <div className="sm:col-span-2">
                <dt className="font-semibold text-ink">Services</dt>
                <dd className="mt-1 text-mute">{study.services.map((service) => service.label).join(", ")}</dd>
              </div>
            ) : null}
            {study.technologies.length ? (
              <div className="sm:col-span-2">
                <dt className="font-semibold text-ink">Technologies</dt>
                <dd className="mt-1 text-mute">{study.technologies.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-mute">
            {study.clientName
              ? `Built by the MKSAnalytIQ studio in Sector 8, Noida, for ${study.clientName}.`
              : "Studio product built by MKSAnalytIQ in Sector 8, Noida."}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mute">
            The same project is also on the{" "}
            <Link
              to="/portfolio/$slug"
              params={{ slug: study.slug }}
              className="font-semibold text-primary hover:text-ink"
            >
              portfolio page
            </Link>
            .
          </p>
        </section>

        {study.challenge ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">The challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">{study.challenge}</p>
          </section>
        ) : null}

        {study.objective ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Objectives</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">{study.objective}</p>
          </section>
        ) : null}

        {study.solution ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">The solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">{study.solution}</p>
          </section>
        ) : null}

        {study.features.length ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">What we built</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {study.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {study.technologies.length ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Technology stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((tag) => (
                <li key={tag} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium">
                  {tag}
                </li>
              ))}
            </ul>
            {study.implementation ? (
              <p className="mt-4 text-sm leading-relaxed text-mute">{study.implementation}</p>
            ) : null}
          </section>
        ) : null}

        <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">Outcome</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">{study.outcome}</p>
        </section>

        <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">Lessons</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">{study.lessons}</p>
        </section>

        {study.github || study.live ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Project links</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-x-6">
              {study.github ? (
                <a
                  href={study.github}
                  className="inline-flex h-11 items-center gap-1 text-ink hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
              {study.live ? (
                <a
                  href={study.live}
                  className="inline-flex h-11 items-center gap-1 text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </section>
        ) : null}

        {study.services.length ? (
          <section className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Related services</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              This case study is an example of{" "}
              {study.services.map((service, index) => (
                <span key={service.slug}>
                  {index === 0 ? "" : index === study.services.length - 1 ? " and " : ", "}
                  <Link
                    to="/services/$service"
                    params={{ service: service.slug }}
                    className="font-semibold text-primary hover:text-ink"
                  >
                    {service.anchor}
                  </Link>
                </span>
              ))}
              . For a similar brief,{" "}
              <Link to="/contact" className="font-semibold text-primary hover:text-ink" onClick={consult}>
                contact the studio
              </Link>
              .
            </p>
          </section>
        ) : (
          <p className="text-sm leading-relaxed text-mute">
            <Link to="/contact" className="font-semibold text-primary hover:text-ink" onClick={consult}>
              Contact the studio
            </Link>{" "}
            about a similar brief.
          </p>
        )}

        {related.length ? (
          <section>
            <h2 className="text-2xl font-extrabold">Related case studies</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <CaseStudyCard study={item} heading="h3" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-3xl font-extrabold tracking-tight">Have a similar project?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">Let’s discuss your requirements.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact" onClick={consult}>
                Get a Free Consultation
              </Link>
            </Button>
            <WhatsAppButton
              source={`case-study-${study.slug}`}
              variant="line"
              message={`Hello, I’d like to talk about a project similar to ${study.title}.`}
            >
              WhatsApp Us
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
