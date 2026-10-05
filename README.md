# ALQA website

Next.js App Router website implementing the ALQA Services Brief (September 30, 2026).

## Run

`npm install`, then `npm run dev -- --port 3001`.

Verify with `npm run lint` and `npm run build`. Serve the production build with `npm start -- --port 3001`.

## Content and pages

- Home: hero, six selected work categories, six services, quality band, five industries, four process steps, Health Check.
- Our Work: service and industry filters, project pages, quality band.
- Services: Social, Photo & Video, Branding, Websites, Advertising, Packages; full included-service lists and Google Business setup.
- How We Work: Brief, Create, Review, Publish and report.
- Contact: WhatsApp proposals and free Digital Health Check.

Design: logo-matched navy #202D64, blue #247EBD, cyan #2FA9DD, cool white #F7FAFF and ink #141C3C. Manrope upright headings, Inter body text and IBM Plex Sans Arabic. Supplied ALQA logo remains intact.

## Configure before publishing

Copy .env.example to .env.local and set NEXT_PUBLIC_WHATSAPP_NUMBER to the business number with country code (digits only). Build again after changing this value. When missing, calls to action lead to Contact, which explicitly states the details are pending; no unrelated number is used.

Add approved client photos and videos under public/work. app/content.ts holds the project content, optional image/video paths, before/after paths, client-approved results, and hero/showreel media. app/ui/MediaSamples.tsx supports service sample assets through the serviceMedia map. Videos use muted autoplay, loop and inline playback. Before/after sliders are rendered only when both approved images exist. Results are shown only if approvedResult is populated.

No genuine client media was supplied in the brief. All missing-media areas are explicitly labeled. Work category pages are not represented as completed client projects. No prices, internal costs, salaries, or unapproved performance figures are published.

English and Arabic are selected from the header. Each page shows one selected language, with RTL layout for Arabic and a browser-persisted choice. Translation strings live in app/ui/Language.tsx.

The prior Vite/Kinera source remains under src/ for reference and is excluded from the Next.js build.

## Image update
Ten generated illustrative visuals now fill the hero, service cards, galleries, packages, work pages and page banners. Seven new assets cover social content, branding, websites, advertising, launch packages, product photography and filmmaking, with distinct images for each main service and work card. They are marked as illustrative. See public/images/ASSET-NOTES.md and public/images/NEW-VISUAL-PROMPTS.json for provenance and prompts. Replace these with approved ALQA media when available.


Language selector: English / العربية, one language at a time. Arabic includes RTL layout and translated page content. Selection persists in the browser across pages.

All ten illustrative website assets now use the logo-matched navy/blue/cyan/white palette. Active assets are public/images/*-blue.png; exact prompts are saved in public/images/LOGO-MATCHED-VISUAL-PROMPTS.json. Older variants remain for reference.

All ten illustrative website assets now use the logo-matched navy/blue/cyan/white palette. Active assets are public/images/*-blue.png; exact prompts are saved in public/images/LOGO-MATCHED-VISUAL-PROMPTS.json. Older variants remain for reference.
