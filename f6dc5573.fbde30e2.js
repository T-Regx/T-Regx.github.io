/*! For license information please see f6dc5573.fbde30e2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{254:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return b}));t(58),t(31),t(22),t(23),t(59),t(0);var n=t(263),r=t(265),l=t(267);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={id:"replace-callback",title:"Replace with callback"},o=[{value:"Replace first",id:"replace-first",children:[]},{value:"Replace more",id:"replace-more",children:[{value:"<code>all()</code>",id:"all",children:[]},{value:"<code>only()</code>",id:"only",children:[]}]},{value:"Return types",id:"return-types",children:[{value:"Explicit string",id:"explicit-string",children:[]}]},{value:"Variable callbacks",id:"variable-callbacks",children:[]}],p={rightToc:o};function b(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(n.b)("wrapper",c({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"After ",Object(n.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(n.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(n.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(n.b)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),Object(n.b)("p",null,"Callback passed to ",Object(n.b)("inlineCode",{parentName:"p"},"replace()->callback()")," will only be invoked:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"for ",Object(n.b)("inlineCode",{parentName:"li"},"all()")," - as many times as there are occurrences matched in the subject."),Object(n.b)("li",{parentName:"ul"},"for ",Object(n.b)("inlineCode",{parentName:"li"},"only(int)")," - the same as ",Object(n.b)("inlineCode",{parentName:"li"},"all()"),", but up to an ",Object(n.b)("inlineCode",{parentName:"li"},"int")," limit."),Object(n.b)("li",{parentName:"ul"},"for ",Object(n.b)("inlineCode",{parentName:"li"},"first()")," - once if an occurrence is matched; or not at all if it's not.")),Object(n.b)("h2",{id:"replace-first"},"Replace first"),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->first()->callback(function (Match $m) {\n    return strtoupper($m->text());\n});\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $m) {\n    return strtoupper($m[0]);\n}, $subject, 1);\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"'I like scandinavia: SWEDEN, Norway and Denmark'\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Of course, the callback is only invoked ",Object(n.b)("strong",{parentName:"p"},"if")," your subject is matched with the pattern.")),Object(n.b)("h2",{id:"replace-more"},"Replace more"),Object(n.b)("h3",{id:"all"},Object(n.b)("inlineCode",{parentName:"h3"},"all()")),Object(n.b)("p",null,"Replacing all matched occurrences is the most common use-case:"),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->all()->callback(function (Match $m) {\n    return strtoupper($m->text());\n});\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $m) {\n    return strtoupper($m[0]);\n}, $subject);\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"'I like scandinavia: SWEDEN, NORWAY and DENMARK'\n")),Object(n.b)("h3",{id:"only"},Object(n.b)("inlineCode",{parentName:"h3"},"only()")),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In T-Regx, Match details can be cast to string - that's the matched text\npattern('[A-Z][a-z]+')->replace($subject)->only(2)->callback('strtoupper');\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\n\n// preg::replace_callback('/[A-Z][a-z]+/', 'strtoupper', $subject, 2);\n// Warning, empty string is returned\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"'I like scandinavia: SWEDEN, NORWAY and Denmark'\n")),Object(n.b)("h2",{id:"return-types"},"Return types"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"replace()->callback()")," only accepts ",Object(n.b)("inlineCode",{parentName:"p"},"string")," or ",Object(n.b)("inlineCode",{parentName:"p"},"MatchGroup")," as its return type."),Object(n.b)("p",null,"We believe that returning anything, that's not a string or a group can ",Object(n.b)("strong",{parentName:"p"},"be a sign of a bug"),"! Moreover, converting them silently\nwould break our ",Object(n.b)("a",c({parentName:"p"},{href:"whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"'),"."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Match $match) {\n    return 2;       // <- throws InvalidReturnValueException\n    return true;    // <- throws InvalidReturnValueException\n    return null;    // <- throws InvalidReturnValueException\n});\n")),Object(n.b)("h3",{id:"explicit-string"},"Explicit string"),Object(n.b)("p",null,"If you'd like to replace an occurrence with a numeric value (for example ",Object(n.b)("inlineCode",{parentName:"p"},"'12'"),"), an empty string or ",Object(n.b)("inlineCode",{parentName:"p"},"'true'"),"/",Object(n.b)("inlineCode",{parentName:"p"},"'false'"),"\nliterals - just return them ",Object(n.b)("strong",{parentName:"p"},"explicitly"),"."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Match $match) {\n    return strval(2);                          // ok\n    return true ? 'true' : 'false';            // ok\n    return null ? '' : $something;             // ok\n\n    return $match->text();                     // ok\n    return (string) $match;                    // ok\n    return $match->group('captured')->text();  // ok, if group exists and was matched\n\n    return $match;                             // ok\n    return $match->group('captured');          // ok, if group exists and was matched\n});\n")),Object(n.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(n.b)("p",null,"You can call ",Object(n.b)("inlineCode",{parentName:"p"},"replace()->callback()")," for any valid PHP ",Object(n.b)("inlineCode",{parentName:"p"},"callable")," which accepts one string parameter (or no parameters)\nand returns ",Object(n.b)("inlineCode",{parentName:"p"},"string"),"."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace('Apples are cool')->first()->callback('strtoupper');\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"// This code is actually impossible in Vanilla-PHP.\n// In T-Regx, Match details can be cast to string - that's the matched text\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\n\n// preg::replace_callback('/\\w+/', 'strtoupper', $subject, 1);\n\npreg::replace_callback('/\\w+/', function (array $m) {\n    return strtoupper($m[0]);\n}, 'Apples are cool', 1);\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"'APPLES are cool'\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"In this example, ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match"))," will be cast to string, which is the same as calling ",Object(n.b)("inlineCode",{parentName:"p"},"Match.text()")," method.")))}b.isMDXComponent=!0},263:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i({},a,{},e)),t},u=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(t),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?r.a.createElement(d,i({ref:a},p,{components:t})):r.a.createElement(d,i({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},264:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},265:function(e,a,t){"use strict";t(31),t(22),t(23);var n=t(0),r=t.n(n),l=t(264),c=t.n(l),i=t(266),o=t.n(i),p=37,b=39;a.a=function(e){var a=e.block,t=e.children,l=e.defaultValue,i=e.values,u=Object(n.useState)(l),s=u[0],m=u[1],d=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":a})},i.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===a,className:c()("tab-item",o.a.tabItem,{"tab-item--active":s===a}),key:a,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(d,e.target,e)},onFocus:function(){return m(a)},onClick:function(){return m(a)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===s}))[0]))}},266:function(e,a,t){e.exports={tabItem:"tabItem_3zTA"}},267:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);