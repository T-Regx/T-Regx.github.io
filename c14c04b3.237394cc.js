(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{177:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(204));const o={title:"Release 0.9.8 - foreach baby, foreach!",author:"Daniel Wilkowski"},c={permalink:"/blog/2020/04/13/release-0.9.8",source:"@site/blog/2020-04-13-release-0.9.8.md",description:"### Iterables",date:"2020-04-13T00:00:00.000Z",tags:[],title:"Release 0.9.8 - foreach baby, foreach!",readingTime:.505,truncated:!1,nextItem:{title:"Release 0.9.7 - Match as vanilla array!",permalink:"/blog/2020/04/08/release-0.9.7"}},i=[{value:"Iterables",id:"iterables",children:[]},{value:"Shorthand method",id:"shorthand-method",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"iterables"},"Iterables"),Object(a.b)("p",null,"Up to this point, you could either use T-Regx methods that return ",Object(a.b)("inlineCode",{parentName:"p"},"array"),", in order to iterate them, or use\none of the collection methods ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(a.b)("inlineCode",{parentName:"a"},"map()")),", ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-for-each"}),Object(a.b)("inlineCode",{parentName:"a"},"forEach()")),", ",Object(a.b)("inlineCode",{parentName:"p"},"filter()"),", etc."),Object(a.b)("p",null,"Right now any chainable method in T-Regx is also iterate"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"foreach (pattern('\\d+')->match('127.0.0.1') as $match) {\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"foreach (pattern('\\d+')->match('127.0.0.1')->asInt() as $digit) {\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"foreach (pattern('\\d+')->match('127.0.0.1')->all() as $text) {\n")),Object(a.b)("h3",{id:"shorthand-method"},"Shorthand method"),Object(a.b)("p",null,"In addition to previous release, when we added ",Object(a.b)("inlineCode",{parentName:"p"},"asArray()")," method, we also added a shorthand ",Object(a.b)("inlineCode",{parentName:"p"},"get()")," method for\ncapturing groups."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"pattern('(origin/)?master')->match('master')->first(function (Match $match) {\n    $match->get(1); // same as $match->group(1)->text();\n});\n")))}p.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);