(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return i}));t(58),t(31),t(22),t(23),t(59),t(0);var r=t(263);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={id:"composite-pattern",title:"Composite Pattern"},c=[],p={rightToc:c};function i(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)("wrapper",a({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"$pattern = CompositePattern::of([\n    '/^fro/i',\n    'rod',\n    'odo$'\n]);\n\n$match = $pattern->allMatch(\"Frodo\");\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedReplace($subject)->with('XXX');\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::compose([\n    '<(b|div|span)>',\n    '</(b|div|span)>',\n    '[0-9]+'\n]);\n\n$pattern->chainedRemove($subject);\n")))}i.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},f=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(t),b=r,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||o;return t?a.a.createElement(m,p({ref:n},u,{components:t})):a.a.createElement(m,p({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);