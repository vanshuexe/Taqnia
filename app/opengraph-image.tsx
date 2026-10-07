import {ImageResponse} from 'next/og';
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';

export const alt='ALQA — Digital Marketing & Production Studio in Doha, Qatar';
export const size={width:1200,height:630};
export const contentType='image/png';

// Default share image for every page that does not define its own.
export default async function Image(){
 const logo=`data:image/png;base64,${(await readFile(join(process.cwd(),'public/brand/logo.png'))).toString('base64')}`;
 return new ImageResponse(
  <div style={{width:'100%',height:'100%',display:'flex',background:'#F7FAFF',fontFamily:'sans-serif'}}>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'64px 72px',width:'62%'}}>
    <div style={{display:'flex',fontSize:22,letterSpacing:4,color:'#247EBD'}}>DOHA, QATAR</div>
    <div style={{display:'flex',flexDirection:'column'}}>
     <div style={{fontSize:64,fontWeight:700,lineHeight:1.05,color:'#141C3C',letterSpacing:-2}}>Digital marketing & production studio</div>
     <div style={{fontSize:30,marginTop:28,color:'#52647A'}}>Social media · Photography & video · Websites · Ads</div>
    </div>
    <div style={{display:'flex',fontSize:26,color:'#202D64'}}>Digital ideas. Real results.</div>
   </div>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'38%',background:'#EAF2FB',borderLeft:'12px solid #2FA9DD'}}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={logo} width={360} height={240} alt="" style={{objectFit:'contain'}}/>
   </div>
  </div>,
  size,
 );
}
