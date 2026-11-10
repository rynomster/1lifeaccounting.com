# 1Life Accounting

**Website:** [1lifeaccounting.com](https://1lifeaccounting.com)
**Parent Brand:** [The 1Life Group](https://www.the1lifegroup.com)
**Location:** 33A Clare Road, Gilford, BT636AG, Northern Ireland, United Kingdom

---

## Overview

**1Life Accounting** is the independent online home for the accounting and business support division of The 1Life Group. Based in Northern Ireland and serving clients throughout the United Kingdom, 1Life Accounting delivers dependable, outsourced accounting, bookkeeping, and financial management for small and medium-sized enterprises (SMEs).

The platform is designed to provide immediate clarity on four core pillars:
1. **Who we help:** UK business owners and directors looking for reliable, outsourced financial administration and clearer business insight.
2. **What we do:** Bookkeeping, management accounts, VAT & Making Tax Digital (MTD), payroll support, annual statutory compliance, and strategic financial advisory.
3. **Why choose us:** Decades of commercial leadership, hands-on accounting rigor, and modern Xero-enabled paperless workflows.
4. **Next step:** A fast, low-friction enquiry for a free introductory consultation (in-person or remote video).

---

## Architecture & Technology Stack

The site is built with high performance, accessibility, and simplicity in mind:

- **Markup:** Semantic, crawlable HTML5 with Open Graph and Schema.org structured data (`AccountingService` / `Organization`).
- **Styling:** Modular vanilla CSS3 (`/css/style.css`) using CSS Custom Properties (design tokens) for typography, spacing, and colours. No heavy utility frameworks.
- **Interactivity:** Vanilla JavaScript (`/js/main.js`) powering accessible mobile navigation, FAQ accordion toggles, client-side form validation, and Google Analytics 4 (GA4) event tracking.
- **Assets:** Locally hosted and optimised imagery under `/assets/images/` (PNG, JPG, SVG).
- **Fonts:** Manrope (headings) & Inter (body) loaded via Google Fonts with preconnects.

### Directory Structure

```
.
├── DESIGN.md           # Comprehensive design brief, specifications & guidelines
├── AGENTS.md           # Instructions and guardrails for AI coding assistants
├── README.md           # Project documentation and developer reference
├── index.html          # Homepage (Hero, pillars, service preview, team preview, FAQ, CTA)
├── services/
│   └── index.html      # Detailed breakdown of all six core service areas
├── about/
│   └── index.html      # Company background, philosophy, and detailed leadership bios
├── contact/
│   └── index.html      # Consultation booking form, office address, and contact points
├── privacy/
│   └── index.html      # UK GDPR-compliant privacy notice
├── cookies/
│   └── index.html      # Cookie usage and consent disclosure
├── css/
│   └── style.css       # Design tokens, responsive grid system, and component styles
├── js/
│   └── main.js         # Navigation, accordion, form validation, and analytics dispatch
├── assets/
│   └── images/         # Brand logos, favicons, team portraits, badges, and photography
├── favicon.ico         # Root fallback favicon
├── site.webmanifest    # Web application manifest with brand tokens and app metadata
├── robots.txt          # Crawler instructions referencing XML sitemap
└── sitemap.xml         # XML sitemap for search engines
```

---

## Core Services

1. **Bookkeeping & Financial Administration:** Transaction recording, customer debtor management, supplier reconciliations, and payment scheduling.
2. **Management Accounts:** Monthly performance reports, cash flow analysis, and working capital reviews.
3. **VAT & Making Tax Digital (MTD):** Quarterly VAT preparation, reconciliations, and direct digital HMRC submissions.
4. **Payroll Support:** Payslip generation, Real Time Information (RTI) reporting, and workplace pension auto-enrolment.
5. **Annual Accounts & Compliance:** Year-end statutory accounts, balance sheet reviews, and Companies House confirmation statements.
6. **Business & Financial Support:** Diagnostics, workflow mapping, cloud software migrations, and strategic financial planning.

---

## Local Development

No build step or package manager is strictly required. Any static HTTP server can serve the repository root.

### Using Python
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Using Node.js (`npx serve` or `http-server`)
```bash
npx serve .
# or
npx http-server -p 8000
```

---

## Design System & Tokens

Colours, typography, and spacing tokens are declared at `:root` in `css/style.css`:

| Token | Value | Description |
|---|---|---|
| `--color-ink` | `#172B32` | Primary dark tone for headings, footers, dark panels |
| `--color-text` | `#24363B` | Body copy |
| `--color-muted` | `#617075` | Secondary text, captions, metadata |
| `--color-primary` | `#206B5A` | Deep forest green for primary buttons, active links |
| `--color-primary-hover` | `#185244` | Darker green for hover and active button states |
| `--color-soft` | `#EAF3EF` | Soft sage tint for highlighted cards and hero accents |
| `--color-page` | `#F8FAF8` | Off-white subtle background |
| `--color-border` | `#DEE6E2` | Border and divider lines |

### Typography
- **Headings:** Manrope (`font-weight: 600, 700, 800`)
- **Body:** Inter (`font-weight: 400, 500, 600`)

---

## SEO & Accessibility

- **Standards:** Designed to meet **WCAG 2.2 AA** guidelines (proper contrast ratios, keyboard-accessible menus/drawers, visible focus outlines, ARIA attributes).
- **Metadata:** Unique title tags, meta descriptions, Open Graph cards, and canonical URLs on every page.
- **Structured Data:** Embedded JSON-LD schema (`AccountingService`) on the homepage referencing official address, contact details, and parent organization.
- **Performance:** Clean static markup and zero external CSS/JS framework overhead ensures high Core Web Vitals and Lighthouse scores.

---

## Contact & Team

- **Principal Office:** 33A Clare Road, Gilford, BT636AG, Northern Ireland, UK
- **Phone:** `+44 7498 206441`
- **Email:** `morne@the1lifegroup.com`
- **Team Leadership:**
  - **Dr Madelene Deacon** — Shareholder & Lead Advisor (CIBA, SAIT, Xero & Sage Partner)
  - **Karla van Rensburg** — Accountant & Financial Manager (AGA, BCom Accounting Sciences)
  - **Morne Strydom** — Shareholder & Strategic Director
  - **Heather Strydom** — Workflow Specialist & Process Architect
