import{R as ut,m as at,b as I}from"./index.BjcwrmQD.js";import{A as h,a as H,b as M,E as D,c as C,d as wt,r as st,i as q,F as U,e as $,f as vt,D as bt,_ as yt,g as jt,h as ot}from"./astro/assets-service.CLjW7eCV.js";import{c as nt,r as N,m as ct}from"./render-template.CwCsceJp.js";const It="4.11.5";function Et(){return e=>{if(typeof e=="string")throw new h({...H,message:H.message(JSON.stringify(e))});let i=[...Object.values(e)];if(i.length===0)throw new h({...M,message:M.message(JSON.stringify(e))});return Promise.all(i.map(a=>a()))}}function lt(t){return{site:new URL(t),generator:`Astro v${It}`,glob:Et()}}const pt="astro:jsx",G=Symbol("empty"),Y=t=>t;function _(t){return t&&typeof t=="object"&&t[pt]}function kt(t){if(typeof t.type=="string")return t;const e={};if(_(t.props.children)){const i=t.props.children;if(!_(i)||!("slot"in i.props))return;const a=Y(i.props.slot);e[a]=[i],e[a].$$slot=!0,delete i.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(i=>{if(!_(i)||!("slot"in i.props))return i;const a=Y(i.props.slot);return Array.isArray(e[a])?e[a].push(i):(e[a]=[i],e[a].$$slot=!0),delete i.props.slot,G}).filter(i=>i!==G)),Object.assign(t.props,e)}function rt(t){return typeof t=="string"?at(t):Array.isArray(t)?t.map(e=>rt(e)):t}function Tt(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=rt(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function We(t,e){const i={[ut]:"astro:jsx",[pt]:!0,type:t,props:e??{}};return Tt(i),kt(i),i}function y(t={},e,{class:i}={}){let a="";i&&(typeof t.class<"u"?t.class+=` ${i}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],i]:t.class=i);for(const[s,o]of Object.entries(t))a+=I(o,s,!0);return at(a)}function St(t){return t.fsPath&&!("fsPath"in t)}const At=new TextDecoder,l=(t,e=0,i=t.length)=>At.decode(t.slice(e,i)),j=(t,e=0,i=t.length)=>t.slice(e,i).reduce((a,s)=>a+("0"+s.toString(16)).slice(-2),""),V=(t,e=0)=>{const i=t[e]+t[e+1]*256;return i|(i&2**15)*131070},S=(t,e=0)=>t[e]*2**8+t[e+1],m=(t,e=0)=>t[e]+t[e+1]*2**8,J=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16,Pt=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+(t[e+3]<<24),r=(t,e=0)=>t[e]*2**24+t[e+1]*2**16+t[e+2]*2**8+t[e+3],v=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+t[e+3]*2**24,_t={readUInt16BE:S,readUInt16LE:m,readUInt32BE:r,readUInt32LE:v};function d(t,e,i,a){i=i||0;const s=a?"BE":"LE",o="readUInt"+e+s;return _t[o](t,i)}function Ft(t,e){if(t.length-e<4)return;const i=r(t,e);if(!(t.length-e<i))return{name:l(t,4+e,8+e),offset:e,size:i}}function w(t,e,i){for(;i<t.length;){const a=Ft(t,i);if(!a)break;if(a.name===e)return a;i+=a.size}}const $t={validate:t=>l(t,0,2)==="BM",calculate:t=>({height:Math.abs(Pt(t,22)),width:v(t,18)})},Nt=1,Ot=6,zt=16;function X(t,e){const i=t[e];return i===0?256:i}function W(t,e){const i=Ot+e*zt;return{height:X(t,i+1),width:X(t,i)}}const mt={validate(t){const e=m(t,0),i=m(t,4);return e!==0||i===0?!1:m(t,2)===Nt},calculate(t){const e=m(t,4),i=W(t,0);if(e===1)return i;const a=[i];for(let s=1;s<e;s+=1)a.push(W(t,s));return{height:i.height,images:a,width:i.width}}},Lt=2,Rt={validate(t){const e=m(t,0),i=m(t,4);return e!==0||i===0?!1:m(t,2)===Lt},calculate:t=>mt.calculate(t)},Bt={validate:t=>v(t,0)===542327876,calculate:t=>({height:v(t,12),width:v(t,16)})},Ht=/^GIF8[79]a/,Mt={validate:t=>Ht.test(l(t,0,6)),calculate:t=>({height:m(t,8),width:m(t,6)})},dt={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function Dt(t,e,i){let a={};for(let s=e;s<=i;s+=4){const o=l(t,s,s+4);o in dt&&(a[o]=1)}if("avif"in a)return"avif";if("heic"in a||"heix"in a||"hevc"in a||"hevx"in a)return"heic";if("mif1"in a||"msf1"in a)return"heif"}const Ct={validate(t){const e=l(t,4,8),i=l(t,8,12);return e==="ftyp"&&i in dt},calculate(t){const e=w(t,"meta",0),i=e&&w(t,"iprp",e.offset+12),a=i&&w(t,"ipco",i.offset+8),s=a&&w(t,"ispe",a.offset+8);if(s)return{height:r(t,s.offset+16),width:r(t,s.offset+12),type:Dt(t,8,e.offset)};throw new TypeError("Invalid HEIF, no size found")}},qt=8,Ut=4,Gt=4,Yt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function Z(t,e){const i=e+Gt;return[l(t,e,i),r(t,i)]}function K(t){const e=Yt[t];return{width:e,height:e,type:t}}const Vt={validate:t=>l(t,0,4)==="icns",calculate(t){const e=t.length,i=r(t,Ut);let a=qt,s=Z(t,a),o=K(s[0]);if(a+=s[1],a===i)return o;const c={height:o.height,images:[o],width:o.width};for(;a<i&&a<e;)s=Z(t,a),o=K(s[0]),a+=s[1],c.images.push(o);return c}},Jt={validate:t=>j(t,0,4)==="ff4fff51",calculate:t=>({height:r(t,12),width:r(t,8)})},Xt={validate(t){if(r(t,4)!==1783636e3||r(t,0)<1)return!1;const e=w(t,"ftyp",0);return e?r(t,e.offset+4)===1718909296:!1},calculate(t){const e=w(t,"jp2h",0),i=e&&w(t,"ihdr",e.offset+8);if(i)return{height:r(t,i.offset+8),width:r(t,i.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},Wt="45786966",Zt=2,O=6,Kt=2,Qt="4d4d",te="4949",Q=12,ee=2;function ie(t){return j(t,2,6)===Wt}function ae(t,e){return{height:S(t,e),width:S(t,e+2)}}function se(t,e){const a=O+8,s=d(t,16,a,e);for(let o=0;o<s;o++){const c=a+ee+o*Q,g=c+Q;if(c>t.length)return;const p=t.slice(c,g);if(d(p,16,0,e)===274)return d(p,16,2,e)!==3||d(p,32,4,e)!==1?void 0:d(p,16,8,e)}}function oe(t,e){const i=t.slice(Zt,e),a=j(i,O,O+Kt),s=a===Qt;if(s||a===te)return se(i,s)}function ne(t,e){if(e>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const ce={validate:t=>j(t,0,2)==="ffd8",calculate(t){t=t.slice(4);let e,i;for(;t.length;){const a=S(t,0);if(t[a]!==255){t=t.slice(1);continue}if(ie(t)&&(e=oe(t,a)),ne(t,a),i=t[a+1],i===192||i===193||i===194){const s=ae(t,a+5);return e?{height:s.height,orientation:e,width:s.width}:s}t=t.slice(a+2)}throw new TypeError("Invalid JPG, no size found")}},le={validate:t=>{const e=l(t,1,7);return["KTX 11","KTX 20"].includes(e)},calculate:t=>{const e=t[5]===49?"ktx":"ktx2",i=e==="ktx"?36:20;return{height:v(t,i+4),width:v(t,i),type:e}}},pe=`PNG\r

`,re="IHDR",tt="CgBI",me={validate(t){if(pe===l(t,1,8)){let e=l(t,12,16);if(e===tt&&(e=l(t,28,32)),e!==re)throw new TypeError("Invalid PNG");return!0}return!1},calculate(t){return l(t,12,16)===tt?{height:r(t,36),width:r(t,32)}:{height:r(t,20),width:r(t,16)}}},et={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},it={default:t=>{let e=[];for(;t.length>0;){const i=t.shift();if(i[0]!=="#"){e=i.split(" ");break}}if(e.length===2)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const e={};for(;t.length>0;){const i=t.shift();if(i.length>16||i.charCodeAt(0)>128)continue;const[a,s]=i.split(" ");if(a&&s&&(e[a.toLowerCase()]=parseInt(s,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw new TypeError("Invalid PAM")}},de={validate:t=>l(t,0,2)in et,calculate(t){const e=l(t,0,2),i=et[e],a=l(t,3).split(/[\r\n]+/);return(it[i]||it.default)(a)}},ge={validate:t=>l(t,0,4)==="8BPS",calculate:t=>({height:r(t,14),width:r(t,18)})},gt=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,T={height:/\sheight=(['"])([^%]+?)\1/,root:gt,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},F=2.54,ft={in:96,cm:96/F,em:16,ex:8,m:96/F*100,mm:96/F/10,pc:96/72/12,pt:96/72,px:1},fe=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(ft).join("|")})?$`);function A(t){const e=fe.exec(t);if(e)return Math.round(Number(e[1])*(ft[e[2]]||1))}function he(t){const e=t.split(" ");return{height:A(e[3]),width:A(e[2])}}function xe(t){const e=t.match(T.width),i=t.match(T.height),a=t.match(T.viewbox);return{height:i&&A(i[2]),viewbox:a&&he(a[2]),width:e&&A(e[2])}}function ue(t){return{height:t.height,width:t.width}}function we(t,e){const i=e.width/e.height;return t.width?{height:Math.floor(t.width/i),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*i)}:{height:e.height,width:e.width}}const ve={validate:t=>gt.test(l(t,0,1e3)),calculate(t){const e=l(t).match(T.root);if(e){const i=xe(e[0]);if(i.width&&i.height)return ue(i);if(i.viewbox)return we(i,i.viewbox)}throw new TypeError("Invalid SVG")}},be={validate(t){return m(t,0)===0&&m(t,4)===0},calculate(t){return{height:m(t,14),width:m(t,12)}}};function ye(t,e){const i=d(t,32,4,e);return t.slice(i+2)}function je(t,e){const i=d(t,16,8,e);return(d(t,16,10,e)<<16)+i}function Ie(t){if(t.length>24)return t.slice(12)}function Ee(t,e){const i={};let a=t;for(;a&&a.length;){const s=d(a,16,0,e),o=d(a,16,2,e),c=d(a,32,4,e);if(s===0)break;c===1&&(o===3||o===4)&&(i[s]=je(a,e)),a=Ie(a)}return i}function ke(t){const e=l(t,0,2);if(e==="II")return"LE";if(e==="MM")return"BE"}const Te=["49492a00","4d4d002a"],Se={validate:t=>Te.includes(j(t,0,4)),calculate(t){const e=ke(t)==="BE",i=ye(t,e),a=Ee(i,e),s=a[256],o=a[257];if(!s||!o)throw new TypeError("Invalid Tiff. Missing tags");return{height:o,width:s}}};function Ae(t){return{height:1+J(t,7),width:1+J(t,4)}}function Pe(t){return{height:1+((t[4]&15)<<10|t[3]<<2|(t[2]&192)>>6),width:1+((t[2]&63)<<8|t[1])}}function _e(t){return{height:V(t,8)&16383,width:V(t,6)&16383}}const Fe={validate(t){const e=l(t,0,4)==="RIFF",i=l(t,8,12)==="WEBP",a=l(t,12,15)==="VP8";return e&&i&&a},calculate(t){const e=l(t,12,16);if(t=t.slice(20,30),e==="VP8X"){const a=t[0],s=(a&192)===0,o=(a&1)===0;if(s&&o)return Ae(t);throw new TypeError("Invalid WebP")}if(e==="VP8 "&&t[0]!==47)return _e(t);const i=j(t,3,6);if(e==="VP8L"&&i!=="9d012a")return Pe(t);throw new TypeError("Invalid WebP")}},P=new Map([["bmp",$t],["cur",Rt],["dds",Bt],["gif",Mt],["heif",Ct],["icns",Vt],["ico",mt],["j2c",Jt],["jp2",Xt],["jpg",ce],["ktx",le],["png",me],["pnm",de],["psd",ge],["svg",ve],["tga",be],["tiff",Se],["webp",Fe]]),$e=Array.from(P.keys()),Ne=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function Oe(t){const e=t[0],i=Ne.get(e);return i&&P.get(i).validate(t)?i:$e.find(a=>P.get(a).validate(t))}const ze={disabledTypes:[]};function Le(t){const e=Oe(t);if(typeof e<"u"){if(ze.disabledTypes.indexOf(e)>-1)throw new TypeError("disabled file type: "+e);const i=P.get(e).calculate(t);if(i!==void 0)return i.type=i.type??e,i}throw new TypeError("unsupported file type: "+e)}async function Re(t){const e=await fetch(t);if(!e.body||!e.ok)throw new Error("Failed to fetch image");const i=e.body.getReader();let a,s,o=new Uint8Array;for(;!a;){const c=await i.read();if(a=c.done,a)break;if(c.value){s=c.value;let g=new Uint8Array(o.length+s.length);g.set(o,0),g.set(s,o.length),o=g;try{const p=Le(o);if(p)return await i.cancel(),p}catch{}}}throw new Error("Failed to parse the size")}async function Be(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await yt(async()=>{const{default:e}=await import("./astro/assets-service.CLjW7eCV.js").then(i=>i.s);return{default:e}},[]).catch(e=>{const i=new h(jt);throw i.cause=e,i});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function He(t,e){if(!t||typeof t!="object")throw new h({...D,message:D.message(JSON.stringify(t))});if(typeof t.src>"u")throw new h({...C,message:C.message(t.src,"undefined",JSON.stringify(t))});if(St(t))throw new h(wt);const i=await Be(),a={...t,src:await st(t.src)};if(t.inferSize&&q(a.src))try{const n=await Re(a.src);a.width??=n.width,a.height??=n.height,delete a.inferSize}catch{throw new h({...U,message:U.message(a.src)})}const s=$(a.src)?a.src.fsPath:void 0,o=$(a.src)?a.src.clone??a.src:a.src;a.src=o;const c=i.validateOptions?await i.validateOptions(a,e):a,g=i.getSrcSet?await i.getSrcSet(c,e):[];let p=await i.getURL(c,e),x=await Promise.all(g.map(async n=>({transform:n.transform,url:await i.getURL(n.transform,e),descriptor:n.descriptor,attributes:n.attributes})));if(vt(i)&&globalThis.astroAsset.addStaticImage&&!(q(c.src)&&p===c.src)){const n=i.propertiesToHash??bt;p=globalThis.astroAsset.addStaticImage(c,n,s),x=g.map(f=>({transform:f.transform,url:globalThis.astroAsset.addStaticImage(f.transform,n,s),descriptor:f.descriptor,attributes:f.attributes}))}return{rawOptions:a,options:c,src:p,srcSet:{values:x,attribute:x.map(n=>`${n.url} ${n.descriptor}`).join(", ")},attributes:i.getHTMLAttributes!==void 0?await i.getHTMLAttributes(c,e):{}}}const Me=lt("https://astro-erudite.vercel.app"),De=nt(async(t,e,i)=>{const a=t.createAstro(Me,e,i);a.self=De;const s=a.props;if(s.alt===void 0||s.alt===null)throw new h(ot);typeof s.width=="string"&&(s.width=parseInt(s.width)),typeof s.height=="string"&&(s.height=parseInt(s.height));const o=await z(s),c={};return o.srcSet.values.length>0&&(c.srcset=o.srcSet.attribute),N`${ct()}<img${I(o.src,"src")}${y(c)}${y(o.attributes)}>`},"/home/nick/Documents/my-website/node_modules/astro/components/Image.astro",void 0),Ce={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function qe(t){let e=(""+t).trim().toLowerCase(),i=e.lastIndexOf(".");return Ce[~i?e.substring(++i):e]}const Ue=lt("https://astro-erudite.vercel.app"),Ge=nt(async(t,e,i)=>{const a=t.createAstro(Ue,e,i);a.self=Ge;const s=["webp"],o="png",c=["gif","svg","jpg","jpeg"],{formats:g=s,pictureAttributes:p={},fallbackFormat:x,...n}=a.props;if(n.alt===void 0||n.alt===null)throw new h(ot);const f=n.class?.match(/\bastro-\w{8}\b/)?.[0];f&&(p.class?p.class=`${p.class} ${f}`:p.class=f);for(const b in n)b.startsWith("data-astro-cid")&&(p[b]=n[b]);const E=await st(n.src),ht=await Promise.all(g.map(async b=>await z({...n,src:E,format:b,widths:n.widths,densities:n.densities})));let L=x??o;!x&&$(E)&&c.includes(E.format)&&(L=E.format);const k=await z({...n,format:L,widths:n.widths,densities:n.densities}),R={},B={};return n.sizes&&(B.sizes=n.sizes),k.srcSet.values.length>0&&(R.srcset=k.srcSet.attribute),N`${ct()}<picture${y(p)}> ${Object.entries(ht).map(([b,u])=>{const xt=n.densities||!n.densities&&!n.widths?`${u.src}${u.srcSet.values.length>0?", "+u.srcSet.attribute:""}`:u.srcSet.attribute;return N`<source${I(xt,"srcset")}${I(qe(u.options.format??u.src)??`image/${u.options.format}`,"type")}${y(B)}>`})} <img${I(k.src,"src")}${y(R)}${y(k.attributes)}> </picture>`},"/home/nick/Documents/my-website/node_modules/astro/components/Picture.astro",void 0),Ye={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]},z=async t=>await He(t,Ye);export{De as $,We as c};
