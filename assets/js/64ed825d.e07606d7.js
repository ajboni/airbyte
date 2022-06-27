"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9143],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],s={},i="Docusaurus Settings",l={unversionedId:"docusaurus/docusaurus_settings",id:"docusaurus/docusaurus_settings",title:"Docusaurus Settings",description:"Docusaurus is the tool that generates the website that hosts docs in cloud and OSS.",source:"@site/../docs/docusaurus/docusaurus_settings.md",sourceDirName:"docusaurus",slug:"/docusaurus/docusaurus_settings",permalink:"/docusaurus/docusaurus_settings",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/docusaurus/docusaurus_settings.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"I want to change the sidebar",id:"i-want-to-change-the-sidebar",level:3},{value:"But how do I change the links on top?",id:"but-how-do-i-change-the-links-on-top",level:3},{value:"Updating docusaurus",id:"updating-docusaurus",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docusaurus-settings"},"Docusaurus Settings"),(0,o.kt)("p",null,"Docusaurus is the tool that generates the website that hosts docs in cloud and OSS.\nHere are some quick relevant guides using docusaurus at Airbyte."),(0,o.kt)("h3",{id:"i-want-to-change-the-sidebar"},"I want to change the sidebar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OSS"),": sidebar is generated in a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/docusaurus/sidebars.js"},"JSON blob here")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OSS"),": Here is a guide to the ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar/items"},"JSON blob structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud"),": sidebar is autogenerated",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"folders will become dropdown items"),(0,o.kt)("li",{parentName:"ul"},"if there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," in the folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"it will be the default view"),(0,o.kt)("li",{parentName:"ul"},"the first ",(0,o.kt)("inlineCode",{parentName:"li"},"# heading")," will be the folder title"))),(0,o.kt)("li",{parentName:"ul"},"if there is not a ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md")," in the folder name of folder will be the drop down name")))),(0,o.kt)("h3",{id:"but-how-do-i-change-the-links-on-top"},"But how do I change the links on top?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"go to one of these config files",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/docusaurus/docusaurus.config.js"},"OSS file location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte-cloud/blob/master/docusaurus/docusaurus.config.js#L64"},"Cloud file location")))),(0,o.kt)("li",{parentName:"ul"},"Copy an existing JSON object like this but change the values a bit so people don't think you copied my homework")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    href: 'https://theuselessweb.com',\n    position: 'left',\n    label: 'A collection of useless websites',\n},\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"its a funny website",src:n(83428).Z,width:"1200",height:"206"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"test locally ",(0,o.kt)("a",{parentName:"li",href:"/docusaurus/locally_testing_docusaurus"},"following this guide"))),(0,o.kt)("h3",{id:"updating-docusaurus"},"Updating docusaurus"),(0,o.kt)("p",null,"For security and an occasional cool features you may want to update docusaurus.  From time to time docusaurus will suggest you do just that.\nIt is a reasonable decision to copy the update command docusaurus suggests.  It should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn upgrade @docusaurus/core@latest @docusaurus/plugin-google-gtag@latest @docusaurus/preset-classic@latest\n")),(0,o.kt)("p",null,"Keep in mind this won't update dependencies.  The upside is that the dependencies probably won't break.",(0,o.kt)("br",{parentName:"p"}),"\n","The downside is that they probably also contain known security vulnerabilities."))}h.isMDXComponent=!0},83428:function(e,t,n){t.Z=n.p+"assets/images/useless_example-d62eb9e3331378f499ec2929e63a7ed8.jpg"}}]);