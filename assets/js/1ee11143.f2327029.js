"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[3286],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,y=c["".concat(s,".").concat(u)]||c[u]||g[u]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const o={},i="API",l={unversionedId:"code-base-works/api-resources-and-schemas",id:"code-base-works/api-resources-and-schemas",title:"API",description:"For information about the supported Rancher APIs see here",source:"@site/docs/code-base-works/api-resources-and-schemas.md",sourceDirName:"code-base-works",slug:"/code-base-works/api-resources-and-schemas",permalink:"/dashboard/code-base-works/api-resources-and-schemas",draft:!1,tags:[],version:"current",lastUpdatedAt:1709257405,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom Dashboard Dev Build",permalink:"/dashboard/guide/custom-dev-build"},next:{title:"Auth Sessions and Tokens",permalink:"/dashboard/code-base-works/auth-sessions-and-tokens"}},s={},d=[{value:"Schemas",id:"schemas",level:2},{value:"Types",id:"types",level:2},{value:"Checking User Permissions with Schemas",id:"checking-user-permissions-with-schemas",level:2},{value:"Models",id:"models",level:2},{value:"Extending Models",id:"extending-models",level:3},{value:"Model Creation",id:"model-creation",level:4},{value:"Creating and Fetching Resources",id:"creating-and-fetching-resources",level:2},{value:"Synchronous Fetching",id:"synchronous-fetching",level:2},{value:"Watching Resources",id:"watching-resources",level:2},{value:"Pinging",id:"pinging",level:3},{value:"Resource Selectors",id:"resource-selectors",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Unauthenticated Endpoints",id:"unauthenticated-endpoints",level:2},{value:"Examining the Contents of a Resource",id:"examining-the-contents-of-a-resource",level:2},{value:"API Calls to Third-party Domains",id:"api-calls-to-third-party-domains",level:2},{value:"Nodes vs. Machines",id:"nodes-vs-machines",level:2},{value:"UI Components for Resource Types",id:"ui-components-for-resource-types",level:2},{value:"Resource Detail Pages",id:"resource-detail-pages",level:3},{value:"Customising Resource Detail Pages",id:"customising-resource-detail-pages",level:3}],p={toc:d},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"api"},"API"),(0,r.yg)("p",null,"For information about the supported Rancher APIs see ",(0,r.yg)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.8/api/quickstart"},"here")),(0,r.yg)("p",null,"The Rancher UI contains functionality to manage Kubernetes resources."),(0,r.yg)("p",null,"Developers can create, edit, fetch and remove individual resources or fetch collections of them. Resources that are fetched, by default, will be automatically updated via WebSocket"),(0,r.yg)("p",null,"In addition the Rancher UI exposes permissions functionality around resources which can determine if the signed in user can perform the various actions around them."),(0,r.yg)("h1",{id:"resource-definitions"},"Resource Definitions"),(0,r.yg)("h2",{id:"schemas"},"Schemas"),(0,r.yg)("p",null,"Schemas are provided in bulk via Rancher and cached locally in the relevant store (",(0,r.yg)("inlineCode",{parentName:"p"},"management"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"rancher"),", etc)."),(0,r.yg)("p",null,"A schema can be fetched synchronously via store getter"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { POD } from '@shell/config/types';\n\nthis.$store.getters['cluster/schemaFor'](POD)`\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Troubleshooting: Cannot find new schema"),(0,r.yg)("p",{parentName:"blockquote"},"Ensure that your schema text in ",(0,r.yg)("inlineCode",{parentName:"p"},"/config/types.js")," is singular, not plural")),(0,r.yg)("p",null,"As mentioned before a schema dictates the functionality available to that type and what is shown for the type in the UI."),(0,r.yg)("p",null,"A resource is an instance of a schema e.g. the ",(0,r.yg)("inlineCode",{parentName:"p"},"admin")," user is an instance of type ",(0,r.yg)("inlineCode",{parentName:"p"},"management.cattle.io.user"),"."),(0,r.yg)("h2",{id:"types"},"Types"),(0,r.yg)("p",null,"Each type has a Kubernetes API group and a name, but not necessarily a human-readable name. Types are used mainly for building side navigation and defining how the UI should build forms and list views for each resource. For more information about types and how to use them, there are helpful comments in ",(0,r.yg)("inlineCode",{parentName:"p"},"store/type-map.js"),"."),(0,r.yg)("h1",{id:"vuex-stores"},"Vuex Stores"),(0,r.yg)("p",null,"There are 3 main stores for communicating with different parts of the Rancher API:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"management"),": Points at global-level resources for Rancher as a whole."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cluster"),": Points at resources for the currently selected cluster; changes when you change clusters."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"rancher"),": Points at older global-level resources, but some cluster-level resources are actually stored here and not physically in the cluster to be available to the ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster")," store.")),(0,r.yg)("p",null,"And then a bunch of others:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"For"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"action-menu"),(0,r.yg)("td",{parentName:"tr",align:null},"Maintains the current selection for tables and handling bulk operations on them")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth"),(0,r.yg)("td",{parentName:"tr",align:null},"Authentication, logging in and out, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog"),(0,r.yg)("td",{parentName:"tr",align:null},"Stores the index data for Helm catalogs and methods to find charts, determine if upgrades are available, etc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"github"),(0,r.yg)("td",{parentName:"tr",align:null},"Part of authentication, communicating with the GitHub API")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"growl"),(0,r.yg)("td",{parentName:"tr",align:null},'Global "growl" notifications in the corner of the screen')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"i18n"),(0,r.yg)("td",{parentName:"tr",align:null},"Internationalization")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index"),(0,r.yg)("td",{parentName:"tr",align:null},"The root store, manages things like which cluster you're connected to and what namespaces should be shown")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prefs"),(0,r.yg)("td",{parentName:"tr",align:null},"User preferences")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type-map"),(0,r.yg)("td",{parentName:"tr",align:null},"Meta-information about all the k8s types that are available to the current user and how they should be displayed")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"wm"),(0,r.yg)("td",{parentName:"tr",align:null},'"Window manager" at the bottom of the screen for things like container shells and logs.')))),(0,r.yg)("p",null,"Store objects are accessed in different ways, below are common ways they are referenced by models and components"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Location"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"object"),(0,r.yg)("th",{parentName:"tr",align:null},"example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/model/<resource type>")),(0,r.yg)("td",{parentName:"tr",align:null},"Dispatching Actions"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$dispatch")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$dispatch('cluster/find', { type: WORKLOAD_TYPES.JOB, id: relationship.toId }, { root: true })"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/model/<resource type>")),(0,r.yg)("td",{parentName:"tr",align:null},"Access getters (store type)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$getters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$getters['schemaFor'](this.type)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"/model/<resource type>")),(0,r.yg)("td",{parentName:"tr",align:null},"Access getters (all)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$rootGetters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$rootGetters['productId']"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"component"),(0,r.yg)("td",{parentName:"tr",align:null},"Dispatching Actions"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$store.dispatch")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$store.dispatch(`${ inStore }/find`, { type: row.type, id: row.id })"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"component"),(0,r.yg)("td",{parentName:"tr",align:null},"Access getters"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$store.getters")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"this.$store.getters['rancher/byId'](NORMAN.PRINCIPAL, this.value)"))))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Prefixing a property in a model with ",(0,r.yg)("inlineCode",{parentName:"p"},"$"),", as per ",(0,r.yg)("inlineCode",{parentName:"p"},"model")," rows above, results in calling properties on the store object directly.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Troubleshooting: Fetching the name of a resource type"),(0,r.yg)("p",{parentName:"blockquote"},"Good - Trims the text and respects ",(0,r.yg)("inlineCode",{parentName:"p"},".")," in path to type's string - ",(0,r.yg)("inlineCode",{parentName:"p"},"store.getters['type-map/labelFor']({ id: NORMAN.SPOOFED.GROUP_PRINCIPAL }, 2)")),(0,r.yg)("p",{parentName:"blockquote"},'Bad - Does not trim text, issues when resource type contains "',(0,r.yg)("inlineCode",{parentName:"p"},"."),'" - ',(0,r.yg)("inlineCode",{parentName:"p"},"store.getters['i18n/t'](`typeLabel.${ NORMAN.SPOOFED.GROUP_PRINCIPAL }`, { count: 2 })"))),(0,r.yg)("h2",{id:"checking-user-permissions-with-schemas"},"Checking User Permissions with Schemas"),(0,r.yg)("p",null,"Schemas dictate"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Which resources are shown"),(0,r.yg)("li",{parentName:"ul"},"What operations (create, update, delete, etc) can be made against resource/s"),(0,r.yg)("li",{parentName:"ul"},"What actions (archive, change password, etc) can be made against resource/s")),(0,r.yg)("p",null,"In addition the resources themselves can dictate"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"What actions can be made against the collection")),(0,r.yg)("p",null,"The above, plus other factors, will effect what is shown by the UI"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Resources in the cluster explorer"),(0,r.yg)("li",{parentName:"ul"},"Edit resource buttons"),(0,r.yg)("li",{parentName:"ul"},"Delete resource"),(0,r.yg)("li",{parentName:"ul"},"etc")),(0,r.yg)("p",null,"The schema can be checked in the Rancher API at:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://<rancher url/v1/schema/provisioning.cattle.io.clusters\n")),(0,r.yg)("p",null,"To check if a user has access to a resource, you can see if they can see the corresponding schema:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const hasAccess = this.$store.getters[`cluster/schemaFor`](type);\n\nreturn hasAccess ? this.$store.dispatch('cluster/findAll', { type }) : Promise.resolve([]);\n")),(0,r.yg)("h2",{id:"models"},"Models"),(0,r.yg)("p",null,"The ES6 class models in the ",(0,r.yg)("inlineCode",{parentName:"p"},"models")," directory are used to represent Kubernetes resources. The class applies properties and methods to the resource, which defines how the resource can function in the UI and what other components can do with it. Different APIs return models in different structures, but the implementation of the models allows some common functionality to be available for any of them, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"someModel.name"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"someModel.description"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"setLabels")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"setAnnotations"),"."),(0,r.yg)("p",null,"Much of the reused functionality for each model is taken from the Steve plugin. The class-based models use functionality from ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-class.js"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Resource")," class in ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-class.js")," should not have any fields defined that conflict with any key ever returned by the APIs (e.g. name, description, state, etc used to be a problem). The ",(0,r.yg)("inlineCode",{parentName:"p"},"SteveModel")," (",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/steve/steve-class.js"),") and ",(0,r.yg)("inlineCode",{parentName:"p"},"NormanModel")," (",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/steve/norman-class.js"),") know how to handle those keys separately now, so the computed name/description/etc is only in the Steve implementation. It is no longer needed to use names like ",(0,r.yg)("inlineCode",{parentName:"p"},"_name")," to avoid naming conflicts."),(0,r.yg)("h3",{id:"extending-models"},"Extending Models"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Resource")," class in ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-class.js")," is the base class for everything and should not be directly extended. (There is a proxy-based counterpart of ",(0,r.yg)("inlineCode",{parentName:"p"},"Resource")," which is the default export from ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/resource-instance.js")," as well.) If a model needs to extend the basic functionality of a resource, it should extend one of these three models:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"NormanModel"),": For a Rancher management type being loaded via the Norman API (/v3, the Rancher store). These have names, descriptions and labels at the root of the object. "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"HybridModel"),": This model is used for old Rancher types, such as a Project (mostly in management.cattle.io), that are loaded with the Steve API (/v1, the cluster/management stores). These have the name and description at the root, but labels under metadata."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SteveModel"),": Use this model for normal Kubernetes types such as workloads and secrets. The name, description and labels are under metadata.")),(0,r.yg)("p",null,"The Norman and Hybrid models extend the basic Resource class. The Hybrid model is extended by the Steve model."),(0,r.yg)("h4",{id:"model-creation"},"Model Creation"),(0,r.yg)("p",null,"The Rancher API returns plain objects containing resource data, but we need to convert that data into classes so that we can use methods on them."),(0,r.yg)("p",null,"Whenever we get an object from the API, we run the ",(0,r.yg)("inlineCode",{parentName:"p"},"classify")," function (at ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/classify.js"),") which looks at the type field and figures out what type it is supposed to be. That file gives you an instance of a model which you can use to access the properties."),(0,r.yg)("h2",{id:"creating-and-fetching-resources"},"Creating and Fetching Resources"),(0,r.yg)("p",null,"Most of the options to create and fetch resources can be achieved via dispatching actions defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"/plugins/dashboard-store/actions.js")),(0,r.yg)("p",null,"The most basic operations are ",(0,r.yg)("inlineCode",{parentName:"p"},"find({type, id})")," to load a single resource by ID, ",(0,r.yg)("inlineCode",{parentName:"p"},"findAll({type})")," load all of them.  These (anything starting with ",(0,r.yg)("inlineCode",{parentName:"p"},"find"),") are async calls to the API.  Getters like ",(0,r.yg)("inlineCode",{parentName:"p"},"all(type)")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"byId(type, id)")," are synchronous and return only info that has already been previously loaded.  See ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/dashboard-store/")," for all the available actions and getters."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Function"),(0,r.yg)("th",{parentName:"tr",align:null},"Action"),(0,r.yg)("th",{parentName:"tr",align:null},"Example Command"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"create")),(0,r.yg)("td",{parentName:"tr",align:null},"Create"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"$store.$dispatch('<store type>/create', <new object>)")),(0,r.yg)("td",{parentName:"tr",align:null},"Creates a new Proxy object of the required type (",(0,r.yg)("inlineCode",{parentName:"td"},"type")," property must be included in the new object)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clone")),(0,r.yg)("td",{parentName:"tr",align:null},"Clone"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"$store.$dispatch('<store type>/clone', { resource: <existing object> })")),(0,r.yg)("td",{parentName:"tr",align:null},"Performs a deep clone and creates a proxy from it")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"findAll")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetch all of a resource type and watch for changes to the returned resources so that the list updates as it changes."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"$store.dispatch('<store type>/findAll', { type: <resource type> })")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetches all resources of the given type. Also, when applicable, will register the type for automatic updates. If the type has already been fetched return the local cached list instead")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"find")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetch a resource by ID and watch for changes to that individual resource."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"$store.dispatch('<store type>/find', { type: <resource type>, id: <resource id> })")),(0,r.yg)("td",{parentName:"tr",align:null},"Finds the resource matching the ID. If the type has already been fetched return the local cached instance.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"findMatching")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetch resources by label and watch for changes to the returned resources, a live array that updates as it changes."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"$store.dispatch('<store type>/findMatching', { type: <resource type>, selector: <label name:value map> })")),(0,r.yg)("td",{parentName:"tr",align:null},"Fetches resources that have ",(0,r.yg)("inlineCode",{parentName:"td"},"metadata.labels")," matching that of the name-value properties in the selector. Does not support match expressions.")))),(0,r.yg)("p",null,"Once objects of most types are fetched they will be automatically updated. See ",(0,r.yg)("a",{parentName:"p",href:"#watching-resources"},"Watching Resources")," for more info. For some types this does not happen. For those cases, or when an immediate update is required, adding ",(0,r.yg)("inlineCode",{parentName:"p"},"force: true")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"find")," style actions will result in a fresh http request."),(0,r.yg)("h2",{id:"synchronous-fetching"},"Synchronous Fetching"),(0,r.yg)("p",null,"It's possible to retrieve values from the store synchronously via ",(0,r.yg)("inlineCode",{parentName:"p"},"getters"),". For resources this is not normally advised (they may not yet have been fetched), however for items such as schemas, it is valid. Some of the core getters are defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"/plugins/dashboard-store/getters.js"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"$store.getters['<store type>/byId'](<resource type>, <id>])\n\n$store.getters['<store type>/schemaFor'](<resource type>)`\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"all"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"byId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"matching")," getters are equivalents of the asynchronous ",(0,r.yg)("inlineCode",{parentName:"p"},"findAll"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"find")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"findMatching"),", respectively."),(0,r.yg)("h2",{id:"watching-resources"},"Watching Resources"),(0,r.yg)("p",null,"For each API call, a websocket is created for the cluster you're talking to. For example:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you ",(0,r.yg)("inlineCode",{parentName:"li"},"findAll")," Pods, Rancher will watch all Pods after that."),(0,r.yg)("li",{parentName:"ul"},"if you get an individual resource using ",(0,r.yg)("inlineCode",{parentName:"li"},"findMatching"),", it will watch a particular resource with that ID in a namespace.")),(0,r.yg)("p",null,"If you already called ",(0,r.yg)("inlineCode",{parentName:"p"},"findAll")," for a resource, then do ",(0,r.yg)("inlineCode",{parentName:"p"},"findMatching"),", no additional Pods would be watched because all of the Pod resources are already being watched. The subscribe call uses ",(0,r.yg)("inlineCode",{parentName:"p"},"equivalentWatch")," to detect duplicate watches so that it won't send another request to watch the subset of resources that were already loaded previously."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"unsubscribe")," function is used to unwatch resources. However, as a general rule, resources are never unwatched because Rancher assumes that any data you have already loaded needs to be kept up-to-date."),(0,r.yg)("p",null,"The code related to watching resources is in ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins/steve/subscribe.js"),"."),(0,r.yg)("h3",{id:"pinging"},"Pinging"),(0,r.yg)("p",null,"The UI normally has three websocket connections with ",(0,r.yg)("inlineCode",{parentName:"p"},"rancher")," (Steve's global cluster management), ",(0,r.yg)("inlineCode",{parentName:"p"},"management")," (Norman) and ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster")," (Steve for an individual cluster). The UI is pinged by Steve every five seconds and by Norman every thirty seconds. Steve's messages send the server version they are sent from, which sends another action and reloads the page if the server has been upgraded."),(0,r.yg)("p",null,"To avoid excessive rerendering, the messages that change state, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"resource.{create, change, remove}"),", are saved in a buffer. Once per second they are all flushed together to update the store."),(0,r.yg)("h2",{id:"resource-selectors"},"Resource Selectors"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"parse")," utility function in ",(0,r.yg)("inlineCode",{parentName:"p"},"utils/selector.js")," helps you match or convert labels. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"matchLabels")," could be used to get all the Pods for each workload."),(0,r.yg)("p",null,"Kubernetes supports matching with ",(0,r.yg)("inlineCode",{parentName:"p"},"matchExpressions"),", but the UI converts selectors that use match expressions to selectors with ",(0,r.yg)("inlineCode",{parentName:"p"},"matchLabels")," when possible because ",(0,r.yg)("inlineCode",{parentName:"p"},"matchLabels")," is simpler and better supported by Rancher. When loading multiple resources at once from the Rancher API, you can only use ",(0,r.yg)("inlineCode",{parentName:"p"},"matchLabels"),", but if you are loading only one resource at a time, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"matchExpressions"),"."),(0,r.yg)("h2",{id:"error-handling"},"Error Handling"),(0,r.yg)("p",null,"When catching exceptions thrown by anything that contacts the API use ",(0,r.yg)("inlineCode",{parentName:"p"},"utils/error exceptionToErrorsArray")," to correctly parse the response into a commonly accepted array of errors"),(0,r.yg)("h2",{id:"unauthenticated-endpoints"},"Unauthenticated Endpoints"),(0,r.yg)("p",null,"If you need to add an endpoint to an unauthenticated route for loading from the store before login, you will need to add it ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/cb7de4e6c3d7e783828dc662b1142c1f9ae5edbe/pkg/multiclustermanager/routes.go#L69"},"here"),"."),(0,r.yg)("h2",{id:"examining-the-contents-of-a-resource"},"Examining the Contents of a Resource"),(0,r.yg)("p",null,"Due to the way Dashboard resources are constructed examining the contents of one can sometimes provide unexpected results. It's recommended to read the sections covering resource proxy and resource instance before continuing."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When viewing the object via template ",(0,r.yg)("inlineCode",{parentName:"li"},"{{ resource }}")," the ",(0,r.yg)("inlineCode",{parentName:"li"},"resource-instance.js")," ",(0,r.yg)("inlineCode",{parentName:"li"},"toString")," method will print out a basic interpretation"),(0,r.yg)("li",{parentName:"ul"},"When printing the object via console the resource's ",(0,r.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy"},"Proxy")," will be displayed. To make this simpler to view use ",(0,r.yg)("inlineCode",{parentName:"li"},"JSON.parse(JSON.stringify(<resource>))"),".")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Q Why are my resource's ",(0,r.yg)("inlineCode",{parentName:"p"},"nameDisplay"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"description"),", etc missing?"),(0,r.yg)("p",{parentName:"blockquote"},"A These are part of the common underlying ",(0,r.yg)("inlineCode",{parentName:"p"},"resource-instance.js")," or, if the resource type has it, the type's own ",(0,r.yg)("inlineCode",{parentName:"p"},"model"),".")),(0,r.yg)("h2",{id:"api-calls-to-third-party-domains"},"API Calls to Third-party Domains"),(0,r.yg)("p",null,"Rancher includes a proxy that can be used to make requests to third-party domains (like a cloud provider's API) without requiring that the other end supports CORS. Send requests to ",(0,r.yg)("inlineCode",{parentName:"p"},"/meta/proxy/example.com/path")," and the request will be made from the Rancher server and proxied back to you."),(0,r.yg)("h2",{id:"nodes-vs-machines"},"Nodes vs. Machines"),(0,r.yg)("p",null,"Upstream Kubernetes manages nodes, as shown in Cluster Explorer. Rancher deals with machines, which control node provisioning, and they are available from Cluster Management."),(0,r.yg)("p",null,"When you create a cluster, the cluster has a spec that contains machine pools. Each machine pool uses a machine config (",(0,r.yg)("inlineCode",{parentName:"p"},"rke-machine-config"),"), which configures the size and role of the machine. Rancher sends the configuration to CAPI (Cluster API), which uses it to create the machines."),(0,r.yg)("p",null,"When provisioning RKE clusters, you could create node templates and define virtual machines in them. Then those definitions could be used when creating node pools. In contrast, RKE2 and K3s cluster provisioning uses CAPI as its standard for provisioning clusters, and CAPI requires that a machine template can only used once per node pool. For that reason, node templates cannot be shared across node pools the same way they used to be able to for RKE provisioning. The forms for provisioning new RKE2 and K3s clusters through Rancher don't introduce the concept of node templates. Instead they let you create new node pools for each new cluster."),(0,r.yg)("h2",{id:"ui-components-for-resource-types"},"UI Components for Resource Types"),(0,r.yg)("p",null,"The dashboard has a framework and set of components to support (conditional) representation of resource type/s. Common UI features include"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Collections of resources in a common table (Resource List). Usually shown when clicking on the side nav name type."),(0,r.yg)("li",{parentName:"ul"},"Visual overview of a resource (Resource Detail). Usually shown when clicking on a List's row's name."),(0,r.yg)("li",{parentName:"ul"},"Creating, Viewing and Editing a resource as a form (Resource Edit)."),(0,r.yg)("li",{parentName:"ul"},"Viewing and Editing a resource as YAML (Resource YAML)")),(0,r.yg)("p",null,"By default only the table and, if enabled by the resource type, viewing/editing as YAML are enabled. To provide a richer experience the resource's table columns should be defined and custom overview and edit pages provided."),(0,r.yg)("p",null,"The top level list page is defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"./components/ResourceList"),". This displays a common masthead and table for the given resource type. Without any customisation the columns are restricted to a base set of ",(0,r.yg)("inlineCode",{parentName:"p"},"state"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"nameDisplay"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"namespace")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ages"),"."),(0,r.yg)("p",null,"Any resources returned by ",(0,r.yg)("inlineCode",{parentName:"p"},"getInstances")," should have a ",(0,r.yg)("inlineCode",{parentName:"p"},"kind")," matching the required type. This results in the tables showing the correct actions, handling create/edit, etc."),(0,r.yg)("h3",{id:"resource-detail-pages"},"Resource Detail Pages"),(0,r.yg)("p",null,"The top level detail page is defined in ",(0,r.yg)("inlineCode",{parentName:"p"},"./components/ResourceDetail"),". This is a container page that covers a number of resource instance use cases (create, edit, view, etc). Like resource list this contains a common ",(0,r.yg)("inlineCode",{parentName:"p"},"Masthead")," and additionally a sub header ",(0,r.yg)("inlineCode",{parentName:"p"},"DetailTop")," (displays common properties of resources such as description, labels, annotations, etc). For a resource type that provides no customisation it will mostly likely just display a way to view and edit the resource by YAML."),(0,r.yg)("p",null,"The Create/Edit Yaml experience is controlled by ",(0,r.yg)("inlineCode",{parentName:"p"},"/components/ResourceYaml.vue"),". Other features are handled by custom components described below."),(0,r.yg)("p",null,"Special attention should be made of the ",(0,r.yg)("inlineCode",{parentName:"p"},"mode")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"as")," params that's available via the ",(0,r.yg)("inlineCode",{parentName:"p"},"CreateEditView")," mixin (as well as other helpful functionality). Changing these should change the behaviour of the resource details page (depending on the availability of resource type custom components)."),(0,r.yg)("p",null,"For more information about CreateEditView and how to add new create/edit forms, see ",(0,r.yg)("a",{parentName:"p",href:"/dashboard/code-base-works/forms-and-validation"},"Create/Edit Forms.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"mode")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"as")),(0,r.yg)("th",{parentName:"tr",align:null},"Content"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the View YAML or Customised Detail component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"config")),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the View YAML or Customised Edit component (in read only mode)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"edit")),(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the Customised Edit component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"edit")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"yaml")),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the Edit Yaml component")))),(0,r.yg)("p",null,"In addition the Create process (assessable with the same url + ",(0,r.yg)("inlineCode",{parentName:"p"},"/create"),") is also managed by the resource detail page with similar param options. "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"mode")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"as")),(0,r.yg)("th",{parentName:"tr",align:null},"Content"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"yaml")),(0,r.yg)("td",{parentName:"tr",align:null},"Show the Edit YAML component in create mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"edit")),(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},"Show the Customised Edit component in create mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clone")),(0,r.yg)("td",{parentName:"tr",align:null},"falsy"),(0,r.yg)("td",{parentName:"tr",align:null},"Shows the Customised Edit component in create mode pre-populated with an existing resource")))),(0,r.yg)("h3",{id:"customising-resource-detail-pages"},"Customising Resource Detail Pages"),(0,r.yg)("p",null,"A more detailed overview page can be added by creating a resource type component in ",(0,r.yg)("inlineCode",{parentName:"p"},"/detail/"),". This should provide a more eye pleasing presentation than a collection of inputs or yaml blob."))}g.isMDXComponent=!0}}]);