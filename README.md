# The Advisory — 2026 Website Redesign

**A world-class enterprise management website for athletes, entertainers, NIL athletes, and high-net-worth entrepreneurs.**

---

## Project Overview

The Advisory is a full-service enterprise management firm serving:
- Professional athletes
- NIL / student-athletes
- Entertainers and creatives
- Bespoke / HNW entrepreneurs
- Partners (agents, managers, attorneys, fiduciaries, trainers, movers & shakers)

Led by **Jimmie B. Strong** — Harvard Law School Valedictorian (2014), Vanderbilt Professor, Top 1% Financial Advisor.

---

## Design System

### Brand Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--charcoal` | `#111111` | Secondary dark backgrounds |
| `--near-black` | `#0D0D0D` | Primary dark / hero backgrounds |
| `--ivory` | `#FAF8F5` | Primary text on dark |
| `--stone` | `#C9C0B0` | Secondary text on dark |
| `--gold` | `#B8965A` | Primary accent color |
| `--warm-white` | `#F5F3EF` | Light interior page backgrounds |
| `--body-text` | `#2C2C2C` | Body text on light pages |
| `--muted` | `#7A7570` | Muted/tertiary text |

### Typography
- **Display / Headings**: `DM Serif Display` (editorial, premium serif)
- **UI / Labels / Nav**: `Space Grotesk` (modern, utilitarian sans)
- **Body Copy**: `Inter` (highly legible, neutral)

### Design References Applied
- **CAA** (`caa.com`): Utilitarian initial landing, oversized type, hierarchical hover-reveal navigation (4 levels, desktop hover / mobile click)
- **Excel Sports Management** (`excelsm.com`): Oversized Vimeo video hero treatment, richer media presentation
- **THE·TEAM** (`the.team`): White space discipline, premium restraint, accent brand color use
- **McDougall NIL** (`nil.mcdougalllawfirm.com`): NIL content/offering framing only; stencil cut-through logo concept translated into premium modern form

---

## Site Architecture

```
index.html          — Homepage (dark, cinematic landing)
nil.html            — NIL Athletes + Flight School™ (Sports video)
sports.html         — Professional Athletes (Sports video)
creatives.html      — Entertainers & Creatives (Creatives video)
bespoke.html        — Bespoke & HNW Entrepreneurs (Creatives video)
partnerships.html   — Partnership tiers (light interior page)
about.html          — About / Founder (dark page)
services.html       — Services overview (all 6 lanes)
contact.html        — Contact / Intake form (light page)
```

### Navigation Structure (preserved + improved from original)
```
Who We Serve
  └── Professional Athletes → sports.html
  └── NIL Athletes → nil.html
  └── Entertainers & Creatives → creatives.html
  └── Bespoke & Entrepreneurs → bespoke.html

Services → services.html
  └── Contracts & Negotiation → #contracts
  └── NIL Strategy & Compliance → #nil-services
  └── Entity & Tax Structure → #entity
  └── Brand & IP → #brand-ip
  └── Family Governance → #family-governance
  └── Deal Diligence & M&A → #diligence

NIL → nil.html (top-level direct link)

Partnerships → partnerships.html
  └── Agents & Managers → #agents-managers
  └── Trainers & Advisors → #advisors
  └── Movers & Shakers → #connectors

About → about.html
```

---

## Features Implemented

### ✅ Completed Features

- **Dark cinematic homepage** with large typographic hero, audience pathway modules, Five Lanes framework, social proof section, services preview grid, stats counter row, partnerships CTA
- **NIL page** with fullscreen Vimeo hero (Sports video), stencil brand cut-through effect, problem statement, Five Lanes NIL framing, three-tier service model (Redshirt / Flight School™ / All-Star), 4-quarter curriculum
- **Sports page** with fullscreen Vimeo hero (Sports video), pro service lanes, social proof with client list, approach principles
- **Creatives page** with fullscreen Vimeo hero (Creatives video), who-we-serve grid, service lanes, IP feature section, brand quote
- **Bespoke page** with Creatives video mid-page, bespoke definition, client segments
- **Partnerships page** (Customer Success section intentionally REMOVED per brief):
  - Agents, Managers, Attorneys & Fiduciaries
  - Trainers, Advisors, Coaches & PR/Media
  - Movers & Shakers
  - How-it-works 4-step process
  - Compliance note
- **About page** with founder profile (Jimmie B. Strong), credentials, philosophy principles, client legacy list
- **Services page** with all 6 service blocks: Contracts, NIL, Entity/Tax, Brand/IP, Family Governance, Deal Diligence
- **Contact page** with intake form (9 fields, client-type selector, primary need selector), process steps, NIL Redshirt note
- **Shared design system** (`css/design-system.css`): full design token library, typography scale, button system, card components, lane cards, tier cards, partner cards, stat blocks, accordions, social proof patterns
- **Navigation system** (`css/nav.css`): sticky header, CAA-style 4-level hover-reveal dropdown (desktop), mobile slide-in panel with click-accordion submenus, responsive breakpoints
- **JavaScript** (`js/main.js`): scroll reveals, sticky nav, mobile nav, accordion, counter animation, smooth scroll, stagger groups

### ✅ Video Rules Respected
- Sports/NIL Vimeo (`1173714440`) — used ONLY on: `sports.html`, `nil.html`
- Creatives/Bespoke Vimeo (`1173897349`) — used ONLY on: `creatives.html`, `bespoke.html`
- All videos: autoplay, muted, loop, background mode (non-interactive hero treatment)

### ✅ Customer Success Section Removed
- `partnerships.html` does **NOT** contain the Customer Success section that was present on `dynamos-fabulous-site.webflow.io/partnerships`

### ✅ Social Proof Images Enhanced
- Images upscaled via `fal-ai/recraft-clarity-upscale`
- Used selectively on homepage (2x), about page, sports page
- Captions preserve trust context without identifying individuals
- Hover interactions reveal full color

### ✅ NIL Content from Pitch Deck Integrated
- "Architecting the Athlete Enterprise" — homepage hero
- "The Business of You" — mission section messaging
- Five Lanes framework — homepage lane cards + NIL page
- Four Killers — NIL problem section
- Flight School™ 4-Quarter Curriculum — NIL page
- Tiered service model (Redshirt / Flight School™ / All-Star) — NIL page
- Trust signals (Jimmie B. Strong credentials) — about page, homepage mission
- Client roster — homepage, sports, about pages
- Stats ($40K-$85K tax exposure, 75% literacy improvement) — homepage stats row

---

## Files Structure

```
/
├── index.html
├── nil.html
├── sports.html
├── creatives.html
├── bespoke.html
├── partnerships.html
├── about.html
├── services.html
├── contact.html
├── css/
│   ├── design-system.css
│   └── nav.css
├── js/
│   ├── main.js
│   └── nav-include.js
└── images/
    ├── social-proof-1.jpg          (logo icon — original)
    ├── social-proof-2.jpg          (social proof photo 1 — original)
    ├── social-proof-3.jpg          (social proof photo 2 — original)
    ├── social-proof-enhanced-1.jpg (upscaled photo 1)
    └── social-proof-enhanced-2.jpg (upscaled photo 2)
```

---

## Recommended Next Steps

1. **Logo integration**: Replace the logo icon placeholder with the actual uploaded SVG/PNG logo file at correct path
2. **Domain + publish**: Go to Publish tab to deploy live
3. **Contact form backend**: Connect the contact form to an email service (Formspree, EmailJS, or equivalent) for real submissions
4. **Additional social proof images**: Add more event/client photos as they become available
5. **Blog / press section**: Add a news or press releases page
6. **Privacy Policy / Terms / Disclosures**: Published at `privacy-policy.html`, `terms-of-use.html`, and `disclosures.html`
7. **SEO meta optimization**: Add Open Graph tags and structured data for each page
8. **Analytics**: Add Google Analytics or equivalent
9. **Performance optimization**: Consider lazy loading refinements and image WebP conversion

---

## Key Source Materials Used

| Source | Used For |
|--------|----------|
| `dynamos-fabulous-site.webflow.io` | Site audit, content preservation, architecture |
| `caa.com` | Navigation behavior, typographic scale, utilitarian landing |
| `excelsm.com` | Video hero treatment, nav structure |
| `the.team` | Whitespace, restraint, premium spacing |
| `nil.mcdougalllawfirm.com` | NIL content framing (not design) |
| Pitch deck (uploaded) | NIL content, tiers, five lanes, trust signals |
| Vimeo `1173714440` | Sports/NIL pages hero video |
| Vimeo `1173897349` | Creatives/Bespoke pages hero video |
| Social proof images (uploaded) | Upscaled and placed on homepage, about, sports pages |

---

*Built to 2026 web standards. Designed for desktop and mobile parity.*
