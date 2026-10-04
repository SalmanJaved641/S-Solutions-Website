# S SOLUTIONS — WEBSITE SUPER PROMPT



## TABLE OF CONTENTS

0. How to read this prompt
1. Project overview
2. Non-negotiable rules
3. Tech stack & dependencies
4. Brand & design system
5. Site map, routing & Home section order
6. Header (global)
7. Home page sections (7.1 – 7.13)
8. Projects page
9. Contact page (+ form backend)
10. Footer (global)
11. Global behaviours (cursor, motion, responsive)
12. Assets strategy (what is real, what is placeholder, what is generated)
13. Editable content files
14. Folder structure
15. SEO
16. Accessibility
17. Performance
18. Implementation priorities
19. Testing requirements
20. Deployment
21. Final report the agent must deliver

---

## 0. HOW TO READ THIS PROMPT


- **Nothing important is left to guess.** Where the original requirements were ambiguous, the item is marked **⚠ DECISION**. Implement it exactly as written, and keep it easy to change (config/content files).
- **Do not ask the owner to supply images.** Generate them with code (CSS/SVG/canvas/WebGL), use icon libraries, or source them from a CDN. If something genuinely cannot be done this way, use a clean placeholder and list it in the final report (Section 21) so the owner can add it manually.
- **Do not invent** company information, clients, testimonials, statistics, social URLs, a portfolio URL, or asset filenames that were not established here.
- Read the whole prompt before writing code. Then follow the priorities in Section 18.

---

## 1. PROJECT OVERVIEW

**Brand:** S Solutions — a professional digital agency / software house based in **Lahore, Pakistan**. It must look and operate like an agency, **not** like an individual freelancer portfolio.

**Website purpose (conversion flow):**
Cold outreach → prospect visits website → understands S Solutions' capabilities → sees professional process and work → builds trust → contacts S Solutions.

**Audience:** international clients as well as clients in Pakistan and other markets.

**Feel:** premium, modern, professional, trustworthy, technically capable, creative, international, agency-level. Dark-mode, cinematic but restrained. Avoid: generic template look, generic AI-landing-page patterns, visual noise, random animations, unnecessary 3D, fake testimonials, fake client claims, broken interactions, non-functional buttons, desktop-only layouts.

**The site must be real and functional**, not a mockup: working navigation, working buttons/links, a working contact form, responsive layouts (mobile/tablet/desktop), purposeful animations, good performance, clean reusable code, SEO foundations, easy asset replacement, easy future content updates.

**Core services (preserve all four):**
1. Web Development — full-stack, frontend, custom coding, speed optimization
2. Shopify & E-commerce — store setup, theme customization, app integration, product listings
3. Performance / Digital Marketing — Meta Ads (Facebook & Instagram), campaign strategy, retargeting funnels, ROAS optimization
4. App Development — Android / IOS APPS, Flutter, App Design, Play Store App Store Integration , Google AdSense.

**Contact facts (fixed):**
- Email: `mibusiness641@gmail.com`
- WhatsApp / phone: `0328-8131351` (international form for links: `+92 328 8131351`, WhatsApp link digits `923288131351`)
- Location: **Lahore, Pakistan** (only this — no street address)
- Social media links: **not available yet** (placeholders only)
- Portfolio URL (for "Powered By S Solutions"): **not available yet** (placeholder only)

---

## 2. NON-NEGOTIABLE RULES

1. **Content integrity.** No fake clients, no fake testimonials, no fake statistics/results, no invented company facts, no lorem ipsum. All copy must be real, sensible, and editable.
2. **Projects **  Never imply work for popular companies.
3. **Placeholder brand logos** (marquees) must be  real world but non popular logos.
4. **Background rule:** the animated mesh/fluid background exists **only in the Hero section**. Every other section uses the plain base colour `#00050f` (cards/panels may use subtle glass surfaces on top of it — but no other animated backgrounds, no mesh/blobs elsewhere).
5. **No invented asset filenames.** Do not reference files that don't exist. Assets go through one central manifest (Section 12).
6. **No broken UI.** Every button and link must do something real (navigate, scroll, open WhatsApp/mail, submit form) or be an explicitly documented placeholder (social links, portfolio link).
7. **Reduced motion:** honour `prefers-reduced-motion` everywhere (Section 16).
8. **Do not add libraries without a real reason.** Prefer the platform (CSS, IntersectionObserver) when it is enough.
9. **Everything editable from content/config files** (Section 13) — no copy or contact details hard-coded inside components.
10. **Owner-provided files** (logo, real brand logos, real project images) will be dropped in later; the code must make this a one-line change per asset.

---

## 3. TECH STACK & DEPENDENCIES

The owner asked for **React + Tailwind CSS**. Use:

| Purpose | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router) + React + TypeScript** | Next.js is React; chosen for SEO, routing, metadata, API route for the contact form, easy Vercel deploy |
| Styling | **Tailwind CSS** (current stable major) | Design tokens defined once (Section 4). Add `clsx` + `tailwind-merge` for class merging |
| UI motion / scroll | **Motion** (formerly Framer Motion, import from `motion/react`) | Header morph, accordion, fade/slide reveals, stacked cards, process timeline via `useScroll` |
| Optional | **GSAP + ScrollTrigger** | Only if it clearly simplifies the pinned process section. Do not ship both for the same job without reason |
| Icons (UI) | **lucide-react** | Arrows, phone, mail, map pin, calendar, menu, etc. |
| Icons (brand logos) | **react-icons** (Simple Icons set `react-icons/si`) **or** the Simple Icons CDN | **Verify every icon import actually exists** in the installed version. If a brand icon isn't available, use a clean monogram tile generated with CSS/SVG and list it in the report. Never guess import names |
| 3D hero shape | **three + @react-three/fiber (+ @react-three/drei only if needed)** | Lazy-loaded (Section 7.1). Alternative: a well-made CSS-3D/SVG solution if lighter |
| Forms | **zod** (validation) + native React state or `react-hook-form` | Keep it light |
| Email delivery | **Resend** *or* **Nodemailer (SMTP)** | Pick the simpler one; secrets only via env vars (Section 9.4) |
| Fonts | `next/font` (Google Fonts) | Suggested below; agent may substitute equivalents |

**Suggested fonts (via `next/font`)::**
- Headings / UI: a modern geometric grotesk — e.g. **Space Grotesk** (or Sora / Plus Jakarta Sans)
- Body: **Inter**
- Tags / labels / step counters (uppercase, letter-spaced): a mono — e.g. **JetBrains Mono** (or Geist Mono)
- "Design Toolkit" heading only: an elegant serif — e.g. **Instrument Serif** (or Playfair Display)

Do not add Lenis or other smooth-scroll/scroll-jacking libraries. Use native scroll (`scroll-behavior: smooth` + `scroll-margin-top` on anchor targets). Pinned sections must use native `position: sticky`.

---

## 4. BRAND & DESIGN SYSTEM

### 4.1 Logo & brand colours
The S Solutions logo: a bold **blue "S"** with an **orange swooping arrow** rising through it, small bar-chart bars in the swoosh, and the wordmark **"S SOLUTIONS"** (orange "S", dark-navy "SOLUTIONS"). The owner will upload the logo file(s) (Section 12).

**The blue in the logo = PRIMARY colour. The orange in the logo = SECONDARY colour.**

Define these as tokens in one place (Tailwind theme / CSS variables), so they can be tuned in one edit. Starting values (approximate — sample from the real logo file once provided and adjust):

```
--color-bg:            #00050f   /* base background, every section except hero mesh */
--color-primary-400:   #3B8CF0   /* light blue — text accents, glows */
--color-primary-500:   #1F6FDB   /* PRIMARY — main buttons, highlights */
--color-primary-600:   #1857B3   /* hover / pressed */
--color-navy:          #0A2A66   /* deep brand navy (from wordmark) */
--color-secondary-400: #FBA94C
--color-secondary-500: #F7941D   /* SECONDARY (orange) — accents, step badges, secondary CTA */
--color-secondary-600: #E8730C
--color-text:          #FFFFFF
--color-text-muted:    rgba(255,255,255,0.65)
--color-border:        rgba(255,255,255,0.10)
--color-surface:       rgba(255,255,255,0.04)   /* glass cards */
--color-online:        #22C55E   /* "Available for work" dot only */
```

Use brand colours **intelligently**: mostly dark UI with primary blue for key actions and glows; orange as a sparing accent. Never flood the interface with bright colour.

### 4.2 Typography
- Strong hierarchy: very large display headings (clamp-based fluid sizing), medium subheads, comfortable body text.
- Uppercase, letter-spaced mono for tags, labels, step counters.
- Muted white (`--color-text-muted`) for supporting text; ensure WCAG AA contrast.

### 4.3 Surfaces, shape, spacing
- Glassmorphism where appropriate: `bg-white/5`, `border border-white/10`, `backdrop-blur`.
- Generous, consistent section spacing (e.g. `py-24 md:py-32`), a max content width (~1200–1280px) with responsive side padding.
- Rounded corners: cards `rounded-2xl`/`3xl`; pills fully rounded.
- Subtle gradient borders and soft glows (blue/orange) on hover; never heavy.

### 4.4 Motion principles
- Every animation must have a purpose (guide attention, show state, add depth).
- Prefer `transform` and `opacity` only. Use consistent easing (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`) and durations (200–600ms UI, longer for ambient).
- Section content reveals gently on scroll (fade + small translate), once.
- Provide a reduced-motion alternative for everything.

### 4.5 Reusable primitives to build
`Button` (variants: primary / secondary / glass / ghost, with optional icon), `SectionHeading` (eyebrow tag + title + optional side text), `Tag` (bracket-corner uppercase chip), `GlassCard`, `GlowBorder` (animated gradient border wrapper), `FlipCard`, `Marquee`, `Reveal` (scroll reveal wrapper), `Container`.

---

## 5. SITE MAP, ROUTING & HOME SECTION ORDER

**Main pages (3):**
- `/` — Home
- `/projects` — Projects
- `/contact` — Contact

**About** and **Services** are **sections on Home**, reached by anchors `/#about` and `/#services` (they are not separate pages).

**Utility pages (⚠ DECISION):** the footer requires "Terms & Conditions" and "Privacy Policy" links, so create two very pages `/terms` and `/privacy` ("AI Generated text", `noindex`), plus a styled `not-found` (404) page. These are not part of the main navigation.

**Home page section order (follows the source document order):**

| # | Section | Anchor id |
|---|---|---|
| 7.1 | Hero | `home` |
| 7.2 | About (minimal) | `about` |
| 7.3 | What You Get (accordion) | `services` |
| 7.4 | A Collaborative Approach (sticky process) | `process` |
| 7.5 | Logo Marquee (brands) | `brands` |
| 7.6 | Design Toolkit (4 auto-scrolling rows) | `toolkit` |
| 7.7 | What Technologies Do We Use (flip cards) | `technologies` |
| 7.8 | Trusted By (logo marquee) | `trusted-by` |
| 7.9 | Services — stacked card scroll | `services-detail` |
| 7.10 | Pricing (Coming soon) | `pricing` |
| 7.11 | Projects (flip cards) | `projects` |
| 7.12 | Contact CTA banner | `contact-cta` |
| 7.13 | Footer | — |

All anchor targets get `scroll-margin-top` so the floating header never covers headings. The order must be trivially re-orderable (each section is its own component; `page.tsx` just lists them).

---

## 6. HEADER (GLOBAL — appears on every page)

**Name:** Sticky Glassmorphic Morphing Header.

### 6.1 Expanded state (page top, and whenever the user scrolls DOWN)
- A **floating, semi-transparent pill** centred at the top of the viewport with a gap from the top edge. `position: fixed`. Heavy `backdrop-blur` so content scrolling underneath is blurred. Thin translucent border, soft shadow.
- **Left:** brand logo mark (the S icon) inside a small round dark chip.
- **Center:** navigation links in this order: **Home · About · Projects · Services**
  - Home → `/`
  - About → `/#about`
  - Projects → `/projects` (the page)
  - Services → `/#services`
- **Right:** a **"Contact"** button — primary-colour gradient pill with a small **white circle containing an arrow icon** on its right → `/contact`.
- Active-link indicator: route-based for Projects/Contact; scroll-spy (IntersectionObserver) for About/Services when on Home.

### 6.2 Collapsed state (user scrolls UP)
- The header **morphs** (animated width/layout change): the centre nav links and the Contact button **disappear**. What remains: **brand logo on the left** and **status indicator on the right**.
- The status indicator: text **"Available for work"** plus a **glowing green pulsing dot** (`--color-online`) with an **expanding, fading transparent ring** around it (looping ripple) to signal online status.
- Result is a small compact pill.

### 6.3 Behaviour rules
- Track scroll direction with a passive scroll listener (rAF-throttled).
- Collapse when scrolling down and `scrollY` is past a small threshold (~80px). Re-expand as soon as the user scrolls up (small delta tolerance ~4px), and **always** be expanded when near the top (`scrollY` < ~40).
- Use smooth, spring-like morphing (Motion `layout` / animated width). No jumps, no flicker, no layout shift of page content (header is fixed).
- Header is present on all pages with the same behaviour.

### 6.3 Behaviour rules
- Track scroll direction with a passive scroll listener (rAF-throttled).
- **Expanded state:** shown at the top of the page (`scrollY` < ~40) and whenever the user scrolls **DOWN** (small delta tolerance ~4px).
- **Collapsed state:** shown when the user scrolls **UP** and `scrollY` is past a small threshold (~80px).
- Use smooth, spring-like morphing (Motion `layout` / animated width). No jumps, no flicker, no layout shift of page content (header is fixed).
- Header is present on all pages with the same behaviour.

### 6.4 Mobile
- Expanded: logo (left) + text "Available for work" same as desktop collapsed + hamburger (right). Hamburger opens a header-width glass menu sheet with the same four links(each in new line) + Contact button; closes on link tap, on outside tap, and on Esc.
- Collapsed (scrolling up): same as desktop collapsed — logo + "Available for work" (hamburger hidden). Menu is reachable again the moment the user scrolls dwon.
- Touch targets ≥ 44px.

---

## 7. HOME PAGE SECTIONS

### 7.1 HERO (`#home`)

**Layout:** full-viewport (`min-height: 100svh`). Desktop: two columns — text left, 3D shape right. Mobile: centred text, shape smaller and placed above or behind the text without hurting legibility. The header floats over the hero (add top padding).

#### 7.1.1 Hero background (animated mesh — built by code, NOT an image)
The source material showed several still frames of a flowing animation: soft, silky, blurred **midnight-blue ribbons/waves** drifting over a near-black base. **Do not use frames as images. Build the animation.**

Specification:
- Base: deep charcoal/black (`#00050f`-family).
- A **smooth animated mesh gradient / fluid look**: slow-moving, ambient fluid orbs / gradient blobs in **deep midnight blue and subtle charcoal-grey** that **drift organically** across the viewport, forming soft flowing ribbon-like shapes. Colours are muted (approx. midnight blue `#1a2a5e`→`#3a4f95` highlights at low intensity). Orange must **not** appear in the background.
- A **subtle, fine-grained digital noise texture** over the whole hero canvas for a tactile, premium feel (generate it with CSS/inline SVG `feTurbulence` or in the shader — no image file needed).
- **Seamless infinite loop**, very slow motion, **zero sharp transitions**, cinematic soft lighting.
- The hero's bottom edge fades smoothly into the plain `#00050f` of the next section (gradient mask) — no visible seam.
- **Recommended implementation:** a lightweight WebGL fragment shader on a `<canvas>` (domain-warped fbm noise / metaball-style blobs), rendered at reduced resolution (the effect is blurry, so half-res is fine; cap DPR ≈ 1.5), animated with a time uniform. **Fallback** (no WebGL, low-power device, `prefers-reduced-motion`, or shader error): layered CSS radial-gradient blobs with heavy blur and very slow keyframe drift, or a static gradient for reduced motion.
- Pause rendering when the hero is off-screen (IntersectionObserver) and when the tab is hidden.
- Sits behind hero content (`z-index` below), `pointer-events: none`.
- **This background exists ONLY in the hero.**

#### 7.1.2 Hero heading with typewriter rotation
- One complete heading sentence stays **static**, **except its last word**, which is a **typewriter / text-rotator** cycling through several words that all make sense at the end of the sentence.
- **Suggested H1 (⚠ editable in `content/hero.ts`):**
  **"We craft digital experiences that [ scale | convert | perform | sell | grow ]"**
  (rotating word in a primary→light-blue gradient, with a blinking caret).
- Typing behaviour: type ≈ 80ms/char → hold ≈ 1800ms → delete ≈ 40ms/char → short pause → next word; loops forever.
- Reserve space for the rotating word so the layout never jumps (`min-width`/`min-height`).
- Accessibility: expose one stable, readable heading to screen readers (e.g. `sr-only` full sentence with the first word), mark the animated span `aria-hidden`. With reduced motion: show the first word statically or crossfade slowly without typing.
- The heading is the page's single `<h1>`.

#### 7.1.3 Sub text
A short supporting paragraph under the heading (suggested, editable):
*"S Solutions builds digital solutions that deliver performance — built for speed, conversions and long-term growth."*

#### 7.1.4 Two buttons (both with icons)
1. **"Book a 15 min call"** — glass/outline button with a phone or calendar icon.
   - ⚠ **DECISION:**  (default) open WhatsApp (`https://wa.me/923288131351?text=` + URL-encoded "Hi S Solutions, I'd like to book a 15-minute call.") in a new tab. Do not invent a calendar link.
2. **"Start Your Project"** — **highlighted with the PRIMARY colour background** (solid/gradient blue, glow on hover), with an arrow icon → **`/contact`**.

#### 7.1.5 3D development-related shape
Next to the heading (desktop) there must be a **3D shape related to development**.
- **Concept (⚠ DECISION, agent may choose an equally suitable dev-related concept):** a floating, slowly rotating **glass/glossy `</>` code-bracket** object (two chevrons and a slash) in brand blue with a subtle orange rim-light, built **procedurally** (e.g. `THREE.Shape` → `ExtrudeGeometry`, `MeshPhysicalMaterial`) — **no external model files and no external HDRI downloads** (use plain lights or drei `Lightformer`).
- Gentle idle float/rotate; subtle pointer parallax on desktop.
- **Lazy-load** it after first paint (dynamic import, `ssr: false`), inside a fixed-size container to avoid layout shift.
- **Fallback:** on mobile/low-power devices, reduced motion, or WebGL failure, render a static/very lightly animated SVG or CSS version of the same shape.
- Must not hurt performance scores noticeably; cap DPR; pause when off-screen.

---

### 7.2 ABOUT (`#about`) — minimal

⚠ **DECISION:** The requirements define the `#about` anchor but provide no About content. Build a **compact, tasteful About section** so the anchor works. Copy is written by you, must be honest (no numbers, no client claims), and is editable in `content/about.ts`.
- Eyebrow tag: `ABOUT`
- Heading (suggested): "A digital agency built for growth"
- One short paragraph: S Solutions is a digital agency based in Lahore, Pakistan, combining web development, Shopify e-commerce, app development and performance marketing to help businesses in Pakistan and worldwide launch, sell and scale online.
- Optionally three short values (e.g. Performance-first · Clean, scalable code · Growth-minded) as small glass cards.
- Plain `#00050f` background. Keep it short and elegant.

---

### 7.3 WHAT YOU GET (`#services`) — horizontal accordion panels

**Reference (described):** a dark, editorial section. Top-left a small bracketed tag "SERVICES"; a big uppercase title **"WHAT YOU GET"**; top-right a small muted paragraph. Below, a row of **4 tall panels** with thin hairline borders and small corner-bracket details. Collapsed panels are narrow vertical strips showing a small index (`/001/`) at top and the title **rotated 90°** running vertically. The expanded panel is wide: index, uppercase title, short subtext, a **"WHAT WE OFFER"** label with **outlined bracket-corner chips**, and a large **image/visual** area. Bottom bar: **"NOT SURE WHICH SERVICE FITS? LET'S TALK."** on the left and a **"Get in touch ↗"** button on the right.

**Requirements:**
- Section header: tag `SERVICES`, title `WHAT YOU GET`, right-hand text (suggested): *"A focused set of design and development services, delivered to a brief, a timeline and a price, built for speed, consistency and lasting quality."*
- **Exactly 4 panels/columns**, with these contents (keep the wording; uppercase styling for headings/chips):

**Column 01 — WEB DEVELOPMENT**
Subtext: *Custom, high-performance websites built with clean code and tailored to scale your business.*
What We Offer: `FULL-STACK DEV` · `FRONTEND BUILD` · `CUSTOM CODE` · `SPEED OPTIMIZATION`

**Column 02 — SHOPIFY E-COMMERCE**
Subtext: *High-converting online stores built to maximize sales, streamline checkout, and scale revenue.*
What We Offer: `STORE SETUP` · `THEME CUSTOMIZATION` · `APP INTEGRATION` · `PRODUCT LISTINGS`

**Column 03 — PERFORMANCE MARKETING**
Subtext: *Data-driven advertising campaigns engineered to capture attention and lower acquisition costs.*
What We Offer: `META ADS (FB & IG)` · `CAMPAIGN STRATEGY` · `RETARGETING FUNNELS` · `ROAS OPTIMIZATION`

**Column 04 — APP DEVELOPMENT** *(the owner asked the AI to write this one — ⚠ editable)*
Subtext: *Fast, intuitive mobile apps for Android and iOS, designed and engineered to keep users engaged.*
What We Offer: `ANDROID/IOS APPS` · `CROSS-PLATFORM APPS` · `APP UI/UX` · `Google AdSense`

- **Interaction (desktop): panels open on hover and collapse on hover-out.** Hovering a collapsed panel expands it (flex-grow / width animation, smooth, ~500ms) and collapses the previously open one. Content inside fades/slides in after the width animation begins.
- ⚠ **DECISION — resting state:** when the pointer leaves the whole group, panels collapse and the group returns to its default state with **panel 01 open** (so the section never looks empty). Make the default index a prop.
- **Visual area in the open panel:** a generated visual per service (CSS/SVG art in brand colours — e.g. a browser window with code lines, a storefront card, a phone mockup, an analytics chart). Do NOT use any external reference image. Structure the component so a real image can replace each visual later via the asset manifest.
- **Keyboard/focus:** panels are focusable; focus opens a panel; Enter/Space toggles.
- **Mobile/tablet (no hover):** switch to a **vertical accordion** — tap a header to expand, one open at a time, smooth height animation; index + title shown horizontally.
- **Bottom bar:** "NOT SURE WHICH SERVICE FITS? LET'S TALK." + **"Get in touch ↗"** button → `/contact`.

---

### 7.4 A COLLABORATIVE APPROACH (`#process`) — sticky scroll-driven process timeline

**Reference (described):** a full-width section . a large title **"A collaborative approach"**. Beneath it, a large **semicircle arc** (top half of a big circle). A **"STEP" label above a large highlighted rounded-square number badge** (orange in the reference, e.g. `02`) sits at the top centre of the arc. Neighbouring steps appear as **small rotated squares** (diamonds) on the arc to the left and right (e.g. `01` and `03`). In the centre of the arc: the step **title**, a two-line **description**, and a row of **three tags** separated by dots (e.g. `UI DESIGN • UX DESIGN • VISUAL SYSTEM`). At the bottom centre, a **"Start your project"** button (orange in the reference).

> The reference was on a light background; **this site is dark** — adapt it (see below).

**Behaviour (Sticky Scroll-Driven Process Timeline):**
- Full-width interactive section with a **pinned layout**: the outer container is tall (≈ `steps × 100vh`), the inner viewport is `position: sticky; top: 0; height: 100svh`. The viewport stays locked while the user scrolls through the section.
- As the user scrolls down, the interface moves through sequential phases. The **arc rotates** so the active step's marker is at the top centre; the active marker enlarges into the highlighted **step-number badge** (secondary/orange); neighbours shrink into small diamonds along the arc.
- Title, description and tags **smoothly swap/morph** (crossfade + slight slide) without any page refresh.
- A **subtle progress tracker** shows progress vs total (e.g. `02 / 05` + a thin progress bar).
- Scrolling back up reverses it. Drive everything from scroll progress (`useScroll` + `useTransform`), no scroll-jacking.
- **"Start your project"** button at the bottom → `/contact` (secondary/orange solid).

**Steps (5 — ⚠ DECISION, editable in `content/process.ts`).** The two steps below come from the reference (Design = 02, Implementation = 04); 01, 03, 05 are written by you to complete the sequence Brief → Design → Build → Implementation → Launch:

| # | Title | Description | Tags |
|---|---|---|---|
| 01 | Discovery | We learn your business, goals and audience to shape a clear brief and plan. | BRIEF • RESEARCH • STRATEGY |
| 02 | Design | We craft intuitive interfaces and cohesive visuals that elevate the user experience. | UI DESIGN • UX DESIGN • VISUAL SYSTEM |
| 03 | Development | We build fast, clean, scalable solutions with modern, well-tested code. | FRONTEND • BACKEND • QA |
| 04 | Implementation | We integrate solutions smoothly into workflows to ensure efficiency and adoption. | SETUP • CONFIGURATION • AUTOMATION |
| 05 | Launch & Growth | We go live, measure results and keep optimizing for performance and growth. | DEPLOYMENT • ANALYTICS • SUPPORT |

**Dark-theme adaptation:** section background is plain `#00050f`; the arc is drawn with a thin translucent border and a very subtle glass fill; orange badge stays orange; text white/muted.

**Responsive:** the arc scales with viewport width; on small screens reduce radius, badge size and type; keep it pinned. If viewport height is very small, or with `prefers-reduced-motion`, fall back to a **non-pinned vertical list of the 5 steps** (each revealed normally).

---

### 7.5 INFINITE HORIZONTAL LOGO MARQUEE (`#brands`)

- A continuous, seamless horizontal ticker of **brand logos with their names**, moving **right → left** in an endless loop at a **constant velocity without interruption** (do **not** pause on hover). Purpose: social proof / industry authority.
- **The owner will upload the real brand logo images later.** For now build it with **generic placeholder logos + placeholder names** (e.g. "Brand 01 … Brand 08"; simple generated monogram/geometric marks). ⚠ Placeholders must be obviously generic — u can use the real company logos but not use the famous one.
- Data-driven: `content/marquees.ts` → `brandsMarquee: { name, logoSrc? }[]`. If `logoSrc` is set, render the image; otherwise the generated placeholder mark. Adding a real logo = adding one file path in the assets manifest / data (Section 12).
- Item layout: logo image + name text side by side, comfortable gap; muted white by default (optionally full-colour/brighter on hover — but the scroll itself must not stop).
- Implementation: duplicate the track (`aria-hidden` on duplicate) and animate `translateX(0 → -50%)` linearly, infinite; duration derived from content width for a steady pace. Left/right edges fade to the background via `mask-image` gradient (see 7.6).
- Reduced motion: static, horizontally wrapped/scrollable list.

---

### 7.6 DESIGN TOOLKIT (`#toolkit`) — 4 auto-scrolling rows

**Reference (described):** a dark section. Heading **"Design Toolkit"** (large **serif** type) on the left; on the right a small muted paragraph (suggested, adapted to "our"): *"Our go-to tools for research, wireframing, prototyping, handoff, and everything in between."* Below, **four horizontal rows** of tool "cells" separated by thin hairline dividers (table-like). Each cell: a small **rounded icon tile**, the **tool name in bold white**, then a dot and a **small muted category label**. Cells are cut off at the sides by dark fades.

**Requirements:**
- Recreate this section closely, with **the same tools**, but in the **S Solutions colour theme** (`#00050f` base, brand blue/orange touches on hover/glow).
- **Four rows, each auto-scrolling, alternating direction:**
  - Row 1: **right → left**
  - Row 2: **left → right**
  - Row 3: **right → left**
  - Row 4: **left → right**
- Constant, smooth speed within each row; rows may have slightly different durations for an organic feel. Seamless infinite loop (duplicated tracks).
- **Left and right edges:** a soft **blur/black-gradient fade** (`mask-image` linear-gradient or overlay gradient) for smoothness.
- **Tools (name · category), 16 items — distribute 4 per row, repeated within each row so the track is longer than the viewport:**

| Row | Items |
|---|---|
| 1 | Figma · UI Design — Framer · Web Design — Spline · 3D Design — Notion · Docs & PM |
| 2 | Maze · UX Research — Webflow · No-code Dev — Hotjar · User Analytics — Miro · Collaboration |
| 3 | Lottie · Animation — Adobe XD · UI Design — VS Code · Code Editor — WordPress · CMS & Web |
| 4 | Clarity · Behaviour Analytics — Slack · Team Comms — ChatGPT · AI Assistant — Dovetail · Research Mgmt |

- ⚠ Note: these are design/UX tools while S Solutions is dev/marketing-focused; the owner explicitly asked for **the same tools**, so keep them. Tools are data in `content/toolkit.ts` so they can be edited later.
- **Icons:** obtain brand icons via `react-icons/si` or the Simple Icons CDN — **verify each exists**; for any missing brand, render a generated monogram tile in matching style. Do not use screenshots. List missing ones in the final report.
- Reduced motion: rows become static and horizontally scrollable.
- Mobile: same 4 rows, smaller cells, faster-to-read spacing.

---

### 7.7 WHAT TECHNOLOGIES DO WE USE? (`#technologies`) — flip cards

**Reference (described):** centred title **"What technologies do we use?"** where the first part is muted/faded and the rest is bright white (gradient text). Below, a **grid of rounded dark cards** with a thin border. Each card: **logo (top-left)**, **bold name**, **short description**.



**6 cards :** **Shopify, Android, React, eBay, AWS, Marketing.** Each card: **logo/icon first → name → short description**, with a **flip effect**.

**Card copy (⚠ written by you, editable in `content/technologies.ts`):**

| Card | Front description | Back text |
|---|---|---|
| Shopify | Launch and scale online stores on a platform built for conversions, checkout and growth. | Store setup, theme customization, app integration and product listings — handled end to end. |
| Android | Build powerful, flexible mobile apps that reach billions of users worldwide. | Modern Android apps with smooth performance and clean, maintainable architecture. |
| React | Fast, interactive interfaces and scalable web apps with a component-driven approach. | Custom frontends and full-stack builds using React and its ecosystem. |
| eBay | Reach a global marketplace audience with well-optimized listings and store management. | Marketplace store setup, listing optimization and catalogue management. |
| AWS | Reliable, scalable cloud infrastructure and hosting for demanding applications. | Deployment, hosting and infrastructure that grow with your traffic. |
| Marketing | Data-driven campaigns that attract the right customers and grow revenue. | Meta Ads, campaign strategy, retargeting funnels and ROAS optimization. |

**Flip behaviour:** on **hover** the card **flips (3D rotateY 180°)** revealing a **back side** with a little text. Use `perspective`, `transform-style: preserve-3d`, `backface-visibility: hidden`, ~600ms smooth easing. On **touch devices** (no hover): **tap to flip / tap to flip back**. Also flips on keyboard focus (`focus-visible`) for accessibility.

**Border animation / glow (⚠ your choice):** a slow **rotating conic-gradient border** (primary blue → orange accent, low intensity) or a soft gradient glow that intensifies on hover. Use `@property --angle` with a graceful fallback. Subtle — not flashy.

**Icons:** brand icons for Shopify, Android, React, eBay, AWS via icon library (verify exports); "Marketing" uses a lucide icon (e.g. megaphone / trending-up) in a brand-tinted tile.

**Grid:** **laptop/desktop: 3 columns × 2 rows. Mobile: 2 columns × 3 rows.** (Tablet: choose 3×2 or 2×3 by width.)

---

### 7.8 TRUSTED BY — LOGO MARQUEE (`#trusted-by`)

**Reference (described):** a thin black strip with a small centred caption **"Trusted by ambitious teams worldwide"** and, below it, a single row of brand logos/wordmarks scrolling, with dark fades at both edges.

- Brand logos **and names**, **auto-scrolling right → left**, smooth and continuous, with **soft dark gradient fades at both sides**.
- Reuse the `Marquee` component. Separate data array `trustedBy` in `content/marquees.ts` (same `{name, logoSrc?}` shape), larger logo-forward styling than 7.5, caption above.
- Ships with **generic placeholder logos** (clearly placeholder). The owner will swap in real logos.
- ⚠ **LAUNCH BLOCKER (add to final report):** the caption "Trusted by…" implies real clients. Before going live, either replace placeholders with genuine logos the agency has the right to show, or change the caption (`trustedBy.caption` in content) to something neutral. Do not ship placeholders under this caption.
- No pause on hover. Reduced motion → static.

---

### 7.9 SERVICES — STACKED CARD SCROLL (`id="services-detail"`)

**Reference (described):** a vertical stack of large rounded cards, each in a slightly different shades of primary colour , layered like a deck. Each card sits **on top of the previous one but the previous card's top strip remains visible** (only a slice peeks out above it). Each card has a small icon (a diamond/sparkle) and, when fully visible, a heading and body text. The last card is fully visible at the bottom.

**Behaviour:** as the user scrolls down the page, **each new card slides up and lands on top of the previous card**, leaving a **slice of the previous card visible** above it. (When scrolling back up, the reverse happens.)

**Implementation guidance:** the classic sticky-stack technique — each card `position: sticky` with an increasing `top` offset (e.g. `top: calc(var(--nav-offset) + index × 56–72px)`), inside a tall container so each card gets scroll room; optional subtle scale-down/dim on cards that have been covered (via `useScroll`). Native scroll only.

**Cards — ⚠ 4 cards.** (The source text says "3 Services" but lists **four**; the list is the reliable part, so build **4**, in this order.) Each card contains: **service-related visual**, **heading**, **text**, **tags**.

| # | Heading | Text | Tags |
|---|---|---|---|
| 1 | Shopify E-Commerce | High-converting online stores built to maximize sales, streamline checkout, and scale revenue. | Store Setup · Theme Customization · App Integration · Product Listings |
| 2 | Web Development | Custom, high-performance websites built with clean code and tailored to scale your business. | Full-Stack Dev · Frontend Build · Custom Code · Speed Optimization |
| 3 | App Development | Fast, intuitive mobile apps for Android and iOS, designed and engineered to keep users engaged. | Android Apps · iOS Apps · Cross-Platform Apps · App UI/UX · Google AdSense · Payment Gateway Integration |
| 4 | Performance Marketing | Data-driven advertising campaigns engineered to capture attention and lower acquisition costs. | Meta Ads (FB & IG) · Campaign Strategy · Retargeting Funnels · ROAS Optimization |

**Card styling (as i say use different but clos shades of primary color for BG of Card):** rounded (~2rem) cards, each with a distinct **deep brand-toned surface**  and a thin lighter border, so the stack reads clearly as separate layers on `#00050f`. A small diamond/sparkle icon + heading form the "peek strip" that remains visible.

**Visuals:** generated with code (CSS/SVG in brand colours): e.g. storefront + product cards (Shopify), browser window with code (Web), phone mockups (App), rising analytics chart/funnel (Marketing). Structure so a real image can be dropped in later via the asset manifest.

**Layout:** desktop — text left, visual right; mobile — visual above text, smaller peek offsets. Works with reduced motion (cards simply stack statically without scale effects).

---

### 7.10 PRICING (`#pricing`) — Custom Projects

There is no fixed pricing. Every project is quoted individually, so this section presents **Custom Projects** instead of price plans.

- Eyebrow tag: `PRICING`
- Heading: **"Custom Projects"**
- Sub text (editable): *"Every business is different, so we don't work with fixed price packages. Tell us about your project and we'll put together a tailored plan and quote that fits your goals and budget."*
- Below the text, a short list (glass cards or check-list style, 4 items) explaining what a custom quote is based on:
  1. **Project scope** — what you need built or run (website, Shopify store, app, ad campaigns)
  2. **Features & complexity** — custom functionality, integrations, number of pages/screens
  3. **Timeline** — how fast you need it live
  4. **Ongoing needs** — maintenance, support or continued campaign management
- At the bottom, a **"Contact"** button (primary colour, arrow icon) → **`/contact`**.
- No invented prices, plans, discounts, or delivery/response-time promises.
- Layout: centred, compact, plain `#00050f` background, subtle glass surfaces. Keep it simple and elegant.
- All text lives in `content/pricing.ts` (heading, sub text, list items, button label) so it can be edited or replaced with real plans later.


---

### 7.11 PROJECTS (`#projects`) — flip cards

- The owner said: put **randomly some projects** here. Because the agency does not want to depend on real client work.
- **Cards:** grid **3 columns × 2 rows on laptop, 2 columns × 3 rows on mobile** (6 cards on Home).
- **Front of card:** project **image** + **project name**.
- **Flip effect on hover:** the card flips (same `FlipCard` as 7.7) and the **back side** shows a **short text about the project**. Touch: tap to flip. Focus flips too.
- **Content (⚠ written by you, in `content/projects.ts`):** create **6** concept projects with **fictional, neutral names that do not resemble well-known real brands**, covering the services, e.g.:
  1. Concept Shopify store — fashion
  2. Concept Shopify store — home / beauty
  3. Concept web app — SaaS dashboard
  4. Concept corporate / agency website
  5. Concept mobile app — fitness or food delivery
  6. Concept Meta Ads campaign & funnel (demo case study)
  Back text: 1–2 sentences on what the concept demonstrates + small tech/service tags.
- **Images:** generate polished, on-brand thumbnails with code (CSS/SVG device mockups, gradients). If you use remote stock images, each URL must be **verified to load** (HTTP 200) and license-friendly, with `next/image` `remotePatterns` configured; otherwise stick to generated art. Every thumbnail goes through the asset manifest so real screenshots can replace them later.
- Home shows all 6 with a small "View all projects" link/button → `/projects`.

---

### 7.12 CONTACT CTA BANNER (`#contact-cta`)

**Reference (described):** a wide, rounded, dark-glass card centred on the page. Left: bold heading **"Want to grow your business? Let's Talk"** and below it a small paragraph. Right: a button **"Contact US →"**. The card has subtle diagonal/curved shapes in the background and hairline gradient lines along its top and bottom edges.

**Requirements:**
- Same structure, **S Solutions colours/design** (glass card on `#00050f`, subtle diagonal shapes, gradient hairlines). The button uses the **primary** colour (the reference's teal is NOT used).
- Copy: Heading **"Want to grow your business? Let's Talk"**. Paragraph: *"Our mission is to empower businesses to thrive in the digital age. We believe in the transformative power of technology & creativity."*
- Button: **"Contact US"** with arrow icon → `/contact`.
- Appears at the bottom of Home (above the footer) and at the bottom of `/projects`.

---

### 7.13 FOOTER — see Section 10.

---

## 8. PROJECTS PAGE (`/projects`)

The source defines only the Projects *section*; the page reuses it. (⚠ DECISION — kept minimal.)
- Page header: eyebrow `PROJECTS`, H1 "Our Projects", sub text: *"Concept projects and demos that show what we can design, build and grow."*
- A visible, honest note: *"These are concept projects created to demonstrate our capabilities — not work for real clients."*
- Same `FlipCard` grid (3×2 desktop / 2×3 mobile pattern — grid can grow to more rows if more projects are added) rendering **all** entries from `content/projects.ts`.
- Bottom: the Contact CTA banner (7.12), then the footer.
- Do not add filters or extra features that were not requested.

---

## 9. CONTACT PAGE (`/contact`)

The source only says "Contact page" (and that "Start Your Project" points here), so this is specified generically. (⚠ DECISION.) Must be fully functional.

### 9.1 Layout
- Header (global). Page hero: eyebrow `CONTACT`, H1 "Let's build something great together" (editable), short line inviting the visitor to share their project.
- Two columns on desktop (stacked on mobile): **left = contact details**, **right = contact form**.

### 9.2 Contact details (left)
Three clear, clickable glass cards with icons:
- **Email:** `mibusiness641@gmail.com` → `mailto:`
- **WhatsApp / Phone:** `0328-8131351` → `https://wa.me/923288131351` (opens WhatsApp) — plus a "Chat on WhatsApp" button
- **Location:** `Lahore, Pakistan` (text only, no map embed)
Do not add fake office hours, response-time promises, or extra addresses.

### 9.3 Contact form (right)
Fields:
- Full name *(required)*
- Email *(required, validated)*
- WhatsApp / phone *(optional)*
- Service interested in *(select: Web Development, Shopify E-Commerce, App Development, Digital Marketing / Performance Marketing, Other)*
- Message / project details *(required, min length)*
- Hidden **honeypot** field for spam.
States: idle → submitting (disabled button + spinner) → success (clear confirmation message, form reset) → error (friendly message with the direct email/WhatsApp as fallback). Inline field validation, accessible labels and `aria-live` status messages. Client + server validation with zod.
The query string `?service=` (optional) may preselect the service.

### 9.4 Form backend
- Next.js Route Handler `POST /api/contact`: validate (zod), reject honeypot hits silently, simple best-effort rate limiting, then send an email to `CONTACT_TO_EMAIL` (default: `mibusiness641@gmail.com`) through the chosen provider (Resend **or** SMTP via Nodemailer). Reply-To = visitor's email.
- **All secrets via environment variables**, never in code; ship a `.env.example` (e.g. `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `RESEND_API_KEY` *or* SMTP host/user/pass, `NEXT_PUBLIC_SITE_URL`).
- If the email service isn't configured (env missing), the API returns a clear error and the UI shows the fallback ("You can also email us at … or message us on WhatsApp") — the site must never silently swallow a lead.
- Document in the README exactly what the owner must do to activate email delivery.

---

## 10. FOOTER (GLOBAL)

**Reference (described):** dark footer, three-part layout — **left:** brand logo + name, short tagline, "Social Media" label with four round social icons (Facebook, Instagram  LinkedIn, TikTok); **middle:** "Company" column of links; **right:** "Contact Us" column with icon + text rows (email, address). Requirement: **same-to-same layout**, S Solutions content.

### 10.1 Left — brand
- S Solutions logo (asset manifest) + short tagline (⚠ written by you, editable): e.g. *"Websites, stores, apps and marketing that help businesses grow."*
- **Social Media** label + round icon buttons: Facebook, Instagram  LinkedIn, TikTok. **Links will be added later** → URLs come from `siteConfig.social` (empty for now). Icons render now; `href` falls back to `#` until a URL is set (documented placeholder). When a URL exists, open in new tab with `rel="noopener noreferrer"` and proper `aria-label`.

### 10.2 Middle — "Company" links
About Us (`/#about`) · Service (`/#services`) · Work (`/projects`) · Contact Us (`/contact`) · Terms & Conditions (`/terms`) · Privacy & Policy (`/privacy`)
⚠ The reference also listed a "404" link — omitted because it is a reference artifact, not a real destination. Config-driven so it's easy to change.

### 10.3 Right — "Contact Us"
- ✉ Email: `mibusiness641@gmail.com` (`mailto:`)
- WhatsApp: `+92 (328) 3131351` (`https://wa.me/923288131351`) — **the WhatsApp number must be shown in this Contact Us menu**
- 📍 Address: **only "Lahore, Pakistan"** (nothing else)

### 10.4 Footer bottom
Centred, separated by a hairline:
- `© [current year] | All rights reserved` — year computed dynamically.
- `Powered By` **`S Solutions`** — "S Solutions" is a real `<a>` tag, **coloured with the PRIMARY colour**, hover underline/glow. Its URL comes from `siteConfig.portfolioUrl` — **not provided yet; do NOT invent one**. Until set: `href="#"` (documented placeholder). When set: opens in a new tab with `rel="noopener noreferrer"`.

### 10.5 Responsive
Desktop: three columns. Tablet: 2 columns. Mobile: single column, comfortable spacing; bottom row stacks.

---

## 11. GLOBAL BEHAVIOURS

### 11.1 Custom cursor — inverting circle
- A **circle follows the cursor and inverts the colours underneath it.**
- Implementation: a fixed, `pointer-events: none`, high z-index circle (~36–44px) with white background and **`mix-blend-mode: difference`**. Movement is smoothed (lerp/spring), not rigid.
- The circle **grows** over interactive elements (links, buttons, cards, panels) and shrinks slightly on press.
- **Pitfall:** `mix-blend-mode` breaks if an ancestor creates an isolating stacking context — mount the cursor at the root (`layout.tsx`), outside any element with `isolation`, `transform`, `filter`, or `opacity < 1`.
- Show **only on devices with a fine pointer** (`@media (hover: hover) and (pointer: fine)`); never render on touch devices.
- Hide the native arrow cursor on fine pointers while the circle is active, but **restore the native text cursor over text inputs, textareas and selects**, and keep the circle small there.
- With `prefers-reduced-motion`: no smoothing lag (follow directly), no scale animations.

### 11.2 Scroll reveals & micro-interactions
Gentle fade-and-rise reveals for section content (once). Buttons: subtle lift/glow on hover, clear `:focus-visible` rings. Cards: soft border glow on hover. Nothing gratuitous.

### 11.3 Responsive breakpoints
Design and verify at **360, 390, 768, 1024, 1280, 1536** widths. Mobile-first Tailwind. No horizontal scroll on the page. Specific grids:
- Technologies grid and Projects grid: **3×2 on desktop, 2×3 on mobile**.
- What You Get: horizontal accordion on desktop → vertical accordion on touch/mobile.
- Process: pinned arc on all sizes (scaled), list fallback on tiny heights/reduced motion.
- Marquees/toolkit: same behaviour, smaller sizes.

---

## 12. ASSETS STRATEGY



### 12.2 Real assets the OWNER will provide later (manual replacement)
1. **S Solutions logo** — full lockup (S icon + "S SOLUTIONS" wordmark). The header uses the **icon-only mark**; the footer uses the logo. If only the full lockup is provided, crop the icon area via CSS (`object-fit`/`object-position`) as a temporary measure and ask the owner for an icon-only file. Also used for favicon/app icon.
2. **Real brand logo images** for the two marquees (7.5 and 7.8).
3. **Real project screenshots** (optional, later) to replace generated concept thumbnails.
4. Social media URLs, portfolio URL, Terms/Privacy content(Now Generated by You).

### 12.3 Generated by code (no file needed)
Hero mesh-gradient background + noise texture; hero 3D shape (and its fallback); animated glow/gradient borders; service-panel visuals; stacked-card visuals; project thumbnails; placeholder brand marks; arc/process graphics; favicon placeholder (until the real logo arrives).

### 12.4 Sourced from libraries/CDN
Brand/tool icons (`react-icons/si` or Simple Icons CDN — verified), lucide UI icons, fonts (`next/font`). Optional stock photos only if each URL is verified to load and is license-friendly.

### 12.5 The single Asset Manifest (mandatory)
Create **one** file (e.g. `src/config/assets.ts`) that maps every replaceable asset to a path or `null`. Components read from it and render the generated placeholder when the value is `null`/missing. You define the paths/names deliberately in that file (e.g. under `public/`) — do not scatter magic strings through components. In the final report (Section 21), output an **"Asset Replacement Guide"** table: *asset · where it appears · exact file path to replace · recommended format/dimensions*.

---

## 13. EDITABLE CONTENT FILES

All copy and configuration lives outside components so the owner can edit easily:

```
src/config/site.ts        // brand name, email, whatsapp, location, social{} (empty), portfolioUrl (empty), bookingUrl (empty), siteUrl (env)
src/config/assets.ts      // asset manifest (Section 12.5)
src/config/nav.ts         // header + footer links
src/content/hero.ts       // headline static part, rotating words, sub text, button labels
src/content/about.ts
src/content/services.ts   // What You Get panels (4) + stacked cards (4)
src/content/process.ts    // 5 steps
src/content/marquees.ts   // brandsMarquee[], trustedBy{caption, items[]}
src/content/toolkit.ts    // 4 rows of tools
src/content/technologies.ts
src/content/projects.ts
src/content/pricing.ts
src/content/footer.ts     // tagline, link groups
```
Each file is typed (TypeScript interfaces) and commented with what to edit.

---

## 14. SUGGESTED FOLDER STRUCTURE

```
src/
  app/
    layout.tsx  page.tsx  globals.css
    projects/page.tsx
    contact/page.tsx
    terms/page.tsx  privacy/page.tsx  not-found.tsx
    api/contact/route.ts
    sitemap.ts  robots.ts  opengraph-image.tsx (generated)
  components/
    layout/    Header.tsx  Footer.tsx  CustomCursor.tsx  MobileMenu.tsx
    ui/        Button.tsx  Tag.tsx  SectionHeading.tsx  GlassCard.tsx  GlowBorder.tsx
               FlipCard.tsx  Marquee.tsx  Reveal.tsx  Container.tsx
    home/      Hero/ (HeroBackground, HeroHeading, TypewriterWord, HeroShape3D, HeroShapeFallback)
               About.tsx  WhatYouGet.tsx  Process/  BrandsMarquee.tsx  DesignToolkit.tsx
               Technologies.tsx  TrustedBy.tsx  ServicesStack.tsx  Pricing.tsx
               ProjectsGrid.tsx  ContactCta.tsx
    contact/   ContactForm.tsx  ContactInfo.tsx
  content/     (Section 13)
  config/      (Section 13)
  hooks/       useScrollDirection.ts  useMediaQuery.ts  useReducedMotion.ts  useInView.ts
  lib/         cn.ts  validators.ts  mailer.ts  rate-limit.ts
public/        (only files the owner supplies + generated icons)
.env.example  README.md
```

---

## 15. SEO

- Per-page `metadata` (title, description, canonical, Open Graph, Twitter card). Title template like `%s | S Solutions`. Suggested home title: *"S Solutions — Web Development, Shopify, App Development & Digital Marketing"* with a matching honest description (Lahore, Pakistan).
- One `<h1>` per page, logical heading order, semantic landmarks (`header`, `main`, `section`, `footer`, `nav`).

- JSON-LD `ProfessionalService` / `Organization`: name, email, telephone, `addressLocality: Lahore`, `addressCountry: PK`, `sameAs` only for social URLs that exist. **No fake ratings/reviews.**
- Generated OG image (text/brand based; replace with logo-based once the logo is added). Favicon/app icons from the logo when available.
- Descriptive `alt` text on all real images; `lang="en"`; `theme-color: #00050f`.

---

## 16. ACCESSIBILITY

- Full keyboard operability: skip-to-content link, visible `:focus-visible` rings, accordion/flip/menu operable with keyboard, Esc closes menu.
- Semantic HTML, ARIA only where needed (`aria-expanded`, `aria-controls`, `aria-live` for form/status, `aria-hidden` on duplicated marquee tracks and decorative visuals).
- **`prefers-reduced-motion`:** disable typewriter typing, hero shader/3D motion (static gradient fallback), marquee/toolkit scrolling (static/scrollable), pinned process (list fallback), cursor smoothing, parallax and large transitions.
- Colour contrast ≥ WCAG AA; don't rely on colour alone.
- Custom cursor never blocks interaction; native text cursor restored in form fields.
- Touch-friendly targets; flip cards usable via tap and focus.
- Form: labels, error messages tied to fields, clear success/failure announcements.

---

## 17. PERFORMANCE

- Targets: Lighthouse Performance ≥ 90 (mobile) where feasible, good Core Web Vitals (LCP, CLS ≈ 0, INP).
- Hero LCP is the headline text, not the canvas. Lazy-load the WebGL background and 3D shape after first paint; keep the shader lightweight and low-res; cap DPR; **pause everything when off-screen or tab hidden**.
- Dynamic-import heavy client code (three/R3F). Keep client components to the necessary leaves; render static content as server components.
- Animate only `transform`/`opacity`; use `will-change` sparingly. Avoid large blur layers stacking (blur is expensive) — limit backdrop-blur to header/menu/select cards.
- `next/image` for real images, reserved dimensions to prevent layout shift, `next/font` with `display: swap`.
- Marquees are pure CSS animations. Ship no unused dependencies. Provide a lighter experience on low-power/mobile devices for the hero effects.

---

## 18. IMPLEMENTATION PRIORITIES

1. **Foundation:** Next.js + TS + Tailwind setup, tokens (Section 4), fonts, `layout.tsx`, content/config files, routing, `Container`/`Button`/`Tag`/`SectionHeading`/`Reveal`.
2. **Global shell:** Header (expanded/collapsed morph, mobile menu), Footer, Custom Cursor.
3. **Home core:** Hero (background fallback first, then shader, typewriter, buttons), About, What You Get, Technologies (FlipCard), Projects (FlipCard), Pricing, Contact CTA.
4. **Signature interactions:** Stacked service cards, Process sticky timeline, Marquee + Design Toolkit + Trusted By, Hero 3D shape.
5. **Pages & backend:** Projects page, Contact page + `/api/contact`, `/terms`, `/privacy`, `not-found`.
6. **Polish & quality:** SEO, accessibility pass, performance pass, responsive QA, reduced-motion QA, README, `.env.example`.
7. **Final report** (Section 21).

If time is tight, never cut: working navigation, header behaviour, contact form, responsive layout, honest content. Cut visual extras last-to-first (3D shape polish before core layout).

---

## 19. TESTING REQUIREMENTS

- `tsc` type-check, ESLint, and `next build` all pass with **zero errors and no console errors/warnings** in the browser.
- **Manual checklist:** every nav link/anchor scrolls correctly (with offset); header collapses on scroll-up and re-expands on scroll-down (desktop + mobile); "Available for work" dot pulses; hero typewriter loops without layout shift; both hero buttons work (`/contact`; WhatsApp); accordion opens on hover, collapses on hover-out, returns to default; mobile accordion by tap; process section pins, rotates, swaps content and shows progress, and reverses on scroll-up; marquees loop seamlessly with correct directions (toolkit rows alternate R→L, L→R, R→L, L→R); flip cards flip on hover / tap / focus; grids are 3×2 desktop and 2×3 mobile; stacked cards overlap correctly with peeking strips; pricing Custom Pricing section; project cards show "Real world Project"; Contact CTA → `/contact`; footer links, email `mailto`, WhatsApp link, copyright year, "Powered By S Solutions" `<a>` in primary colour.
- **Contact form:** validation errors, honeypot, successful send (with real env keys), missing-env fallback message.
- **Responsive:** 360/390/768/1024/1280/1536, portrait & landscape; no horizontal overflow.
- **Cross-browser:** latest Chrome, Safari (iOS + desktop), Firefox, Opera, Edge. Verify `backdrop-filter`, `mix-blend-mode` cursor, and sticky behaviours on Safari.
- **Reduced motion & keyboard-only** walkthroughs. Lighthouse (mobile + desktop) and an axe/accessibility check.

---

## 20. DEPLOYMENT

- out of scope unless the owner adds them later — do not invent.

---

## 21. FINAL REPORT THE AGENT MUST DELIVER

When finished, reply with:
1. **What was built** (one short paragraph) and how to run it.
2. **Asset Replacement Guide** (table): every placeholder/generated asset that should later be replaced by an owner-supplied file — *asset · where it appears · file path · recommended size/format* — including the logo (icon-only + full), marquee logos, project images, favicon.
3. **Owner to-do list:** social URLs, portfolio URL, email-service keys, Terms/Privacy content.
4. **Launch blockers:** replace placeholder logos under the "Trusted by" caption (or change the caption); confirm the project labelling remains.
5. **Decisions taken** (all ⚠ DECISION items and Appendix A resolutions) and anything that could not be done exactly as specified (e.g. missing brand icons that fell back to monograms).
6. Known limitations or follow-up suggestions.
---
**END OF SUPER PROMPT**
