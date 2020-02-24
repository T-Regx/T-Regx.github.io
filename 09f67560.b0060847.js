(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return i}));n(58),n(31),n(22),n(23),n(59),n(0);var a=n(263);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={id:"replace-match-details",title:"Advanced replace details"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Examples",id:"examples",children:[{value:"<code>modifiedSubject()</code> example",id:"modifiedsubject-example",children:[]},{value:"<code>modifiedOffset()</code> example",id:"modifiedoffset-example",children:[]}]},{value:"Performance",id:"performance",children:[]}],o={rightToc:c};function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)("wrapper",l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"When using ",Object(a.b)("inlineCode",{parentName:"p"},"pattern()->match()")," all ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-for-each"}),"callbacks")," receive one parameter when called -\n",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match")),". You can learn more about it on ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(a.b)("p",null,"The callback's signature can accept either ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," details or ",Object(a.b)("inlineCode",{parentName:"p"},"string"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"function (Match $match) {}")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"function (string $match) {}"))),Object(a.b)("p",null,"However, when using ",Object(a.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," the callback receives ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," details object. It extends ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-details"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," object,\nso they have exactly alike interfaces."),Object(a.b)("p",null,"Additionally, ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," has two separate methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedOffset(): int")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedSubject(): string"))),Object(a.b)("p",null,"They work similarly to ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-offsets"}),Object(a.b)("inlineCode",{parentName:"a"},"offset()"))," and ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-details#subject"}),Object(a.b)("inlineCode",{parentName:"a"},"subject()"))," methods, but they\ntake into account ",Object(a.b)("strong",{parentName:"p"},"results of previous callbacks"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"modifiedOffset()")," returns occurrence's offset, but according to a newly replaced subject."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"modifiedSubject()")," returns current state of a newly replaced subject.")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"modifiedsubject-example"},Object(a.b)("inlineCode",{parentName:"h3"},"modifiedSubject()")," example"),Object(a.b)("p",null,"Given a pattern that matches capitalized words:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-php"}),"$subject = 'Me, Rihanna and my Mom really like Sweden';\n\n$result = pattern(\"[A-Z][a-z]+\")->replace($subject)->all()->callback(function () {\n    return '____';\n});\n")),Object(a.b)("p",null,"having iterated the subject looking for ",Object(a.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+")," - for each ",Object(a.b)("a",l({parentName:"p"},{href:"/docs/match-offsets"}),Object(a.b)("inlineCode",{parentName:"a"},"Match"))," the result of\n",Object(a.b)("inlineCode",{parentName:"p"},"Match.subject()")," method would always be the same. There are 4 occurrences matched by the pattern, so callback is\ninvoked 4 times."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(a.b)("p",null,"Results of ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch.subject()")," would be identical."),Object(a.b)("hr",null),Object(a.b)("p",null,"However, results of ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedSubject()")," would also contain results of ",Object(a.b)("strong",{parentName:"p"},"previous replacements"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n")),Object(a.b)("p",null,"And the ",Object(a.b)("inlineCode",{parentName:"p"},"$result")," would be equal to"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like ____\n")),Object(a.b)("h3",{id:"modifiedoffset-example"},Object(a.b)("inlineCode",{parentName:"h3"},"modifiedOffset()")," example"),Object(a.b)("p",null,"Have you iterated the subject looking for ",Object(a.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+"),", these would be the results of ",Object(a.b)("inlineCode",{parentName:"p"},"Match.offset()")," method."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\noffset() // 0\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n    \u2191\n    offset() // 4\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                   \u2191\n                   offset() // 19\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                                   \u2191\n                                   offset() // 35\n")),Object(a.b)("p",null,"Results of ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," would be identical."),Object(a.b)("hr",null),Object(a.b)("p",null,"But, if instead of ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," you use ",Object(a.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedOffset()"),", these are the results:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\nmodifiedOffset()  // 0\noffset()          // 0\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n      \u2191\n      modifiedOffset() // 6\n    \u2191\n    offset()           // 4\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n                  \u2191\n                  modifiedOffset()  // 18\n                   \u2191\n                   offset()         // 19\n")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n                                   \u2191\n                                   modifiedOffset()  // 35\n                                   offset()          // 35\n")),Object(a.b)("h2",{id:"performance"},"Performance"),Object(a.b)("p",null,"But be sure, each of those examples only uses one call to ",Object(a.b)("inlineCode",{parentName:"p"},"preg_replace_callback()"),". :)"))}i.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,s=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?l.a.createElement(s,o({ref:t},b,{components:n})):l.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<r;b++)c[b]=n[b];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);