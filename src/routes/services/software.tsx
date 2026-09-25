import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/software")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$service", params: { service: "software-development" }, statusCode: 301 });
  },
});
