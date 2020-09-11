(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(167)),l=a(168),o={id:"valid",title:"Validate a pattern"},p={unversionedId:"valid",id:"valid",isDocsHomePage:!1,title:"Validate a pattern",description:"This chapter doesn't contain PHP code snippets, because PHP PCRE doesn't provide a way to validate patterns.",source:"@site/..\\docs\\valid.mdx",permalink:"/docs/valid",lastUpdatedAt:1586367925,sidebar:"docs",previous:{title:"Quote regular expression",permalink:"/docs/quote"},next:{title:"Split a string",permalink:"/docs/split"}},c=[],d={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(i.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE doesn't provide a way to validate patterns.")),Object(i.b)("p",null,"You can check whether a pattern is valid with ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," method."),Object(i.b)(l.a,{tregx:"pattern('I am a valid pattern')->valid();",mdxType:"CodeTabs"}),Object(i.b)(l.b,{mdxType:"Result"},"true"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Remember, ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," doesn't throw any exception nor issues any warnings. It only returns ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"/",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)(l.a,{tregx:"pattern('I am an (( invalid }} pattern')->valid();",mdxType:"CodeTabs"}),Object(i.b)(l.b,{mdxType:"Result"},"false"),Object(i.b)("h1",{id:"old-school-patterns"},"Old-school patterns"),Object(i.b)("p",null,"Undelimited patterns can be validated with ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::of()"),". To validate old-school patterns (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"/Hello/i"),"), use ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),":"),Object(i.b)(l.a,{tregx:"Pattern::pcre('/I am an valid pattern/m')->valid();",mdxType:"CodeTabs"}),Object(i.b)(l.b,{mdxType:"Result"},"true"))}s.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n),i=a(171),l=a(172),o=a(170),p=a(47),c=a.n(p);class d extends r.a.Component{render(){return r.a.createElement("div",{className:c.a.code},r.a.createElement(o.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var s=({tregx:e,php:t})=>{const a=[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter(e=>e.value);return r.a.createElement(i.a,{defaultValue:"t-regx",values:a,groupId:"language"},e&&r.a.createElement(l.a,{value:"t-regx"},r.a.createElement(d,null,e)),t&&r.a.createElement(l.a,{value:"php"},r.a.createElement(d,null,t)))},u=a(48),b=a.n(u),m=({text:e,children:t})=>r.a.createElement("div",{className:b.a.result},r.a.createElement(d,{language:e?"text":"php"},t))}}]);