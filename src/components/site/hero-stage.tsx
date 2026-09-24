import { Preview } from "./previews";

/** Interfaces from shipped studio products. Not account or campaign data. */
export function HeroStage() {
  return (
    <div className="relative mx-auto grid w-full max-w-xl grid-cols-5 gap-3">
      <div className="hero-frame col-span-5 border border-paper/25">
        <p className="sr-only">ShortGen, a studio product</p>
        <Preview slug="shortgen" className="h-40 sm:h-48" />
      </div>
      <div className="col-span-3 border border-paper/25">
        <p className="sr-only">TaxPilot AI, a studio product</p>
        <Preview slug="taxpilot" className="h-28 sm:h-36" />
      </div>
      <div className="col-span-2 border border-paper/25">
        <p className="sr-only">Open CPaaS, a studio product</p>
        <Preview slug="cpaas" className="h-28 sm:h-36" />
      </div>
    </div>
  );
}
