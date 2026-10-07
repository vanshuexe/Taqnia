// Dedicated, keyword-focused service landing pages at /services/[slug].
// FAQ answers describe how ALQA works; confirm each one with the team before publishing.
export type ServicePage = {
 slug:string;name:string;arabic:string;group:string;
 metaTitle:string;metaDescription:string;
 eyebrow:string;headline:string;highlight:string;intro:string;image:string;
 included:string[];examples:{title:string;text:string;image:string}[];
 faqs:{q:string;a:string}[];
 isNew?:boolean;
};

export const servicePages:ServicePage[] = [
 {
  slug:'social-media-management-qatar',name:'Social Media Management Qatar',arabic:'إدارة وسائل التواصل الاجتماعي في قطر',group:'social',
  metaTitle:'Social Media Management Qatar | Bilingual Content & Reels',
  metaDescription:'Social media management in Qatar by a Doha team with its own studio. Arabic and English posts, Reels shot locally, community replies and monthly reports.',
  eyebrow:'SOCIAL MEDIA MANAGEMENT',headline:'Social media management',highlight:'in Qatar.',
  intro:'A Doha team that plans, shoots, writes and publishes your Instagram, TikTok, Snapchat and LinkedIn content in Arabic and English, every week.',
  image:'/images/social-blue.png',
  included:['Monthly content calendar agreed before anything is published','Designed posts, carousels and Stories','Reels and TikToks shot in Qatar by our own crew','Arabic and English captions written by native writers','Community management: comments and direct messages','Hashtag, timing and profile optimisation','Ads management for boosted posts (optional)','Monthly performance report with next steps'],
  examples:[
   {title:'Restaurant launch month',text:'Teaser Reels, menu carousels and opening-week Stories, with Arabic and English captions for each post.',image:'/images/food-blue.png'},
   {title:'Clinic awareness calendar',text:'Doctor introductions, treatment explainers and patient FAQs, reviewed for tone and accuracy before posting.',image:'/images/social-blue.png'},
   {title:'Retail weekly drops',text:'Product Reels, new-arrival posts and Story links that send customers to WhatsApp or the online store.',image:'/images/product-blue.png'},
  ],
  faqs:[
   {q:'Which platforms do you manage?',a:'Instagram, TikTok, Snapchat, Facebook and LinkedIn. We recommend the platforms that suit your audience instead of being everywhere at once.'},
   {q:'Do you write in both Arabic and English?',a:'Yes. Arabic is written or checked by a native writer, so it reads naturally rather than as a translation of the English.'},
   {q:'Do I approve the content before it goes live?',a:'Yes. You see the monthly calendar first, then each batch of posts and videos before we publish.'},
   {q:'How much does social media management cost in Qatar?',a:'It depends on the platforms, the number of posts and Reels, and how many shoot days you need. Tell us your goals and we will send a clear proposal.'},
   {q:'Is ad spend included?',a:'Ad budgets are separate from management. If you want paid promotion, we agree the budget with you and report on every riyal spent.'},
  ],
 },
 {
  slug:'food-photography-doha',name:'Food Photography Doha',arabic:'تصوير الأطعمة في الدوحة',group:'photo-video',
  metaTitle:'Food Photography Doha | Menu, Delivery-App & Reels',
  metaDescription:'Food photography in Doha for restaurants, cafés and cloud kitchens. Menu photos, delivery-app sets for Talabat and Snoonu, and Reels shot by our own crew.',
  eyebrow:'FOOD PHOTOGRAPHY',headline:'Food photography',highlight:'in Doha.',
  intro:'Menu, delivery-app and social photos that make people order. Shot at your restaurant or in our Doha studio by our own crew.',
  image:'/images/food-blue.png',
  included:['Shot list planned around your menu and goals','On-location shoots at your restaurant or kitchen','Styled hero dishes and drinks','Delivery-app photo sets sized for Talabat, Snoonu and other apps','Menu and printed-material photography','Behind-the-scenes clips and Reels from the same shoot','Colour-corrected, retouched final images'],
  examples:[
   {title:'Full menu refresh',text:'Every dish shot in a consistent style, ready for the printed menu, QR menu and delivery apps.',image:'/images/food-blue.png'},
   {title:'Delivery-app photo set',text:'Clear, top-down and three-quarter shots cropped to each app’s requirements so dishes look right in the listing.',image:'/images/product-blue.png'},
   {title:'Seasonal and Ramadan campaign',text:'Iftar boxes, set menus and Eid offers shot together with short Reels for social and ads.',image:'/images/launch-blue.png'},
  ],
  faqs:[
   {q:'Do you shoot at our restaurant?',a:'Yes. Most food shoots happen on location so the kitchen can plate dishes fresh. We bring lighting, backgrounds and props.'},
   {q:'Can you shoot photos and Reels on the same day?',a:'Yes. We plan the shot list so photos and short videos come from the same session.'},
   {q:'Are the images ready for Talabat and other delivery apps?',a:'Yes. We deliver crops and sizes for each delivery app you use, as well as social and print versions.'},
   {q:'How long does a food shoot take?',a:'It depends on the number of dishes and set-ups. We confirm the schedule in your proposal so service is not disrupted.'},
   {q:'Who owns the photos?',a:'Usage rights for your business are agreed in the proposal before the shoot, so you know exactly where you can use the images.'},
  ],
 },
 {
  slug:'website-design-qatar',name:'Website Design Qatar',arabic:'تصميم المواقع الإلكترونية في قطر',group:'websites',
  metaTitle:'Website Design Qatar | Arabic & English Websites',
  metaDescription:'Website design in Qatar: fast, mobile-first Arabic and English websites and online stores with WhatsApp, Google Maps, basic SEO and Qatar payment gateways.',
  eyebrow:'WEBSITE DESIGN',headline:'Website design',highlight:'in Qatar.',
  intro:'Fast, bilingual websites that turn visitors into WhatsApp enquiries, bookings and orders, built by a team you can meet in Doha.',
  image:'/images/website-blue.png',
  included:['Arabic right-to-left and English, designed together','Mobile-first layouts that load quickly','Landing pages, business websites and corporate sites','Online stores with Qatar payment gateways and delivery zones','WhatsApp button, enquiry forms and Google Maps','Basic SEO: page titles, descriptions, sitemap and schema markup','Hosting checks, updates, backups and edits after launch'],
  examples:[
   {title:'Business website (5–7 pages)',text:'Home, services, about, work and contact pages in Arabic and English, with enquiry forms linked to WhatsApp.',image:'/images/website-blue.png'},
   {title:'Online store',text:'Product catalogue, local payment gateway, delivery zones and order notifications, ready for launch ads.',image:'/images/product-blue.png'},
   {title:'Campaign landing page',text:'A single focused page for an offer or property launch, with tracking ready for Google and Meta ads.',image:'/images/advertising-blue.png'},
  ],
  faqs:[
   {q:'Do you build Arabic and English websites?',a:'Yes. Every site we build supports Arabic right-to-left and English, designed together so both versions look intentional.'},
   {q:'Can you connect local payment gateways?',a:'Yes. Online stores can be connected to payment gateways available in Qatar, plus delivery zones and fees.'},
   {q:'Will my website appear on Google?',a:'Every site includes basic SEO: clear page titles and descriptions, a sitemap, schema markup and a Google Business profile link. Ongoing SEO content can be added.'},
   {q:'Do you look after the site after launch?',a:'Yes. We offer care plans covering hosting checks, updates, backups and content edits.'},
   {q:'How long does a website take?',a:'It depends on the number of pages, content and features. We share a timeline with milestones in your proposal.'},
  ],
 },
 {
  slug:'google-ads-management-qatar',name:'Google Ads Management Qatar',arabic:'إدارة إعلانات جوجل في قطر',group:'ads',
  metaTitle:'Google Ads Management Qatar | Search, YouTube & Performance Max',
  metaDescription:'Google Ads management in Qatar: Arabic and English Search, YouTube and Performance Max campaigns with conversion tracking, weekly optimisation and clear reports.',
  eyebrow:'GOOGLE ADS MANAGEMENT',headline:'Google Ads management',highlight:'in Qatar.',
  intro:'Search, YouTube and Performance Max campaigns that reach people in Qatar when they are ready to book, call or buy.',
  image:'/images/advertising-blue.png',
  included:['Account audit or new account setup','Arabic and English keyword research for Qatar','Search, Performance Max, YouTube and Display campaigns','Conversion tracking for calls, WhatsApp clicks, forms and purchases','Ad copy in both languages and landing-page recommendations','Weekly optimisation of bids, keywords and budgets','Clear monthly results report'],
  examples:[
   {title:'Clinic bookings',text:'Search campaigns for treatment keywords in Arabic and English, tracking calls and WhatsApp bookings.',image:'/images/advertising-blue.png'},
   {title:'Real-estate lead generation',text:'Campaigns linked to a project landing page with lead forms and qualified-lead tracking.',image:'/images/launch-blue.png'},
   {title:'E-commerce sales',text:'Performance Max and Shopping campaigns connected to the product catalogue and purchase tracking.',image:'/images/product-blue.png'},
  ],
  faqs:[
   {q:'Do you run ads in Arabic and English?',a:'Yes. People in Qatar search in both languages, so we build separate keyword lists and ads for each.'},
   {q:'Is the ad budget included in the management fee?',a:'No. Your ad budget is paid to Google separately. We agree it with you and report on how it is spent.'},
   {q:'How do you measure results?',a:'We set up conversion tracking for the actions that matter to you, such as calls, WhatsApp clicks, forms or purchases, and report on cost per result.'},
   {q:'Can you take over an existing Google Ads account?',a:'Yes. We start with an audit of your current campaigns, tracking and spend, then share what we would keep and change.'},
   {q:'Do you also manage Meta, TikTok and Snapchat ads?',a:'Yes. We often run Google alongside social ads so creative, tracking and reporting stay consistent.'},
  ],
 },
 {
  slug:'qr-digital-menu-qatar',name:'QR Digital Menus',arabic:'قوائم الطعام الرقمية QR',group:'photo-video',isNew:true,
  metaTitle:'QR Digital Menu Qatar | Arabic & English Restaurant Menus',
  metaDescription:'QR digital menus for restaurants and cafés in Qatar. Arabic and English menus with real food photos, allergens and instant price updates. No app needed.',
  eyebrow:'QR DIGITAL MENUS',headline:'QR digital menus',highlight:'for Qatar restaurants.',
  intro:'Bilingual menus your guests open with one scan. Real food photos, clear allergens and price changes you can make the same day.',
  image:'/images/food-blue.png',
  included:['Arabic and English menu, designed in your brand','Real dish photos from our food shoots','Categories, allergens, dietary tags and calorie fields','Table, counter and takeaway QR codes ready to print','Links to delivery apps, WhatsApp orders and Google reviews','Same-day menu and price updates','Works in any phone browser, no app download'],
  examples:[
   {title:'Dine-in table menu',text:'Table-specific QR codes that open a fast, photo-led menu in the guest’s chosen language.',image:'/images/food-blue.png'},
   {title:'Café counter menu',text:'A single QR on the counter and cups, linking to the menu, loyalty offer and Instagram.',image:'/images/branding-blue.png'},
   {title:'Ramadan set-menu page',text:'A seasonal menu page for iftar and suhoor boxes, shared on WhatsApp and social media.',image:'/images/launch-blue.png'},
  ],
  faqs:[
   {q:'Do guests need to download an app?',a:'No. The menu opens in the phone’s browser after scanning the QR code.'},
   {q:'Can we change prices and dishes ourselves?',a:'Yes, or send the change to us on WhatsApp and we update it for you.'},
   {q:'Is the menu in Arabic and English?',a:'Yes. Guests can switch between Arabic and English, and Arabic displays right-to-left.'},
   {q:'Can the menu link to ordering?',a:'Yes. Each dish or the whole menu can link to your delivery-app listings or a WhatsApp order message.'},
   {q:'Do you photograph the dishes?',a:'We can. A food shoot gives the menu consistent, appetising photos that also work on delivery apps and social media.'},
  ],
 },
 {
  slug:'whatsapp-business-setup-qatar',name:'WhatsApp Business Setup',arabic:'إعداد واتساب للأعمال',group:'social',isNew:true,
  metaTitle:'WhatsApp Business Setup Qatar | Catalogue, Replies & API',
  metaDescription:'WhatsApp Business setup in Qatar: business profile, catalogue, quick replies, greeting messages, labels and click-to-WhatsApp ads, in Arabic and English.',
  eyebrow:'WHATSAPP BUSINESS SETUP',headline:'WhatsApp Business,',highlight:'set up properly.',
  intro:'Most customers in Qatar would rather message than call. We set up WhatsApp so every enquiry gets a fast, professional answer in Arabic or English.',
  image:'/images/social-blue.png',
  included:['WhatsApp Business profile: logo, hours, location and description','Product or service catalogue with photos and prices','Greeting, away and quick-reply messages in Arabic and English','Labels to organise new enquiries, orders and follow-ups','QR codes and links for your website, menu and social profiles','Click-to-WhatsApp ads on Instagram and Facebook','WhatsApp Business Platform (API) guidance for larger teams'],
  examples:[
   {title:'Restaurant ordering',text:'A catalogue of dishes, quick replies for delivery areas and an away message with opening hours.',image:'/images/food-blue.png'},
   {title:'Clinic bookings',text:'Greeting messages that ask for the treatment and preferred time, with labels for confirmed appointments.',image:'/images/social-blue.png'},
   {title:'Retail enquiries',text:'A product catalogue linked from Instagram, with quick replies for sizes, stock and delivery.',image:'/images/product-blue.png'},
  ],
  faqs:[
   {q:'What is the difference between the WhatsApp Business app and the API?',a:'The app suits small teams on one or a few phones. The WhatsApp Business Platform (API) suits larger teams that need shared inboxes, automation and integrations. We help you choose.'},
   {q:'Can you set up replies in Arabic and English?',a:'Yes. Greeting, away and quick-reply messages are written in both languages by native writers.'},
   {q:'Can WhatsApp connect to our ads?',a:'Yes. Click-to-WhatsApp ads on Instagram and Facebook open a chat with your business directly.'},
   {q:'Can it answer questions automatically?',a:'Yes. Basic automated replies are included. For full conversations, see our AI receptionist and chatbot service.'},
  ],
 },
 {
  slug:'google-business-profile-management-qatar',name:'Google Business Profile Management',arabic:'إدارة الملف التجاري على جوجل',group:'ads',isNew:true,
  metaTitle:'Google Business Profile Management Qatar | Google Maps & Reviews',
  metaDescription:'Google Business Profile management in Qatar. Appear on Google Maps with accurate details, professional photos, bilingual posts and review replies.',
  eyebrow:'GOOGLE BUSINESS PROFILE',headline:'Be found on',highlight:'Google Maps.',
  intro:'When people in Qatar search “near me”, your Google Business profile is often the first thing they see. We set it up properly and keep it active.',
  image:'/images/branding-blue.png',
  included:['Profile setup or claim and verification support','Correct categories, services, hours and service areas','Professional photos of your venue, team and products','Arabic and English descriptions','Regular Google posts for offers and updates','Review replies and a review QR card for your counter','Monthly insights: calls, direction requests and website clicks'],
  examples:[
   {title:'Restaurant profile refresh',text:'New food and interior photos, menu link, booking link and replies to recent reviews.',image:'/images/food-blue.png'},
   {title:'Clinic multi-service profile',text:'Every treatment listed as a service, with bilingual descriptions and a review request card.',image:'/images/branding-blue.png'},
   {title:'New business launch',text:'Verification support, opening posts and photos so the profile looks established from day one.',image:'/images/launch-blue.png'},
  ],
  faqs:[
   {q:'Can you help verify our Google Business profile?',a:'Yes. We prepare the profile and guide you through Google’s verification steps.'},
   {q:'Do you reply to reviews for us?',a:'Yes, with replies in the reviewer’s language that match your brand voice. Sensitive reviews are agreed with you first.'},
   {q:'Can you get us more reviews?',a:'We give you a review QR card and a simple process to ask happy customers. We never buy or fake reviews.'},
   {q:'Will this help us rank on Google Maps?',a:'Complete, accurate and active profiles tend to perform better in local search, but no one can guarantee a ranking position.'},
  ],
 },
 {
  slug:'ai-chatbot-receptionist-qatar',name:'AI Receptionist & Chatbot',arabic:'موظف استقبال ذكي ومساعد محادثة',group:'websites',isNew:true,
  metaTitle:'AI Receptionist & Chatbot Qatar | Arabic & English, 24/7',
  metaDescription:'An AI receptionist and chatbot for Qatar businesses. Answers questions on WhatsApp, Instagram and your website in Arabic and English, captures bookings and hands off to your team.',
  eyebrow:'AI RECEPTIONIST & CHATBOT',headline:'An AI receptionist',highlight:'that never sleeps.',
  intro:'Answer common questions, capture bookings and collect leads on WhatsApp, Instagram and your website, in Arabic and English, at any hour.',
  image:'/images/website-blue.png',
  included:['Trained on your services, prices, menu, hours and policies','Arabic and English conversations','Website chat, WhatsApp and Instagram direct messages','Booking and lead capture sent to your team','Clear hand-off to a person for anything it cannot answer','Conversation review and monthly improvements','Setup that respects customer privacy and data protection'],
  examples:[
   {title:'Clinic front desk',text:'Answers treatment and timing questions, collects patient details and passes booking requests to reception.',image:'/images/social-blue.png'},
   {title:'Restaurant reservations',text:'Shares the menu, opening hours and location, takes table requests and confirms them with the team.',image:'/images/food-blue.png'},
   {title:'Real-estate enquiries',text:'Qualifies leads by area, budget and timing, then sends a summary to the right agent.',image:'/images/advertising-blue.png'},
  ],
  faqs:[
   {q:'Does it speak Arabic?',a:'Yes. It replies in Arabic or English depending on how the customer writes, and we review its answers in both languages.'},
   {q:'What happens if it does not know the answer?',a:'It tells the customer a team member will follow up and sends the conversation to your staff. It should not guess.'},
   {q:'Which channels does it work on?',a:'Your website chat, WhatsApp and Instagram direct messages. Other channels can be discussed.'},
   {q:'Is customer data kept private?',a:'We agree what data is collected and where it is stored before launch, in line with Qatar’s personal data protection law.'},
  ],
 },
];

export const getServicePage = (slug:string)=>servicePages.find(s=>s.slug===slug);
// Links each broad service on /services to its dedicated landing page.
export const serviceLanding:Record<string,string> = {social:'social-media-management-qatar','photo-video':'food-photography-doha',websites:'website-design-qatar',ads:'google-ads-management-qatar'};
