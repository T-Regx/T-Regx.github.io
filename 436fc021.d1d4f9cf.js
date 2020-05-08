(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),c=(a(0),a(204)),o=a(210),i={id:"match-for-each",title:"Iterate matches (For each)"},l={id:"match-for-each",title:"Iterate matches (For each)",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\match-for-each.mdx",permalink:"/docs/match-for-each",lastUpdatedAt:1586997896,sidebar:"docs",previous:{title:"Optional matches (Find first)",permalink:"/docs/match-find-first"},next:{title:"Map occurrences",permalink:"/docs/match-map"}},p=[{value:"Vanilla PHP <code>foreach</code>",id:"vanilla-php-foreach",children:[{value:"Other iterable entities",id:"other-iterable-entities",children:[]}]}],s={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"forEach()")," to easily iterate matched occurrences with your callback. You can call ",Object(c.b)("inlineCode",{parentName:"p"},"forEach()")," with a callback,\nthat's invoked with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details just like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(c.b)("inlineCode",{parentName:"a"},"findFirst()")),"."),Object(c.b)(o.a,{tregx:"pattern('\\w+')->match('Apples are cool')->forEach(function (Match $match) {\n    echo \"I matched $match, \";\n});",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\narray_map(function (string $text) {\n    echo \"I matched $text, \";\n}, $matches[0]);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "),Object(c.b)("p",null,"Using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," you can get detailed information such as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"offset()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#ordinal-value-index"}),Object(c.b)("inlineCode",{parentName:"a"},"index()"))," etc."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Of course, ",Object(c.b)("inlineCode",{parentName:"p"},"forEach()")," accepts ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details, but ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," can be cast to ",Object(c.b)("inlineCode",{parentName:"p"},"(string)"),".")),Object(c.b)("h2",{id:"vanilla-php-foreach"},"Vanilla PHP ",Object(c.b)("inlineCode",{parentName:"h2"},"foreach")),Object(c.b)("p",null,"You can also use the result of ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->match()")," directly in PHP ",Object(c.b)("inlineCode",{parentName:"p"},"foreach")," loop."),Object(c.b)(o.a,{tregx:"foreach (pattern('\\w+')->match('Apples are cool') as $match) {\n    echo \"I matched \" . $match->text() . \", \";\n};",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\nforeach ($matches[0] as $text) {\n    echo \"I matched $text, \";\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "),Object(c.b)("h3",{id:"other-iterable-entities"},"Other iterable entities"),Object(c.b)("p",null,"In the further chapters you will learn about inline ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-offsets#using-inline-offsets-method"}),Object(c.b)("inlineCode",{parentName:"a"},"offsets()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-group"}),Object(c.b)("inlineCode",{parentName:"a"},"group(string|int)"))," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-as-int"}),Object(c.b)("inlineCode",{parentName:"a"},"asInt()"))," methods in detail,\nbut for now, you only need to know that all of those entities are iterable with PHP ",Object(c.b)("inlineCode",{parentName:"p"},"foreach"),"."),Object(c.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1') as $match) {\n    return $match->text(); // '127'\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    return $text; // '127';\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"'127'"),Object(c.b)("p",null,"and also"),Object(c.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1')->asInt() as $digit) {\n    return $digit; // 127\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    $digit = Integer::parse($text);\n    return $digit; // 127;\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"127"),"or",Object(c.b)(o.a,{tregx:"foreach (pattern('(\\d+)')->match('127.0.0.1')->group(1) as $group) {\n    return $group->text(); // '127'\n}",php:"preg_match_all('/(\\d+)/', '127.0.0.1', $matches);\nforeach ($matches[1] as $group) {\n    return $group; // '127';\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"'127'"),Object(c.b)("p",null,"Of course, if you call ",Object(c.b)("inlineCode",{parentName:"p"},"->all()")," on any of the given entities above you will receive an ",Object(c.b)("inlineCode",{parentName:"p"},"array"),", which is of course\nalso iterable by PHP ",Object(c.b)("inlineCode",{parentName:"p"},"foreach"),"."),Object(c.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1')->all() as $text) {\n    return $text; // '127'\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    return $text; // '127';\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"'127'"),Object(c.b)("p",null,"Although, instead of ",Object(c.b)("inlineCode",{parentName:"p"},"all()")," it's possible to chain the entities with one of the more high-level T-Regx methods, such as:\n",Object(c.b)("inlineCode",{parentName:"p"},"forEach()"),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-flat-map"}),Object(c.b)("inlineCode",{parentName:"a"},"flatMap()"))," etc."))}b.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),h=n,m=b["".concat(o,".").concat(h)]||b[h]||u[h]||c;return a?r.a.createElement(m,i({ref:t},p,{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(212);var o=function(){return Object(n.useContext)(c.a)},i=a(205),l=a.n(i),p=a(93),s=a.n(p);const b=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:i,groupId:p}=e,{tabGroupChoices:h,setTabGroupChoices:m}=o(),[d,f]=Object(n.useState)(c);if(null!=p){const e=h[p];null!=e&&e!==d&&f(e)}const O=e=>{f(e),null!=p&&m(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:l()("tab-item",s.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},208:function(e,t,a){"use strict";var n=a(209),r={};r[a(11)("toStringTag")]="z",r+""!="[object z]"&&a(19)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},209:function(e,t,a){var n=a(53),r=a(11)("toStringTag"),c="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:c?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return f}));a(12),a(52),a(208);function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=a(5),c=a(0),o=a.n(c),i=a(207),l=a(206),p=a(213),s=a(94),b=a.n(s);class u extends o.a.Component{render(){return o.a.createElement("div",{className:b.a.code},o.a.createElement(p.a,{className:`language-${this.language}`},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var h=function(e){function t(){return e.apply(this,arguments)||this}var a,c,p;return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&o.a.createElement(l.a,{value:"t-regx"},o.a.createElement(u,null,this.props.tregx)),this.props.php&&o.a.createElement(l.a,{value:"php"},o.a.createElement(u,null,this.props.php))))},a=t,(c=[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}])&&n(a.prototype,c),p&&n(a,p),t}(o.a.Component),m=a(95),d=a.n(m),f=function(e){var t=e.text,a=e.children;return o.a.createElement("div",{className:d.a.result},o.a.createElement(u,{language:t?"text":"php"},a))}}}]);