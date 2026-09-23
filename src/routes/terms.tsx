import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/legal";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title: "Terms & Conditions | MKSAnalytIQ",
      description: "Terms for using the MKSAnalytIQ website. A project starts only after a written scope, not from this page.",
      path: "/terms",
    }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout kicker="Terms" title="Terms and conditions">
      <p>
        These terms cover use of the {company.name} website. They are not a proposal, a quote, or an agreement to do
        the work.
      </p>
      <h2>The website</h2>
      <p>
        Pages describe services and public projects. They are not a promise of a particular result, ranking, lead
        count, timeline or fee. Prices are not listed here because they depend on the brief.
      </p>
      <h2>When work starts</h2>
      <p>
        A project starts only after a written scope that both sides accept. That document — not this page — is where
        deliverables, fees, timelines and ownership for that job are set.
      </p>
      <h2>Public projects</h2>
      <p>
        Links to GitHub and live demos point at public repositories and sites under the account configured for this
        website ({company.githubHandle}). Those projects have their own licences where a licence file exists.
      </p>
      <h2>Enquiries</h2>
      <p>
        Sending a consultation request does not reserve a date and does not oblige either side to proceed. If the work
        isn’t a fit, we’ll say so.
      </p>
    </LegalLayout>
  );
}
