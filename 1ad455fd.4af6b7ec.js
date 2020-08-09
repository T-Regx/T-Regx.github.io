(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(d,p(p({ref:t},u),{},{components:n})):a.a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(161)),c={title:"Capturing groups update",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},p={permalink:"/blog/2018/09/01/groups",source:"@site/blog\\2018-09-01-groups.md",description:"One update about groups, not to cause confusion. $match->groups() treats indexes a bit different than $match->group(int).",date:"2018-09-01T00:00:00.000Z",tags:[],title:"Capturing groups update",readingTime:.855,truncated:!0,prevItem:{title:"Welcome T-Regx",permalink:"/blog/2018/09/24/welcome-t-regx"},nextItem:{title:"Support for PHP 5.3",permalink:"/blog/2018/03/03/php-5.3-support"}},i=[],u={rightToc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One update about groups, not to cause confusion. ",Object(o.b)("inlineCode",{parentName:"p"},"$match->groups()")," treats indexes a bit different than ",Object(o.b)("inlineCode",{parentName:"p"},"$match->group(int)"),".\nRead on to learn more :)"),Object(o.b)("p",null,"Anyone who worked with regular expressions knows, that group ",Object(o.b)("inlineCode",{parentName:"p"},"0")," is a whole match. I don't want to break\nthat convention. That is why I assumed that they must be equal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$match->group(0) === $match->text()\n")),Object(o.b)("p",null,"Having said that, I still want to distinguish a method which returns groups and the one that returns a whole match.\nSo ",Object(o.b)("inlineCode",{parentName:"p"},"$match->groups()")," ",Object(o.b)("strong",{parentName:"p"},"doesn't")," return the whole match at index ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", while ",Object(o.b)("inlineCode",{parentName:"p"},"$match->group()")," does."),Object(o.b)("p",null,"You can think of ",Object(o.b)("inlineCode",{parentName:"p"},"$this->group(int)")," method as:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"return [$this->text(), ...$this->groups()];\n")),Object(o.b)("p",null,"So..."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$match->group(0) == $match->text();\n$match->group(1) == $match->groups()[0];\n$match->group(2) == $match->groups()[1];\n$match->group(3) == $match->groups()[2];\n$match->group(4) == $match->groups()[3];\n")),Object(o.b)("p",null,"And a quick update about the CleanRegex:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"I added a ",Object(o.b)("inlineCode",{parentName:"li"},"ReadMeTest")," testcase, which asserts that all code used in ReadMe.md has the presented results."),Object(o.b)("li",{parentName:"ul"},"New ",Object(o.b)("inlineCode",{parentName:"li"},"->first()"),", ",Object(o.b)("inlineCode",{parentName:"li"},"->all()")," and ",Object(o.b)("inlineCode",{parentName:"li"},"->only()")," methods to ",Object(o.b)("strong",{parentName:"li"},"explicitly")," match/replace certain amount of occurrences.\nThis will also be used with capturing groups.")))}l.isMDXComponent=!0}}]);