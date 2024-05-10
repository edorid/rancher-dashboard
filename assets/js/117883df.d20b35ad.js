"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9801],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const o={sidebar_label:"Customizing Kubernetes Resources"},i="Customizing how Kubernetes Resources are Presented",s={unversionedId:"code-base-works/customising-how-k8s-resources-are-presented",id:"code-base-works/customising-how-k8s-resources-are-presented",title:"Customizing how Kubernetes Resources are Presented",description:"Type-specific Folders",source:"@site/docs/code-base-works/customising-how-k8s-resources-are-presented.md",sourceDirName:"code-base-works",slug:"/code-base-works/customising-how-k8s-resources-are-presented",permalink:"/code-base-works/customising-how-k8s-resources-are-presented",draft:!1,tags:[],version:"current",lastUpdatedAt:1715352652,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{sidebar_label:"Customizing Kubernetes Resources"},sidebar:"mainSidebar",previous:{title:"Cluster Management Resources",permalink:"/code-base-works/cluster-management-resources"},next:{title:"Directory Structure",permalink:"/code-base-works/directory-structure"}},l={},d=[{value:"Type-specific Folders",id:"type-specific-folders",level:2},{value:"Config",id:"config",level:3},{value:"Detail and Edit",id:"detail-and-edit",level:3},{value:"List",id:"list",level:3},{value:"Models",id:"models",level:3},{value:"Customising Tables",id:"customising-tables",level:2},{value:"Formatters",id:"formatters",level:3},{value:"Actions",id:"actions",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"customizing-how-kubernetes-resources-are-presented"},"Customizing how Kubernetes Resources are Presented"),(0,r.yg)("h2",{id:"type-specific-folders"},"Type-specific Folders"),(0,r.yg)("p",null,"These are where you do most of the daily work of customizing of how a particular k8s resource is presented. All ",(0,r.yg)("inlineCode",{parentName:"p"},"<type>"),"s throughout are the ",(0,r.yg)("strong",{parentName:"p"},"lowercased")," version of the k8s API group and kind, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"apps.deployment"),'.  Lowercase won\'t matter in case-insensitive macOS but will break when built in CI or on Linux.  Use the "Jump" menu in the UI to find the type you want and then copy the string out of the URL.'),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Path"),(0,r.yg)("th",{parentName:"tr",align:null},"Used for"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"Configuration of how products look and work; constants for labels, types, cookies, query params, etc that are used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"detail"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom components to show as the detail view for a particular resource instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"edit"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom components to show as the edit (or view config) view for a particular resource instance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom components to show as the list view for a resource type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"models"),(0,r.yg)("td",{parentName:"tr",align:null},"Custom logic extending the standard resource class for each API type and model returned by the API")))),(0,r.yg)("h3",{id:"config"},"Config"),(0,r.yg)("p",null,"Product configuration should precede everything else outlined in this guide as it determines which kubernetes resources are shown to the user and how they are grouped. There is one ",(0,r.yg)("inlineCode",{parentName:"p"},"config"),' entry for each "product", which defines things like:'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The condition for when that product should appear (usually the presence of a type in a certain k8s API group)"),(0,r.yg)("li",{parentName:"ul"},"What types should appear in the left nav, how they're labeled, grouped, ordered"),(0,r.yg)("li",{parentName:"ul"},"Custom table headers for each type\nRead more about products ",(0,r.yg)("a",{parentName:"li",href:"/code-base-works/products-and-navigation"},"here"),".")),(0,r.yg)("h3",{id:"detail-and-edit"},"Detail and Edit"),(0,r.yg)("p",null,"Kubernetes resources added to the side nav during product configuration will, by default, have list, edit-as-yaml and view-as-yaml pages, as well as some standard table/kebab menu actions (edit, clone, delete, etc) as outlined in ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-instance.js"),". These views can be customized using components with the resource's name in the ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"detail"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," directories. Custom detail and edit components are nested within the ",(0,r.yg)("inlineCode",{parentName:"p"},"ResourceDetail")," component.  Custom ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," components have a few props available: value, doneParams, doneRoute, mode, initialValue, liveValue, and realValue.  Detail components should generally use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ResourceTabs")," component to show the standard detail tabs as well as any specific ones you want to define.  Edit components similarly generally use ",(0,r.yg)("inlineCode",{parentName:"p"},"CruResource"),"."),(0,r.yg)("h3",{id:"list"},"List"),(0,r.yg)("p",null,"Resource lists can be customized a few different ways, one of which is to add a resource-specific component to the ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," directory. These components are nested within ",(0,r.yg)("inlineCode",{parentName:"p"},"ResourceList"),". Table columns, and each cell's component, can be customized other ways. When providing a custom list the resource's default headers (defined in the product config) can be accessed via "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"$store.getters['type-map/headersFor'](<schema>)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"list")," components are generally created to either: load resource-specific extra data up front, expand on page functionality outside the table, or use the table's slots to add additional content within the table, eg custom cells: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<ResourceTable ...>\n  <template #cell:workspace="{row}">\n    <span v-if="row.type !== MANAGEMENT_CLUSTER && row.metadata.namespace">{{ row.metadata.namespace }}</span>\n    <span v-else class="text-muted">&mdash;</span>\n  </template>\n</ResourceTable>\n')),(0,r.yg)("p",null,"If all you need to do is change table headers or use a particular component for a partiuclar column, that should be done during product configuration."),(0,r.yg)("h3",{id:"models"},"Models"),(0,r.yg)("p",null,"All objects returned from the API have a base-class of Resource, and extend from one of 3 sub-classes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SteveModel: For regular resources accessed through the Steve API (/v1)"),(0,r.yg)("li",{parentName:"ul"},"HybridModel For Rancher-defined resources with non-standard behaviors (e.g. name and description at the top-level) accessed through Steve (/v1).  Primarily ",(0,r.yg)("inlineCode",{parentName:"li"},"management.cattle.io.*"),"."),(0,r.yg)("li",{parentName:"ul"},"NormanModel: For Rancher-defined resources accessed through the older Norman API (/v3)")),(0,r.yg)("p",null,"Additional customization can be done on a per-type basis by defining a ",(0,r.yg)("inlineCode",{parentName:"p"},"models/<type>.js"),"."),(0,r.yg)("h2",{id:"customising-tables"},"Customising Tables"),(0,r.yg)("p",null,"The which table columns to show for a given type are defined in the product config, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"headers")," function. (If no additional configuration is defined for a resource, table headers are taken from the schema) "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"headers(CONFIG_MAP, [NAME_COL, NAMESPACE_COL, KEYS, AGE]);\n")),(0,r.yg)("p",null,"Where the first argument is the resource type, and the second is an array of table column definitions. "),(0,r.yg)("p",null,"Common table column definitions can be found in ",(0,r.yg)("inlineCode",{parentName:"p"},"/config/table-headers.js"),". If a column is specific to one type, it may be defined in-place in the product config instead. These definitions determine some basic positioning, which data should be used in the column, what component should be used in each cell, and how to sort the column. What's shown in the row will either be a property from the row (",(0,r.yg)("inlineCode",{parentName:"p"},"value"),") or a component (",(0,r.yg)("inlineCode",{parentName:"p"},"formatter"),", which links to a component in ",(0,r.yg)("inlineCode",{parentName:"p"},"/components/formatter")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"<plugin dir>/formatters"),"), or overriden using a custom list component and ResourceTable slots (see example above)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"export const STATE = {\n  name:      'state',\n  labelKey:  'tableHeaders.state',\n  sort:      ['stateSort', 'nameSort'],\n  value:     'stateDisplay',\n  getValue:  row => row.stateDisplay,\n  width:     100,\n  default:   'unknown',\n  formatter: 'BadgeStateFormatter',\n};\n")),(0,r.yg)("h3",{id:"formatters"},"Formatters"),(0,r.yg)("p",null,"Formatters are used for any table content beyond plain text. Consequently, there are many existing formatters already defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"shell/components/formatter")," and examples of how to use them. Formatters are given ",(0,r.yg)("inlineCode",{parentName:"p"},"value"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"row"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"col")," props: ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," is as it is defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"headers"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"row")," is the current resource, and ",(0,r.yg)("inlineCode",{parentName:"p"},"col")," is the column definition. "),(0,r.yg)("h3",{id:"actions"},"Actions"),(0,r.yg)("p",null,"The actions menu for a table row is constructed from the actions returned via the resource class' ",(0,r.yg)("inlineCode",{parentName:"p"},"availableActions")," property. Therefore the base list comes from the common ",(0,r.yg)("inlineCode",{parentName:"p"},"resource-instance")," which can be supplemented/overridden by the resource type's ",(0,r.yg)("inlineCode",{parentName:"p"},"model"),". Individual actions can be marked as ",(0,r.yg)("inlineCode",{parentName:"p"},"bulkable"),", which means they are shown as buttons above the list and applied to all selected rows that also have the action enabled."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"{\n  action:     'promptRemove',\n  altAction:  'remove',\n  label:      this.t('action.remove'),\n  icon:       'icon icon-trash',\n  bulkable:   true,\n  enabled:    this.canDelete,\n  bulkAction: 'promptRemove',\n}\n")))}u.isMDXComponent=!0}}]);