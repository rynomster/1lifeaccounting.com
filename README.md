# 1Life Accounting

**Website:** [1lifeaccounting.com](https://1lifeaccounting.com)
**Parent brand:** [The 1Life Group](https://www.the1lifegroup.com)
**Location:** 33A Clare Road, Gilford, BT63 6AG, Northern Ireland, United Kingdom

## About the site

1Life Accounting is part of The 1Life Group. Based in Northern Ireland, it provides accounting services, financial guidance and business support to clients across the UK. The team is led by entrepreneurs who understand the challenges of running a business.

The approved public positioning centres on plain-English advice, modern cloud-based efficiencies and personal support. The main conversion offer is a free first virtual consultation.

## Architecture

This is a static website built with semantic HTML, CSS and minimal vanilla JavaScript. There is no build step or frontend framework. The client manages routine content changes through GitHub and Codex.

- `index.html` — homepage
- `services/index.html` — detailed service descriptions and monthly financial management starting rate
- `about/index.html` — company story and verified team biographies
- `contact/index.html` — consultation request form and contact information
- `privacy/index.html`, `cookies/index.html` — policies
- `css/style.css` — design tokens, layout and responsive styling
- `js/main.js` — navigation, FAQ, form and analytics interactions
- `assets/images/` — brand and team photography

## Verified team

- **Dr Madelene Deacon** — Shareholder & Lead Advisor (PhD(Hc), CIBA, SAIT, Xero Partner)
- **Karla van Rensburg** — Accountant & Financial Manager (AGA, BCom Accounting Sciences, UNISA)
- **Morne Strydom** — Shareholder & Strategic Director
- **Heather Strydom** — Workflow Specialist

Retain the verified team portraits on the homepage and About page. Do not invent credentials, testimonials, awards, team members or service claims. Attribute qualifications only to the team members confirmed to hold them.

## Approved content rules

- Use British English.
- Describe accounting services, financial guidance and business support; do not position the business as an outsourcing provider.
- Do not promote specific accounting software providers, badges or integrations in general marketing. Dr Madelene Deacon’s verified Xero Partner credential may appear in her biography only. Use general descriptions such as cloud-based accounting, automated tools, digital efficiencies and secure collaboration.
- The offer is a free first virtual consultation. Do not promise extra free services or free in-person consultations.
- State that the business is based in Northern Ireland and serves clients across the UK.
- The monthly financial management reference rate is from £150/month for qualifying basic requirements. This is not an all-inclusive package; scope and fees are tailored.
- Keep all public contact destinations consistent with `info@1lifeaccounting.com` until the client confirms whether the advertisement’s `admin@1lifeaccounting.com` address should replace it.

## Local preview

Run a static server from the repository root, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
