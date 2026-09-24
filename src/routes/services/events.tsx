import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/events")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$service", params: { service: "event-management" } });
  },
});
