(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(6),i=(a(0),a(188)),r=a(189),o={id:"match-first",title:"First occurrence"},b={unversionedId:"match-first",id:"match-first",isDocsHomePage:!1,title:"First occurrence",description:"Matching a first occurrence in a string is the most common use-case.",source:"@site/../docs/match-first.mdx",slug:"/match-first",permalink:"/docs/match-first",version:"current",lastUpdatedAt:1611615784,sidebar:"docs",previous:{title:"Match a subject",permalink:"/docs/match"},next:{title:"Optional matches (Find first)",permalink:"/docs/match-find-first"}},s=[{value:"About <code>first()</code>",id:"about-first",children:[]},{value:"Use <code>first()</code> with callback",id:"use-first-with-callback",children:[{value:"Match details",id:"match-details",children:[]},{value:"Groups in match",id:"groups-in-match",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]}]},{value:"<code>findFirst()</code>",id:"findfirst",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Matching a first occurrence in a string is the most common use-case."),Object(i.b)("h2",{id:"about-first"},"About ",Object(i.b)("inlineCode",{parentName:"h2"},"first()")),Object(i.b)("p",null,"You can get the first occurrence of a pattern in a subject by calling ",Object(i.b)("inlineCode",{parentName:"p"},"first()"),"."),Object(i.b)(r.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old\")->first();",php:"if (preg::match('/[0-9]+/', \"I'm 19 years old\", $match)) {\n    return $match[0];\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'19'"),Object(i.b)("p",null,"If a match is ",Object(i.b)("strong",{parentName:"p"},"not found")," in a subject, ",Object(i.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," is thrown. This is done to relieve you from the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),Object(i.b)("strong",{parentName:"a"},"brain strain")),". It's much easier to develop an application and ",Object(i.b)("em",{parentName:"p"},"just assume")," that this\nmethod ",Object(i.b)("strong",{parentName:"p"},"has")," to return a value and go on. No more bothers about empty arrays and empty strings, or a possible\n",Object(i.b)("inlineCode",{parentName:"p"},"null"),"/",Object(i.b)("inlineCode",{parentName:"p"},"false")," hiding somewhere."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you would like to control the subject that ",Object(i.b)("strong",{parentName:"p"},"isn't matched")," with your pattern though;\nyou can do it ",Object(i.b)("strong",{parentName:"p"},"explicitly")," with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#findfirst"}),Object(i.b)("inlineCode",{parentName:"a"},"findFirst()"))," (and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orreturn"}),Object(i.b)("inlineCode",{parentName:"a"},"orReturn()")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orelse"}),Object(i.b)("inlineCode",{parentName:"a"},"orElse()")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orthrow"}),Object(i.b)("inlineCode",{parentName:"a"},"orThrow()")),")."))),Object(i.b)("h2",{id:"use-first-with-callback"},"Use ",Object(i.b)("inlineCode",{parentName:"h2"},"first()")," with callback"),Object(i.b)("p",null,"You can call an anonymous function for the first matched occurrence. In this example, we'll print the matched text to the\nstandard output."),Object(i.b)(r.a,{tregx:"pattern('\\w+')->match('Apples are cool')->first(function (string $match) {\n    // highlight-next-line\n    echo \"I matched $match\";\n});",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    // highlight-next-line\n    echo 'I matched ' . $match[0];\n}\nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(i.b)(r.b,{text:!0,mdxType:"Result"},"I matched Apples"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Casting ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," to ",Object(i.b)("inlineCode",{parentName:"p"},"string")," is the same as calling ",Object(i.b)("inlineCode",{parentName:"p"},"text()")," method."))),Object(i.b)("h3",{id:"match-details"},"Match details"),Object(i.b)("p",null,"With ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Detail")),", you can gain access to useful information about the matched occurrence."),Object(i.b)(r.a,{tregx:"pattern('\\w+')->match(\"Apples are cool\")->first(function (Detail $detail) {\n    // highlight-next-line\n    $subject = $detail->subject();\n    echo \"Match '$detail' was matched inside '$subject'.\";\n});",php:"$subject = \"Apples are cool\";\nif (preg::match('/\\w+/', $subject, $match)) {\n    $text = $match[0];\n    echo \"Match '$text' was matched inside '$subject'.\";\n} \nelse {\n    throw new SubjectNotMatchedException();\n}",mdxType:"CodeTabs"}),Object(i.b)(r.b,{text:!0,mdxType:"Result"},"Match 'Apples' was matched inside 'Apples are cool'."),Object(i.b)("p",null,"You can read more extensively about it on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," page."),Object(i.b)("h3",{id:"groups-in-match"},"Groups in match"),Object(i.b)("p",null,"Retrieving capturing groups from a match is really simple."),Object(i.b)(r.a,{tregx:"pattern('(?<capital>[A-Z])')->match('hello there, General Kenobi')->first(function (Detail $detail) {\n    // highlight-next-line\n    return $detail->get('capital');\n});",php:"if (preg::match('~(?<capital>[A-Z])[a-z]+~', 'hello there, General Kenobi', $match)) {\n    // highlight-next-line\n    return $match['capital'][0];\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'G'"),Object(i.b)("p",null,"Of course, ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," callback will only be invoked if your pattern matches the subject."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can learn more about groups on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),"Capturing Group")," page."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Even more, you can visit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-group"}),"Inline groups")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"all()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"first()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"only()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"offsets()"),"\nmethods on groups."))),Object(i.b)("h3",{id:"return-value"},"Return value"),Object(i.b)("p",null,"It's also possible to return your custom value from within ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," callback. This custom value will be then returned\nfrom ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," function."),Object(i.b)(r.a,{tregx:"$first = pattern('\\w+')->match('Apples are cool')->first(function (Detail $detail) {\n    return [\n        $detail->text(),\n        strtoupper($detail->text()),\n        lcfirst($detail->text())\n    ];\n});\n\nreturn $first;",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    $first = [\n        $match[0],\n        strtoupper($match[0]),\n        lcfirst($match[0])\n    ];\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n\nreturn $first;",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"['Apples', 'APPLES', 'apples']"),Object(i.b)("h3",{id:"variable-callbacks"},"Variable callbacks"),Object(i.b)("p",null,"You can call ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," for any valid PHP ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(i.b)("inlineCode",{parentName:"a"},"callable"))," which accepts one string parameter (or no parameters)."),Object(i.b)(r.a,{tregx:"return pattern('\\w+')->match('Apples are cool')->first('strtoupper');",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    // highlight-next-line\n    return call_user_func('strtoupper', $match[0]);\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'APPLES'"),Object(i.b)("p",null,"In this example, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," will be cast to string, which is the same as calling ",Object(i.b)("inlineCode",{parentName:"p"},"Detail.text()")," method."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Of course, ",Object(i.b)("inlineCode",{parentName:"p"},"strtoupper")," (or any other callback) is only invoked ",Object(i.b)("strong",{parentName:"p"},"if")," your subject is matched with the pattern."))),Object(i.b)("h3",{id:"arbitrary-return-types"},"Arbitrary return types"),Object(i.b)("p",null,"From within ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," callback, you can return any value:"),Object(i.b)(r.a,{tregx:"return pattern('\\w+')->match('Apples are cool')->first('str_split');",php:"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    return call_user_func('str_split', $match[0]);\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"['A', 'p', 'p', 'l', 'e', 's']"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"first()")," callback accepts all return types, including: numbers, objects, arrays, booleans and ",Object(i.b)("inlineCode",{parentName:"p"},"null"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$pattern = '(?<value>\\d+)(?<unit>cm|mm)';\n$subject = '192mm and 168cm or 18mm and 12cm';\n\npattern($pattern)->match($subject)->first();                 // '192mm'\npattern($pattern)->match($subject)->first('str_split');      // ['1', '9', '2', 'm', 'm']\npattern($pattern)->match($subject)->first('strlen')          // 5\n")),Object(i.b)("h2",{id:"findfirst"},Object(i.b)("inlineCode",{parentName:"h2"},"findFirst()")),Object(i.b)("p",null,"This method allows you to explicitly specify how to handle an unmatched subject. Just chain ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(i.b)("inlineCode",{parentName:"a"},"findFirst()"))," with\none of the following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orreturn"}),Object(i.b)("inlineCode",{parentName:"a"},"orReturn()")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orelse"}),Object(i.b)("inlineCode",{parentName:"a"},"orElse()"))," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first#orthrow"}),Object(i.b)("inlineCode",{parentName:"a"},"orThrow()")),"."),Object(i.b)(r.a,{tregx:"echo pattern('w+')->match('Dog')\n    ->findFirst(function (Detail $match) {\n        // highlight-next-line\n        return \"Yay $match\";\n    })\n    ->orReturn('Aw, man :/');",php:"if (preg::match('/w+/', 'Dog', $match)) {\n    // highlight-next-line\n    echo \"Yay {$match[0]}\";\n}\nelse {\n    echo 'Aw, man :/';\n}",mdxType:"CodeTabs"}),Object(i.b)(r.b,{text:!0,mdxType:"Result"},"Yay Dog"),Object(i.b)("p",null,"Read on to learn more about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(i.b)("inlineCode",{parentName:"a"},"findFirst()")),"."))}p.isMDXComponent=!0},189:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),c=a.n(n),i=a(192),r=a(193),o=a(194),b=a(4),s=a(190),l=a(48),p=a.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(b.a)(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:p.a.code},c.a.createElement(s.a,{className:"language-"+this.language},this.code))},Object(o.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(c.a.Component),d=function(e){var t=e.tregx,a=e.php,n=[t?{label:"T-Regx",value:"t-regx"}:{},a?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return c.a.createElement(i.a,{defaultValue:"t-regx",values:n},t&&c.a.createElement(r.a,{value:"t-regx"},c.a.createElement(m,null,t)),a&&c.a.createElement(r.a,{value:"php"},c.a.createElement(m,null,a)))},h=a(49),u=a.n(h),j=function(e){var t=e.text,a=e.children;return c.a.createElement("div",{className:u.a.result},c.a.createElement(m,{language:t?"text":"php"},a))}}}]);