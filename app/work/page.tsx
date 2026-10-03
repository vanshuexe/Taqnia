import {Suspense} from 'react';
import WorkGrid from '../ui/WorkGrid';
import {QualityBand,HealthBand} from '../ui/Site';
export const metadata={title:'Our Work'};
export default function Work(){return <><section className="section page-intro"><p className="eyebrow">OUR WORK / أعمالنا</p><h1>Made in Doha.<br/><em>Made to connect.</em></h1><p>Social content, studio shoots, bilingual brands and digital experiences.</p></section><section className="section work-section"><p className="asset-note">These illustrative concepts show our service areas and creative direction. They are not completed client projects.</p><Suspense fallback={<p>Loading work…</p>}><WorkGrid/></Suspense></section><QualityBand/><HealthBand/></>;}
