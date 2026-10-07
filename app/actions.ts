'use server';
import {whatsappNumber} from './content';

export type EnquiryState = {status:'idle'|'sent'|'error'|'unconfigured';message?:string;whatsapp?:string};

const limits:Record<string,number> = {name:100,business:120,phone:30,email:150,service:100,timeline:60,message:2000};

// Delivers "Start a project" enquiries to ENQUIRY_WEBHOOK_URL (Make, Zapier, Formspree, Slack, a CRM...).
export async function sendEnquiry(_prev:EnquiryState, formData:FormData):Promise<EnquiryState> {
 // Hidden honeypot field: real visitors leave it empty.
 if (String(formData.get('website') ?? '')) return {status:'sent'};
 const data = Object.fromEntries(Object.keys(limits).map(key=>[key,String(formData.get(key) ?? '').trim().slice(0,limits[key])]));
 if (!data.name) return {status:'error',message:'Please add your name.'};
 if (!data.phone && !data.email) return {status:'error',message:'Please add a phone/WhatsApp number or an email so we can reply.'};
 if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return {status:'error',message:'Please check your email address.'};
 if (data.phone && !/^[+\d][\d\s-]{6,}$/.test(data.phone)) return {status:'error',message:'Please check your phone number.'};

 const summary = [`Hello ALQA, I would like to start a project.`,`Name: ${data.name}`,data.business&&`Business: ${data.business}`,data.service&&`Service: ${data.service}`,data.timeline&&`Timeline: ${data.timeline}`,data.message&&`Details: ${data.message}`].filter(Boolean).join('\n');
 const whatsapp = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}` : undefined;

 const webhook = process.env.ENQUIRY_WEBHOOK_URL;
 if (!webhook) {
  console.warn('[enquiry] ENQUIRY_WEBHOOK_URL is not set; enquiry was not delivered.');
  return {status:'unconfigured',whatsapp,message:whatsapp?'Our online form is being connected. Send these details to us on WhatsApp and we will reply there.':'Our online form is being connected. Please check back soon.'};
 }
 try {
  const response = await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,submittedAt:new Date().toISOString(),source:'alqa-website'}),signal:AbortSignal.timeout(10000)});
  if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
 } catch (error) {
  console.error('[enquiry] delivery failed', error);
  return {status:'error',whatsapp,message:'Something went wrong sending your details. Please try again or message us on WhatsApp.'};
 }
 return {status:'sent',whatsapp,message:'Our Doha team has your details and will be in touch soon.'};
}
