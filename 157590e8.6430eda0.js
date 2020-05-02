(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(1),r=(a(0),a(204)),i=a(208);const l={id:"overview",title:"What's T-Regx?"},c={id:"overview",title:"What's T-Regx?",description:"T-Regx (_T-Rex and RegExp_) is a lightweight, high-level Regular Expressions library.",source:"@site/../docs/overview.mdx",permalink:"/docs/overview",lastUpdatedAt:1586375884,sidebar:"docs",next:{title:"What's the point?",permalink:"/docs/whats-the-point"}},o=[{value:"Why is explicit interface so important?",id:"why-is-explicit-interface-so-important",children:[{value:"What&#39;s bad",id:"whats-bad",children:[]},{value:"What&#39;s good",id:"whats-good",children:[]}]},{value:"Brain Strain",id:"brain-strain",children:[]}],s={rightToc:o};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"T-Regx (",Object(r.b)("em",{parentName:"p"},"T-Rex and RegExp"),") is a lightweight, high-level Regular Expressions library."),Object(r.b)("p",null,"Its main features are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Being ",Object(r.b)("strong",{parentName:"p"},"made for developers"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/delimiters"}),"Automatic delimiters")," for your patterns"),Object(r.b)("li",{parentName:"ul"},"Each and every unexpected situation ends in an exception"),Object(r.b)("li",{parentName:"ul"},"UTF-8 support out of the box"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/prepared-patterns"}),"Prepared Patterns")," handling unsafe characters (e.g. user-input)"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Cleaning the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/whats-the-point"}),"mess after PHP regular expressions API"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"All false positives and false negatives are eliminated"),Object(r.b)("li",{parentName:"ul"},"Special values like ",Object(r.b)("inlineCode",{parentName:"li"},"null"),", ",Object(r.b)("inlineCode",{parentName:"li"},"false"),", ",Object(r.b)("inlineCode",{parentName:"li"},"''")," aren't used to indicate errors."),Object(r.b)("li",{parentName:"ul"},"Unifying differences between matching, replacing, splitting - all operations"),Object(r.b)("li",{parentName:"ul"},"Results aren't a dull ",Object(r.b)("inlineCode",{parentName:"li"},"string[][]")," array, but a dedicated ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details."),Object(r.b)("li",{parentName:"ul"},"Based on exceptions - Handles every warning, error, fatal error or notice."),Object(r.b)("li",{parentName:"ul"},"Relieving developers from ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#brain-strain"}),Object(r.b)("strong",{parentName:"a"},"brain strain")),":"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Being explicit and descriptive - (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#why-is-explicit-interface-so-important"}),"why is explicit interface so important?"),"):"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Each function obeys SRP"),Object(r.b)("li",{parentName:"ul"},"Functionalities are represented with methods (and not flags or default arguments)"),Object(r.b)("li",{parentName:"ul"},"No default parameters"),Object(r.b)("li",{parentName:"ul"},"No flags"),Object(r.b)("li",{parentName:"ul"},"No var-args")))),Object(r.b)("h2",{id:"why-is-explicit-interface-so-important"},"Why is explicit interface so important?"),Object(r.b)("p",null,"T-Regx' aim is to relieve programmers from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#brain-strain"}),Object(r.b)("strong",{parentName:"a"},"brain strain"))," while reading and writing code.\nOur mission is to make developers write/read a line and ",Object(r.b)("strong",{parentName:"p"},"immediately")," go on, without thinking about what it does or\nwhat side effects it may cause."),Object(r.b)("h3",{id:"whats-bad"},"What's bad"),Object(r.b)("p",null,"While reading this code..."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"preg_match($pattern, $subject, $match);\n")),Object(r.b)("p",null,"...developers must stop for a moment and think:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Will this match the first occurrence? Or all of them?"),Object(r.b)("li",{parentName:"ul"},"Will the ",Object(r.b)("inlineCode",{parentName:"li"},"$subject")," match the pattern ",Object(r.b)("inlineCode",{parentName:"li"},"$pattern"),"?"),Object(r.b)("li",{parentName:"ul"},"Will this trigger a warning, if I mess up my regexp?"),Object(r.b)("li",{parentName:"ul"},"Will this return ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"/",Object(r.b)("inlineCode",{parentName:"li"},"false")," or raise a warning, on error?"),Object(r.b)("li",{parentName:"ul"},"Will this return ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"/",Object(r.b)("inlineCode",{parentName:"li"},"''"),", if the ",Object(r.b)("inlineCode",{parentName:"li"},"$subject")," doesn't match?"),Object(r.b)("li",{parentName:"ul"},"Is ",Object(r.b)("inlineCode",{parentName:"li"},"$match")," a ",Object(r.b)("inlineCode",{parentName:"li"},"string[]")," or a ",Object(r.b)("inlineCode",{parentName:"li"},"string[][]"),"?"),Object(r.b)("li",{parentName:"ul"},"Will this return ",Object(r.b)("strong",{parentName:"li"},"my value"),"? Or ",Object(r.b)("strong",{parentName:"li"},"my value")," nested in arrays?")),Object(r.b)("p",null,"What should be obvious, is now complicated and causes ",Object(r.b)("strong",{parentName:"p"},"many")," questions and assumptions for the reader."),Object(r.b)("h3",{id:"whats-good"},"What's good"),Object(r.b)("p",null,"While using T-Regx, some things are ",Object(r.b)("strong",{parentName:"p"},"obvious"),". For example:"),Object(r.b)(i.a,{tregx:"$result = pattern($pattern)->match($subject)->first();",php:'if (preg::match("/$pattern/", $subject, $match) === 1) {\n    $result = $match[0];\n} else {\n    throw new SubjectNotMatchedException();\n}',mdxType:"CodeTabs"}),Object(r.b)("p",null,"Here, ",Object(r.b)("inlineCode",{parentName:"p"},"$result")," ",Object(r.b)("strong",{parentName:"p"},"must")," contain the first occurrence. It must contain ",Object(r.b)("em",{parentName:"p"},"your value"),"."),Object(r.b)("p",null,"It will ",Object(r.b)("strong",{parentName:"p"},"never")," contain ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", ",Object(r.b)("inlineCode",{parentName:"p"},"false")," or an empty array. ",Object(r.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," would be thrown, if ",Object(r.b)("inlineCode",{parentName:"p"},"$pattern"),"\nis malformed. It would also throw ",Object(r.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the ",Object(r.b)("inlineCode",{parentName:"p"},"$pattern")," doesn't match the ",Object(r.b)("inlineCode",{parentName:"p"},"$subject"),".\nEven if ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," does return ",Object(r.b)("inlineCode",{parentName:"p"},"''"),', it\'s only because it supposed to do that; that is "when a pattern matched\na string of length 0".'),Object(r.b)("p",null,"It also never raises any warnings or fatal errors."),Object(r.b)("h2",{id:"brain-strain"},"Brain Strain"))}p.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,c({ref:t},s,{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(210);var l=function(){return Object(n.useContext)(i.a)},c=a(205),o=a.n(c),s=a(93),p=a.n(s);const b=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:i,values:c,groupId:s}=e,{tabGroupChoices:m,setTabGroupChoices:d}=l(),[h,O]=Object(n.useState)(i);if(null!=s){const e=m[s];null!=e&&e!==h&&O(e)}const j=e=>{O(e),null!=s&&d(s,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:o()("tab-item",p.a.tabItem,{"tab-item--active":h===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));a(12);var n=a(0),r=a.n(n),i=a(207),l=a(206),c=a(211),o=a(94),s=a.n(o);class p extends r.a.Component{render(){return r.a.createElement("div",{className:s.a.code},r.a.createElement(c.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}class b extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&r.a.createElement(l.a,{value:"t-regx"},r.a.createElement(p,null,this.props.tregx)),this.props.php&&r.a.createElement(l.a,{value:"php"},r.a.createElement(p,null,this.props.php))))}get values(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter(e=>e.value)}}var u=a(95),m=a.n(u),d=({text:e,children:t})=>r.a.createElement("div",{className:m.a.result},r.a.createElement(p,{language:e?"text":"php"},t))}}]);