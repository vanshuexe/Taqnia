export const services = [
 {id:'social', title:'Social media', arabic:'إدارة التواصل الاجتماعي', category:'Social', intro:'Content your customers stop scrolling for, in Arabic and English, every week.', items:['Monthly content calendar and designed posts','Reels and TikToks, shot in Qatar','Stories and community replies','Bilingual captions written by native writers','Ads management (optional)','Monthly performance report'], samples:['Instagram grid','Reel / 01','Reel / 02','Reel / 03','Arabic post','English post']},
 {id:'photo-video', title:'Photography & video', arabic:'التصوير وإنتاج الفيديو', category:'Photo & Video', intro:'Photos and videos shot in Qatar by our own crew.', items:['Food and menu photography, delivery-app photo sets','Product photos on white background','Reels and TikToks','Brand and corporate videos (60–90 seconds)','Drone footage through licensed operators'], samples:Array.from({length:12},(_,i)=>`Studio gallery / ${String(i+1).padStart(2,'0')}`)},
 {id:'branding', title:'Branding & design', arabic:'الهوية والتصميم', category:'Branding', intro:'Bilingual brands that look as good in Arabic as they do in English.', items:['Logo design (Arabic + English)','Full brand identity: colours, fonts, stationery, social templates and guidelines','Business cards','Company profiles and brochures'], samples:['Brand identity / 01','Brand identity / 02','Brand identity / 03']},
 {id:'websites', title:'Websites & e-commerce', arabic:'المواقع والمتاجر الإلكترونية', category:'Websites', intro:'Fast, bilingual websites that turn visitors into WhatsApp enquiries and orders.', items:['Landing pages for campaigns and offers','Business websites (5–7 pages)','Corporate websites with news, careers and forms','Online stores with Qatar payment gateways and delivery zones','Every site: Arabic right-to-left + English, mobile-first, Google Maps, basic SEO and a WhatsApp button'], note:'We look after your site after launch too: hosting checks, updates, backups and edits.', samples:['Business website','Online store','Corporate website','Homepage walkthrough']},
 {id:'ads', title:'Advertising', arabic:'الحملات الإعلانية', category:'Ads', intro:'Ads on Meta, Instagram, TikTok, Snapchat and Google that bring bookings, orders and leads.', items:['Pixel, conversion tracking and audience setup','Ad creatives and videos made in-house','Campaign management and weekly optimisation','Lead-based campaigns for real estate and clinics','Clear monthly results report'], samples:['Feed campaign / 01','Story campaign / 01','Feed campaign / 02','Story campaign / 02']},
 {id:'packages', title:'Packages', arabic:'باقات الأعمال', category:'Packages', intro:'The right services, brought together for your next step.', items:[], samples:[]},
];
export const packages = [
 {title:'Business Launch Kit',arabic:'انطلاقة الأعمال',text:'Brand identity, website and social media, ready from day one.'},
 {title:'E-commerce Go-Live',arabic:'إطلاق المتجر الإلكتروني',text:'An online store, product photos and launch ads.'},
 {title:'F&B Content Month',arabic:'محتوى المطاعم',text:'A food shoot, posts and Reels, menu and delivery-app photos.'},
 {title:'Company Profile + Website (B2B)',arabic:'ملف الشركة والموقع',text:'A company profile and corporate website in one design language.'},
];
export const industries = [
 {title:'Restaurants, cloud kitchens & meal plans',arabic:'المطاعم والمطابخ السحابية',text:'Food shoots, Reels, delivery-app photos and ads.'},
 {title:'Clinics, salons, spas & fitness',arabic:'الصحة والجمال واللياقة',text:'Booking websites, Google reviews, Snapchat and Meta ads.'},
 {title:'Contracting & trading (B2B)',arabic:'المقاولات والتجارة',text:'Company profiles, corporate websites and LinkedIn.'},
 {title:'Real estate',arabic:'العقارات',text:'Property videos, landing pages and lead ads.'},
 {title:'Retail going online',arabic:'التجارة الإلكترونية',text:'Online stores, product photos and launch ads.'},
];
export const steps = [
 {title:'Brief',arabic:'نفهم',text:'Tell us your business, audience and goal. We agree the direction and scope before we start.'},
 {title:'Create',arabic:'نبدع',text:'Our Doha team writes, designs and shoots. Arabic and English are part of the same idea.'},
 {title:'Review',arabic:'نراجع',text:'We check every piece first. You review the work and we refine it together before publishing.'},
 {title:'Publish and report',arabic:'ننشر ونقيس',text:'We launch the approved work, review performance and send a clear report with the next steps.'},
];
export type Project = {slug:string;title:string;arabic:string;category:string;industry:string;brief:string;made:string[];image?:string;video?:string;before?:string;after?:string;approvedResult?:string;illustrative?:boolean};
// Add only client-approved media and results. Empty media produces an explicit placeholder.
export const projects: Project[] = [
 {image:'/images/food.png',illustrative:true,slug:'food-content',title:'Food & menu photography',arabic:'تصوير الأطعمة',category:'Photo & Video',industry:industries[0].title,brief:'Show the food clearly, from the menu to the delivery app.',made:['Food shoot','Menu images','Delivery-app photo sets']},
 {image:'/images/social.png',illustrative:true,slug:'bilingual-social',title:'Bilingual social content',arabic:'محتوى بالعربية والإنجليزية',category:'Social',industry:industries[1].title,brief:'Bring a consistent Arabic and English voice to social media.',made:['Monthly calendar','Designed posts','Reels and captions']},
 {image:'/images/branding.png',illustrative:true,slug:'brand-identity',title:'Arabic & English identity',arabic:'هوية بصرية ثنائية اللغة',category:'Branding',industry:industries[2].title,brief:'Give every brand touchpoint one clear visual language.',made:['Logo and colours','Stationery','Social templates','Brochure and guidelines']},
 {image:'/images/website.png',illustrative:true,slug:'online-store',title:'E-commerce experience',arabic:'تجربة المتجر الإلكتروني',category:'Websites',industry:industries[4].title,brief:'Make browsing and ordering simple on mobile.',made:['Arabic and English store','Payment and delivery setup','Mobile experience']},
 {image:'/images/advertising.png',illustrative:true,slug:'property-campaign',title:'Property campaign',arabic:'حملة عقارية',category:'Ads',industry:industries[3].title,brief:'Connect a property story with a clear enquiry journey.',made:['Ad creatives','Landing page','Lead campaign']},
 {image:'/images/film.png',illustrative:true,slug:'brand-film',title:'Brand & corporate film',arabic:'فيلم العلامة التجارية',category:'Photo & Video',industry:industries[2].title,brief:'Tell the company story through the people and work behind it.',made:['Shoot direction','Corporate video','Social edits']},
];
export const media = { heroVideo:'', heroImage:'/images/studio.png', studioShowreel:'' };
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g,'');
export function whatsappHref(kind:'check'|'proposal'='proposal',topic='') {
 const message=kind==='check' ? 'Hello ALQA, I would like a free Digital Health Check for my Instagram, Google Business profile and website.' : `Hello ALQA, I would like to request a proposal${topic ? ` for ${topic}` : ''}.`;
 return whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : `/contact?enquiry=${kind}${topic ? `&service=${encodeURIComponent(topic)}` : ''}`;
}
