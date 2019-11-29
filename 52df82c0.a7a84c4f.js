(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{136:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return u}));t(211);var n=t(207),l=t(208),r=t(209);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const p={id:"match-flat-map",title:"Map with keys (Flat map)"},b=[{value:"Making a flat map",id:"making-a-flat-map",children:[]},{value:"Return types",id:"return-types",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Mapping with keys",id:"mapping-with-keys",children:[]},{value:"Duplicate keys",id:"duplicate-keys",children:[]}],s={rightToc:b},i="wrapper";function u({components:e,...a}){return Object(n.b)(i,c({},s,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are cases when you would like to create a single list of all your matches. ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," is great for it."),Object(n.b)("h2",{id:"making-a-flat-map"},"Making a flat map"),Object(n.b)("p",null,"Method ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," is basically method ",Object(n.b)("inlineCode",{parentName:"p"},"map()"),", from which you can return multiple values."),Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match('I have 19 trains')->flatMap(function (Match $match) {\n    return [\n        $match->text(), strlen($match)\n    ];\n});\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/\\w+/\", 'I have 19 trains', $matches);\nreturn array_merge(...array_map(function (string $text) {\n    return [\n        $text, strlen($text)\n    ];\n}, $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"['I', 1, 'have', 4, '19', 2, 'trains', 6]\n")),Object(n.b)("h2",{id:"return-types"},"Return types"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," only accepts an ",Object(n.b)("inlineCode",{parentName:"p"},"array")," as its return type. Returning a single element and implicitly creating a one-element\narray under the hood would break our ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"'),"."),Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return $match;  // <- throws InvalidReturnValueException\n});\n"))))," --\x3e",Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return [$match];  // ok\n});\n")))),Object(n.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(n.b)("p",null,"You can invoke ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," with any valid PHP ",Object(n.b)("inlineCode",{parentName:"p"},"callable")," which accepts one string parameter (or no parameters) - just\nlike ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-first"}),Object(n.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-map"}),Object(n.b)("inlineCode",{parentName:"a"},"map()"))," - and returns ",Object(n.b)("inlineCode",{parentName:"p"},"array"),"."),Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_merge(...array_map('str_split', $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']\n")),Object(n.b)("p",null,"The ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(n.b)("inlineCode",{parentName:"a"},"callable"))," passed to ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," must return an array.\n",Object(n.b)("inlineCode",{parentName:"p"},"InvalidReturnValueException")," is thrown, otherwise."),Object(n.b)("h2",{id:"mapping-with-keys"},"Mapping with keys"),Object(n.b)("p",null,"Because ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," receives an array from its callback, it's possible to also return an associative array with\nspecified keys:"),Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [$match->text() => $match->offset()];   // offset is UTF-8 safe\n});\n'))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'preg::match_all("/\\w+/", "Apples are cool", $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) {\n    return [$match[0] => $match[1]];    // offset is given in bytes\n}, $matches[0]));\n')))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\n    'Apples' => 0,\n    'are'    => 7,\n    'cool'   => 11\n]\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Keep in mind that ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," uses ",Object(n.b)("inlineCode",{parentName:"p"},"array_merge()")," to flatten the results! So If you use ",Object(n.b)("inlineCode",{parentName:"p"},"int")," as a key, or even\na ",Object(n.b)("inlineCode",{parentName:"p"},"string")," with numeric values (like ",Object(n.b)("inlineCode",{parentName:"p"},"'19'"),") they will be ",Object(n.b)("strong",{parentName:"p"},"reindexed")," by ",Object(n.b)("inlineCode",{parentName:"p"},"array_merge()"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("inlineCode",{parentName:"p"},"Match.offset()")," returns offset as a ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),"valid UTF-8 sequence"),", whereas ",Object(n.b)("inlineCode",{parentName:"p"},"preg::match_all"),"\ncounts them as ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),"bytes"),". To return bytes number with T-Regx as well,\nuse ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(n.b)("inlineCode",{parentName:"a"},"byteOffset()")),".")),Object(n.b)("h2",{id:"duplicate-keys"},"Duplicate keys"),Object(n.b)("p",null,"Duplicate keys are not allowed in PHP arrays, so they'll only appear once in the results."),Object(n.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [\n        $match->text() => $match->offset(),   // offset is UTF-8 safe\n        \'subject\'      => $match->subject()\n    ];\n});\n'))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'Apples are cool';\npreg::match_all(\"/\\w+/\", $subject, $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) use ($subject) {\n    return [\n        $match[0] => $match[1],   // offset is given in bytes\n        'subject' => $subject\n    ];\n}, $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\n    'Apples'  => 0,\n    'subject' => \"Apples are cool\",\n    'are'     => 7,\n    'cool'    => 11\n]\n")))}u.isMDXComponent=!0},208:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(210),c=t.n(r);a.a=function(e){const{block:a,children:t,defaultValue:r,values:p}=e,[b,s]=Object(n.useState)(r);return l.a.createElement("div",null,l.a.createElement("ul",{className:c()("tabs",{"tabs--block":a})},p.map(({value:e,label:a})=>l.a.createElement("li",{className:c()("tab-item",{"tab-item--active":b===e}),key:e,onClick:()=>s(e)},a))),l.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===b)[0]))}},209:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("div",null,e.children)}}}]);