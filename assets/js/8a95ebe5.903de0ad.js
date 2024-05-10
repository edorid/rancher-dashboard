"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4519],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="Metadata",p={unversionedId:"extensions/api/metadata",id:"extensions/api/metadata",title:"Metadata",description:"Extensions need to provide metadata so that can it be displayed in the Rancher UI.",source:"@site/docs/extensions/api/metadata.md",sourceDirName:"extensions/api",slug:"/extensions/api/metadata",permalink:"/extensions/api/metadata",draft:!1,tags:[],version:"current",lastUpdatedAt:1715352652,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/extensions/api/concepts"},next:{title:"Products",permalink:"/extensions/api/nav/products"}},s={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"metadata"},"Metadata"),(0,a.yg)("p",null,"Extensions need to provide metadata so that can it be displayed in the Rancher UI."),(0,a.yg)("p",null,"This is done my setting the ",(0,a.yg)("inlineCode",{parentName:"p"},"metadata")," property on the ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin")," object that is passed to the init function for an extension package."),(0,a.yg)("p",null,"This should pull metadata from the extension's ",(0,a.yg)("inlineCode",{parentName:"p"},"pacakge.json")," file, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  // importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  plugin.metadata = require('./package.json');\n\n}\n")),(0,a.yg)("p",null,"In addition, if you add a ",(0,a.yg)("inlineCode",{parentName:"p"},"README.md")," file to your extension root folder, it's content will be used to populate the ",(0,a.yg)("inlineCode",{parentName:"p"},"detail")," portion of the product description."),(0,a.yg)("p",null,"Example of extension metadata shown in the Rancher Extensions UI:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Product Information",src:n(2158).A,width:"1480",height:"838"})))}u.isMDXComponent=!0},2158:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/product-information-ac8d2051274918a775f1c7f811a3a43e.png"}}]);