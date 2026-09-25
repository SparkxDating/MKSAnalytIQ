/**
 * Editable business content for MKSAnalytIQ.
 * Change copy, offers, and public links here — components read from this file.
 *
 * GitHub: public product code is published under `github` / `githubHandle`.
 * Update those fields if the account changes. Do not hardcode the handle in components.
 * Project repository URLs below are the real public repos; leave a URL blank rather than guessing.
 */

export const site = {
  url: "https://www.mksanalytiq.in",
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
  email: "hello@mksanalytiq.in",
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
  lede: "MKSAnalytIQ is a technology and digital growth studio in Noida, helping businesses across Delhi NCR and India with digital marketing, websites, software, apps and AI solutions.",
  trust: "Based in Noida • Serving Delhi NCR and India",
  primaryCta: "Book Free Consultation",
  secondaryCta: "Chat on WhatsApp",
} as const;

export const finalCta = {
  title: "Have a project in mind?",
  text: "Tell us what you want to market, build or improve. The studio is in Noida and works with businesses across Delhi NCR and India.",
  primary: "Book Free Consultation",
  secondary: "Chat on WhatsApp",
} as const;

export const trustStatement = "Marketing + Technology under one roof";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerCompany = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/digital-marketing-software-delhi-ncr", label: "Delhi NCR" },
  { to: "/seo-services-noida", label: "SEO in Noida" },
  { to: "/google-ads-agency-noida", label: "Google Ads in Noida" },
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
  /** One sentence above the shared five-step process. */
  processIntro?: string;
  /** Factual tools used on published work. Not a promise for the next brief. */
  technologyNote?: string;
  /** Replaces the default “Who it is for” heading when set. */
  audienceTitle?: string;
  /** Replaces the default “Deliverables” heading when set. */
  deliverablesTitle?: string;
  /** Replaces the default “Process” heading when set. */
  processTitle?: string;
  /** Page-specific process. Other pages keep the shared five steps. */
  processSteps?: { n: string; title: string; text: string }[];
  /** Extra list card, same treatment as deliverables. */
  serviceMenu?: { title: string; intro?: string; items: string[] };
  /** Bottom button label. Hero keeps `cta`. */
  closingCta?: string;
  /** FAQ ids for this page only, in display order. */
  faqIds?: string[];
}[] = [
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    h1: "Digital Marketing Company in Noida",
    linkLabel: "digital marketing services",
    blurb:
      "SEO, Google Ads, Meta Ads, social, content and reporting for businesses that want enquiries someone can answer.",
    suitable:
      "A business that already has an offer and needs people to enquire from search, ads or social, then needs someone on the team to answer. That might be a first campaign, a page that matches the ad, or a monthly read of spend and enquiries. No particular industry is required. The studio is in Noida, and this work is available across Delhi NCR and India.",
    problem:
      "Spend often starts before the offer, the page and the tracking agree. Without that, it is hard to tell which enquiry came from which channel.",
    solution:
      "The offer, the channels, the landing page and the report are one written scope. You approve it before anything launches. The scope does not promise a ranking or a number of leads.",
    sections: [],
    serviceMenu: {
      title: "Digital Marketing Services",
      intro: "A project uses the items named in its scope. The others stay off until you add them.",
      items: [
        "SEO",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Content Marketing",
        "Lead Generation",
        "Analytics",
        "Conversion Optimization",
      ],
    },
    audienceTitle: "Who We Help",
    deliverablesTitle: "What You Get",
    deliverables: [
      "A written scope before launch",
      "Only the channels that scope names",
      "A landing page when the scope includes one",
      "Tracking on the form, call or WhatsApp path",
      "A report of enquiries and spend",
      "Changes after the first results, inside that scope",
    ],
    cta: "Book Free Consultation",
    closingCta: "Talk About Your Marketing Goals",
    related: ["marketing", "campaigns"],
    relatedServices: ["web-development", "software-development", "app-development", "ai-development"],
    image: "/media/desk.jpg",
    imageAlt: "Digital marketing planning desk at MKSAnalytIQ",
    seoTitle: "Digital Marketing Company in Noida | MKSAnalytIQ",
    seoDescription:
      "Digital marketing from MKSAnalytIQ in Noida: SEO, Google Ads, Meta Ads, social, content and reporting for businesses across Delhi NCR and India.",
    processTitle: "Our Digital Growth Process",
    processIntro:
      "Five steps for a marketing engagement. You approve the plan before launch, and the report is enquiries and spend — not a ranking or a lead-count promise.",
    processSteps: [
      {
        n: "01",
        title: "Understand",
        text: "The offer, who should enquire, and what already exists: a site, ads, or tracking.",
      },
      {
        n: "02",
        title: "Plan",
        text: "A written scope: channels, page, tracking, timeline and fee. You approve it before launch.",
      },
      {
        n: "03",
        title: "Launch",
        text: "Campaigns and pages go live as that scope describes.",
      },
      {
        n: "04",
        title: "Measure",
        text: "Enquiries, spend and the path they came from, in a report you can read.",
      },
      {
        n: "05",
        title: "Optimize",
        text: "Keep what produces enquiries and change what does not, inside the scope.",
      },
    ],
    faqIds: ["dm-services", "dm-ads", "dm-measure", "dm-page", "dm-after", "dm-start"],
    technologyNote:
      "Tracking is the form, call or WhatsApp path the report uses. There is no separate ad platform to name here, and this page does not publish campaign results.",
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
        title: "What this service is",
        text: "Web development is the public website or the web application your team uses after launch. That includes business and corporate sites, landing pages, online shops, and custom web applications such as admin dashboards.",
      },
      {
        title: "What is included",
        text: "The scope lists the pages, how someone gets in touch, and any connection to forms, payments, a CRM or another system you already run. Handover is whatever the written agreement says you keep. Website maintenance after launch — updates, fixes and small changes — is included only when the scope says so.",
      },
      {
        title: "How to start",
        text: "Say whether you need a business site, an online shop or a web application, and what content or systems you already have. Book that conversation from the contact page or WhatsApp. The first reply is a scope, not a build.",
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
    cta: "Book Free Consultation",
    related: ["software"],
    relatedServices: ["digital-marketing", "software-development", "app-development", "ai-development"],
    image: "/media/work/buildsite.jpg",
    imageAlt: "BuildSite, a custom web application developed by MKSAnalytIQ",
    seoTitle: "Web Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ provides website and web application development in Noida, Delhi NCR and across India, including business websites, web apps, dashboards and custom digital solutions.",
    processIntro:
      "Website and web-app work follows the studio’s five steps: confirm the pages and the audience, approve the scope, build where you can see progress, launch, then change only what was agreed.",
    technologyNote:
      "Published studio websites and web apps have used Next.js, TypeScript and JavaScript. PostgreSQL and Prisma show up when the product stores its own data. A new project does not automatically use all of those. The scope names the stack.",
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
        title: "What this service is",
        text: "Software development is custom software, a SaaS product or an internal business system your own team can run. It covers web applications, dashboards, APIs and database-backed tools when the operation needs them.",
      },
      {
        title: "What is included",
        text: "The scope says what ships, who can sign in, which other systems it talks to, and whether a repository is part of the handover. An AI feature, if you need one, is a named part of that scope rather than an open-ended research project.",
      },
      {
        title: "How to start",
        text: "Describe the operation the software has to support. The consultation decides whether that is custom software, a SaaS product or a dashboard, and what the handover includes.",
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
    cta: "Book Free Consultation",
    related: ["software"],
    relatedServices: ["web-development", "app-development", "ai-development", "digital-marketing"],
    image: "/media/devices.jpg",
    imageAlt: "Laptop and phone used for software development at MKSAnalytIQ",
    seoTitle: "Software Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ builds custom software, SaaS platforms, web applications, dashboards and business systems for companies in Noida, Delhi NCR and across India.",
    processIntro:
      "Software follows the same five steps: understand the operation, approve a written scope, build in the open, hand over what was agreed, then improve only against that scope.",
    technologyNote:
      "Published studio software has used Next.js, TypeScript, Python, NestJS, PostgreSQL and Prisma. Those are examples from shipped projects, not a stack every brief must use. The scope names what this one will use.",
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
        title: "What this service is",
        text: "App development is a custom Android, iOS or cross-platform application for customers or staff, with an admin side and an API when the app has to share data with a website or another system.",
      },
      {
        title: "What is included",
        text: "The scope names the platforms, the screens, the admin panel and any API. Published studio work has used Expo for cross-platform apps, Swift for an iOS app and Kotlin for an Android component. A new brief does not automatically include every platform. App maintenance after the first release is included only when the scope says so.",
      },
      {
        title: "How to start",
        text: "Say who will use the app and whether it should be Android, iOS or cross-platform, if you already know. You can book that conversation from Noida or remotely across Delhi NCR and India.",
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
    cta: "Book Free Consultation",
    related: ["software"],
    relatedServices: ["software-development", "web-development", "ai-development"],
    image: "/media/work/spark-mobile.jpg",
    imageAlt: "Spark Mobile, an iOS and Android app developed by MKSAnalytIQ",
    seoTitle: "App Development Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ develops custom mobile and business applications for companies in Noida, Delhi NCR and across India.",
    processIntro:
      "An app uses the same five steps: who it is for, a written scope of platforms and screens, a build you can review, a release, then updates only if maintenance was agreed.",
    technologyNote:
      "Where a published project names a mobile stack, it is Expo, Swift or Kotlin, sometimes with TypeScript and Supabase. The stack for a new app is chosen in the scope, not copied from another project.",
  },
  {
    id: "ai",
    slug: "ai-development",
    title: "AI Development",
    h1: "AI Development & Automation Company in Noida",
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
        title: "What this service is",
        text: "AI development here is a product feature: a chatbot, a draft, a check or an automation inside a job your team already does. MKSAnalytIQ does not claim a proprietary foundation model. The useful part is the workflow and the review step around an external AI tool.",
      },
      {
        title: "What is included",
        text: "The scope names the job, the tool, what a person still approves, and where the result goes — a dashboard, a form or another system. Chatbots, workflow automation and AI-assisted drafts are the usual shapes. An unsupervised system is not what this service is.",
      },
      {
        title: "How to start",
        text: "Describe the job: a chatbot, a draft step, or automation inside a system you already run. The consultation names the integration and the approval step. That is a software scope, not a research engagement.",
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
    cta: "Book Free Consultation",
    related: ["software"],
    relatedServices: ["software-development", "digital-marketing", "web-development", "app-development"],
    image: "/media/work/taxpilot.jpg",
    imageAlt: "TaxPilot AI, a guided software project developed by MKSAnalytIQ",
    seoTitle: "AI Development & Automation Company in Noida | MKSAnalytIQ",
    seoDescription:
      "MKSAnalytIQ builds AI-powered software, automation workflows, chatbots and intelligent business tools for companies in Noida, Delhi NCR and India.",
    processIntro:
      "AI work uses the same five steps as other software: define the job, approve the tools and the review step in writing, build that workflow, launch it to the people who will use it, then adjust only what the scope allows.",
    technologyNote:
      "Published examples include TaxPilot AI, a guided preparation tool, and AI Influencer OS, a workspace for drafts and approval. Integrations use external AI tools named in the scope. The studio does not claim that it trains its own models.",
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
  /** When set, these service pages are the related links. Otherwise a category heuristic is used. */
  serviceSlugs?: string[];
  /** Published job of the product. Omit when it would only repeat the summary. */
  objective?: string;
  /** How the published product addresses that job. Omit when it is not in the project data. */
  approach?: string;
  /** Organisation already named in the summary. Omit for the studio’s own products. */
  builtFor?: string;
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
    serviceSlugs: ["software-development", "ai-development"],
    objective: "Turn a topic into short-form video for more than one workspace.",
    approach: "The published product is a multi-tenant SaaS with workspaces, render jobs, templates and credits.",
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
    serviceSlugs: ["software-development", "app-development"],
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
    serviceSlugs: ["ai-development", "software-development"],
    objective: "Guide ITR-3 and ITR-4 preparation for AY 2026–27.",
    approach: "The published product includes eligibility checks and an official ITR-4 JSON export.",
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
    builtFor: "Trishakti Seva Foundation and RJ Shankara Eye Hospital",
    serviceSlugs: ["web-development", "event-management"],
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
    builtFor: "Navi Zindagi Foundation",
    serviceSlugs: ["web-development"],
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
    serviceSlugs: ["ai-development", "digital-marketing"],
    objective: "Draft and approve influencer content, including a disclosure on sponsored captions.",
    approach: "The published workspace covers profiles, drafts, approval and that disclosure step.",
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
    serviceSlugs: ["software-development", "web-development"],
    objective: "Handle roles, attendance, stock and billing for a construction product.",
    approach: "The published product lists those functions and a mobile view. No further operating detail is published here.",
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
    serviceSlugs: ["software-development"],
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
    builtFor: "Bhartiya Rashtriya Jansatta",
    serviceSlugs: ["web-development"],
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
    serviceSlugs: ["software-development", "app-development"],
    objective: "Support hyperlocal instant delivery.",
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
    serviceSlugs: ["software-development"],
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
    serviceSlugs: ["software-development", "web-development"],
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
    serviceSlugs: ["app-development"],
    objective: "Ship the iOS and Android app for Spark.",
    approach: "The published app shares a backend with the Spark web app.",
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
    serviceSlugs: ["ai-development", "software-development"],
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
    serviceSlugs: ["ai-development", "software-development"],
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
    serviceSlugs: ["app-development"],
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
    serviceSlugs: ["software-development", "web-development"],
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
    serviceSlugs: ["digital-marketing", "ai-development"],
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
    serviceSlugs: ["software-development", "web-development"],
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
    serviceSlugs: ["web-development", "app-development"],
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
    serviceSlugs: ["software-development", "web-development"],
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
    serviceSlugs: ["app-development"],
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
    serviceSlugs: ["digital-marketing", "software-development"],
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
  serviceSlugs?: readonly string[];
}) {
  if (project.serviceSlugs?.length) return relatedServices(project.serviceSlugs);
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

/** Portfolio pages that name this service. Falls back to a short category match. */
export function projectsForService(slug: string) {
  const tagged = projects.filter((project) => project.serviceSlugs?.includes(slug));
  if (tagged.length) return tagged.slice(0, 6);
  const service = getService(slug);
  if (!service) return [];
  return projectsIn(service.related).slice(0, 3);
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
    a: "Yes. The studio is at C-81, C Block, Sector 8, Noida. From there we work with businesses across Delhi NCR — including Greater Noida, Delhi, Gurugram, Ghaziabad and Faridabad — and elsewhere in India. A visit to Noida is welcome when it helps; otherwise calls and WhatsApp cover the rest.",
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
    tags: ["home", "contact", "software", "web"],
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
  {
    id: "dm-what",
    q: "What does a digital marketing company in Noida do?",
    a: "At MKSAnalytIQ it means writing down the offer, then running the channels in the scope: Google Ads, Meta Ads, landing pages, tracking, SEO, content and a monthly read of enquiries. Social media can be part of that or a separate plan. This page does not promise rankings or a number of leads.",
    tags: ["marketing", "home"],
  },
  {
    id: "web-noida",
    q: "Does MKSAnalytIQ provide web development in Noida?",
    a: "Yes. From the Sector 8 studio, MKSAnalytIQ builds business websites, landing pages, e-commerce sites and custom web applications for companies in Noida, across Delhi NCR and elsewhere in India.",
    tags: ["web"],
  },
  {
    id: "software-custom",
    q: "Can you build custom software for a business?",
    a: "Yes. Custom software, SaaS products, dashboards and database-backed tools are scoped in writing, then built and handed over as that scope describes. A repository is included when the agreement says so.",
    tags: ["software"],
  },
  {
    id: "app-platforms",
    q: "Do you develop Android and iOS applications?",
    a: "Yes, when the brief needs them. Published studio work includes Android and iOS apps, Expo for cross-platform builds, Swift for an iOS app and Kotlin for an Android component. The platforms for a new project are named in the scope.",
    tags: ["app"],
  },
  {
    id: "ai-existing",
    q: "Can you integrate AI into an existing business application?",
    a: "Yes, when that is the brief. It means adding a defined job — a draft, a chatbot, a check or a workflow — using AI tools named in the scope. MKSAnalytIQ does not claim a proprietary model, and the existing system is not changed beyond what the scope lists.",
    tags: ["ai", "software"],
  },
  {
    id: "start-marketing",
    q: "How do I start digital marketing with MKSAnalytIQ?",
    a: "Book a free consultation or send a WhatsApp message with the offer and whether a landing page already exists. You receive a written scope before any campaign launches. Prices are not listed on this site.",
    tags: ["marketing"],
  },
  {
    id: "start-web",
    q: "How do I start a website or web app project?",
    a: "Tell us whether you need a business site, an online shop or a web application, and what content or systems you already have. The consultation turns that into a written scope before production starts.",
    tags: ["web"],
  },
  {
    id: "start-software",
    q: "How do I start a custom software project?",
    a: "Describe the operation the software has to support. The first conversation decides the shape of the build and whether a repository is part of the handover. Work starts after you approve the written scope.",
    tags: ["software"],
  },
  {
    id: "start-app",
    q: "How do I start an app project?",
    a: "Say who will use the app and which platforms you have in mind. The scope then names Android, iOS or cross-platform, plus any admin panel or API. You can start that conversation from Noida or remotely.",
    tags: ["app"],
  },
  {
    id: "start-ai",
    q: "How do I start an AI or automation project?",
    a: "Describe the job you want drafted, answered or routed, and who should approve the output. The consultation names the external tools and the limits. MKSAnalytIQ does not scope this as training a new foundation model.",
    tags: ["ai"],
  },
  {
    id: "dm-services",
    q: "Which digital marketing services can a scope include?",
    a: "SEO, Google Ads, Meta Ads, social media marketing, content marketing, lead generation, analytics and conversion optimization. The written scope names which of those are in the project. Social media can also be planned on its own page.",
    tags: ["dm-page"],
  },
  {
    id: "dm-ads",
    q: "Do you manage Google Ads and Meta Ads?",
    a: "Yes, when the scope includes them. That covers the campaigns, a landing page if one is listed, conversion tracking and a report of enquiries and spend. Media spend is paid to the ad platform and is not a package price on this site.",
    tags: ["dm-page"],
  },
  {
    id: "dm-measure",
    q: "How do you measure a campaign?",
    a: "Against the path in the scope: a form, a call or WhatsApp, plus what was spent. The report shows enquiries and spend. It does not promise a ranking, a lead count or a return.",
    tags: ["dm-page"],
  },
  {
    id: "dm-page",
    q: "Do I need a website before marketing starts?",
    a: "You need a place the enquiry can land. An existing page can be used. If there isn’t one, a landing page can be part of the marketing scope, or a separate web development brief.",
    tags: ["dm-page"],
  },
  {
    id: "dm-after",
    q: "What happens after the campaigns launch?",
    a: "We read the first results, keep what is producing enquiries and change what is not, inside the scope you approved. That is the optimize step. It is not a guarantee of growth.",
    tags: ["dm-page"],
  },
  {
    id: "dm-start",
    q: "How do I start, and is the first conversation free?",
    a: "Yes. Book a free consultation or send a WhatsApp message with the offer and whether a page already exists. You receive a written scope before a campaign launches. The studio is in Sector 8, Noida, and the work is available across Delhi NCR and India.",
    tags: ["dm-page"],
  },
];

export function faqsFor(tag: string) {
  return faqs.filter((item) => item.tags.includes(tag));
}
