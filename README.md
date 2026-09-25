# MKSAnalytIQ

### Technology • Digital Growth • Software

MKSAnalytIQ is a Noida-based technology and digital growth studio helping businesses across Delhi NCR and India build digital products, improve their online presence, and implement technology-driven growth solutions.

---

## What We Do

### Digital Marketing

SEO, Google Ads, Meta Ads, social media marketing, content, and lead generation.

### Web Development

Business websites, landing pages, ecommerce websites, and web applications.

### Software Development

Custom software, SaaS platforms, dashboards, APIs, and business applications.

### App Development

Android, iOS, and cross-platform mobile applications.

### AI Development & Automation

AI applications, chatbots, automation workflows, AI integrations, and intelligent business solutions.

Social media management and event management are available when a brief needs them.

---

## Website

https://www.mksanalytiq.in

---

## Location

**Based in:** C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306, India

**Service area:** Delhi NCR and India

**Phone:** +91 95608 14623

**Email:** hello@mksanalytiq.in

---

## Core Technologies

Used by this website:

- React
- TypeScript
- Vite
- TanStack Start and TanStack Router
- Tailwind CSS
- Node.js
- PostgreSQL (`pg`), with a local PGLite fallback when `DATABASE_URL` is not set

Published studio projects also name tools such as Next.js, Python, NestJS, Prisma, Expo, Supabase, Swift, and Kotlin. Those are project stacks, not extra claims about this repository.

---

## Website Features

- Responsive marketing site
- Light 3D homepage with CSS glassmorphism
- Service pages
- Portfolio and case studies
- Contact form that opens WhatsApp or email
- WhatsApp links
- SEO titles, canonical URLs, Open Graph, and JSON-LD
- Local business information for the Noida studio
- Sitemap and robots.txt

---

## Services

- [Digital Marketing](https://www.mksanalytiq.in/services/digital-marketing)
- [Web Development](https://www.mksanalytiq.in/services/web-development)
- [Software Development](https://www.mksanalytiq.in/services/software-development)
- [App Development](https://www.mksanalytiq.in/services/app-development)
- [AI Development](https://www.mksanalytiq.in/services/ai-development)
- [Social Media](https://www.mksanalytiq.in/services/social-media)
- [Event Management](https://www.mksanalytiq.in/services/event-management)
- [Delhi NCR](https://www.mksanalytiq.in/digital-marketing-software-delhi-ncr)

---

## Projects

Public work already documented in the site content:

- **ShortGen** — multi-tenant SaaS that turns a topic into short-form video
- **TaxPilot AI** — guided ITR-3 and ITR-4 preparation
- **AI Influencer OS** — workspace for influencer profiles, drafts, and disclosed sponsored captions
- **Eye Camp Registration** — Hindi registration system for a cataract camp
- **Navi Zindagi** — fundraising and volunteer site
- **Carnispora** — hyperlocal delivery product
- **SiteForge** — website-generation SaaS
- **OmniSell** — multi-channel ecommerce software
- **EdgeBot** — crypto futures trading bot
- **KrushnaAI** — agent marketplace

No revenue, user, or ranking figures are published with these projects.

---

## Case studies

Case studies are generated from the public project list. There is no second dataset and no CMS.

- **Data:** `src/lib/content.ts` holds each project (`slug`, `name`, `summary`, `kind`, `features`, `stack`, optional `serviceSlugs`, `objective`, `approach`, `builtFor`, `github`, `live`). `src/lib/case-studies.ts` maps that list into case-study records. A new object in `projects` appears on `/case-studies` and `/case-studies/{slug}` without a new page component.
- **Images:** add `public/media/work/{slug}.jpg` (the existing shots are 1280×720). That file is the hero. There is no extra gallery in the repo, so the page does not invent one.
- **Routing:** `src/routes/case-studies/index.tsx` is `/case-studies`. `src/routes/case-studies/$slug.tsx` is `/case-studies/{slug}`. Unknown slugs 404. `/portfolio/{slug}` stays as the project page.
- **SEO:** title `{Project Name} Case Study | MKSANALYTIQ`, a unique description, canonical `https://www.mksanalytiq.in/case-studies/{slug}`, Open Graph and Twitter tags, and the project image as the social image. JSON-LD is a `CreativeWork` plus a `BreadcrumbList`. No reviews or ratings. `*.vercel.app` URLs stay on the visible live-demo link and are left out of `sameAs`.
- **Sitemap:** add `https://www.mksanalytiq.in/case-studies` and `https://www.mksanalytiq.in/case-studies/{slug}` to `public/sitemap.xml`. The route is automatic. The sitemap line is manual.

Do not add an industry, a challenge, process stages, dates, a client name, or a result that is not already on the project. Leave `builtFor` empty for studio products. Outcome copy states what was delivered and says no user, revenue, or ranking figure is on file.

The footer links to Case Studies. The primary nav does not, so the bar stays at six items.

---

## Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

`npm run dev` serves the site on port 8080. `npm run build` produces the production bundle and then runs database migrations when `DATABASE_URL` is set.

---

## Project Structure

```
src/routes/          Public pages, including the homepage, services, portfolio, case studies, contact, and legal routes
src/components/site/ Shared marketing components
src/lib/content.ts   Service, project, and company copy
src/lib/case-studies.ts  Case studies derived from the project list
src/lib/seo.ts       Canonical URLs, Open Graph, and JSON-LD helpers
src/styles.css       Global styles
public/sitemap.xml   Sitemap
public/robots.txt    Robots file
public/media/        Images used by the site
migrations/          SQL migrations
scripts/             Dev, build, and migration helpers
```

---

## SEO & Discoverability

Implemented in the site today:

- Unique titles and meta descriptions through `pageMeta` in `src/lib/seo.ts`
- Canonical URLs on `https://www.mksanalytiq.in`
- Open Graph and Twitter card tags
- JSON-LD for Organization, LocalBusiness, WebSite, Service, BreadcrumbList, and FAQPage where those pages render them
- `public/sitemap.xml` and `public/robots.txt`
- `theme-color` set to `#f7fbff`

Canonical host is `https://www.mksanalytiq.in`. Titles, descriptions, canonical links, Open Graph URLs, JSON-LD and `public/sitemap.xml` are built from `site.url` in `src/lib/content.ts`. Do not add a second canonical on the apex host.

The permanent redirect from `mksanalytiq.in` to `www.mksanalytiq.in` is **not in this repository**. There is no `vercel.json` redirect and no host middleware for it. Configure it on the DNS / hosting project that serves the domain:

1. Attach both `mksanalytiq.in` and `www.mksanalytiq.in`.
2. Make `www.mksanalytiq.in` the primary host.
3. 301 redirect `http://mksanalytiq.in/*` and `https://mksanalytiq.in/*` to the same path on `https://www.mksanalytiq.in`.
4. Also 301 `http://www.mksanalytiq.in/*` to `https://www.mksanalytiq.in/*` if the host does not force HTTPS already.
5. Do not also canonicalise `www` back to the apex.

Exception: the studio setup copy still tells the owner to register the Google OAuth redirect URI as `https://mksanalytiq.in/api/auth/callback/google`. A blanket apex redirect will break that callback until the Google client is updated to `https://www.mksanalytiq.in/api/auth/callback/google`. Until that auth change is made, exclude `/api/auth/*` on the apex host from the redirect.

No Google Analytics, Tag Manager, or Meta Pixel ID is stored in the repository. The site already forwards events when a provider is present. Set these in the hosting environment, not in source:

- `VITE_GTM_ID` — a container id matching `GTM-XXXX`. Loaded from `src/routes/__root.tsx`.
- `VITE_META_PIXEL_ID` — a numeric Meta Pixel id, same file.

Until one of those is set, `track()` in `src/lib/analytics.ts` dispatches an `mks-analytics` event and does not call a third-party script. Consultation clicks also forward `consultation_click`. Phone links forward `phone_click`. Email links send `email_click`. Service-page enquiry buttons send `service_cta_click`. Service pages also forward `service_page_view`. Portfolio links send `portfolio_project_click`. Case study pages send `case_study_view`. The contact form sends `contact_form_start` and `contact_form_submit`. WhatsApp links send `whatsapp_click`. Do not commit a measurement id.

Search Console ownership is not verified from this repository. After deploy, submit `https://www.mksanalytiq.in/sitemap.xml`. `public/robots.txt` already points at that sitemap.

---

## Future articles

There is no blog, CMS, or article route. Do not add a dependency for one. When a page is actually written, add a route under `src/routes/` and a matching URL in `public/sitemap.xml`. These topics are not published:

- Website Development Cost in Noida
- Custom Software Development Cost in India
- App Development Cost in India
- How to Choose a Software Development Company
- Website vs Web Application
- How AI Can Automate Business Workflows
- Google Ads vs Meta Ads for Lead Generation

Do not publish prices, rankings, or results on those pages unless they are already in the project record.

---

## Local Development

Package manager: npm. Scripts from `package.json`:

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

`npm run dev` starts Vite on port 8080. `npm run build` builds the site and then runs `npm run db:migrate`. `npm run typecheck` runs `tsc --noEmit`.

---

## Contact

- **Studio:** C-81, C Block, Sector 8, Noida, Uttar Pradesh 201306, India
- **Phone:** +91 95608 14623
- **Email:** hello@mksanalytiq.in
- **Website:** https://www.mksanalytiq.in

