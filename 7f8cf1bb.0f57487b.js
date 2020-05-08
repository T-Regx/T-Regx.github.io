(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),i=(a(0),a(204)),l={id:"prepared-patterns-in-details",title:"Prepared Patterns in details"},c={id:"prepared-patterns-in-details",title:"Prepared Patterns in details",description:"## Details about `Pattern::prepare()`\r",source:"@site/..\\docs\\prepared-patterns-in-details.md",permalink:"/docs/prepared-patterns-in-details",lastUpdatedAt:1582037579,sidebar:"docs",previous:{title:"Advanced replace details",permalink:"/docs/replace-match-details"}},b=[{value:"Details about <code>Pattern::prepare()</code>",id:"details-about-patternprepare",children:[{value:"Additional information",id:"additional-information",children:[]}]},{value:"Details about <code>Pattern::inject()</code>",id:"details-about-patterninject",children:[{value:"Ignored placeholders",id:"ignored-placeholders",children:[]},{value:"Additional information",id:"additional-information-1",children:[]}]},{value:"Building process",id:"building-process",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"details-about-patternprepare"},"Details about ",Object(i.b)("inlineCode",{parentName:"h2"},"Pattern::prepare()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," accepts your pattern as an array. Said array can contain either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string")," - which means it will be interpreted as a regular expression"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"array")," - it's enclosed values will be treated as string literals.")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']);\n")),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},'"(My|Our)"')," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"' '")," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},'"(dog|cat)\'s name is "')," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat value of ",Object(i.b)("inlineCode",{parentName:"li"},"$dog")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"' and '")," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat value of ",Object(i.b)("inlineCode",{parentName:"li"},"$cat")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"'!'")," as a regular expression")),Object(i.b)("p",null,"You can also group elements inside the inner array and also split regular expressions at will:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our) (dog|cat)'s name is \", [$dog, ' and ', $cat], '!']);\n")),Object(i.b)("p",null,"Both code snippets are equal (but now ",Object(i.b)("inlineCode",{parentName:"p"},"' and '")," is also a string literal)."),Object(i.b)("h3",{id:"additional-information"},"Additional information"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Array structure:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Keys in the arrays (both outer and inner arrays) don't matter, as far as T-Regx is concerned"),Object(i.b)("li",{parentName:"ul"},"The only important factors are:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"string values"),Object(i.b)("li",{parentName:"ul"},"order of the values inside the array"))))),Object(i.b)("li",{parentName:"ul"},"Data types:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The outer array can only consist of ",Object(i.b)("inlineCode",{parentName:"li"},"string")," or an inner array"),Object(i.b)("li",{parentName:"ul"},"The inner array can only consist of ",Object(i.b)("inlineCode",{parentName:"li"},"string")),Object(i.b)("li",{parentName:"ul"},"Any other values cause ",Object(i.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")))),Object(i.b)("li",{parentName:"ul"},"Values inside the inner array:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"don't contribute")," to the pattern being automatically delimited. Otherwise, user-input data could influence the pattern being invalid or not"),Object(i.b)("li",{parentName:"ul"},"are always quoted (using ",Object(i.b)("inlineCode",{parentName:"li"},"preg::quote()"),") with regard to the delimiter chosen by ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters"))))),Object(i.b)("h2",{id:"details-about-patterninject"},"Details about ",Object(i.b)("inlineCode",{parentName:"h2"},"Pattern::inject()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()")," replaces a ",Object(i.b)("strong",{parentName:"p"},"placeholder")," in the pattern with values treated as string literals."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is @dog and @cat!\", [\n    'dog' => $dog,\n    'cat' => $cat\n]);\n")),Object(i.b)("p",null,"The said code snippet with ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()")," is exactly the same as the one with ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," above."),Object(i.b)("p",null,"Apart from ",Object(i.b)("inlineCode",{parentName:"p"},"@name")," placeholder format, you can also use ",Object(i.b)("code",null,"`","name","`")," format. So, again, the code snippet below\nworks exactly the same as the two snippets above."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is `dog` and `cat`!\", [\n    'dog' => $dog,\n    'cat' => $cat\n]);\n")),Object(i.b)("h3",{id:"ignored-placeholders"},"Ignored placeholders"),Object(i.b)("p",null,"If you'd like to use a placeholder format inside your ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()"),", but ",Object(i.b)("strong",{parentName:"p"},"not")," replace it with a quoted value,\nyou can ignore it."),Object(i.b)("p",null,"Ignoring a placeholder is done by passing it's name without a replacement:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is @dog and @cat!\", [\n    'dog' => $dog,\n    'cat'               // @cat will not be replaced\n]);\n")),Object(i.b)("p",null,"You can, of course, pass a name and it's corresponding value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is `dog` and `cat`!\", [\n    'dog' => $dog,\n    'cat' => '`cat`'    // `cat` will be replaced with `cat`\n]);\n")),Object(i.b)("p",null,"but you need to specify which placeholder format was used: ",Object(i.b)("code",null,"`","cat","`")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@cat"),"."),Object(i.b)("h3",{id:"additional-information-1"},"Additional information"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$input = 'Regular expression @name';\n$values = [\n    'name' => 'value'\n];\nPattern::inject($input, $values);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Value of ",Object(i.b)("inlineCode",{parentName:"li"},"$input")," is treated as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Values in ",Object(i.b)("inlineCode",{parentName:"li"},"$values")," are treated as a string literal"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data structure"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Each placeholder (",Object(i.b)("inlineCode",{parentName:"li"},"@name")," or ",Object(i.b)("code",null,"`","name","`"),") ",Object(i.b)("strong",{parentName:"li"},"must")," have a counterpart in ",Object(i.b)("inlineCode",{parentName:"li"},"$values"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a key"),Object(i.b)("li",{parentName:"ul"},"a value, if it's ignored"))),Object(i.b)("li",{parentName:"ul"},"Each key or ignored value in ",Object(i.b)("inlineCode",{parentName:"li"},"$values")," ",Object(i.b)("strong",{parentName:"li"},"must")," have a corresponding placeholder in ",Object(i.b)("inlineCode",{parentName:"li"},"$input")),Object(i.b)("li",{parentName:"ul"},"Placeholder/name/key can only consist of alphanumeric values and an underscore (",Object(i.b)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]"),")"),Object(i.b)("li",{parentName:"ul"},"If not, ",Object(i.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")," is thrown"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data types:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Values in ",Object(i.b)("inlineCode",{parentName:"li"},"$values")," can only be of type ",Object(i.b)("inlineCode",{parentName:"li"},"string")),Object(i.b)("li",{parentName:"ul"},"If not, ",Object(i.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")," is thrown"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Values in ",Object(i.b)("inlineCode",{parentName:"p"},"$values"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"are always quoted (using ",Object(i.b)("inlineCode",{parentName:"li"},"preg::quote()"),") with regard to the delimiter chosen by ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"don't contribute")," to the pattern being automatically delimited. Otherwise, user-input data could influence the pattern being invalid or not")))),Object(i.b)("h2",{id:"building-process"},"Building process"),Object(i.b)("p",null,"Here's how a given pattern is constructed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']);\n")),Object(i.b)("p",null,"for values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$dog = '192.168.0.1';\n$cat = '(?name';\n")),Object(i.b)("p",null,"Process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[\"(My|Our)\", ' ', \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']")),Object(i.b)("li",{parentName:"ul"},"Values supposed to be treated as string literals are cut out"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[\"(My|Our)\", ' ', \"(dog|cat)'s name is \", ' and ', '!']")),Object(i.b)("li",{parentName:"ul"},"Pattern is then imploded"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"(My|Our) (dog|cat)\'s name is and !"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters")," are used to chose the delimiter"),Object(i.b)("li",{parentName:"ul"},"The pattern is being checked:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"whether it's already delimiter, and if it is:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"what delimiter is used exactly"),Object(i.b)("li",{parentName:"ul"},"whether it's used with flags"))),Object(i.b)("li",{parentName:"ul"},"and if it's not, a suitable delimiter is chosen automatically"))),Object(i.b)("li",{parentName:"ul"},"In this case, ",Object(i.b)("inlineCode",{parentName:"li"},"/")," is chosen"),Object(i.b)("li",{parentName:"ul"},"Values supposed to be treated as string literals are quoted using the delimiter"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"[\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", preg::quote($dog, '/'), ' and ', preg::quote($cat, '/'), '!']\n"))),Object(i.b)("li",{parentName:"ul"},"The final pattern is joined, flags are appended and the pattern is returned",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-regexp"}),"/(My|Our) (dog|cat)'s name is 192\\.168\\.0\\.1 and \\(\\?name!/\n")))))}p.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return a?r.a.createElement(m,c({ref:t},o,{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);