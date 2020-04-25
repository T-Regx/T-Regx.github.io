(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),i=(r(0),r(204)),l=r(210),o={id:"filter",title:"Filter an array"},c={id:"filter",title:"Filter an array",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\filter.mdx",permalink:"/docs/filter",lastUpdatedAt:1586997896,sidebar:"docs",previous:{title:"Split a string",permalink:"/docs/split"},next:{title:"Iterator",permalink:"/docs/match-iterator"}},p=[{value:"Filter a regular array",id:"filter-a-regular-array",children:[]},{value:"Filter an associative array",id:"filter-an-associative-array",children:[]},{value:"Filter by keys",id:"filter-by-keys",children:[]}],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Filtering an array, returns a new array with only the values that match the pattern."),Object(i.b)("p",null,"Available methods for ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->forArray()")," are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#filter-a-regular-array"}),Object(i.b)("inlineCode",{parentName:"a"},"filter()"))," - filters an array by values"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#filter-an-associative-array"}),Object(i.b)("inlineCode",{parentName:"a"},"filterAssoc()"))," - filters an array by values, preserving keys (associative array)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#filter-by-keys"}),Object(i.b)("inlineCode",{parentName:"a"},"filterByKeys()"))," - filters an array by keys")),Object(i.b)("h2",{id:"filter-a-regular-array"},"Filter a regular array"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," filters an array and returns values ",Object(i.b)("strong",{parentName:"p"},"re-indexed")," to match the removed elements (unlike ",Object(i.b)("inlineCode",{parentName:"p"},"array_filter()"),")."),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark',\n        'Robert',\n        'lorem impsum',\n        'Jane',\n        'FooBar123'\n    ])\n    ->filter();",php:"$input = [\n    'Mark',\n    'Robert',\n    'lorem impsum',\n    'Jane',\n    'FooBar123'\n];\narray_values(preg::grep(\"/[A-Z][a-z]+$/\", $input));",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['Mark', 'Robert', 'Jane'] "),Object(i.b)("p",null,"More precisely it returns ",Object(i.b)("inlineCode",{parentName:"p"},"[0 => 'Mark', 1 => 'Robert', 2 => 'Jane']"),", even though original key for ",Object(i.b)("inlineCode",{parentName:"p"},"'Jane'")," was ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"."),Object(i.b)("h2",{id:"filter-an-associative-array"},"Filter an associative array"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"filterAssoc()")," works similarly to ",Object(i.b)("inlineCode",{parentName:"p"},"filter()"),", but it preserves the array keys:"),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'm' => 'Mark',\n        'r' => 'Robert',\n        'l' => 'lorem impsum',\n        'j' => 'Jane',\n        's' => 'FooBar123'\n    ])\n    ->filterAssoc();",php:"$input = [\n    'm' => 'Mark',\n    'r' => 'Robert',\n    'l' => 'lorem impsum',\n    'j' => 'Jane',\n    's' => 'FooBar123'\n];\npreg::grep(\"/[A-Z][a-z]+$/\", $input);",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['m' => 'Mark', 'r' => 'Robert', 'j' => 'Jane']"),Object(i.b)("h2",{id:"filter-by-keys"},"Filter by keys"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"filterAssoc()"),", only array values are being used to filter the array. With ",Object(i.b)("inlineCode",{parentName:"p"},"filterByKeys()"),", it's the array keys that are used to filter the array. The corresponding values (which can be of type ",Object(i.b)("inlineCode",{parentName:"p"},"mixed"),") are returned unchanged:"),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark'          => 'm',\n        'Robert'        => 'r',\n        'lorem impsum'  => 'l',\n        'Jane'          => 'j',\n        'FooBar123'     => 'f'\n    ])\n    ->filterByKeys();",php:"$input = [\n    'Mark'         => 'm',\n    'Robert'       => 'r',\n    'lorem impsum' => 'l',\n    'Jane'         => 'j',\n    'FooBar123'    => 'f'\n];\n$filteredKeys = preg::grep(\"/[A-Z][a-z]+$/\", array_keys($input));\narray_intersect_key($input, array_flip($filteredKeys));",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['Mark' => 'm', 'Robert' => 'r', 'Jane' => 'j']"))}u.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||i;return r?a.a.createElement(m,o({ref:t},p,{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},206:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},207:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(212);var l=function(){return Object(n.useContext)(i.a)},o=r(205),c=r.n(o),p=r(93),s=r.n(p);const u=37,b=39;t.a=function(e){const{block:t,children:r,defaultValue:i,values:o,groupId:p}=e,{tabGroupChoices:f,setTabGroupChoices:m}=l(),[y,d]=Object(n.useState)(i);if(null!=p){const e=f[p];null!=e&&e!==y&&d(e)}const h=e=>{d(e),null!=p&&m(p,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===e,className:c()("tab-item",s.a.tabItem,{"tab-item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,r)=>{switch(r.keyCode){case b:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter(e=>e.props.value===y)[0]))}},208:function(e,t,r){"use strict";var n=r(209),a={};a[r(11)("toStringTag")]="z",a+""!="[object z]"&&r(19)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},209:function(e,t,r){var n=r(53),a=r(11)("toStringTag"),i="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),a))?r:i?n(t):"Object"==(l=n(t))&&"function"==typeof t.callee?"Arguments":l}},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));r(12),r(52),r(208);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=r(5),i=r(0),l=r.n(i),o=r(207),c=r(206),p=r(213),s=r(94),u=r.n(s);class b extends l.a.Component{render(){return l.a.createElement("div",{className:u.a.code},l.a.createElement(p.a,{className:`language-${this.language}`},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var f=function(e){function t(){return e.apply(this,arguments)||this}var r,i,p;return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&l.a.createElement(c.a,{value:"t-regx"},l.a.createElement(b,null,this.props.tregx)),this.props.php&&l.a.createElement(c.a,{value:"php"},l.a.createElement(b,null,this.props.php))))},r=t,(i=[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}])&&n(r.prototype,i),p&&n(r,p),t}(l.a.Component),m=r(95),y=r.n(m),d=function(e){var t=e.text,r=e.children;return l.a.createElement("div",{className:y.a.result},l.a.createElement(b,{language:t?"text":"php"},r))}}}]);