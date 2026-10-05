import {Localized} from '../ui/Language';
import {Steps,CTA,QualityBand,MediaSlot} from '../ui/Site';
export const metadata={title:'How We Work'};
export default function HowWeWork(){return <Localized>{<><section className="page-visual"><MediaSlot label="Behind the scenes at ALQA"/></section><section className="section page-intro"><p className="eyebrow">HOW WE WORK / كيف نعمل</p><h1>Your brief.<br/><em>Our shared direction.</em></h1><p>A team you can meet in Doha. A clear process from the first conversation to the monthly report.</p><Steps/><CTA/></section><QualityBand/></>}</Localized>;}
