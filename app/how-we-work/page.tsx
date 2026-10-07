import {Localized} from '../ui/Language';
import {Steps,CTA,QualityBand,MediaSlot} from '../ui/Site';
import {pageMetadata} from '../site';
export const metadata=pageMetadata({title:'How We Work',description:'How ALQA works with businesses in Qatar: brief, create, review, then publish and report. A clear process from a Doha team you can meet.',path:'/how-we-work'});
export default function HowWeWork(){return <Localized>{<><section className="page-visual"><MediaSlot label="Behind the scenes at ALQA"/></section><section className="section page-intro"><p className="eyebrow">HOW WE WORK / كيف نعمل</p><h1>Your brief.<br/><em>Our shared direction.</em></h1><p>A team you can meet in Doha. A clear process from the first conversation to the monthly report.</p><Steps/><CTA/></section><QualityBand/></>}</Localized>;}
