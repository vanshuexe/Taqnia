import type {MetadataRoute} from 'next';
import {projects} from './content';
import {servicePages} from './service-pages';
import {posts} from './blog';
import {absoluteUrl} from './site';

export default function sitemap():MetadataRoute.Sitemap{
 const pages=['/','/services','/work','/how-we-work','/blog','/contact'].map(path=>({url:absoluteUrl(path),changeFrequency:'monthly' as const,priority:path==='/'?1:0.8}));
 return [
  ...pages,
  ...servicePages.map(s=>({url:absoluteUrl(`/services/${s.slug}`),changeFrequency:'monthly' as const,priority:0.9})),
  ...posts.map(p=>({url:absoluteUrl(`/blog/${p.slug}`),lastModified:p.updated??p.date,changeFrequency:'yearly' as const,priority:0.7})),
  ...projects.map(p=>({url:absoluteUrl(`/work/${p.slug}`),changeFrequency:'yearly' as const,priority:0.5})),
 ];
}
