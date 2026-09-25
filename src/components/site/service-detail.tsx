import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { faqsFor, faqs, projectsForService, relatedServices, steps, site, type services } from "@/lib/content";
import { absoluteUrl, areaServedPlaces, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { Button } from "./button";
import { FaqList } from "./faq";
import { JsonLd } from "./json-ld";
import { ProcessSteps } from "./process-steps";
import { ProjectCard } from "./project-card";
import { WhatsAppButton } from "./whatsapp";

type Service = (typeof services)[number];

export function ServiceDetail({ service }: { service: Service }) {
  const related = projectsForService(service.slug);
  const questions = service.faqIds?.length
    ? service.faqIds.flatMap((id) => {
        const item = faqs.find((faq) => faq.id === id);
        return item ? [item] : [];
      })
    : faqsFor(service.id);
  const path = `/services/${service.slug}`;
  const linked = relatedServices(service.relatedServices);

  useEffect(() => {
    track("service_view", { service: service.slug });
  }, [service.slug]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.blurb,
          url: absoluteUrl(path),
          serviceType: service.h1,
          areaServed: areaServedPlaces(),
          provider: { "@id": `${site.url}/#organization` },
        }}
      />
      {questions.length ? <JsonLd data={faqSchema(questions)} /> : null}

      <section className="border-b border-line bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-mute">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/services" className="hover:text-ink">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ink">{service.title}</li>
              </ol>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">Noida</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{service.h1}</h1>
            <p className="mt-4 text-base leading-relaxed text-mute">{service.blurb}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-mute">
              Based in Noida • Serving Delhi NCR and India
            </p>
            {service.slug === "digital-marketing" ? (
              <p className="mt-4 text-sm leading-relaxed text-mute">
                For a narrower brief, see{" "}
                <Link to="/seo-services-noida" className="font-semibold text-primary">
                  SEO services in Noida
                </Link>{" "}
                and{" "}
                <Link to="/google-ads-agency-noida" className="font-semibold text-primary">
                  Google Ads in Noida
                </Link>
                .
              </p>
            ) : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link
                  to="/contact"
                  search={{ service: service.id }}
                  onClick={() => track("quote_click", { source: service.slug })}
                >
                  {service.heroCta ?? service.cta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <WhatsAppButton source={`service-${service.slug}`} message={`Hello, I need help with ${service.title}.`} />
            </div>
          </div>
          <img
            src={service.image}
            alt={service.imageAlt}
            width={1792}
            height={1008}
            className="h-72 w-full rounded-3xl object-cover sm:h-96"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2">
        <article className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">The problem</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">{service.problem}</p>
        </article>
        <article className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">Our solution</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">{service.solution}</p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-4">
        <article className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">{service.audienceTitle ?? "Who it is for"}</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute">{service.suitable}</p>
        </article>
      </section>

      {service.sections.length ? (
        <section className="mx-auto max-w-6xl space-y-4 px-5 py-4">
          {service.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-line bg-card p-5 sm:p-6">
              <h2 className="text-2xl font-extrabold">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{section.text}</p>
            </article>
          ))}
        </section>
      ) : null}

      {service.serviceMenu ? (
        <section className="mx-auto max-w-6xl px-5 py-4">
          <div className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">{service.serviceMenu.title}</h2>
            {service.serviceMenu.intro ? (
              <p className="mt-2 text-sm text-mute">{service.serviceMenu.intro}</p>
            ) : null}
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.serviceMenu.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <div className="rounded-3xl border border-line bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-extrabold">{service.deliverablesTitle ?? "Deliverables"}</h2>
          <p className="mt-2 text-sm text-mute">Typical items. The written scope lists what your project includes.</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {(service.pageDeliverables ?? service.deliverables).map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.technologyNote ? (
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <article className="rounded-3xl border border-line bg-card p-5 sm:p-6">
            <h2 className="text-2xl font-extrabold">Technologies and solutions</h2>
            <p className="mt-3 text-sm leading-relaxed text-mute">{service.technologyNote}</p>
          </article>
        </section>
      ) : null}

      {linked.length ? (
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <h2 className="text-2xl font-extrabold">Related services</h2>
          <ServiceBridges slug={service.slug} />
          <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-x-6">
            {linked.map((item) => (
              <li key={item.slug}>
                <Link to="/services/$service" params={{ service: item.slug }} className="text-primary hover:text-ink">
                  {item.linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">{service.processTitle ?? "Process"}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          {service.processIntro ??
            `${steps.length} steps, the same shape as every other engagement: you always know what happens next.`}
        </p>
        <ProcessSteps items={service.processSteps} />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <h2 className="text-3xl font-extrabold tracking-tight">{service.workTitle ?? "Relevant work"}</h2>
        {related.length ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">
            Client work in this practice isn’t listed publicly. Ask on a call and we’ll walk through relevant examples.
          </p>
        )}
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <FaqList items={questions} />
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-mute">
          Based in Noida • Serving Delhi NCR and India
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/contact" search={{ service: service.id }} onClick={() => track("quote_click", { source: `${service.slug}-end` })}>
              {service.closingCta ?? service.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <WhatsAppButton source={`service-end-${service.slug}`} />
        </div>
      </section>
    </>
  );
}

function ServiceBridges({ slug }: { slug: string }) {
  const linkClass = "font-semibold text-primary hover:text-ink";
  if (slug === "digital-marketing") {
    return (
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-mute">
        Campaigns usually need a page to land on. That is{" "}
        <Link to="/services/$service" params={{ service: "web-development" }} className={linkClass}>
          web development
        </Link>{" "}
        when the brief is a site. When the enquiry has to enter a system your team already runs, the build is{" "}
        <Link to="/services/$service" params={{ service: "software-development" }} className={linkClass}>
          software development
        </Link>{" "}
        or{" "}
        <Link to="/services/$service" params={{ service: "app-development" }} className={linkClass}>
          app development
        </Link>
        . A chatbot or an automated draft on the same offer is{" "}
        <Link to="/services/$service" params={{ service: "ai-development" }} className={linkClass}>
          AI development
        </Link>
        .
      </p>
    );
  }
  if (slug === "web-development") {
    return (
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-mute">
        A site that also has to be marketed sits with{" "}
        <Link to="/services/$service" params={{ service: "digital-marketing" }} className={linkClass}>
          digital marketing
        </Link>
        . When the brief is an internal system rather than a public site, see{" "}
        <Link to="/services/$service" params={{ service: "software-development" }} className={linkClass}>
          software development
        </Link>
        . Phone and tablet products are{" "}
        <Link to="/services/$service" params={{ service: "app-development" }} className={linkClass}>
          app development
        </Link>
        . A reviewed AI feature on the site is{" "}
        <Link to="/services/$service" params={{ service: "ai-development" }} className={linkClass}>
          AI development
        </Link>
        .
      </p>
    );
  }
  if (slug === "software-development") {
    return (
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-mute">
        Public sites are{" "}
        <Link to="/services/$service" params={{ service: "web-development" }} className={linkClass}>
          web development
        </Link>
        . Phone and tablet products are{" "}
        <Link to="/services/$service" params={{ service: "app-development" }} className={linkClass}>
          app development
        </Link>
        , and a reviewed AI feature inside the product is{" "}
        <Link to="/services/$service" params={{ service: "ai-development" }} className={linkClass}>
          AI development
        </Link>
        . When the software needs to be marketed after launch, that work is{" "}
        <Link to="/services/$service" params={{ service: "digital-marketing" }} className={linkClass}>
          digital marketing
        </Link>
        .
      </p>
    );
  }
  if (slug === "app-development") {
    return (
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-mute">
        The admin side, API and shared backend are usually{" "}
        <Link to="/services/$service" params={{ service: "software-development" }} className={linkClass}>
          software development
        </Link>
        . A public site beside the app is{" "}
        <Link to="/services/$service" params={{ service: "web-development" }} className={linkClass}>
          web development
        </Link>
        . A reviewed AI feature inside the app is{" "}
        <Link to="/services/$service" params={{ service: "ai-development" }} className={linkClass}>
          AI development
        </Link>
        . Marketing the app after launch is{" "}
        <Link to="/services/$service" params={{ service: "digital-marketing" }} className={linkClass}>
          digital marketing
        </Link>
        .
      </p>
    );
  }
  if (slug === "ai-development") {
    return (
      <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-mute">
        AI features ship as software, so the build sits with{" "}
        <Link to="/services/$service" params={{ service: "software-development" }} className={linkClass}>
          software development
        </Link>
        . The same feature on a public site is{" "}
        <Link to="/services/$service" params={{ service: "web-development" }} className={linkClass}>
          web development
        </Link>
        , and inside a phone app it is{" "}
        <Link to="/services/$service" params={{ service: "app-development" }} className={linkClass}>
          app development
        </Link>
        . When the job is leads or content rather than a product feature, see{" "}
        <Link to="/services/$service" params={{ service: "digital-marketing" }} className={linkClass}>
          digital marketing
        </Link>
        .
      </p>
    );
  }
  return null;
}
