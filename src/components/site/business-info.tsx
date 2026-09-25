import { Mail, MapPin, Phone } from "lucide-react";
import { track } from "@/lib/analytics";
import { company } from "@/lib/content";
import { WhatsAppButton } from "./whatsapp";

export function BusinessInfo({ source }: { source: string }) {
  return (
    <section className="rounded-3xl border border-line bg-card p-5 sm:p-6" aria-labelledby="studio-info-title">
      <h2 id="studio-info-title" className="text-2xl font-extrabold">
        Studio
      </h2>
      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-widest text-mute">Business</dt>
          <dd className="mt-1 font-semibold">{company.name}</dd>
          <dd className="text-mute">Proprietor {company.proprietor}</dd>
        </div>
        <div className="flex gap-3">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-mute">Address</dt>
            <dd className="mt-1 leading-relaxed">{company.addressOneLine}</dd>
          </div>
        </div>
        <div className="flex gap-3">
          <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-mute">Phone</dt>
            <dd className="mt-1">
              <a
                className="font-semibold hover:text-primary"
                href={`tel:${company.phoneTel}`}
                onClick={() => track("call_click", { source })}
              >
                {company.phoneDisplay}
              </a>
            </dd>
          </div>
        </div>
        <div className="flex gap-3">
          <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-mute">Email</dt>
            <dd className="mt-1">
              <a
                className="font-semibold hover:text-primary"
                href={`mailto:${company.email}`}
                onClick={() => track("email_click", { source })}
              >
                {company.email}
              </a>
            </dd>
          </div>
        </div>
        {company.hours ? (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-mute">Working hours</dt>
            <dd className="mt-1">{company.hours}</dd>
          </div>
        ) : null}
      </dl>
      <a className="mt-5 inline-flex text-sm font-semibold text-primary" href={company.maps}>
        Get Directions
      </a>
      <WhatsAppButton source={source} className="mt-4 w-full" />
    </section>
  );
}
