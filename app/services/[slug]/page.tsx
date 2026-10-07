import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {Localized} from '../../ui/Language';
import {CTA,MediaSlot,QualityBand} from '../../ui/Site';
import ProjectForm from '../../ui/ProjectForm';
import JsonLd from '../../ui/JsonLd';
import {servicePages,getServicePage} from '../../service-pages';
import {posts} from '../../blog';
import {absoluteUrl,siteUrl,pageMetadata} from '../../site';

export const dynamicParams=false;
export function generateStaticParams(){return servicePages.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const s=getServicePage((await params).slug);
 if(!s)return {};
 return pageMetadata({title:s.metaTitle,description:s.metaDescription,path:`/services/${s.slug}`});
}

export default async function ServiceLanding({params}:{params:Promise<{slug:string}>}){
 const s=getServicePage((await params).slug);
 if(!s)notFound();
 const others=servicePages.filter(o=>o.slug!==s.slug);
 const related=[...others.filter(o=>o.group===s.group),...others.filter(o=>o.group!==s.group)].slice(0,3);
 const articles=posts.filter(p=>p.service===s.slug).slice(0,2);
 const schema=[
  {'@context':'https://schema.org','@type':'Service',name:s.name,serviceType:s.name,description:s.metaDescription,url:absoluteUrl(`/services/${s.slug}`),provider:{'@id':`${siteUrl}/#business`},areaServed:{'@type':'Country',name:'Qatar'}},
  {'@context':'https://schema.org','@type':'FAQPage',mainEntity:s.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))},
  {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{name:'Home',path:'/'},{name:'Services',path:'/services'},{name:s.name,path:`/services/${s.slug}`}].map((b,i)=>({'@type':'ListItem',position:i+1,name:b.name,item:absoluteUrl(b.path)}))},
 ];
 return <><JsonLd data={schema}/><Localized>{<>
  <section className="service-hero"><div className="service-hero-copy"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">{s.name}</span></nav><p className="eyebrow">{s.eyebrow}</p><h1>{s.headline}<br/><em>{s.highlight}</em></h1><span className="arabic" lang="ar" dir="rtl">{s.arabic}</span><p className="service-hero-intro">{s.intro}</p><div className="hero-actions"><a className="button" href="#start-a-project">Start a project<ArrowUpRight size={17}/></a><CTA topic={s.name} className="outline"/></div></div><MediaSlot label={s.name} image={s.image}/></section>
  <section className="section service-included"><div><p className="eyebrow">WHAT’S INCLUDED</p><h2>Everything handled<br/><em>by one Doha team.</em></h2></div><ul className="check-list">{s.included.map(item=><li key={item}>{item}</li>)}</ul></section>
  <section className="section service-examples"><div className="section-heading"><div><p className="eyebrow">EXAMPLES</p><h2>What this<br/><em>can look like.</em></h2></div></div><p className="asset-note">These examples describe typical projects with illustrative visuals. They are not completed client projects.</p><div className="example-grid">{s.examples.map(e=><article key={e.title}><MediaSlot label={e.title} image={e.image}/><h3>{e.title}</h3><p>{e.text}</p></article>)}</div></section>
  <QualityBand/>
  <section className="section faq-section"><div><p className="eyebrow">FAQ</p><h2>Questions about<br/><em>{s.name}.</em></h2></div><div className="faq-list">{s.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
  {articles.length>0&&<section className="section related-reading"><p className="eyebrow">FROM THE BLOG</p><div className="related-links">{articles.map(a=><Link key={a.slug} href={`/blog/${a.slug}`}>{a.title}<ArrowUpRight size={17}/></Link>)}</div></section>}
  <div className="section form-section"><ProjectForm service={s.name}/></div>
  <section className="section related-services"><p className="eyebrow">RELATED SERVICES</p><div className="related-links">{related.map(r=><Link key={r.slug} href={`/services/${r.slug}`}>{r.name}<ArrowUpRight size={17}/></Link>)}</div></section>
 </>}</Localized></>;
}
