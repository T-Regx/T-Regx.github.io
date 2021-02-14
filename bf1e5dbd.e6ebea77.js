(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(6),c=(t(0),t(188)),i=t(189),l={id:"replace-with",title:"Replace with a constant value"},p={unversionedId:"replace-with",id:"replace-with",isDocsHomePage:!1,title:"Replace with a constant value",description:"After replace(), you need to explicitly use one of [first()]/[all()]/[only(int)] methods, to express how many",source:"@site/../docs/replace-with.mdx",slug:"/replace-with",permalink:"/docs/replace-with",version:"current",lastUpdatedAt:1611107902,sidebar:"docs",previous:{title:"Replacing a string",permalink:"/docs/replace"},next:{title:"Replace with callback",permalink:"/docs/replace-callback"}},o=[{value:"Limits",id:"limits",children:[{value:"First occurrence - first()",id:"first-occurrence---first",children:[]},{value:"All occurrences - <code>all()</code>",id:"all-occurrences---all",children:[]},{value:"Limited occurrences - <code>only()</code>",id:"limited-occurrences---only",children:[]}]},{value:"Regular expression references",id:"regular-expression-references",children:[]},{value:"PHP-style intentional references",id:"php-style-intentional-references",children:[]},{value:"Remove occurrence",id:"remove-occurrence",children:[]}],b={rightToc:o};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"After ",Object(c.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#many"}),Object(c.b)("inlineCode",{parentName:"a"},"all()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#many"}),Object(c.b)("inlineCode",{parentName:"a"},"only(int)"))," methods, to express how many\nreplacements should be done."),Object(c.b)("p",null,"Specifying limits is done to relieve you from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),Object(c.b)("strong",{parentName:"a"},"brain strain"))," - so you can immediately\nrecognize author's intentions."),Object(c.b)("h2",{id:"limits"},"Limits"),Object(c.b)("p",null,"Using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#many"}),Object(c.b)("inlineCode",{parentName:"a"},"all()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#many"}),Object(c.b)("inlineCode",{parentName:"a"},"only(int)"))," is semantically identical to passing ",Object(c.b)("inlineCode",{parentName:"p"},"$limit")," argument to\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-replace.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_replace()")),"/",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-replace-callback.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_replace_callback()")),"."),Object(c.b)("h3",{id:"first-occurrence---first"},"First occurrence - ",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()"))),Object(c.b)(i.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->first()->with('___');",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg_replace('/[A-Z][a-z]+/', '___', $subject, 1);",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'I like scandinavia: ___, Norway and Denmark'"),Object(c.b)("h3",{id:"all-occurrences---all"},"All occurrences - ",Object(c.b)("inlineCode",{parentName:"h3"},"all()")),Object(c.b)(i.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->all()->with('___');",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace('/[A-Z][a-z]+/', '___', $subject);",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'I like scandinavia: ___, ___ and ___'"),Object(c.b)("h3",{id:"limited-occurrences---only"},"Limited occurrences - ",Object(c.b)("inlineCode",{parentName:"h3"},"only()")),Object(c.b)(i.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->only(2)->with('___');",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace('/[A-Z][a-z]+/', '___', $subject, 2);",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'I like scandinavia: ___, ___ and Denmark'"),Object(c.b)("p",null,"Read on, to learn more about replacing with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-callback"}),"a callback"),"."),Object(c.b)("h2",{id:"regular-expression-references"},"Regular expression references"),Object(c.b)("p",null,"Normally, had you passed a replacement to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-replace.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_replace()")),", that contains a backslash or a dollar sign followed by a\nnumber (eg. ",Object(c.b)("inlineCode",{parentName:"p"},"\\1")," or ",Object(c.b)("inlineCode",{parentName:"p"},"$2"),") - that reference would be replaced by a corresponding capturing group (or by an empty string,\nif the group wasn't matched)."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"preg::replace('/(\\d+)cm/', '<$1>', 'I have 15cm and 192cm');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"I have <15> and <192>\n")),Object(c.b)("p",null,"Resolving such references won't happen using ",Object(c.b)("inlineCode",{parentName:"p"},"with()"),"."),Object(c.b)("p",null,"This is done to relieve you from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),Object(c.b)("strong",{parentName:"a"},"brain strain")),". A programmer should be able to merely\nreplace a string with a constant value without ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),"cognitive load")," about possible ",Object(c.b)("inlineCode",{parentName:"p"},"\\")," or ",Object(c.b)("inlineCode",{parentName:"p"},"$")," hiding somewhere."),Object(c.b)(i.a,{tregx:"pattern('(\\d+)cm')->replace('I have 15cm and 192cm')->all()->with('<$1>');",php:"preg::replace('/(\\d+)cm/', '<\\$1>', 'I have 15cm and 192cm');\n//                            \u2191\n// in T-Regx, special function is used to quote all references",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"I have <$1> and <$1>"),Object(c.b)("p",null,"You can be sure, what's put into ",Object(c.b)("inlineCode",{parentName:"p"},"with()")," will certainly be present unchanged in your final result."),Object(c.b)("p",null,"Some replacement strings containing a backslash or a dollar sign (like file system paths, URL addresses or even user input)\nmight interfere with logic and cause bugs that are very hard to find."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Neither of types of references are resolved: ",Object(c.b)("inlineCode",{parentName:"p"},"$12"),", ",Object(c.b)("inlineCode",{parentName:"p"},"\\12")," nor ",Object(c.b)("inlineCode",{parentName:"p"},"${12}"),"."))),Object(c.b)("h2",{id:"php-style-intentional-references"},"PHP-style intentional references"),Object(c.b)("p",null,"If you, however, would like to intentionally use regular expression references and have validated your input\nagainst ",Object(c.b)("em",{parentName:"p"},"an unexpected")," ",Object(c.b)("inlineCode",{parentName:"p"},"\\")," or ",Object(c.b)("inlineCode",{parentName:"p"},"$")," - feel free to use ",Object(c.b)("inlineCode",{parentName:"p"},"withReferences()")," which ",Object(c.b)("strong",{parentName:"p"},"will")," resolve replacement references."),Object(c.b)(i.a,{tregx:"pattern('(\\d+)cm')->replace('I have 15cm and 192cm')->all()->withReferences('<$1>');",php:"preg::replace('/(\\d+)cm/', '<$1>', 'I have 15cm and 192cm');\n//                            \u2191\n// using withReferences(), back references are preserved",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"I have <15> and <192>"),Object(c.b)("p",null,"However, this is not recommended. For that, try using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-by-group"}),Object(c.b)("inlineCode",{parentName:"a"},"replace()->by()->group()"))," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-callback"}),Object(c.b)("inlineCode",{parentName:"a"},"replace()->callback()")),"."),Object(c.b)("p",null,"The only valid use-cases for ",Object(c.b)("inlineCode",{parentName:"p"},"withReferences()")," is:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Performance (since ",Object(c.b)("inlineCode",{parentName:"li"},"withReferences()")," uses ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-replace.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_replace()")),", and not ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-replace-callback.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_replace_callback()")),")"),Object(c.b)("li",{parentName:"ul"},"Migration from ",Object(c.b)("inlineCode",{parentName:"li"},"preg_replace()")," used in legacy codebase")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Using ",Object(c.b)("inlineCode",{parentName:"p"},"withReferences()")," is not recommended. Instead, try using ",Object(c.b)("inlineCode",{parentName:"p"},"with()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"by()->map()")," or ",Object(c.b)("inlineCode",{parentName:"p"},"callback()"),"."),Object(c.b)("p",{parentName:"div"},"We don't encourage its usage, but we're keeping it nonetheless, to allow users to decide for\nthemselves whether they want to use T-Regx API, or stay with PHP replace style."))),Object(c.b)("h2",{id:"remove-occurrence"},"Remove occurrence"),Object(c.b)("p",null,"There are times when you'd like to simply remove the occurrence of a pattern from your subject. To do that,\nuse ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->remove()")," instead of ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->replace()"),":"),Object(c.b)(i.a,{tregx:"pattern('[cm]m')->remove('I have 15cm and 192cm')->all();",php:"preg::replace('/[cm]m/', '', 'I have 15cm and 192cm');",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"I have 15 and 192"),Object(c.b)("p",null,"It's actually identical to calling ",Object(c.b)("inlineCode",{parentName:"p"},"replace()->with('')")," under the hood, but it's a bit shorter and more expressive."))}s.isMDXComponent=!0},189:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return j}));var n=t(0),r=t.n(n),c=t(192),i=t(193),l=t(194),p=t(4),o=t(190),b=t(48),s=t.n(b),d=function(e){function a(){return e.apply(this,arguments)||this}return Object(p.a)(a,e),a.prototype.render=function(){return r.a.createElement("div",{className:s.a.code},r.a.createElement(o.a,{className:"language-"+this.language},this.code))},Object(l.a)(a,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),a}(r.a.Component),m=function(e){var a=e.tregx,t=e.php,n=[a?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return r.a.createElement(c.a,{defaultValue:"t-regx",values:n},a&&r.a.createElement(i.a,{value:"t-regx"},r.a.createElement(d,null,a)),t&&r.a.createElement(i.a,{value:"php"},r.a.createElement(d,null,t)))},u=t(49),h=t.n(u),j=function(e){var a=e.text,t=e.children;return r.a.createElement("div",{className:h.a.result},r.a.createElement(d,{language:a?"text":"php"},t))}}}]);