(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(204));const o={title:"Toss a coin to your T-Regx!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},i={permalink:"/blog/2020/03/19/sponsor-t-regx",source:"@site/blog/2020-03-19-sponsor-t-regx.md",description:'Hello, back again! :) We\'ve added a "Sponsor" button on [github.com/T-Regx](https://github.com/T-Regx/T-Regx). ',date:"2020-03-19T00:00:00.000Z",tags:[],title:"Toss a coin to your T-Regx!",readingTime:.615,truncated:!1,prevItem:{title:"Release 0.9.6 - First/all changes!",permalink:"/blog/2020/04/02/release-0.9.6"},nextItem:{title:"Release 0.9.5 - Alternation in prepared patterns!",permalink:"/blog/2020/03/15/release-0.9.5"}},l=[{value:"Next release",id:"next-release",children:[]}],c={rightToc:l};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Hello, back again! :) We\'ve added a "Sponsor" button on ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx"}),"github.com/T-Regx"),". "),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sponsors/Danon"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"/img/sponsor.png",alt:"Sponsor"})))),Object(a.b)("p",null,"If you like T-Regx going in the right direction, now you have the opportunity to throw us buck or two."),Object(a.b)("h2",{id:"next-release"},"Next release"),Object(a.b)("p",null,"And a heads up, in the new 0.9.6 release, we'll add a really smart ",Object(a.b)("inlineCode",{parentName:"p"},"asInt()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"fluent()")," methods; which are already present,\nbut will get an upgrade."),Object(a.b)("p",null,"You see, ",Object(a.b)("inlineCode",{parentName:"p"},"match()->first()")," calls ",Object(a.b)("inlineCode",{parentName:"p"},"preg_match()")," and that makes sense. Also ",Object(a.b)("inlineCode",{parentName:"p"},"match()->fluent()")," calls ",Object(a.b)("inlineCode",{parentName:"p"},"preg_match_all()"),",\nbecause later ",Object(a.b)("inlineCode",{parentName:"p"},"fluent()->map()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"fluent()->filter()->first()")," can be called, for example. And that also, sorta makes sense.\nBut, unfortunately ",Object(a.b)("inlineCode",{parentName:"p"},"match()->fluent()->first()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"match()->asInt()->first()")," also call ",Object(a.b)("inlineCode",{parentName:"p"},"preg_match_all()"),", and that's a bit\nwasteful. "),Object(a.b)("p",null,"So now we're introducing a change (similar to Java 8 Streams) that will call ",Object(a.b)("inlineCode",{parentName:"p"},"preg_match()")," for ",Object(a.b)("inlineCode",{parentName:"p"},"fluent()->first()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"asInt()->first()"),"."))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l({ref:t},p,{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);