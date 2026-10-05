import {Localized} from './Language';
import {MediaSlot} from './Site';
import {serviceImage} from '../visuals';
export type SampleAsset={image?:string;video?:string};
export const serviceMedia:Record<string,SampleAsset[]>={};
export default function MediaSample({service,label,index}:{service:string;label:string;index:number}){
 const asset=serviceMedia[service]?.[index];
 const image=asset?.image ?? serviceImage(service,index);
 return <Localized>{<MediaSlot label={label} image={image} video={asset?.video} shape={(service==='social'&&index>0&&index<4)||service==='ads'?'phone-frame':service==='websites'?'website-frame':service==='branding'?'brand-board':''}/>}</Localized>;
}
