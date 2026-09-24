/**
 * Editable business content for MKSAnalytIQ.
 * Change copy, offers, and public links here — components read from this file.
 *
 * GitHub: public product code is published under `github` / `githubHandle`.
 * Update those fields if the account changes. Do not hardcode the handle in components.
 * Project repository URLs below are the real public repos; leave a URL blank rather than guessing.
 */

export const site = {
  url: "https://mksanalytiq.vercel.app",
  ogImage: "/og.jpg",
  locale: "en_IN",
  /** Shown on legal pages. Update when the text changes. */
  legalUpdated: "24 September 2026",
} as const;

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
  /**
   * Leave empty until hours are confirmed. An empty string is not shown.
   * Example once confirmed: "Mon–Sat, 10:00–18:00 IST"
   */
  hours: "",
  github: "https://github.com/SparkxDating",
  githubHandle: "SparkxDating",
} as const;

export function whatsappHref(text?: string) {
  if (!text) return company.whatsapp;
  const url = new URL(company.whatsapp);
  url.searchParams.set("text", text);
  return url.toString();
}

export const hero = {
  title: "Digital Marketing, Software & Growth Systems for Businesses",
  lede: "MKSAnalytIQ helps businesses generate leads, build their digital presence and launch digital products — combining marketing, technology and growth under one roof.",
  trust: "Based in Noida • Serving businesses across India",
  primaryCta: "Book Free Consultation",
  secondaryCta: "Chat on WhatsApp",
} as const;

export const finalCta = {
  title: "Have a project in mind?",
  text: "Tell us what you're trying to build, market or improve.",
  primary: "Book Free Consultation",
  secondary: "Chat on WhatsApp",
} as const;

export const trustStatement = "Marketing + Technology under one roof";

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/", label: "Solutions", hash: "solutions" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerCompany = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export type ServiceId = "marketing" | "social" | "events" | "software";

export type ProjectCategory = "software" | "marketing" | "events" | "campaigns";

export const projectCategories: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "marketing", label: "Marketing" },
  { id: "events", label: "Events" },
  { id: "campaigns", label: "Campaigns" },
];

export const services: {
  id: ServiceId;
  slug: string;
  title: string;
  blurb: string;
  suitable: string;
  problem: string;
  solution: string;
  deliverables: string[];
  cta: string;
  related: ProjectCategory[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
}[] = [
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    blurb:
      "Campaigns built around a number you care about — leads, bookings, or sales — not a pile of vanity posts.",
    suitable:
      "Businesses that want enquiries from Google or Meta, with a page and a follow-up path you can actually read.",
    problem:
      "Spend often goes out before the offer, the landing page and the tracking agree. Without that, it is hard to tell what a lead cost.",
    solution:
      "We treat the offer, ads, landing page, retargeting and reporting as one system. You approve a written scope before anything launches.",
    deliverables: [
      "Google Ads",
      "Meta Ads",
      "Landing pages",
      "Conversion tracking",
      "Retargeting",
      "Performance reporting",
    ],
    cta: "Get a Marketing Plan",
    related: ["marketing", "campaigns"],
    image: "/media/desk.jpg",
    imageAlt: "Campaign planning desk with a laptop and charts",
    seoTitle: "Digital Marketing in Noida | MKSAnalytIQ",
    seoDescription:
      "Digital marketing in Noida: Google Ads, Meta Ads, landing pages, conversion tracking and reporting. Written scope before launch. MKSAnalytIQ.",
  },
  {
    id: "social",
    slug: "social-media",
    title: "Social Media",
    blurb:
      "A steady presence on the platforms your customers already use, written in your voice and posted on a calendar you approve.",
    suitable:
      "Teams that need a regular presence without staffing a full in-house social desk.",
    problem:
      "Posting stalls, or it runs in a voice that doesn’t sound like the business. Replies pile up and nobody owns the calendar.",
    solution:
      "A monthly plan you approve, then reels, stills and community replies in that voice — with a review of what to change next month.",
    deliverables: [
      "Monthly content plan",
      "Reels and stills",
      "Captions in your voice",
      "Community replies",
      "Comment moderation",
      "Monthly review",
    ],
    cta: "Get a Content Plan",
    related: ["marketing"],
    image: "/media/studio.jpg",
    imageAlt: "Phone and ring light for social content",
    seoTitle: "Social Media Marketing in Noida | MKSAnalytIQ",
    seoDescription:
      "Social media management from a Noida studio: content calendars, reels, community replies and a monthly review you approve. MKSAnalytIQ.",
  },
  {
    id: "events",
    slug: "event-management",
    title: "Event Management",
    blurb:
      "Launches, corporate gatherings and community programmes — planned on the ground and promoted before the doors open.",
    suitable:
      "Organisers of a launch, a corporate gathering or a community programme who want the room and the promotion planned together.",
    problem:
      "The venue, the guest list and the promotion are often three separate jobs. The date arrives and the list is still thin.",
    solution:
      "One plan for the run of show, the vendors, registration and the messages that go out before and after the event.",
    deliverables: [
      "Run of show",
      "Vendor coordination",
      "Invites and registration",
      "Reminder messages",
      "On-site coordination",
      "Recap content",
    ],
    cta: "Plan an Event",
    related: ["events"],
    image: "/media/event.jpg",
    imageAlt: "Banquet hall set for a corporate event",
    seoTitle: "Event Management in Noida | MKSAnalytIQ",
    seoDescription:
      "Event management for launches, corporate gatherings and community programmes — planning, registration and promotion. MKSAnalytIQ, Noida.",
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software & App Development",
    blurb:
      "Websites, dashboards and product software that your team can actually run — from a public site to a working SaaS.",
    suitable:
      "Teams that need a website, portal or product their own people can operate after launch.",
    problem:
      "A site or tool gets delivered without a handover the team can use, or marketing sends people to a page that isn’t ready.",
    solution:
      "We scope the build, ship it in the open, and hand over what the written agreement says you keep — including a repository when that is part of the scope.",
    deliverables: [
      "Marketing websites",
      "Web apps and portals",
      "Dashboards and internal tools",
      "API integrations",
      "Mobile-ready interfaces",
      "Repository handover",
    ],
    cta: "Discuss a Build",
    related: ["software"],
    image: "/media/devices.jpg",
    imageAlt: "Laptop and phone on a studio desk",
    seoTitle: "Software & App Development in Noida | MKSAnalytIQ",
    seoDescription:
      "Software and app development in Noida: websites, portals, dashboards and product builds, with a written scope and handover. MKSAnalytIQ.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

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

/**
 * Figures the studio may publish later.
 * `published: false` keeps them off the site until someone confirms the number.
 * Do not flip these on without a source you can stand behind.
 */
export const stats: { value: string; label: string; published: boolean }[] = [
  { value: "100+", label: "Happy clients", published: false },
  { value: "300+", label: "Projects completed", published: false },
  { value: "5+", label: "Years experience", published: false },
  { value: "India & beyond", label: "Growing reach", published: false },
];

export const publishedStats = stats.filter((stat) => stat.published);

/** Qualitative notes that match what the site can already support. Not performance claims. */
export const trustNotes = [
  { value: "Noida", label: "Sector 8 studio" },
  { value: "One team", label: "Marketing and technology" },
  { value: "Direct", label: "Work with the proprietor" },
  { value: "India", label: "Projects beyond the city" },
];

export const why = [
  {
    title: "One Team",
    text: "Marketing, design, technology and development under one roof.",
  },
  {
    title: "Direct Communication",
    text: "Clear communication and direct project collaboration.",
  },
  {
    title: "Transparent Delivery",
    text: "Clear scope, milestones and deliverables.",
  },
  {
    title: "Built for Business Outcomes",
    text: "Solutions designed around leads, customers, efficiency and growth.",
  },
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
    title: "Build",
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

export const projects: {
  slug: string;
  name: string;
  category: ProjectCategory;
  kind: string;
  summary: string;
  features: string[];
  stack: string[];
  github: string;
  live: string;
  seoTitle: string;
  seoDescription: string;
}[] = [
  {
    slug: "shortgen",
    name: "ShortGen",
    category: "software",
    kind: "Software",
    summary:
      "Multi-tenant SaaS that turns a topic into short-form video — workspaces, jobs, templates and credits.",
    features: ["Multi-tenant workspaces", "Render jobs", "Templates", "Credits"],
    stack: ["Next.js", "Python", "Postgres"],
    github: "https://github.com/SparkxDating/ShortGen",
    live: "https://shortgen-pi.vercel.app",
    seoTitle: "ShortGen — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of ShortGen, a multi-tenant SaaS for short-form video: workspaces, jobs, templates and credits.",
  },
  {
    slug: "cpaas",
    name: "Open CPaaS",
    category: "software",
    kind: "Software",
    summary:
      "Twilio-style communications platform: messaging, verify, voice, email, provider routing and an Android SMS gateway.",
    features: [
      "Messaging",
      "Verify",
      "Voice",
      "Email",
      "Provider routing",
      "Android SMS gateway",
    ],
    stack: ["NestJS", "Next.js", "Kotlin"],
    github: "https://github.com/SparkxDating/cpaas",
    live: "",
    seoTitle: "Open CPaaS — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of Open CPaaS: messaging, verify, voice, email, provider routing and an Android SMS gateway.",
  },
  {
    slug: "taxpilot",
    name: "TaxPilot AI",
    category: "software",
    kind: "Software",
    summary:
      "Guided ITR-3 / ITR-4 preparation for AY 2026–27, with eligibility checks and official ITR-4 JSON export.",
    features: [
      "Guided ITR-3 preparation",
      "Guided ITR-4 preparation",
      "Eligibility checks",
      "Official ITR-4 JSON export",
    ],
    stack: ["Next.js", "Prisma", "TypeScript"],
    github: "https://github.com/SparkxDating/taxpilot-ai",
    live: "https://taxpilot-ai-beta.vercel.app",
    seoTitle: "TaxPilot AI — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of TaxPilot AI: guided ITR-3 and ITR-4 preparation for AY 2026–27, with eligibility checks and ITR-4 JSON export.",
  },
  {
    slug: "eye-camp",
    name: "Eye Camp Registration",
    category: "events",
    kind: "Events",
    summary:
      "Hindi, mobile-first registration for a free cataract camp by Trishakti Seva Foundation and RJ Shankara Eye Hospital, Varanasi — slips, QR codes and an admin desk.",
    features: [
      "Hindi, mobile-first registration",
      "Registration slips",
      "QR codes",
      "Admin desk",
    ],
    stack: ["TypeScript", "Postgres"],
    github: "https://github.com/SparkxDating/QRLogin",
    live: "https://qr-login-six.vercel.app",
    seoTitle: "Eye Camp Registration — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of the Hindi, mobile-first eye-camp registration system for a free cataract camp in Varanasi.",
  },
  {
    slug: "navi-zindagi",
    name: "Navi Zindagi",
    category: "campaigns",
    kind: "Campaigns",
    summary:
      "Fundraising and volunteer site for the Navi Zindagi Foundation’s flood-relief work in Nepal and Assam.",
    features: ["Fundraising pages", "Volunteer information", "Flood-relief context for Nepal and Assam"],
    stack: ["TypeScript"],
    github: "https://github.com/SparkxDating/Navizindagi",
    live: "https://navizindagi.vercel.app",
    seoTitle: "Navi Zindagi — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of the Navi Zindagi fundraising and volunteer site for flood-relief work in Nepal and Assam.",
  },
  {
    slug: "influencer-os",
    name: "AI Influencer OS",
    category: "marketing",
    kind: "Marketing",
    summary:
      "A workspace to create AI influencer profiles, draft content, approve posts and keep sponsored captions disclosed.",
    features: [
      "AI influencer profiles",
      "Content drafts",
      "Post approval",
      "Sponsored caption disclosure",
    ],
    stack: ["Next.js", "Prisma"],
    github: "https://github.com/SparkxDating/ai-influencer-os",
    live: "",
    seoTitle: "AI Influencer OS — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of AI Influencer OS: profiles, content drafts, post approval and disclosed sponsored captions.",
  },
  {
    slug: "buildsite",
    name: "BuildSite",
    category: "software",
    kind: "Software",
    summary: "Construction product for roles, GPS attendance, stock, billing and a mobile view.",
    features: ["Roles", "GPS attendance", "Stock", "Billing", "Mobile"],
    stack: ["TypeScript"],
    github: "",
    live: "https://buildsite-one.vercel.app",
    seoTitle: "BuildSite — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of BuildSite, a construction product for roles, attendance, stock and billing.",
  },
  {
    slug: "brokerfree",
    name: "BrokerFree",
    category: "software",
    kind: "Software",
    summary: "Multi-tenant real estate operating system with CRM, listings and a pipeline.",
    features: ["Multi-tenant", "CRM", "Listings", "Pipeline"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "BrokerFree — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of BrokerFree, a multi-tenant real estate system with CRM, listings and a pipeline.",
  },
  {
    slug: "brjbharat",
    name: "BRJ Bharat",
    category: "campaigns",
    kind: "Campaigns",
    summary:
      "Bilingual website for Bhartiya Rashtriya Jansatta, with volunteer, contact, newsletter and contribution forms, a news feed and an admin console.",
    features: ["English and Hindi", "Volunteer and contribution forms", "News feed", "Admin console"],
    stack: ["JavaScript", "Postgres"],
    github: "",
    live: "https://brjbharat.vercel.app",
    seoTitle: "BRJ Bharat — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of the bilingual Bhartiya Rashtriya Jansatta website, including forms, a news feed and an admin console.",
  },
  {
    slug: "carnispora",
    name: "Carnispora",
    category: "software",
    kind: "Software",
    summary: "Hyperlocal instant-delivery product.",
    features: ["Hyperlocal delivery"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "Carnispora — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of Carnispora, a hyperlocal instant-delivery product.",
  },
  {
    slug: "edgebot",
    name: "EdgeBot",
    category: "software",
    kind: "Software",
    summary: "Crypto futures trading bot built with Next.js.",
    features: ["Futures trading bot", "Next.js"],
    stack: ["Next.js", "TypeScript"],
    github: "",
    live: "",
    seoTitle: "EdgeBot — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of EdgeBot, a crypto futures trading bot built with Next.js.",
  },
  {
    slug: "spark",
    name: "Spark",
    category: "software",
    kind: "Software",
    summary: "Dating app with accounts, a swipe deck, matches and real-time chat.",
    features: ["Accounts", "Swipe deck", "Matches", "Real-time chat"],
    stack: ["Next.js", "TypeScript", "Supabase"],
    github: "",
    live: "https://dating-app-me-5f01.vercel.app",
    seoTitle: "Spark — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of Spark, a dating app with accounts, a swipe deck, matches and chat.",
  },
  {
    slug: "spark-mobile",
    name: "Spark Mobile",
    category: "software",
    kind: "Software",
    summary: "Native iOS and Android app for Spark, sharing a backend with the web app.",
    features: ["iOS", "Android", "Shared backend with the web app"],
    stack: ["Expo", "TypeScript"],
    github: "",
    live: "",
    seoTitle: "Spark Mobile — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of Spark Mobile, the iOS and Android app for Spark.",
  },
  {
    slug: "krushnaai",
    name: "KrushnaAI",
    category: "software",
    kind: "Software",
    summary: "Agent marketplace and agent-as-a-service product.",
    features: ["Agent marketplace", "Agent-as-a-service"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "KrushnaAI — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of KrushnaAI, an agent marketplace and agent-as-a-service product.",
  },
  {
    slug: "krushnalabs",
    name: "KrushnaLabs",
    category: "software",
    kind: "Software",
    summary: "Product for building software by talking to AI.",
    features: ["AI software builder"],
    stack: ["TypeScript"],
    github: "",
    live: "https://krushnalabs.vercel.app",
    seoTitle: "KrushnaLabs — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of KrushnaLabs, a product for building software by talking to AI.",
  },
  {
    slug: "ludo-kingdom",
    name: "Ludo Kingdom",
    category: "software",
    kind: "Software",
    summary: "Android and iOS Ludo app with multiplayer.",
    features: ["Android", "iOS", "Multiplayer"],
    stack: ["TypeScript", "Supabase"],
    github: "",
    live: "",
    seoTitle: "Ludo Kingdom — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of Ludo Kingdom, an Android and iOS Ludo app with multiplayer.",
  },
  {
    slug: "mediagrab",
    name: "MediaGrab",
    category: "software",
    kind: "Software",
    summary: "Tool to download videos and images from X, Instagram, Facebook and YouTube.",
    features: ["X", "Instagram", "Facebook", "YouTube"],
    stack: ["TypeScript"],
    github: "",
    live: "https://media-downloader-neon.vercel.app",
    seoTitle: "MediaGrab — Project overview | MKSAnalytIQ",
    seoDescription:
      "Project overview of MediaGrab, a tool for downloading videos and images from X, Instagram, Facebook and YouTube.",
  },
  {
    slug: "metasocial",
    name: "MetaSocial",
    category: "marketing",
    kind: "Marketing",
    summary: "Scheduler for posts, mentions, rules and AI drafts.",
    features: ["Post scheduling", "Mentions", "Rules", "AI drafts"],
    stack: ["Next.js", "Supabase"],
    github: "",
    live: "https://metasocial-mu.vercel.app",
    seoTitle: "MetaSocial — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of MetaSocial, a scheduler for posts, mentions, rules and AI drafts.",
  },
  {
    slug: "omnisell",
    name: "OmniSell",
    category: "software",
    kind: "Software",
    summary: "Multi-channel ecommerce management. One product, every channel.",
    features: ["Multi-channel ecommerce"],
    stack: ["TypeScript"],
    github: "",
    live: "https://omnisell-swart.vercel.app",
    seoTitle: "OmniSell — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of OmniSell, multi-channel ecommerce management.",
  },
  {
    slug: "rajput-rishta",
    name: "Rajput Rishta",
    category: "software",
    kind: "Software",
    summary: "Community matrimony product for web and mobile.",
    features: ["Web", "Mobile"],
    stack: ["Next.js", "Expo"],
    github: "",
    live: "https://rajput-rishta-mocha.vercel.app",
    seoTitle: "Rajput Rishta — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of Rajput Rishta, a community matrimony product for web and mobile.",
  },
  {
    slug: "siteforge",
    name: "SiteForge",
    category: "software",
    kind: "Software",
    summary: "SaaS for generating websites from one prompt, with billing and custom domains.",
    features: ["Prompted websites", "Billing", "Custom domains"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "SiteForge — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of SiteForge, a SaaS for generating websites from a prompt.",
  },
  {
    slug: "storageclean",
    name: "StorageClean",
    category: "software",
    kind: "Software",
    summary: "iOS app for freeing space across photos, cache and tips.",
    features: ["Photos", "Cache", "Tips"],
    stack: ["Swift"],
    github: "",
    live: "",
    seoTitle: "StorageClean — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of StorageClean, an iOS app for freeing device space.",
  },
  {
    slug: "tubeforge",
    name: "TubeForge",
    category: "marketing",
    kind: "Marketing",
    summary: "YouTube channel tool for scripts, video and a publish pipeline.",
    features: ["Scripts", "Video", "Publish pipeline"],
    stack: ["TypeScript"],
    github: "",
    live: "",
    seoTitle: "TubeForge — Project overview | MKSAnalytIQ",
    seoDescription: "Project overview of TubeForge, a YouTube channel tool for scripts, video and publishing.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectsIn(categories: readonly ProjectCategory[]) {
  return projects.filter((project) => categories.includes(project.category));
}

export type Testimonial = {
  client: string;
  company: string;
  role: string;
  quote: string;
  photo?: string;
  /** Only `published: true` entries are rendered. Do not publish placeholders. */
  published: boolean;
};

/**
 * Genuine testimonials only. The sample below is a placeholder and is not rendered.
 * Replace the text, then set published to true.
 */
export const testimonials: Testimonial[] = [
  {
    client: "Placeholder — replace with a real client",
    company: "Placeholder company",
    role: "Role",
    quote: "Placeholder quote. Do not publish this text.",
    published: false,
  },
];

export const publishedTestimonials = testimonials.filter((item) => item.published);

export const budgetOptions = ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+", "Not sure"] as const;

export const timelineOptions = ["Immediately", "This month", "1–3 months", "Just exploring"] as const;

export const contactMethods = ["WhatsApp", "Phone", "Email"] as const;

export const faqs: { id: string; q: string; a: string; tags: string[] }[] = [
  {
    id: "cost",
    q: "How much does digital marketing cost?",
    a: "There isn’t a single published price. Cost depends on the channels, how long the work runs, and whether a landing page or tracking setup is included. Share a budget range on the consultation form and you’ll get a written scope before anything starts. This site does not list package prices.",
    tags: ["home", "contact", "marketing"],
  },
  {
    id: "outside",
    q: "Do you work with businesses outside Noida?",
    a: "Yes. The studio is in Sector 8, Noida, and projects run with businesses across India. A visit is welcome when it helps; otherwise calls and WhatsApp cover the rest.",
    tags: ["home", "contact", "about"],
  },
  {
    id: "both",
    q: "Can you build my website and manage marketing?",
    a: "Yes. Marketing, design and development can sit in one engagement so the site, the campaigns and the follow-up are planned together. You can also hire one of those practices on its own.",
    tags: ["home", "contact", "marketing", "software", "social"],
  },
  {
    id: "ownership",
    q: "Who owns the website/source code?",
    a: "Ownership is set in the written scope for that project, not on this website. Where a build is part of the work, the scope says what is handed over — including a repository when that is what was agreed. This page is not a contract and does not transfer intellectual property by itself.",
    tags: ["home", "contact", "software"],
  },
  {
    id: "ads",
    q: "Do you manage Google and Meta Ads?",
    a: "Yes. Digital marketing engagements can include Google Ads, Meta Ads, landing pages, conversion tracking, retargeting and performance reporting. What is included is listed in the scope you approve.",
    tags: ["home", "contact", "marketing"],
  },
  {
    id: "timeline",
    q: "How long does it take to build a website?",
    a: "It depends on the number of pages, the content you already have, and any integrations. A timeline is part of the written scope before production starts. This site does not promise a fixed number of days.",
    tags: ["home", "contact", "software"],
  },
  {
    id: "social-scope",
    q: "What does social media management include?",
    a: "Usually a monthly content plan, reels and stills, captions in your voice, community replies and a review of what to change next month. You approve the calendar before it goes out.",
    tags: ["social"],
  },
  {
    id: "events-scope",
    q: "What does event management include?",
    a: "A typical event brief covers the run of show, vendor and on-site coordination, invites and registration, reminder messages, and recap content. Promotion before the event can be added when you want it. The exact list is in the scope.",
    tags: ["events"],
  },
];

export function faqsFor(tag: string) {
  return faqs.filter((item) => item.tags.includes(tag));
}
