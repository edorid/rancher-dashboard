"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return r?s.createElement(m,o(o({ref:t},u),{},{components:r})):s.createElement(m,o({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(7462),n=(r(7294),r(3905));const a={},o="Cluster Management Resources",i={unversionedId:"code-base-works/cluster-management-resources",id:"code-base-works/cluster-management-resources",title:"Cluster Management Resources",description:"This page explains cluster provisioning architecture and implementation details that can give context for future work that needs to be done surrounding the UI for cluster provisioning.",source:"@site/docs/code-base-works/cluster-management-resources.md",sourceDirName:"code-base-works",slug:"/code-base-works/cluster-management-resources",permalink:"/dashboard/code-base-works/cluster-management-resources",draft:!1,tags:[],version:"current",lastUpdatedAt:1661354859,formattedLastUpdatedAt:"Aug 24, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auth Sessions and Tokens",permalink:"/dashboard/code-base-works/auth-sessions-and-tokens"},next:{title:"Directory Structure",permalink:"/dashboard/code-base-works/directory-structure"}},l={},c=[{value:"Background/Context on V2 Cluster Provisioning",id:"backgroundcontext-on-v2-cluster-provisioning",level:2},{value:"CAPI Integration",id:"capi-integration",level:2},{value:"Node Templates (V1 provisioning) vs MachineTemplates (V2 provisioning)",id:"node-templates-v1-provisioning-vs-machinetemplates-v2-provisioning",level:2},{value:"Nodes vs Machines",id:"nodes-vs-machines",level:2},{value:"Cluster Resources",id:"cluster-resources",level:2},{value:"Management Clusters - <code>management.cattle.io.clusters</code>",id:"management-clusters---managementcattleioclusters",level:3},{value:"Provisioning Clusters - <code>provisioning.cattle.io.clusters</code>",id:"provisioning-clusters---provisioningcattleioclusters",level:3},{value:"CAPI Clusters - <code>cluster.x-k8s.io.clusters</code>",id:"capi-clusters---clusterx-k8sioclusters",level:3},{value:"RkeClusters - <code>rke.cattle.io.rkeclusters</code>",id:"rkeclusters---rkecattleiorkeclusters",level:3}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cluster-management-resources"},"Cluster Management Resources"),(0,n.kt)("p",null,"This page explains cluster provisioning architecture and implementation details that can give context for future work that needs to be done surrounding the UI for cluster provisioning."),(0,n.kt)("p",null,"If you are not working on anything related to cluster provisioning, you probably don't need to read the content in this section."),(0,n.kt)("h2",{id:"backgroundcontext-on-v2-cluster-provisioning"},"Background/Context on V2 Cluster Provisioning"),(0,n.kt)("p",null,"One of Rancher's core strengths is its ability to install Kubernetes clusters. That capability was one of Rancher's main features since the product was created, and Rancher specialized in that feature during a time when there was no industry standard for how to provision Kubernetes clusters."),(0,n.kt)("p",null,"Then in 2020-2021, Cluster API was introduced as a new industry standard for cluster provisioning. Cluster API (CAPI) is an official Kubernetes project that focuses on providing declarative APIs and tooling to simplify provisioning, upgrading, and operating multiple Kubernetes clusters. In other words, it allows us to define  resources on a management Kubernetes cluster that specify the desired state of other Kubernetes clusters."),(0,n.kt)("p",null,"The power of CAPI is that it allows us to define many types of resources for Kubernetes cluster lifecycle management. That means that in the same way that we already defined resources for the desired state of the applications we want to deploy in Kubernetes, we can now also define YAML resources for infrastructure, such as virtual machines, networks, load balancers, and VPCs, as well as the Kubernetes cluster configuration itself. For more details on the resources involved, see the CAPI API docs: ",(0,n.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/"},"https://cluster-api.sigs.k8s.io/")),(0,n.kt)("p",null,"In the lead-up to Rancher v2.6.0, a great deal of work was done to create V2 cluster provisioning for RKE2 and K3s clusters in such a way that we integrated a new industry standard with our existing cluster provisioning technology that had been continuously improved over the years. In this new version of cluster provisioning, Rancher leverages CAPI resources including Clusters and MachineDeployments to define and manage the desired state of downstream RKE2 and K3s clusters."),(0,n.kt)("h2",{id:"capi-integration"},"CAPI Integration"),(0,n.kt)("p",null,"There is a key difference between the way that Rancher provisions machines and the way that CAPI users are typically expected to provision machines. Each infrastructure provider that is supported by CAPI creates its own provider project, which serves as the driver between CAPI and the infrastructure provider's APIs. For example, Amazon has this project ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api-provider-aws/tree/v1.4.1"},"https://github.com/kubernetes-sigs/cluster-api-provider-aws/tree/v1.4.1")," to allow CAPI to manage Kubernetes clusters running in AWS. A typical CAPI user would create their desired manifests for infrastructure based on the documentation from that provider. Rancher takes a different approach, as it does not use those infrastructure providers. Instead, Rancher has created a provider for CAPI to provision clusters using Rancher Machine (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/machine"},"https://github.com/rancher/machine"),"). Rancher Machine was originally a Docker project for machine management. Rancher forked that project several years ago and has continued to maintain it since the original project was archived."),(0,n.kt)("p",null,"There is a long-term plan to replace Rancher machine with the upstream CAPI infrastructure provider's drivers."),(0,n.kt)("p",null,"The fact that Rancher uses a custom machine driver is one reason why it may be complicated to support node templates for K3s and RKE2."),(0,n.kt)("h2",{id:"node-templates-v1-provisioning-vs-machinetemplates-v2-provisioning"},"Node Templates (V1 provisioning) vs MachineTemplates (V2 provisioning)"),(0,n.kt)("p",null,"In CAPI, the closest equivalent to a node template (the feature that made it possible to reuse machine configs for RKE1 provisioning) is called a MachineTemplate, and those work very differently from node templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unlike node templates, CAPI MachineTemplates are immutable."),(0,n.kt)("li",{parentName:"ul"},"If a CAPI node pool is updated to use a newer MachineTemplate, it forces the entire node pool to reprovision, which could cause downtime for apps and services."),(0,n.kt)("li",{parentName:"ul"},"CAPI MachineTemplates cannot be reused across multiple clusters because there is an ownership relationship between the Cluster resource and the MachineTemplate that configures machines within it. This means that if multiple Clusters shared the same MachineTemplate, and one Cluster was deleted, the MachineTemplate would be deleted along with it, even if it was in use by another cluster. More details and follow-up on that feature request are here: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/dashboard/issues/5981"},"https://github.com/rancher/dashboard/issues/5981"))),(0,n.kt)("h2",{id:"nodes-vs-machines"},"Nodes vs Machines"),(0,n.kt)("p",null,"Unlike V1 provisioning, V2 cluster provisioning uses CAPI's MachineDeployment Kubernetes resources to manage node pools."),(0,n.kt)("p",null,"The Cluster Management app shows management nodes and node pools for RKE1 clusters while showing CAPI Machines and MachineDeployments for K3s and RKE2 clusters. In Cluster Management, on the cluster detail page, the ",(0,n.kt)("inlineCode",{parentName:"p"},"showMachines")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"showNodes")," values are used to determine whether to display CAPI machines or not (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/shell/detail/provisioning.cattle.io.cluster.vue#L224"},"https://github.com/rancher/dashboard/blob/master/shell/detail/provisioning.cattle.io.cluster.vue#L224"),")."),(0,n.kt)("p",null,"In Cluster Explorer, native Kubernetes nodes are displayed for all cluster types. These are Kubernetes nodes as described in the official documentation (",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"https://kubernetes.io/docs/concepts/architecture/nodes/"),"), in the sense that each node defined in the cluster only tells Kubernetes what it needs to know in order to schedule Pods on it. These native Kubernetes nodes are shown in Cluster Explorer under ",(0,n.kt)("strong",{parentName:"p"},"Cluster > Nodes.")),(0,n.kt)("p",null,"The nodes in Cluster Explorer are not to be confused with the machines that are shown in the Cluster Management app. In Cluster Management, if you go to a list of machines under ",(0,n.kt)("strong",{parentName:"p"},"Advanced > Machines")," in the side nav, you are not looking at nodes defined in the configuration of a single Kubernetes cluster. You are looking at a CAPI Machine resource that exists in the Rancher server's local cluster, which is also called the management cluster. These Machine resources declaratively specify the desired configuration of machines in the downstream clusters, including many hardware details that the downstream cluster is not aware of."),(0,n.kt)("p",null,"To summarize, V1 provisioned clusters have nodes, nodePools, and nodeTemplates. These are shown in the Cluster Management detail pages, which show what is configured in the provisioning Cluster resource."),(0,n.kt)("p",null,"In V2 cluster provisioning, clusters have Machines (",(0,n.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/concepts.html#machine"},"https://cluster-api.sigs.k8s.io/user/concepts.html#machine"),") which are instances of MachineTemplates and have a specific configuration for each infrastructure provider (Digital Ocean, Azure, etc). These infrastructure configuration details are shown in the Cluster Management detail pages for each cluster. In the Rancher UI, the resources used for configuring note templates, such as DigitaloceanConfigs, are hidden because every time they are edited, it forces all node pools using the config to reprovision, which could cause downtime to apps or services on the cluster."),(0,n.kt)("h2",{id:"cluster-resources"},"Cluster Resources"),(0,n.kt)("p",null,"There are three Kubernetes resources in the local Rancher server Kubernetes cluster that are all named Cluster. Since the similar terminology can be somewhat confusing, here is a summary of how to differentiate them."),(0,n.kt)("h3",{id:"management-clusters---managementcattleioclusters"},"Management Clusters - ",(0,n.kt)("inlineCode",{parentName:"h3"},"management.cattle.io.clusters")),(0,n.kt)("p",null,"Rancher maintains a list of management clusters to maintain a consistent API for tracking all kinds of Kubernetes clusters, including imported clusters. There is one management Cluster resource for every downstream cluster managed by Rancher. It is also the Steve API's representation of Norman/v1 clusters."),(0,n.kt)("p",null,"In the UI, the management Cluster resource is used in Cluster Explorer. like the provisioning and CAPI cluster resources. It\u2019s used to show info on Kubernetes version, cloud provider, node OSs, and resource usage. No, you can\u2019t edit them, they\u2019re available to users who can work within clusters but can\u2019t necessarily provision clusters. RKE1 and RKE2 clusters both have management clusters; it\u2019s like, a shared interface between all types of clusters so we can have a consistent experience within Cluster Explorer * v1"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," command to get the management Cluster resources is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get clusters.management\n")),(0,n.kt)("h3",{id:"provisioning-clusters---provisioningcattleioclusters"},"Provisioning Clusters - ",(0,n.kt)("inlineCode",{parentName:"h3"},"provisioning.cattle.io.clusters")),(0,n.kt)("p",null,"The provisioning Cluster resource contains all the details that are configured when a user provisions or edits a V2 RKE2/K3s Kubernetes cluster. It is the only Cluster resource with node pools. The only way to provision K3s/RKE2 clusters in V2 provisioning is to create the provisioning Cluster resource. Rancher then automatically creates the CAPI Cluster resource based on that."),(0,n.kt)("p",null,"Similar to the management cluster, there is also a one-to-one relationship between each provisioning Cluster resource and each downstream cluster managed by Rancher. Unlike the management cluster, the UI uses provisioning Clusters in the Cluster Management app. The list of clusters is really depicting the provisioning Cluster resources."),(0,n.kt)("p",null,"The kubectl command to get the management Cluster resources is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n fleet-default get clusters.provisioning\n")),(0,n.kt)("h3",{id:"capi-clusters---clusterx-k8sioclusters"},"CAPI Clusters - ",(0,n.kt)("inlineCode",{parentName:"h3"},"cluster.x-k8s.io.clusters")),(0,n.kt)("p",null,"This is the upstream CAPI resource used to provision RKE2/K3s clusters. It is automatically created by Rancher and is not meant to be edited by humans. Rancher takes any of a user's edits to the provisioning Cluster resource and will automatically make any necessary changes to the CAPI cluster based on that."),(0,n.kt)("p",null,"The kubectl command to get CAPI Cluster resources is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n fleet-default get clusters.cluster\n")),(0,n.kt)("h3",{id:"rkeclusters---rkecattleiorkeclusters"},"RkeClusters - ",(0,n.kt)("inlineCode",{parentName:"h3"},"rke.cattle.io.rkeclusters")),(0,n.kt)("p",null,"These are automatically created when provisioning RKE1 clusters and are not meant to be edited by humans."))}h.isMDXComponent=!0}}]);