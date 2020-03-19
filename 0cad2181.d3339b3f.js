(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return o}));n(0);var r=n(275);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c={id:"identities",title:"Identities"},p=[],l={rightToc:p};function o({components:e,...t}){return Object(r.b)("wrapper",a({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A curious user might notice, that some parts of T-Regx API are redundant and can be simplified. Here's a list of them:"),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->findFirst($callback)->orThrow();\n")),Object(r.b)("p",null,"can be simplified to"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->first($callback);\n")),Object(r.b)("p",null,"If the subject doesn't match the pattern - ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," throws ",Object(r.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException"),", which is the default class\nfor ",Object(r.b)("inlineCode",{parentName:"p"},"orThrow()"),"."),Object(r.b)("hr",null),Object(r.b)("p",null,"Getting the matched text from ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match")),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($subject)->map(function (Match $match) {\n\n    return $match->text();      // using text() method\n    return $match->group(0);    // group #0 is the whole match in all regexp engines\n    return (string) $match;     // cast it to string\n    return "$match";            // enclose it in double quotes\n});\n')),Object(r.b)("hr",null),Object(r.b)("p",null,"Mapping ",Object(r.b)("inlineCode",{parentName:"p"},"Match.text()")," or returning ",Object(r.b)("inlineCode",{parentName:"p"},"Match.all()")," from ",Object(r.b)("inlineCode",{parentName:"p"},"first()"),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->first(function (Match $match) {\n    return $match->all();\n});\n\n// and\n\npattern($p)->match($s)->map(function (Match $match) {\n    return $match->text();\n});\n")),Object(r.b)("p",null,"can be simplified to"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->all();\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"Similarly, mapping ",Object(r.b)("inlineCode",{parentName:"p"},"Match.group()")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->map(function (Match $match) {\n    return $match->group("capital")->text();\n});\n')),Object(r.b)("p",null,"can be simplified to"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->group("capital")->all();\n')),Object(r.b)("p",null,"Also with offsets"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->map(function (Match $match) {\n    return $match->group("capital")->offset();\n});\n')),Object(r.b)("p",null,"can be simplified to"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->group("capital")->offsets()->all();\n')))}o.isMDXComponent=!0},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||c;return n?a.a.createElement(f,l({ref:t},i,{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<c;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);