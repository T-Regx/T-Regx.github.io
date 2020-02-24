(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));n(58),n(31),n(22),n(23),n(59),n(0);var r=n(263);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={id:"delimiters",title:"Automatic delimiters"},o=[{value:"Adding delimiters",id:"adding-delimiters",children:[]},{value:"Flags",id:"flags",children:[]},{value:"I want to break it",id:"i-want-to-break-it",children:[]}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=c("Tabs"),p=c("TabItem"),b={rightToc:o};function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)("wrapper",a({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(r.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE require delimiters. There is no way to omit them\nin Vanilla PHP.")),Object(r.b)("p",null,"Thanks to automatic delimiters, one can use regular expressions without ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/overview#brain-strain"}),"brain strain"),"\nand without coming up with a suitable delimiter."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern('#[A-Z]/[a-z]+')->match($subject)->first();\n")),Object(r.b)("p",null,"The code snippets above are equal."),Object(r.b)("h2",{id:"adding-delimiters"},"Adding delimiters"),Object(r.b)("p",null,"To change undelimited pattern into a delimited one - use ",Object(r.b)("inlineCode",{parentName:"p"},"delimiter()")," method;"),Object(r.b)(l,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(r.b)(p,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern('Welcome/Or not')->delimiter();\n")))),Object(r.b)("div",{className:"output-block"},Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-text"}),"#Welcome/Or not#\n"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"delimiter()")," returns the pattern unchanged, if it was constructed with ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),", instead of ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::of()"),".")),Object(r.b)("h2",{id:"flags"},"Flags"),Object(r.b)("p",null,"There are two ways of passing flags:"),Object(r.b)("p",null,"Either pass a second argument to the ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"pattern()")),"/",Object(r.b)("a",a({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"Pattern::of()")),":"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+', 'i')->match($subject)->first();\n")),Object(r.b)("p",null,"or use old-school pattern:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z][a-z]+/i')->match($subject)->first();\n")),Object(r.b)("h2",{id:"i-want-to-break-it"},"I want to break it"),Object(r.b)("p",null,"T-Regx has a set of predefined, suitable delimiters (like ",Object(r.b)("inlineCode",{parentName:"p"},"/"),", ",Object(r.b)("inlineCode",{parentName:"p"},"#"),", ",Object(r.b)("inlineCode",{parentName:"p"},"~"),", ",Object(r.b)("inlineCode",{parentName:"p"},"%"),", etc.) and simply uses the first one,\nthat doesn't occur in your pattern. If you exhaust each of them; if you use every possible, predefined, suitable delimiter -\nT-Regx will throw ",Object(r.b)("inlineCode",{parentName:"p"},"ExplicitDelimiterRequiredException"),"."),Object(r.b)("p",null,"In that case, you simply have to use an explicit delimiter with ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),"."),Object(r.b)("p",null,"If you think another automatic delimiter can be used,\nplease create ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/issues/new/choose"}),"a github issue"),"."))}u.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);