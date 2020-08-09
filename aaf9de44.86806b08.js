(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(161)),i=a(163),o={id:"match-first",title:"First occurrence"},p={unversionedId:"match-first",id:"match-first",isDocsHomePage:!1,title:"First occurrence",description:"Matching a first occurrence in a string is the most common use-case.",source:"@site/..\\docs\\match-first.mdx",permalink:"/docs/match-first",lastUpdatedAt:1596986524,sidebar:"docs",previous:{title:"Match a subject",permalink:"/docs/match"},next:{title:"Optional matches (Find first)",permalink:"/docs/match-find-first"}},l=[{value:"Return from <code>first()</code>",id:"return-from-first",children:[]},{value:"Use <code>first()</code> with callback",id:"use-first-with-callback",children:[{value:"Match details",id:"match-details",children:[]},{value:"Groups in match",id:"groups-in-match",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]}]},{value:"<code>findFirst()</code>",id:"findfirst",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Matching a first occurrence in a string is the most common use-case."),Object(c.b)("h2",{id:"return-from-first"},"Return from ",Object(c.b)("inlineCode",{parentName:"h2"},"first()")),Object(c.b)("p",null,"You can get the first occurrence of a pattern in a subject by calling ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),"."),Object(c.b)(i.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old\")->first();",php:"if (preg::match('/[0-9]+/', \"I'm 19 years old\", $match)) {\n    return $match[0];\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'19'"),Object(c.b)("p",null,"If a match is ",Object(c.b)("strong",{parentName:"p"},"not found")," in a subject, ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," is thrown. This is done to relieve you from the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),Object(c.b)("strong",{parentName:"a"},"brain strain")),". It's much easier to develop an application and ",Object(c.b)("em",{parentName:"p"},"just assume")," that this\nmethod ",Object(c.b)("strong",{parentName:"p"},"has")," to return a value and go on. No more bothers about empty arrays and empty strings, or a possible\n",Object(c.b)("inlineCode",{parentName:"p"},"null"),"/",Object(c.b)("inlineCode",{parentName:"p"},"false")," hiding somewhere."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you would like to control the subject that ",Object(c.b)("strong",{parentName:"p"},"isn't matched")," with your pattern though;\nyou can do it ",Object(c.b)("strong",{parentName:"p"},"explicitly")," with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#findfirst"}),Object(c.b)("inlineCode",{parentName:"a"},"findFirst()"))," (and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orreturn"}),Object(c.b)("inlineCode",{parentName:"a"},"orReturn()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orelse"}),Object(c.b)("inlineCode",{parentName:"a"},"orElse()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orthrow"}),Object(c.b)("inlineCode",{parentName:"a"},"orThrow()")),").")),Object(c.b)("h2",{id:"use-first-with-callback"},"Use ",Object(c.b)("inlineCode",{parentName:"h2"},"first()")," with callback"),Object(c.b)("p",null,"You can call an anonymous function for the first matched occurrence. In this example, we'll print the matched text to the\nstandard output."),Object(c.b)(i.a,{tregx:"pattern('\\w+')->match('Apples are cool')->first(function (string $match) {\n    echo \"I matched $match\";\n});",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    echo 'I matched ' . $match[0];\n}\nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"I matched Apples"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Casting ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," to a string is the same as calling a ",Object(c.b)("inlineCode",{parentName:"p"},"text()")," method.")),Object(c.b)("h3",{id:"match-details"},"Match details"),Object(c.b)("p",null,"With ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," details, you can gain access to useful information about the matched occurrence."),Object(c.b)(i.a,{tregx:"pattern('\\w+')->match(\"Apples are cool\")->first(function (Match $match) {\n    $subject = $match->subject();\n    echo \"Match '$match' was matched inside '$subject'.\";\n});",php:"$subject = \"Apples are cool\";\nif (preg::match('/\\w+/', $subject, $match)) {\n    $text = $match[0];\n    echo \"Match '$text' was matched inside '$subject'.\";\n} \nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"Match 'Apples' was matched inside 'Apples are cool'."),Object(c.b)("p",null,"You can read more extensively about ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(c.b)("h3",{id:"groups-in-match"},"Groups in match"),Object(c.b)("p",null,"Retrieving capturing groups from a match is really simple."),Object(c.b)(i.a,{tregx:"pattern('(?<capital>[A-Z])')->match('hello there, General Kenobi')->first(function (Match $match) {\n    $capital = $match->group('capital')->text();\n\n    return $capital;\n});",php:"if (preg::match('~(?<capital>[A-Z])[a-z]+~', 'hello there, General Kenobi', $match)) {\n    $capital = $match['capital'][0];\n\n    return $capital;\n}\nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'G'\n")),Object(c.b)("p",null,"Of course, ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," callback will only be invoked if your pattern matches the subject."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"You can learn more about groups on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),"Capturing Group")," page. ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Even more, you can visit ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-group"}),"Inline groups")," and use familiar ",Object(c.b)("inlineCode",{parentName:"p"},"all()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"only()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"offsets()"),"\nmethods on groups. ")),Object(c.b)("h3",{id:"return-value"},"Return value"),Object(c.b)("p",null,"It's also possible to return your custom value from within ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," callback. This custom value will be then returned\nfrom ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," function."),Object(c.b)(i.a,{tregx:"$first = pattern('\\w+')->match('Apples are cool')->first(function (Match $match) {\n    return [\n        $match->text(), \n        strtoupper($match->text()),\n        lcfirst($match->text())\n    ];\n});\n\nreturn $first;",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    $first = [\n        $match[0],\n        strtoupper($match[0]),\n        lcfirst($match[0])\n    ];\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n\nreturn $first;",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"['Apples', 'APPLES', 'apples']"),Object(c.b)("h3",{id:"variable-callbacks"},"Variable callbacks"),Object(c.b)("p",null,"You can call ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," for any valid PHP ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"callable"))," which accepts one string parameter (or no parameters)."),Object(c.b)(i.a,{tregx:"return pattern('\\w+')->match('Apples are cool')->first('strtoupper');",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    return call_user_func('strtoupper', $match[0]);\n}\nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'APPLES'"),Object(c.b)("p",null,"In this example, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match"))," will be cast to string, which is the same as calling ",Object(c.b)("inlineCode",{parentName:"p"},"Match.text()")," method."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Of course, ",Object(c.b)("inlineCode",{parentName:"p"},"strtoupper")," (or any other callback) is only invoked ",Object(c.b)("strong",{parentName:"p"},"if")," your subject is matched with the pattern.")),Object(c.b)("h3",{id:"arbitrary-return-types"},"Arbitrary return types"),Object(c.b)("p",null,"From within ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," callback, you can return any value:"),Object(c.b)(i.a,{tregx:"return pattern('\\w+')->match('Apples are cool')->first('str_split');",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    return call_user_func('str_split', $match[0]);\n}\nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"['A', 'p', 'p', 'l', 'e', 's']"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," callback accepts all return types, including: numbers, objects, arrays, booleans and ",Object(c.b)("inlineCode",{parentName:"p"},"null"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$pattern = '(?<value>\\d+)(?<unit>cm|mm)';\n$subject = '192mm and 168cm or 18mm and 12cm';\n\npattern($pattern)->match($subject)->first();                 // '192mm'\npattern($pattern)->match($subject)->first('str_split');      // ['1', '9', '2', 'm', 'm']\npattern($pattern)->match($subject)->first('strlen')          // 5\n")),Object(c.b)("h2",{id:"findfirst"},Object(c.b)("inlineCode",{parentName:"h2"},"findFirst()")),Object(c.b)("p",null,"This method allows you to explicitly specify how to handle an unmatched subject. Just chain ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(c.b)("inlineCode",{parentName:"a"},"findFirst()"))," with\none of the following ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orreturn"}),Object(c.b)("inlineCode",{parentName:"a"},"orReturn()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orelse"}),Object(c.b)("inlineCode",{parentName:"a"},"orElse()"))," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orthrow"}),Object(c.b)("inlineCode",{parentName:"a"},"orThrow()")),"."),Object(c.b)(i.a,{tregx:"echo pattern('w+')->match('Dog')\n    ->findFirst(function (Match $match) {\n        return \"Yay $match\";\n    })\n    ->orReturn('Aw, man :/');",php:"if (preg::match('/w+/', 'Dog', $match)) {\n    echo \"Yay {$match[0]}\";\n}\nelse {\n    echo 'Aw, man :/';\n}",mdxType:"CodeTabs"}),Object(c.b)(i.b,{text:!0,mdxType:"Result"},"Yay Dog"),Object(c.b)("hr",null),Object(c.b)("p",null,"Read on to learn more about ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(c.b)("inlineCode",{parentName:"a"},"findFirst()")),"."))}s.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(162),r=a(3),c=a(0),i=a.n(c),o=a(166),p=a(167),l=a(165),b=a(47),s=a.n(b),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:s.a.code},i.a.createElement(l.a,{className:"language-"+this.language},this.code))},Object(n.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(i.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&i.a.createElement(p.a,{value:"t-regx"},i.a.createElement(h,null,this.props.tregx)),this.props.php&&i.a.createElement(p.a,{value:"php"},i.a.createElement(h,null,this.props.php))))},Object(n.a)(t,[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}]),t}(i.a.Component),m=a(48),d=a.n(m),j=function(e){var t=e.text,a=e.children;return i.a.createElement("div",{className:d.a.result},i.a.createElement(h,{language:t?"text":"php"},a))}}}]);