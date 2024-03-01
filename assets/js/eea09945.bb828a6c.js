"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[861],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,y=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={toc_max_heading_level:4},i="Components",l={unversionedId:"extensions/api/components/components",id:"extensions/api/components/components",title:"Components",description:"Rancher uses dynamic components in the Dashboard UI. Extensions can register components for Rancher to discover and use. Components",source:"@site/docs/extensions/api/components/components.md",sourceDirName:"extensions/api/components",slug:"/extensions/api/components/",permalink:"/dashboard/extensions/api/components/",draft:!1,tags:[],version:"current",lastUpdatedAt:1709257405,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{toc_max_heading_level:4},sidebar:"mainSidebar",previous:{title:"Table Columns",permalink:"/dashboard/extensions/api/table-columns"},next:{title:"Resource Views",permalink:"/dashboard/extensions/api/components/resources"}},p={},s=[{value:"register",id:"register",level:2},{value:"Component Types",id:"component-types",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"components"},"Components"),(0,a.yg)("p",null,"Rancher uses dynamic components in the Dashboard UI. Extensions can register components for Rancher to discover and use. Components\nare Vue components and similar to panels, but are used in a single specific context."),(0,a.yg)("p",null,"Components are added to Rancher via the ",(0,a.yg)("inlineCode",{parentName:"p"},"register")," method."),(0,a.yg)("h2",{id:"register"},"register"),(0,a.yg)("p",null,"This method registers a component."),(0,a.yg)("p",null,"Method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"plugin.register(type: String, id: String, component: Function);\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Arguments")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"type")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Type of the component to register (indicates where the component is used)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Unique id for the component")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"component")),(0,a.yg)("td",{parentName:"tr",align:null},"Function"),(0,a.yg)("td",{parentName:"tr",align:null},"Vue Component")))),(0,a.yg)("h3",{id:"component-types"},"Component Types"),(0,a.yg)("p",null,"The Rancher Dashboard provides the following standard component types:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"detail")),(0,a.yg)("td",{parentName:"tr",align:null},"Detail component for a given resource type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"edit")),(0,a.yg)("td",{parentName:"tr",align:null},"Edit/Create/View component for a given resource type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"list")),(0,a.yg)("td",{parentName:"tr",align:null},"List component for a given resource type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"cloud-credential")),(0,a.yg)("td",{parentName:"tr",align:null},"Cloud credentials are components that add provider-specific UI to create cloud credentials, needed to provision clusters")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"machine-config")),(0,a.yg)("td",{parentName:"tr",align:null},"Machine configs components are used to add provider-specific UI to the rke2/k3s provisioning page")))))}m.isMDXComponent=!0}}]);