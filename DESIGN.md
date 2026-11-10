# 1Life Accounting - Website Design Brief

**Project:** [1lifeaccounting.com](https://1lifeaccounting.com)
**Repository:** [rynomster/1lifeaccounting.com](https://github.com/rynomster/1lifeaccounting.com)
**Primary visual reference:** [The 1Life Group](https://www.the1lifegroup.com/)
**Reference content:** [The 1Life Group - 1Life Accounting](https://www.the1lifegroup.com/1life-accounting)
**Status:** Brand-aligned design specification
**Last updated:** November 2026

> **Instruction to Jules and future contributors:** Build a cohesive, polished, conversion-focused website for **1Life Accounting** that visually belongs to **The 1Life Group** brand family.
>
> **Design Priority Hierarchy:**
> 1. The 1Life Group's actual visual identity (colours, typography, rhythm, button styles, authentic photography).
> 2. The existing accounting page's approved branding, service descriptions, and credentials.
> 3. Modern accessibility (WCAG 2.2 AA) and responsive design.
> 4. Conversion optimisation and SEO.

## 1. The Goal & Audience

Create the independent online home of **1Life Accounting**, a Northern Ireland-based accounting and business support offering serving clients across the United Kingdom.

A visitor familiar with `https://www.the1lifegroup.com/` must immediately recognise `https://1lifeaccounting.com/` as part of the same brand family. It must look professional, spacious, elegant, and authentic—avoiding generic SaaS templates, floating 3D elements, excessive pill badges, or unverified software partner claims.

The website must make four things obvious within five seconds:
1. **Who we help:** UK businesses seeking dependable, outsourced accounting support and clear financial visibility.
2. **What we do:** Bookkeeping, management accounts, VAT, payroll, annual accounts, and business advisory, with Xero-enabled processes.
3. **Why choose us:** Practical business insight, experienced professionals, and personal, technology-enabled support.
4. **What to do next:** Request a **free introductory consultation**.

## 2. Brand Positioning & Tone of Voice

- **Brand Promise:** *Clarity in your numbers. Confidence in your business.*
- **Personality:** Professional, established, spacious, elegant, calm, experienced, warm, and straightforward.
- **Brand Relationship:** Always explicitly acknowledge the relationship as **"Part of The 1Life Group"**.
- **Writing Style:**
  - British English throughout (*organise*, *tailored*, *specialises*, *licence*, *VAT*).
  - Short, concrete sentences; benefits before task lists.
  - Confident without hype, buzzwords, or exaggerated claims.
- **Avoid:** "Revolutionary", "AI-powered accountants", "guaranteed tax savings", "UK's leading", fabricated testimonials, unverified gold partner badges, and generic financial clichés.

## 3. Visual Identity & Design Tokens

Extracted directly from **The 1Life Group** design system:

### 3.1 Colour System

| Token | Verified Value | Role / Usage |
| --- | --- | --- |
| `--color-deep-teal` (`--color-primary-dark`) | `#133E44` | Signature deep teal brand colour; primary headings, dark hero/footer surfaces, navigation text |
| `--color-green-dark` | `#4A6E15` | Deep olive/forest green; gradient start for primary brand buttons, accents |
| `--color-green-mid` | `#7A9931` | Mid olive green; hover states, accent borders, highlights |
| `--color-green-light` | `#96C329` | Fresh vibrant lime/leaf green; gradient end for buttons, subtle badges |
| `--color-gold` | `#D49D4C` | Warm gold accent; secondary accents and subtle emphasis |
| `--color-cream` (`--color-canvas`) | `#FFFAF5` | Warm cream primary canvas/background |
| `--color-cream-soft` | `#F4EFEA` | Secondary warm surface for section contrast |
| `--color-surface-white` | `#FFFFFF` | Card backgrounds, form inputs, clean contrast surfaces |
| `--color-ink` | `#1A2E33` | Deep charcoal/teal body text with high contrast ratio |
| `--color-muted` | `#53686D` | Subdued secondary text, metadata, captions |
| `--color-border` | `#E3DCD3` | Warm subtle borders and dividing lines |

### 3.2 Typography

- **Headings & Brand Titles:** `Montserrat`, sans-serif (Weights: 600, 700, 800) with tight letter-spacing (`-0.02em` to `-0.01em`). Confident, established, modern.
- **Body & Interface:** `Inter`, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif (Weights: 400, 500, 600). Highly readable, clean proportions.
- **Editorial Accent:** `Libre Baskerville`, serif, italic (used sparingly for editorial pull-quotes or distinctive brand moments).
- **Scale:**
  - Display / H1: `clamp(2.5rem, 5vw, 3.8rem)`, line-height `1.15`
  - H2: `clamp(1.85rem, 3.5vw, 2.6rem)`, line-height `1.25`
  - H3: `clamp(1.3rem, 2vw, 1.7rem)`, line-height `1.35`
  - Body: `1rem` to `1.125rem` (16–18px), line-height `1.65`

### 3.3 Buttons & Interactive Controls

Parent brand buttons have a distinct, polished appearance:
- **Primary Button (`.btn-primary`):**
  - Background: `linear-gradient(180deg, #4A6E15 0%, #96C329 100%)`
  - Text: `#FFFFFF`, bold font-weight (`600` or `700`), `Montserrat` or clean sans-serif
  - Border-radius: `30px` (pill shape)
  - Padding: `14px 28px` (desktop), `12px 24px` (mobile)
  - Subtle drop shadow: `0 4px 14px rgba(74, 110, 21, 0.25)`
  - Hover: Subtle brightness lift or gentle upward translate (`translateY(-2px)`) with enhanced glow
- **Secondary / Outline Button (`.btn-secondary`, `.btn-outline`):**
  - Border: `1.5px solid #133E44` or `rgba(19, 62, 68, 0.3)`
  - Text: `#133E44` (or `#FFFFFF` on dark backgrounds)
  - Border-radius: `30px` (pill shape)
  - Background: transparent
  - Padding: `13px 26px`
- **Spacing Between Buttons:**
  - All button groups (`.hero-actions`, `.cta-actions`, form action rows) **must** feature explicit margins/gaps:
  - Flex layout with `gap: 1rem` (16px) minimum on desktop, wrapping gracefully on mobile.
  - On mobile viewports (`<= 480px`), button groups must stack with generous vertical margins (`gap: 0.85rem`), avoiding cramped or touching tap targets.
  - Buttons must never touch or collapse into each other. Tap targets must always meet or exceed 44 x 44 px.

### 3.4 Imagery, Photography & Team Cards

- **Authenticity Only:** Only use authentic, verified portraits. Never substitute synthetic AI avatars or generic stock portraits for actual staff.
- **Verified Portraits:**
  - **Dr Madelene Deacon:** Verified source portrait (`assets/images/madelene-deacon.png`, matching `PEeJZdLcdiirjtFuy32PoRmlrw.png` on the parent group site).
- **Unverified Portraits:**
  - Karla van Rensburg, Morne Strydom, Heather Strydom: Until high-resolution authoritative original photographs are confirmed and approved, represent these individuals using elegant, dignified **text-only profile cards** featuring their initials, full verified names, roles, credentials, and bios.
  - Never display property-development stock photos or unverified images under staff names.
- **Hero & Content Photography:** Warm, natural, professional imagery reflecting authentic Northern Ireland / UK business environments.

## 4. Software Partnerships & Credentials

- **Xero:** Verified as **Xero Partner** (accredited cloud accounting). Do **not** use "Gold Partner" badge or claim unverified Gold status unless formally substantiated by 1Life management.
- **Pricing:** Monthly financial management **from £150/month** for qualifying basic requirements. Explicitly qualify that full accounting, VAT, payroll, and advisory fees are tailored to client scale and scope.

## 5. Contact Enquiries & Technical Integrity

- **Honest Form Flow:** Do not simulate successful submissions with fake `setTimeout(..., 600)`.
- If a secure backend endpoint is unavailable, provide a direct `mailto:` handler and clearly visible telephone/email contact methods.
- Trigger `generate_lead` analytics only upon genuine user engagement or validated submission.
