import{j as a,c as t}from"./index.H73sFHqh.js";import{r as m}from"./index.CVpbhN_F.js";import{c as x,b as y}from"./button.h45kiHkt.js";import"./astro/assets-service.CLjW7eCV.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=x("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=x("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=x("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),p=({className:i,...s})=>a.jsx("nav",{role:"navigation","aria-label":"pagination",className:t("mx-auto flex w-full justify-center",i),...s});p.displayName="Pagination";const d=m.forwardRef(({className:i,...s},e)=>a.jsx("ul",{ref:e,className:t("flex flex-row items-center gap-1",i),...s}));d.displayName="PaginationContent";const l=m.forwardRef(({className:i,...s},e)=>a.jsx("li",{ref:e,className:t("",i),...s}));l.displayName="PaginationItem";const r=({className:i,isActive:s,isDisabled:e,size:c="icon",...o})=>a.jsx("a",{"aria-current":s?"page":void 0,className:t(y({variant:s?"outline":"ghost",size:c}),e&&"pointer-events-none opacity-50",i),...o});r.displayName="PaginationLink";const h=({className:i,isDisabled:s,...e})=>a.jsxs(r,{"aria-label":"Go to previous page",size:"default",className:t("gap-1 pl-2.5",i),isDisabled:s,...e,children:[a.jsx(g,{className:"h-4 w-4"}),a.jsx("span",{children:"Previous"})]});h.displayName="PaginationPrevious";const j=({className:i,isDisabled:s,...e})=>a.jsxs(r,{"aria-label":"Go to next page",size:"default",className:t("gap-1 pr-2.5",i),isDisabled:s,...e,children:[a.jsx("span",{children:"Next"}),a.jsx(u,{className:"h-4 w-4"})]});j.displayName="PaginationNext";const f=({className:i,...s})=>a.jsxs("span",{"aria-hidden":!0,className:t("flex h-9 w-9 items-center justify-center",i),...s,children:[a.jsx(v,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"More pages"})]});f.displayName="PaginationEllipsis";const b=({currentPage:i,totalPages:s,baseUrl:e})=>{const c=Array.from({length:s},(n,N)=>N+1),o=n=>n===1?e:`${e}${n}`;return a.jsx(p,{children:a.jsxs(d,{className:"flex-wrap",children:[a.jsx(l,{children:a.jsx(h,{href:i>1?o(i-1):void 0,isDisabled:i===1})}),c.map(n=>a.jsx(l,{children:a.jsx(r,{href:o(n),isActive:n===i,children:n})},n)),s>5&&a.jsx(l,{children:a.jsx(f,{})}),a.jsx(l,{children:a.jsx(j,{href:i<s?o(i+1):void 0,isDisabled:i===s})})]})})};export{b as default};
