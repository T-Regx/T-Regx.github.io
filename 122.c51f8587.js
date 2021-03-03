(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{191:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n(203),u=n(22),c=n(221),s=n(210);var l=function(e){var t=e.metadata;return a.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},f=n(202);var d=function(){var e=Object(u.default)().siteConfig.title,t=Object(f.useActivePlugin)({failfast:!0}).pluginId,n=Object(i.useDocsPreferredVersion)(t).savePreferredVersionName,r=Object(f.useActiveVersion)(t),o=Object(f.useDocVersionSuggestions)(t),c=o.latestDocSuggestion,l=o.latestVersionSuggestion;if(!l)return a.a.createElement(a.a.Fragment,null);var d,v=null!=c?c:(d=l).docs.find((function(e){return e.id===d.mainDocId}));return a.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?a.a.createElement("div",null,"This is unreleased documentation for ",e," ",a.a.createElement("strong",null,r.label)," version."):a.a.createElement("div",null,"This is documentation for ",e," ",a.a.createElement("strong",null,r.label),", which is no longer actively maintained."),a.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",a.a.createElement("strong",null,a.a.createElement(s.a,{to:v.path,onClick:function(){return n(l.name)}},"latest version"))," ","(",l.label,")."))},v=n(200);var m=function(e,t,n){var a=Object(r.useState)(void 0),o=a[0],i=a[1];Object(r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,u=!1,c=document.getElementsByClassName(e);a<c.length&&!u;){var s=c[a],l=s.href,f=decodeURIComponent(l.substring(l.indexOf("#")+1));r.id===f&&(o&&o.classList.remove(t),s.classList.add(t),i(s),u=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},g=n(84),p=n.n(g),b="table-of-contents__link";function h(e){var t=e.toc,n=e.isChild;return t.length?a.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:"#"+e.id,className:b,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(h,{isChild:!0,toc:e.children}))}))):null}var E=function(e){var t=e.toc;return m(b,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(v.a)(p.a.tableOfContents,"thin-scrollbar")},a.a.createElement(h,{toc:t}))},D=n(3),P=n(7),_=n(85),O=n.n(_),j=function(e){var t=e.className,n=Object(P.a)(e,["className"]);return a.a.createElement("svg",Object(D.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(v.a)(O.a.iconEdit,t)},n),a.a.createElement("g",null,a.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},V=n(86),y=n.n(V);t.default=function(e){var t,n=Object(u.default)().siteConfig.url,r=e.content,s=r.metadata,m=r.frontMatter,g=m.image,p=m.keywords,b=m.hide_title,h=m.hide_table_of_contents,D=s.description,P=s.title,_=s.permalink,O=s.editUrl,V=s.lastUpdatedAt,A=s.lastUpdatedBy,w=Object(f.useActivePlugin)({failfast:!0}).pluginId,C=Object(f.useVersions)(w),N=Object(f.useActiveVersion)(w),x=C.length>1,L=Object(i.useTitleFormatter)(P),S=Object(c.a)(g,{absolute:!0});return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,L),a.a.createElement("meta",{property:"og:title",content:L}),D&&a.a.createElement("meta",{name:"description",content:D}),D&&a.a.createElement("meta",{property:"og:description",content:D}),p&&p.length&&a.a.createElement("meta",{name:"keywords",content:p.join(",")}),g&&a.a.createElement("meta",{property:"og:image",content:S}),g&&a.a.createElement("meta",{name:"twitter:image",content:S}),g&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+P}),_&&a.a.createElement("meta",{property:"og:url",content:n+_}),_&&a.a.createElement("link",{rel:"canonical",href:n+_})),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:Object(v.a)("col",(t={},t[y.a.docItemCol]=!h,t))},a.a.createElement(d,null),a.a.createElement("div",{className:y.a.docItemContainer},a.a.createElement("article",null,x&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N.label)),!b&&a.a.createElement("header",null,a.a.createElement("h1",{className:y.a.docTitle},P)),a.a.createElement("div",{className:"markdown"},a.a.createElement(r,null))),(O||V||A)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},O&&a.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},a.a.createElement(j,null),"Edit this page")),(V||A)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",V&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*V).toISOString(),className:y.a.docLastUpdatedAt},new Date(1e3*V).toLocaleDateString()),A&&" "),A&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,A)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(l,{metadata:s})))),!h&&r.toc&&a.a.createElement("div",{className:"col col--3"},a.a.createElement(E,{toc:r.toc}))))}},200:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},202:function(e,t,n){try{e.exports=n(212)}catch(r){e.exports={}}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(207);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(211);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(208);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var i=n(215);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var u=n(216);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return u.useTitleFormatter}});var c=n(217);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var s=n(209);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return s.DocsPreferredVersionContextProvider}})},204:function(e,t,n){"use strict";n.r(t);var r=n(10);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},207:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var a=r(n(22));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(202);t.isDocsPluginEnabled=!!r.useAllDocsData},209:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var u=o(n(0)),c=n(207),s=n(208),l=n(202),f=i(n(218));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var a={};return t.forEach((function(e){a[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),a}function v(){var e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=u.useMemo((function(){return Object.keys(e)}),[e]),r=u.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),a=r[0],o=r[1];return u.useEffect((function(){o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[a,u.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),o((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[o])]}var m=u.createContext(null);function g(e){var t=e.children,n=v();return u.default.createElement(m.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?u.default.createElement(g,null,t):u.default.createElement(u.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=u.useContext(m);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},210:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(10),i=n(227),u=n(11),c=Object(r.createContext)({collectLink:function(){}}),s=n(221),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,v=e.to,m=e.href,g=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,E=void 0===h||h,D=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),P=Object(s.b)().withBaseUrl,_=Object(r.useContext)(c),O=v||m,j=Object(i.a)(O),V=null==O?void 0:O.replace("pathname://",""),y=void 0!==V?(n=V,E&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0,A=Object(r.useRef)(!1),w=d?o.e:o.c,C=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&j&&window.docusaurus.prefetch(y),function(){C&&f&&f.disconnect()}}),[y,C,j]);var N=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,x=!y||!j||N;return y&&j&&!N&&!b&&_.collectLink(y),x?a.a.createElement("a",Object.assign({href:y},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},D)):a.a.createElement(w,Object.assign({},D,{onMouseEnter:function(){A.current||(window.docusaurus.preload(y),A.current=!0)},innerRef:function(e){var t,n;C&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(y)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:y||""},d&&{isActive:p,activeClassName:g}))}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(204),a=n(213),o=n(214);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getDocVersionSuggestions(n,a)}},213:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(204);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,o,i=t.getActiveVersion(e,n),u=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(a=u.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},216:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var a=r(n(22));t.useTitleFormatter=function(e){var t=a.default().siteConfig,n=void 0===t?{}:t,r=n.title,o=n.titleDelimiter,i=void 0===o?"|":o;return e&&e.trim().length?e.trim()+" "+i+" "+r:r}},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),a=n(209),o=n(202),i=n(219);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=o.useDocsData(e),n=a.useDocsPreferredVersionContext(),u=n[0],c=n[1],s=u[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=o.useAllDocsData(),t=a.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],a=t[n].preferredVersionName;return a?r.versions.find((function(e){return e.name===a})):null}(n)})),r}},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},a={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},219:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(227);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,u=void 0!==i&&i,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},227:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);