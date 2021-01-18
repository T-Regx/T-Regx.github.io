(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(180)),p={id:"prepared-patterns",title:"Prepared Patterns - User input"},l={unversionedId:"prepared-patterns",id:"prepared-patterns",isDocsHomePage:!1,title:"Prepared Patterns - User input",description:"If you use [Pattern::bind()], you can explicitly specify which parts of your pattern",source:"@site/../docs/prepared-patterns.md",slug:"/prepared-patterns",permalink:"/docs/prepared-patterns",version:"current",lastUpdatedAt:1610998420,sidebar:"docs",previous:{title:"Handling user input",permalink:"/docs/handling-user-input"},next:{title:"Composite Pattern",permalink:"/docs/composite-pattern"}},c=[{value:"Use-case",id:"use-case",children:[{value:"With <code>Pattern::prepare()</code>",id:"with-patternprepare",children:[]},{value:"With <code>Pattern::inject()</code>",id:"with-patterninject",children:[]},{value:"With <code>Pattern::bind()</code>",id:"with-patternbind",children:[]}]},{value:"PCRE modifiers",id:"pcre-modifiers",children:[]},{value:"PCRE-styled patterns",id:"pcre-styled-patterns",children:[]},{value:"Old-school pattern quoting",id:"old-school-pattern-quoting",children:[]}],o={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/prepared-patterns#with-patternprepare"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::prepare()")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/prepared-patterns#with-patterninject"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::inject()"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/prepared-patterns#with-patternbind"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::bind()")),", you can explicitly specify which parts of your pattern\nshould be treated as string literals, and not as regular expression special characters."),Object(i.b)("p",null,"Prepared Patterns also understand that strings, that are supposed to be treated as string literals, are to be\nquoted with a delimiter, that was chosen with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),"."),Object(i.b)("h2",{id:"use-case"},"Use-case"),Object(i.b)("p",null,"When you need to use unsafe data in your patterns, it might be tempting to do something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"// build the pattern\n$pattern = Pattern::of('^https://' . $_GET['domain'] . '\\.(com|net)');\n\n// use the pattern\n$pattern->test($string);\n")),Object(i.b)("p",null,"But you, dear reader, know that it's a terrible, terrible idea. ",Object(i.b)("inlineCode",{parentName:"p"},"$_GET['domain']")," may contain\nunexpected/malicious regular expression characters."),Object(i.b)("p",null,"We need to treat each part of that pattern separately, we must:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^https://")," must be treated ",Object(i.b)("strong",{parentName:"li"},"as a regular expression")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$_GET['domain']")," must be treated ",Object(i.b)("strong",{parentName:"li"},"as a string")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"\\.(com|net)")," must be treated ",Object(i.b)("strong",{parentName:"li"},"as a regular expression")," ")),Object(i.b)("h3",{id:"with-patternprepare"},"With ",Object(i.b)("inlineCode",{parentName:"h3"},"Pattern::prepare()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," accepts your pattern as an array. The array can contain either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string")," - that will be interpreted as a regular expression"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"array")," - that values of which will be treated as string literals")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$input = $_GET['input'];\n\nPattern::prepare([\"(My|Our) dog's name is \", [$input], '! I love ', [$input]]);\n")),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},'"(My|Our) dog\'s name is "')," as a regular expression"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"$input")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"'!'")," as a regular expression")),Object(i.b)("h3",{id:"with-patterninject"},"With ",Object(i.b)("inlineCode",{parentName:"h3"},"Pattern::inject()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()")," allows you to specify ",Object(i.b)("inlineCode",{parentName:"p"},"@")," placeholder in your pattern, which\nwill later be populated with ",Object(i.b)("strong",{parentName:"p"},"safe")," version of your parameter."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::inject(\"https?://@/index\\.php\", [$_GET['domain']]);\n\n$pattern->test($string);\n")),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"https?://")," and ",Object(i.b)("inlineCode",{parentName:"li"},"/index\\.php")," as regexp"),Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"@")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"@")," with ",Object(i.b)("inlineCode",{parentName:"li"},"$_GET['domain']"),", but handling all regexp special characters.")),Object(i.b)("h3",{id:"with-patternbind"},"With ",Object(i.b)("inlineCode",{parentName:"h3"},"Pattern::bind()")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Pattern::bind()")," is a bit more verbose version of ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::inject()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$pattern = Pattern::bind(\"(My|Our) dog's name is @name! @name is great!\", [\n    'name' => $_GET['input']\n]);\n\n$pattern->test($string);\n")),Object(i.b)("p",null,"For example, it allows you to reuse your parameters, when they're used more than once in the pattern."),Object(i.b)("p",null,"The code above means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treat ",Object(i.b)("inlineCode",{parentName:"li"},"$_GET['input']")," as a string literal"),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"@name")," with ",Object(i.b)("inlineCode",{parentName:"li"},"$_GET['input']"),", but handling all regexp special characters.")),Object(i.b)("h2",{id:"pcre-modifiers"},"PCRE modifiers"),Object(i.b)("p",null,"Should there be a need for additional PCRE modifiers (flags), simply pass them as a last argument into prepared patterns."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'Pattern::prepare(["(My|Our) dog\'s name is ", [$input], "!"], \'mS\');\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'Pattern::inject("https?://@/index\\.php", [$_GET["domain"]], \'mS\');\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'Pattern::bind("(My|Our) dog\'s name is @name!", ["name" => $_GET["input"]], \'mS\');\n')),Object(i.b)("h2",{id:"pcre-styled-patterns"},"PCRE-styled patterns"),Object(i.b)("p",null,"Should there be a need for your own delimiters, or you just want to use PCRE style, simply use\n",Object(i.b)("inlineCode",{parentName:"p"},"PatternBuilder::builder()->pcre()->")," method, instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::")," facade:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'PatternBuilder::builder()->pcre()->prepare(["/(My|Our) dog\'s name is ", [$input], "!/m"], \'S\');\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'PatternBuilder::builder()->pcre()->inject("/https?://@/index\\.php/m", [$_GET["domain"]], \'S\');\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'PatternBuilder::builder()->pcre()->bind("/(My|Our) dog\'s name is @name!/m", ["name" => $name], \'S\');\n')),Object(i.b)("h2",{id:"old-school-pattern-quoting"},"Old-school pattern quoting"),Object(i.b)("p",null,"Have you chosen to work with regular PCRE functions, your code might look similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"preg_match('/(Pattern|pattern) with ' . preg_quote('quoted parts...', '/') . ' is ugly/');\n")),Object(i.b)("p",null,"Prepared Patterns address some of this approach flaws. They:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"automatically delimiter your input, so there's no need for specifying the delimiter again in ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()")),"."),Object(i.b)("li",{parentName:"ul"},"are declarative. Meaning, you only need to ",Object(i.b)("em",{parentName:"li"},"declare")," that you want those values to be treated as string literals."),Object(i.b)("li",{parentName:"ul"},"fix inconsistency with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()"))," returning different values since PHP 7.3")),Object(i.b)("p",null,"They also add additional functionality, that currently is utterly missing in PHP:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extended mode (enabled e.g. with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php"}),Object(i.b)("inlineCode",{parentName:"a"},"x"))," flag) ignores whitespaces, so large expressions can be split to multiple lines. ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()")),"\ndoesn't quote spaces, so user-input spaces are also going to be ignored - Prepared Patterns will however preserve them.")))}b.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);