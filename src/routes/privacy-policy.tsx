import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/legal";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | MKSAnalytIQ",
      description: "How MKSAnalytIQ handles website enquiries, email subscribers, and campaign delivery.",
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
      <h2>Marketing email contacts</h2>
      <p>
        The private MKSAnalytIQ email studio stores the email address, optional first name, consent source and date,
        and subscription status for contacts who agreed to receive marketing emails. Contacts are managed by approved
        workspace members. Active contacts and campaign content are shared with Brevo for email delivery when the
        delivery account is connected. Contacts marked unsubscribed are excluded from future sends, and Brevo suppression
        is preserved during contact sync.
      </p>
      <h2>What we don’t do here</h2>
      <p>
        The public website does not ask visitors to create an account or publish enquiry details. Analytics, if added,
        should receive event names such as “form submitted” — not your name, phone number, email or message.
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
