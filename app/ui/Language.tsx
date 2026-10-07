'use client';
import {Children,cloneElement,createContext,isValidElement,useContext,useEffect,useState,type ReactNode,type ReactElement} from 'react';
import {services,packages,industries,steps,projects} from '../content';
import {servicePages} from '../service-pages';
type Locale='en'|'ar';
const LanguageContext=createContext<{locale:Locale;setLocale:(locale:Locale)=>void}>({locale:'en',setLocale:()=>{}});
const translations:Record<string,string>=Object.fromEntries([
 ...services,...packages,...industries,...steps,...projects,
].map(item=>[item.title,item.arabic]).concat(servicePages.map(item=>[item.name,item.arabic])));
const copy=`
Home|الرئيسية
Our Work|أعمالنا
Services|خدماتنا
How We Work|كيف نعمل
Contact|تواصل معنا
Our services|خدماتنا
Let’s talk|لنتحدث
Skip to content|انتقل إلى المحتوى
Main navigation|القائمة الرئيسية
ALQA home|الرئيسية — ألقا
Open menu|فتح القائمة
Close menu|إغلاق القائمة
Choose language|اختر اللغة
Digital Ideas.|أفكار رقمية.
Real Results.|نتائج حقيقية.
Digital Ideas. Real Results.|أفكار رقمية. نتائج حقيقية.
Digital ideas.|أفكار رقمية.
Real results.|نتائج حقيقية.
DOHA, QATAR|الدوحة، قطر
A Doha team with its own production studio.|فريق في الدوحة يمتلك استوديو إنتاج خاصاً به.
Arabic and English. From the first idea to the final frame.|بالعربية والإنجليزية، من الفكرة الأولى إلى اللقطة الأخيرة.
Request a proposal|اطلب عرضاً
Get a free Digital Health Check|احصل على تقييم رقمي مجاني
See our work|شاهد أعمالنا
OUR WORK|أعمالنا
Let the work|دع الأعمال
speak.|تتحدث.
Explore all work|استكشف جميع الأعمال
Explore our services through illustrative concepts. Client-approved case studies will be added next.|استكشف خدماتنا من خلال نماذج توضيحية. سنضيف لاحقاً دراسات حالة معتمدة من العملاء.
Illustrative visual|صورة توضيحية
WHAT WE DO|ما نقدمه
Your next move,|خطوتك القادمة،
made here.|نصنعها هنا.
Content your customers stop scrolling for, in Arabic and English, every week.|محتوى يجذب انتباه عملائك، بالعربية والإنجليزية، كل أسبوع.
Photos and videos shot in Qatar by our own crew.|صور وفيديوهات يصورها فريقنا في قطر.
Bilingual brands that look as good in Arabic as they do in English.|هويات ثنائية اللغة تبدو مميزة بالعربية والإنجليزية.
Fast, bilingual websites that turn visitors into WhatsApp enquiries and orders.|مواقع سريعة ثنائية اللغة تحوّل الزوار إلى استفسارات وطلبات عبر واتساب.
Ads on Meta, Instagram, TikTok, Snapchat and Google that bring bookings, orders and leads.|إعلانات على ميتا وإنستغرام وتيك توك وسناب شات وجوجل تجلب الحجوزات والطلبات والعملاء المحتملين.
The right services, brought together for your next step.|الخدمات المناسبة، مجتمعة لخطوتك القادمة.
Our quality promise|وعدنا بالجودة
Native Arabic|عربية أصيلة
Every Arabic line written or checked by a native writer.|كل نص عربي يكتبه أو يراجعه كاتب لغته الأم العربية.
Shot in Qatar|إنتاج في قطر
Our own local crew for commissioned shoots.|فريقنا المحلي ينفذ جلسات التصوير المطلوبة.
Reviewed before you see it|نراجع العمل قبل عرضه عليك
Every piece passes our quality check first.|كل عمل يمر بمراجعة الجودة أولاً.
Fast replies|ردود سريعة
A real person on WhatsApp. A team you can meet in Doha.|شخص حقيقي يرد عبر واتساب، وفريق يمكنك مقابلته في الدوحة.
BUILT AROUND YOUR BUSINESS|مصمم لأعمالك
Local knowledge.|معرفة محلية.
Work that fits.|عمل يناسبك.
Food shoots, Reels, delivery-app photos and ads.|تصوير الأطعمة والريلز وصور تطبيقات التوصيل والإعلانات.
Booking websites, Google reviews, Snapchat and Meta ads.|مواقع للحجز وتقييمات جوجل وإعلانات سناب شات وميتا.
Company profiles, corporate websites and LinkedIn.|ملفات الشركات ومواقع الأعمال ولينكدإن.
Property videos, landing pages and lead ads.|فيديوهات العقارات وصفحات الهبوط وإعلانات العملاء المحتملين.
Online stores, product photos and launch ads.|متاجر إلكترونية وصور منتجات وإعلانات الإطلاق.
Explore work|استكشف الأعمال
HOW WE WORK|كيف نعمل
Clear steps.|خطوات واضحة.
Better work.|أعمال أفضل.
Meet the process|تعرف على طريقتنا
Tell us your business, audience and goal. We agree the direction and scope before we start.|أخبرنا عن نشاطك وجمهورك وهدفك. نتفق على الاتجاه والنطاق قبل البدء.
Our Doha team writes, designs and shoots. Arabic and English are part of the same idea.|فريقنا في الدوحة يكتب ويصمم ويصور. العربية والإنجليزية جزء من الفكرة نفسها.
We check every piece first. You review the work and we refine it together before publishing.|نراجع كل عمل أولاً، ثم تراجعه معنا ونطوره معاً قبل النشر.
We launch the approved work, review performance and send a clear report with the next steps.|نطلق العمل المعتمد ونراجع الأداء ونرسل تقريراً واضحاً بالخطوات التالية.
A FRESH LOOK AT YOUR DIGITAL PRESENCE|نظرة جديدة إلى حضورك الرقمي
Three fixes.|ثلاثة تحسينات.
A clearer next step.|خطوة قادمة أوضح.
We review your Instagram, Google Business profile and website, and send you a short video with 3 fixes. Free, no obligation.|نراجع حساب إنستغرام وملف نشاطك على جوجل وموقعك، ونرسل فيديو قصيراً يتضمن ثلاثة تحسينات. مجاناً، دون التزام.
Get my free check|احصل على تقييمي المجاني
EXPLORE|استكشف
LET’S CONNECT|لنتواصل
Contact our Doha team|تواصل مع فريقنا في الدوحة
Request a proposal ↗|اطلب عرضاً ↗
Free Digital Health Check ↗|تقييم رقمي مجاني ↗
© 2026 ALQA. All rights reserved.|© 2026 ألقا. جميع الحقوق محفوظة.
Back to top ↑|العودة إلى الأعلى ↑
Made in Doha.|صنع في الدوحة.
Made to connect.|صنع للتواصل.
Social content, studio shoots, bilingual brands and digital experiences.|محتوى اجتماعي وتصوير في الاستوديو وهويات ثنائية اللغة وتجارب رقمية.
These illustrative concepts show our service areas and creative direction. They are not completed client projects.|تعرض هذه النماذج التوضيحية مجالات خدماتنا واتجاهنا الإبداعي، وهي ليست مشاريع مكتملة للعملاء.
All|الكل
Social|التواصل الاجتماعي
Photo & Video|التصوير والفيديو
Branding|الهوية
Websites|المواقع
Ads|الإعلانات
Industry|القطاع
Filter work by service|تصفية الأعمال حسب الخدمة
work categories|فئات الأعمال
Restaurants|المطاعم
Clinics|العيادات
More work is on its way.|المزيد من الأعمال قريباً.
No approved samples are available for this combination yet.|لا تتوفر نماذج معتمدة لهذه الخيارات حتى الآن.
Show all categories|عرض جميع الفئات
Loading work…|جارٍ تحميل الأعمال…
SERVICES|خدماتنا
One local team.|فريق محلي واحد.
Everything you need.|كل ما تحتاجه.
Arabic and English, created together. Explore the work, then tell us what you have in mind.|نبدع بالعربية والإنجليزية معاً. استكشف الأعمال ثم أخبرنا بما تفكر فيه.
Service sections|أقسام الخدمات
What we build|ما نبنيه
What we shoot|ما نصوره
What’s included|ما تتضمنه الخدمة
Advertising platforms|منصات الإعلانات
Monthly content calendar and designed posts|تقويم محتوى شهري ومنشورات مصممة
Reels and TikToks, shot in Qatar|ريلز وفيديوهات تيك توك مصورة في قطر
Stories and community replies|قصص وردود على الجمهور
Bilingual captions written by native writers|نصوص ثنائية اللغة يكتبها كتّاب بلغتهم الأم
Ads management (optional)|إدارة الإعلانات (اختيارية)
Monthly performance report|تقرير أداء شهري
Food and menu photography, delivery-app photo sets|تصوير الأطعمة والقوائم ومجموعات صور لتطبيقات التوصيل
Product photos on white background|صور منتجات بخلفية بيضاء
Reels and TikToks|ريلز وفيديوهات تيك توك
Brand and corporate videos (60–90 seconds)|فيديوهات للعلامات والشركات (٦٠–٩٠ ثانية)
Drone footage through licensed operators|تصوير جوي عبر مشغلين مرخصين
Logo design (Arabic + English)|تصميم شعار بالعربية والإنجليزية
Full brand identity: colours, fonts, stationery, social templates and guidelines|هوية متكاملة: ألوان وخطوط ومطبوعات وقوالب اجتماعية ودليل استخدام
Business cards|بطاقات أعمال
Company profiles and brochures|ملفات شركات وكتيبات
Landing pages for campaigns and offers|صفحات هبوط للحملات والعروض
Business websites (5–7 pages)|مواقع أعمال (٥–٧ صفحات)
Corporate websites with news, careers and forms|مواقع شركات تتضمن الأخبار والوظائف والنماذج
Online stores with Qatar payment gateways and delivery zones|متاجر إلكترونية ببوابات دفع قطرية ومناطق توصيل
Every site: Arabic right-to-left + English, mobile-first, Google Maps, basic SEO and a WhatsApp button|كل موقع: عربية من اليمين إلى اليسار وإنجليزية، تصميم للجوال، خرائط جوجل، تهيئة أساسية لمحركات البحث وزر واتساب
We look after your site after launch too: hosting checks, updates, backups and edits.|نعتني بموقعك بعد الإطلاق أيضاً: فحص الاستضافة والتحديثات والنسخ الاحتياطية والتعديلات.
Pixel, conversion tracking and audience setup|إعداد البكسل وتتبع التحويلات والجمهور
Ad creatives and videos made in-house|تصاميم وفيديوهات إعلانية ينتجها فريقنا
Campaign management and weekly optimisation|إدارة الحملات وتحسينها أسبوعياً
Lead-based campaigns for real estate and clinics|حملات لجذب العملاء المحتملين للعقارات والعيادات
Clear monthly results report|تقرير شهري واضح للنتائج
Brand identity, website and social media, ready from day one.|هوية وموقع وتواصل اجتماعي جاهزة من اليوم الأول.
An online store, product photos and launch ads.|متجر إلكتروني وصور منتجات وإعلانات إطلاق.
A food shoot, posts and Reels, menu and delivery-app photos.|جلسة تصوير أطعمة ومنشورات وريلز وصور قوائم وتطبيقات التوصيل.
A company profile and corporate website in one design language.|ملف شركة وموقع مؤسسي بلغة تصميم واحدة.
Google Business profile setup|إعداد ملف النشاط التجاري على جوجل
Photos, Arabic and English descriptions, and a review QR card.|صور وأوصاف بالعربية والإنجليزية وبطاقة رمز QR للتقييمات.
Your brief.|رؤيتك.
Our shared direction.|اتجاهنا المشترك.
A team you can meet in Doha. A clear process from the first conversation to the monthly report.|فريق يمكنك مقابلته في الدوحة، وخطوات واضحة من الحوار الأول إلى التقرير الشهري.
CONTACT|تواصل معنا
Let’s talk about|لنتحدث عن
your next step.|خطوتك القادمة.
Tell us your business, what you need and when you’d like to start.|أخبرنا عن نشاطك واحتياجاتك وموعد البدء المناسب لك.
Start on WhatsApp|ابدأ عبر واتساب
Talk to a real person. Request a proposal or ask for a free Digital Health Check.|تحدث مع شخص حقيقي. اطلب عرضاً أو تقييماً رقمياً مجانياً.
Our WhatsApp contact details are being updated. Please check back soon.|نعمل على تحديث بيانات التواصل عبر واتساب. يرجى العودة قريباً.
← All work|← جميع الأعمال
The brief|المطلوب
What we create|ما نبدعه
What we made|ما أنجزناه
The result|النتيجة
Show the food clearly, from the menu to the delivery app.|عرض الأطعمة بوضوح، من قائمة الطعام إلى تطبيق التوصيل.
Bring a consistent Arabic and English voice to social media.|تقديم صوت متسق بالعربية والإنجليزية على وسائل التواصل.
Give every brand touchpoint one clear visual language.|منح كل نقطة تواصل مع العلامة لغة بصرية واضحة وموحدة.
Make browsing and ordering simple on mobile.|تسهيل التصفح والطلب عبر الجوال.
Connect a property story with a clear enquiry journey.|ربط قصة العقار بمسار واضح للاستفسار.
Tell the company story through the people and work behind it.|سرد قصة الشركة من خلال فريقها وأعمالها.
Food shoot|تصوير الأطعمة
Menu images|صور القائمة
Delivery-app photo sets|مجموعات صور لتطبيقات التوصيل
Monthly calendar|تقويم شهري
Designed posts|منشورات مصممة
Reels and captions|ريلز ونصوص
Logo and colours|الشعار والألوان
Stationery|المطبوعات
Social templates|قوالب التواصل الاجتماعي
Brochure and guidelines|كتيب ودليل استخدام
Arabic and English store|متجر بالعربية والإنجليزية
Payment and delivery setup|إعداد الدفع والتوصيل
Mobile experience|تجربة الجوال
Ad creatives|التصاميم الإعلانية
Landing page|صفحة هبوط
Lead campaign|حملة لجذب العملاء المحتملين
Shoot direction|إخراج التصوير
Corporate video|فيديو مؤسسي
Social edits|مونتاج للتواصل الاجتماعي
This is an illustrative concept for this service. It is not a completed client project.|هذا نموذج توضيحي لهذه الخدمة، وليس مشروعاً مكتملاً لعميل.
Before|قبل
After|بعد
Compare before and after|قارن قبل وبعد
Before the project|قبل المشروع
After the project|بعد المشروع
Creative production studio|استوديو إنتاج إبداعي
Our Doha production studio|استوديو الإنتاج في الدوحة
Production studio concept|تصور لاستوديو الإنتاج
Behind the scenes at ALQA|خلف الكواليس في ألقا
Meet our Doha team|تعرف على فريقنا في الدوحة
Instagram grid|شبكة إنستغرام
Arabic post|منشور عربي
English post|منشور إنجليزي
Business website|موقع أعمال
Online store|متجر إلكتروني
Corporate website|موقع شركة
Homepage walkthrough|استعراض الصفحة الرئيسية
Meta|ميتا
Instagram|إنستغرام
TikTok|تيك توك
Snapchat|سناب شات
Google|جوجل
illustrative concept visual|صورة نموذج توضيحي
Retail going online|التجارة الإلكترونية
Contracting & trading (B2B)|المقاولات والتجارة
Real estate|العقارات
ALQA|ألقا
Blog|المدونة
BLOG|المدونة
SERVICES|الخدمات
Start a project|ابدأ مشروعك
START A PROJECT|ابدأ مشروعك
Tell us what|أخبرنا بما
you have in mind.|يدور في ذهنك.
A few details are enough. A real person from our Doha team will reply with next steps or a proposal.|بعض التفاصيل تكفي. سيرد عليك شخص حقيقي من فريقنا في الدوحة بالخطوات التالية أو بعرض.
Your name|الاسم
Business name|اسم النشاط التجاري
Phone / WhatsApp|الهاتف / واتساب
Email|البريد الإلكتروني
What do you need?|ما الذي تحتاجه؟
Choose a service|اختر خدمة
When would you like to start?|متى تود أن تبدأ؟
Choose a timeline|اختر موعداً
As soon as possible|في أقرب وقت
Within a month|خلال شهر
In 1–3 months|خلال ١–٣ أشهر
Just exploring|أستكشف الخيارات فقط
A package|باقة
Not sure yet|لست متأكداً بعد
Tell us a little about the project|أخبرنا قليلاً عن المشروع
Add a phone number or email so we can reply.|أضف رقم هاتف أو بريداً إلكترونياً لنتمكن من الرد.
Send my project details|أرسل تفاصيل مشروعي
Sending…|جارٍ الإرسال…
Thank you.|شكراً لك.
Almost there.|اقتربنا.
Continue on WhatsApp|تابع عبر واتساب
Send on WhatsApp instead|أرسل عبر واتساب بدلاً من ذلك
Please add your name.|يرجى إضافة اسمك.
Please add a phone/WhatsApp number or an email so we can reply.|يرجى إضافة رقم هاتف/واتساب أو بريد إلكتروني لنتمكن من الرد.
Please check your email address.|يرجى التحقق من بريدك الإلكتروني.
Please check your phone number.|يرجى التحقق من رقم هاتفك.
Our Doha team has your details and will be in touch soon.|وصلت تفاصيلك إلى فريقنا في الدوحة وسنتواصل معك قريباً.
Our online form is being connected. Send these details to us on WhatsApp and we will reply there.|نعمل على ربط النموذج الإلكتروني. أرسل هذه التفاصيل عبر واتساب وسنرد عليك هناك.
Our online form is being connected. Please check back soon.|نعمل على ربط النموذج الإلكتروني. يرجى العودة قريباً.
Something went wrong sending your details. Please try again or message us on WhatsApp.|حدث خطأ أثناء إرسال التفاصيل. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب.
Fill in the project form|املأ نموذج المشروع
TRUSTED BY BUSINESSES IN QATAR|موثوق من شركات في قطر
Clients we work with|عملاؤنا
SPECIALIST SERVICES|خدمات متخصصة
Find the right|اختر الخدمة
service for you.|المناسبة لك.
New|جديد
Google Business profile management|إدارة الملف التجاري على جوجل
WHAT’S INCLUDED|ما تشمله الخدمة
Everything handled|كل شيء ينفذه
by one Doha team.|فريق واحد في الدوحة.
EXAMPLES|أمثلة
What this|كيف يمكن
can look like.|أن يبدو العمل.
These examples describe typical projects with illustrative visuals. They are not completed client projects.|تصف هذه الأمثلة مشاريع نموذجية بصور توضيحية، وليست مشاريع منجزة لعملاء.
FAQ|الأسئلة الشائعة
Questions about|أسئلة حول
FROM THE BLOG|من المدونة
MORE FROM THE BLOG|المزيد من المدونة
RELATED SERVICES|خدمات ذات صلة
Breadcrumb|مسار التنقل
Ideas for growing|أفكار للنمو
in Qatar.|في قطر.
Practical guides on social media, photography, websites and advertising, written by our Doha team.|أدلة عملية حول التواصل الاجتماعي والتصوير والمواقع والإعلانات، يكتبها فريقنا في الدوحة.
Read the article|اقرأ المقال
Frequently asked questions|الأسئلة الشائعة
CLIENT CASE STUDY|دراسة حالة لعميل
The challenge|التحدي
Our approach|نهجنا
Results|النتائج
`;
for(const line of copy.trim().split('\n')){const [key,value]=line.split('|');translations[key]=value;}
function translate(text:string,locale:Locale):string{
 const trimmed=text.trim();
 // Existing bilingual eyebrows become one label; duplicate Arabic nodes are removed below.
 const clean=trimmed.replace(/\s*\/\s*[\u0600-\u06ff].*$/,'');
 if(locale==='en')return text.replace(trimmed,clean);
 if(translations[clean])return text.replace(trimmed,translations[clean]);
 if(clean.includes(' — '))return clean.split(' — ').map(part=>translate(part,locale)).join(' — ');
 if(clean.includes(' / '))return clean.split(' / ').map(part=>translate(part,locale)).join(' / ');
 const sample=clean.match(/^(Studio gallery|Reel|Brand identity|Feed campaign|Story campaign)(.*)$/);
 if(sample)return ({'Studio gallery':'معرض الاستوديو',Reel:'ريلز','Brand identity':'الهوية البصرية','Feed campaign':'حملة المنشورات','Story campaign':'حملة القصص'} as Record<string,string>)[sample[1]]+sample[2];
 return text;
}
export function LanguageProvider({children}:{children:ReactNode}){
 const [locale,setLocale]=useState<Locale>('en');
 const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem('alqa-language');if(saved==='ar'||saved==='en')setLocale(saved);}catch{}setReady(true);},[]);
 useEffect(()=>{if(!ready)return;document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';try{localStorage.setItem('alqa-language',locale);}catch{}},[locale,ready]);
 return <LanguageContext.Provider value={{locale,setLocale}}>{children}</LanguageContext.Provider>;
}
export function LanguageSelector(){const {locale,setLocale}=useContext(LanguageContext);return <label className="language-picker"><span className="sr-only">{translate('Choose language',locale)}</span><select aria-label={translate('Choose language',locale)} value={locale} onChange={event=>setLocale(event.target.value as Locale)}><option value="en">English</option><option value="ar">العربية</option></select></label>;}
export function Localized({children}:{children:ReactNode}){
 const {locale}=useContext(LanguageContext);
 function localize(node:ReactNode):ReactNode{
  if(typeof node==='string')return translate(node,locale);
  if(!isValidElement(node))return node;
  const element=node as ReactElement<Record<string,unknown>>;
  const props=element.props;
  if(props.lang==='ar'||String(props.className??'').split(' ').includes('arabic'))return null;
  const next:Record<string,unknown>={};
  for(const attr of ['alt','aria-label','title'])if(typeof props[attr]==='string')next[attr]=translate(props[attr] as string,locale);
  if('children' in props)next.children=Children.map(props.children as ReactNode,localize);
  return cloneElement(element,next);
 }
 return <>{Children.map(children,localize)}</>;
}
