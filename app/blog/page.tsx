import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Localized} from '../ui/Language';
import {MediaSlot,HealthBand} from '../ui/Site';
import {posts,formatDate} from '../blog';
import {pageMetadata} from '../site';

export const metadata:Metadata=pageMetadata({title:'Digital Marketing Blog for Qatar Businesses',description:'Practical guides on social media, photography, websites and ads for businesses in Qatar, from the ALQA team in Doha.',path:'/blog'});

export default function Blog(){return <Localized>{<>
 <section className="section page-intro"><p className="eyebrow">BLOG / المدونة</p><h1>Ideas for growing<br/><em>in Qatar.</em></h1><p>Practical guides on social media, photography, websites and advertising, written by our Doha team.</p></section>
 <section className="section blog-list">{posts.map(p=><Link className="post-card" href={`/blog/${p.slug}`} key={p.slug}><MediaSlot label={p.title} image={p.image}/><div><p className="post-meta"><time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readMinutes} min read</p><h2>{p.title}</h2><p>{p.description}</p><span className="text-link">Read the article <ArrowUpRight size={17}/></span></div></Link>)}</section>
 <HealthBand/>
</>}</Localized>;}
