(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(263);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={id:"utils",title:"T-Regx Utilities"},b=[],o={rightToc:b};function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)("wrapper",a({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"T-Regx provides some little utility methods that aren't present in PHP:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"/docs/quote"}),Object(r.b)("inlineCode",{parentName:"a"},"Pattern::unquote()"))," - unquote a quoted pattern"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"/docs/valid"}),Object(r.b)("inlineCode",{parentName:"a"},"valid()"))," - safely validate a pattern"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"preg::last_error_msg()")," - return the last error message in human-readable form")),Object(r.b)("h1",{id:"preglast_error_msg"},Object(r.b)("inlineCode",{parentName:"h1"},"preg::last_error_msg()")),Object(r.b)("p",null,"It returns the last error as a human-readable ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"@preg_match('/pattern/u', \"\\xc3\\x28\");   // Cause an UTF8 error\n\npreg::last_error_msg(); // 'Malformed UTF-8 characters, possibly incorrectly encoded'\n")),Object(r.b)("p",null,"You never have to use this method, when using ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()"),"/ ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::of()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::pcre()")," or even ",Object(r.b)("inlineCode",{parentName:"p"},"preg::match()"),"\n(instead of ",Object(r.b)("inlineCode",{parentName:"p"},"\\preg_match()"),"), since every exception thrown will already have a descriptive exception message."),Object(r.b)("p",null,"When using vanilla-PHP methods, however (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"\\preg_match()"),") the last error can be looked up using ",Object(r.b)("inlineCode",{parentName:"p"},"preg_last_error()"),",\nwhich returns an error code (",Object(r.b)("inlineCode",{parentName:"p"},"int"),") of the error."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",a({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",a({parentName:"tr"},{align:null}),"Constant"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_NO_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"1")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_BAD_UTF8_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"2")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_INTERNAL_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"3")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_BACKTRACK_LIMIT_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"4")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_RECURSION_LIMIT_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"5")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_BAD_UTF8_OFFSET_ERROR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",a({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"6")),Object(r.b)("td",a({parentName:"tr"},{align:null}),"PREG_JIT_STACKLIMIT_ERROR")))),Object(r.b)("p",null,"Integers, however, aren't very readable. That's why there's ",Object(r.b)("inlineCode",{parentName:"p"},"preg::lsat_error_msg()"),", which returns the last error\nin human readable form."))}i.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,d=u["".concat(b,".").concat(O)]||u[O]||m[O]||l;return n?a.a.createElement(d,o({ref:t},c,{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,b=new Array(l);b[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var c=2;c<l;c++)b[c]=n[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);