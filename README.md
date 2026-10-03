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

Design: maroon #8A1538, cream #FBF8F3, sand #EFE6D8, ink #1C1917. DM Serif Display headings and IBM Plex Sans / Arabic body type. Supplied ALQA logo remains intact.

## Configure before publishing

Copy .env.example to .env.local and set NEXT_PUBLIC_WHATSAPP_NUMBER to the business number with country code (digits only). Build again after changing this value. When missing, calls to action lead to Contact, which explicitly states the details are pending; no unrelated number is used.

Add approved client photos and videos under public/work. app/content.ts holds the project content, optional image/video paths, before/after paths, client-approved results, and hero/showreel media. app/ui/MediaSamples.tsx supports service sample assets through the serviceMedia map. Videos use muted autoplay, loop and inline playback. Before/after sliders are rendered only when both approved images exist. Results are shown only if approvedResult is populated.

No genuine client media was supplied in the brief. All missing-media areas are explicitly labeled. Work category pages are not represented as completed client projects. No prices, internal costs, salaries, or unapproved performance figures are published.

Full Arabic routing is deferred per the brief. Current Arabic touches use native-script typography and RTL attributes; have a native writer review the translations before launch.

The prior Vite/Kinera source remains under src/ for reference and is excluded from the Next.js build.

## Image update
Ten generated illustrative visuals now fill the hero, service cards, galleries, packages, work pages and page banners. Seven new assets cover social content, branding, websites, advertising, launch packages, product photography and filmmaking, with distinct images for each main service and work card. They are marked as illustrative. See public/images/ASSET-NOTES.md and public/images/NEW-VISUAL-PROMPTS.json for provenance and prompts. Replace these with approved ALQA media when available.

