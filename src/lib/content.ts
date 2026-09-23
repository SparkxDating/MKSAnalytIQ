export const company = {
  name: "MKSAnalytIQ",
  wordLeft: "MKS",
  wordRight: "ANALYTIQ",
  proprietor: "Manoj Kumar Singh",
  phoneDisplay: "+91 95608 14623",
  phoneTel: "+919560814623",
  whatsapp: "https://wa.me/919560814623",
  email: "MKSAnalytIQ@gmail.com",
  addressLines: ["C-81, C Block", "Sector 8, Noida", "Uttar Pradesh 201306"],
  addressOneLine: "C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306",
  maps: "https://www.google.com/maps/search/?api=1&query=C-81+C+Block+Sector+8+Noida+Uttar+Pradesh+201306",
  github: "https://github.com/SparkxDating",
  githubHandle: "SparkxDating",
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceId = "marketing" | "social" | "events" | "software";

export const services: {
  id: ServiceId;
  title: string;
  blurb: string;
  points: string[];
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "marketing",
    title: "Digital Marketing",
    blurb:
      "Campaigns built around a number you care about — leads, bookings, or sales — not a pile of vanity posts.",
    points: [
      "Meta and Google campaigns with weekly reporting",
      "Offer, landing page and follow-up treated as one system",
      "Audience, creative and budget decisions you can see",
    ],
    image: "/media/desk.jpg",
    imageAlt: "Campaign planning desk with a laptop and charts",
  },
  {
    id: "social",
    title: "Social Media Management",
    blurb:
      "A steady presence on the platforms your customers already use, written in your voice and posted on a calendar you approve.",
    points: [
      "Monthly content plan, reels and stills",
      "Community replies and comment moderation",
      "Creator and collaboration coordination when it fits",
    ],
    image: "/media/studio.jpg",
    imageAlt: "Phone and ring light for social content",
  },
  {
    id: "events",
    title: "Event Management",
    blurb:
      "Launches, corporate gatherings and community programmes — planned on the ground and promoted before the doors open.",
    points: [
      "Run of show, vendors and on-site coordination",
      "Invites, registration and reminder messages",
      "Photo, recap content and post-event follow-up",
    ],
    image: "/media/event.jpg",
    imageAlt: "Banquet hall set for a corporate event",
  },
  {
    id: "software",
    title: "Software & App Development",
    blurb:
      "Websites, dashboards and product software that your team can actually run — from a public site to a working SaaS.",
    points: [
      "Marketing sites, portals and internal tools",
      "Mobile-ready web apps and API integrations",
      "Handover with a repo you own",
    ],
    image: "/media/devices.jpg",
    imageAlt: "Laptop and phone on a studio desk",
  },
];

export const extras = [
  {
    title: "SEO & content",
    text: "Pages structured so search and sales talk to each other — service pages, local Noida visibility, and articles that answer real questions.",
  },
  {
    title: "Brand & design",
    text: "A visual system that stays consistent from the logo lockup to ads, decks and event backdrops.",
  },
  {
    title: "Analytics",
    text: "A simple monthly read of what moved: spend, reach, leads and what to change next.",
  },
];

export const stats = [
  { value: "100+", label: "Happy clients" },
  { value: "300+", label: "Projects completed" },
  { value: "5+", label: "Years experience" },
  { value: "India & beyond", label: "Growing reach" },
];

export const steps = [
  {
    n: "01",
    title: "Discover",
    text: "A call or a visit to the Noida studio. We write down the offer, the audience, the deadline and what “done” looks like.",
  },
  {
    n: "02",
    title: "Plan",
    text: "A short scope: channels, pages or event flow, timeline and fee. You approve it before anyone starts producing.",
  },
  {
    n: "03",
    title: "Make",
    text: "Creative, code or on-ground production. You see work in progress — not a surprise on the last day.",
  },
  {
    n: "04",
    title: "Launch",
    text: "Campaigns go live, the site ships, or the event opens. We stay on the thread through the first days.",
  },
  {
    n: "05",
    title: "Improve",
    text: "Numbers come back. We keep what worked, cut what didn’t, and set the next month’s plan.",
  },
];

export const projects = [
  {
    slug: "shortgen",
    name: "ShortGen",
    kind: "Product",
    summary:
      "Multi-tenant SaaS that turns a topic into short-form video — workspaces, jobs, templates and credits.",
    stack: ["Next.js", "Python", "Postgres"],
    github: "https://github.com/SparkxDating/ShortGen",
    live: "https://shortgen-pi.vercel.app",
    tone: "navy" as const,
  },
  {
    slug: "cpaas",
    name: "Open CPaaS",
    kind: "Platform",
    summary:
      "Twilio-style communications platform: messaging, verify, voice, email, provider routing and an Android SMS gateway.",
    stack: ["NestJS", "Next.js", "Kotlin"],
    github: "https://github.com/SparkxDating/cpaas",
    live: "",
    tone: "blue" as const,
  },
  {
    slug: "taxpilot",
    name: "TaxPilot AI",
    kind: "Product",
    summary:
      "Guided ITR-3 / ITR-4 preparation for AY 2026–27, with eligibility checks and official ITR-4 JSON export.",
    stack: ["Next.js", "Prisma", "TypeScript"],
    github: "https://github.com/SparkxDating/taxpilot-ai",
    live: "https://taxpilot-ai-beta.vercel.app",
    tone: "ink" as const,
  },
  {
    slug: "eye-camp",
    name: "Eye Camp Registration",
    kind: "Field system",
    summary:
      "Hindi, mobile-first registration for a free cataract camp by Trishakti Seva Foundation and RJ Shankara Eye Hospital, Varanasi — slips, QR codes and an admin desk.",
    stack: ["TypeScript", "Postgres"],
    github: "https://github.com/SparkxDating/QRLogin",
    live: "",
    tone: "blue" as const,
  },
  {
    slug: "navi-zindagi",
    name: "Navi Zindagi",
    kind: "Campaign site",
    summary:
      "Fundraising and volunteer site for the Navi Zindagi Foundation’s flood-relief work in Nepal and Assam.",
    stack: ["TypeScript"],
    github: "https://github.com/SparkxDating/Navizindagi",
    live: "",
    tone: "navy" as const,
  },
  {
    slug: "influencer-os",
    name: "AI Influencer OS",
    kind: "Product",
    summary:
      "A workspace to create AI influencer profiles, draft content, approve posts and keep sponsored captions disclosed.",
    stack: ["Next.js", "Prisma"],
    github: "https://github.com/SparkxDating/ai-influencer-os",
    live: "",
    tone: "ink" as const,
  },
];

export const faqs = [
  {
    q: "Where do you work from?",
    a: "The studio is at C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306. Projects run across India, and software we ship is used more widely than that.",
  },
  {
    q: "What do you take on?",
    a: "Digital marketing, social media management, events, and software or app development. A typical start is a website plus the campaigns that send people to it, or an event with registration and promotion.",
  },
  {
    q: "How do we begin?",
    a: "Send a note with what you sell and when you need it, or call Manoj Kumar Singh on +91 95608 14623. The first conversation is to see if the work is a fit — no deck required.",
  },
];
