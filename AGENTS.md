# AGENTS.md — Development Guidelines & Guardrails for AI Agents

Welcome to the **1Life Accounting** repository. This document defines the engineering standards, content rules, and architectural guardrails that all AI agents and contributors must respect when modifying this project.

Before making alterations to design, layout, or copy, consult [`DESIGN.md`](./DESIGN.md) which serves as the design brief and source of truth for The 1Life Group brand alignment.

---

## 1. Core Principles & Philosophy

1. **Lightweight, Native Stack:**
   The site is built with vanilla HTML5, modern CSS3 (Custom Properties), and minimal vanilla JavaScript. Do not introduce heavy frontend frameworks (React, Vue, Tailwind, Bootstrap, Sass) or build pipelines without explicit instruction.
2. **Brand Consistency with The 1Life Group:**
   1Life Accounting must visibly belong to the same brand family as `https://www.the1lifegroup.com/`. Design priorities:
   - Priority 1: The 1Life Group's actual visual identity (deep teal `#133E44`, olive/lime gradient `#4A6E15` -> `#96C329`, warm cream `#FFFAF5`, Montserrat headings, Inter body, 30px pill buttons).
   - Priority 2: Approved accounting services, verified team members, and substantiated credentials.
   - Priority 3: Modern accessibility (WCAG 2.2 AA) and responsive design.
   - Priority 4: Conversion optimisation and SEO.
3. **Clarity and Conversion First:**
   Avoid generic SaaS cards, excessive pills, floating 3D icons, or heavy drop shadows. Keep layouts spacious, calm, and readable.
4. **British English:**
   All site copy must strictly use standard British English conventions (e.g., *organise*, *tailored*, *specialises*, *licence*, *VAT*).
5. **No Placeholders or Fabrications:**
   Never invent client testimonials, fabricated reviews, unverified team members, fictitious awards, or fake pricing packages. Use only the verified team members, credentials, and service areas defined in `DESIGN.md`.

---

## 2. Brand & Content Integrity Guardrails

### 2.1 Identity & Positioning
- **Official Name:** Use `1Life Accounting` consistently.
- **Group Relationship:** Always acknowledge the supporting relationship as `Part of The 1Life Group`.
- **Geographic Positioning:** Northern Ireland based (Gilford office) with cloud accounting services delivered remotely across the entire United Kingdom.

### 2.2 Verified Team Members & Portraits
Only the following verified individuals are permitted on the site. All four genuine portraits have been sourced and verified from the official Framer parent site (https://www.the1lifegroup.com/1life-accounting) and are stored locally in `assets/images/`:
- **Dr Madelene Deacon:** Shareholder & Lead Advisor (PhD(Hc), CIBA, SAIT, Xero Partner) — Verified portrait (`assets/images/madelene-deacon.png`).
- **Karla van Rensburg:** Accountant & Financial Manager (AGA, BCom Accounting Sciences - UNISA) — Verified portrait (`assets/images/karla-van-rensburg.jpg`, sourced from Framer active profile tab).
- **Morne Strydom:** Shareholder & Strategic Director (Director & Business Strategist) — Verified portrait (`assets/images/morne-strydom.jpg`, sourced from Framer active profile tab).
- **Heather Strydom:** Workflow Specialist (Process Architecture & Systems) — Verified portrait (`assets/images/heather-strydom.jpg`, confirmed website owner asset `P3BefoExln83ZRZWeXC6goZqft4.jpeg`).

**Strict Retention Rule:** Do NOT replace these portraits with text initials or generic avatars. Sourced portraits must be retained across both the Homepage and the About page. Never substitute synthetic AI portraits or generic stock photography for staff.

### 2.3 Contact & Email Enquiries
- All contact email references across all pages, footers, privacy policies, and form submissions must be directed to **`info@1lifeaccounting.com`** (never personal email addresses like `morne@the1lifegroup.com`).

### 2.3 Pricing Guardrails
- Reference starting rate is **from £150/month** for monthly financial management, qualifying basic requirements.
- Clearly state that comprehensive outsourced accounting is tailored to business needs; never advertise £150 as an "all-inclusive" package.

### 2.4 Software Accreditations
- Use **Xero Partner** (verified). Do not display unsupported "Xero Gold Partner" badges.

### 2.5 The Six Verified Service Categories
1. Bookkeeping & Financial Administration
2. Management Accounts
3. VAT & Making Tax Digital (MTD)
4. Payroll Support
5. Annual Accounts & Compliance
6. Business & Financial Support

---

## 3. Engineering & Code Standards

### 3.1 HTML & Semantics
- Use clean semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Ensure logical heading hierarchy (`<h1>` down to `<h6>`) with exactly one `<h1>` per page.
- Keep all internal navigation links relative (e.g., `services/`, `../services/`, `css/style.css`, `../css/style.css`) to ensure compatibility with subdirectories and custom domains.
- Maintain Open Graph, canonical links, and Schema.org structured data on all pages.

### 3.2 CSS & Design Tokens
- Centralize all styling in `css/style.css`.
- Reuse verified design tokens defined on `:root`:
  - `--color-deep-teal`: `#133E44`
  - `--color-green-dark`: `#4A6E15`
  - `--color-green-mid`: `#7A9931`
  - `--color-green-light`: `#96C329`
  - `--color-gold`: `#D49D4C`
  - `--color-cream`: `#FFFAF5`
  - `--color-cream-soft`: `#F4EFEA`
  - `--color-surface-white`: `#FFFFFF`
  - `--color-ink`: `#1A2E33`
  - `--color-muted`: `#53686D`
  - `--color-border`: `#E3DCD3`
- **Button Standards & Aesthetics:**
  - Primary button: `linear-gradient(180deg, #4A6E15 0%, #96C329 100%)`, pill radius `30px`, white text, Montserrat/bold.
  - Spacing: Always ensure generous padding (14px 28px desktop, 12px 24px mobile) and explicit margins or flex gaps (`gap: 1rem`) between adjacent buttons. Buttons must never touch or collapse into each other on desktop or mobile.
- Support `prefers-reduced-motion` for all transitions.

### 3.3 JavaScript & Contact Submissions
- Place interactive behaviors in `js/main.js`.
- Never fake a successful form submission with a simulated timer (`setTimeout`).
- Provide honest, functional submission handling (e.g. `mailto:` direct email or verified backend API).
- Mobile navigation must support the `Escape` key, toggle `aria-expanded`, and manage focus.
- Dispatch analytics events using the `trackAnalyticsEvent` helper (`generate_lead`, `book_consultation_click`, `contact_email_click`, `contact_phone_click`). Never include sensitive personal data in event payloads.

---

## 4. Quality & Testing Checklist

Whenever you modify any code or content in this repository:
1. **HTML & Link Validation:** Ensure relative paths work and routes in `sitemap.xml` exist.
2. **Responsive Verification:** Test pages across mobile (320px, 375px), tablet (768px), and desktop (1024px, 1440px). Ensure buttons have generous spacing, readable typography, and no horizontal overflow.
3. **Accessibility:** Ensure buttons have accessible text/labels, images have meaningful `alt` attributes, and interactive controls are keyboard navigable with visible focus states.
4. **Git Hygiene:** Keep commits focused, clean, and git-agnostic with clear descriptions.
