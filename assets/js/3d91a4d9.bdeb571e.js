"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[7242],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const o={},i="Localization",c={unversionedId:"extensions/advanced/localization",id:"extensions/advanced/localization",title:"Localization",description:"Extensive documentation on translations and localizations can be found in the On-screen Text and Translations section. Apart from directory location, the same rules for Rancher Dashboard apply for extensions.",source:"@site/docs/extensions/advanced/localization.md",sourceDirName:"extensions/advanced",slug:"/extensions/advanced/localization",permalink:"/extensions/advanced/localization",draft:!1,tags:[],version:"current",lastUpdatedAt:1715352652,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cluster Provisioning (RKE2 / Custom)",permalink:"/extensions/advanced/provisioning"},next:{title:"Hooks",permalink:"/extensions/advanced/hooks"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"localization"},"Localization"),(0,a.yg)("p",null,"Extensive documentation on translations and localizations can be found in the ",(0,a.yg)("a",{parentName:"p",href:"/code-base-works/on-screen-text-and-translations"},"On-screen Text and Translations")," section. Apart from directory location, the same rules for Rancher Dashboard apply for extensions."),(0,a.yg)("p",null,"Generating localizations in extensions is done per package via a translation YAML file found in the ",(0,a.yg)("inlineCode",{parentName:"p"},"./pkg/<extension-name>/l10n")," directory. If a translation is not included in the user's selected language, it will fall back to English."))}u.isMDXComponent=!0}}]);