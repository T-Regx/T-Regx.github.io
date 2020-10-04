(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(170)),i={title:"What's new, new, new! Part 2",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},p={permalink:"/blog/2017/12/30/safe-regex",source:"@site/blog\\2017-12-30-safe-regex.md",description:"I've separated the library into CleanRegex and SafeRegex. The SafeRegex is an exact copy of all preg_*() methods",date:"2017-12-30T00:00:00.000Z",tags:[],title:"What's new, new, new! Part 2",readingTime:.895,truncated:!0,prevItem:{title:"What's new, new, new!",permalink:"/blog/2017/12/30/delimiters"},nextItem:{title:"Back on track!",permalink:"/blog/2017/11/10/back-on-track"}},c=[],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I've separated the library into ",Object(o.b)("inlineCode",{parentName:"p"},"CleanRegex")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SafeRegex"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"SafeRegex")," is an exact copy of all ",Object(o.b)("inlineCode",{parentName:"p"},"preg_*()")," methods\n(like ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"preg_replace()"),"). They're used like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preg_match()")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"preg::match()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preg_replace()")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"preg::replace()"))),Object(o.b)("p",null,"I didn't want to use namespaces (like ",Object(o.b)("inlineCode",{parentName:"p"},"\\SafeRegex\\preg_match"),") because that would\nmean the programmers reading the code would have to check the imported namespaces ",Object(o.b)("strong",{parentName:"p"},"every time")," they look at the code.\nWith double colon ",Object(o.b)("inlineCode",{parentName:"p"},"::")," it's obvious. Read on, for more details."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"preg::*()")," methods analyse warnings, return types of methods and result of ",Object(o.b)("inlineCode",{parentName:"p"},"preg_last_error()"),", and if they find that\nthe pattern or subject failed in some way, they throw an exception, instead of a warning or returning ",Object(o.b)("inlineCode",{parentName:"p"},"null"),".\nI want developers to stop worrying about what ",Object(o.b)("strong",{parentName:"p"},"might")," cause a bug, when they use regular expressions, and just\nfocus on the creative part. I want them to ",Object(o.b)("em",{parentName:"p"},"feel"),': "This code ',Object(o.b)("strong",{parentName:"p"},"has"),' to work, it would throw an exception otherwise".'),Object(o.b)("p",null,"And the ",Object(o.b)("inlineCode",{parentName:"p"},"CleanRegex")," is what it was - the API part, that's using ",Object(o.b)("inlineCode",{parentName:"p"},"SafeRegex")," never to care about warnings or returning\n",Object(o.b)("inlineCode",{parentName:"p"},"null"),"/",Object(o.b)("inlineCode",{parentName:"p"},"false"),"/",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"/",Object(o.b)("inlineCode",{parentName:"p"},"''"),"."),Object(o.b)("p",null,"That's it for today! :)"))}b.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);