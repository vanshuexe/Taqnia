import {Localized} from '../ui/Language';
import {Suspense} from 'react';
import WorkGrid from '../ui/WorkGrid';
import {QualityBand,HealthBand} from '../ui/Site';
import {pageMetadata} from '../site';
export const metadata=pageMetadata({title:'Our Work',description:'Social content, food and product shoots, bilingual brands, websites and ad campaigns from ALQA, a Doha team with its own production studio.',path:'/work'});
export default function Work(){return <Localized>{<><section className="section page-intro"><p className="eyebrow">OUR WORK / أعمالنا</p><h1>Made in Doha.<br/><em>Made to connect.</em></h1><p>Social content, studio shoots, bilingual brands and digital experiences.</p></section><section className="section work-section"><p className="asset-note">These illustrative concepts show our service areas and creative direction. They are not completed client projects.</p><Suspense fallback={<p>Loading work…</p>}><WorkGrid/></Suspense></section><QualityBand/><HealthBand/></>}</Localized>;}
