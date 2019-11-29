(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{199:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return u}));t(211);var l=t(207),n=t(208),r=t(209);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const b={id:"match-map",title:"Map occurrences"},p=[{value:"Map matched occurrences",id:"map-matched-occurrences",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]},{value:"<code>flatMap()</code>",id:"flatmap",children:[]}],m={rightToc:p},s="wrapper";function u({components:e,...a}){return Object(l.b)(s,c({},m,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Mapping works a bit like a combination of ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match#many"}),Object(l.b)("inlineCode",{parentName:"a"},"all()"))," and ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match-for-each"}),Object(l.b)("inlineCode",{parentName:"a"},"forEach()")),". It returns all\nmatched elements, after they have been iterated (and potentially altered) using ",Object(l.b)("inlineCode",{parentName:"p"},"map()")," callback\n(which accepts ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Match"))," details)."),Object(l.b)("h2",{id:"map-matched-occurrences"},"Map matched occurrences"),Object(l.b)("p",null,"So instead of returning all elements:"),Object(l.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("[\\w\']+")->match("I\'m 19 years old")->all();\n'))),Object(l.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),'preg::match_all("/[\\w\']+/", "I\'m 19 years old", $matches);\nreturn $matches[0];\n')))),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\"I'm\", '19', 'years', 'old']\n")),Object(l.b)("p",null,"...you can map them - to any other value, by callback:"),Object(l.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("[\\w\']+")->match("I\'m 19 years old")->map(function (Match $match) {\n    return strlen($match->text());\n});\n'))),Object(l.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),'preg::match_all("/[\\w\']+/", "I\'m 19 years old", $matches);\nreturn array_map(function ($text) {\n    return strlen($text);\n}, $matches[0]);\n')))),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"[3, 2, 5, 3]\n")),Object(l.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(l.b)("p",null,"You can invoke ",Object(l.b)("inlineCode",{parentName:"p"},"map()")," with any valid PHP ",Object(l.b)("inlineCode",{parentName:"p"},"callable")," which accepts one string parameter (or no parameters) - just\nlike ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match-first"}),Object(l.b)("inlineCode",{parentName:"a"},"first()")),"."),Object(l.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('strtoupper');\n"))),Object(l.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_map('strtoupper', $matches[0]);\n")))),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),'["I\'M", "19", "YEARS", "OLD"]\n')),Object(l.b)("h2",{id:"arbitrary-return-types"},"Arbitrary return types"),Object(l.b)("p",null,"Again, just like ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match-first"}),Object(l.b)("inlineCode",{parentName:"a"},"first()")),", this method can return values of any type, including: objects, arrays,\nbooleans and ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"."),Object(l.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->map('str_split');\n"))),Object(l.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_map('str_split', $matches[0]);\n")))),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\n  ['I', '\\'', 'm'], \n  ['1', '9'], \n  ['y', 'e', 'a', 'r', 's'], \n  ['o', 'l', 'd']\n]\n")),Object(l.b)("h2",{id:"flatmap"},Object(l.b)("inlineCode",{parentName:"h2"},"flatMap()")),Object(l.b)("p",null,"You can just as easily create a flattened map."),Object(l.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(l.b)(r.a,{value:"T-Regx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');\n"))),Object(l.b)(r.a,{value:"PHP",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_merge(...array_map('str_split', $matches[0]));\n")))),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-php"}),"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']\n")),Object(l.b)("p",null,"Read more about ",Object(l.b)("a",c({parentName:"p"},{href:"/docs/match-flat-map"}),Object(l.b)("inlineCode",{parentName:"a"},"flatMap()"))," on the next page."))}u.isMDXComponent=!0},208:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(210),c=t.n(r);a.a=function(e){const{block:a,children:t,defaultValue:r,values:b}=e,[p,m]=Object(l.useState)(r);return n.a.createElement("div",null,n.a.createElement("ul",{className:c()("tabs",{"tabs--block":a})},b.map(({value:e,label:a})=>n.a.createElement("li",{className:c()("tab-item",{"tab-item--active":p===e}),key:e,onClick:()=>m(e)},a))),n.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(t).filter(e=>e.props.value===p)[0]))}},209:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){return n.a.createElement("div",null,e.children)}}}]);