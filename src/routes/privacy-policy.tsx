import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/legal";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | MKSAnalytIQ",
      description: "How the MKSAnalytIQ website handles enquiries. The contact form opens your email app and is not stored on this site.",
      path: "/privacy-policy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout kicker="Privacy" title="Privacy policy">
      <p>
        This notice describes the {company.name} website. It is not a contract and it does not describe every system a
        client project might use later.
      </p>
      <h2>What this website collects</h2>
      <p>
        The consultation form does not save your message on this website. Submitting it opens your email app with a
        draft addressed to {company.email}. If you send that email, call, or message on WhatsApp, we use those details
        to reply to the enquiry.
      </p>
      <h2>What we don’t do here</h2>
      <p>
        This site does not ask you to create an account. It does not publish a list of form submissions. Analytics, if
        added later, should receive event names such as “form submitted” — not your name, phone number, email or
        message.
      </p>
      <h2>Links that leave the site</h2>
      <p>
        Phone, email, WhatsApp, Maps and GitHub links leave this website. Those services have their own privacy
        practices, which we don’t control.
      </p>
      <h2>Questions</h2>
      <p>
        Write to {company.email} if you want a copy of an email thread you started with us, or if you want us to stop
        using those details for the enquiry.
      </p>
    </LegalLayout>
  );
}
