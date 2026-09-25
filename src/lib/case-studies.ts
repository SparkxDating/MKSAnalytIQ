import { getService, projects, servicesForProject } from "@/lib/content";

export type CaseStudyService = {
  slug: string;
  label: string;
  anchor: string;
};

/** One public case study. Optional fields are omitted on the page when absent. */
export type CaseStudyRecord = {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  services: CaseStudyService[];
  /** Set only when the project record names an industry. */
  industry?: string;
  technologies: string[];
  projectType: string;
  /** Named organisation from the project record. Omitted for studio products. */
  clientName?: string;
  heroImage: string;
  heroAlt: string;
  /** Set only when the project record states a problem. */
  challenge?: string;
  objective?: string;
  solution?: string;
  implementation?: string;
  features: string[];
  /** Factual delivery note. Never a traffic, revenue or ranking figure. */
  outcome: string;
  lessons: string;
  github: string;
  live: string;
  seoTitle: string;
  seoDescription: string;
};

function serviceAnchor(slug: string) {
  switch (slug) {
    case "digital-marketing":
      return "marketing a defined offer";
    case "web-development":
      return "a public website";
    case "software-development":
      return "custom software";
    case "app-development":
      return "a mobile app";
    case "ai-development":
      return "an AI workflow a person reviews";
    case "social-media":
      return "social content";
    case "event-management":
      return "event registration";
    default:
      return "this service";
  }
}

function toCaseStudy(project: (typeof projects)[number]): CaseStudyRecord {
  const services = servicesForProject(project).map((service) => ({
    slug: service.slug,
    label: service.title,
    anchor: serviceAnchor(service.slug),
  }));
  const technologies = [...project.stack];
  const clientName = project.builtFor;
  const outcome = clientName
    ? `Built for ${clientName}. The published outcome is the delivered ${project.kind.toLowerCase()} and the features listed on this page. No user counts, revenue or rankings are included.`
    : `Studio product from Sector 8, Noida. The published outcome is the delivered ${project.kind.toLowerCase()} and the features listed on this page. No user counts, revenue or rankings are included.`;

  return {
    slug: project.slug,
    title: project.name,
    shortDescription: project.summary,
    category: project.kind,
    services,
    technologies,
    projectType: project.kind,
    ...(clientName ? { clientName } : {}),
    heroImage: `/media/work/${project.slug}.jpg`,
    heroAlt: `${project.name}, a ${project.kind.toLowerCase()} project by MKSAnalytIQ`,
    ...(project.objective ? { objective: project.objective } : {}),
    ...(project.approach ? { solution: project.approach } : {}),
    ...(technologies.length
      ? { implementation: `The published build uses ${technologies.join(", ")}.` }
      : {}),
    features: [...project.features],
    outcome,
    lessons: `${project.name} is documented by its scope and technology${
      technologies.length ? ` (${technologies.join(", ")})` : ""
    }. A measured business result is not part of this case study because none is on file.`,
    github: project.github,
    live: project.live,
    seoTitle: `${project.name} Case Study | MKSANALYTIQ`,
    seoDescription: `Case study of ${project.name}: ${project.summary} Documented scope from the Noida studio, with no traffic or revenue figures.`,
  };
}

/** Generated from the public project list. A new project in `content.ts` appears here automatically. */
export const caseStudies: CaseStudyRecord[] = projects.map(toCaseStudy);

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function relatedCaseStudies(slug: string, limit = 3) {
  const current = getCaseStudy(slug);
  if (!current) return [];
  const slugs = new Set(current.services.map((service) => service.slug));
  const related = caseStudies.filter(
    (item) => item.slug !== slug && item.services.some((service) => slugs.has(service.slug)),
  );
  if (related.length >= 2) return related.slice(0, limit);
  const filler = caseStudies.filter(
    (item) => item.slug !== slug && item.category === current.category && !related.some((picked) => picked.slug === item.slug),
  );
  return [...related, ...filler].slice(0, limit);
}

export function caseStudyPath(slug: string) {
  return `/case-studies/${slug}`;
}

/** Confirms a service slug used by a case study still exists. */
export function caseStudyService(slug: string) {
  return getService(slug);
}
