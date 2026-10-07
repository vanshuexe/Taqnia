// Structured data is rendered as a native script tag; `<` is escaped to keep the payload inert.
export default function JsonLd({data}:{data:object}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;}
