(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(204)),i={title:"Release 0.9.6 - First/all changes!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2020/04/02/release-0.9.6",source:"@site/blog\\2020-04-02-release-0.9.6.md",description:"Another release ahead of us. This one is about T-Regx chainable interface. We made sure, that `first()`\r",date:"2020-04-02T00:00:00.000Z",tags:[],title:"Release 0.9.6 - First/all changes!",truncated:!1,prevItem:{title:"Release 0.9.7 - Match as vanilla array!",permalink:"/blog/2020/04/08/release-0.9.7"},nextItem:{title:"Toss a coin to your T-Regx!",permalink:"/blog/2020/03/19/sponsor-t-regx"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Another release ahead of us. This one is about T-Regx chainable interface. We made sure, that ",Object(o.b)("inlineCode",{parentName:"p"},"first()"),"\nchained with anything always uses ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match()"),", instead of ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match_all()"),"."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"pattern($pattern)->match($subject)\n    ->fluent()\n    ->flatMap(function (Match $match) {\n        return [$match->text() => $match->offset()];\n    })\n    ->keys()\n    ->groupByCallback(function (string $text) {\n        return $text[0];\n    })\n    ->first();\n")),Object(o.b)("p",null,"this code will now use ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match()"),". Really, this whole release was about ensuring that."),Object(o.b)("p",null,"The only exception is ",Object(o.b)("inlineCode",{parentName:"p"},"filter()"),", for which it would be really wasteful to call ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match()")," first, and then,\nif the filter has failed, call ",Object(o.b)("inlineCode",{parentName:"p"},"preg_match_all()"),"."),Object(o.b)("p",null,"In the future releases we'll make sure that the exception for unmatched ",Object(o.b)("inlineCode",{parentName:"p"},"first()")," are also\nuniform (probably ",Object(o.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException"),", instead of ",Object(o.b)("inlineCode",{parentName:"p"},"NoSuchFluentElementException"),")."),Object(o.b)("p",null,"Boy, are design patterns so cool for this kind of job ;D"))}u.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(i,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);