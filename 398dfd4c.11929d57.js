(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));r(58),r(31),r(22),r(23),r(59),r(0);var n=r(263);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o={id:"introduction",title:"Introduction"},c=[{value:"Entry points",id:"entry-points",children:[]},{value:"Automatic delimiters",id:"automatic-delimiters",children:[{value:"Old-school patterns",id:"old-school-patterns",children:[]}]},{value:"Prepared Patterns",id:"prepared-patterns",children:[]}],i={rightToc:c};function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)("wrapper",a({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are two ways of instantiating a pattern for T-Regx. Each of them accepts an ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/delimiters"}),"undelimited")," pattern\nas the first argument and optional flags as the second argument. "),Object(n.b)("h2",{id:"entry-points"},"Entry points"),Object(n.b)("h4",{id:"class-method-style"},"Class method style:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-php"}),"use TRegx\\CleanRegex\\Pattern;\n \nPattern::of('[A-Z][a-z]+')->test($subject);\n")),Object(n.b)("h4",{id:"global-function-style"},"Global function style:"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern('/[A-Z]#[a-z]+')->test($subject);\n")),Object(n.b)("h2",{id:"automatic-delimiters"},"Automatic delimiters"),Object(n.b)("p",null,"Notice, that these patterns ",Object(n.b)("strong",{parentName:"p"},"don't need to")," be delimited. Smart T-Regx will conveniently add them for you.\nYou can add flags to your regular expression by passing a second argument."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z]+', 'im')->test($subject);\n")),Object(n.b)("p",null,"To learn more, go to ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),"."),Object(n.b)("h3",{id:"old-school-patterns"},"Old-school patterns"),Object(n.b)("p",null,"Of course, you can still use delimited patterns with flags, with ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),". Both versions are equal with each other."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z]+/im')->test($subject);\n")),Object(n.b)("h2",{id:"prepared-patterns"},"Prepared Patterns"),Object(n.b)("p",null,"To safely handle unsafe date or user input, see ",Object(n.b)("a",a({parentName:"p"},{href:"/docs/prepared-patterns"}),"Prepared Patterns"),"."))}l.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,i({ref:t},p,{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);