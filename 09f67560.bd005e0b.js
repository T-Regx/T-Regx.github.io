(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(1),c=a(6),l=(a(0),a(204)),r={id:"replace-match-details",title:"Advanced replace details"},b={id:"replace-match-details",title:"Advanced replace details",description:"## Introduction",source:"@site/..\\docs\\replace-match-details.md",permalink:"/docs/replace-match-details",lastUpdatedAt:1572482412,sidebar:"docs",previous:{title:"Iterator",permalink:"/docs/match-iterator"},next:{title:"Prepared Patterns in details",permalink:"/docs/prepared-patterns-in-details"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Examples",id:"examples",children:[{value:"<code>modifiedSubject()</code> example",id:"modifiedsubject-example",children:[]},{value:"<code>modifiedOffset()</code> example",id:"modifiedoffset-example",children:[]}]},{value:"Performance",id:"performance",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"When using ",Object(l.b)("inlineCode",{parentName:"p"},"pattern()->match()")," all ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"match-for-each.md"}),"callbacks")," receive one parameter when called -\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Match")),". You can learn more about it on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(l.b)("p",null,"The callback's signature can accept either ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Match"))," details or ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"function (Match $match) {}")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"function (string $match) {}"))),Object(l.b)("p",null,"However, when using ",Object(l.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," the callback receives ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," details object. It extends ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Match"))," object,\nso they have exactly alike interfaces."),Object(l.b)("p",null,"Additionally, ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," has two separate methods:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedOffset(): int")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedSubject(): string"))),Object(l.b)("p",null,"They work similarly to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"match-offsets.md"}),Object(l.b)("inlineCode",{parentName:"a"},"offset()"))," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#subject"}),Object(l.b)("inlineCode",{parentName:"a"},"subject()"))," methods, but they\ntake into account ",Object(l.b)("strong",{parentName:"p"},"results of previous callbacks"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"modifiedOffset()")," returns occurrence's offset, but according to a newly replaced subject."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"modifiedSubject()")," returns current state of a newly replaced subject.")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("h3",{id:"modifiedsubject-example"},Object(l.b)("inlineCode",{parentName:"h3"},"modifiedSubject()")," example"),Object(l.b)("p",null,"Given a pattern that matches capitalized words:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$subject = 'Me, Rihanna and my Mom really like Sweden';\n\n$result = pattern(\"[A-Z][a-z]+\")->replace($subject)->all()->callback(function () {\n    return '____';\n});\n")),Object(l.b)("p",null,"having iterated the subject looking for ",Object(l.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+")," - for each ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"match-offsets.md"}),Object(l.b)("inlineCode",{parentName:"a"},"Match"))," the result of\n",Object(l.b)("inlineCode",{parentName:"p"},"Match.subject()")," method would always be the same. There are 4 occurrences matched by the pattern, so callback is\ninvoked 4 times."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(l.b)("p",null,"Results of ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch.subject()")," would be identical."),Object(l.b)("hr",null),Object(l.b)("p",null,"However, results of ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedSubject()")," would also contain results of ",Object(l.b)("strong",{parentName:"p"},"previous replacements"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n")),Object(l.b)("p",null,"And the ",Object(l.b)("inlineCode",{parentName:"p"},"$result")," would be equal to"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like ____\n")),Object(l.b)("h3",{id:"modifiedoffset-example"},Object(l.b)("inlineCode",{parentName:"h3"},"modifiedOffset()")," example"),Object(l.b)("p",null,"Have you iterated the subject looking for ",Object(l.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+"),", these would be the results of ",Object(l.b)("inlineCode",{parentName:"p"},"Match.offset()")," method."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\noffset() // 0\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n    \u2191\n    offset() // 4\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                   \u2191\n                   offset() // 19\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                                   \u2191\n                                   offset() // 35\n")),Object(l.b)("p",null,"Results of ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," would be identical."),Object(l.b)("hr",null),Object(l.b)("p",null,"But, if instead of ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," you use ",Object(l.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedOffset()"),", these are the results:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\nmodifiedOffset()  // 0\noffset()          // 0\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n      \u2191\n      modifiedOffset() // 6\n    \u2191\n    offset()           // 4\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n                  \u2191\n                  modifiedOffset()  // 18\n                   \u2191\n                   offset()         // 19\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n                                   \u2191\n                                   modifiedOffset()  // 35\n                                   offset()          // 35\n")),Object(l.b)("h2",{id:"performance"},"Performance"),Object(l.b)("p",null,"But be sure, each of those examples only uses one call to ",Object(l.b)("inlineCode",{parentName:"p"},"preg_replace_callback()"),". :)"))}p.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},d=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(r,".").concat(s)]||d[s]||m[s]||l;return a?c.a.createElement(u,b({ref:t},o,{components:a})):c.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var o=2;o<l;o++)r[o]=a[o];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);