# Chat2Sales — Landing Page

A Next.js 14 + Tailwind CSS replica of a modern AI-chatbot-for-sales SaaS site
(inspired by chat2sales.ai). Built as a production-ready marketing page with a
hero, features grid, integrations, how-it-works, use cases, testimonials,
pricing toggle, FAQ, and CTA.

> ⚠️  The source site (chat2sales.ai) blocks automated access, so exact copy
> and asset replication was not possible. Content here is category-appropriate
> filler that reflects a typical AI-sales-chatbot product page. Swap copy and
> branding to match the real source when available.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS 3.4** — utility-first styling with custom brand tokens
- **React 18** — client components for interactive bits (mobile nav, pricing
  toggle, FAQ accordion)

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build a production bundle
- `npm start` — serve the production build
- `npm run lint` — run Next's linter

## Structure

```
app/
  layout.tsx       # Root layout + metadata + font
  page.tsx         # Home page — composes all sections
  globals.css     # Tailwind directives + components
components/
  Header.tsx       # Sticky nav with mobile menu
  Hero.tsx         # Headline, CTAs, stats, logo wall
  ChatMockup.tsx   # Animated chat demo UI
  Features.tsx     # 6-card feature grid
  Integrations.tsx # CRM/channel integrations grid
  HowItWorks.tsx   # 4-step onboarding flow
  UseCases.tsx     # Industry-specific outcomes
  Testimonials.tsx # Customer quotes
  Pricing.tsx      # 3-tier pricing with monthly/yearly toggle
  FAQ.tsx          # Accordion FAQ
  CTA.tsx          # Final conversion block
  Footer.tsx       # Multi-column footer + newsletter
  Logo.tsx         # Inline SVG brand mark
```
