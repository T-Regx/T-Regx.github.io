(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(204)),l={id:"prepared-patterns",title:"Prepared Patterns - User input"},p={id:"prepared-patterns",title:"Prepared Patterns - User input",description:"## Using prepared patterns\r",source:"@site/..\\docs\\prepared-patterns.md",permalink:"/docs/prepared-patterns",lastUpdatedAt:1582590046,sidebar:"docs",previous:{title:"Handling user input",permalink:"/docs/handling-user-input"},next:{title:"Composite Pattern",permalink:"/docs/composite-pattern"}},c=[{value:"Using prepared patterns",id:"using-prepared-patterns",children:[{value:"With <code>Pattern::prepare()</code>",id:"with-patternprepare",children:[]},{value:"With <code>Pattern::inject()</code>",id:"with-patterninject",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Old-school pattern quoting",id:"old-school-pattern-quoting",children:[]}],o={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-prepared-patterns"},"Using prepared patterns"),Object(i.b)("p",null,"If you use ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()"),", you can explicitly specify which parts of your pattern should be\ntreated as string literals, and not as regular expression special characters."),Object(i.b)("p",null,"Prepared Patterns also understand that strings that are supposed to be treated as string literals are to be quoted with a\ndelimiter, that was chosen with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),"."),Object(i.b)("h3",{id:"with-patternprepare"},"With ",Object(i.b)("inlineCode",{parentName:"h3"},"Pattern::prepare()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," accepts your pattern as an array. Said array can contain either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string")," - that will be interpreted as a regular expression"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"array")," - that values of which will be treated as string literals")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$input = $_GET['input'];\n\nPattern::prepare([\"(My|Our) dog's name is \", [$input], '!']);\n")),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},'"(My|Our) dog\'s name is "')," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"$input")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"'!'")," as a regular expression")),Object(i.b)("h3",{id:"with-patterninject"},"With ",Object(i.b)("inlineCode",{parentName:"h3"},"Pattern::inject()")),Object(i.b)("p",null,"For a bit cleaner pattern, consider using ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()"),"."),Object(i.b)("p",null,"It replaces a ",Object(i.b)("strong",{parentName:"p"},"placeholder")," in the pattern with values treated as string literals."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$input = $_GET['input'];\n\nPattern::inject(\"(My|Our) dog's name is @name!\", [\n    'name' => $input\n]);\n")),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"$input")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"@name")," with ",Object(i.b)("inlineCode",{parentName:"li"},"$input"),", but handling all regexp special characters.")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"And that's it! Prepared patterns are exactly alike to regular ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::of()"),". Below snippets are identical:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::prepare([\"(My|Our) dog's name is \", [$input], '!'])->match($subject)->first();\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'Pattern::of("(My|Our) dog\'s name is Barky!")->match($subject)->first();\n')),Object(i.b)("p",null,"except for the fact that ",Object(i.b)("inlineCode",{parentName:"p"},"$input")," can be user-input, guaranteed to be safe."),Object(i.b)("h2",{id:"old-school-pattern-quoting"},"Old-school pattern quoting"),Object(i.b)("p",null,"Have you chosen to work with regular PCRE functions, your code might look similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"preg_match('/(Pattern|pattern) with ' . preg_quote('quoted parts...', '/') . ' is ugly/');\n")),Object(i.b)("p",null,"Prepared Patterns address some of this approach flaws. They:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"automatically delimiter your input, so there's no need for specifying ",Object(i.b)("inlineCode",{parentName:"li"},"/")," delimiter again in ",Object(i.b)("inlineCode",{parentName:"li"},"preg_quote()"),"."),Object(i.b)("li",{parentName:"ul"},"are declarative. Meaning, you only need to ",Object(i.b)("em",{parentName:"li"},"declare")," that you want those values to be treated as string literals."),Object(i.b)("li",{parentName:"ul"},"fix inconsistency with ",Object(i.b)("inlineCode",{parentName:"li"},"preg_quote()")," returning different values since PHP 7.3")),Object(i.b)("p",null,"They also add additional functionality, that currently is utterly missing in PHP:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"un-quoting values inside ",Object(i.b)("inlineCode",{parentName:"li"},"\\Q")," and ",Object(i.b)("inlineCode",{parentName:"li"},"\\E"),", which indicate quote in PHP regular expressions."),Object(i.b)("li",{parentName:"ul"},"flag ",Object(i.b)("inlineCode",{parentName:"li"},"x")," ignores whitespaces, so large expressions can be split to multiple lines. ",Object(i.b)("inlineCode",{parentName:"li"},"preg_quote()")," doesn't quote spaces,\nso user-input spaces are also going to be ignored - Prepared Patterns will however preserve them.")),Object(i.b)("p",null,"This is done to relieve you from the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"overview.md#brain-strain"}),Object(i.b)("strong",{parentName:"a"},"brain strain")),"."),Object(i.b)("p",null,"Basically,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preg_quote()")," is procedural - you take care of everything by yourself"),Object(i.b)("li",{parentName:"ul"},"Prepared Patterns are declarative - we take care of everything ",Object(i.b)("strong",{parentName:"li"},"for")," you")))}s.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,O=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(O,p({ref:t},o,{components:n})):a.a.createElement(O,p({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);