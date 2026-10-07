import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {Localized} from '../../ui/Language';
import {MediaSlot} from '../../ui/Site';
import ProjectForm from '../../ui/ProjectForm';
import JsonLd from '../../ui/JsonLd';
import {posts,getPost,formatDate} from '../../blog';
import {getServicePage} from '../../service-pages';
import {absoluteUrl,siteUrl,pageMetadata} from '../../site';

export const dynamicParams=false;
export function generateStaticParams(){return posts.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const p=getPost((await params).slug);
 if(!p)return {};
 return pageMetadata({title:p.title,description:p.description,path:`/blog/${p.slug}`,type:'article',extra:{publishedTime:p.date,modifiedTime:p.updated??p.date,tags:p.tags}});
}

export default async function BlogPost({params}:{params:Promise<{slug:string}>}){
 const p=getPost((await params).slug);
 if(!p)notFound();
 const service=p.service?getServicePage(p.service):undefined;
 const more=posts.filter(o=>o.slug!==p.slug).slice(0,2);
 const schema=[
  {'@context':'https://schema.org','@type':'BlogPosting',headline:p.title,description:p.description,datePublished:p.date,dateModified:p.updated??p.date,image:absoluteUrl(p.image),url:absoluteUrl(`/blog/${p.slug}`),mainEntityOfPage:absoluteUrl(`/blog/${p.slug}`),inLanguage:'en',keywords:p.tags.join(', '),author:{'@type':'Organization',name:'ALQA',url:siteUrl},publisher:{'@id':`${siteUrl}/#business`}},
  ...(p.faqs?.length?[{'@context':'https://schema.org','@type':'FAQPage',mainEntity:p.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}]:[]),
 ];
 return <><JsonLd data={schema}/><Localized>{<>
  <article className="section post">
   <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{p.tags[0]}</span></nav>
   <h1>{p.title}</h1>
   <p className="post-meta"><time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readMinutes} min read · ALQA team, Doha</p>
   <p className="post-lede">{p.description}</p>
   <MediaSlot label={p.title} image={p.image}/>
   <div className="post-body">{p.body.map((b,i)=>'h2' in b?<h2 key={i}>{b.h2}</h2>:'p' in b?<p key={i}>{b.p}</p>:'ul' in b?<ul key={i}>{b.ul.map(li=><li key={li}>{li}</li>)}</ul>:<aside className="post-cta" key={i}><p>{b.cta}</p><a className="button" href="#start-a-project">Start a project<ArrowUpRight size={17}/></a>{service&&<Link className="text-link" href={`/services/${service.slug}`}>{service.name} <ArrowUpRight size={17}/></Link>}</aside>)}</div>
   {p.faqs&&<section className="post-faq"><h2>Frequently asked questions</h2><div className="faq-list">{p.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>}
  </article>
  <div className="section form-section"><ProjectForm service={service?.name}/></div>
  {more.length>0&&<section className="section related-services"><p className="eyebrow">MORE FROM THE BLOG</p><div className="related-links">{more.map(m=><Link key={m.slug} href={`/blog/${m.slug}`}>{m.title}<ArrowUpRight size={17}/></Link>)}</div></section>}
 </>}</Localized></>;
}
