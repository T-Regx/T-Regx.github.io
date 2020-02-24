/*! For license information please see 739de255.f0464bec.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(263),a=n(265),c=n(267);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"match-for-each",title:"For Each/Iterate"},l=[{value:"Iterate with <code>forEach()</code>",id:"iterate-with-foreach",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It's possible to easily iterate matched occurrences with ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()"),"."),Object(r.b)("h2",{id:"iterate-with-foreach"},"Iterate with ",Object(r.b)("inlineCode",{parentName:"h2"},"forEach()")),Object(r.b)("p",null,"You can call ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()")," with a callback, that's invoked with ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details just like\n",Object(r.b)("a",o({parentName:"p"},{href:"/docs/match-first"}),Object(r.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/match-for-first"}),Object(r.b)("inlineCode",{parentName:"a"},"forFirst()")),"."),Object(r.b)(a.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match('Apples are cool')->forEach(function (Match $text) {\n    echo \"I matched $text, \";\n});\n"))),Object(r.b)(c.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"if (preg::match_all('/\\w+/', 'Apples are cool', $matches)) {\n    array_map(function (string $text) {\n        echo \"I matched $text, \";\n    }, $matches[0]);\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-text"}),"I matched Apples, I matched are, I matched cool, \n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Of course, ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()")," accepts ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/match-details"}),"Match")," details, but ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/match-details"}),"Match")," can be cast to ",Object(r.b)("inlineCode",{parentName:"p"},"(string)"),".")))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return n?a.a.createElement(m,i({ref:t},u,{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},264:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},265:function(e,t,n){"use strict";n(31),n(22),n(23);var r=n(0),a=n.n(r),c=n(264),o=n.n(c),i=n(266),l=n.n(i),u=37,p=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,i=e.values,s=Object(r.useState)(c),b=s[0],f=s[1],m=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:o()("tab-item",l.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(m,e.target,e)},onFocus:function(){return f(t)},onClick:function(){return f(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},266:function(e,t,n){e.exports={tabItem:"tabItem_3zTA"}},267:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);