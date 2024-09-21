const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.V2nzHfIu.js","_astro/index.CVpbhN_F.js"])))=>i.map(i=>d[i]);
const R="modulepreload",T=function(e){return"/"+e},b={},_=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");n=Promise.allSettled(r.map(m=>{if(m=T(m),m in b)return;b[m]=!0;const d=m.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${p}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":R,d||(c.as="script"),c.crossOrigin="",c.href=m,a&&c.setAttribute("nonce",a),document.head.appendChild(c),d)return new Promise((l,u)=>{c.addEventListener("load",l),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return n.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},ee={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},te={name:"ImageMissingAlt",title:'Image missing required "alt" property.',message:'Image missing "alt" property. "alt" text is required to describe important images on the page.',hint:'Use an empty string ("") for decorative images.'},re={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},v={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are required unless in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."},ie={name:"FailedToFetchRemoteImageDimensions",title:"Failed to retrieve remote image dimensions",message:e=>`Failed to get the dimensions for ${e}.`,hint:"Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."},I={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,r)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${r.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},x={name:"UnsupportedImageConversion",title:"Unsupported image conversion",message:"Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."},S={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,r)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${r}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},se={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},ae={name:"ExpectedNotESMImage",title:"Expected image options, not an ESM-imported image.",message:"An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.",hint:"Try changing `getImage(myImage)` to `getImage({ src: myImage })`"},O={name:"IncompatibleDescriptorOptions",title:"Cannot set both `densities` and `widths`",message:"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",hint:"Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."},E={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},ne={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},oe={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files.`,hint:"Check the pattern for typos."},F={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."};function j(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function q(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=j(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),i=[];for(let s=-2;s<=2;s++)r[t.line+s]&&i.push(t.line+s);let n=0;for(const s of i){let a=`> ${s}`;a.length>n&&(n=a.length)}let o="";for(const s of i){const a=s===t.line-1;o+=a?"> ":"  ",o+=`${s+1} | ${r[s]}
`,a&&(o+=`${Array.from({length:n}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return o}class g extends Error{loc;title;hint;frame;type="AstroError";constructor(t,r){const{name:i,title:n,message:o,stack:s,location:a,hint:m,frame:d}=t;super(o,r),this.title=n,this.name=i,o&&(this.message=o),this.stack=s||this.stack,this.loc=a,this.hint=m,this.frame=d}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=q(t,r)}static is(t){return t.type==="AstroError"}}function C(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function N(e){return e.startsWith("/")?e.substring(1):e}function D(e){return e.replace(/^\/|\/$/g,"")}function k(e){return typeof e=="string"||e instanceof String}function H(...e){return e.filter(k).map((t,r)=>r===0?C(t):r===e.length-1?N(t):D(t)).join("/")}function L(e){return/^(?:http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}const A=["jpeg","jpg","png","tiff","webp","gif","svg","avif"],M="webp",z=["src","width","height","format","quality"];function y(e){return typeof e=="object"}function ce(e){return typeof e=="string"}async function me(e){return typeof e=="object"&&"then"in e?(await e).default??await e:e}function G(e,t){return B(e,t.protocol)&&U(e,t.hostname,!0)&&V(e,t.port)&&J(e,t.pathname)}function V(e,t){return!t||t===e.port}function B(e,t){return!t||t===e.protocol.slice(0,-1)}function U(e,t,r){if(t){if(!r||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const i=t.slice(2);return i!==e.hostname&&e.hostname.endsWith(i)}else if(t.startsWith("*.")){const i=t.slice(1);return e.hostname.replace(i,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function J(e,t,r){if(t)if(t.endsWith("*")){if(t.endsWith("/**")){const i=t.slice(0,-2);return i!==e.pathname&&e.pathname.startsWith(i)}else if(t.endsWith("/*")){const i=t.slice(0,-1);return e.pathname.replace(i,"").split("/").filter(Boolean).length===1}}else return t===e.pathname;else return!0;return!1}function Q(e,{domains:t=[],remotePatterns:r=[]}){if(!L(e))return!1;const i=new URL(e);return t.some(n=>U(i,n))||r.some(n=>G(i,n))}function he(e){return e?"transform"in e:!1}function Y(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const f={propertiesToHash:z,validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new g({...S,message:S.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,r)=>r===void 0?null:r))});if(y(e.src)){if(!A.includes(e.src.format))throw new g({...I,message:I.message(e.src.format,e.src.src,A)});if(e.widths&&e.densities)throw new g(O);if(e.src.format==="svg"&&(e.format="svg"),e.src.format==="svg"&&e.format!=="svg"||e.src.format!=="svg"&&e.format==="svg")throw new g(x)}else{if(e.src.startsWith("/@fs/")||!L(e.src)&&!e.src.startsWith("/"))throw new g({...E,message:E.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new g({...v,message:v.message(t,e.src)})}return e.format||(e.format=M),e.width&&(e.width=Math.round(e.width)),e.height&&(e.height=Math.round(e.height)),e},getHTMLAttributes(e){const{targetWidth:t,targetHeight:r}=W(e),{src:i,width:n,height:o,format:s,quality:a,densities:m,widths:d,formats:p,...c}=e;return{...c,width:t,height:r,loading:c.loading??"lazy",decoding:c.decoding??"async"}},getSrcSet(e){const t=[],{targetWidth:r}=W(e),{widths:i,densities:n}=e,o=e.format??M;let s=e.width,a=1/0;y(e.src)&&(s=e.src.width,a=s);const{width:m,height:d,...p}=e,c=[];if(n){const l=n.map(h=>typeof h=="number"?h:parseFloat(h)),u=l.sort().map(h=>Math.round(r*h));c.push(...u.map((h,P)=>({maxTargetWidth:Math.min(h,a),descriptor:`${l[P]}x`})))}else i&&c.push(...i.map(l=>({maxTargetWidth:Math.min(l,a),descriptor:`${l}w`})));for(const{maxTargetWidth:l,descriptor:u}of c){const h={...p};l!==s?h.width=l:e.width&&e.height&&(h.width=e.width,h.height=e.height),t.push({transform:h,descriptor:u,attributes:{type:`image/${o}`}})}return t},getURL(e,t){const r=new URLSearchParams;if(y(e.src))r.append("href",e.src.src);else if(Q(e.src,t))r.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([o,s])=>{e[s]&&r.append(o,e[s].toString())}),`${H("/","/_image")}?${r}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function W(e){let t=e.width,r=e.height;if(y(e.src)){const i=e.src.width/e.src.height;r&&!t?t=Math.round(r*i):t&&!r?r=Math.round(t/i):!t&&!r&&(t=e.src.width,r=e.src.height)}return{targetWidth:t,targetHeight:r}}let w;const $={low:25,mid:50,high:80,max:100};async function K(){let e;try{e=(await _(async()=>{const{default:t}=await import("../index.V2nzHfIu.js").then(r=>r.i);return{default:t}},__vite__mapDeps([0,1]))).default}catch{throw new g(F)}return e.cache(!1),e}const X={validateOptions:f.validateOptions,getURL:f.getURL,parseURL:f.parseURL,getHTMLAttributes:f.getHTMLAttributes,getSrcSet:f.getSrcSet,async transform(e,t,r){w||(w=await K());const i=t;if(i.format==="svg")return{data:e,format:"svg"};const n=w(e,{failOnError:!1,pages:-1,limitInputPixels:r.service.config.limitInputPixels});if(n.rotate(),i.height&&!i.width?n.resize({height:Math.round(i.height)}):i.width&&n.resize({width:Math.round(i.width)}),i.format){let a;if(i.quality){const m=Y(i.quality);typeof m=="number"?a=m:a=i.quality in $?$[i.quality]:void 0}n.toFormat(i.format,{quality:a})}const{data:o,info:s}=await n.toBuffer({resolveWithObject:!0});return{data:o,format:s.format}}};var Z=X;const le=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{g as A,z as D,se as E,ie as F,ee as I,_,ne as a,oe as b,S as c,ae as d,y as e,he as f,re as g,te as h,ce as i,me as r,le as s};
