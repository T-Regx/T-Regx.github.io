(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(167)),i={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"There are two ways of instantiating a pattern for T-Regx. Each of them accepts an undelimited pattern",source:"@site/..\\docs\\introduction.md",permalink:"/docs/introduction",lastUpdatedAt:1597252124,sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Match a subject",permalink:"/docs/match"}},l=[{value:"Entry points",id:"entry-points",children:[]},{value:"Automatic delimiters",id:"automatic-delimiters",children:[{value:"Old-school patterns",id:"old-school-patterns",children:[]}]},{value:"Prepared Patterns",id:"prepared-patterns",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two ways of instantiating a pattern for T-Regx. Each of them accepts an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/delimiters"}),"undelimited")," pattern\nas the first argument and optional flags as the second argument. "),Object(o.b)("h2",{id:"entry-points"},"Entry points"),Object(o.b)("p",null,"We have 4 entry points to user T-Regx:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Standard functions - ",Object(o.b)("inlineCode",{parentName:"li"},"Pattern::of()")," or ",Object(o.b)("inlineCode",{parentName:"li"},"pattern()")," to use undelimited patterns"),Object(o.b)("li",{parentName:"ul"},"Compatibility legacy - ",Object(o.b)("inlineCode",{parentName:"li"},"Pattern::pcre()")," to use vanilla patterns"),Object(o.b)("li",{parentName:"ul"},"Prepared patterns - to safely use user data in patterns (see ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/handling-user-input"}),"Prepared Patterns"),")")),Object(o.b)("h4",{id:"class-method-style"},"Class method style:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"use TRegx\\CleanRegex\\Pattern;\n \nPattern::of('[A-Z][a-z]+')->test($subject);\n")),Object(o.b)("h4",{id:"global-function-style"},"Global function style:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"pattern('/[A-Z]#[a-z]+')->test($subject);\n")),Object(o.b)("h2",{id:"automatic-delimiters"},"Automatic delimiters"),Object(o.b)("p",null,"Notice, that these patterns ",Object(o.b)("strong",{parentName:"p"},"are not")," be delimited. Smart T-Regx will conveniently add them for you, if you\nuse ",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::of()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()"),". You can add flags to your regular expression by passing a second argument."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z]+', 'im')->test($subject);\n")),Object(o.b)("p",null,"To learn more, go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),"."),Object(o.b)("h3",{id:"old-school-patterns"},"Old-school patterns"),Object(o.b)("p",null,"Of course, you can still use delimited patterns with flags, with ",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),". Both versions are equal with each other."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z]+/im')->test($subject);\n")),Object(o.b)("h2",{id:"prepared-patterns"},"Prepared Patterns"),Object(o.b)("p",null,"To safely handle unsafe date or user input, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/prepared-patterns"}),"Prepared Patterns"),"."))}s.isMDXComponent=!0}}]);