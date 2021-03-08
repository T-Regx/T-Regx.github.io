(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(200)),l={title:"Valentine's release",author:"Daniel Wilkowski"},o={permalink:"/blog/2021/02/14/release-0.10.1",source:"@site/blog/2021-02-14-release-0.10.1.md",description:"Rawwrrrr!",date:"2021-02-14T00:00:00.000Z",tags:[],title:"Valentine's release",readingTime:.885,truncated:!1,prevItem:{title:"Implicit all() in replace()",permalink:"/blog/2021/03/06/release-0.10.2"},nextItem:{title:"T-Regx on PHP8",permalink:"/blog/2021/01/30/release-0.10.0"}},c=[],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Rawwrrrr!"),Object(i.b)("p",null,"We've release T-Regx ",Object(i.b)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.10.1"},"0.10.1"),"."),Object(i.b)("p",null,"This time, we've updated match filtering. Previously, methods ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," used on regular match pattern,\nit would filter only ",Object(i.b)("a",{parentName:"p",href:"/docs/match"},Object(i.b)("inlineCode",{parentName:"a"},"Detail")),", and have exactly alike interface as the said match pattern\n(like a filtering decorator), yet ",Object(i.b)("inlineCode",{parentName:"p"},"fluent()->filter()")," simply removed entries from the fluent stream.\nWe don't like that difference."),Object(i.b)("p",null,"So we renamed ",Object(i.b)("inlineCode",{parentName:"p"},"match()->filter()")," to ",Object(i.b)("inlineCode",{parentName:"p"},"match()->remaining()"),", since that looks more like a decorator it is,\nand we added new ",Object(i.b)("inlineCode",{parentName:"p"},"match()->filter()")," method which works like ",Object(i.b)("inlineCode",{parentName:"p"},"all()"),", but it only returns the items\nmatching the predicate (like ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.array-filter.php"},Object(i.b)("inlineCode",{parentName:"a"},"array_filter")),")."),Object(i.b)("p",null,"Apart from that, we fixed a bug that was lurking in ",Object(i.b)("inlineCode",{parentName:"p"},"fluent()->flatMap()")," (don't worry, it's gone now :), as\nwell as improving the ",Object(i.b)("inlineCode",{parentName:"p"},"fluent()->first()"),". Now, when filtering a fluent stream, calling ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," first calls\n",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-match.php"},Object(i.b)("inlineCode",{parentName:"a"},"preg_match()")),", and if it matches the predicate, that ",Object(i.b)("a",{parentName:"p",href:"/docs/match"},Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," is simply returned. If the first ",Object(i.b)("a",{parentName:"p",href:"/docs/match"},Object(i.b)("inlineCode",{parentName:"a"},"Detail")),"\nisn't matched by the predicate, then it calls ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-match-all.php"},Object(i.b)("inlineCode",{parentName:"a"},"preg_match_all()"))," and returns the first detail\nfrom that, that matches the predicate."),Object(i.b)("p",null,"As always, everything is described in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"},"ChangeLog.md")," on github."))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return n?a.a.createElement(f,o(o({ref:t},p),{},{components:n})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);