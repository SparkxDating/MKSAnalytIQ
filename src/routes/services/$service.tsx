import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/service-detail";
import { SiteShell } from "@/components/site/shell";
import { getService } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageMeta({
        title: "Service | MKSAnalytIQ",
        description: "Services from MKSAnalytIQ in Noida.",
        path: "/services",
      });
    }
    return pageMeta({
      title: loaderData.service.seoTitle,
      description: loaderData.service.seoDescription,
      path: `/services/${loaderData.service.slug}`,
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <SiteShell>
      <ServiceDetail service={service} />
    </SiteShell>
  );
}
