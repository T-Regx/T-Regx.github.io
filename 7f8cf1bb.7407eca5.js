(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));a(51),a(24),a(19),a(20),a(52),a(0);var n=a(275);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={id:"prepared-patterns-in-details",title:"Prepared Patterns in details"},l=[{value:"Details about <code>Pattern::prepare()</code>",id:"details-about-patternprepare",children:[{value:"Additional information",id:"additional-information",children:[]}]},{value:"Details about <code>Pattern::inject()</code>",id:"details-about-patterninject",children:[{value:"Ignored placeholders",id:"ignored-placeholders",children:[]},{value:"Additional information",id:"additional-information-1",children:[]}]},{value:"Building process",id:"building-process",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)("wrapper",r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"details-about-patternprepare"},"Details about ",Object(n.b)("inlineCode",{parentName:"h2"},"Pattern::prepare()")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," accepts your pattern as an array. Said array can contain either:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"string")," - which means it will be interpreted as a regular expression"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"array")," - it's enclosed values will be treated as string literals.")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']);\n")),Object(n.b)("p",null,"The code above means:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Treat ",Object(n.b)("inlineCode",{parentName:"li"},'"(My|Our)"')," as a regular expression"),Object(n.b)("li",{parentName:"ul"},"Treat ",Object(n.b)("inlineCode",{parentName:"li"},"' '")," as a regular expression"),Object(n.b)("li",{parentName:"ul"},"Treat ",Object(n.b)("inlineCode",{parentName:"li"},'"(dog|cat)\'s name is "')," as a regular expression"),Object(n.b)("li",{parentName:"ul"},"Treat value of ",Object(n.b)("inlineCode",{parentName:"li"},"$dog")," as a string literal"),Object(n.b)("li",{parentName:"ul"},"Treat ",Object(n.b)("inlineCode",{parentName:"li"},"' and '")," as a regular expression"),Object(n.b)("li",{parentName:"ul"},"Treat value of ",Object(n.b)("inlineCode",{parentName:"li"},"$cat")," as a string literal"),Object(n.b)("li",{parentName:"ul"},"Treat ",Object(n.b)("inlineCode",{parentName:"li"},"'!'")," as a regular expression")),Object(n.b)("p",null,"You can also group elements inside the inner array and also split regular expressions at will:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our) (dog|cat)'s name is \", [$dog, ' and ', $cat], '!']);\n")),Object(n.b)("p",null,"Both code snippets are equal (but now ",Object(n.b)("inlineCode",{parentName:"p"},"' and '")," is also a string literal)."),Object(n.b)("h3",{id:"additional-information"},"Additional information"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Array structure:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Keys in the arrays (both outer and inner arrays) don't matter, as far as T-Regx is concerned"),Object(n.b)("li",{parentName:"ul"},"The only important factors are:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"string values"),Object(n.b)("li",{parentName:"ul"},"order of the values inside the array"))))),Object(n.b)("li",{parentName:"ul"},"Data types:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The outer array can only consist of ",Object(n.b)("inlineCode",{parentName:"li"},"string")," or an inner array"),Object(n.b)("li",{parentName:"ul"},"The inner array can only consist of ",Object(n.b)("inlineCode",{parentName:"li"},"string")),Object(n.b)("li",{parentName:"ul"},"Any other values cause ",Object(n.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")))),Object(n.b)("li",{parentName:"ul"},"Values inside the inner array:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"don't contribute")," to the pattern being automatically delimited. Otherwise, user-input data could influence the pattern being invalid or not"),Object(n.b)("li",{parentName:"ul"},"are always quoted (using ",Object(n.b)("inlineCode",{parentName:"li"},"preg::quote()"),") with regard to the delimiter chosen by ",Object(n.b)("a",r({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters"))))),Object(n.b)("h2",{id:"details-about-patterninject"},"Details about ",Object(n.b)("inlineCode",{parentName:"h2"},"Pattern::inject()")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Pattern::inject()")," replaces a ",Object(n.b)("strong",{parentName:"p"},"placeholder")," in the pattern with values treated as string literals."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is @dog and @cat!\", [\n    'dog' => $dog,\n    'cat' => $cat\n]);\n")),Object(n.b)("p",null,"The said code snippet with ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::inject()")," is exactly the same as the one with ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," above."),Object(n.b)("p",null,"Apart from ",Object(n.b)("inlineCode",{parentName:"p"},"@name")," placeholder format, you can also use ",Object(n.b)("code",null,"`","name","`")," format. So, again, the code snippet below\nworks exactly the same as the two snippets above."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is `dog` and `cat`!\", [\n    'dog' => $dog,\n    'cat' => $cat\n]);\n")),Object(n.b)("h3",{id:"ignored-placeholders"},"Ignored placeholders"),Object(n.b)("p",null,"If you'd like to use a placeholder format inside your ",Object(n.b)("inlineCode",{parentName:"p"},"Pattern::inject()"),", but ",Object(n.b)("strong",{parentName:"p"},"not")," replace it with a quoted value,\nyou can ignore it."),Object(n.b)("p",null,"Ignoring a placeholder is done by passing it's name without a replacement:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is @dog and @cat!\", [\n    'dog' => $dog,\n    'cat'               // @cat will not be replaced\n]);\n")),Object(n.b)("p",null,"You can, of course, pass a name and it's corresponding value:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::inject(\"(My|Our) (dog|cat)'s name is `dog` and `cat`!\", [\n    'dog' => $dog,\n    'cat' => '`cat`'    // `cat` will be replaced with `cat`\n]);\n")),Object(n.b)("p",null,"but you need to specify which placeholder format was used: ",Object(n.b)("code",null,"`","cat","`")," or ",Object(n.b)("inlineCode",{parentName:"p"},"@cat"),"."),Object(n.b)("h3",{id:"additional-information-1"},"Additional information"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"$input = 'Regular expression @name';\n$values = [\n    'name' => 'value'\n];\nPattern::inject($input, $values);\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Data:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Value of ",Object(n.b)("inlineCode",{parentName:"li"},"$input")," is treated as a regular expression"),Object(n.b)("li",{parentName:"ul"},"Values in ",Object(n.b)("inlineCode",{parentName:"li"},"$values")," are treated as a string literal"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Data structure"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Each placeholder (",Object(n.b)("inlineCode",{parentName:"li"},"@name")," or ",Object(n.b)("code",null,"`","name","`"),") ",Object(n.b)("strong",{parentName:"li"},"must")," have a counterpart in ",Object(n.b)("inlineCode",{parentName:"li"},"$values"),":",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"a key"),Object(n.b)("li",{parentName:"ul"},"a value, if it's ignored"))),Object(n.b)("li",{parentName:"ul"},"Each key or ignored value in ",Object(n.b)("inlineCode",{parentName:"li"},"$values")," ",Object(n.b)("strong",{parentName:"li"},"must")," have a corresponding placeholder in ",Object(n.b)("inlineCode",{parentName:"li"},"$input")),Object(n.b)("li",{parentName:"ul"},"Placeholder/name/key can only consist of alphanumeric values and an underscore (",Object(n.b)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_]"),")"),Object(n.b)("li",{parentName:"ul"},"If not, ",Object(n.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")," is thrown"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Data types:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Values in ",Object(n.b)("inlineCode",{parentName:"li"},"$values")," can only be of type ",Object(n.b)("inlineCode",{parentName:"li"},"string")),Object(n.b)("li",{parentName:"ul"},"If not, ",Object(n.b)("inlineCode",{parentName:"li"},"InvalidArgumentException")," is thrown"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Values in ",Object(n.b)("inlineCode",{parentName:"p"},"$values"),":"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"are always quoted (using ",Object(n.b)("inlineCode",{parentName:"li"},"preg::quote()"),") with regard to the delimiter chosen by ",Object(n.b)("a",r({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"don't contribute")," to the pattern being automatically delimited. Otherwise, user-input data could influence the pattern being invalid or not")))),Object(n.b)("h2",{id:"building-process"},"Building process"),Object(n.b)("p",null,"Here's how a given pattern is constructed:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']);\n")),Object(n.b)("p",null,"for values:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-php"}),"$dog = '192.168.0.1';\n$cat = '(?name';\n")),Object(n.b)("p",null,"Process:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"[\"(My|Our)\", ' ', \"(dog|cat)'s name is \", [$dog], ' and ', [$cat], '!']")),Object(n.b)("li",{parentName:"ul"},"Values supposed to be treated as string literals are cut out"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"[\"(My|Our)\", ' ', \"(dog|cat)'s name is \", ' and ', '!']")),Object(n.b)("li",{parentName:"ul"},"Pattern is then imploded"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},'"(My|Our) (dog|cat)\'s name is and !"')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/docs/delimiters"}),"Automatic Delimiters")," are used to chose the delimiter"),Object(n.b)("li",{parentName:"ul"},"The pattern is being checked:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"whether it's already delimiter, and if it is:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"what delimiter is used exactly"),Object(n.b)("li",{parentName:"ul"},"whether it's used with flags"))),Object(n.b)("li",{parentName:"ul"},"and if it's not, a suitable delimiter is chosen automatically"))),Object(n.b)("li",{parentName:"ul"},"In this case, ",Object(n.b)("inlineCode",{parentName:"li"},"/")," is chosen"),Object(n.b)("li",{parentName:"ul"},"Values supposed to be treated as string literals are quoted using the delimiter"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"[\"(My|Our)\", ' ',  \"(dog|cat)'s name is \", preg::quote($dog, '/'), ' and ', preg::quote($cat, '/'), '!']\n"))),Object(n.b)("li",{parentName:"ul"},"The final pattern is joined, flags are appended and the pattern is returned",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-regexp"}),"/(My|Our) (dog|cat)'s name is 192\\.168\\.0\\.1 and \\(\\?name!/\n")))))}b.isMDXComponent=!0},275:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return a?r.a.createElement(m,c({ref:t},o,{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);