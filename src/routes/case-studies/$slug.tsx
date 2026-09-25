import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/site/case-study-page";
import { SiteShell } from "@/components/site/shell";
import { getCaseStudy } from "@/lib/case-studies";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageMeta({
        title: "Case Study | MKSANALYTIQ",
        description: "Case study from the MKSANALYTIQ studio in Noida.",
        path: "/case-studies",
      });
    }
    const meta = pageMeta({
      title: loaderData.study.seoTitle,
      description: loaderData.study.seoDescription,
      path: `/case-studies/${loaderData.study.slug}`,
      image: loaderData.study.heroImage,
    });
    return {
      meta: [...meta.meta, { name: "robots", content: "index,follow" }],
      links: meta.links,
    };
  },
  component: CaseStudyRoute,
});

function CaseStudyRoute() {
  const { study } = Route.useLoaderData();
  return (
    <SiteShell cta={false}>
      <CaseStudyPage study={study} />
    </SiteShell>
  );
}
