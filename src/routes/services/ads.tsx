import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/ads")({
  beforeLoad: () => {
    throw redirect({ to: "/google-ads-agency-noida" });
  },
});
