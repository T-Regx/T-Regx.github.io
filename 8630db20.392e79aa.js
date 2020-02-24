/*! For license information please see 8630db20.392e79aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(263),r=n(265),i=n(267);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c={id:"overview",title:"What's T-Regx?"},o=[{value:"Why is explicit interface so important?",id:"why-is-explicit-interface-so-important",children:[{value:"What's bad",id:"whats-bad",children:[]},{value:"What's good",id:"whats-good",children:[]}]},{value:"Brain Strain",id:"brain-strain",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)("wrapper",l({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"T-Regx (",Object(a.b)("em",{parentName:"p"},"T-Rex and RegExp"),") is a lightweight, high-level Regular Expressions library."),Object(a.b)("p",null,"Its main features are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Being ",Object(a.b)("strong",{parentName:"p"},"bulletproof"),":"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"/docs/delimiters"}),"Automatic delimiters")," for your patterns"),Object(a.b)("li",{parentName:"ul"},"Each and every unexpected situation ends in an exception"),Object(a.b)("li",{parentName:"ul"},"UTF-8 support out of the box"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",l({parentName:"li"},{href:"/docs/prepared-patterns"}),"Prepared Patterns")," handling unsafe characters (e.g. user-input)"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Cleaning the ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/whats-the-point"}),"mess after PHP regular expressions API"),":"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"All false positives and false negatives are eliminated"),Object(a.b)("li",{parentName:"ul"},"Special values like ",Object(a.b)("inlineCode",{parentName:"li"},"null"),", ",Object(a.b)("inlineCode",{parentName:"li"},"false"),", ",Object(a.b)("inlineCode",{parentName:"li"},"''")," aren't used to indicate errors."),Object(a.b)("li",{parentName:"ul"},"Unifying differences between matching, replacing, splitting - all operations"),Object(a.b)("li",{parentName:"ul"},"Results aren't a dull ",Object(a.b)("inlineCode",{parentName:"li"},"string[][]")," array, but a dedicated ",Object(a.b)("a",l({parentName:"li"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details."),Object(a.b)("li",{parentName:"ul"},"Based on exceptions - No warnings, errors or fatal errors or notices."),Object(a.b)("li",{parentName:"ul"},"Relieving developers from ",Object(a.b)("a",l({parentName:"li"},{href:"#brain-strain"}),Object(a.b)("strong",{parentName:"a"},"brain strain")),":"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Being explicit and descriptive - (",Object(a.b)("a",l({parentName:"p"},{href:"#why-is-explicit-interface-so-important"}),"why is explicit interface so important?"),"):"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Each function obeys SRP"),Object(a.b)("li",{parentName:"ul"},"Functionalities are represented with methods (and not flags or default arguments)"),Object(a.b)("li",{parentName:"ul"},"No default parameters"),Object(a.b)("li",{parentName:"ul"},"No flags"),Object(a.b)("li",{parentName:"ul"},"No var-args")))),Object(a.b)("h2",{id:"why-is-explicit-interface-so-important"},"Why is explicit interface so important?"),Object(a.b)("p",null,"T-Regx' aim is to relieve programmers from ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/overview#brain-strain"}),Object(a.b)("strong",{parentName:"a"},"brain strain"))," while reading and writing code.\nOur mission is to make developers write/read a line and ",Object(a.b)("strong",{parentName:"p"},"immediately")," go on, without thinking about what it does or\nwhat side effects it may cause."),Object(a.b)("h3",{id:"whats-bad"},"What's bad"),Object(a.b)("p",null,"While reading this code..."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"preg_match($pattern, $subject, $match);\n")),Object(a.b)("p",null,"...developers must stop for a moment and think:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Will this match the first occurrence? Or all of them?"),Object(a.b)("li",{parentName:"ul"},"Will the ",Object(a.b)("inlineCode",{parentName:"li"},"$subject")," match the pattern ",Object(a.b)("inlineCode",{parentName:"li"},"$pattern"),"?"),Object(a.b)("li",{parentName:"ul"},"Will this trigger a warning, if I mess up my regexp?"),Object(a.b)("li",{parentName:"ul"},"Will this return ",Object(a.b)("inlineCode",{parentName:"li"},"null"),"/",Object(a.b)("inlineCode",{parentName:"li"},"false")," or raise a warning, on error?"),Object(a.b)("li",{parentName:"ul"},"Will this return ",Object(a.b)("inlineCode",{parentName:"li"},"null"),"/",Object(a.b)("inlineCode",{parentName:"li"},"''"),", if the ",Object(a.b)("inlineCode",{parentName:"li"},"$subject")," doesn't match?"),Object(a.b)("li",{parentName:"ul"},"Is ",Object(a.b)("inlineCode",{parentName:"li"},"$match")," a ",Object(a.b)("inlineCode",{parentName:"li"},"string[]")," or a ",Object(a.b)("inlineCode",{parentName:"li"},"string[][]"),"?"),Object(a.b)("li",{parentName:"ul"},"Will this return ",Object(a.b)("strong",{parentName:"li"},"my value"),"? Or ",Object(a.b)("strong",{parentName:"li"},"my value")," nested in arrays?")),Object(a.b)("p",null,"What should be obvious, is now complicated and causes ",Object(a.b)("strong",{parentName:"p"},"many")," questions and assumptions for the reader."),Object(a.b)("h3",{id:"whats-good"},"What's good"),Object(a.b)("p",null,"While using T-Regx, some things are ",Object(a.b)("strong",{parentName:"p"},"obvious"),". For example:"),Object(a.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"$result = pattern($pattern)->match($subject)->first();\n"))),Object(a.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),'if (preg::match("/$pattern/", $subject, $match) === 1) {\n    $result = $match[0];\n} else {\n    throw new SubjectNotMatchedException();\n}\n')))),Object(a.b)("p",null,"Here, ",Object(a.b)("inlineCode",{parentName:"p"},"$result")," ",Object(a.b)("strong",{parentName:"p"},"must")," contain the first occurrence. It must contain ",Object(a.b)("em",{parentName:"p"},"your value"),"."),Object(a.b)("p",null,"It will ",Object(a.b)("strong",{parentName:"p"},"never")," contain ",Object(a.b)("inlineCode",{parentName:"p"},"null"),", ",Object(a.b)("inlineCode",{parentName:"p"},"false")," or an empty array. ",Object(a.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," would be thrown, if ",Object(a.b)("inlineCode",{parentName:"p"},"$pattern"),"\nis malformed. It would also throw ",Object(a.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the ",Object(a.b)("inlineCode",{parentName:"p"},"$pattern")," doesn't match the ",Object(a.b)("inlineCode",{parentName:"p"},"$subject"),".\nEven if ",Object(a.b)("inlineCode",{parentName:"p"},"first()")," does return ",Object(a.b)("inlineCode",{parentName:"p"},"''"),', it\'s only because it supposed to do that; that is "when a pattern matched\na string of length 0".'),Object(a.b)("p",null,"It also never raises any warnings or fatal errors."),Object(a.b)("h2",{id:"brain-strain"},"Brain Strain"))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?r.a.createElement(d,c({ref:t},b,{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},264:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},265:function(e,t,n){"use strict";n(31),n(22),n(23);var a=n(0),r=n.n(a),i=n(264),l=n.n(i),c=n(266),o=n.n(c),b=37,p=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,c=e.values,s=Object(a.useState)(i),u=s[0],m=s[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:l()("tab-item",o.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return m(t)},onClick:function(){return m(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},266:function(e,t,n){e.exports={tabItem:"tabItem_3zTA"}},267:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);