## Website Revision Pass — Optimized Cursor Agent Edit Scope

---

# I. Project Goal

Update the existing website with targeted visual, layout, copy, image, animation, and functionality refinements while preserving the current design direction. The site is already near completion, so Cursor Agent must avoid broad redesigns and instead execute the edits in controlled task groups.

The final site should feel polished, premium, visually aligned, typo-free, responsive, and consistent across all major pages.

---

# II. Global Execution Rules

Cursor Agent must follow these rules:

* Read `AGENT_CONTEXT.md` first.
* Review before editing.
* Plan before editing.
* Work on one task group at a time.
* Make targeted edits only.
* Preserve the existing design direction unless a specific edit says otherwise.
* Preserve existing routing and links unless fixing a broken link.
* Do not convert the project to React or any other framework.
* Do not add heavy dependencies.
* Use existing HTML/CSS/JS structure where practical.
* Correct all obvious visible typos.
* Do not rename files unless necessary for routing, SEO, or user-visible correction.
* If files are renamed, update all internal references safely and report every changed filename.
* After each task group, summarize modified files and list exact pages/URLs/screen sizes to test.

---

# III. Screenshot / Ambiguity Rule

Cursor should **not ask for screenshots by default**.

Cursor should only ask for a screenshot or clarification if the target section cannot be confidently identified from:

* page/tab label
* visible text
* page title
* hero text
* headings
* internal links
* HTML structure
* CSS class names
* asset names
* existing layout

If confidence is below 85%, Cursor must stop before editing and ask for:

* screenshot of the exact section, or
* page URL/filename, or
* visible text near the target section, or
* clarification of desired layout/behavior.

Do not make best-guess visual edits if confidence is below 85%.

---

# IV. Page Filename Discovery Rule

The edit list uses visible page/tab names, not guaranteed filenames.

Before editing any page-specific task, Cursor must inspect the project structure and map each visible page/tab name to its actual file path.

Cursor must report the actual file controlling each page before editing it.

Do not ask the user for exact filenames unless the correct file cannot be identified from the project.

---

# V. Official Logo Asset Rule

The user will provide the official transparent-background logo asset.

Preferred filename:

```text
official-logo-transparent.png
```

Cursor must search the project for this asset before making logo-background edits.

If found, use it for:

* load page logo
* homepage center logo
* homepage left-side logo
* Advisory homepage hero background logo
* About page hero background logo

If the file is not found and the task depends on it, stop and ask the user to upload it before editing logo-related tasks.

---

# VI. Load Page Discovery Rule

The load page, splash screen, preloader, or loading logo is somewhere in the exported Genspark project.

Cursor must inspect the project and identify the file or code controlling the load page before editing.

Likely indicators:

* loading screen markup
* splash screen markup
* loader component
* preloader CSS/JS
* logo displayed before homepage load
* references to loading, loader, splash, preloader, intro, or transition

Cursor must report the file found before editing.

---

# VII. Animation / Bespoke Graphic Rule

For the Bespoke animated dial/watch graphic, Cursor should create a lightweight custom visual component.

Default implementation:

* Use HTML/CSS/SVG.
* Use minimal JavaScript only if needed for scroll-triggered animation.
* Do not add heavy animation libraries.
* Do not require the user to provide an image.
* Animation should feel premium, restrained, mechanical, and brand-consistent.
* Avoid cartoonish, generic SaaS, or gimmicky animation.
* Animation should trigger when the section scrolls mostly or fully into view.
* Animation should complete and become static.
* No infinite spinning.

---

# VIII. Typo Correction Rule

Correct all obvious typos in visible site text, headings, buttons, labels, and newly generated content.

Examples:

* Athelete → Athlete
* Atheletes → Athletes
* entrepenuers → entrepreneurs
* pohto → photo
* drak → dark
* paragrapgh → paragraph
* Esure → Ensure
* PArter → Partner
* neft → left
* wotds → words
* shoul → should
* bought → brought
* onlt → only
* irrovacalbe → irrevocable

Do not rename existing files solely to correct spelling unless:

1. the filename is visibly exposed to users, or
2. renaming is necessary for routing/SEO, and
3. all internal links and references are updated safely.

---

# IX. Required Edits by Task Group

---

## Task Group 1 — Asset Cleanup: Logo Transparency and Load Page

Priority: High
Status: Not Started
Pages Affected:

* Load page / splash page
* Homepage
* About page

Likely Files:

* Unknown; Cursor should inspect relevant files first.
* Likely `index.html`, global CSS, image assets, preload/loading code, and About page file.

Screenshot References:

* None provided unless added later.

### Current Issue

Several logo placements use black or charcoal backgrounds behind the logo. These should be replaced with official transparent logo treatment.

### Required Changes

#### 1. Load Page Logo

* Current logo has a black background.
* Replace or adjust it so only the logo appears with a transparent background.
* Do not distort logo proportions.

Acceptance Criteria:

* No black rectangle or square behind the load page logo.
* Logo appears cleanly over the existing background.
* Loading behavior still works.

#### 2. Homepage Center Logo

* Align the logo dead center with the subtle vertical dividing line between the two homepage halves.
* Remove the black background.
* Increase the logo size by approximately 100%.
* Keep logo proportional.

Acceptance Criteria:

* Logo is centered on the dividing line.
* Logo background is transparent.
* Logo is larger but not blurry, cropped, or distorted.

#### 3. Homepage Left-Side Logo

* Make the left-side logo background transparent.
* The wall/background should show behind the logo.

Acceptance Criteria:

* No visible box behind the logo.
* Logo appears naturally over the wall/background.

#### 4. Advisory Homepage Hero Background Logo

* Current background logo is dark gray with a charcoal square framing it.
* Replace with original gold logo using transparent background.
* Preserve the current size if it already works visually.

Acceptance Criteria:

* Gold logo appears with no framing square.
* Site black background remains visible behind it.

#### 5. About Page Hero Background Logo

* Use the official transparent-background logo as the hero background.

Acceptance Criteria:

* Logo is transparent.
* Hero text remains readable.
* No black or opaque box appears.

Testing Instructions:

* Test homepage.
* Test load/preloader behavior.
* Test About page hero.
* Check desktop and mobile.

Suggested Commit Message:

```bash
git commit -m "Clean up logo transparency and loading assets"
```

---

## Task Group 2 — Homepage Layout and Text Alignment

Priority: High
Status: Not Started
Pages Affected:

* Homepage

Likely Files:

* Homepage file identified by Cursor
* Related CSS

Screenshot References:

* None provided unless added later.

### Current Issue

Homepage split-screen alignment and paragraph line break need refinement.

### Required Changes

#### 1. Homepage "Law" Alignment

* The word "Law" on the left side of the homepage should be brought higher.
* It should align on the same visual line as "Entertainers."

Acceptance Criteria:

* "Law" and "Entertainers" visually align.
* Split-screen structure remains intact.

#### 2. Homepage Paragraph Under "Law"

* In the paragraph under "Law," force the second sentence beginning with "The Advisory is built..." to start on a new line.
* The words "The Advisory is built..." should all begin on the same line.

Acceptance Criteria:

* Sentence starts cleanly on its own line.
* Paragraph remains balanced.
* No unnecessary copy rewrite.

Testing Instructions:

* Test homepage desktop.
* Test responsive behavior around the split-screen hero.

Suggested Commit Message:

```bash
git commit -m "Refine homepage split layout and paragraph alignment"
```

---

## Task Group 3 — Shared Hero Layout Standardization

Priority: High
Status: Not Started
Pages Affected:

* Professional Athletes page
* NIL Athletes page
* Entertainers & Creatives page
* Bespoke & Entrepreneurs page
* Services page
* Partnerships page
* About page

Likely Files:

* Cursor should map actual page files before editing.
* Shared CSS controlling hero layout.

Screenshot References:

* None provided unless added later.

### Current Issue

Several pages need consistent premium hero layout behavior.

### Required Shared Hero Rule

Where specified below:

* Hero headline should sit in the lower-left area.
* Headline should be left-aligned.
* Tagline or intro paragraph should align to the lower-right where requested.
* CTA boxes/buttons should align to the right where requested.
* The top line of the right-side CTA/paragraph area should align with the top of the first relevant lowercase headline line where specified.
* Preserve existing dark/gold/stencil visual language.
* Avoid broad redesign.

Acceptance Criteria:

* Pages using the shared hero pattern feel consistent.
* No page appears visually accidental or misaligned.
* Mobile layout remains readable.

Suggested Commit Message:

```bash
git commit -m "Standardize shared hero layout system"
```

---

## Task Group 4 — Professional Athletes Page

Priority: High
Status: Not Started
Pages Affected:

* Professional Athletes page

Likely Files:

* Cursor should identify actual file.
* Related CSS and assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Hero Headline, Tagline, CTA, and Background

* Bring headline and tagline to the lower-left of the hero.
* Align headline and tagline left.
* Align stacked CTA boxes to the right.
* Top line of the first CTA box should align with the top of the headline's lowercase line beginning "The enterprise."
* Remove the video from the hero.
* Replace with the same gold stencil background style currently on the NIL Athletes page.
* Stencil text/background should say:

```text
PRO ATHLETES
```

Acceptance Criteria:

* No hero video remains.
* Hero uses gold stencil `PRO ATHLETES` background.
* Left/right alignment feels intentional.
* CTA boxes remain stacked and visually consistent.

#### 2. Client Relationship Section First Photo

* Remove the first photo completely because it duplicates homepage imagery.
* Reformat the Client Relationship section after removing the image.
* Under the listed client names, add:

```text
And over 50 other current and former professional athletes.
```

Acceptance Criteria:

* No broken or empty image container remains.
* Section feels balanced after image removal.
* Added line matches existing style.

#### 3. How We Work / Principles Section

* Adjust size and spacing of each principle paragraph.
* Paragraphs should appear uniform to the naked eye.
* Paragraphs should visually start and end on consistent lines where possible.
* Use justified alignment.

Acceptance Criteria:

* Principle blocks look uniform.
* Text is justified.
* Mobile layout remains readable.

#### 4. Ready to Build Your Enterprise CTA

* Begin each new sentence on its own new line.
* Use justified paragraph alignment.

Acceptance Criteria:

* Each sentence starts on its own line.
* CTA section remains polished.

Testing Instructions:

* Test Professional Athletes page desktop.
* Test mobile.
* Confirm video removal.
* Confirm stencil background.
* Confirm client list update.

Suggested Commit Message:

```bash
git commit -m "Update professional athletes page layout and content"
```

---

## Task Group 5 — NIL Athletes Page

Priority: High
Status: Not Started
Pages Affected:

* NIL Athletes page

Likely Files:

* Cursor should identify actual file.
* Vimeo embed location.
* Related CSS/JS.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Hero Video

* Set Vimeo hero video to autoplay where browser rules allow.
* Add a clear prompt to unmute.

Acceptance Criteria:

* Vimeo video attempts muted autoplay.
* Visible unmute prompt exists.
* Layout does not break if browser blocks autoplay.

#### 2. Hero Headline, Tagline, and CTA

* Remove `Flight School™` and leave only `NIL` in the header.
* Bring headline and tagline to lower-left.
* Align headline and tagline left.
* Align stacked CTA boxes to the right.
* Top line of the first CTA box should align with the top of the headline's lowercase line beginning "The enterprise."

Acceptance Criteria:

* Header displays only `NIL`.
* Hero alignment matches shared standard.
* CTA boxes are aligned.

#### 3. Service Tiers / Service Cards

* Change second card title from `Flight School™` to:

```text
All-Star
```

* Change third card title from `All-Start` to:

```text
Future Pro
```

* Align each CTA in each box consistently.
* Adjust description paragraph size and spacing so each card appears uniform.
* Use justified paragraph alignment where appropriate.

Acceptance Criteria:

* No `All-Start` typo remains.
* Card CTAs align.
* Descriptions appear balanced.

#### 4. Flight School Curriculum Section CTA

* Change `Flight School™` to:

```text
All-Star Curriculum
```

* Replace paragraph:

```text
Built around the rhythms of your athletic season, Flight School™ moves from foundational literacy to active enterprise management — without disrupting your game.
```

With:

```text
Built around the rhythms of your athletic season, All-Star moves from foundational literacy to active enterprise management — without disrupting your game.
```

* Change CTA button from:

```text
Start Flight School
```

To:

```text
Become an All-Star
```

Acceptance Criteria:

* Updated naming appears correctly.
* CTA button reads `Become an All-Star`.

Testing Instructions:

* Test NIL Athletes page.
* Test Vimeo behavior.
* Test service cards.
* Test curriculum CTA.

Suggested Commit Message:

```bash
git commit -m "Update NIL athletes page video and service tiers"
```

---

## Task Group 6 — Entertainers & Creatives Page

Priority: High
Status: Not Started
Pages Affected:

* Entertainers & Creatives page

Likely Files:

* Cursor should identify actual file.
* Related CSS/video assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Hero Headline, Tagline, CTA, and Background

* Bring headline and tagline to lower-left.
* Align headline and tagline left.
* Align stacked CTA boxes to the right.
* Top line of first CTA box should align with the top of the headline's lowercase line beginning "The enterprise."
* Remove the hero video from this page.
* Move or reuse the video on the Bespoke & Entrepreneurs page.
* Replace Entertainers & Creatives hero background with the same gold stencil style currently on the NIL Athletes page.
* Stencil text/background should say:

```text
CREATIVES
```

Acceptance Criteria:

* Entertainers & Creatives hero no longer has the video.
* Hero uses gold stencil `CREATIVES` background.
* Hero alignment matches shared standard.

#### 2. "Your IP Is Your Enterprise" Section

Justify the paragraph beginning:

```text
Most creators don't realize they've given away what matters most until it's too late.
```

Acceptance Criteria:

* Paragraph is justified.
* No text overflow on mobile.

Testing Instructions:

* Test Entertainers & Creatives page.
* Confirm video removal.
* Confirm stencil background.
* Confirm paragraph justification.

Suggested Commit Message:

```bash
git commit -m "Update entertainers and creatives page hero and IP section"
```

---

## Task Group 7 — Bespoke & Entrepreneurs Page

Priority: High
Status: Not Started
Pages Affected:

* Bespoke & Entrepreneurs page

Likely Files:

* Cursor should identify actual file.
* Related CSS/JS/video assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Hero Headline, Tagline, CTA, and Video

* Add the hero video from the Entertainers & Creatives page.
* Preserve the video's exact layout and effects where possible.
* Reduce hero headline font size only as much as needed so headline appears on two lines, not six.
* Bring headline to lower-left.
* Align headline left.
* Align intro paragraph and CTA box to the right.
* Top line of the first sentence of the right-side paragraph/CTA area should align with the top of the headline's first lowercase line beginning "Built for those who..."

Acceptance Criteria:

* Hero video appears on Bespoke & Entrepreneurs page.
* Headline is approximately two lines.
* Left/right hero alignment feels premium.

#### 2. "What Bespoke Means" Section

* Justify the paragraph beginning:

```text
Bespoke clients receive a fully customized advisory relationship.
```

* Add a fourth descriptor titled:

```text
Family Office and Trust Design
```

* Add a concise explanatory sentence for the new descriptor.

Acceptance Criteria:

* Paragraph is justified.
* Fourth descriptor matches existing descriptor style.
* New sentence is concise and brand-consistent.

#### 3. Video Section Below "What Bespoke Means"

* Remove the video completely.
* Replace with a lightweight custom HTML/CSS/SVG graphic.
* Graphic should use stencil-style control dials of various sizes.
* Dials should represent:

```text
index funds
ETFs
Roth
crypto
business acquisitions
philanthropic giving
family business
irrevocable trust
blind trust
domestic accounts
offshore accounts
business scale
```

* Dials should animate to different positions once scrolled mostly or fully into view.
* Animation should complete and become static.
* Visual concept: a premium stencil-style fine watch display caseback / tuning mechanism moving into place, then becoming static.
* Below the display graphic, show CTA lines exactly as two lines:

```text
Excellence is not an accident.
It is a system.
```

Acceptance Criteria:

* Old video is removed.
* New animation is lightweight.
* No heavy libraries are added.
* Animation triggers on scroll.
* CTA text is exactly two lines.
* Graphic feels premium, not cartoonish.

Testing Instructions:

* Test Bespoke & Entrepreneurs page.
* Confirm hero video transfer.
* Confirm headline line count.
* Confirm new descriptor.
* Confirm dial/watch animation.
* Test desktop and mobile.

Suggested Commit Message:

```bash
git commit -m "Update bespoke page hero and custom dial animation"
```

---

## Task Group 8 — Services Page

Priority: High
Status: Not Started
Pages Affected:

* Services page

Likely Files:

* Cursor should identify actual file.
* Related CSS/assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Services Page Hero

* Add an aerial shot / aerial-style gold stencil of a 5-lane track stretching full width of the hero section.
* Use the same dark overlay treatment used in other stencil hero areas.
* Make headline two lines, not three.
* Bring headline lower-left.
* Align headline left.
* Align intro hero paragraph to the right.
* Top line of paragraph should align with the top of the headline's first lowercase line beginning "One firm..."

Acceptance Criteria:

* Hero uses gold track stencil visual.
* Track spans hero width.
* Headline is two lines.
* Text remains readable.

#### 2. Service Page Service 2 Section

* Change CTA button text from:

```text
NIL Flight School™
```

To:

```text
NIL Full Service Suite
```

Acceptance Criteria:

* CTA text updated.
* Link destination remains correct unless broken.

#### 3. Services Header Visibility

* Header tabs on this page are not white or viewable like other pages.
* Fix header tab color/visibility so this page matches other pages.

Acceptance Criteria:

* Header tabs are visible.
* Header styling matches other pages.
* Fix does not break header elsewhere.

Testing Instructions:

* Test Services page desktop and mobile.
* Confirm hero.
* Confirm CTA.
* Confirm header visibility.

Suggested Commit Message:

```bash
git commit -m "Update services page hero and header visibility"
```

---

## Task Group 9 — Partnerships Page

Priority: High
Status: Not Started
Pages Affected:

* Partnerships page

Likely Files:

* Cursor should identify actual file.
* Related CSS/assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. Partnerships Hero

* Add a gold stencil handshake icon dead center in the hero section.
* Use the same dark overlay treatment as other stencil/icon hero areas.
* Make headline two lines, not four.
* Bring headline lower-left.
* Align headline left.
* Align intro hero paragraph and CTA button to the right.
* Top line of first sentence of the paragraph should align with the top of the headline's first lowercase line.

Acceptance Criteria:

* Hero matches stencil/icon language.
* Handshake icon is centered and tasteful.
* Headline is two lines.
* Hero alignment is consistent.

#### 2. "How We Partner With You" Section

For each tier card:

* Justify the "For..." section at the top-left of each card.
* Adjust size and spacing of:

  * tier card headline
  * inserted break line
  * `Value to You` paragraph
  * `How We Partner With You` sub-headlines
  * `Explore Partnership` CTA
* Make all cards appear uniform to the naked eye.
* Corresponding content should begin and end on visually consistent lines where possible.

Acceptance Criteria:

* Tier cards are visually uniform.
* CTA buttons align consistently.
* Text remains readable on mobile.

Testing Instructions:

* Test Partnerships page desktop and mobile.
* Confirm hero.
* Confirm card alignment.

Suggested Commit Message:

```bash
git commit -m "Update partnerships hero and tier card alignment"
```

---

## Task Group 10 — About Us Page

Priority: High
Status: Not Started
Pages Affected:

* About Us / About the Advisory page

Likely Files:

* Cursor should identify actual file.
* Related CSS/assets.

Screenshot References:

* None provided unless added later.

### Required Changes

#### 1. About the Advisory Hero

* Make headline two lines, not four.
* Bring headline lower-left.
* Align headline left.
* Align intro hero paragraph commensurately to the lower-right.
* Top line of the first sentence of the paragraph should align with the top of the headline's first lowercase line.
* Use official transparent-background logo as the hero background.

Acceptance Criteria:

* Headline is two lines.
* Hero layout matches standardized system.
* Logo background is transparent.
* Text remains readable.

Testing Instructions:

* Test About page desktop and mobile.
* Confirm hero logo background.
* Confirm headline line count.

Suggested Commit Message:

```bash
git commit -m "Update about page hero layout and logo background"
```

---

## Task Group 11 — Final QA Pass

Priority: Required
Status: Not Started
Pages Affected:

* All edited pages

Likely Files:

* All modified files

Screenshot References:

* None provided unless added later.

### Required QA

After all task groups are complete, inspect and test:

* Homepage
* Load page / preloader
* Professional Athletes page
* NIL Athletes page
* Entertainers & Creatives page
* Bespoke & Entrepreneurs page
* Services page
* Partnerships page
* About page

Check:

* Hero alignment consistency
* Logo transparency
* Header visibility
* Mobile navigation
* CTA alignment
* CTA links
* Video removal/addition
* Vimeo autoplay/unmute behavior
* Scroll-triggered animation
* Image/background loading
* Responsive layout at desktop, tablet, and mobile widths
* Obvious typos
* Broken images
* Broken links

### Final Acceptance Criteria

* No broken images.
* No visible black boxes behind transparent logos.
* No duplicate hero videos.
* No obvious alignment drift between pages using the shared hero pattern.
* No CTA text errors.
* No typo: `All-Start`.
* No visible typos like `Athelete` or `entrepenuers`.
* Header is visible on every page.
* Mobile layout remains usable.
* No heavy new dependencies were added.

Suggested Commit Message:

```bash
git commit -m "Complete final QA polish"
```

---

# X. Recommended Cursor Task Sequence

Cursor should execute edits in this order:

1. **Task Group 1 — Asset Cleanup**

   * Reason: Logo assets affect multiple pages.
   * Commit: Yes.

2. **Task Group 2 — Homepage Layout**

   * Reason: Homepage is the visual foundation.
   * Commit: Yes.

3. **Task Group 3 — Shared Hero Layout Standardization**

   * Reason: Avoids repeated one-off hero fixes.
   * Commit: Yes.

4. **Task Group 4 — Professional Athletes Page**

   * Reason: Uses shared hero system and stencil styling.
   * Commit: Yes.

5. **Task Group 5 — NIL Athletes Page**

   * Reason: Contains video and service-tier logic.
   * Commit: Yes.

6. **Task Group 6 — Entertainers & Creatives Page**

   * Reason: Video must be removed and transferred conceptually to Bespoke.
   * Commit: Yes.

7. **Task Group 7 — Bespoke & Entrepreneurs Page**

   * Reason: Most complex custom component; should happen after video/source assets are identified.
   * Commit: Yes.

8. **Task Group 8 — Services Page**

   * Reason: Page-specific hero and header visibility.
   * Commit: Yes.

9. **Task Group 9 — Partnerships Page**

   * Reason: Page-specific hero and card alignment.
   * Commit: Yes.

10. **Task Group 10 — About Us Page**

    * Reason: Uses official logo and shared hero system.
    * Commit: Yes.

11. **Task Group 11 — Final QA Pass**

    * Reason: Verify consistency, responsiveness, links, and typos.
    * Commit: Yes.

---

# XI. Cursor Agent Starting Prompt

Use this in a fresh Cursor Agent chat:

```text
Read @AGENT_CONTEXT.md and @MASTER_EDITS.md first.

Do not edit immediately.

First:
1. Summarize the relevant project rules from @AGENT_CONTEXT.md.
2. Summarize the required edits from @MASTER_EDITS.md.
3. Inspect the project structure.
4. Map all visible page/tab names in @MASTER_EDITS.md to actual file paths or routes.
5. Locate the official transparent logo asset if logo edits are required.
6. Locate the load page, splash screen, preloader, or loading logo code if relevant.
7. Identify available video/image assets relevant to the first recommended task group.
8. Review any screenshot references listed for the first recommended task group.
9. Propose the safest task sequence.
10. Identify which task group should be done first.
11. List the files and screenshots you need to inspect for that first task group.
12. Provide a short implementation plan.

Rules:
- Do not ask me for exact filenames unless you cannot determine them from the project.
- Do not ask for a screenshot unless the target section cannot be confidently identified.
- Correct obvious typos in visible text.
- Do not rename files unless necessary.
- For custom animated visuals, prefer lightweight HTML/CSS/SVG with minimal JavaScript.
- Do not use heavy animation libraries unless approved.

Stop and wait for my approval before editing.
```

---

# XII. Cursor Agent Approval Prompt

After Cursor provides the plan, approve one task group at a time:

```text
Proceed with Task Group [NUMBER] only.

Use @AGENT_CONTEXT.md and @MASTER_EDITS.md as the source of truth.

Review any screenshot references listed for this task group.

Inspect the relevant HTML/CSS/JS before editing.

Make only the changes required for this task group.

Do not work on unrelated task groups.

Do not ask for screenshots unless the target section cannot be confidently identified from the project files, visible text, asset names, or current layout.

After editing:
1. Summarize exactly what changed.
2. List every modified file.
3. List the exact URLs, anchors, screen sizes, or flows I should test.
4. Report any issue, missing asset, uncertain file mapping, or assumption.
```

---

# XIII. End-of-Task Commit Messages

Use these commit messages:

```bash
git commit -m "Clean up logo transparency and loading assets"
git commit -m "Refine homepage split layout and paragraph alignment"
git commit -m "Standardize shared hero layout system"
git commit -m "Update professional athletes page layout and content"
git commit -m "Update NIL athletes page video and service tiers"
git commit -m "Update entertainers and creatives page hero and IP section"
git commit -m "Update bespoke page hero and custom dial animation"
git commit -m "Update services page hero and header visibility"
git commit -m "Update partnerships hero and tier card alignment"
git commit -m "Update about page hero layout and logo background"
git commit -m "Complete final QA polish"
```
