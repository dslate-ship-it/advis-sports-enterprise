# FINAL_FIXES.md

## Purpose

This file contains the remaining correction pass after prior Cursor edits. The site is near final. Cursor Agent must make surgical corrections only, avoid broad redesigns and preserve the existing design system.

## Execution Rules

- Read `AGENT_CONTEXT.md`, `MASTER_EDITS.md` and this `FINAL_FIXES.md`.
- Do not rework completed sections unless specifically listed here.
- Do not perform broad redesigns.
- Do not alter unrelated pages, links, assets or layout systems.
- Treat this as a correction pass, not a new design pass.
- Use screenshots only as visual references for the listed issue.
- Do not ask for screenshots unless the target section cannot be confidently identified from the page, code, visible text, existing layout or screenshot filename.
- If confidence is below 85%, stop and ask for clarification before editing.
- Preserve mobile responsiveness.
- Preserve the current premium black, gold and cream visual system.
- Correct obvious typos in visible text.
- Do not rename files unless necessary.
- Do not add heavy dependencies.
- For animation work, use lightweight HTML/CSS/SVG and minimal JavaScript only.

## Responsive Breakpoint Rules

Read `AGENT_CONTEXT.md` §8 for full context. Use these rules when scoping mobile-only or phablet-specific corrections.

### Large mobile and below

- **Base viewport:** 430px wide × 932px tall.
- **CSS target:** `@media (max-width: 430px)`, unless the project already has a nearby existing breakpoint that should be reused (e.g. `431px`, `480px`, `575px`).
- **Applies to:** Large phones, standard phones, and smaller phones.
- **Required test sizes:** 430×932, 390×844, 375×812.
- **Must not affect:**
  - Galaxy Fold unfolded / phablet view at approximately 691×703
  - Tablet at 768px and above
  - Laptop / desktop at 1024px and above

For mobile-only layout tasks:
- Use responsive CSS only where possible (media queries, flex order, grid order, mobile-only spacing, mobile-only sizing).
- Do not duplicate content unless necessary.
- Do not alter desktop HTML structure unless required. If HTML must be adjusted, preserve desktop appearance exactly.

### Fold / phablet unfolded

- **Base viewport:** 691px wide × 703px tall.
- **CSS target:** `@media (min-width: 600px) and (max-width: 767px)`, unless the project already has a better equivalent.
- **Treat as:** Compact tablet / phablet — not normal phone.
- **Required test size:** 691×703.
- **Must not affect:** Tablet at 768px and above, or laptop / desktop at 1024px and above.

Do not apply large-mobile-only corrections to this viewport category.

### Acceptance criteria for mobile-only fixes

When a fix is scoped to large mobile and below, verify:

- Change applies at 430×932, 390×844, and 375×812.
- Change does **not** affect 691×703 (Fold / phablet).
- Change does **not** affect 768px tablet.
- Change does **not** affect 1366px or 1440px desktop / laptop.

## Screenshot Location

Screenshots are stored in:

`_edit-references/screenshots/final-fixes/`

If a screenshot is referenced as Attachment 1, Attachment 2, etc., first inspect the screenshots in that folder and map the attachment number to the most likely filename. If the mapping is unclear, ask before editing.

## Batch Strategy

Complete these fixes in four batches:

### Batch 1 — Global Functional and Copy Fixes
- Global “Family Governance” replacement.
- Global Flight School removal.
- Global arrow/clickable routing audit.
- Footer routing audit.
- Conservative sitewide copy cleanup for em dashes and obvious AI-writing tells.

### Batch 2 — Shared Hero Alignment System
- Professional Athletes hero.
- NIL hero.
- Creatives hero.
- Bespoke hero.
- Services hero.
- Partnerships hero.
- About hero.
- Contact hero.

Use Professional Athletes Attachment 1 and NIL Attachment 5 as the reference logic for the shared hero layout.

### Batch 3 — Section Background and Card Fixes
- Home Enterprise Management sections.
- Professional Athletes cream section.
- NIL cream/gold/card fixes.
- Creatives cream/gold sections.
- Services Service 03 and Service 06 background changes.
- Partnerships card alignment.

### Batch 4 — Complex Visual / Final QA
- Bespoke fine-watch caseback / stencil dial animation.
- Services track stencil icon.
- Partnerships handshake icon correction.
- Final QA across desktop and mobile.

## Rule for Global Content Rewrite

The global content rewrite must be conservative.

Do not rewrite the entire site aggressively. Only revise copy where needed to:
- remove em dashes,
- reduce repetitive sentence rhythm,
- remove obvious AI phrasing,
- correct visible typos,
- reduce unnecessary duplication,
- improve professional grammar.

Do not break layout, buttons, headings, cards, line heights or responsive design.

## Remaining Edits

[PASTE FULL RAW REMAINING EDIT LIST BELOW THIS LINE]
Global Edits:
Update "Family Governance" to "Family Office & Governance" globally

Global Contents Edits: There are far too many em dashes. With strict guardrails NOT to break the layout review all content sitewide and ONLY WHERE NEEDED re-write adhering strictly to the following constraints while maintaining the highest level of professional grammar. Ensure diverse content across pages where duplication is not needed for intentional consistency: 
Constraints: Repetitive Sentence Flow: AVOID Monotonous sentence structure, defaulting to simple declarative statements or connecting simple phrases with semicolons rather than conjunctions Transitions: AVOID Overly relying on words like "moreover," "additionally," "therefore," and "in conclusion" to create a synthetic sense of flow AVOID the Oxford comma unless following strict corporate grammer rules, COMPLETLY AVOID em dashes (—) unless the words proper grammatical spelling relies on it. Hedging: AVOID Using ambiguous, cautious language such as "might," "could," "perhaps," "generally," and "in many cases," says Library Lack of Personal Voice: AVOID Content often lacking personal, emotional, or unique perspectives, providing a generic or superficial analysis of topics,  AVOID Common AI "Tells": "In today’s digital age" "It is important to remember" "Not only [X] but also [Y]" (Negative Parallelism) "The rule of three" (listing three similar adjectives or phrases) AVOID short sentences for emphasis (often in groups of three), phrases like "Let's break it down" or "Let's dive in," adjectives for emphasis, transitional adverbs, a... AVOID Certain phrases, such as “delve into” and “at its core,” OR OTHER common telltale signs and can make AI writing sound overly polished and stiff. AVOID AI generated writing THAT often connects simple phrases by means of a semicolon rather than using conjunctions. Instead, create a flow of ideas by using conjunctions.

Global: Ensure Flight School TM and Flight School has been completely removed from the site

Global: For every page that has sections with arrow's (see Attachment 15) that are or should be clickable, ensure they are clickable and analyze where each once should be routed to which specific section of the 6 on the services page or routed to the contact page, do the same for the footer. 

Page: Home>Enterprise Management
Attachment 2
Update this background to the Gold color, update the text to Black

Page: Home>Enterprise Management
Attachment 3
Update only this sections background to the Cream Background used on the Partnership Page, update the text and accents accordingly for visibility on the background


Page: Who We Serve>Professional Athletes
Attachment 1
In the Hero section, Bring the word "athlete." on the same line as "behind the"
Move and align the content in the green box to match the red box
Move and align the content in the white box to match the blue box
Also the Professional Athlete's Hero Background Wording does not show exactly like the NIL background wording


Page: Who We Serve>Professional Athletes
Attachment 4
Update only this sections background to the Cream Background used on the Partnership Page, update the text and accents accordingly for visibility on the background


Page: Who We Serve>NIL
Attachment 5
In the hero section Move the unmute button to be centered where the blue vimeo button currently is.
Move and align the content in the green box to match the red box
Move and align the content in the white box to match the blue box
Layout should be consistent with: Page: Who We Serve>Professional Athletes
Attachment 1


Page: Who We Serve>NIL
Attachment 6
Ensure the Our NIL Services button is centered. Also upon hover, it disappears though still clickable, fix.

Page: Who We Serve>NIL
Attachment 7
Update only this sections background to the Cream Background used on the Partnership Page, update the text and accents accordingly for visibility on the background

Page: Who We Serve>NIL
Attachment 13
The hyphenated services in only the red shirt box need to be raised to start at the same line as the All Star box and the Future Pro box, the space that will result above the cta is acceptable. The hyphenated tect in the all star and future pro boxes nee to have more bottom padding so their last hyphens allow their cta's to breath a little more than they currently do.

Page: Who We Serve>Entertainers, Creatives & Entrepreneurs
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Bring the words "creative genius." on the same line as "of"
Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5
Also the Creatives Hero Background Wording does not show exactly like the NIL background wording


Page: Who We Serve>Entertainers, Creatives & Entrepreneurs
Attachment 8
Update only this sections background to the Cream Background used on the Partnership Page, update the text and accents accordingly for visibility on the background


Page: Who We Serve>Entertainers, Creatives & Entrepreneurs
Attachment 9
Update only this sections background to the Gold Background used on the NIL Page, update the text and accents accordingly for visibility on the background



Page: Who We Serve>Bespoke & Entrepreneurs
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Bring the words "built." on the same line as "Built for those who"; and "protecting" on the same line as "something worth"
Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5


Page: Who We Serve>Bespoke & Entrepreneurs
attachment 10
This was supposed to be a icon (stencil)graphic a fine watch display caseback moving into place before becoming static on the page to reflect delicate fine tuning in motion. Below the display graphic the cta lines: Excellence is not an
accident. It is a system. should onlt take up two lines
 similar to the :19 second mark to just at the beginning of the :21 second mark of https://vimeo.com/748825682?utm_source=chatgpt.com&turnstile=1.SH6J8tpertvYSMXYrWnuLM_hM4g2TDQYcaRdNfJQsuXYT2DwrQQOtcs_2ve4Hg8dBS3IUrhtyIWh7ZtwhfBN42UMiZEmy1m0_xHpjqJu32tGV5ml_pUD5IRtB_Siej0rvxeaR1SN48ZiPGtNVQ0yfoE5a9FcKcnC_uOpwj7Pg1VYACeDkIrXBpLnJ3skPbUaQx786K-quTkPDl4-W8xBWkMtJ7lkxf-P5frLsXau0Hoxd4kDeEwmerr4umF4Zu9vM3uLwmM_FYq4MQP5str9ZDm8_lOwllPEsChC8msPA7h7mSQXNKJOTaYeC-ncKeDHR_VGbSV4aXvB4nYFeRV8rYGHODPS6i-uIAwMk7EezcR6bwFdPOVF2Q3PIiAIOv1M40xWo30BNphMd4r-jhj6JQyxZ3lfpTMpsxr_hScSt7l1ZRuIEMhdMTIdO-LcKEQiVKAathhbfsBZwU4HKS3G9bTCKN6FZbaCDFDX0awrZYdrmagFOC3FrHPR9oHIn8Uo-8MPeGivc7WMCbBDHZU2b7qq9GHGbnAEunaJdcpuTjF1bWfxEyYaZfxf4dKWyRGv-XTzF345VpAYY6ASr_IZkloqRtQ8UY4A2oj1naj7Kh4UpjD8aGsXLIGpjLYdWlDnuuwhAO90RPXEhj6H-hC9Kg.ylmI9EHeQ4Z8-cJx2oZ1ZA.931269a7503b35a102f311b9391a4b16c517a0b6543177c77fe5ce91d8d4cb1a
Let me know if you couldn't access the video, ill try another way

Page: Services Tab
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5 applying the CTA layout logic instead to the 2 hero paragraphs on the right as there is no CTA
The gold hero section ico image (stencil) should reference Attachment 12, with the tracks curve starting at the top off the hero and the bottom of the track leading and ending at the bottom of the hero, centered.

Page: Services Tab
Attachment shouldn't be needed unless cursor request it.
Update only the Service 03 and Service 06 sections background to the Cream Background used on the Partnership Page, update the text and accents accordingly for visibility on the background


Page: Partnerships
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Bring the words "relationships." on the same line as "Keep your"
Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5
Cursors first pass at a handshake hero icon was atrocious, see Attachment 11 for reference


Page: About>About The Advisory
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Bring the words "legacies." on the same line as "Measured in".
Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5 applying the CTA layout logic instead to the 2 hero paragraphs on the right as there is no CTA

Page: About>Meet The Team
Will be linked to the law sides about us page for now. I will provide the link at the very end

Page: Contact
Attachment shouldn't be needed unless cursor request it.
In the Hero section, Bring the words "something." on the same line as "Let's build"; and "protecting" on the same line as "worth"
Using the previous logic and screenshots from the Professional Athletes and NIL Hero edits: Move and align the content in the green box to match the red box
and the content in the white box to match the blue box
Ensure this hero matches the layout logic and is consistent with Page: Who We Serve>Professional Athletes
Attachment 1 & Page: Who We Serve>NIL Attachment 5 applying the CTA layout logic instead to the 2 hero paragraphs on the right as there is no CTA
