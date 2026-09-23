import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy } from "@/components/site/case-study";
import { SiteShell } from "@/components/site/shell";
import { getProject } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageMeta({
        title: "Project | MKSAnalytIQ",
        description: "Project overview from MKSAnalytIQ.",
        path: "/portfolio",
      });
    }
    return pageMeta({
      title: loaderData.project.seoTitle,
      description: loaderData.project.seoDescription,
      path: `/portfolio/${loaderData.project.slug}`,
    });
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <SiteShell>
      <CaseStudy project={project} />
    </SiteShell>
  );
}
