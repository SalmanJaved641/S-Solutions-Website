# S Solutions website

The S Solutions agency website is built with Next.js, React, TypeScript and Tailwind CSS. Content and business details live in `src/content` and `src/config`; replaceable assets are mapped centrally in `src/config/assets.ts`.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Contact-form email delivery

The form validates submissions in the browser and again in `POST /api/contact`. It includes a honeypot and best-effort in-memory rate limiting. Email is delivered using Resend.

1. Create a Resend account and verify a sending domain.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to the API key from Resend.
4. Set `CONTACT_FROM_EMAIL` to an address on the verified domain.
5. Set `CONTACT_TO_EMAIL` to the inbox that should receive enquiries.
6. Set `NEXT_PUBLIC_SITE_URL` to the public production origin before deployment.

When email credentials are missing, the endpoint returns an explicit error and the form shows direct email and WhatsApp alternatives. Leads are never silently discarded.

## Updating content and assets

- Business details and future social links: `src/config/site.ts`
- Navigation: `src/config/nav.ts`
- Replaceable logo, marquee and project assets: `src/config/assets.ts`
- Page and section copy: `src/content/`

Terms and privacy pages contain clearly labelled AI-generated drafts. Have a qualified legal professional review and replace them before launch.

## Deployment

Deployment is intentionally not configured. Build with `npm run build`, then deploy to a platform that supports Next.js route handlers and runtime environment variables.
