(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(0),n(204)),i=n(210),c={id:"valid",title:"Validate a pattern"},l={id:"valid",title:"Validate a pattern",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\valid.mdx",permalink:"/docs/valid",lastUpdatedAt:1586367925,sidebar:"docs",previous:{title:"Quote regular expression",permalink:"/docs/quote"},next:{title:"Split a string",permalink:"/docs/split"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(o.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE doesn't provide a way to validate patterns.")),Object(o.b)("p",null,"You can check whether a pattern is valid with ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," method."),Object(o.b)(i.a,{tregx:"pattern('I am a valid pattern')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"true"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Remember, ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," doesn't throw any exception nor issues any warnings. It only returns ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"/",Object(o.b)("inlineCode",{parentName:"p"},"false"),".")),Object(o.b)(i.a,{tregx:"pattern('I am an (( invalid }} pattern')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"false"),Object(o.b)("h1",{id:"old-school-patterns"},"Old-school patterns"),Object(o.b)("p",null,"Undelimited patterns can be validated with ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::of()"),". To validate old-school patterns (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"/Hello/i"),"), use ",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),":"),Object(o.b)(i.a,{tregx:"Pattern::pcre('/I am an valid pattern/m')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"true"))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},207:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(212);var i=function(){return Object(r.useContext)(o.a)},c=n(205),l=n.n(c),u=n(93),p=n.n(u);const s=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:c,groupId:u}=e,{tabGroupChoices:b,setTabGroupChoices:f}=i(),[m,v]=Object(r.useState)(o);if(null!=u){const e=b[u];null!=e&&e!==m&&v(e)}const g=e=>{v(e),null!=u&&f(u,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:l()("tab-item",p.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},208:function(e,t,n){"use strict";var r=n(209),a={};a[n(11)("toStringTag")]="z",a+""!="[object z]"&&n(19)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},209:function(e,t,n){var r=n(53),a=n(11)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));n(12),n(52),n(208);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=n(5),o=n(0),i=n.n(o),c=n(207),l=n(206),u=n(213),p=n(94),s=n.n(p);class d extends i.a.Component{render(){return i.a.createElement("div",{className:s.a.code},i.a.createElement(u.a,{className:`language-${this.language}`},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var b=function(e){function t(){return e.apply(this,arguments)||this}var n,o,u;return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&i.a.createElement(l.a,{value:"t-regx"},i.a.createElement(d,null,this.props.tregx)),this.props.php&&i.a.createElement(l.a,{value:"php"},i.a.createElement(d,null,this.props.php))))},n=t,(o=[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}])&&r(n.prototype,o),u&&r(n,u),t}(i.a.Component),f=n(95),m=n.n(f),v=function(e){var t=e.text,n=e.children;return i.a.createElement("div",{className:m.a.result},i.a.createElement(d,{language:t?"text":"php"},n))}}}]);