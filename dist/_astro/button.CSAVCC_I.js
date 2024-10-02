import{r as u}from"./index.CVpbhN_F.js";import{j as N,c as j,S as k}from"./index.CT3Bq3gb.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...t)=>t.filter((r,e,n)=>!!r&&n.indexOf(r)===e).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=u.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:d,...v},f)=>u.createElement("svg",{ref:f,...V,width:r,height:r,stroke:t,strokeWidth:n?Number(e)*24/Number(r):e,className:x("lucide",s),...v},[...d.map(([a,i])=>u.createElement(a,i)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(t,r)=>{const e=u.forwardRef(({className:n,...s},o)=>u.createElement(p,{ref:o,iconNode:r,className:x(`lucide-${A(t)}`,n),...s}));return e.displayName=`${t}`,e};function h(t){var r,e,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(e=h(t[r]))&&(n&&(n+=" "),n+=e);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function B(){for(var t,r,e=0,n="";e<arguments.length;)(t=arguments[e++])&&(r=h(t))&&(n&&(n+=" "),n+=r);return n}const y=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,g=B,E=(t,r)=>e=>{var n;if(r?.variants==null)return g(t,e?.class,e?.className);const{variants:s,defaultVariants:o}=r,d=Object.keys(s).map(a=>{const i=e?.[a],c=o?.[a];if(i===null)return null;const l=y(i)||y(c);return s[a][l]}),v=e&&Object.entries(e).reduce((a,i)=>{let[c,l]=i;return l===void 0||(a[c]=l),a},{}),f=r==null||(n=r.compoundVariants)===null||n===void 0?void 0:n.reduce((a,i)=>{let{class:c,className:l,...w}=i;return Object.entries(w).every(C=>{let[b,m]=C;return Array.isArray(m)?m.includes({...o,...v}[b]):{...o,...v}[b]===m})?[...a,c,l]:a},[]);return g(t,d,f,e?.class,e?.className)},O=E("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-secondary/50",destructive:"bg-destructive text-destructive-foreground over:bg-destructive/50",outline:"border border-input bg-background hover:bg-secondary/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),L=u.forwardRef(({className:t,variant:r,size:e,asChild:n=!1,...s},o)=>{const d=n?k:"button";return N.jsx(d,{className:j(O({variant:r,size:e,className:t})),ref:o,...s})});L.displayName="Button";export{L as B,O as b,S as c};
