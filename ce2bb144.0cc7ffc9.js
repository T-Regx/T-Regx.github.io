(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));a(211);var n=a(207),c=a(208),r=a(209);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const l={id:"match-for-first",title:"Optional matches"},b=[{value:"Optional matches with <code>forFirst()</code>",id:"optional-matches-with-forfirst",children:[{value:"<code>orReturn()</code>",id:"orreturn",children:[]},{value:"<code>orElse()</code>",id:"orelse",children:[]},{value:"<code>orThrow()</code>",id:"orthrow",children:[]},{value:"Custom exceptions for <code>orThrow()</code>",id:"custom-exceptions-for-orthrow",children:[]}]},{value:"I don't like functional",id:"i-dont-like-functional",children:[]}],i={rightToc:b},u="wrapper";function p({components:e,...t}){return Object(n.b)(u,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If you call ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/match-first"}),Object(n.b)("inlineCode",{parentName:"a"},"first()"))," on a subject that isn't matched by a pattern - ",Object(n.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," is thrown. We discussed\nthat in the previous chapter. "),Object(n.b)("p",null,"But what if you ",Object(n.b)("strong",{parentName:"p"},"expected")," the subject not to be matched? And how do you to react to it? "),Object(n.b)("h2",{id:"optional-matches-with-forfirst"},"Optional matches with ",Object(n.b)("inlineCode",{parentName:"h2"},"forFirst()")),Object(n.b)("p",null,"Method ",Object(n.b)("inlineCode",{parentName:"p"},"forFirst()")," can be called with a callback (that accepts ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/match-details"}),Object(n.b)("inlineCode",{parentName:"a"},"Match"))," details) just like ",Object(n.b)("inlineCode",{parentName:"p"},"first()"),". The difference is:\n",Object(n.b)("inlineCode",{parentName:"p"},"forFirst()")," never throws ",Object(n.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException"),", and allows you to control an unmatched subject by appropriate\ncontrol methods: ",Object(n.b)("inlineCode",{parentName:"p"},"orThrow()"),", ",Object(n.b)("inlineCode",{parentName:"p"},"orReturn()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"orElse()"),"."),Object(n.b)("p",null,"For example:"),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"$first = pattern('[0-9]+')->match(\"I'm 19 years old\")\n   ->forFirst(function (Match $match) {\n       return \"I was born $match years ago\";\n   })\n   ->orReturn('Unmatched :/');\n\nreturn $first;\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"if (preg::match('/[0-9]+/', \"I'm 19 years old\", $match)) {\n    $text = $match[0];\n    return \"I was born $text years ago\";\n}\nreturn 'Unmatched :/';\n")))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"'I was born 19 years ago'\n")),Object(n.b)("p",null,"If a match is found, then the result of ",Object(n.b)("inlineCode",{parentName:"p"},"forFirst()")," callback is returned. If a match is not found, however, then the\nhandling of an unmatched subject relies in the chained method."),Object(n.b)("h3",{id:"orreturn"},Object(n.b)("inlineCode",{parentName:"h3"},"orReturn()")),Object(n.b)("p",null,"If a match is not found, it returns a default value."),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"$first = pattern('[0-9]+')->match(\"I'm a dog\")\n    ->forFirst(function (Match $match) {\n        return 'Match is found!';\n    })\n    ->orReturn('Match is not found');\n\nreturn $first;\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"if (preg::match('/[0-9]+/', \"I'm a dog\")) {\n    $first = 'Match is found!';\n} else {\n    $first = 'Match is not found';\n}\n\nreturn $first;\n")))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"'Match is not found'\n")),Object(n.b)("h3",{id:"orelse"},Object(n.b)("inlineCode",{parentName:"h3"},"orElse()")),Object(n.b)("p",null,"If a match is not found, it calls ",Object(n.b)("inlineCode",{parentName:"p"},"orElse()")," callback and uses ",Object(n.b)("em",{parentName:"p"},"it")," to evaluate a return value."),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"$first = pattern('[0-9]+')->match(\"I'm a dog\")\n    ->forFirst(function (Match $match) {\n        return 'Match is found!';\n    })\n    ->orElse(function (NotMatched $notMatched) { \n        return \"I couldn't match subject: \" . $notMatched->subject();\n    });\n    \nreturn $first;\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"$subject = \"I'm a dog\";\nif (preg::match('/[0-9]+/', $subject)) {\n    $first = 'Match is found!';\n} else {\n    $first = \"I couldn't match subject: $subject\";\n}\n\nreturn $first;\n")))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"\"I couldn't match subject: I'm a dog\"\n")),Object(n.b)("h3",{id:"orthrow"},Object(n.b)("inlineCode",{parentName:"h3"},"orThrow()")),Object(n.b)("p",null,"If a match is not found, it throws ",Object(n.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," by default."),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"try {\n    return pattern('[0-9]+')->match(\"I'm a dog\")\n        ->forFirst(function (Match $match) {\n            return 'Match is found!';\n        })\n        ->orThrow();\n}\ncatch (SubjectNotMatchedException $e) {\n    // React to an unmatched subject\n    echo 'Not matched';\n}\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"try {\n    if (preg::match('/[0-9]+/', \"I'm a dog\")) {\n        return 'Match is found!';\n    } \n    throw new SubjectNotMatchedException();\n}\ncatch (SubjectNotMatchedException $e) {\n    // React to an unmatched subject\n    echo 'Not matched';\n}\n")))),Object(n.b)("h3",{id:"custom-exceptions-for-orthrow"},"Custom exceptions for ",Object(n.b)("inlineCode",{parentName:"h3"},"orThrow()")),Object(n.b)("p",null,"You can also supply your own exception class name."),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"class MyException extends \\Exception {}\n\ntry {\n    return pattern('[0-9]+')->match(\"I'm a dog\")\n        ->forFirst(function (Match $match) {\n            return 'Match is found!';\n        })\n        ->orThrow(MyException::class);\n}\ncatch (MyException $e) {\n    // React to an unmatched subject\n    echo 'Not matched';\n}\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"class MyException extends \\Exception {}\n\ntry {\n    if (preg::match('/[0-9]+/', \"I'm a dog\")) {\n        return 'Match is found!';\n    } \n    throw new MyException();\n}\ncatch (MyException $e) {\n    // React to an unmatched subject\n    echo 'Not matched';\n}\n")))),Object(n.b)("p",null,"Of course, your custom exception must meet certain requirements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"It has to be a class")),Object(n.b)("p",{parentName:"li"},"Trying to instantiate interfaces or abstract classes would break our ",Object(n.b)("a",o({parentName:"p"},{href:"whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"'),".\nThe class must be concrete and explicit.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"It has to implement ",Object(n.b)("inlineCode",{parentName:"strong"},"\\Throwable"))),Object(n.b)("p",{parentName:"li"},"Obviously.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"It must have a suitable constructor")),Object(n.b)("p",{parentName:"li"},"The class must be instantiable with one of the following signatures and parameter types."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"__construct()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"__construct($message)"),", where ",Object(n.b)("inlineCode",{parentName:"li"},"$message")," can be a string"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"__construct($message, $subject)"),", where ",Object(n.b)("inlineCode",{parentName:"li"},"$message")," and ",Object(n.b)("inlineCode",{parentName:"li"},"$subject")," can be strings")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Notice, that using ",Object(n.b)("inlineCode",{parentName:"p"},"forFirst()->orThrow()")," without your custom exception is ",Object(n.b)("strong",{parentName:"p"},"identical")," to ",Object(n.b)("inlineCode",{parentName:"p"},"first()"),".")),Object(n.b)("h2",{id:"i-dont-like-functional"},"I don't like functional"),Object(n.b)("p",null,"If you don't like functional programming style, you are free to use ",Object(n.b)("a",o({parentName:"p"},{href:"/docs/match-first"}),Object(n.b)("inlineCode",{parentName:"a"},"first()"))," (which throws an exception)\nand just catch it."),Object(n.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"try {\n    return pattern('[0-9]+')->match(\"I'm a dog\")->first();\n}\ncatch (SubjectNotMatchedException $e) {\n    return 'Some other value';\n}\n"))),Object(n.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-php"}),"try {\n    if (preg::match('/[0-9]+/', \"I'm a dog\", $match)) {\n        return $match[0];\n    }\n    throw new SubjectNotMatchedException();\n}\ncatch (SubjectNotMatchedException $e) {\n    return 'Some other value';\n}\n")))))}p.isMDXComponent=!0},208:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(210),o=a.n(r);t.a=function(e){const{block:t,children:a,defaultValue:r,values:l}=e,[b,i]=Object(n.useState)(r);return c.a.createElement("div",null,c.a.createElement("ul",{className:o()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>c.a.createElement("li",{className:o()("tab-item",{"tab-item--active":b===e}),key:e,onClick:()=>i(e)},t))),c.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===b)[0]))}},209:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}}}]);