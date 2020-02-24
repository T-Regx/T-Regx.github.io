(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(263);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={title:"Match details update",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},o=[],c={rightToc:o};function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Most changes in T-Regx since the last Blog post were to ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match")," details"),". We\nadded ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/match-details#user-data"}),"user data")," (",Object(r.b)("a",a({parentName:"p"},{href:"/docs/match-details#user-data"}),Object(r.b)("inlineCode",{parentName:"a"},"getUserData()"),"/",Object(r.b)("inlineCode",{parentName:"a"},"setUserData()")),")\nwhich can be used in chained calls (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"filter()->map()"),")."),Object(r.b)("p",null,"The second change is ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/match-details#integers"}),Object(r.b)("inlineCode",{parentName:"a"},"isInt()"),"/",Object(r.b)("inlineCode",{parentName:"a"},"parseInt()")),' which allow you to handle "real" integers safetly -\nwithout the fear of "PHP smart" integers (e.g. PHP thinks that ',Object(r.b)("inlineCode",{parentName:"p"},'"1e3"')," is ",Object(r.b)("inlineCode",{parentName:"p"},"1000"),"). T-Regx understands that robust applications\ncan't allow numbers to be ",Object(r.b)("inlineCode",{parentName:"p"},"10e4")," - it should be treated as an invalid integer by default!"),Object(r.b)("p",null,"And last, ",Object(r.b)("inlineCode",{parentName:"p"},"Match.group(int|string)")," is now validated (T-Regx was waiting a bit for this change!). We believe that using an\ninvalid group name is a sign of a bug, so using ",Object(r.b)("inlineCode",{parentName:"p"},"group(-1)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"group('!@#')")," now throws ",Object(r.b)("inlineCode",{parentName:"p"},"\\InvalidArgumentException"),",\nas it's more suitable than assuming that ",Object(r.b)("inlineCode",{parentName:"p"},"-1")," is just an unmatched group."))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);