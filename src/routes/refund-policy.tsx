import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/legal";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/refund-policy")({
  head: () =>
    pageMeta({
      title: "Refund Policy | MKSAnalytIQ",
      description: "MKSAnalytIQ does not publish a blanket refund promise. Any commercial terms live in the written project scope.",
      path: "/refund-policy",
    }),
  component: Refund,
});

function Refund() {
  return (
    <LegalLayout kicker="Refunds" title="Refund policy">
      <p>
        {company.name} does not publish a blanket refund amount, window or guarantee on this website. This page is a
        placeholder structure so the policy can be edited in one place. It is not a promise of a refund.
      </p>
      <h2>Where commercial terms live</h2>
      <p>
        Fees, what is delivered, and what happens if a project stops are written in the scope for that project. If a
        scope is silent on refunds, this page does not fill the gap.
      </p>
      <h2>Before you pay</h2>
      <p>
        Ask for the scope in writing before work starts. If you need a specific refund term, it has to be in that
        document — not assumed from the website.
      </p>
      <h2>Questions about a payment</h2>
      <p>
        Write to {company.email} or call {company.phoneDisplay} and refer to the project name. We’ll reply about that
        engagement. This page cannot confirm a refund on its own.
      </p>
    </LegalLayout>
  );
}
