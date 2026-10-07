import type {Metadata} from 'next';
import {whatsappNumber} from './content';

// Public site URL used for canonical links, the sitemap, Open Graph and schema markup.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export const siteTitle = 'ALQA | Digital Marketing & Production Studio in Doha, Qatar';
export const siteDescription = 'ALQA is a Doha digital marketing team with its own production studio: bilingual social media management, food and product photography, websites, Google Ads and branding across Qatar.';

// Fill these with confirmed business details only. Empty values are left out of the schema markup.
export const business = {
 name: 'ALQA',
 alternateName: 'ألقا',
 streetAddress: '',
 addressLocality: 'Doha',
 addressCountry: 'QA',
 postalCode: '',
 latitude: '',
 longitude: '',
 email: '',
 // e.g. ['Mo-Th 09:00-18:00','Su 09:00-18:00']
 openingHours: [] as string[],
 // Instagram, LinkedIn, TikTok, Google Business profile URLs
 sameAs: [] as string[],
};

export function absoluteUrl(path = '/') {return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;}

export function localBusinessSchema() {
 const b = business;
 return {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: b.name,
  alternateName: b.alternateName,
  description: siteDescription,
  url: siteUrl,
  logo: absoluteUrl('/brand/logo.png'),
  image: absoluteUrl('/opengraph-image'),
  ...(whatsappNumber && {telephone: `+${whatsappNumber}`}),
  ...(b.email && {email: b.email}),
  address: {'@type': 'PostalAddress', addressLocality: b.addressLocality, addressCountry: b.addressCountry, ...(b.streetAddress && {streetAddress: b.streetAddress}), ...(b.postalCode && {postalCode: b.postalCode})},
  ...(b.latitude && b.longitude && {geo: {'@type': 'GeoCoordinates', latitude: b.latitude, longitude: b.longitude}}),
  ...(b.openingHours.length && {openingHours: b.openingHours}),
  ...(b.sameAs.length && {sameAs: b.sameAs}),
  areaServed: {'@type': 'Country', name: 'Qatar'},
  knowsLanguage: ['en', 'ar'],
 };
}

const shareImage = {url:'/opengraph-image',width:1200,height:630,alt:'ALQA — Digital Marketing & Production Studio in Doha, Qatar'};
// Per-page metadata. Pages that set openGraph lose the inherited share image, so it is added here.
export function pageMetadata({title,description,path,type='website',absoluteTitle=false,extra={}}:{title:string;description:string;path:string;type?:'website'|'article';absoluteTitle?:boolean;extra?:Record<string,unknown>}):Metadata {
 return {
  title: absoluteTitle ? {absolute:title} : title,
  description,
  alternates: {canonical:path},
  openGraph: {type,title,description,url:path,siteName:'ALQA',locale:'en_QA',images:[shareImage],...extra},
  twitter: {card:'summary_large_image',title,description,images:[shareImage]},
 };
}
