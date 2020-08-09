(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),c=(a(0),a(161)),l=a(163),i={id:"replace-callback",title:"Replace with callback"},p={unversionedId:"replace-callback",id:"replace-callback",isDocsHomePage:!1,title:"Replace with callback",description:"After replace(), you need to explicitly use one of first()/all()/only(int) methods, to express how many",source:"@site/..\\docs\\replace-callback.mdx",permalink:"/docs/replace-callback",lastUpdatedAt:1586708537,sidebar:"docs",previous:{title:"Replace with a constant value",permalink:"/docs/replace-with"},next:{title:"Replace by group",permalink:"/docs/replace-by-group"}},o=[{value:"Replace first",id:"replace-first",children:[]},{value:"Replace more",id:"replace-more",children:[{value:"<code>all()</code>",id:"all",children:[]},{value:"<code>only()</code>",id:"only",children:[]}]},{value:"Return types",id:"return-types",children:[{value:"Explicit string",id:"explicit-string",children:[]}]},{value:"Variable callbacks",id:"variable-callbacks",children:[]}],s={rightToc:o};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"After ",Object(c.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),Object(c.b)("p",null,"Callback passed to ",Object(c.b)("inlineCode",{parentName:"p"},"replace()->callback()")," will only be invoked:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"for ",Object(c.b)("inlineCode",{parentName:"li"},"all()")," - as many times as there are occurrences matched in the subject."),Object(c.b)("li",{parentName:"ul"},"for ",Object(c.b)("inlineCode",{parentName:"li"},"only(int)")," - the same as ",Object(c.b)("inlineCode",{parentName:"li"},"all()"),", but up to an ",Object(c.b)("inlineCode",{parentName:"li"},"int")," limit."),Object(c.b)("li",{parentName:"ul"},"for ",Object(c.b)("inlineCode",{parentName:"li"},"first()")," - once if an occurrence is matched; or not at all if it's not.")),Object(c.b)("h2",{id:"replace-first"},"Replace first"),Object(c.b)(l.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->first()->callback(function (Match $match) {\n    return strtoupper($match->text());\n});",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $match) {\n    return strtoupper($match[0]);\n}, $subject, 1);",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, Norway and Denmark'"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Of course, the callback is only invoked ",Object(c.b)("strong",{parentName:"p"},"if")," your subject is matched with the pattern.")),Object(c.b)("h2",{id:"replace-more"},"Replace more"),Object(c.b)("h3",{id:"all"},Object(c.b)("inlineCode",{parentName:"h3"},"all()")),Object(c.b)("p",null,"Replacing all matched occurrences is the most common use-case:"),Object(c.b)(l.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->all()->callback(function (Match $m) {\n    return strtoupper($m->text());\n});",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $m) {\n    return strtoupper($m[0]);\n}, $subject);",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, NORWAY and DENMARK'"),Object(c.b)("h3",{id:"only"},Object(c.b)("inlineCode",{parentName:"h3"},"only()")),Object(c.b)(l.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In T-Regx, Match details can be cast to string, returning the whole match\npattern('[A-Z][a-z]+')->replace($subject)->only(2)->callback('strtoupper');",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\npreg::replace_callback('/[A-Z][a-z]+/', function (array $match) {\n    // $match[0] can be an empty string, even if a group is not matched\n    return call_user_func('strtoupper', $match[0]);\n}, $subject, 2);",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, NORWAY and Denmark'"),Object(c.b)("h2",{id:"return-types"},"Return types"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"replace()->callback()")," only accepts ",Object(c.b)("inlineCode",{parentName:"p"},"string")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),Object(c.b)("inlineCode",{parentName:"a"},"MatchGroup"))," as its return type."),Object(c.b)("p",null,"We believe that returning anything, that's not a string or a group can ",Object(c.b)("strong",{parentName:"p"},"be a sign of a bug"),"! Moreover, converting them\nsilently would break our ",'["Explicity rule"]',"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Match $match) {\n    return 2;       // <- throws InvalidReturnValueException\n    return true;    // <- throws InvalidReturnValueException\n    return null;    // <- throws InvalidReturnValueException\n});\n")),Object(c.b)("h3",{id:"explicit-string"},"Explicit string"),Object(c.b)("p",null,"If you'd like to replace an occurrence with a numeric value (for example ",Object(c.b)("inlineCode",{parentName:"p"},"'12'"),"), an empty string or ",Object(c.b)("inlineCode",{parentName:"p"},"'true'"),"/",Object(c.b)("inlineCode",{parentName:"p"},"'false'"),"\nliterals - just return them as ",Object(c.b)("inlineCode",{parentName:"p"},"string")," ",Object(c.b)("strong",{parentName:"p"},"explicitly"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Match $match) {\n    return strval(2);                          // ok\n    return true ? 'true' : 'false';            // ok\n    return null ? '' : $something;             // ok\n\n    return $match->text();                     // ok\n    return (string) $match;                    // ok\n    return $match->group('captured')->text();  // ok, if group exists and was matched\n\n    return $match;                             // ok\n    return $match->group('captured');          // ok, if group exists and was matched\n});\n")),Object(c.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(c.b)("p",null,"You can call ",Object(c.b)("inlineCode",{parentName:"p"},"replace()->callback()")," for any valid PHP ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"callable"))," which accepts one string parameter (or no parameters)\nand returns ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"."),Object(c.b)(l.a,{tregx:"pattern('\\w+')->replace('Apples are cool')->first()->callback('strtoupper');",php:"// This code is actually impossible in Vanilla-PHP.\n// In T-Regx, Match details can be cast to string - that's the matched text\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\n\n// preg::replace_callback('/\\w+/', 'strtoupper', $subject, 1);\n\npreg::replace_callback('/\\w+/', function (array $match) {\n    return strtoupper($match[0]);\n}, 'Apples are cool', 1);",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"'APPLES are cool'"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"In this example, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," will be cast to string, which is the same as calling ",Object(c.b)("inlineCode",{parentName:"p"},"Match.text()")," method.")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"')))}b.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(162),r=a(3),c=a(0),l=a.n(c),i=a(166),p=a(167),o=a(165),s=a(47),b=a.n(s),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:b.a.code},l.a.createElement(o.a,{className:"language-"+this.language},this.code))},Object(n.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(l.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&l.a.createElement(p.a,{value:"t-regx"},l.a.createElement(u,null,this.props.tregx)),this.props.php&&l.a.createElement(p.a,{value:"php"},l.a.createElement(u,null,this.props.php))))},Object(n.a)(t,[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}]),t}(l.a.Component),m=a(48),h=a.n(m),j=function(e){var t=e.text,a=e.children;return l.a.createElement("div",{className:h.a.result},l.a.createElement(u,{language:t?"text":"php"},a))}}}]);