/*! For license information please see 8eeef984.02b46ea4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),c=(a(0),a(196)),l=a(199),o=a(198),p={id:"match-group",title:"Inline groups"},i={id:"match-group",title:"Inline groups",description:"Apart from retrieving matched capturing groups, you can also replace by an [inline group](replace-by-group.md).",source:"@site/..\\docs\\match-group.md",permalink:"/docs/match-group",lastUpdatedAt:1574937126,sidebar:"docs",previous:{title:"Match offsets",permalink:"/docs/match-offsets"},next:{title:"Replacing a string",permalink:"/docs/replace"}},u=[{value:"Matched occurrences of a group",id:"matched-occurrences-of-a-group",children:[]},{value:"Optional groups",id:"optional-groups",children:[]}],b={rightToc:u};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Apart from retrieving matched capturing groups, you can also replace by an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-by-group"}),"inline group"),"."),Object(c.b)("p",null,"Method ",Object(c.b)("inlineCode",{parentName:"p"},"match()->group()")," behaves exactly like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match.group(int|string)")),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"it can accept either group index (where #0 is the whole match) or a group name (when a group is named)"),Object(c.b)("li",{parentName:"ul"},"it throws ",Object(c.b)("inlineCode",{parentName:"li"},"\\InvalidArgumentException"),' for an invalid index or an invalid group name (e.g. "2group" or -2)'),Object(c.b)("li",{parentName:"ul"},"and throws ",Object(c.b)("inlineCode",{parentName:"li"},"NonexistentGroupException")," if ",Object(c.b)("inlineCode",{parentName:"li"},"group()")," is used with a non-existent group")),Object(c.b)("h2",{id:"matched-occurrences-of-a-group"},"Matched occurrences of a group"),Object(c.b)("p",null,"Similarly to how you can retrieve all matched occurrences of pattern from subject:"),Object(c.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"T-Regx",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'pattern("(?<capital>[A-Z])[a-z]+")->match("Hello there, General Kenobi")->all();\n'))),Object(c.b)(o.a,{value:"PHP",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'preg::match_all("/(?<capital>[A-Z])[a-z]+/", "Hello there, General Kenobi", $matches);\nreturn $matches[0];\n')))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['Hello', 'General', 'Kenobi']\n")),Object(c.b)("p",null,"...you can retrieve all matched occurrences of a capturing group in a subject:"),Object(c.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"T-Regx",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'pattern("(?<capital>[A-Z])[a-z]+")->match("Hello there, General Kenobi")->group(\'capital\')->all();\n'))),Object(c.b)(o.a,{value:"PHP",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// possible invalid group, e.g. \"2group\" or -2\nvalidateGroupName('capital');\n\npreg::match_all(\"/(?<capital>[A-Z])[a-z]+/\", \"Hello there, General Kenobi\", $matches);\nif (validateGroupExists('capital', $matches)) {\n    return $matches['capital'];\n} else {\n    throw new NonexistentGroupException('capital');\n}\n")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['H', 'G', 'K']\n")),Object(c.b)("h2",{id:"optional-groups"},"Optional groups"),Object(c.b)("p",null,"What does ",Object(c.b)("inlineCode",{parentName:"p"},"match()->group()->all()")," for unmatched capturing group?"),Object(c.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"T-Regx",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'pattern("(?<capital>[A-Z])?[a-z]+")->match("Hello there, General Kenobi")->group(\'capital\')->all();\n'))),Object(c.b)(o.a,{value:"PHP",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// possible invalid group, e.g. \"2group\" or -2\nvalidateGroupName('capital');\n\npreg::match_all(\"/(?<capital>[A-Z])?[a-z]+/\", \"Hello there, General Kenobi\", $matches);\nif (validateGroupExists('capital', $matches)) {\n    return $matches['capital'];\n} else {\n    throw new NonexistentGroupException('capital');\n}\n")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['H', null, 'G', 'K']\n")),Object(c.b)("p",null,"You guess it :)"))}s.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(l,".").concat(m)]||b[m]||s[m]||c;return a?r.a.createElement(d,o({ref:t},i,{components:a})):r.a.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<c;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},197:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(200);var l=function(){return Object(n.useContext)(c.a)},o=a(197),p=a.n(o),i=a(93),u=a.n(i);const b=37,s=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:o,groupId:i}=e,{tabGroupChoices:m,setTabGroupChoices:d}=l(),[g,f]=Object(n.useState)(c);if(null!=i){const e=m[i];null!=e&&e!==g&&f(e)}const h=e=>{f(e),null!=i&&d(i,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:p()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:p()("tab-item",u.a.tabItem,{"tab-item--active":g===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===g)[0]))}},200:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r}}]);