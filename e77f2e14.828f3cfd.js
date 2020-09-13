(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),c=(a(0),a(168)),l=a(169),i={id:"replace",title:"Replacing a string"},p={unversionedId:"replace",id:"replace",isDocsHomePage:!1,title:"Replacing a string",description:"Using pattern()->replace() you can:",source:"@site/..\\docs\\replace.mdx",permalink:"/docs/replace",lastUpdatedAt:1596999510,sidebar:"docs",previous:{title:"Handling integers",permalink:"/docs/match-as-int"},next:{title:"Replace with a constant value",permalink:"/docs/replace-with"}},b=[{value:"Limiting replacements",id:"limiting-replacements",children:[]}],o={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," you can:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Limit replacements with:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"replace()->first()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"replace()->all()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"replace()->only(int)")))),Object(c.b)("li",{parentName:"ul"},"replace with a constant value - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/replace-with"}),Object(c.b)("inlineCode",{parentName:"a"},"with()")),"/",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/replace-with"}),Object(c.b)("inlineCode",{parentName:"a"},"withReferences()"))),Object(c.b)("li",{parentName:"ul"},"replace with a computed value - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/replace-callback"}),Object(c.b)("inlineCode",{parentName:"a"},"callback()"))),Object(c.b)("li",{parentName:"ul"},"replace based on an associative array - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/replace-by-map"}),Object(c.b)("inlineCode",{parentName:"a"},"by()->map()"))),Object(c.b)("li",{parentName:"ul"},"replace with a capturing group - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/replace-by-group"}),Object(c.b)("inlineCode",{parentName:"a"},"by()->group()"))),Object(c.b)("li",{parentName:"ul"},"handle subjects that don't match the pattern for replacements - ",Object(c.b)("inlineCode",{parentName:"li"},"otherwise()"),"/",Object(c.b)("inlineCode",{parentName:"li"},"throwingOtherwise()"),"/",Object(c.b)("inlineCode",{parentName:"li"},"returningOtherwise()"))),Object(c.b)("h2",{id:"limiting-replacements"},"Limiting replacements"),Object(c.b)("p",null,"After ",Object(c.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),Object(c.b)(l.a,{tregx:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npattern("\\d+")->replace($subject)->first()->with("___");\npattern("\\d+")->replace($subject)->only(2)->with("___");\npattern("\\d+")->replace($subject)->all()->with("___");',php:'$subject = "I\'m 19, I have 192cm and I was born in 1999";\n\npreg_replace("/\\d+/", "___", $subject, 1);\npreg_replace("/\\d+/", "___", $subject, 2);\npreg_replace("/\\d+/", "___", $subject);',mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},'"I\'m ___, I have 192cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in 1999"\n"I\'m ___, I have ___cm and I was born in ___"'),Object(c.b)("hr",null),Object(c.b)("p",null,"Read on to learn more about replacing with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-with"}),"a constant value"),"."))}s.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n),c=a(172),l=a(173),i=a(171),p=a(47),b=a.n(p);class o extends r.a.Component{render(){return r.a.createElement("div",{className:b.a.code},r.a.createElement(i.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var s=function(e){var t=e.tregx,a=e.php,n=[t?{label:"T-Regx",value:"t-regx"}:{},a?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return r.a.createElement(c.a,{defaultValue:"t-regx",values:n},t&&r.a.createElement(l.a,{value:"t-regx"},r.a.createElement(o,null,t)),a&&r.a.createElement(l.a,{value:"php"},r.a.createElement(o,null,a)))},u=a(48),d=a.n(u),m=({text:e,children:t})=>r.a.createElement("div",{className:d.a.result},r.a.createElement(o,{language:e?"text":"php"},t))}}]);