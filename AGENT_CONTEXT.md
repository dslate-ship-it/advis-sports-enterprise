# AGENT_CONTEXT.md — The Advisory Enterprise Management Website

---

## 1. Project Type

Multi-page static website. Pure HTML, CSS, and vanilla JavaScript — no build tools, no frameworks, no bundlers. Every page is a standalone `.html` file. Shared styles live in two CSS files (`css/design-system.css`, `css/nav.css`). All interactivity is handled by `js/main.js` and `js/nav-include.js`. The site is deployed as-is with no compilation step.

There are two distinct entry points:
- `index.html` — a cinematic split-screen landing page with a LAW panel (links externally to `https://theadvisorypllc.com/`) and an ENTERPRISE panel (links to `home.html`)
- `home.html` — the main enterprise homepage

---

## 2. Brand Direction

**Mood:** Institutional. Premium. Cinematic. Dark. Deliberate. The site should feel like a top-tier law firm crossed with a talent agency — not a startup, not a SaaS product, not a generic financial services company.

**Primary colors (CSS variables — never hardcode hex values directly; always use variables):**
- `--near-black: #0D0D0D` — default body/page background (overridden to `#131313` on `home.html` for watermark blending)
- `--charcoal: #111111` — alternate section backgrounds
- `--gold: #B8965A` — primary accent; used for labels, borders, hover states, CTA lines
- `--ivory: #FAF8F5` — primary text on dark backgrounds
- `--stone: #C9C0B0` — secondary/supporting text
- `--muted: #7A7570` — tertiary/caption text
- `--surface-dark: #161514` — card/grid backgrounds
- `--border-dark: rgba(255,255,255,0.08)` — all dividers and borders on dark surfaces

**Typography (never substitute these font families):**
- `--font-display: 'DM Serif Display'` — all large hero headlines, section headlines, founder names, client names. Italic variant used for emphasis words.
- `--font-sans: 'Space Grotesk'` — navigation, labels, eyebrows, buttons, UI elements, stats
- `--font-body: 'Inter'` — body paragraphs, descriptions, captions

**Spacing:** Strictly the 8px-base spacing system defined in `design-system.css` (`--space-1` through `--space-9`). Never introduce arbitrary pixel or rem values. Use `clamp()` for responsive type and container widths.

**Design references:** CAA (Creative Artists Agency), top-tier law firm sites, premium athlete management agencies. Think muted, editorial, structured — not loud or flashy.

**Imagery treatment:** All photos are grayscale or desaturated with contrast adjustments. No bright, saturated, stock-photo energy. The logo watermark in `home.html` uses `mix-blend-mode: screen` with `filter: grayscale(100%) brightness(3.2) contrast(0.38)` to dissolve seamlessly against the `#131313` background.

---

## 3. Audience and Business Purpose

**Primary clients:** Professional athletes, NIL (Name, Image, Likeness) student-athletes, entertainers, creatives, and high-net-worth entrepreneurs.

**Secondary audience:** Agents, managers, trainers, advisors, and power connectors who may refer clients or enter partnership arrangements.

**What the site must do:**
- Establish immediate authority and trust — visitors should feel this firm is in a different category from typical financial advisors or sports agents
- Communicate the five core service lanes (Tax Strategy, Legal Structuring, Brand & IP Ownership, Family Office & Governance, Compliance)
- Drive visitors to `contact.html` to start a consultation
- Position founder Jimmie B. Strong as a uniquely credentialed expert (Morehouse Law Valedictorian, Harvard Law School record-holder for sports law credits, Top 1% Financial Advisor)
- Surface notable client relationships (Floyd Mayweather, Mookie Betts, Jalen Ramsey, Jaren Jackson Jr., Jim Brown) as social proof

**Primary conversion action:** "Start a Conversation" → `contact.html`

---

## 4. Design Rules

**Always preserve:**

- **Dark background aesthetic** — every page uses near-black/charcoal backgrounds. No light-mode pages exist except nav scroll states.
- **Gold accent system** — `--gold` is used exclusively for: eyebrow labels, decorative lines, hover underlines, CTA arrow elements, stat numbers, credential indices, and active/hover states. Never use gold as a fill color for large surfaces.
- **Serif + sans-serif pairing** — Display serif for headlines, Space Grotesk for UI, Inter for body. Never mix these roles.
- **Reveal animation pattern** — scroll-triggered `.reveal` → `.revealed` class system. Elements start at `opacity: 0; transform: translateY(12px)` and transition to visible. Do not remove or bypass this system. Elements can be pre-marked `revealed` in HTML to show immediately on load.
- **Logo treatment** — the logo icon is `images/social-proof-1.jpg` at 36×36px in the nav. Always include `onerror="this.style.display='none'"` on logo images. The logo text reads "The Advisory" with subtitle "Enterprise Management".
- **Navigation structure** — fixed header, 72px height, transparent until scrolled (then `rgba(13,13,13,0.92)` with blur). Desktop: hover dropdowns. Mobile: slide-in panel with accordion submenus. Never replace with a different nav pattern.
- **Button styles** — three variants only: `btn--primary` (gold fill, dark text), `btn--ghost` (transparent, ivory border, ivory text), `btn--text` (no border, text only with arrow). No rounded pill buttons. Border radius is `var(--radius-sm)` (2px) — nearly square.
- **Section rhythm** — sections alternate between `--near-black`, `--charcoal`, and `--surface-dark` backgrounds. Never place two identical background colors adjacent without a divider.
- **Gold eyebrow label pattern** — every section opens with a `<div class="eyebrow"><span class="label">Label Text</span></div>` before the headline. This is a non-negotiable design element.
- **Container system** — always wrap content in `.container` (max 1440px). Use `.container--narrow` (900px) for text-heavy pages. Never use full-bleed text.
- **Split-screen index** — `index.html` uses a fixed gold divider (`#split-divider`), two full-height panels, hover-expand behavior (34%/66% split), bottom-anchored content, and panel content that is hidden until hover (via `opacity: 0; visibility: hidden` on `.p-body`, `.p-label`, `.p-cta`). Do not alter this interaction model.
- **Founder section layout** — `about.html` and `team.html` use a sticky 5fr/7fr photo+bio grid. This is intentional and must be preserved.

---

## 5. What to Avoid

- **No light mode** — do not add white or light-gray backgrounds to any page section
- **No SaaS or startup aesthetics** — no rounded cards, no pastel accents, no feature grids with emoji icons, no "hero with centered CTA and illustration" layouts
- **No generic gradients** — the only gradients permitted are dark-to-transparent overlays on images and the subtle gold radial in the hero background
- **No new color introductions** — do not add blues, greens, reds, purples, or any color not in the design system
- **No extra font families** — do not import or reference any font not already loaded
- **No CSS frameworks** — do not introduce Tailwind, Bootstrap, or any utility-class system. All styling is in `design-system.css`, `nav.css`, and page-level `<style>` blocks
- **No JavaScript libraries** — do not add jQuery, Alpine, React, Vue, or any JS library. All interactivity is vanilla JS in `main.js` and `nav-include.js`
- **No unsolicited animation additions** — do not add new keyframe animations, hover effects, or transitions beyond what exists. The existing animation system is intentional and calibrated
- **No pill/rounded buttons** — buttons are nearly square (`border-radius: 2px`)
- **No stock photo energy** — do not suggest or reference bright, saturated, lifestyle photography
- **No cluttered layouts** — generous whitespace is a core design principle. Do not compress sections or reduce padding to fit more content
- **No hero patterns with centered text over full-bleed images** — heroes on interior pages are structured differently from typical templates
- **No lorem ipsum** — never use placeholder text in production pages

---

## 6. Site Structure

```
/
├── index.html                  # Split-screen entry (LAW vs ENTERPRISE)
├── home.html                   # Enterprise homepage (main site entry)
├── about.html                  # Founder bio, philosophy, client relationships
├── team.html                   # Full team — Jimmie + 7 member cards
├── services.html               # 6 service blocks with anchor IDs
├── sports.html                 # Professional Athletes audience page
├── nil.html                    # NIL Athletes audience page
├── creatives.html              # Entertainers & Creatives audience page
├── bespoke.html                # Bespoke & Entrepreneurs audience page
├── partnerships.html           # Partnership models for agents/advisors
├── contact.html                # Intake form + consultation steps
├── content-audit.html          # Client content review tool (internal use)
├── AGENT_CONTEXT.md            # This file
├── README.md                   # Project documentation
│
├── css/
│   ├── design-system.css       # ALL global tokens, typography, layout, buttons, reveals
│   └── nav.css                 # Navigation-specific styles (header, dropdowns, mobile)
│
├── js/
│   ├── main.js                 # Scroll reveals, counter animations, mobile nav, smooth scroll
│   └── nav-include.js          # Navigation behavior helpers
│
└── images/
    ├── social-proof-1.jpg      # Primary logo/brand mark (used in nav, splash, watermark)
    ├── social-proof-2.jpg      # Supporting social proof image
    ├── social-proof-3.jpg      # Supporting social proof image
    ├── social-proof-enhanced-1.jpg  # Founder photo (primary)
    ├── social-proof-enhanced-2.jpg  # Founder photo (secondary/courtside)
    ├── bg-law.jpg              # LAW panel background (index.html)
    ├── bg-athlete-vivid.jpg    # ENTERPRISE panel background (index.html)
    ├── bg-athlete.jpg          # Alternate athlete background
    ├── bg-entertainment.jpg    # Entertainment background
    ├── bg-sports-entertainment.jpg  # Combined background
    └── logo.png                # Full logo file
```

**Key anchor IDs on services.html:**
- `#contracts` — Contracts & Negotiation
- `#nil-services` — NIL Strategy & Compliance
- `#entity` — Entity & Tax Posture
- `#brand-ip` — Brand & IP Management
- `#family-governance` — Family Office & Governance
- `#diligence` — Deal Diligence & M&A

---

## 7. Editing Rules

- **Read before editing.** Always inspect the full relevant file(s) before making any change. Understand surrounding context — especially CSS variable usage, class dependencies, and animation states.
- **Plan before editing.** State which files will be modified, what will change, and what will not change, before making any edits.
- **Make targeted changes only.** Edit only what was asked. Do not rewrite adjacent sections, refactor class names, restructure HTML, or "clean up" code that wasn't part of the request.
- **Preserve all internal links** unless the explicit task is to fix a broken link. Do not change `href` values on navigation, CTAs, or anchor links without being asked.
- **Preserve the reveal system.** Never remove `.reveal` classes. Never delete the `initScrollReveal()` function. If pre-revealing elements, add `revealed` to the class list in HTML — do not modify the CSS or JS observer.
- **Do not introduce new frameworks.** No CSS frameworks, no JS libraries, no build tools.
- **Do not add new font imports.** All required fonts are already loaded via Google Fonts in `design-system.css`.
- **Page-level styles belong in `<style>` blocks** within each HTML file. Global/shared styles go in `design-system.css`. Navigation styles go in `nav.css`. Do not move styles between these locations unless asked.
- **When editing text content,** match the existing tone: authoritative, sparse, premium. No exclamation points. No casual language. No marketing fluff.
- **Never hardcode colors.** Always use CSS custom properties from the design system (e.g., `var(--gold)`, `var(--ivory)`).

---

## 8. Responsive / Mobile Rules

### Viewport categories

Use these categories when scoping responsive work. Do not apply large-mobile-only rules to fold/phablet, tablet, or desktop viewports.

| Category | Viewport range | CSS target | Base test size |
|---|---|---|---|
| **Laptop / desktop** | 1024px wide and above | `@media (min-width: 1024px)` | 1366×768, 1440×900 |
| **Tablet** | 768px wide and above (below laptop) | `@media (max-width: 1023px)` or existing `768px` rules | 768×1024 |
| **Fold / phablet unfolded** | Compact tablet / phablet (not normal phone) | `@media (min-width: 600px) and (max-width: 767px)` — reuse an existing equivalent if the project already has one | 691×703 |
| **Large mobile and below** | Large phones, standard phones, smaller phones | `@media (max-width: 430px)` — reuse a nearby existing breakpoint (`431px`, `480px`, `575px`) if one already exists | 430×932 |

### Large mobile and below

- **Base viewport:** 430px wide × 932px tall.
- **CSS target:** `@media (max-width: 430px)`, unless the project already has a nearby existing breakpoint that should be reused (e.g. `431px`, `480px`, `575px`).
- **Applies to:** Large phones, standard phones, and smaller phones.
- **Required test sizes:** 430×932, 390×844, 375×812.
- **Must not affect:**
  - Galaxy Fold unfolded / phablet view at approximately 691×703
  - Tablet at 768px and above
  - Laptop / desktop at 1024px and above

When a task is scoped to large mobile only, use responsive CSS (media queries, flex/grid order, mobile-only spacing and sizing). Do not change tablet, phablet, or desktop layout.

### Fold / phablet unfolded

- **Base viewport:** 691px wide × 703px tall.
- **CSS target:** `@media (min-width: 600px) and (max-width: 767px)`, unless the project already has a better equivalent.
- **Treat as:** Compact tablet / phablet — not normal phone.
- **Required test size:** 691×703.
- **Must not affect:** Tablet at 768px and above, or laptop / desktop at 1024px and above.

Do not apply large-mobile-only corrections to this viewport category.

### Breakpoints currently in use

- `max-width: 1024px` — tablet layout adjustments
- `max-width: 768px` — mobile nav, single-column grids, hero stacking
- `max-width: 767px` — used on `index.html`
- `max-width: 480px` — small mobile overrides where applicable (prefer reusing this over adding duplicate rules when it already covers the target)
- `max-width: 430px` — large mobile and below (use for mobile-only corrections scoped to phones)

### General responsive rules

- **Navigation:** On mobile (`≤768px`), the desktop nav is hidden and replaced by a slide-in panel (`.mobile-nav`) toggled by `.mobile-toggle`. Submenus are accordion-style. Do not alter this behavior.
- **Grid layouts:** Most grids collapse to single column at 1024px or 768px. Pathway grid, services preview grid, and stats grid have specific responsive overrides in each page's `<style>` block — check these before editing grid columns.
- **Hero:** `index.html` split panels stack vertically on mobile (`flex-direction: column`, each panel `55vh`). On mobile, panel content (`.p-body`, `.p-label`, `.p-cta`) is visible by default — the hover-reveal only applies on desktop (`@media (hover: hover) and (min-width: 768px)`).
- **Typography:** All major type sizes use `clamp()` — do not replace with fixed pixel values. This ensures fluid scaling across viewport widths.
- **Touch targets:** Buttons and nav links must remain at least 44px tall on mobile.
- **Spacing:** On mobile, `--container-padding` clamps down automatically. Do not add manual mobile padding overrides unless a specific layout issue requires it.

---

## 9. SEO / Content Rules

- **Preserve all H1/H2/H3 hierarchy.** Each page has exactly one H1. Do not demote headings or change their tag levels without an explicit request.
- **Preserve meta descriptions.** Each page has a `<meta name="description">` tag. Do not delete or overwrite these unless updating content.
- **Preserve page titles.** Format: `Page Name | The Advisory` or `The Advisory — Tagline`.
- **Preserve internal link structure.** All nav links, CTA buttons, and in-page anchors form a deliberate site architecture. Do not rename pages or change anchor IDs without updating every reference across all files.
- **Conversion language is intentional.** Phrases like "Start a Conversation," "Work With Jimmie," "Request a Consultation," and "Our Story" are deliberate CTA choices. Do not change button labels without being asked.
- **Credential language is factual and client-approved.** References to Jimmie B. Strong's credentials (Morehouse Law Valedictorian, Harvard Law School sports law credits record, Top 1% Financial Advisor) must not be altered, paraphrased, or removed.
- **Notable client names** (Floyd Mayweather, Mookie Betts, Jalen Ramsey, Jaren Jackson Jr., Jim Brown) must not be altered or removed without explicit instruction.
- **Stats are client-provided figures.** Do not change numerical stats (40K+, $2.3B, 75%, 1 in 3, Top 1%, 5 lanes) without explicit instruction.

---

## 10. Workflow for Cursor Agent

Follow this exact process for every task:

1. **Inspect relevant files first.**
   - Read the full HTML file(s) involved in the task
   - Read any CSS files referenced (`design-system.css`, `nav.css`, page `<style>` blocks)
   - Read `js/main.js` if the task involves interaction, animation, or scroll behavior

2. **List files inspected.**
   - State every file you read before proceeding

3. **Produce a short plan before editing.**
   - Describe exactly what will change and what will not
   - Identify any risk of side effects (e.g., changing a class name used in multiple places)

4. **Identify files to modify.**
   - List every file that will receive edits

5. **Make only the targeted edits.**
   - Use precise string replacement — do not rewrite whole sections
   - If a change appears in multiple files (e.g., nav text), update all instances

6. **Summarize changes.**
   - List every edit made, file by file, with a one-line description

7. **List exact pages, URLs, anchors, and screen sizes to test.**
   - e.g., "Test `home.html` at 1440px, 1024px, and 375px — verify pathways section, hero headline, and stats row display correctly"
   - e.g., "Test `index.html` hover behavior on both panels at desktop width"
   - e.g., "Test `services.html#family-governance` anchor scroll on mobile"

---

## 11. Git Rule

**After every successful task — commit before moving to the next.**

Use a descriptive commit message that identifies the file(s) changed and the nature of the edit. Example:

```
git add .
git commit -m "home.html: update NIL pathway description, remove NIL Flight School reference"
```

Never stack multiple unrelated changes into a single commit. One task = one commit. This ensures clean rollback if a change needs to be reverted.
