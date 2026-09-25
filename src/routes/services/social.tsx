import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/social")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$service", params: { service: "social-media" }, statusCode: 301 });
  },
});
