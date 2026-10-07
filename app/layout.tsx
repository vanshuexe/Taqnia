import type {Metadata} from 'next';
import {Header,Footer} from './ui/Site';
import './globals.css';
import {LanguageProvider,Localized} from './ui/Language';
import JsonLd from './ui/JsonLd';
import {siteUrl,siteTitle,siteDescription,localBusinessSchema} from './site';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:siteTitle,template:'%s | ALQA'},description:siteDescription,applicationName:'ALQA',keywords:['digital marketing agency Qatar','social media management Qatar','food photography Doha','website design Qatar','Google Ads Qatar','production studio Doha'],openGraph:{type:'website',siteName:'ALQA',locale:'en_QA',alternateLocale:['ar_QA'],title:siteTitle,description:siteDescription,url:'/'},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><JsonLd data={localBusinessSchema()}/><LanguageProvider><Header/><main id="main"><Localized>{children}</Localized></main><Footer/></LanguageProvider></body></html>;}
