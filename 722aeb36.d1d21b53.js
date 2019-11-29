(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(211);var a=n(207),l=n(208),i=n(209);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const r={id:"split",title:"Split a string"},c=[{value:"Excluding the delimiter",id:"excluding-the-delimiter",children:[]},{value:"Including the delimiter",id:"including-the-delimiter",children:[]},{value:"Filtering out empty values",id:"filtering-out-empty-values",children:[]},{value:"Cleaning the mess after PHP",id:"cleaning-the-mess-after-php",children:[]}],b={rightToc:c},u="wrapper";function s({components:e,...t}){return Object(a.b)(u,p({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"T-Regx also allows to split a string by regular expression. You need to explicitly specify whether to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Include a delimiter or not"),Object(a.b)("li",{parentName:"ul"},"Filter out empty cuts or not")),Object(a.b)("p",null,"To include a delimiter while splitting a string use ",Object(a.b)("inlineCode",{parentName:"p"},"inc()"),". To exclude it, use ",Object(a.b)("inlineCode",{parentName:"p"},"ex()"),". To filter out empty cuts, prepend\n",Object(a.b)("inlineCode",{parentName:"p"},"ex()"),"/",Object(a.b)("inlineCode",{parentName:"p"},"inc()")," with chained ",Object(a.b)("inlineCode",{parentName:"p"},"filter()"),"."),Object(a.b)("h2",{id:"excluding-the-delimiter"},"Excluding the delimiter"),Object(a.b)("p",null,"Splitting a string, while excluding a delimiter is done using ",Object(a.b)("inlineCode",{parentName:"p"},"ex()")," method:"),Object(a.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern('[ ,]{2}')->split('Cersei, Joffrey, Ilyn Payne, The Hound')->ex();\n"))),Object(a.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"preg::split('/[ ,]{2}/', 'Cersei, Joffrey, Ilyn Payne, The Hound');\n")))),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"['Cersei', 'Joffrey', 'Ilyn Payne', 'The Hound']\n")),Object(a.b)("h2",{id:"including-the-delimiter"},"Including the delimiter"),Object(a.b)("p",null,"Splitting a string, while including a delimiter is done using ",Object(a.b)("inlineCode",{parentName:"p"},"inc()")," method:"),Object(a.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern('([ ,]{2})')->split('Cersei, Joffrey, Ilyn Payne, The Hound')->inc();\n"))),Object(a.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"preg::split('/([ ,]{2})/', 'Cersei, Joffrey, Ilyn Payne, The Hound', -1, PREG_SPLIT_DELIM_CAPTURE);\n")))),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"['Cersei', ', ', 'Joffrey', ', ', 'Ilyn Payne', ', ', 'The Hound']\n")),Object(a.b)("h2",{id:"filtering-out-empty-values"},"Filtering out empty values"),Object(a.b)("p",null,"If a delimiter appears twice in a subject without any characters in between - an empty string would be returned\nin that place:"),Object(a.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern(',')->split('One,Two,,Three')->ex();\n"))),Object(a.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"preg::split('/,/', 'One,Two,,Three');\n")))),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"['One', 'Two', '', 'Three'];\n//             \u2191\n//             empty string between delimiters\n")),Object(a.b)("p",null,"To avoid that, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"filter()->ex()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"filter()->inc()")," which utilize ",Object(a.b)("a",p({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-split.php"}),Object(a.b)("inlineCode",{parentName:"a"},"PREG_SPLIT_NO_EMPTY"))," flag to filter out\nempty strings:"),Object(a.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern(',')->split('One,Two,,Three')->filter()->ex();\n"))),Object(a.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"preg::split('/,/', 'One,Two,,Three', -1, PREG_SPLIT_NO_EMPTY);\n")))),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"['One', 'Two', 'Three'];\n")),Object(a.b)("h2",{id:"cleaning-the-mess-after-php"},"Cleaning the mess after PHP"),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"split()->inc()")," is used, but without any ",Object(a.b)("a",p({parentName:"p"},{href:"/docs/match-groups"}),"capturing group"),":"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern(',')->split('Cersei, Joffrey, Ilyn Payne, The Hound')->inc();\n//       \u2191\n//       no capturing group\n")),Object(a.b)("p",null,"...then ",Object(a.b)("inlineCode",{parentName:"p"},"MissingSplitDelimiterGroupException")," will be thrown."),Object(a.b)("p",null,"This is because of ",Object(a.b)("a",p({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-split.php"}),Object(a.b)("inlineCode",{parentName:"a"},"preg_split()"))," flag ",Object(a.b)("a",p({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-split.php"}),Object(a.b)("inlineCode",{parentName:"a"},"PREG_SPLIT_NO_EMPTY"))," bad design."),Object(a.b)("p",null,"It promises to include the delimiter, but unfortunately, does so ",Object(a.b)("strong",{parentName:"p"},"only")," with the part of the delimiter that's inside\na capturing group. If there's no capturing group in the pattern, ",Object(a.b)("a",p({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-split.php"}),Object(a.b)("inlineCode",{parentName:"a"},"PREG_SPLIT_DELIM_CAPTURE"))," has no effect\n(which makes no sense for us)."),Object(a.b)("p",null,"For that reason (and for the sake of ",Object(a.b)("a",p({parentName:"p"},{href:"/docs/whats-the-point#t-regx-to-the-rescue"}),"explicity"),") - T-Regx won't allow you to use\n",Object(a.b)("inlineCode",{parentName:"p"},"split()->inc()")," with a pattern that lacks an explicit capturing group:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To exclude the delimiter: use ",Object(a.b)("inlineCode",{parentName:"p"},"ex()"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To include the delimiter: use ",Object(a.b)("inlineCode",{parentName:"p"},"inc()")," and add a capturing group:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",p({parentName:"pre"},{className:"language-php"}),"pattern('(,)')->split('Cersei, Joffrey, Ilyn Payne, The Hound')->inc();\n//        \u2191\n//        explicit capturing group\n")))))}s.isMDXComponent=!0},208:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(210),p=n.n(i);t.a=function(e){const{block:t,children:n,defaultValue:i,values:r}=e,[c,b]=Object(a.useState)(i);return l.a.createElement("div",null,l.a.createElement("ul",{className:p()("tabs",{"tabs--block":t})},r.map(({value:e,label:t})=>l.a.createElement("li",{className:p()("tab-item",{"tab-item--active":c===e}),key:e,onClick:()=>b(e)},t))),l.a.createElement("div",{className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===c)[0]))}},209:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);