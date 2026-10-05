export const serviceVisuals: Record<string, string[]> = {
  social: ['social-blue', 'product-blue', 'launch-blue', 'film-blue', 'branding-blue', 'creative-blue'],
  'photo-video': ['food-blue', 'product-blue', 'film-blue', 'studio-blue', 'launch-blue', 'advertising-blue', 'branding-blue', 'social-blue', 'website-blue', 'creative-blue', 'food-blue', 'product-blue'],
  branding: ['branding-blue', 'launch-blue', 'creative-blue'],
  websites: ['website-blue', 'product-blue', 'creative-blue', 'social-blue'],
  ads: ['advertising-blue', 'product-blue', 'food-blue', 'launch-blue'],
  packages: ['launch-blue', 'website-blue', 'food-blue', 'branding-blue'],
};

export function serviceImage(service: string, index = 0) {
  const images = serviceVisuals[service] ?? ['studio-blue'];
  return `/images/${images[index % images.length]}.png`;
}

export function labelImage(label: string) {
  if (/food|menu|F&B/i.test(label)) return '/images/food-blue.png';
  if (/brand.*film|corporate.*film|scene/i.test(label)) return '/images/film-blue.png';
  if (/launch|packages/i.test(label)) return '/images/launch-blue.png';
  if (/profile|brand|design|identity/i.test(label)) return '/images/branding-blue.png';
  if (/social|instagram|reel|post/i.test(label)) return '/images/social-blue.png';
  if (/web|commerce|store|homepage/i.test(label)) return '/images/website-blue.png';
  if (/advert|campaign|property/i.test(label)) return '/images/advertising-blue.png';
  if (/product/i.test(label)) return '/images/product-blue.png';
  return '/images/studio-blue.png';
}
