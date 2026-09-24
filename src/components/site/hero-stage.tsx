import { Preview } from "./previews";

/** Interfaces from shipped studio products. Not account or campaign data. */
export function HeroStage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="pointer-events-none absolute -top-3 right-0 left-8 h-full border border-accent/30"
        aria-hidden
      />
      <div className="relative grid grid-cols-5 gap-3">
        <div className="hero-frame col-span-5 border border-paper/25 bg-navy shadow-2xl">
          <p className="sr-only">ShortGen, a studio product</p>
          <Preview slug="shortgen" className="h-44 sm:h-52" />
        </div>
        <div className="col-span-3 border border-paper/25 bg-navy">
          <p className="sr-only">TaxPilot AI, a studio product</p>
          <Preview slug="taxpilot" className="h-32 sm:h-40" />
        </div>
        <div className="col-span-2 border border-paper/25 bg-navy">
          <p className="sr-only">AI Influencer OS, a studio product</p>
          <Preview slug="influencer-os" className="h-32 sm:h-40" />
        </div>
      </div>
    </div>
  );
}