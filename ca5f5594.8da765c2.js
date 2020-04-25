(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),o=(n(0),n(204)),i=n(210),l={id:"match-group",title:"Inline groups"},c={id:"match-group",title:"Inline groups",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\match-group.mdx",permalink:"/docs/match-group",lastUpdatedAt:1587081550,sidebar:"docs",previous:{title:"Match offsets",permalink:"/docs/match-offsets"},next:{title:"Handling integers",permalink:"/docs/match-as-int"}},p=[{value:"Matched occurrences of a group",id:"matched-occurrences-of-a-group",children:[]},{value:"Optional groups",id:"optional-groups",children:[]},{value:"Missing or invalid groups",id:"missing-or-invalid-groups",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apart from retrieving matched capturing groups, you can also replace by an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"replace-by-group.md"}),"inline group"),"."),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"match()->group()")," behaves exactly like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(o.b)("inlineCode",{parentName:"a"},"Match.group(int|string)")),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"it can accept either group index (where #0 is the whole match) or a group name (when a group is named)"),Object(o.b)("li",{parentName:"ul"},"it throws ",Object(o.b)("inlineCode",{parentName:"li"},"\\InvalidArgumentException")," for an invalid index or an invalid group name (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},'"2group"')," or ",Object(o.b)("inlineCode",{parentName:"li"},"-2"),")"),Object(o.b)("li",{parentName:"ul"},"and throws ",Object(o.b)("inlineCode",{parentName:"li"},"NonexistentGroupException")," if ",Object(o.b)("inlineCode",{parentName:"li"},"group()")," is used with a non-existent group")),Object(o.b)("h2",{id:"matched-occurrences-of-a-group"},"Matched occurrences of a group"),Object(o.b)("p",null,"Similarly to how you can retrieve all matched occurrences of pattern from subject:"),Object(o.b)(i.a,{tregx:'pattern("(?<capital>[A-Z])[a-z]+")->match("Hello there, General Kenobi")->all();',php:'preg::match_all("/(?<capital>[A-Z])[a-z]+/", "Hello there, General Kenobi", $matches);\nreturn $matches[0];',mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"['Hello', 'General', 'Kenobi']"),Object(o.b)("p",null,"...you can retrieve all matched occurrences of a capturing group in a subject:"),Object(o.b)(i.a,{tregx:'pattern("(?<capital>[A-Z])[a-z]+")->match("Hello there, General Kenobi")->group(\'capital\')->all();',php:"// possible invalid group, e.g. \"2group\" or -2\nvalidateGroupName('capital');\n\npreg::match_all(\"/(?<capital>[A-Z])[a-z]+/\", \"Hello there, General Kenobi\", $matches);\nif (validateGroupExists('capital', $matches)) {\n    return $matches['capital'];\n} else {\n    throw new NonexistentGroupException('capital');\n}",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"['H', 'G', 'K']"),Object(o.b)("h2",{id:"optional-groups"},"Optional groups"),Object(o.b)("p",null,"Inline groups ",Object(o.b)("inlineCode",{parentName:"p"},"match()->group()->all()")," also handle optional capturing groups."),Object(o.b)("p",null,"In this example, we'll match words, with a pattern that specifies an optional capturing group named ",Object(o.b)("inlineCode",{parentName:"p"},"capital"),", which\nis supposed to match a capital letter. Not every word in the subject has a capital letter, so not every occurrence will\nhave group ",Object(o.b)("inlineCode",{parentName:"p"},"capital")," matched."),Object(o.b)(i.a,{tregx:'pattern("(?<capital>[A-Z])?[a-z]+")->match("Hello there, General kenobi")->group(\'capital\')->all();',php:"// possible invalid group, e.g. \"2group\" or -2\nvalidateGroupName('capital');\n\npreg::match_all(\"/(?<capital>[A-Z])?[a-z]+/\", \"Hello there, General kenobi\", $matches);\nif (validateGroupExists('capital', $matches)) {\n    return array_map(function ($match) {\n        if ($match === '') {\n            if (validateGroupMatched('capital', $match)) {\n                return '';  // group was indeed matched\n            }\n            return null;  // group was not matched, and false'ly represented as an empty string\n        }\n        return $match;\n    }, $matches['capital']);\n} else {\n    throw new NonexistentGroupException('capital');\n}",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"['H', null, 'G', null]"),Object(o.b)("h2",{id:"missing-or-invalid-groups"},"Missing or invalid groups"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"match()->group()")," is called with a group that wasn't used in pattern (for example ",Object(o.b)("inlineCode",{parentName:"p"},'"asd"')," or ",Object(o.b)("inlineCode",{parentName:"p"},"1200"),"), ",Object(o.b)("inlineCode",{parentName:"p"},"NonexistentGroupException")," is thrown.CodeTabs"),Object(o.b)("p",null,"If, however, an invalid group is used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"group name starting with a number (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},'"2asd"'),")"),Object(o.b)("li",{parentName:"ul"},"negative group index (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"-12"),")"),Object(o.b)("li",{parentName:"ul"},"group name containing invalid characters (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},'"!@#"'),")")),Object(o.b)("p",null,"... then ",Object(o.b)("inlineCode",{parentName:"p"},"\\InvalidArgumentException")," is thrown."))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?r.a.createElement(m,l({ref:t},p,{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(212);var i=function(){return Object(a.useContext)(o.a)},l=n(205),c=n.n(l),p=n(93),u=n.n(p);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:l,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=i(),[h,g]=Object(a.useState)(o);if(null!=p){const e=d[p];null!=e&&e!==h&&g(e)}const f=e=>{g(e),null!=p&&m(p,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:c()("tab-item",u.a.tabItem,{"tab-item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},208:function(e,t,n){"use strict";var a=n(209),r={};r[n(11)("toStringTag")]="z",r+""!="[object z]"&&n(19)(Object.prototype,"toString",(function(){return"[object "+a(this)+"]"}),!0)},209:function(e,t,n){var a=n(53),r=n(11)("toStringTag"),o="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),r))?n:o?a(t):"Object"==(i=a(t))&&"function"==typeof t.callee?"Arguments":i}},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));n(12),n(52),n(208);function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(5),o=n(0),i=n.n(o),l=n(207),c=n(206),p=n(213),u=n(94),s=n.n(u);class b extends i.a.Component{render(){return i.a.createElement("div",{className:s.a.code},i.a.createElement(p.a,{className:`language-${this.language}`},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var d=function(e){function t(){return e.apply(this,arguments)||this}var n,o,p;return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&i.a.createElement(c.a,{value:"t-regx"},i.a.createElement(b,null,this.props.tregx)),this.props.php&&i.a.createElement(c.a,{value:"php"},i.a.createElement(b,null,this.props.php))))},n=t,(o=[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}])&&a(n.prototype,o),p&&a(n,p),t}(i.a.Component),m=n(95),h=n.n(m),g=function(e){var t=e.text,n=e.children;return i.a.createElement("div",{className:h.a.result},i.a.createElement(b,{language:t?"text":"php"},n))}}}]);