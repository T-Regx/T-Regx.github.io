(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{162:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n),r=a(165),o=a(166),i=a(164),l=a(47),p=a.n(l);class h extends c.a.Component{render(){return c.a.createElement("div",{className:p.a.code},c.a.createElement(i.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var b=({tregx:e,php:t})=>{const a=[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter(e=>e.value);return c.a.createElement(r.a,{defaultValue:"t-regx",values:a,groupId:"language"},e&&c.a.createElement(o.a,{value:"t-regx"},c.a.createElement(h,null,e)),t&&c.a.createElement(o.a,{value:"php"},c.a.createElement(h,null,t)))},s=a(48),d=a.n(s),m=({text:e,children:t})=>c.a.createElement("div",{className:d.a.result},c.a.createElement(h,{language:e?"text":"php"},t))},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),c=a(6),r=(a(0),a(161)),o=a(162),i={id:"match-for-each",title:"Iterate matches (For each)"},l={unversionedId:"match-for-each",id:"match-for-each",isDocsHomePage:!1,title:"Iterate matches (For each)",description:"Use forEach() to easily iterate matched occurrences with your callback. You can call forEach() with a callback,",source:"@site/..\\docs\\match-for-each.mdx",permalink:"/docs/match-for-each",lastUpdatedAt:1586997896,sidebar:"docs",previous:{title:"Optional matches (Find first)",permalink:"/docs/match-find-first"},next:{title:"Map occurrences",permalink:"/docs/match-map"}},p=[{value:"Vanilla PHP <code>foreach</code>",id:"vanilla-php-foreach",children:[{value:"Other iterable entities",id:"other-iterable-entities",children:[]}]}],h={rightToc:p};function b(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()")," to easily iterate matched occurrences with your callback. You can call ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()")," with a callback,\nthat's invoked with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details just like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(r.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(r.b)("inlineCode",{parentName:"a"},"findFirst()")),"."),Object(r.b)(o.a,{tregx:"pattern('\\w+')->match('Apples are cool')->forEach(function (Match $match) {\n    echo \"I matched $match, \";\n});",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\narray_map(function (string $text) {\n    echo \"I matched $text, \";\n}, $matches[0]);",mdxType:"CodeTabs"}),Object(r.b)(o.b,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "),Object(r.b)("p",null,"Using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," you can get detailed information such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"offset()")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#ordinal-value-index"}),Object(r.b)("inlineCode",{parentName:"a"},"index()"))," etc."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Of course, ",Object(r.b)("inlineCode",{parentName:"p"},"forEach()")," accepts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details, but ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," can be cast to ",Object(r.b)("inlineCode",{parentName:"p"},"(string)"),".")),Object(r.b)("h2",{id:"vanilla-php-foreach"},"Vanilla PHP ",Object(r.b)("inlineCode",{parentName:"h2"},"foreach")),Object(r.b)("p",null,"You can also use the result of ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()->match()")," directly in PHP ",Object(r.b)("inlineCode",{parentName:"p"},"foreach")," loop."),Object(r.b)(o.a,{tregx:"foreach (pattern('\\w+')->match('Apples are cool') as $match) {\n    echo \"I matched \" . $match->text() . \", \";\n};",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\nforeach ($matches[0] as $text) {\n    echo \"I matched $text, \";\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{text:!0,mdxType:"Result"},"I matched Apples, I matched are, I matched cool, "),Object(r.b)("h3",{id:"other-iterable-entities"},"Other iterable entities"),Object(r.b)("p",null,"In the further chapters you will learn about inline ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-offsets#using-inline-offsets-method"}),Object(r.b)("inlineCode",{parentName:"a"},"offsets()")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-group"}),Object(r.b)("inlineCode",{parentName:"a"},"group(string|int)"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-as-int"}),Object(r.b)("inlineCode",{parentName:"a"},"asInt()"))," methods in detail,\nbut for now, you only need to know that all of those entities are iterable with PHP ",Object(r.b)("inlineCode",{parentName:"p"},"foreach"),"."),Object(r.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1') as $match) {\n    return $match->text(); // '127'\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    return $text; // '127';\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"'127'"),Object(r.b)("p",null,"and also"),Object(r.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1')->asInt() as $digit) {\n    return $digit; // 127\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    $digit = Integer::parse($text);\n    return $digit; // 127;\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"127"),"or",Object(r.b)(o.a,{tregx:"foreach (pattern('(\\d+)')->match('127.0.0.1')->group(1) as $group) {\n    return $group->text(); // '127'\n}",php:"preg_match_all('/(\\d+)/', '127.0.0.1', $matches);\nforeach ($matches[1] as $group) {\n    return $group; // '127';\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"'127'"),Object(r.b)("p",null,"Of course, if you call ",Object(r.b)("inlineCode",{parentName:"p"},"->all()")," on any of the given entities above you will receive an ",Object(r.b)("inlineCode",{parentName:"p"},"array"),", which is of course\nalso iterable by PHP ",Object(r.b)("inlineCode",{parentName:"p"},"foreach"),"."),Object(r.b)(o.a,{tregx:"foreach (pattern('\\d+')->match('127.0.0.1')->all() as $text) {\n    return $text; // '127'\n}",php:"preg_match_all('/\\d+/', '127.0.0.1', $matches);\nforeach ($matches[0] as $text) {\n    return $text; // '127';\n}",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"'127'"),Object(r.b)("p",null,"Although, instead of ",Object(r.b)("inlineCode",{parentName:"p"},"all()")," it's possible to chain the entities with one of the more high-level T-Regx methods, such as:\n",Object(r.b)("inlineCode",{parentName:"p"},"forEach()"),"/",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(r.b)("inlineCode",{parentName:"a"},"map()")),"/",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-flat-map"}),Object(r.b)("inlineCode",{parentName:"a"},"flatMap()"))," etc."))}b.isMDXComponent=!0}}]);