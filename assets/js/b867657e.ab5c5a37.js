"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9279],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6962:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(8168),r=(t(6540),t(5680));const a={},i="Routing",s={unversionedId:"extensions/api/nav/routing",id:"extensions/api/nav/routing",title:"Routing",description:"Routes definition for an Extension as a top-level product",source:"@site/docs/extensions/api/nav/routing.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/routing",permalink:"/extensions/api/nav/routing",draft:!1,tags:[],version:"current",lastUpdatedAt:1715352652,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Side menu",permalink:"/extensions/api/nav/side-menu"},next:{title:"Actions",permalink:"/extensions/api/actions"}},l={},u=[{value:"Routes definition for an Extension as a top-level product",id:"routes-definition-for-an-extension-as-a-top-level-product",level:2},{value:"Routes definitions for an Extension as a cluster-level product",id:"routes-definitions-for-an-extension-as-a-cluster-level-product",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"routing"},"Routing"),(0,r.yg)("h2",{id:"routes-definition-for-an-extension-as-a-top-level-product"},"Routes definition for an Extension as a top-level product"),(0,r.yg)("p",null,"Extensions should use a ",(0,r.yg)("inlineCode",{parentName:"p"},"pages")," directory, as the shell currently does, but routing needs to be explicitly defined then added in the extension index using the extension ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," method. Extension routes can override existing dashboard routes: they'll be loaded on extension entry and unloaded (with old dashboard routes re-loaded...) on extension leave. "),(0,r.yg)("p",null,"As touched on above, cluster and product information used to connect to the cluster and define navigation is determined from the route. Consequently, while extensions have a lot of control over their own routing, anything tied into one kubernetes cluster should be nested in ",(0,r.yg)("inlineCode",{parentName:"p"},"pages/c/_cluster"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: All of the routes defined when setting up your Extension product (",(0,r.yg)("inlineCode",{parentName:"p"},"product.ts"),") need to be defined as routes with the ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," method.")),(0,r.yg)("p",null,"Within the ",(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," in your root folder, where you define your extension configuration, you can just use the ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," extension method, such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\nimport extensionRouting from './routing/extension-routing';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n\n  // => => => Add Vue Routes\n  plugin.addRoutes(extensionRouting);\n}\n")),(0,r.yg)("p",null,"Let's then take into consideration the following example a of ",(0,r.yg)("inlineCode",{parentName:"p"},"product.ts")," config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME = 'page1';\n  \n  const { \n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n  \n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  \n\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n\n  // => => => registering the defined pages as side-menu entries\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);\n}\n")),(0,r.yg)("p",null,"One above example we are registering 2 pages: a resource page called ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and a custom page called ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". These need to be reflected in the routes definition that is provided to the ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," method."),(0,r.yg)("p",null,"Please note that for a Top-level product, routing follows a defined pattern:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"route: {\n  name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n  params: { \n    product: YOUR_PRODUCT_NAME, \n    cluster: BLANK_CLUSTER \n  }\n}\n")),(0,r.yg)("p",null,"Within the params property, we define ",(0,r.yg)("strong",{parentName:"p"},"cluster")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"BLANK_CLUSTER"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"BLANK_CLUSTER"),' is a notion on which Rancher will ignore the context of the cluster the user is browsing, which is the desired effect when creating a product that is "above" the notion of a cluster.'),(0,r.yg)("p",null,"This pattern is a very important aspect for Top-level products that you should be mindful at all times when creating a product of this type."),(0,r.yg)("p",null,"Considering the above, ",(0,r.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," would then have to be defined like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// custom pages should be created as VueJS components. Usually stored on the /pages folder on the extension\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\nimport MyCustomPage from '../pages/myCustomPage.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'myProductName';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  // this is an example of a custom page if you wanted to register one\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  }\n];\n\nexport default routes;\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," parameter is mandatory in order for the routes to work properly!")),(0,r.yg)("p",null,"On the above example, we are registering the route for our custom page called ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". At this point we are still missing the route for ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME"),", which we will cover next. "),(0,r.yg)("p",null,"Just to reinforce the message, it is imperative that the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," follow this convention needed for Extension top-level products, which we cover on this ",(0,r.yg)("a",{parentName:"p",href:"/extensions/api/concepts#overview-on-routing-structure-for-a-top-level-extension-product"},"overview"),"."),(0,r.yg)("p",null,"As you can see, we've added a ",(0,r.yg)("inlineCode",{parentName:"p"},"meta"),' parameter with the product and cluster names. This is necessary to exist on the routes definition in order to ensure that all the wiring "under the hood" is handled correctly by Rancher Dashboard.'),(0,r.yg)("p",null,"Now, for a resource page like ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME"),", one can leverage the usage of the default components for a list/create/edit routes used on Rancher Dashboard in such a way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\nimport MyCustomPage from '../pages/myCustomPage.vue';\nimport ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';\nimport CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';\nimport ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';\nimport ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'myProductName';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  },\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/:resource`,\n    component: ListResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  },\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-resource-create`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/:resource/create`,\n    component: CreateResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  },\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-resource-id`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/:resource/:id`,\n    component: ViewResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  },\n  {\n    name:      `${ YOUR_PRODUCT_NAME }-c-cluster-resource-namespace-id`,\n    path:      `/${ YOUR_PRODUCT_NAME }/c/:cluster/:resource/:namespace/:id`,\n    component: ViewNamespacedResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME,\n      cluster: BLANK_CLUSTER\n    },\n  }\n];\n\nexport default routes;\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: Notice that we didn't need to define the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," under ",(0,r.yg)("inlineCode",{parentName:"p"},"meta"),"? Since it is a wildcard parameter on the path and it's not mandatory like ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster")," for a top-level product, we don't need to define it on the routes definition.")),(0,r.yg)("p",null,"On the above routes definition for ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," the user will get the default list view automatically wired in to display the list of ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," instances (",(0,r.yg)("inlineCode",{parentName:"p"},"${ YOUR_PRODUCT_NAME }-c-cluster-resource"),")."),(0,r.yg)("p",null,"The remaining routes will ensure that all the necessary connections are done for create/edit views, but they will not provide any interfaces for those view types! Those will have to be created by the developer and placed on folders with the correct naming in order to make them work. (",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," folders)."),(0,r.yg)("p",null,"Let's then look at an example of this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const YOUR_K8S_RESOURCE_NAME = 'your-custom-crd-name';\n")),(0,r.yg)("p",null,"If a user wishes to create custom views for the resource ",(0,r.yg)("inlineCode",{parentName:"p"},"your-custom-crd-name"),", there are three types to consider: ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"detail"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),"."),(0,r.yg)("p",null,"For a ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," view, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"list")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"list")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("p",null,"For a ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," view, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"detail")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"detail")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("p",null,"For an ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," view (which can also serve as a create view), follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"edit")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"edit")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," view can also be used as a ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," view if you prefer not to duplicate it.")),(0,r.yg)("p",null,"By adhering to this pattern, Rancher Dashboard will automatically take care of the wiring for you, ensuring a seamless experience for all three view types."),(0,r.yg)("p",null,"The routing definition on this example for ",(0,r.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," is based on Vue Router. Don't forget to check the official documentation ",(0,r.yg)("a",{parentName:"p",href:"https://router.vuejs.org/guide/"},"here"),"."),(0,r.yg)("h2",{id:"routes-definitions-for-an-extension-as-a-cluster-level-product"},"Routes definitions for an Extension as a cluster-level product"),(0,r.yg)("p",null,"Routes definitions start very similar as a top-level product with the ",(0,r.yg)("inlineCode",{parentName:"p"},"index.ts")," in your root folder, where you define your extension configuration, you can just use the ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," extension method, such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\nimport extensionRouting from './routing/extension-routing';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  // it will grab information such as `name` and `description`\n  plugin.metadata = require('./package.json');\n\n  // Load a product\n  plugin.addProduct(require('./product'));\n\n  // => => => Add Vue Routes\n  plugin.addRoutes(extensionRouting);\n}\n")),(0,r.yg)("p",null,"For a Cluster-level product, let's then take into consideration the following example a of ",(0,r.yg)("inlineCode",{parentName:"p"},"product.ts")," config:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  const CUSTOM_PAGE_NAME = 'page1';\n  \n  const { \n    product,\n    configureType,\n    virtualType,\n    basicType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME\n      }\n    }\n  });\n  \n  // defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  \n\n  // creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME\n      }\n    }\n  });\n\n  // => => => registering the defined pages as side-menu entries\n  basicType([YOUR_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);\n}\n")),(0,r.yg)("p",null,"In the above example we are registering 2 pages: a resource page called ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," and a custom page called ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". These need to be reflected in the routes definition that is provided to the ",(0,r.yg)("inlineCode",{parentName:"p"},"addRoutes")," method."),(0,r.yg)("p",null,"Please note that for a Cluster-level product, routing follows a defined pattern:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"route: {\n   name:   `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n   params: { product: YOUR_PRODUCT_NAME }\n}\n")),(0,r.yg)("p",null,"Within the params property, we do not define the cluster parameter as this is provided by the context in which cluster the user is currently browsing."),(0,r.yg)("p",null,"This pattern is a very important aspect for Cluster-level products that you should be mindful at all times when creating a product of this type."),(0,r.yg)("p",null,"Considering the above, ",(0,r.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," would then have to be defined like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// custom pages should be created as VueJS components. Usually stored on the /pages folder on the extension\nimport MyCustomPage from '../pages/myCustomPage.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'myProductName';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  // this is an example of a custom page if you wanted to register one\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  }\n];\n\nexport default routes;\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: the ",(0,r.yg)("inlineCode",{parentName:"p"},"meta")," parameter is mandatory in order for the routes to work properly!")),(0,r.yg)("p",null,"On the above example, we are registering the route for our custom page called ",(0,r.yg)("inlineCode",{parentName:"p"},"CUSTOM_PAGE_NAME"),". At this point we are still missing the route for ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME"),", which we will cover next. "),(0,r.yg)("p",null,"Just to reinforce the message, it is imperative that the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," follow this convention needed for Extension cluster-level products as well."),(0,r.yg)("p",null,"As you can see, we've added a ",(0,r.yg)("inlineCode",{parentName:"p"},"meta"),' parameter with the product name. This is necessary to exist on the routes definition in order to ensure that all the wiring "under the hood" is handled correctly by Rancher Dashboard.'),(0,r.yg)("p",null,"Now, for a resource page like ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME"),", one can leverage the usage of the default components for a list/create/edit routes used on Rancher Dashboard in such a way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import MyCustomPage from '../pages/myCustomPage.vue';\nimport ListResource from '@shell/pages/c/_cluster/_product/_resource/index.vue';\nimport CreateResource from '@shell/pages/c/_cluster/_product/_resource/create.vue';\nimport ViewResource from '@shell/pages/c/_cluster/_product/_resource/_id.vue';\nimport ViewNamespacedResource from '@shell/pages/c/_cluster/_product/_resource/_namespace/_id.vue';\n\n// to achieve naming consistency throughout the extension\n// we recommend this to be defined on a config file and exported\n// so that the developer can import it wherever it needs to be used\nconst YOUR_PRODUCT_NAME = 'myProductName';\nconst CUSTOM_PAGE_NAME = 'page1';\n\nconst routes = [\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-${ CUSTOM_PAGE_NAME }`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/${ CUSTOM_PAGE_NAME }`,\n    component: MyCustomPage,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource`,\n    component: ListResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-create`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/create`,\n    component: CreateResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-id`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:id`,\n    component: ViewResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  },\n  {\n    name:      `c-cluster-${ YOUR_PRODUCT_NAME }-resource-namespace-id`,\n    path:      `/c/:cluster/${ YOUR_PRODUCT_NAME }/:resource/:namespace/:id`,\n    component: ViewNamespacedResource,\n    meta:      {\n      product: YOUR_PRODUCT_NAME\n    },\n  }\n];\n\nexport default routes;\n")),(0,r.yg)("p",null,"On the above routes definition for ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," the user will get the default list view automatically wired in to display the list of ",(0,r.yg)("inlineCode",{parentName:"p"},"YOUR_K8S_RESOURCE_NAME")," instances (",(0,r.yg)("inlineCode",{parentName:"p"},"c-cluster-${ YOUR_PRODUCT_NAME }-resource"),")."),(0,r.yg)("p",null,"The remaining routes will ensure that all the necessary connections are done for create/edit views, but they will not provide any interfaces for those view types! Those will have to be created by the developer and placed on folders with the correct naming in order to make them work. (",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," folders)."),(0,r.yg)("p",null,"Let's then look at an example of this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const YOUR_K8S_RESOURCE_NAME = 'your-custom-crd-name';\n")),(0,r.yg)("p",null,"If a user wishes to create custom views for the resource ",(0,r.yg)("inlineCode",{parentName:"p"},"your-custom-crd-name"),", there are three types to consider: ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"detail"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),"."),(0,r.yg)("p",null,"For a ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," view, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"list")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"list")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("p",null,"For a ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," view, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"detail")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"detail")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("p",null,"For an ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," view (which can also serve as a create view), follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder named ",(0,r.yg)("inlineCode",{parentName:"li"},"edit")," inside your extension folder."),(0,r.yg)("li",{parentName:"ol"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"li"},"edit")," folder, create a file named ",(0,r.yg)("inlineCode",{parentName:"li"},"your-custom-crd-name.vue")," for the Vue component.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: The ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," view can also be used as a ",(0,r.yg)("inlineCode",{parentName:"p"},"detail")," view if you prefer not to duplicate it.")),(0,r.yg)("p",null,"By adhering to this pattern, Rancher Dashboard will automatically take care of the wiring for you, ensuring a seamless experience for all three view types."),(0,r.yg)("p",null,"The routing definition on this example for ",(0,r.yg)("inlineCode",{parentName:"p"},"/routing/extension-routing.ts")," is based on Vue Router. Don't forget to check the official documentation ",(0,r.yg)("a",{parentName:"p",href:"https://router.vuejs.org/guide/"},"here"),"."))}d.isMDXComponent=!0}}]);