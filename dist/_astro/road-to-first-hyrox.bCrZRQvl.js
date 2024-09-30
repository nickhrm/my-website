import{R as vt,m as ot,b as E,F as kt}from"./index.H73sFHqh.js";import{A as x,a as D,b as q,E as C,c as U,d as jt,r as rt,i as G,F as Y,e as N,f as Et,D as It,_ as Tt,g as St,h as ct}from"./astro/assets-service.CLjW7eCV.js";import{c as lt,r as O,m as pt}from"./render-template.D3m4fMLD.js";import"./index.CVpbhN_F.js";const At="4.11.5";function Rt(){return e=>{if(typeof e=="string")throw new x({...D,message:D.message(JSON.stringify(e))});let i=[...Object.values(e)];if(i.length===0)throw new x({...q,message:q.message(JSON.stringify(e))});return Promise.all(i.map(a=>a()))}}function mt(t){return{site:new URL(t),generator:`Astro v${At}`,glob:Rt()}}const dt="astro:jsx",V=Symbol("empty"),J=t=>t;function _(t){return t&&typeof t=="object"&&t[dt]}function Pt(t){if(typeof t.type=="string")return t;const e={};if(_(t.props.children)){const i=t.props.children;if(!_(i)||!("slot"in i.props))return;const a=J(i.props.slot);e[a]=[i],e[a].$$slot=!0,delete i.props.slot,delete t.props.children}Array.isArray(t.props.children)&&(t.props.children=t.props.children.map(i=>{if(!_(i)||!("slot"in i.props))return i;const a=J(i.props.slot);return Array.isArray(e[a])?e[a].push(i):(e[a]=[i],e[a].$$slot=!0),delete i.props.slot,V}).filter(i=>i!==V)),Object.assign(t.props,e)}function ht(t){return typeof t=="string"?ot(t):Array.isArray(t)?t.map(e=>ht(e)):t}function _t(t){if("set:html"in t.props||"set:text"in t.props){if("set:html"in t.props){const e=ht(t.props["set:html"]);delete t.props["set:html"],Object.assign(t.props,{children:e});return}if("set:text"in t.props){const e=t.props["set:text"];delete t.props["set:text"],Object.assign(t.props,{children:e});return}}}function r(t,e){const i={[vt]:"astro:jsx",[dt]:!0,type:t,props:e??{}};return _t(i),Pt(i),i}function k(t={},e,{class:i}={}){let a="";i&&(typeof t.class<"u"?t.class+=` ${i}`:typeof t["class:list"]<"u"?t["class:list"]=[t["class:list"],i]:t.class=i);for(const[s,n]of Object.entries(t))a+=E(n,s,!0);return ot(a)}function Ft(t){return t.fsPath&&!("fsPath"in t)}const Nt=new TextDecoder,l=(t,e=0,i=t.length)=>Nt.decode(t.slice(e,i)),j=(t,e=0,i=t.length)=>t.slice(e,i).reduce((a,s)=>a+("0"+s.toString(16)).slice(-2),""),W=(t,e=0)=>{const i=t[e]+t[e+1]*256;return i|(i&2**15)*131070},A=(t,e=0)=>t[e]*2**8+t[e+1],d=(t,e=0)=>t[e]+t[e+1]*2**8,X=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16,Ot=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+(t[e+3]<<24),m=(t,e=0)=>t[e]*2**24+t[e+1]*2**16+t[e+2]*2**8+t[e+3],b=(t,e=0)=>t[e]+t[e+1]*2**8+t[e+2]*2**16+t[e+3]*2**24,$t={readUInt16BE:A,readUInt16LE:d,readUInt32BE:m,readUInt32LE:b};function h(t,e,i,a){i=i||0;const s=a?"BE":"LE",n="readUInt"+e+s;return $t[n](t,i)}function zt(t,e){if(t.length-e<4)return;const i=m(t,e);if(!(t.length-e<i))return{name:l(t,4+e,8+e),offset:e,size:i}}function y(t,e,i){for(;i<t.length;){const a=zt(t,i);if(!a)break;if(a.name===e)return a;i+=a.size}}const Lt={validate:t=>l(t,0,2)==="BM",calculate:t=>({height:Math.abs(Ot(t,22)),width:b(t,18)})},Ht=1,Bt=6,Mt=16;function Z(t,e){const i=t[e];return i===0?256:i}function K(t,e){const i=Bt+e*Mt;return{height:Z(t,i+1),width:Z(t,i)}}const gt={validate(t){const e=d(t,0),i=d(t,4);return e!==0||i===0?!1:d(t,2)===Ht},calculate(t){const e=d(t,4),i=K(t,0);if(e===1)return i;const a=[i];for(let s=1;s<e;s+=1)a.push(K(t,s));return{height:i.height,images:a,width:i.width}}},Dt=2,qt={validate(t){const e=d(t,0),i=d(t,4);return e!==0||i===0?!1:d(t,2)===Dt},calculate:t=>gt.calculate(t)},Ct={validate:t=>b(t,0)===542327876,calculate:t=>({height:b(t,12),width:b(t,16)})},Ut=/^GIF8[79]a/,Gt={validate:t=>Ut.test(l(t,0,6)),calculate:t=>({height:d(t,8),width:d(t,6)})},ft={avif:"avif",mif1:"heif",msf1:"heif",heic:"heic",heix:"heic",hevc:"heic",hevx:"heic"};function Yt(t,e,i){let a={};for(let s=e;s<=i;s+=4){const n=l(t,s,s+4);n in ft&&(a[n]=1)}if("avif"in a)return"avif";if("heic"in a||"heix"in a||"hevc"in a||"hevx"in a)return"heic";if("mif1"in a||"msf1"in a)return"heif"}const Vt={validate(t){const e=l(t,4,8),i=l(t,8,12);return e==="ftyp"&&i in ft},calculate(t){const e=y(t,"meta",0),i=e&&y(t,"iprp",e.offset+12),a=i&&y(t,"ipco",i.offset+8),s=a&&y(t,"ispe",a.offset+8);if(s)return{height:m(t,s.offset+16),width:m(t,s.offset+12),type:Yt(t,8,e.offset)};throw new TypeError("Invalid HEIF, no size found")}},Jt=8,Wt=4,Xt=4,Zt={ICON:32,"ICN#":32,"icm#":16,icm4:16,icm8:16,"ics#":16,ics4:16,ics8:16,is32:16,s8mk:16,icp4:16,icl4:32,icl8:32,il32:32,l8mk:32,icp5:32,ic11:32,ich4:48,ich8:48,ih32:48,h8mk:48,icp6:64,ic12:32,it32:128,t8mk:128,ic07:128,ic08:256,ic13:256,ic09:512,ic14:512,ic10:1024};function Q(t,e){const i=e+Xt;return[l(t,e,i),m(t,i)]}function tt(t){const e=Zt[t];return{width:e,height:e,type:t}}const Kt={validate:t=>l(t,0,4)==="icns",calculate(t){const e=t.length,i=m(t,Wt);let a=Jt,s=Q(t,a),n=tt(s[0]);if(a+=s[1],a===i)return n;const c={height:n.height,images:[n],width:n.width};for(;a<i&&a<e;)s=Q(t,a),n=tt(s[0]),a+=s[1],c.images.push(n);return c}},Qt={validate:t=>j(t,0,4)==="ff4fff51",calculate:t=>({height:m(t,12),width:m(t,8)})},te={validate(t){if(m(t,4)!==1783636e3||m(t,0)<1)return!1;const e=y(t,"ftyp",0);return e?m(t,e.offset+4)===1718909296:!1},calculate(t){const e=y(t,"jp2h",0),i=e&&y(t,"ihdr",e.offset+8);if(i)return{height:m(t,i.offset+8),width:m(t,i.offset+12)};throw new TypeError("Unsupported JPEG 2000 format")}},ee="45786966",ie=2,$=6,ae=2,se="4d4d",ne="4949",et=12,oe=2;function re(t){return j(t,2,6)===ee}function ce(t,e){return{height:A(t,e),width:A(t,e+2)}}function le(t,e){const a=$+8,s=h(t,16,a,e);for(let n=0;n<s;n++){const c=a+oe+n*et,g=c+et;if(c>t.length)return;const p=t.slice(c,g);if(h(p,16,0,e)===274)return h(p,16,2,e)!==3||h(p,32,4,e)!==1?void 0:h(p,16,8,e)}}function pe(t,e){const i=t.slice(ie,e),a=j(i,$,$+ae),s=a===se;if(s||a===ne)return le(i,s)}function me(t,e){if(e>t.length)throw new TypeError("Corrupt JPG, exceeded buffer limits")}const de={validate:t=>j(t,0,2)==="ffd8",calculate(t){t=t.slice(4);let e,i;for(;t.length;){const a=A(t,0);if(t[a]!==255){t=t.slice(1);continue}if(re(t)&&(e=pe(t,a)),me(t,a),i=t[a+1],i===192||i===193||i===194){const s=ce(t,a+5);return e?{height:s.height,orientation:e,width:s.width}:s}t=t.slice(a+2)}throw new TypeError("Invalid JPG, no size found")}},he={validate:t=>{const e=l(t,1,7);return["KTX 11","KTX 20"].includes(e)},calculate:t=>{const e=t[5]===49?"ktx":"ktx2",i=e==="ktx"?36:20;return{height:b(t,i+4),width:b(t,i),type:e}}},ge=`PNG\r

`,fe="IHDR",it="CgBI",xe={validate(t){if(ge===l(t,1,8)){let e=l(t,12,16);if(e===it&&(e=l(t,28,32)),e!==fe)throw new TypeError("Invalid PNG");return!0}return!1},calculate(t){return l(t,12,16)===it?{height:m(t,36),width:m(t,32)}:{height:m(t,20),width:m(t,16)}}},at={P1:"pbm/ascii",P2:"pgm/ascii",P3:"ppm/ascii",P4:"pbm",P5:"pgm",P6:"ppm",P7:"pam",PF:"pfm"},st={default:t=>{let e=[];for(;t.length>0;){const i=t.shift();if(i[0]!=="#"){e=i.split(" ");break}}if(e.length===2)return{height:parseInt(e[1],10),width:parseInt(e[0],10)};throw new TypeError("Invalid PNM")},pam:t=>{const e={};for(;t.length>0;){const i=t.shift();if(i.length>16||i.charCodeAt(0)>128)continue;const[a,s]=i.split(" ");if(a&&s&&(e[a.toLowerCase()]=parseInt(s,10)),e.height&&e.width)break}if(e.height&&e.width)return{height:e.height,width:e.width};throw new TypeError("Invalid PAM")}},ue={validate:t=>l(t,0,2)in at,calculate(t){const e=l(t,0,2),i=at[e],a=l(t,3).split(/[\r\n]+/);return(st[i]||st.default)(a)}},we={validate:t=>l(t,0,4)==="8BPS",calculate:t=>({height:m(t,14),width:m(t,18)})},xt=/<svg\s([^>"']|"[^"]*"|'[^']*')*>/,S={height:/\sheight=(['"])([^%]+?)\1/,root:xt,viewbox:/\sviewBox=(['"])(.+?)\1/i,width:/\swidth=(['"])([^%]+?)\1/},F=2.54,ut={in:96,cm:96/F,em:16,ex:8,m:96/F*100,mm:96/F/10,pc:96/72/12,pt:96/72,px:1},ye=new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(ut).join("|")})?$`);function R(t){const e=ye.exec(t);if(e)return Math.round(Number(e[1])*(ut[e[2]]||1))}function be(t){const e=t.split(" ");return{height:R(e[3]),width:R(e[2])}}function ve(t){const e=t.match(S.width),i=t.match(S.height),a=t.match(S.viewbox);return{height:i&&R(i[2]),viewbox:a&&be(a[2]),width:e&&R(e[2])}}function ke(t){return{height:t.height,width:t.width}}function je(t,e){const i=e.width/e.height;return t.width?{height:Math.floor(t.width/i),width:t.width}:t.height?{height:t.height,width:Math.floor(t.height*i)}:{height:e.height,width:e.width}}const Ee={validate:t=>xt.test(l(t,0,1e3)),calculate(t){const e=l(t).match(S.root);if(e){const i=ve(e[0]);if(i.width&&i.height)return ke(i);if(i.viewbox)return je(i,i.viewbox)}throw new TypeError("Invalid SVG")}},Ie={validate(t){return d(t,0)===0&&d(t,4)===0},calculate(t){return{height:d(t,14),width:d(t,12)}}};function Te(t,e){const i=h(t,32,4,e);return t.slice(i+2)}function Se(t,e){const i=h(t,16,8,e);return(h(t,16,10,e)<<16)+i}function Ae(t){if(t.length>24)return t.slice(12)}function Re(t,e){const i={};let a=t;for(;a&&a.length;){const s=h(a,16,0,e),n=h(a,16,2,e),c=h(a,32,4,e);if(s===0)break;c===1&&(n===3||n===4)&&(i[s]=Se(a,e)),a=Ae(a)}return i}function Pe(t){const e=l(t,0,2);if(e==="II")return"LE";if(e==="MM")return"BE"}const _e=["49492a00","4d4d002a"],Fe={validate:t=>_e.includes(j(t,0,4)),calculate(t){const e=Pe(t)==="BE",i=Te(t,e),a=Re(i,e),s=a[256],n=a[257];if(!s||!n)throw new TypeError("Invalid Tiff. Missing tags");return{height:n,width:s}}};function Ne(t){return{height:1+X(t,7),width:1+X(t,4)}}function Oe(t){return{height:1+((t[4]&15)<<10|t[3]<<2|(t[2]&192)>>6),width:1+((t[2]&63)<<8|t[1])}}function $e(t){return{height:W(t,8)&16383,width:W(t,6)&16383}}const ze={validate(t){const e=l(t,0,4)==="RIFF",i=l(t,8,12)==="WEBP",a=l(t,12,15)==="VP8";return e&&i&&a},calculate(t){const e=l(t,12,16);if(t=t.slice(20,30),e==="VP8X"){const a=t[0],s=(a&192)===0,n=(a&1)===0;if(s&&n)return Ne(t);throw new TypeError("Invalid WebP")}if(e==="VP8 "&&t[0]!==47)return $e(t);const i=j(t,3,6);if(e==="VP8L"&&i!=="9d012a")return Oe(t);throw new TypeError("Invalid WebP")}},P=new Map([["bmp",Lt],["cur",qt],["dds",Ct],["gif",Gt],["heif",Vt],["icns",Kt],["ico",gt],["j2c",Qt],["jp2",te],["jpg",de],["ktx",he],["png",xe],["pnm",ue],["psd",we],["svg",Ee],["tga",Ie],["tiff",Fe],["webp",ze]]),Le=Array.from(P.keys()),He=new Map([[56,"psd"],[66,"bmp"],[68,"dds"],[71,"gif"],[73,"tiff"],[77,"tiff"],[82,"webp"],[105,"icns"],[137,"png"],[255,"jpg"]]);function Be(t){const e=t[0],i=He.get(e);return i&&P.get(i).validate(t)?i:Le.find(a=>P.get(a).validate(t))}const Me={disabledTypes:[]};function De(t){const e=Be(t);if(typeof e<"u"){if(Me.disabledTypes.indexOf(e)>-1)throw new TypeError("disabled file type: "+e);const i=P.get(e).calculate(t);if(i!==void 0)return i.type=i.type??e,i}throw new TypeError("unsupported file type: "+e)}async function qe(t){const e=await fetch(t);if(!e.body||!e.ok)throw new Error("Failed to fetch image");const i=e.body.getReader();let a,s,n=new Uint8Array;for(;!a;){const c=await i.read();if(a=c.done,a)break;if(c.value){s=c.value;let g=new Uint8Array(n.length+s.length);g.set(n,0),g.set(s,n.length),n=g;try{const p=De(n);if(p)return await i.cancel(),p}catch{}}}throw new Error("Failed to parse the size")}async function Ce(){if(!globalThis?.astroAsset?.imageService){const{default:t}=await Tt(async()=>{const{default:e}=await import("./astro/assets-service.CLjW7eCV.js").then(i=>i.s);return{default:e}},[]).catch(e=>{const i=new x(St);throw i.cause=e,i});return globalThis.astroAsset||(globalThis.astroAsset={}),globalThis.astroAsset.imageService=t,t}return globalThis.astroAsset.imageService}async function Ue(t,e){if(!t||typeof t!="object")throw new x({...C,message:C.message(JSON.stringify(t))});if(typeof t.src>"u")throw new x({...U,message:U.message(t.src,"undefined",JSON.stringify(t))});if(Ft(t))throw new x(jt);const i=await Ce(),a={...t,src:await rt(t.src)};if(t.inferSize&&G(a.src))try{const o=await qe(a.src);a.width??=o.width,a.height??=o.height,delete a.inferSize}catch{throw new x({...Y,message:Y.message(a.src)})}const s=N(a.src)?a.src.fsPath:void 0,n=N(a.src)?a.src.clone??a.src:a.src;a.src=n;const c=i.validateOptions?await i.validateOptions(a,e):a,g=i.getSrcSet?await i.getSrcSet(c,e):[];let p=await i.getURL(c,e),u=await Promise.all(g.map(async o=>({transform:o.transform,url:await i.getURL(o.transform,e),descriptor:o.descriptor,attributes:o.attributes})));if(Et(i)&&globalThis.astroAsset.addStaticImage&&!(G(c.src)&&p===c.src)){const o=i.propertiesToHash??It;p=globalThis.astroAsset.addStaticImage(c,o,s),u=g.map(f=>({transform:f.transform,url:globalThis.astroAsset.addStaticImage(f.transform,o,s),descriptor:f.descriptor,attributes:f.attributes}))}return{rawOptions:a,options:c,src:p,srcSet:{values:u,attribute:u.map(o=>`${o.url} ${o.descriptor}`).join(", ")},attributes:i.getHTMLAttributes!==void 0?await i.getHTMLAttributes(c,e):{}}}const Ge=mt("https://astro-erudite.vercel.app"),wt=lt(async(t,e,i)=>{const a=t.createAstro(Ge,e,i);a.self=wt;const s=a.props;if(s.alt===void 0||s.alt===null)throw new x(ct);typeof s.width=="string"&&(s.width=parseInt(s.width)),typeof s.height=="string"&&(s.height=parseInt(s.height));const n=await z(s),c={};return n.srcSet.values.length>0&&(c.srcset=n.srcSet.attribute),O`${pt()}<img${E(n.src,"src")}${k(c)}${k(n.attributes)}>`},"/home/nick/Documents/my-website/node_modules/astro/components/Image.astro",void 0),Ye={"3g2":"video/3gpp2","3gp":"video/3gpp","3gpp":"video/3gpp","3mf":"model/3mf",aac:"audio/aac",ac:"application/pkix-attr-cert",adp:"audio/adpcm",adts:"audio/aac",ai:"application/postscript",aml:"application/automationml-aml+xml",amlx:"application/automationml-amlx+zip",amr:"audio/amr",apng:"image/apng",appcache:"text/cache-manifest",appinstaller:"application/appinstaller",appx:"application/appx",appxbundle:"application/appxbundle",asc:"application/pgp-keys",atom:"application/atom+xml",atomcat:"application/atomcat+xml",atomdeleted:"application/atomdeleted+xml",atomsvc:"application/atomsvc+xml",au:"audio/basic",avci:"image/avci",avcs:"image/avcs",avif:"image/avif",aw:"application/applixware",bdoc:"application/bdoc",bin:"application/octet-stream",bmp:"image/bmp",bpk:"application/octet-stream",btf:"image/prs.btif",btif:"image/prs.btif",buffer:"application/octet-stream",ccxml:"application/ccxml+xml",cdfx:"application/cdfx+xml",cdmia:"application/cdmi-capability",cdmic:"application/cdmi-container",cdmid:"application/cdmi-domain",cdmio:"application/cdmi-object",cdmiq:"application/cdmi-queue",cer:"application/pkix-cert",cgm:"image/cgm",cjs:"application/node",class:"application/java-vm",coffee:"text/coffeescript",conf:"text/plain",cpl:"application/cpl+xml",cpt:"application/mac-compactpro",crl:"application/pkix-crl",css:"text/css",csv:"text/csv",cu:"application/cu-seeme",cwl:"application/cwl",cww:"application/prs.cww",davmount:"application/davmount+xml",dbk:"application/docbook+xml",deb:"application/octet-stream",def:"text/plain",deploy:"application/octet-stream",dib:"image/bmp","disposition-notification":"message/disposition-notification",dist:"application/octet-stream",distz:"application/octet-stream",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",dot:"application/msword",dpx:"image/dpx",drle:"image/dicom-rle",dsc:"text/prs.lines.tag",dssc:"application/dssc+der",dtd:"application/xml-dtd",dump:"application/octet-stream",dwd:"application/atsc-dwd+xml",ear:"application/java-archive",ecma:"application/ecmascript",elc:"application/octet-stream",emf:"image/emf",eml:"message/rfc822",emma:"application/emma+xml",emotionml:"application/emotionml+xml",eps:"application/postscript",epub:"application/epub+zip",exe:"application/octet-stream",exi:"application/exi",exp:"application/express",exr:"image/aces",ez:"application/andrew-inset",fdf:"application/fdf",fdt:"application/fdt+xml",fits:"image/fits",g3:"image/g3fax",gbr:"application/rpki-ghostbusters",geojson:"application/geo+json",gif:"image/gif",glb:"model/gltf-binary",gltf:"model/gltf+json",gml:"application/gml+xml",gpx:"application/gpx+xml",gram:"application/srgs",grxml:"application/srgs+xml",gxf:"application/gxf",gz:"application/gzip",h261:"video/h261",h263:"video/h263",h264:"video/h264",heic:"image/heic",heics:"image/heic-sequence",heif:"image/heif",heifs:"image/heif-sequence",hej2:"image/hej2k",held:"application/atsc-held+xml",hjson:"application/hjson",hlp:"application/winhlp",hqx:"application/mac-binhex40",hsj2:"image/hsj2",htm:"text/html",html:"text/html",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",img:"application/octet-stream",in:"text/plain",ini:"text/plain",ink:"application/inkml+xml",inkml:"application/inkml+xml",ipfix:"application/ipfix",iso:"application/octet-stream",its:"application/its+xml",jade:"text/jade",jar:"application/java-archive",jhc:"image/jphc",jls:"image/jls",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpf:"image/jpx",jpg:"image/jpeg",jpg2:"image/jp2",jpgm:"image/jpm",jpgv:"video/jpeg",jph:"image/jph",jpm:"image/jpm",jpx:"image/jpx",js:"text/javascript",json:"application/json",json5:"application/json5",jsonld:"application/ld+json",jsonml:"application/jsonml+json",jsx:"text/jsx",jt:"model/jt",jxr:"image/jxr",jxra:"image/jxra",jxrs:"image/jxrs",jxs:"image/jxs",jxsc:"image/jxsc",jxsi:"image/jxsi",jxss:"image/jxss",kar:"audio/midi",ktx:"image/ktx",ktx2:"image/ktx2",less:"text/less",lgr:"application/lgr+xml",list:"text/plain",litcoffee:"text/coffeescript",log:"text/plain",lostxml:"application/lost+xml",lrf:"application/octet-stream",m1v:"video/mpeg",m21:"application/mp21",m2a:"audio/mpeg",m2v:"video/mpeg",m3a:"audio/mpeg",m4a:"audio/mp4",m4p:"application/mp4",m4s:"video/iso.segment",ma:"application/mathematica",mads:"application/mads+xml",maei:"application/mmt-aei+xml",man:"text/troff",manifest:"text/cache-manifest",map:"application/json",mar:"application/octet-stream",markdown:"text/markdown",mathml:"application/mathml+xml",mb:"application/mathematica",mbox:"application/mbox",md:"text/markdown",mdx:"text/mdx",me:"text/troff",mesh:"model/mesh",meta4:"application/metalink4+xml",metalink:"application/metalink+xml",mets:"application/mets+xml",mft:"application/rpki-manifest",mid:"audio/midi",midi:"audio/midi",mime:"message/rfc822",mj2:"video/mj2",mjp2:"video/mj2",mjs:"text/javascript",mml:"text/mathml",mods:"application/mods+xml",mov:"video/quicktime",mp2:"audio/mpeg",mp21:"application/mp21",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mp4a:"audio/mp4",mp4s:"application/mp4",mp4v:"video/mp4",mpd:"application/dash+xml",mpe:"video/mpeg",mpeg:"video/mpeg",mpf:"application/media-policy-dataset+xml",mpg:"video/mpeg",mpg4:"video/mp4",mpga:"audio/mpeg",mpp:"application/dash-patch+xml",mrc:"application/marc",mrcx:"application/marcxml+xml",ms:"text/troff",mscml:"application/mediaservercontrol+xml",msh:"model/mesh",msi:"application/octet-stream",msix:"application/msix",msixbundle:"application/msixbundle",msm:"application/octet-stream",msp:"application/octet-stream",mtl:"model/mtl",musd:"application/mmt-usd+xml",mxf:"application/mxf",mxmf:"audio/mobile-xmf",mxml:"application/xv+xml",n3:"text/n3",nb:"application/mathematica",nq:"application/n-quads",nt:"application/n-triples",obj:"model/obj",oda:"application/oda",oga:"audio/ogg",ogg:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",omdoc:"application/omdoc+xml",onepkg:"application/onenote",onetmp:"application/onenote",onetoc:"application/onenote",onetoc2:"application/onenote",opf:"application/oebps-package+xml",opus:"audio/ogg",otf:"font/otf",owl:"application/rdf+xml",oxps:"application/oxps",p10:"application/pkcs10",p7c:"application/pkcs7-mime",p7m:"application/pkcs7-mime",p7s:"application/pkcs7-signature",p8:"application/pkcs8",pdf:"application/pdf",pfr:"application/font-tdpfr",pgp:"application/pgp-encrypted",pkg:"application/octet-stream",pki:"application/pkixcmp",pkipath:"application/pkix-pkipath",pls:"application/pls+xml",png:"image/png",prc:"model/prc",prf:"application/pics-rules",provx:"application/provenance+xml",ps:"application/postscript",pskcxml:"application/pskc+xml",pti:"image/prs.pti",qt:"video/quicktime",raml:"application/raml+yaml",rapd:"application/route-apd+xml",rdf:"application/rdf+xml",relo:"application/p2p-overlay+xml",rif:"application/reginfo+xml",rl:"application/resource-lists+xml",rld:"application/resource-lists-diff+xml",rmi:"audio/midi",rnc:"application/relax-ng-compact-syntax",rng:"application/xml",roa:"application/rpki-roa",roff:"text/troff",rq:"application/sparql-query",rs:"application/rls-services+xml",rsat:"application/atsc-rsat+xml",rsd:"application/rsd+xml",rsheet:"application/urc-ressheet+xml",rss:"application/rss+xml",rtf:"text/rtf",rtx:"text/richtext",rusd:"application/route-usd+xml",s3m:"audio/s3m",sbml:"application/sbml+xml",scq:"application/scvp-cv-request",scs:"application/scvp-cv-response",sdp:"application/sdp",senmlx:"application/senml+xml",sensmlx:"application/sensml+xml",ser:"application/java-serialized-object",setpay:"application/set-payment-initiation",setreg:"application/set-registration-initiation",sgi:"image/sgi",sgm:"text/sgml",sgml:"text/sgml",shex:"text/shex",shf:"application/shf+xml",shtml:"text/html",sieve:"application/sieve",sig:"application/pgp-signature",sil:"audio/silk",silo:"model/mesh",siv:"application/sieve",slim:"text/slim",slm:"text/slim",sls:"application/route-s-tsid+xml",smi:"application/smil+xml",smil:"application/smil+xml",snd:"audio/basic",so:"application/octet-stream",spdx:"text/spdx",spp:"application/scvp-vp-response",spq:"application/scvp-vp-request",spx:"audio/ogg",sql:"application/sql",sru:"application/sru+xml",srx:"application/sparql-results+xml",ssdl:"application/ssdl+xml",ssml:"application/ssml+xml",stk:"application/hyperstudio",stl:"model/stl",stpx:"model/step+xml",stpxz:"model/step-xml+zip",stpz:"model/step+zip",styl:"text/stylus",stylus:"text/stylus",svg:"image/svg+xml",svgz:"image/svg+xml",swidtag:"application/swid+xml",t:"text/troff",t38:"image/t38",td:"application/urc-targetdesc+xml",tei:"application/tei+xml",teicorpus:"application/tei+xml",text:"text/plain",tfi:"application/thraud+xml",tfx:"image/tiff-fx",tif:"image/tiff",tiff:"image/tiff",toml:"application/toml",tr:"text/troff",trig:"application/trig",ts:"video/mp2t",tsd:"application/timestamped-data",tsv:"text/tab-separated-values",ttc:"font/collection",ttf:"font/ttf",ttl:"text/turtle",ttml:"application/ttml+xml",txt:"text/plain",u3d:"model/u3d",u8dsn:"message/global-delivery-status",u8hdr:"message/global-headers",u8mdn:"message/global-disposition-notification",u8msg:"message/global",ubj:"application/ubjson",uri:"text/uri-list",uris:"text/uri-list",urls:"text/uri-list",vcard:"text/vcard",vrml:"model/vrml",vtt:"text/vtt",vxml:"application/voicexml+xml",war:"application/java-archive",wasm:"application/wasm",wav:"audio/wav",weba:"audio/webm",webm:"video/webm",webmanifest:"application/manifest+json",webp:"image/webp",wgsl:"text/wgsl",wgt:"application/widget",wif:"application/watcherinfo+xml",wmf:"image/wmf",woff:"font/woff",woff2:"font/woff2",wrl:"model/vrml",wsdl:"application/wsdl+xml",wspolicy:"application/wspolicy+xml",x3d:"model/x3d+xml",x3db:"model/x3d+fastinfoset",x3dbz:"model/x3d+binary",x3dv:"model/x3d-vrml",x3dvz:"model/x3d+vrml",x3dz:"model/x3d+xml",xaml:"application/xaml+xml",xav:"application/xcap-att+xml",xca:"application/xcap-caps+xml",xcs:"application/calendar+xml",xdf:"application/xcap-diff+xml",xdssc:"application/dssc+xml",xel:"application/xcap-el+xml",xenc:"application/xenc+xml",xer:"application/patch-ops-error+xml",xfdf:"application/xfdf",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xhvml:"application/xv+xml",xlf:"application/xliff+xml",xm:"audio/xm",xml:"text/xml",xns:"application/xcap-ns+xml",xop:"application/xop+xml",xpl:"application/xproc+xml",xsd:"application/xml",xsf:"application/prs.xsf+xml",xsl:"application/xml",xslt:"application/xml",xspf:"application/xspf+xml",xvm:"application/xv+xml",xvml:"application/xv+xml",yaml:"text/yaml",yang:"application/yang",yin:"application/yin+xml",yml:"text/yaml",zip:"application/zip"};function Ve(t){let e=(""+t).trim().toLowerCase(),i=e.lastIndexOf(".");return Ye[~i?e.substring(++i):e]}const Je=mt("https://astro-erudite.vercel.app"),We=lt(async(t,e,i)=>{const a=t.createAstro(Je,e,i);a.self=We;const s=["webp"],n="png",c=["gif","svg","jpg","jpeg"],{formats:g=s,pictureAttributes:p={},fallbackFormat:u,...o}=a.props;if(o.alt===void 0||o.alt===null)throw new x(ct);const f=o.class?.match(/\bastro-\w{8}\b/)?.[0];f&&(p.class?p.class=`${p.class} ${f}`:p.class=f);for(const v in o)v.startsWith("data-astro-cid")&&(p[v]=o[v]);const I=await rt(o.src),yt=await Promise.all(g.map(async v=>await z({...o,src:I,format:v,widths:o.widths,densities:o.densities})));let H=u??n;!u&&N(I)&&c.includes(I.format)&&(H=I.format);const T=await z({...o,format:H,widths:o.widths,densities:o.densities}),B={},M={};return o.sizes&&(M.sizes=o.sizes),T.srcSet.values.length>0&&(B.srcset=T.srcSet.attribute),O`${pt()}<picture${k(p)}> ${Object.entries(yt).map(([v,w])=>{const bt=o.densities||!o.densities&&!o.widths?`${w.src}${w.srcSet.values.length>0?", "+w.srcSet.attribute:""}`:w.srcSet.attribute;return O`<source${E(bt,"srcset")}${E(Ve(w.options.format??w.src)??`image/${w.options.format}`,"type")}${k(M)}>`})} <img${E(T.src,"src")}${k(B)}${k(T.attributes)}> </picture>`},"/home/nick/Documents/my-website/node_modules/astro/components/Picture.astro",void 0),Xe={service:{entrypoint:"astro/assets/services/sharp",config:{}},domains:[],remotePatterns:[]},z=async t=>await Ue(t,Xe),Ze={title:"My Hyrox Training Program",description:"My 6 times a week Hyrox Training Program. Im prepring for my first Hyrox in Benelux 2025",date:"2024-09-04T00:00:00.000Z",tags:["TrainingProgram"],authors:["Nick Hermann"]};function ai(){return[{depth:1,slug:"weekly-training-recap",text:"Weekly Training Recap"},{depth:2,slug:"monday",text:"Monday:"},{depth:2,slug:"tuesday",text:"Tuesday:"},{depth:2,slug:"wednesday",text:"Wednesday:"},{depth:2,slug:"thursday",text:"Thursday:"},{depth:2,slug:"friday",text:"Friday:"},{depth:2,slug:"sunday",text:"Sunday:"}]}const si=!0;function nt(t){const e={h1:"h1",h2:"h2",hr:"hr",p:"p",section:"section",...t.components};return r(e.section,{class:"heading","data-heading-rank":"1","aria-labelledby":"weekly-training-recap",children:[r(e.h1,{id:"weekly-training-recap",children:"Weekly Training Recap"}),`
`,r(e.p,{children:"This past week was packed with a variety of training sessions focusing on endurance, strength, and recovery. Below is a breakdown of the workouts I completed each day, with explanations for some of the more specialized terms."}),`
`,r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"monday",children:[r(e.h2,{id:"monday",children:"Monday:"}),`
`,r(e.p,{children:`Running: Easy steady-state session (SS2) for 1 hour.
Explanation: SS2 refers to a steady-state workout at a pace that is sustainable for a long time, typically moderate intensity to build aerobic endurance.`}),`
`]}),r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"tuesday",children:[r(e.h2,{id:"tuesday",children:"Tuesday:"}),`
`,r(e.p,{children:`SkiErg: Red Max Intervals, 2 sets of 1:30 minutes, with 4 minutes rest between each set.
Explanation: The SkiErg machine simulates the motion of Nordic skiing, focusing on upper body and core strength. Red Max Intervals are designed to push the body to its maximum aerobic capacity for short bursts.
Running: Red Threshold Intervals, 4 sets of 4 minutes.
Explanation: Red Threshold Intervals are high-intensity runs aimed at improving your lactate threshold, or the point at which your muscles start to fatigue from lactic acid buildup.`}),`
`]}),r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"wednesday",children:[r(e.h2,{id:"wednesday",children:"Wednesday:"}),`
`,r(e.p,{children:`RowErg: Tempo Intervals.
Explanation: The RowErg is similar to the SkiErg but simulates rowing. Tempo Intervals involve sustaining a challenging pace for several intervals, focusing on both aerobic endurance and technique.
Deadlift: Recovery sets, 2 sets of 125kg.
Explanation: Deadlifting is a fundamental strength exercise that targets the posterior chain (back, glutes, hamstrings). These recovery sets are lighter and used for technique refinement and muscle maintenance.`}),`
`]}),r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"thursday",children:[r(e.h2,{id:"thursday",children:"Thursday:"}),`
`,r(e.p,{children:`Squat: 3-5 Rule, 3 sets of 125kg.
Explanation: The 3-5 Rule is a strength training principle where each set consists of 3 to 5 repetitions at a heavy weight. This approach builds both strength and muscle mass.
Pendlay Row: 3-5 Rule, 5 sets of 100kg.
Explanation: The Pendlay Row is a type of bent-over row where the barbell starts and ends on the ground for each rep, promoting explosive strength in the upper back.`}),`
`]}),r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"friday",children:[r(e.h2,{id:"friday",children:"Friday:"}),`
`,r(e.p,{children:"A circuit that includes:"}),`
`,r(e.p,{children:`Running: 1km at steady-state pace (SS2)
Burpee Broad Jump: 80 meters
Lunges: 100 meters
Squats: 100 bodyweight squats`}),`
`,r(e.p,{children:`This combination of running and bodyweight exercises is designed for functional conditioning, targeting the legs, cardiovascular system, and full-body strength.
Saturday:`}),`
`,r(e.p,{children:`RowErg: Tempo Intervals
Deadlift: Recovery sets, 2 sets of 125kg.`}),`
`]}),r(e.section,{class:"heading","data-heading-rank":"2","aria-labelledby":"sunday",children:[r(e.h2,{id:"sunday",children:"Sunday:"}),`
`,r(e.p,{children:"Rest day"}),`
`,r(e.hr,{}),`
`,r(e.p,{children:"Conclusion"}),`
`,r(e.p,{children:"This week of training incorporated a balance of cardio, high-intensity intervals, and strength work, capped off with appropriate recovery. Whether it’s building endurance on the RowErg or SkiErg or pushing strength limits with deadlifts and squats, each session contributes to long-term fitness gains."}),`
`,r(e.p,{children:"Looking forward to another productive week!"})]})]})}function Ke(t={}){const{wrapper:e}=t.components||{};return e?r(e,{...t,children:r(nt,{...t})}):nt(t)}const ni="src/content/blog/2024/road-to-first-hyrox.mdx",oi="/home/nick/Documents/my-website/src/content/blog/2024/road-to-first-hyrox.mdx",L=(t={})=>Ke({...t,components:{Fragment:kt,...t.components,"astro-image":t.components?.img??wt}});L[Symbol.for("mdx-component")]=!0;L[Symbol.for("astro.needsHeadRendering")]=!Ze.layout;L.moduleId="/home/nick/Documents/my-website/src/content/blog/2024/road-to-first-hyrox.mdx";export{L as Content,si as __usesAstroImage,L as default,oi as file,Ze as frontmatter,ai as getHeadings,ni as url};
