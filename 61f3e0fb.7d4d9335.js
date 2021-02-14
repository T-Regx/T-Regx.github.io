(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(188)),o={title:"Release 0.9.7 - Match as vanilla array!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2020/04/08/release-0.9.7",source:"@site/blog/2020-04-08-release-0.9.7.md",description:"There was a lot of changes in the code, so I reckon we could release twice in the same week, because why not :)",date:"2020-04-08T00:00:00.000Z",tags:[],title:"Release 0.9.7 - Match as vanilla array!",readingTime:1.755,truncated:!1,prevItem:{title:"Release 0.9.8 - foreach baby, foreach!",permalink:"/blog/2020/04/13/release-0.9.8"},nextItem:{title:"Release 0.9.6 - First/all changes!",permalink:"/blog/2020/04/02/release-0.9.6"}},l=[{value:"The concept",id:"the-concept",children:[]},{value:"The idea",id:"the-idea",children:[]},{value:"The solution",id:"the-solution",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There was a lot of changes in the code, so I reckon we could release twice in the same week, because why not :)"),Object(i.b)("p",null,"So what are the changes?"),Object(i.b)("p",null,"Bare with me."),Object(i.b)("h3",{id:"the-concept"},"The concept"),Object(i.b)("p",null,"Capturing groups in T-Regx have a really rich API (probably the richest out there), with a lot of variables.\nMost importantly T-Regx handles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Invalid groups")," (e.g. negative index ",Object(i.b)("inlineCode",{parentName:"li"},"-1")," or malformed group ",Object(i.b)("inlineCode",{parentName:"li"},"!@#$"),"), which always throw exception"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Missing groups")," (e.g. group ",Object(i.b)("inlineCode",{parentName:"li"},"4")," used in pattern, that only has 2 groups; same for named) which conditionally throws exceptions"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Optional groups")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"(origin/)?master"),"), which is really tricky to distinguish with PCRE"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Matched groups")," (which can be tricky, if the matched group is an empty string ",Object(i.b)("inlineCode",{parentName:"li"},'""'),")")),Object(i.b)("p",null,"Because of that, syntax of groups is not the shortest:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pattern('(origin/)?master')->match('master')->first(function (Match $match) {\n    $match->group(1)->text(); // for example\n});\n")),Object(i.b)("p",null,"But we know that T-Regx users mostly care about the last group, ",Object(i.b)("strong",{parentName:"p"},"Matched groups"),", so they would like to use them\nwith as simple syntax as possible. That makes sense."),Object(i.b)("h3",{id:"the-idea"},"The idea"),Object(i.b)("p",null,"At first, there was an idea of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match"}),Object(i.b)("inlineCode",{parentName:"a"},"Match"))," details implementing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.arrayaccess.php"}),Object(i.b)("inlineCode",{parentName:"a"},"\\ArrayAccess")),", so this syntax would be possible:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pattern('(origin/)?master')->match('master')->first(function (Match $match) {\n    $match[1]; // same as above\n});\n")),Object(i.b)("p",null,"Well, that syntax does look good, at first, but it comes at a price. A high price."),Object(i.b)("p",null,"Why we ditched the ",Object(i.b)("inlineCode",{parentName:"p"},"\\ArrayAccess")," idea:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unnecessary ",Object(i.b)("inlineCode",{parentName:"li"},"set")," and ",Object(i.b)("inlineCode",{parentName:"li"},"unset")," methods"),Object(i.b)("li",{parentName:"ul"},"Methods that work for arrays (",Object(i.b)("inlineCode",{parentName:"li"},"array_key_exist()"),") won't work with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/class.arrayaccess.php"}),Object(i.b)("inlineCode",{parentName:"a"},"\\ArrayAccess"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"empty($match[1])")," returns ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", even if the group ",Object(i.b)("inlineCode",{parentName:"li"},"1")," was matched (",Object(i.b)("inlineCode",{parentName:"li"},'""')," and ",Object(i.b)("inlineCode",{parentName:"li"},'"0"')," ",Object(i.b)("strong",{parentName:"li"},"yes")," is falsy)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isset($match[-2])")," couldn't throw an exception for a malformed group"),Object(i.b)("li",{parentName:"ul"},"There's a bug in PHP, that causes ",Object(i.b)("inlineCode",{parentName:"li"},"$match['100']")," to be treated as ",Object(i.b)("inlineCode",{parentName:"li"},"$match[100]")," (cast to ",Object(i.b)("inlineCode",{parentName:"li"},"int")," any numeric value).")),Object(i.b)("h3",{id:"the-solution"},"The solution"),Object(i.b)("p",null,"So, instead, we got an idea: What if ",Object(i.b)("inlineCode",{parentName:"p"},"$match")," was a real PHP ",Object(i.b)("inlineCode",{parentName:"p"},"array"),". Every method or notation that works\nfor arrays, will also work."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pattern('(origin/)?master')->match('master')->asArray()->first(function (array $match) {\n    $match[1]; // same as above\n});\n")),Object(i.b)("p",null,"The structure of the array is perfectly identical to what ",Object(i.b)("inlineCode",{parentName:"p"},"preg_match()")," would return :)"))}b.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);