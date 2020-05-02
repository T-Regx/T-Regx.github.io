(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(1),r=(n(0),n(204)),l=n(208);const c={id:"replace",title:"Replacing a string"},i={id:"replace",title:"Replacing a string",description:"Using `pattern()->replace()` you can:",source:"@site/../docs/replace.mdx",permalink:"/docs/replace",lastUpdatedAt:1586708531,sidebar:"docs",previous:{title:"Handling integers",permalink:"/docs/match-as-int"},next:{title:"Replace with a constant value",permalink:"/docs/replace-with"}},o=[{value:"Limiting replacements",id:"limiting-replacements",children:[]}],p={rightToc:o};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Limit replacements with:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"replace()->first()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"replace()->all()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"replace()->only(int)")))),Object(r.b)("li",{parentName:"ul"},"replace with a constant value - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"replace-with.md"}),Object(r.b)("inlineCode",{parentName:"a"},"with()")),"/",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"replace-with.md"}),Object(r.b)("inlineCode",{parentName:"a"},"withReferences()"))),Object(r.b)("li",{parentName:"ul"},"replace with a computed value - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"replace-callback.md"}),Object(r.b)("inlineCode",{parentName:"a"},"callback()"))),Object(r.b)("li",{parentName:"ul"},"replace based on an associative array - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"replace-by-map.md"}),Object(r.b)("inlineCode",{parentName:"a"},"by()->map()"))),Object(r.b)("li",{parentName:"ul"},"replace with a capturing group - ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"replace-by-group.md"}),Object(r.b)("inlineCode",{parentName:"a"},"by()->group()"))),Object(r.b)("li",{parentName:"ul"},"handle subjects that don't match the pattern for replacements - ",Object(r.b)("inlineCode",{parentName:"li"},"otherwise()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"throwingOtherwise()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"returningOtherwise()"))),Object(r.b)("h2",{id:"limiting-replacements"},"Limiting replacements"),Object(r.b)("p",null,"After ",Object(r.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(r.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(r.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(r.b)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),Object(r.b)(l.a,{tregx:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npattern("\\d+")->replace($subject)->first()->with("___");\npattern("\\d+")->replace($subject)->only(2)->with("___");\npattern("\\d+")->replace($subject)->all()->with("___");',php:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npreg_replace("/\\d+/", "___", $subject, 1);\npreg_replace("/\\d+/", "___", $subject, 2);\npreg_replace("/\\d+/", "___", $subject);',mdxType:"CodeTabs"}),Object(r.b)(l.b,{mdxType:"Result"},'"I\'m ___, I have 192cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in ___"'),Object(r.b)("hr",null),Object(r.b)("p",null,"Read on to learn more about replacing with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"replace-with.md"}),"a constant value"),"."))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||l;return n?r.a.createElement(d,i({ref:t},p,{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(210);var c=function(){return Object(a.useContext)(l.a)},i=n(205),o=n.n(i),p=n(93),s=n.n(p);const u=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:i,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=c(),[f,h]=Object(a.useState)(l);if(null!=p){const e=m[p];null!=e&&e!==f&&h(e)}const O=e=>{h(e),null!=p&&d(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:o()("tab-item",s.a.tabItem,{"tab-item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));n(12);var a=n(0),r=n.n(a),l=n(207),c=n(206),i=n(211),o=n(94),p=n.n(o);class s extends r.a.Component{render(){return r.a.createElement("div",{className:p.a.code},r.a.createElement(i.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}class u extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&r.a.createElement(c.a,{value:"t-regx"},r.a.createElement(s,null,this.props.tregx)),this.props.php&&r.a.createElement(c.a,{value:"php"},r.a.createElement(s,null,this.props.php))))}get values(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter(e=>e.value)}}var b=n(95),m=n.n(b),d=({text:e,children:t})=>r.a.createElement("div",{className:m.a.result},r.a.createElement(s,{language:e?"text":"php"},t))}}]);