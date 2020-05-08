(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),c=(a(0),a(204)),o=a(210),i={id:"match-offsets",title:"Match offsets"},s={id:"match-offsets",title:"Match offsets",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\match-offsets.mdx",permalink:"/docs/match-offsets",lastUpdatedAt:1586708537,sidebar:"docs",previous:{title:"Capturing groups",permalink:"/docs/match-groups"},next:{title:"Inline groups",permalink:"/docs/match-group"}},l=[{value:"Using Match details",id:"using-match-details",children:[]},{value:"Using inline <code>offsets()</code> method",id:"using-inline-offsets-method",children:[{value:"Many",id:"many",children:[]},{value:"One",id:"one",children:[]}]},{value:"Group offsets",id:"group-offsets",children:[{value:"Using Match details",id:"using-match-details-1",children:[]},{value:"Using inline <code>offsets()</code> method",id:"using-inline-offsets-method-1",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are several ways to read offsets of your matched occurrences and your capturing groups."),Object(c.b)("h2",{id:"using-match-details"},"Using ",Object(c.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details"),Object(c.b)("p",null,"If you use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details object (like the one passed to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-for-each"}),Object(c.b)("inlineCode",{parentName:"a"},"forEach()"))," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()"))," callback) you can just use\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"offset()"))," method."),Object(c.b)(o.a,{tregx:"pattern('\\d+')->match('I was born in 1996')->first(function (Match $match) {\n    return 'Match was found at ' . $match->offset();\n});",php:"preg::match_all('/\\d+/', 'I was born in 1996', $match, PREG_OFFSET_CAPTURE);\nreturn 'Match was found at ' . $match[0][0][1];",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"'Match was found at 14'"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Remember that ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"offset()"))," is UTF-8 safe and returns offsets in characters, not bytes.\nFor bytes, consider using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"byteOffset()"))," method.")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"offset()"))," with methods like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.mb-substr.php"}),Object(c.b)("inlineCode",{parentName:"a"},"mb_substr()")),", and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"byteOffset()"))," with methods like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.substr.php"}),Object(c.b)("inlineCode",{parentName:"a"},"substr()")),".")),Object(c.b)("h2",{id:"using-inline-offsets-method"},"Using inline ",Object(c.b)("inlineCode",{parentName:"h2"},"offsets()")," method"),Object(c.b)("p",null,"Use inline methods to simply return the offsets - when there is no need for using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details or any other operations."),Object(c.b)("h3",{id:"many"},"Many"),Object(c.b)("p",null,"If you only want to get offsets of your matches, use ",Object(c.b)("inlineCode",{parentName:"p"},"offsets()->all()"),"."),Object(c.b)(o.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old. I was born in 1999, May 12\")->offsets()->all();",php:"preg::match_all('/[0-9]+/', \"I'm 19 years old. I was born in 1999, May 12\", $matches, PREG_OFFSET_CAPTURE);\nreturn array_map(function (array $match) {\n    return $match[1];\n}, $matches[0]);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"[4, 32, 42]"),Object(c.b)("p",null,"You can also limit your matches."),Object(c.b)(o.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old. I was born in 1999, May 12\")->offsets()->only(2);",php:"preg::match_all('/[0-9]+/', \"I'm 19 years old. I was born in 1999, May 12\", $matches, PREG_OFFSET_CAPTURE);\nreturn array_slice(array_map(function (array $match) {\n    return $match[1];\n}, $matches[0]), 0, 2);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"[4, 32]"),Object(c.b)("h3",{id:"one"},"One"),Object(c.b)("p",null,"To only get offset of the first occurrence of a matched pattern, call ",Object(c.b)("inlineCode",{parentName:"p"},"offsets()->first()"),"."),Object(c.b)(o.a,{tregx:"pattern('\\d+')->match(\"I was born in 1999\")->offsets()->first();",php:"preg::match('/[0-9]+/', \"I was born in 1999\", $match, PREG_OFFSET_CAPTURE);\nif ($match) {\n    return $match[0][1];\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"14"),Object(c.b)("p",null,"As any other ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()"))," method, it throws ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the subject isn't matched by your pattern."),Object(c.b)("h2",{id:"group-offsets"},"Group offsets"),Object(c.b)("p",null,"In a similar manner you can get offsets of your capturing groups, either using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details or an inline method."),Object(c.b)("p",null,"These two snippets below are equal to each other."),Object(c.b)("h3",{id:"using-match-details-1"},"Using ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details"),Object(c.b)(o.a,{tregx:"pattern('(?<capital>[A-Z])[a-z]+')->match('my name is John Cena')->first(function (Match $match) {\n    return $match->group('capital')->offset();\n});",php:"if (preg::match('/(?<capital>[A-Z])[a-z]+/', 'my name is John Cena', $match, PREG_OFFSET_CAPTURE)) {\n\n    if (array_key_exists('capital', $match)) {\n        if ($match['capital'][1] === -1) {\n            throw new GroupNotMatchedException('capital');\n        }\n        return $match['capital'][1];\n    }\n\n    // preg_match() trims trailing empty elements, so additional checks are needed\n    // if there's no group key - the group is either un-matched or non-existent\n    if (validateGroupExists('capital', $match)) {\n        throw new GroupNotMatchedException('capital');\n    } else {\n        throw new NonexistentGroupException('capital');\n    }\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"11"),Object(c.b)("p",null,"Can also be written as..."),Object(c.b)("h3",{id:"using-inline-offsets-method-1"},"Using inline ",Object(c.b)("inlineCode",{parentName:"h3"},"offsets()")," method"),Object(c.b)(o.a,{tregx:"pattern('(?<capital>[A-Z])[a-z]+')->match('my name is John Cena')->group('capital')->offsets()->first();",php:"if (preg::match('/(?<capital>[A-Z])[a-z]+/', 'my name is John Cena', $match, PREG_OFFSET_CAPTURE)) {\n\n    if (array_key_exists('capital', $match)) {\n        if ($match['capital'][1] === -1) {\n            throw new GroupNotMatchedException('capital');\n        }\n        return $match['capital'][1];\n    }\n\n    // preg_match() trims trailing empty elements, so additional checks are needed\n    // if there's no group key - the group is either un-matched or non-existent\n    if (validateGroupExists('capital', $match)) {\n        throw new GroupNotMatchedException('capital');\n    } else {\n        throw new NonexistentGroupException('capital');\n    }\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"11"),Object(c.b)("p",null,"Both ",Object(c.b)("inlineCode",{parentName:"p"},"offsets()->first()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"group()->offsets()->first()")," throw ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the subject isn't\nmatched by your pattern."),Object(c.b)("p",null,"Also, both ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups#group-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match.group()"))," details and inline ",Object(c.b)("inlineCode",{parentName:"p"},"match()->group()->offsets()")," throw ",Object(c.b)("inlineCode",{parentName:"p"},"GroupNotMatchedException"),", when used with an unmatched group."))}u.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(o,".").concat(h)]||u[h]||b[h]||c;return a?r.a.createElement(m,i({ref:t},l,{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(212);var o=function(){return Object(n.useContext)(c.a)},i=a(205),s=a.n(i),l=a(93),p=a.n(l);const u=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:i,groupId:l}=e,{tabGroupChoices:h,setTabGroupChoices:m}=o(),[f,d]=Object(n.useState)(c);if(null!=l){const e=h[l];null!=e&&e!==f&&d(e)}const O=e=>{d(e),null!=l&&m(l,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:s()("tab-item",p.a.tabItem,{"tab-item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===f)[0]))}},208:function(e,t,a){"use strict";var n=a(209),r={};r[a(11)("toStringTag")]="z",r+""!="[object z]"&&a(19)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},209:function(e,t,a){var n=a(53),r=a(11)("toStringTag"),c="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:c?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));a(12),a(52),a(208);function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=a(5),c=a(0),o=a.n(c),i=a(207),s=a(206),l=a(213),p=a(94),u=a.n(p);class b extends o.a.Component{render(){return o.a.createElement("div",{className:u.a.code},o.a.createElement(l.a,{className:`language-${this.language}`},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var h=function(e){function t(){return e.apply(this,arguments)||this}var a,c,l;return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&o.a.createElement(s.a,{value:"t-regx"},o.a.createElement(b,null,this.props.tregx)),this.props.php&&o.a.createElement(s.a,{value:"php"},o.a.createElement(b,null,this.props.php))))},a=t,(c=[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}])&&n(a.prototype,c),l&&n(a,l),t}(o.a.Component),m=a(95),f=a.n(m),d=function(e){var t=e.text,a=e.children;return o.a.createElement("div",{className:f.a.result},o.a.createElement(b,{language:t?"text":"php"},a))}}}]);