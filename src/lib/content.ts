/**
 * Editable business content for MKSAnalytIQ.
 * Change copy, offers, and public links here — components read from this file.
 *
 * GitHub: public product code is published under `github` / `githubHandle`.
 * Update those fields if the account changes. Do not hardcode the handle in components.
 * Project repository URLs below are the real public repos; leave a URL blank rather than guessing.
 */

export const site = {
  url: "https://mksanalytiq.in",
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
  title: "Build Digital. Grow Smarter.",
  lede: "MKSANALYTIQ is a technology and digital growth studio in Noida, helping businesses across Delhi NCR and India with digital marketing, websites, software, apps and AI solutions.",
  trust: "Based in Noida • Serving Delhi NCR and India",
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
  { to: "/digital-marketing-software-delhi-ncr", label: "Delhi NCR" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;

export type ServiceId = "marketing" | "social" | "events" | "software" | "web" | "app" | "ai";

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
  h1: string;
  linkLabel: string;
  blurb: string;
  suitable: string;
  problem: string;
  solution: string;
  sections: { title: string; text: string }[];
  deliverables: string[];
  cta: string;
  related: ProjectCategory[];
  relatedServices: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
}[] = [
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    h1: "Digital Marketing Company in Noida",
    linkLabel: "digital marketing services",
    blurb:
      "Performance marketing, social media, SEO, content and analytics for businesses that want enquiries they can actually follow up.",
    suitable:
      "Businesses in Noida and across Delhi NCR that want Google or Meta enquiries, with a page and a follow-up path you can read.",
    problem:
      "Spend often goes out before the offer, the landing page and the tracking agree. Without that, it is hard to tell what a lead cost.",
    solution:
      "We treat the offer, ads, landing page, retargeting and reporting as one system. You approve a written scope before anything launches.",
    sections: [
      {
        title: "Performance marketing",
        text: "Performance marketing here means campaigns aimed at a number you care about — leads, bookings or sales. A typical scope can include Google Ads, Meta Ads, a landing page, conversion tracking and retargeting. Reporting shows what the spend produced, and you see it before the next month is planned.",
      },
      {
        title: "Social media, SEO and content",
        text: "Social media marketing can run beside the ads, or as its own monthly plan with a calendar you approve. SEO and content strategy mean service pages and articles that answer real questions, so search and the sales conversation describe the same offer. Nothing on this page promises a ranking.",
      },
      {
        title: "Analytics, leads and conversion",
        text: "Lead generation and conversion optimization, in this studio, are the path from an ad or a page to a form, call or WhatsApp someone can answer — plus a monthly read of spend, reach and enquiries. We keep what is working and change what is not. We do not publish invented results.",
      },
    ],
    deliverables: [
      "Google Ads",
      "Meta Ads",
      "Landing pages",
      "Conversion tracking",
      "Retargeting",
      "Performance reporting",
      "SEO and content pages",
    ],
    cta: "Get a Marketing Plan",
    related: ["marketing", "campaigns"],
    relatedServices: ["web-development", "social-media", "software-development"],
    image: "/media/desk.jpg",
    imageAlt: "Digital marketing planning desk at MKSAnalytIQ",
    seoTitle: "Digital Marketing Company in Noida | MKSANALYTIQ",
    seoDescription:
      "MKSANALYTIQ provides digital marketing services in Noida and Delhi NCR, including performance marketing, social media, SEO, content and analytics.",
  },
  {
    id: "web",
    slug: "web-development",
    title: "Web Development",
    h1: "Web Development Company in Noida",
    linkLabel: "web development services",
    blurb:
      "Business websites, web applications and the admin tools behind them, built so your team can run the site after launch.",
    suitable:
      "Companies in Noida, Delhi NCR and across India that need a public website, an online shop, or a web application their own staff can use.",
    problem:
      "A site gets launched without a clear page for the offer, or a tool is promised and the team has no screen they can actually operate.",
    solution:
      "We scope the pages or the application, build it in the open, and hand over what the written agreement says you keep.",
    sections: [
      {
        title: "Website development",
        text: "Website development covers business websites, corporate websites and landing pages. The page, the offer and the way a person gets in touch are planned together — a short site for one service, or a larger company site with the sections you actually need.",
      },
      {
        title: "E-commerce websites",
        text: "E-commerce websites are in scope when you need products, a cart and a checkout your team can operate. Catalogue size, payments and any later channel connections are written down before the build starts.",
      },
      {
        title: "Web applications and admin dashboards",
        text: "Web applications and admin dashboards are for work that is more than a brochure: roles, records and the screens staff use. These are custom builds, scoped around the job, not a theme with the logo swapped.",
      },
      {
        title: "API integrations and website maintenance",
        text: "API integrations connect the site to forms, payments, a CRM or another system you already run. Website maintenance — updates, fixes and small changes after launch — is available when you want it, and is listed in the scope rather than assumed.",
      },
    ],
    deliverables: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
      "Admin dashboards",
      "API integrations",
      "Website maintenance",
    ],
    cta: "Discuss a Website",
    related: ["software"],
    relatedServices: ["software-development", "app-development", "digital-marketing", "ai-development"],
    image: "/media/work/buildsite.jpg",
    imageAlt: "BuildSite, a custom web application developed by MKSAnalytIQ",
    seoTitle: "Web Development Company in Noida | MKSANALYTIQ",
    seoDescription:
      "MKSANALYTIQ provides website and web application development in Noida, Delhi NCR and across India, including business websites, web apps, dashboards and custom digital solutions.",
  },
  {
    id: "software",
    slug: "software-development",
    title: "Software Development",
    h1: "Software Development Company in Noida",
    linkLabel: "custom software development",
    blurb:
      "Custom software, SaaS platforms and business systems your team can run after the handover.",
    suitable:
      "Teams in Noida, Delhi NCR and across India that need software their own people can operate, not a file they cannot change.",
    problem:
      "A tool gets delivered without a handover the team can use, or the public site and the internal system are planned as if they were unrelated.",
    solution:
      "We scope the build, ship it in the open, and hand over what the written agreement says you keep — including a repository when that is part of the scope.",
    sections: [
      {
        title: "Custom software and SaaS",
        text: "Custom software for one operation, or SaaS development when the product needs accounts, roles and a way to charge. Published studio work includes multi-tenant products and internal tools. The scope says what ships and what is handed over.",
      },
      {
        title: "Web applications, dashboards and business software",
        text: "Web applications, business software and dashboards cover the screens a team uses to do the work: records, pipelines, billing and the rest of the operation. Database-backed applications are part of that when the data has to stay in your system.",
      },
      {
        title: "API development",
        text: "API development connects the product to the other tools you already use, or exposes your own data to a website or an app. The endpoints and the access rules are part of the written scope.",
      },
      {
        title: "AI-enabled software",
        text: "AI-enabled software means a feature inside the product — a guided flow, a draft, or an assistant a person reviews. It is an integration or a feature in the scope, not a claim that MKSAnalytIQ trains its own models.",
      },
    ],
    deliverables: [
      "Custom software",
      "SaaS development",
      "Web applications",
      "Business software",
      "Dashboards",
      "API development",
      "Database-backed applications",
      "AI-enabled software",
      "Repository handover",
    ],
    cta: "Discuss a Build",
    related: ["software"],
    relatedServices: ["web-development", "app-development", "ai-development", "digital-marketing"],
    image: "/media/devices.jpg",
    imageAlt: "Laptop and phone used for software development at MKSAnalytIQ",
    seoTitle: "Software Development Company in Noida | MKSANALYTIQ",
    seoDescription:
      "MKSANALYTIQ builds custom software, SaaS platforms, web applications, dashboards and business systems for companies in Noida, Delhi NCR and across India.",
  },
  {
    id: "app",
    slug: "app-development",
    title: "App Development",
    h1: "App Development Company in Noida",
    linkLabel: "app development",
    blurb:
      "Custom mobile and business applications, with an admin side and an API when the app has to talk to something else.",
    suitable:
      "Companies in Noida, Delhi NCR and across India that need an Android, iOS or cross-platform app their customers or staff will actually open.",
    problem:
      "An app is commissioned without a clear job, or it ships with no way for the team to manage what is inside it.",
    solution:
      "We write down the platforms, the screens and the handover, then build against that scope. Maintenance after launch is included only when the scope says so.",
    sections: [
      {
        title: "Android, iOS and cross-platform apps",
        text: "Android app development, iOS app development and cross-platform app development are chosen for the brief. Published studio projects have used Expo for cross-platform apps, Swift for an iOS app, and Kotlin for an Android component. A new project does not automatically use every one of those. The scope names the stack.",
      },
      {
        title: "Business apps, admin panels and APIs",
        text: "Business apps cover a workflow customers or staff repeat. An admin panel and API integration are included when the app has to share data with a website, a database or a system you already run.",
      },
      {
        title: "App maintenance",
        text: "App maintenance is updates after the first release, when you want them. What continues — fixes, store releases, small changes — is agreed in writing rather than assumed.",
      },
    ],
    deliverables: [
      "Android app development",
      "iOS app development",
      "Cross-platform app development",
      "API integration",
      "Admin panels",
      "Business apps",
      "App maintenance",
    ],
    cta: "Discuss an App",
    related: ["software"],
    relatedServices: ["software-development", "web-development", "ai-development"],
    image: "/media/work/spark-mobile.jpg",
    imageAlt: "Spark Mobile, an iOS and Android app developed by MKSAnalytIQ",
    seoTitle: "App Development Company in Noida | MKSANALYTIQ",
    seoDescription:
      "MKSANALYTIQ develops custom mobile and business applications for companies in Noida, Delhi NCR and across India.",
  },
  {
    id: "ai",
    slug: "ai-development",
    title: "AI Development",
    h1: "AI Development & Automation in Noida",
    linkLabel: "AI development",
    blurb:
      "AI-powered software, automation and chatbots built as product features your team can review — not as a research claim.",
    suitable:
      "Businesses in Noida, Delhi NCR and across India that want a chatbot, a workflow or a tool that uses AI inside a defined job.",
    problem:
      "AI is added as a slogan, with no workflow, no review step and no agreement about which tool is actually being used.",
    solution:
      "We scope the job: what the software should draft, route or answer, which integrations it uses, and who approves the output. MKSAnalytIQ does not claim a proprietary foundation model.",
    sections: [
      {
        title: "AI-powered applications and chatbots",
        text: "AI-powered applications and AI chatbots are built for a specific job — answering questions about your offer, guiding a form, or drafting a reply for a person to approve. The value is the workflow around the model, not a claim that the studio trains its own.",
      },
      {
        title: "Automation and AI integrations",
        text: "Business automation and workflow automation connect steps your team already does: intake, a draft, an approval, a handoff. AI integrations use external AI tools where they help that sequence. The tools and the limits are named in the scope.",
      },
      {
        title: "Dashboards and business tools",
        text: "AI dashboards and other intelligent business tools put that work in one place so someone can see what was drafted, what was approved and what still needs a person. They are business software with an AI feature, not an unsupervised system.",
      },
    ],
    deliverables: [
      "AI-powered applications",
      "AI chatbots",
      "Business automation",
      "AI integrations",
      "Workflow automation",
      "AI dashboards",
      "Intelligent business tools",
    ],
    cta: "Discuss an AI Build",
    related: ["software"],
    relatedServices: ["software-development", "web-development", "app-development"],
    image: "/media/work/taxpilot.jpg",
    imageAlt: "TaxPilot AI, a guided software project developed by MKSAnalytIQ",
    seoTitle: "AI Development & Automation Company in Noida | MKSANALYTIQ",
    seoDescription:
      "MKSANALYTIQ builds AI-powered software, automation workflows, chatbots and intelligent business tools for companies in Noida, Delhi NCR and India.",
  },
  {
    id: "social",
    slug: "social-media",
    title: "Social Media",
    h1: "Social Media",
    linkLabel: "social media",
    blurb:
      "A steady presence on the platforms your customers already use, written in your voice and posted on a calendar you approve.",
    suitable:
      "Teams that need a regular presence without staffing a full in-house social desk.",
    problem:
      "Posting stalls, or it runs in a voice that doesn’t sound like the business. Replies pile up and nobody owns the calendar.",
    solution:
      "A monthly plan you approve, then reels, stills and community replies in that voice — with a review of what to change next month.",
    sections: [
      {
        title: "What a month includes",
        text: "Usually a content plan, reels and stills, captions in your voice, community replies and a review. You approve the calendar before it goes out. Paid social, when you want it, is scoped with digital marketing rather than assumed here.",
      },
    ],
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
    relatedServices: ["digital-marketing", "web-development"],
    image: "/media/studio.jpg",
    imageAlt: "Social content setup at the MKSAnalytIQ studio",
    seoTitle: "Social Media Marketing in Noida | MKSAnalytIQ",
    seoDescription:
      "Social media management from a Noida studio: content calendars, reels, community replies and a monthly review you approve. MKSAnalytIQ.",
  },
  {
    id: "events",
    slug: "event-management",
    title: "Event Management",
    h1: "Event Management",
    linkLabel: "event management",
    blurb:
      "Launches, corporate gatherings and community programmes — planned on the ground and promoted before the doors open.",
    suitable:
      "Organisers of a launch, a corporate gathering or a community programme who want the room and the promotion planned together.",
    problem:
      "The venue, the guest list and the promotion are often three separate jobs. The date arrives and the list is still thin.",
    solution:
      "One plan for the run of show, the vendors, registration and the messages that go out before and after the event.",
    sections: [
      {
        title: "What an event brief covers",
        text: "A typical brief covers the run of show, vendor and on-site coordination, invites and registration, reminder messages, and recap content. Promotion before the event can be added with digital marketing when you want it. The exact list is in the scope.",
      },
    ],
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
    relatedServices: ["digital-marketing"],
    image: "/media/event.jpg",
    imageAlt: "Banquet hall set for a corporate event",
    seoTitle: "Event Management in Noida | MKSAnalytIQ",
    seoDescription:
      "Event management for launches, corporate gatherings and community programmes — planning, registration and promotion. MKSAnalytIQ, Noida.",
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
    seoTitle: "ShortGen — Short-Form Video SaaS | MKSAnalytIQ",
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
    seoTitle: "Open CPaaS — Messaging and Communications Platform | MKSAnalytIQ",
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
    seoTitle: "TaxPilot AI — Guided ITR Preparation | MKSAnalytIQ",
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
    seoTitle: "Eye Camp Registration — Hindi Registration System | MKSAnalytIQ",
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
    seoTitle: "Navi Zindagi — Fundraising and Volunteer Site | MKSAnalytIQ",
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
    seoTitle: "AI Influencer OS — Content Workspace | MKSAnalytIQ",
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
    seoTitle: "BuildSite — Construction Operations Software | MKSAnalytIQ",
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
    seoTitle: "BrokerFree — Real Estate CRM and Listings | MKSAnalytIQ",
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
    seoTitle: "BRJ Bharat — Bilingual Organisation Website | MKSAnalytIQ",
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
    seoTitle: "Carnispora — Hyperlocal Delivery Product | MKSAnalytIQ",
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
    seoTitle: "EdgeBot — Crypto Futures Trading Bot | MKSAnalytIQ",
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
    seoTitle: "Spark — Dating App with Chat | MKSAnalytIQ",
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
    seoTitle: "Spark Mobile — iOS and Android App | MKSAnalytIQ",
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
    seoTitle: "KrushnaAI — Agent Marketplace | MKSAnalytIQ",
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
    seoTitle: "KrushnaLabs — AI Software Builder | MKSAnalytIQ",
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
    seoTitle: "Ludo Kingdom — Multiplayer Mobile Game | MKSAnalytIQ",
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
    seoTitle: "MediaGrab — Media Download Tool | MKSAnalytIQ",
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
    seoTitle: "MetaSocial — Social Post Scheduler | MKSAnalytIQ",
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
    seoTitle: "OmniSell — Multi-Channel Ecommerce Software | MKSAnalytIQ",
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
    seoTitle: "Rajput Rishta — Community Matrimony Product | MKSAnalytIQ",
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
    seoTitle: "SiteForge — Website Generation SaaS | MKSAnalytIQ",
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
    seoTitle: "StorageClean — iOS Storage App | MKSAnalytIQ",
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
    seoTitle: "TubeForge — YouTube Publishing Tool | MKSAnalytIQ",
    seoDescription: "Project overview of TubeForge, a YouTube channel tool for scripts, video and publishing.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}


export function relatedServices(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });
}

export function servicesForProject(project: {
  category: ProjectCategory;
  name: string;
  summary: string;
  features: readonly string[];
  stack: readonly string[];
}) {
  const blob = `${project.name} ${project.summary} ${project.features.join(" ")} ${project.stack.join(" ")}`;
  const slugs: string[] = [];
  if (project.category === "marketing") slugs.push("digital-marketing", "social-media");
  if (project.category === "campaigns") slugs.push("web-development", "digital-marketing");
  if (project.category === "events") slugs.push("event-management");
  if (project.category === "software") slugs.push("software-development", "web-development");
  if (/\b(ios|android|mobile|expo|swift|kotlin)\b/i.test(blob)) slugs.push("app-development");
  if (/ai\b/i.test(blob)) slugs.push("ai-development");
  return relatedServices([...new Set(slugs)]);
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
    a: "Yes. The only office is at C-81, C Block, Sector 8, Noida. From there the studio works with businesses across Delhi NCR — including Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad — and elsewhere in India. Those are service areas, not other offices. A visit to Noida is welcome when it helps; otherwise calls and WhatsApp cover the rest.",
    tags: ["home", "contact", "about", "marketing", "web", "software", "app", "ai"],
  },
  {
    id: "both",
    q: "Can you build my website and manage marketing?",
    a: "Yes. Marketing, design and development can sit in one engagement so the site, the campaigns and the follow-up are planned together. You can also hire one of those practices on its own.",
    tags: ["home", "contact", "marketing", "software", "social", "web", "app", "ai"],
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

  {
    id: "web-types",
    q: "What types of websites do you build?",
    a: "Business and corporate websites, landing pages, e-commerce websites, and custom web applications such as admin dashboards. The written scope lists the pages, integrations and handover for that project.",
    tags: ["web"],
  },
  {
    id: "web-apps",
    q: "Do you build custom web applications?",
    a: "Yes. Alongside marketing websites, the studio builds web applications, dashboards and other tools backed by an API and a database when the brief needs them.",
    tags: ["web", "software"],
  },
  {
    id: "web-maintain",
    q: "Do you provide website maintenance?",
    a: "Yes, when it is included in the scope. Maintenance can cover updates, fixes and small changes after launch. It is agreed in writing, not assumed.",
    tags: ["web"],
  },
  {
    id: "app-kinds",
    q: "What kinds of apps do you build?",
    a: "Business apps, plus Android, iOS and cross-platform apps. Published studio work includes Expo apps, a Swift iOS app and a Kotlin Android component. The stack for a new brief is chosen in the scope.",
    tags: ["app"],
  },
  {
    id: "app-maintain",
    q: "Do you maintain apps after launch?",
    a: "App maintenance can be part of the engagement when you want updates after the first release. What is included is written into the scope.",
    tags: ["app"],
  },
  {
    id: "ai-what",
    q: "What does AI development include?",
    a: "Software that uses AI for a defined job: chatbots, automation, integrations with AI tools, dashboards and other business tools. MKSAnalytIQ does not claim a proprietary foundation model. The scope says which tools and workflows are included.",
    tags: ["ai", "software"],
  },
];

export function faqsFor(tag: string) {
  return faqs.filter((item) => item.tags.includes(tag));
}
