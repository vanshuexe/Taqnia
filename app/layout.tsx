import type {Metadata} from 'next';
import {Header,Footer} from './ui/Site';
import './globals.css';
export const metadata:Metadata={title:{default:'ALQA — Digital Ideas. Real Results.',template:'%s | ALQA'},description:'A Doha team with its own production studio. Bilingual social media, photography and video, branding, websites and advertising in Qatar.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><Header/><main id="main">{children}</main><Footer/></body></html>;}
