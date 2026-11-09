# AGENTS.md — Development Guidelines & Guardrails for AI Agents

Welcome to the **1Life Accounting** repository. This document defines the engineering standards, content rules, and architectural guardrails that all AI agents and contributors must respect when modifying this project.

Before making significant alterations to design or content, consult [`DESIGN.md`](./DESIGN.md) which serves as the design brief and source of truth for brand positioning.

---

## 1. Core Principles & Philosophy

1. **Lightweight, Native Stack:**
   The site is built with vanilla HTML5, modern CSS3 (Custom Properties), and minimal vanilla JavaScript. Do not introduce heavy frontend frameworks (React, Vue, Tailwind, Bootstrap, Sass) or build pipelines without explicit instruction.
2. **Clarity and Conversion First:**
   When choosing between fancy animations or complex interactive widgets vs. clear typography and low-friction consultation booking, always choose clarity and conversion.
3. **British English:**
   All site copy must use standard British English conventions (e.g., *organise*, *tailored*, *specialises*, *licence*, *VAT*).
4. **No Placeholders or Fabrications:**
   Never invent client testimonials, fabricated reviews, unverified team members, fictitious awards, or fake pricing packages. Use only the verified team members, credentials, and service areas defined in `DESIGN.md`.

---

## 2. Brand & Content Integrity Guardrails

### 2.1 Identity & Positioning
- **Official Name:** Use `1Life Accounting` consistently.
- **Group Relationship:** Always acknowledge the supporting relationship as `Part of The 1Life Group`.
- **Geographic Positioning:** Northern Ireland based (Gilford office) with cloud accounting services delivered remotely across the entire United Kingdom.

### 2.2 Verified Team Members
Only the following verified individuals are permitted on the site unless documented in `DESIGN.md`:
- **Dr Madelene Deacon:** Shareholder & Lead Advisor (PhD(Hc), CIBA, SAIT, Xero Partner)
- **Karla van Rensburg:** Accountant & Financial Manager (AGA, BCom Accounting Sciences - UNISA)
- **Morne Strydom:** Shareholder & Strategic Director (Director & Business Strategist)
- **Heather Strydom:** Workflow Specialist (Process Architecture & Systems)

Do not import data or copy from unrelated property development or other businesses from The 1Life Group.

### 2.3 Pricing Guardrails
- Reference starting rate is **from £150/month** for monthly financial management, qualifying basic requirements.
- Never advertise this as an "all-inclusive" package or invent multi-tier SaaS-style pricing matrices without client confirmation.

### 2.4 The Six Verified Service Categories
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
- Keep all internal navigation links valid. When creating new pages, ensure trailing slashes match directory routing (e.g. `/services/`, `/contact/`).
- Maintain Open Graph, canonical links, and Schema.org structured data on all pages.

### 3.2 CSS & Design Tokens
- Centralize all styling in `css/style.css`.
- Reuse existing design tokens defined on `:root`:
  - `--color-ink`: `#172B32`
  - `--color-text`: `#24363B`
  - `--color-muted`: `#617075`
  - `--color-primary`: `#206B5A`
  - `--color-primary-hover`: `#185244`
  - `--color-soft`: `#EAF3EF`
  - `--color-page`: `#F8FAF8`
  - `--color-border`: `#DEE6E2`
- Do not introduce random hex values in inline styles. Maintain contrast ratios conforming to WCAG 2.2 AA.
- Support `prefers-reduced-motion` for any animations or transitions.

### 3.3 JavaScript & Interactivity
- Place interactive behaviors in `js/main.js`.
- Mobile navigation must support the `Escape` key, toggle `aria-expanded`, and manage focus.
- Form validation must be accessible:
  - Error messages must be linked via `aria-describedby` or role `alert`.
  - Focus must move to the first invalid field upon submission failure.
- Dispatch analytics events using the `trackAnalyticsEvent` helper (`generate_lead`, `book_consultation_click`, `contact_email_click`, `contact_phone_click`). Never include sensitive personal data (names, emails, messages) in event payloads.

---

## 4. Quality & Testing Checklist

Whenever you modify any code or content in this repository:
1. **HTML & Link Validation:** Ensure no broken links or orphaned anchors (`#`). Check that every route in `sitemap.xml` exists.
2. **Responsive Verification:** Test pages across mobile (320px, 375px), tablet (768px), and desktop (1024px, 1280px+). Ensure no horizontal overflow.
3. **Accessibility:** Ensure buttons have accessible text/labels, images have meaningful `alt` attributes, and interactive controls are keyboard navigable.
4. **Git Hygiene:** Keep commits focused, clean, and git-agnostic with clear descriptions.
