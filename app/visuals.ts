export const serviceVisuals: Record<string, string[]> = {
  social: ['social', 'product', 'launch', 'film', 'branding', 'creative'],
  'photo-video': ['food', 'product', 'film', 'studio', 'launch', 'advertising', 'branding', 'social', 'website', 'creative', 'food', 'product'],
  branding: ['branding', 'launch', 'creative'],
  websites: ['website', 'product', 'creative', 'social'],
  ads: ['advertising', 'product', 'food', 'launch'],
  packages: ['launch', 'website', 'food', 'branding'],
};

export function serviceImage(service: string, index = 0) {
  const images = serviceVisuals[service] ?? ['studio'];
  return `/images/${images[index % images.length]}.png`;
}

export function labelImage(label: string) {
  if (/food|menu|F&B/i.test(label)) return '/images/food.png';
  if (/brand.*film|corporate.*film|scene/i.test(label)) return '/images/film.png';
  if (/launch|packages/i.test(label)) return '/images/launch.png';
  if (/profile|brand|design|identity/i.test(label)) return '/images/branding.png';
  if (/social|instagram|reel|post/i.test(label)) return '/images/social.png';
  if (/web|commerce|store|homepage/i.test(label)) return '/images/website.png';
  if (/advert|campaign|property/i.test(label)) return '/images/advertising.png';
  if (/product/i.test(label)) return '/images/product.png';
  return '/images/studio.png';
}
