// Blog posts for /blog. Add new posts to the top of the list (target: two per month).
// Body blocks: {h2}, {p}, {ul} or {cta}. Keep claims general unless backed by approved data.
export type Block = {h2:string}|{p:string}|{ul:string[]}|{cta:string};
export type Post = {slug:string;title:string;description:string;date:string;updated?:string;readMinutes:number;image:string;tags:string[];service?:string;body:Block[];faqs?:{q:string;a:string}[]};

export const posts:Post[] = [
 {
  slug:'best-time-to-post-in-qatar-during-ramadan',
  title:'Best time to post in Qatar during Ramadan',
  description:'How daily routines in Qatar shift during Ramadan, when audiences are most active on social media, and how to plan posts, Reels and ads around iftar and suhoor.',
  date:'2026-10-05',readMinutes:6,image:'/images/launch-blue.png',tags:['Social media','Ramadan','Qatar'],service:'social-media-management-qatar',
  body:[
   {p:'Ramadan changes the rhythm of the whole day in Qatar. Working hours are shorter, evenings become the busiest part of the day and many people stay up late. Social media habits move with them, so a posting schedule that works for the rest of the year can miss your audience completely.'},
   {p:'Below is a practical guide to timing your content during the holy month. Treat it as a starting point: your own Instagram, TikTok and Snapchat insights are always the final word for your audience.'},
   {h2:'How the day changes during Ramadan'},
   {ul:['Suhoor: a pre-dawn meal, often followed by a short scroll before sleep.','Daytime: shorter office hours and fasting mean lower energy and lighter browsing, mostly around midday breaks.','Before iftar: people plan meals, order food and check offers.','Iftar: families eat together and phones are mostly put down.','After iftar and taraweeh: visiting, shopping, watching series and scrolling, often until late at night.']},
   {h2:'The best times to post'},
   {p:'Across most consumer audiences in Qatar, the strongest windows during Ramadan are:'},
   {ul:['After iftar, from roughly an hour after sunset into the late evening: the main window for Reels, carousels and offers.','Late night, before suhoor: high attention for entertainment, food and shopping content.','The hour before iftar: good for food delivery, iftar boxes and last-minute offers, as people decide what to order.']},
   {p:'Daytime posts still reach people, especially B2B audiences on LinkedIn during shortened office hours, but expect lower engagement for most consumer brands.'},
   {h2:'Times to avoid'},
   {p:'Avoid publishing important content right at iftar, when most people are eating with family. Posting during prayer times is also best avoided out of respect, and engagement is naturally low.'},
   {h2:'What to post during Ramadan'},
   {ul:['Iftar and suhoor offers, set menus and family boxes.','Behind-the-scenes Reels: preparing food, packing orders, your team at work.','Ramadan greetings that feel genuine and avoid hard selling.','Community and charity initiatives your business supports.','Countdown and gift content in the last ten nights, leading into Eid.']},
   {p:'Write in both Arabic and English, with Arabic written natively rather than translated. Ramadan is a time when tone matters: warm, respectful and family-focused works better than loud promotion.'},
   {h2:'Plan ahead, then watch your data'},
   {p:'Prepare and shoot your Ramadan content before the month begins, so your team is not producing under pressure. Schedule posts for the evening windows, then check your insights after the first week and adjust. The last ten nights and Eid often behave differently from the first week.'},
   {cta:'Want a Ramadan content calendar planned and shot in Doha?'},
  ],
  faqs:[
   {q:'What is the best time to post on Instagram in Qatar during Ramadan?',a:'For most consumer brands, the strongest window is after iftar and into the late evening, with a second window late at night before suhoor. Check your own Instagram insights to confirm.'},
   {q:'Should we post during the day in Ramadan?',a:'You can, especially for B2B audiences, but most consumer engagement moves to the evening. Keep daytime posts light and save key launches for after iftar.'},
   {q:'When should Ramadan content be prepared?',a:'Ideally several weeks before Ramadan begins, so shoots, captions and approvals are finished before the month starts.'},
  ],
 },
 {
  slug:'social-media-management-cost-qatar',
  title:'How much does social media management cost in Qatar?',
  description:'What affects the cost of social media management in Qatar, how freelancers, agencies and in-house teams compare, and what to ask before you sign a proposal.',
  date:'2026-10-01',readMinutes:7,image:'/images/social-blue.png',tags:['Social media','Pricing','Qatar'],service:'social-media-management-qatar',
  body:[
   {p:'It is one of the first questions every business owner asks, and the honest answer is: it depends on what you need. Two proposals with very different prices can both be fair, because they cover very different amounts of work.'},
   {p:'This guide explains what drives the cost of social media management in Qatar, so you can compare proposals properly and choose the right level of support.'},
   {h2:'What affects the cost'},
   {ul:['Platforms: managing Instagram only is very different from Instagram, TikTok, Snapchat and LinkedIn together.','Volume: the number of posts, carousels, Stories and Reels each month.','Video and photography: original content shot in Qatar takes crew, equipment and editing time. Stock images and templates cost less but look generic.','Language: bilingual Arabic and English content, written natively, takes more work than one language.','Community management: replying to comments and messages daily, especially in both languages.','Advertising: managing paid campaigns is usually priced separately from organic content, and ad spend is always separate.','Reporting and strategy: monthly reports, competitor reviews and planning meetings.']},
   {h2:'Freelancer, agency or in-house?'},
   {p:'A freelancer can be a good fit for one platform and a simple content plan. An in-house hire gives you someone dedicated, but you carry salary, equipment and training, and one person rarely covers design, video, Arabic and English writing and ads equally well.'},
   {p:'An agency brings a full team: strategy, photography and video, design, copywriting in both languages and ads, usually for less than the cost of hiring each role. The trade-off is that you share the team with other clients, so clear processes and response times matter.'},
   {h2:'What should be included in a proposal'},
   {ul:['The exact platforms and number of posts, Reels and Stories per month.','How many shoot days or hours are included, and where they happen.','Who writes the Arabic and the English.','Whether community management is included, and during which hours.','How approvals work before anything is published.','What the monthly report covers.','Contract length and notice period.']},
   {h2:'Questions to ask before you sign'},
   {ul:['Can I see work you have produced for businesses like mine?','Who will actually work on my account?','Is the content original, or based on templates and stock images?','Who owns the photos and videos you shoot for us?','How do you measure success, beyond likes and followers?']},
   {h2:'The cheapest option is rarely the best value'},
   {p:'Low-cost packages often rely on templates, stock photos and machine-translated Arabic. Customers in Qatar notice. Content that looks local, sounds natural in Arabic and is shot in your own venue builds trust faster, which matters more than the number of posts.'},
   {p:'The best way to know the cost for your business is to get a proposal based on your goals. Tell us your platforms, the content you need and when you want to start, and we will send a clear, itemised proposal.'},
   {cta:'Get a social media proposal for your business'},
  ],
  faqs:[
   {q:'Is ad spend included in social media management fees?',a:'Usually not. Management covers content and campaign work; the advertising budget is paid to the platforms separately.'},
   {q:'Why do social media management prices in Qatar vary so much?',a:'Proposals differ in platforms, volume, original photography and video, bilingual writing, community management and ads. Compare what is included, not only the price.'},
   {q:'Do I need Arabic and English content?',a:'For most businesses in Qatar, yes. Bilingual content reaches both Arabic-speaking and English-speaking customers, and Arabic should be written natively rather than translated.'},
  ],
 },
];

export const getPost = (slug:string)=>posts.find(p=>p.slug===slug);
export const formatDate = (date:string)=>new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
