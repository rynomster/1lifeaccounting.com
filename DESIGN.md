# 1Life Accounting - Website Design Brief

**Project:** [1lifeaccounting.com](https://1lifeaccounting.com)
**Repository:** [rynomster/1lifeaccounting.com](https://github.com/rynomster/1lifeaccounting.com)
**Reference content:** [The 1Life Group - 1Life Accounting](https://www.the1lifegroup.com/1life-accounting)
**Status:** Initial design direction; review factual claims and brand assets before launch
**Last updated:** 9 November 2026

> **Instruction to Jules and future contributors:** Build a distinctive, polished, conversion-focused website for **1Life Accounting**. Use the existing 1Life Group accounting page as a **factual starting point**, not as a page to clone. Preserve confirmed services and positioning; significantly improve information architecture, visual quality, accessibility, mobile usability, SEO and lead generation. Inspect the current repository and reuse its working stack and components where sensible.

## 1. The goal

Create the independent online home of **1Life Accounting**, a Northern Ireland-based accounting and business support offering serving clients across the United Kingdom.

The website must make four things obvious within five seconds:

1. **Who we help:** UK businesses seeking dependable, outsourced accounting support and better financial visibility.
2. **What we do:** Bookkeeping, management accounts, VAT, payroll and related financial administration, with Xero-enabled processes.
3. **Why choose us:** Practical business insight, experienced professionals and a personal, technology-enabled service.
4. **What to do next:** Request a **free introductory consultation**.

**Primary success metric:** Qualified consultation enquiries, not page views or visual novelty.

**Secondary goals:** Explain services clearly; build trust; support organic discovery; establish a distinct 1Life Accounting identity while retaining a credible relationship with The 1Life Group.

### Audience

- Owners and directors of UK small and medium-sized businesses, including growing companies that need an outsourced finance function.
- Newer businesses needing reliable bookkeeping and accounting processes.
- Established businesses needing management information, VAT, payroll or finance operations support.
- Businesses in Northern Ireland looking for local meetings, and businesses elsewhere in the UK comfortable with remote support.

Avoid narrowing the site to a particular industry or promising specific eligibility criteria unless the client confirms them. The parent page has referred to businesses with fewer than 100 employees; treat that as positioning to reconfirm rather than a hard limit.

## 2. Positioning and voice

**Brand promise:** *Clarity in your numbers. Confidence in your business.*

**Personality:** Professional, credible, calm, experienced, warm and straightforward. More of a trusted business partner than a generic bookkeeping app.

**Writing style:**

- British English throughout (e.g. *organise*, *tailored*, *VAT*).
- Short, concrete sentences; explain benefits before listing tasks.
- Confident without hype or jargon. Address the reader as *you*.
- Emphasise real people, clarity, responsiveness and a practical understanding of running a business.
- Use *1Life Accounting* consistently as the business name.
- Mention **part of The 1Life Group** as a supporting brand relationship, not as the primary homepage headline.

**Avoid:** "revolutionary", "AI-powered accountants", "guaranteed tax savings", "award-winning", "UK's leading", unverified testimonials, unverified professional accreditations and generic financial-services clichés.

## 3. Creative direction

### Design concept: modern accounting, human confidence

Aim for an **editorial, premium professional-services** look: generous whitespace, strong typography, thoughtful colour and real people. A modern technology-enabled feel is welcome, but it must not resemble a crypto exchange, banking dashboard or generic SaaS template.

**Visual adjectives:** Clear / Assured / Modern / Personal / Considered.

### Design guardrails

- **Do:** Use restrained colour, strong alignment, readable copy, generous section spacing and meaningful photography.
- **Do:** Give the primary CTA a distinct visual treatment, visible above the fold and repeated in natural places.
- **Do:** Mix light, warm surfaces with one occasional dark section for hierarchy.
- **Do:** Use custom simple icons or a consistent icon library with a unified stroke weight.
- **Don't:** Use floating 3D coins, piggy banks, calculator stock imagery, random abstract people, exaggerated graphs or decorative gradients.
- **Don't:** Fill the hero with a fake financial dashboard or use numbers that look like actual client results.
- **Don't:** Use carousels for core services or hide important content behind animations.
- **Don't:** Copy repeated sections or unrelated content accidentally present in the reference page.

### Logo and imagery

1. **First inspect the existing repo and the 1Life Group site for authorised logos, team portraits and brand assets.** Prefer actual source assets over newly invented versions of the 1Life logo.
2. Keep the main header identity legible at 320 px wide; develop a simplified mobile mark only if the existing logo supports it.
3. Prefer authentic team photographs, a tasteful office/business setting or an understated visual composition to irrelevant stock photos. Do not invent team photos or identities.
4. Use local optimised assets (AVIF/WebP with appropriate fallbacks) and descriptive alt text; do not hotlink the parent site's image CDN in production.
5. Obtain approval before reusing third-party logos or claiming software partner status in marketing graphics.

### Proposed colour system (starting point, not verified legacy brand colours)

Review against the **real 1Life logo** before committing. If an existing brand palette conflicts with these suggestions, prioritise the approved logo and update the tokens consistently.

| Token | Suggested value | Use |
| --- | --- | --- |
| `--color-ink` | `#172B32` | Headers, footer and dark panels |
| `--color-text` | `#24363B` | Body copy |
| `--color-muted` | `#617075` | Secondary text |
| `--color-primary` | `#206B5A` | Primary CTAs, active states, links |
| `--color-primary-hover` | `#185244` | Hover and pressed states |
| `--color-soft` | `#EAF3EF` | Subtle highlighted panels |
| `--color-page` | `#F8FAF8` | Page background |
| `--color-white` | `#FFFFFF` | Cards and contrast |
| `--color-border` | `#DEE6E2` | Borders and separators |

Use the palette sparingly. The overall site should feel light and welcoming, not dark or overly green. Maintain contrast ratios suitable for WCAG 2.2 AA.

### Typography

- **Headings:** Manrope or another confident, contemporary sans-serif approved by the existing brand.
- **Body:** Inter or a similarly legible, neutral sans-serif.
- Use **no more than two font families** and limited font weights; self-host or use privacy-conscious loading where feasible.
- Suggested desktop H1: `clamp(2.7rem, 5vw, 4.25rem)`; mobile headings must wrap naturally.
- Body: approximately 16-18 px, line-height 1.55-1.7; avoid small grey text.
- Use real typographic hierarchy, not all-caps paragraphs or letter-spaced sentence-length headings.

### Layout and motion

- Responsive 12-column grid with a content max-width around 1,200-1,280 px.
- Section spacing: approximately 72-104 px desktop, 48-64 px mobile, adjusted to the content.
- Card radius: 12-18 px; buttons: 10-12 px; avoid arbitrary mixtures of corner styles.
- Cards should use subtle borders or restrained shadows rather than heavy elevation.
- Animations: subtle and purposeful; respect `prefers-reduced-motion`. Never delay visibility of primary content.
- Mobile navigation must be compact and accessible; minimum interactive target approximately 44 x 44 px.

## 4. Site structure

### Minimum viable launch

| Route | Purpose | Primary CTA |
| --- | --- | --- |
| `/` | Positioning, services, credibility and conversion | Book a free consultation |
| `/services` | Explain the verified accounting and business support offering | Discuss your requirements |
| `/about` | Explain the approach and introduce the real team | Meet with the team |
| `/contact` | Fast, low-friction enquiry | Send enquiry |
| `/privacy` | Approved privacy notice | - |
| `/cookies` | Approved cookie policy, where applicable | - |

A dedicated `/pricing` page is optional once inclusions, scope and pricing language have been approved. Do not fabricate packages to fill the page.

### Phase 2 - only where substantial, verified content exists

Build useful service landing pages rather than thin SEO doorway pages:

- `/services/outsourced-accounting`
- `/services/bookkeeping`
- `/services/management-accounts`
- `/services/vat-making-tax-digital`
- `/services/payroll`
- `/insights` for genuinely useful, reviewed UK business-accounting content.

Choose the final routes and page scope based on the implemented architecture; maintain internal links and avoid duplicated copy.

## 5. Homepage design, top to bottom

### 5.1 Header

- Actual **1Life Accounting** logo/wordmark, linked to the homepage.
- Desktop navigation: **Services / About / Contact** (add Insights when useful content exists).
- Right-aligned primary button: **Book a Free Consultation**.
- Sticky header is acceptable if it is compact and does not occupy excessive mobile space.
- Mobile menu must close via Escape, provide visible focus and not trap or obscure content improperly.

### 5.2 Hero - the most important section

**Eyebrow:** `Northern Ireland based. Supporting businesses across the UK.`

**Suggested H1:** `Accounting that makes business clearer.`

**Suggested introduction:** `Practical outsourced accounting, bookkeeping and financial management for UK businesses. We combine experienced people with Xero-enabled processes to help you stay on top of your numbers.`

**Primary CTA:** `Book a Free Consultation`
**Secondary CTA:** `Explore Our Services`

Supporting reassurance, if approved: `Free introductory consultation` / `UK-wide remote support` / `Northern Ireland appointments`.

**Visual composition:** Split hero on desktop (copy approximately 55%, authentic people or branded visual approximately 45%). On mobile, keep the headline and CTA before the image. Avoid turning the hero into a giant empty billboard.

### 5.3 Trust and positioning strip

Three or four concise, substantiated pillars; e.g.:

- **UK-wide support** - Based in Northern Ireland, available remotely across the UK.
- **Xero-enabled** - Modern bookkeeping and finance workflows.
- **Practical business insight** - Management information people can act on.
- **Personal service** - A real team, not a faceless platform.

These are explanatory statements, **not** invented awards, certifications or numerical claims. Only add official software badges after verifying usage rights and current partner status.

### 5.4 Services overview

Use a clean 2 x 3 or 3 x 2 responsive grid, or another readable grouping, for six service categories:

1. **Bookkeeping & Financial Administration** - Transactions, debtors, invoicing, creditors and payment administration.
2. **Management Accounts** - Regular financial reporting and greater visibility into performance.
3. **VAT & Making Tax Digital** - VAT preparation/submissions and relevant digital workflows.
4. **Payroll Support** - Payroll processing and related administration.
5. **Annual Accounts & Compliance** - Annual financial statements and applicable filing/administration work.
6. **Business & Financial Support** - Financial health diagnostics, workflow and business strategy, with tax support subject to confirmed scope.

Add a link to Services and one overall CTA. Do not imply services outside the approved engagement scope. Verify the precise remit of Companies House confirmation statements and identity verification support.

### 5.5 A practical, human difference

A two-column editorial section explaining why the team combines **business experience** with **accounting discipline**. Use a meaningful visual, not a wall of buzzwords.

Suggested heading: `More than accounts. A clearer view of your business.`

Explain how management information supports decisions around cash flow, operations and growth, without guaranteeing outcomes.

### 5.6 How working together works

Show a simple, understandable three-step journey. This is **proposed UX copy** and must be validated with the team before publication:

1. **Let's talk** - Tell us about your business and what you need.
2. **Agree the right support** - Define scope, responsibilities and a tailored proposal.
3. **Stay on top of your numbers** - Establish efficient workflows and useful financial reporting.

No fabricated response-time promises or instant onboarding claims.

### 5.7 Transparent pricing introduction

**Heading:** `Straightforward support, tailored to your business.`

Current reference indicates **monthly financial management from £150 per month**. Display only after reconfirming that the price is current, what is included, whether VAT applies and the limitations of the starting package.

Suggested qualifying text: `Monthly financial management from £150/month for qualifying basic requirements. Services and fees are agreed according to your needs.`

Do not invent three pricing tiers or call £150 an all-inclusive accounting package.

### 5.8 Meet the people

Real team photography, name, **verified title** and short approved biography. The reference page names **Madelene Deacon, Karla van Rensburg, Heather Strydom and Morne Strydom**; only Madelene has an extended biography visible in the source. Verify every person's name spelling, current role, credentials, photo and permission to publish.

Use clean cards and a short overview, with a link to the full About page. **Never migrate the unrelated property-development template data** displayed within parts of the source page.

### 5.9 FAQ

Provide four to six answers that reduce friction, with team-reviewed wording. Good topics:

- Do you work with businesses outside Northern Ireland?
- Can you help if we currently use a different accounting setup?
- What does your monthly financial management service include?
- Do you offer a free introductory meeting?
- How do you tailor your services to different businesses?

Do not frame these as "most frequently asked by our customers" without enquiry data. Link out to official HMRC guidance for detailed tax rules rather than publishing unsupported definitive tax advice.

### 5.10 Final conversion section

A visually distinct, concise panel near the footer:

**Heading:** `Ready for more clarity in your business finances?`
**Copy:** `Tell us what you need. We'll arrange a conversation about the right support for your business.`
**CTA:** `Request a Free Consultation`

### 5.11 Footer

Include logo, service links, About, Contact, relationship to The 1Life Group, privacy/cookie links, copyright and **verified** business contact / legal details. Do not invent a registered company number, regulatory membership, office address or legal entity description.

## 6. Enquiries and conversion UX

### Primary enquiry flow

- All consultation CTAs must point to a **working** contact page or validated booking flow; never use `#`, a dead button or a dummy form.
- A simple form is preferred for launch: **Name**, **Work email**, **Company**, **What do you need help with?** and an **optional phone number**.
- Include a clear privacy notice link and appropriate data-processing disclosure. Don't request bank details, tax records or other sensitive documents in a general marketing form.
- Provide client-side validation *and* server-side validation, visible errors, spam prevention and an accessible success state.
- Never claim an enquiry succeeded unless the backend has accepted it. Make delivery failures observable and testable.
- Send submissions to a **confirmed** destination agreed with the 1Life team; do not assume a personal email is the correct production inbox.
- Display a useful contact email/phone as fallback once confirmed.
- Appointment booking can be embedded or linked only when an actual approved calendar/booking service exists.

### Recommended analytics events

- `generate_lead` - successful confirmed submission, not just clicking Send.
- `book_consultation_click` - primary consultation CTA interaction.
- `contact_email_click` and `contact_phone_click` - where contact details are displayed.
- `form_error` - optional, with no personal data in event payloads.

Set up GA4 and Google Search Console on the **new domain** with appropriate consent handling. Do not include names, emails, messages or other personal information in analytics events.

## 7. SEO and content strategy

### Search intent

Build copy naturally around queries such as:

- outsourced accounting services UK
- bookkeeping services for UK businesses
- management accounts services
- VAT and Making Tax Digital support
- accountants / accounting support in Northern Ireland

Do not repeat keyword phrases unnaturally or create numerous near-identical location pages. Northern Ireland is the geographic base; the service area is the UK.

### Technical SEO requirements

- Server-rendered or statically rendered crawlable HTML; avoid client-only rendering of important page content.
- Unique, descriptive titles and meta descriptions for each public page.
- Exactly one logical H1 per page, clean H2/H3 structure and descriptive internal links.
- Canonical URLs using `https://1lifeaccounting.com` (or the verified preferred `www` variant, consistently).
- XML sitemap and appropriate `robots.txt`; no accidental `noindex` on production.
- Open Graph/social sharing metadata, favicon and an appropriate preview image.
- Meaningful image names and alt text, with decorative images marked correctly.
- Valid structured data, such as `Organization`, `WebSite` and `AccountingService` **only where details are factual and the schema fits**. No made-up ratings/reviews.
- UK-specific language and context; test search snippets and mobile results.

### Relationship to The 1Life Group site

The new website must be the **primary content destination** for 1Life Accounting. Keep a short, distinctive summary on the group site with a clear link to the new site. Avoid publishing identical long-form accounting copy on both domains. Consider redirects or canonical tags **only after deciding the final parent-page strategy**, and preserve useful existing links/search visibility.

## 8. Accessibility and performance

**Accessibility target:** WCAG 2.2 AA in practical implementation.

- Fully usable with keyboard and screen readers.
- Visible focus styles, labelled controls, accessible mobile menu and logical reading order.
- WCAG-compliant contrast; don't rely on colour alone.
- Meaningful focus and error management on forms; no placeholder-only labels.
- Respect reduced motion, browser zoom and text resize.
- Test at approximately **320, 375, 390, 768, 1024, 1280 and 1440 px**, including unusually long text wrapping.

**Performance target:** Excellent real-world mobile performance, not merely a high desktop benchmark.

- Aim for Lighthouse Performance/Accessibility/Best Practices/SEO **90+** on representative pages; investigate any lower score.
- Work toward Core Web Vitals thresholds: LCP <= 2.5 s, CLS <= 0.1 and INP <= 200 ms (field data at the 75th percentile when available).
- Responsive image sizes, lazy-load below-the-fold media, explicit image dimensions, minimal third-party scripts and optimised fonts.
- Avoid animation libraries or heavyweight UI dependencies for static marketing content.
- Keep the main CTA usable before optional analytics or decorative JS loads.

## 9. Engineering principles

1. **Inspect the repo first.** Retain the current framework, package manager, lint/test setup and deployment flow unless there is a clear technical reason to change them.
2. Use semantic, reusable components: `Header`, `Hero`, `ServiceCard`, `SectionHeading`, `TeamCard`, `CTASection`, `Footer`, `ContactForm` and so on.
3. Centralise typography, spacing and colour tokens. Avoid scattered hard-coded values.
4. Store team, services and FAQs as structured content so edits don't require changing layout code.
5. Prefer minimal dependencies and maintainable styling over elaborate animation or component frameworks.
6. Keep environment secrets server-side; no email API credentials or private tokens in frontend bundles.
7. Ensure production builds pass and provide functioning routes, links, images, contact flow and metadata.
8. Include concise documentation for local development, configuration, deployment and analytics/lead-form setup.

## 10. Delivery plan

### Priority 0 - launch essentials

- [ ] Inspect existing code and identify the framework, routes, assets and deployment requirements.
- [ ] Establish the visual system and apply the verified logo/brand assets.
- [ ] Complete responsive Home, Services, About and Contact pages.
- [ ] Use factual, reviewed content and remove source-page duplicates or unrelated placeholders.
- [ ] Implement a real, tested consultation enquiry mechanism and privacy messaging.
- [ ] Complete metadata, sitemap, robots, canonical handling and basic structured data.
- [ ] Test keyboard access, major viewport sizes, build and mobile performance.
- [ ] Add approved legal/privacy/cookie content before production launch.

### Priority 1 - conversion and content quality

- [ ] Confirm price, team profiles, software affiliations and public legal details.
- [ ] Add team-approved FAQ answers and a genuinely useful About narrative.
- [ ] Set up and test consent-aware GA4 events and Google Search Console.
- [ ] Coordinate cross-links and duplicate-content strategy with The 1Life Group site.
- [ ] Review real form submissions, spam controls and response handling.

### Priority 2 - organic growth

- [ ] Develop substantial, differentiated service pages for worthwhile search intents.
- [ ] Publish reviewed insights/articles relevant to UK businesses.
- [ ] Add authentic testimonials or case studies **only after obtaining permission and verifying claims**.
- [ ] Iterate on CTA placement and form friction using real analytics data.

## 11. Definition of done

The initial website is ready for review when:

- A new visitor can identify the business, its UK service area, services and next action in five seconds.
- A realistic visitor can submit a consultation enquiry successfully on mobile and desktop.
- No lorem ipsum, broken links, unrelated property copy, fake testimonials, fake team members or unsupported awards remain.
- The same coherent visual identity is present across all launch pages and breakpoints.
- Text is legible, interactions work with keyboard navigation, forms report errors accessibly, and pages don't shift materially while loading.
- Production URLs, metadata, sitemap, analytics and enquiry destinations have been tested.
- Business claims, pricing, credentials, images and legal notices have received client approval.

## 12. Source of truth and approval notes

**Reference pages reviewed:**

- https://www.the1lifegroup.com/1life-accounting
- https://www.the1lifegroup.com/
- https://www.the1lifegroup.com/contact

Treat these as sources to **verify**, not infallible approved specifications. The current accounting page includes duplicated content and apparent unrelated property-template sections. Do not reproduce those errors.

**Needs client sign-off before publication:** Starting monthly price and inclusions; confirmed service remit; exact team roles/headshots/credentials; approved testimonials and badges; whether Xero/Sage partner wording is current; contact destination and phone/address; business's legal entity/regulatory statements; privacy/cookie wording; actual onboarding process.

**Design decision rule:** When there is a choice between clever visual effects and clearer information or an easier enquiry, choose clarity and conversion.
