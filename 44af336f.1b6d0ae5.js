(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{181:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n),r=a(185),o=a(186),i=a(187),p=a(4),b=a(182),u=a(48),s=a.n(u),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:s.a.code},c.a.createElement(b.a,{className:"language-"+this.language},this.code))},Object(i.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(c.a.Component),m=function(e){var t=e.tregx,a=e.php,n=[t?{label:"T-Regx",value:"t-regx"}:{},a?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return c.a.createElement(r.a,{defaultValue:"t-regx",values:n},t&&c.a.createElement(o.a,{value:"t-regx"},c.a.createElement(l,null,t)),a&&c.a.createElement(o.a,{value:"php"},c.a.createElement(l,null,a)))},d=a(49),h=a.n(d),j=function(e){var t=e.text,a=e.children;return c.a.createElement("div",{className:h.a.result},c.a.createElement(l,{language:t?"text":"php"},a))}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),c=a(6),r=(a(0),a(180)),o=a(181),i={id:"count",title:"Count occurrences"},p={unversionedId:"count",id:"count",isDocsHomePage:!1,title:"Count occurrences",description:"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences",source:"@site/../docs/count.mdx",slug:"/count",permalink:"/docs/count",version:"current",lastUpdatedAt:1611005578,sidebar:"docs",previous:{title:"Automatic delimiters",permalink:"/docs/delimiters"},next:{title:"T-Regx Utilities",permalink:"/docs/utils"}},b=[{value:"Unmatched subjects",id:"unmatched-subjects",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Performance",id:"performance",children:[]}],u={rightToc:b};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences\nthemselves. In that case, ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()->count()")," is perfect:"),Object(r.b)(o.a,{tregx:"return pattern('[aeiouy]')->count('Computer');",php:"return preg::match_all('/[aeiouy]/', 'Computer');",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"3"),Object(r.b)("p",null,"Also, ",Object(r.b)("inlineCode",{parentName:"p"},"MatchPattern")," is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.countable.php"}),Object(r.b)("inlineCode",{parentName:"a"},"\\Countable")),", so you can use PHP build-in methods, like ",Object(r.b)("inlineCode",{parentName:"p"},"count()"),":"),Object(r.b)(o.a,{tregx:"$match = pattern('[aeiouy]')->match('Computer');\n\ncount($match);",php:"preg::match_all('/[aeiouy]/', 'Computer', $match);\n\ncount($match[0]);",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"3"),Object(r.b)("h2",{id:"unmatched-subjects"},"Unmatched subjects"),Object(r.b)("p",null,"If your pattern does not match the subject, ",Object(r.b)("inlineCode",{parentName:"p"},"count()")," simply returns ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"."),Object(r.b)(o.a,{tregx:"return pattern('[0-9]')->count('Computer');",php:"return preg::match_all('/[0-9]/', 'Computer');",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"0"),Object(r.b)("h2",{id:"invalid"},"Invalid"),Object(r.b)("p",null,"Every use of ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()")," with an invalid pattern will cause ",Object(r.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),"."),Object(r.b)(o.a,{tregx:"try {\n    pattern('[aeiouy')->count('Computer');  // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",php:"try {\n    preg::match_all('/[aeiouy/', 'Computer');  // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{text:!0,mdxType:"Result"},"Missing terminating ] for character class at offset 7"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In ",Object(r.b)("inlineCode",{parentName:"p"},"PHP")," snippet, ",Object(r.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," is thrown because SafeRegex ",Object(r.b)("inlineCode",{parentName:"p"},"preg::match_all()")," was used, instead\nof ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match-all.php"}),Object(r.b)("inlineCode",{parentName:"a"},"preg_match_all()")),". Vanilla ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/ref.pcre.php"}),"PHP ",Object(r.b)("inlineCode",{parentName:"a"},"preg")," methods")," don't throw exceptions."))),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"You might be tempted to use ",Object(r.b)("inlineCode",{parentName:"p"},"count()")," to check whether your subject was matched by the pattern, since ",Object(r.b)("inlineCode",{parentName:"p"},"count()")," doesn't\nreturn any matches..."),Object(r.b)(o.a,{tregx:"$count = pattern('[aeiouy]')->count('Computer');\nreturn $count > 0;",php:"$count = preg::match_all('/[aeiouy]/', 'Computer');\nreturn $count > 0;",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"true"),Object(r.b)("p",null,"...but that would be wasteful. You're much better off using\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(r.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(r.b)("inlineCode",{parentName:"a"},"fails()")),":"),Object(r.b)(o.a,{tregx:"return pattern('[aeiouy]')->test('Computer');",php:"return preg::match('/[aeiouy]/', 'Computer') > 0;",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"true"),Object(r.b)("p",null,"This is because ",Object(r.b)("inlineCode",{parentName:"p"},"count()")," will go through each occurrence of a pattern in a subject, counting it; whereas ",Object(r.b)("inlineCode",{parentName:"p"},"test()"),"\nwill return right after it finds the first occurrence."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Under the hood, ",Object(r.b)("inlineCode",{parentName:"p"},"count()")," uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match-all.php"}),Object(r.b)("inlineCode",{parentName:"a"},"preg_match_all()")),", whereas ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(r.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(r.b)("inlineCode",{parentName:"a"},"fails()"))," use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match.php"}),Object(r.b)("inlineCode",{parentName:"a"},"preg_match()")),"."))))}s.isMDXComponent=!0}}]);