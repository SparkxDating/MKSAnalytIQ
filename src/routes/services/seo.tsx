import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/seo")({
  beforeLoad: () => {
    throw redirect({ to: "/seo-services-noida", statusCode: 301 });
  },
});
