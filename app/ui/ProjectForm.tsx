'use client';
import {startTransition,useActionState,useEffect,useState} from 'react';
import {ArrowUpRight,MessageCircle,Send} from 'lucide-react';
import {sendEnquiry,type EnquiryState} from '../actions';
import {services} from '../content';
import {servicePages} from '../service-pages';
import {Localized} from './Language';

const options=[...services.filter(s=>s.id!=='packages').map(s=>s.title),...servicePages.map(s=>s.name),'A package','Not sure yet'];
const timelines=['As soon as possible','Within a month','In 1–3 months','Just exploring'];

export default function ProjectForm({service='',heading=true}:{service?:string;heading?:boolean}){
 const [state,action,pending]=useActionState<EnquiryState,FormData>(sendEnquiry,{status:'idle'});
 const [selected,setSelected]=useState(service);
 // Calls to action without a WhatsApp number land on /contact?service=…; preselect that service.
 useEffect(()=>{const topic=new URLSearchParams(window.location.search).get('service');if(topic)setSelected(topic);},[]);
 const choices=selected&&!options.includes(selected)?[selected,...options]:options;
 // Submitting via startTransition keeps typed values after a validation error (a plain form action resets the form).
 const done=state.status==='sent'||state.status==='unconfigured';
 return <Localized>{<section className="project-form" id="start-a-project" aria-labelledby="start-a-project-title">
  {heading&&<div className="project-form-intro"><p className="eyebrow">START A PROJECT</p><h2 id="start-a-project-title">Tell us what<br/><em>you have in mind.</em></h2><p>A few details are enough. A real person from our Doha team will reply with next steps or a proposal.</p></div>}
  {!heading&&<h2 id="start-a-project-title" className="sr-only">Start a project</h2>}
  {done?<div className="form-result" role="status"><h3>{state.status==='sent'?'Thank you.':'Almost there.'}</h3><p>{state.message}</p>{state.whatsapp&&<a className="button" href={state.whatsapp}><MessageCircle size={17}/>Continue on WhatsApp<ArrowUpRight size={17}/></a>}</div>:
  <form action={action} onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);startTransition(()=>action(data));}} className="form-grid">
   <label>Your name<input name="name" autoComplete="name" required maxLength={100}/></label>
   <label>Business name<input name="business" autoComplete="organization" maxLength={120}/></label>
   <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30}/></label>
   <label>Email<input name="email" type="email" autoComplete="email" maxLength={150}/></label>
   <label>What do you need?<select name="service" value={selected} onChange={e=>setSelected(e.target.value)}><option value="">Choose a service</option>{choices.map(o=><option key={o} value={o}>{o}</option>)}</select></label>
   <label>When would you like to start?<select name="timeline" defaultValue=""><option value="">Choose a timeline</option>{timelines.map(t=><option key={t} value={t}>{t}</option>)}</select></label>
   <label className="wide">Tell us a little about the project<textarea name="message" rows={4} maxLength={2000}/></label>
   <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
   <div className="wide form-actions"><p className="form-hint">Add a phone number or email so we can reply.</p><button className="button" type="submit" disabled={pending}><Send size={16}/>{pending?'Sending…':'Send my project details'}<ArrowUpRight size={17}/></button></div>
   {state.status==='error'&&<p className="wide form-error" role="alert">{state.message}</p>}
   {state.status==='error'&&state.whatsapp&&<a className="wide text-link" href={state.whatsapp}>Send on WhatsApp instead <ArrowUpRight size={17}/></a>}
  </form>}
 </section>}</Localized>;
}
