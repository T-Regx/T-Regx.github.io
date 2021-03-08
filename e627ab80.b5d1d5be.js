(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(200)),c={id:"composite-pattern",title:"Composite Pattern"},p={unversionedId:"composite-pattern",id:"composite-pattern",isDocsHomePage:!1,title:"Composite Pattern",description:"`php",source:"@site/../docs/composite-pattern.md",slug:"/composite-pattern",permalink:"/docs/composite-pattern",version:"current",lastUpdatedAt:1544363865,sidebar:"docs",previous:{title:"Prepared Patterns",permalink:"/docs/prepared-patterns"},next:{title:"Automatic delimiters",permalink:"/docs/delimiters"}},i=[],s={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$pattern = Pattern::compose([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$pattern = CompositePattern::of([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedReplace($subject)->with('XXX');\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedRemove($subject);\n")))}l.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(b,p(p({ref:t},s),{},{components:n})):a.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);