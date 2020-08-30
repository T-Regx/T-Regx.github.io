(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a),r=n(165),c=n(166),o=n(164),s=n(47),l=n.n(s);class p extends i.a.Component{render(){return i.a.createElement("div",{className:l.a.code},i.a.createElement(o.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var b=({tregx:e,php:t})=>{const n=[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter(e=>e.value);return i.a.createElement(r.a,{defaultValue:"t-regx",values:n,groupId:"language"},e&&i.a.createElement(c.a,{value:"t-regx"},i.a.createElement(p,null,e)),t&&i.a.createElement(c.a,{value:"php"},i.a.createElement(p,null,t)))},u=n(48),d=n.n(u),m=({text:e,children:t})=>i.a.createElement("div",{className:d.a.result},i.a.createElement(p,{language:e?"text":"php"},t))},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(161)),c=n(162),o={id:"delimiters",title:"Automatic delimiters"},s={unversionedId:"delimiters",id:"delimiters",isDocsHomePage:!1,title:"Automatic delimiters",description:"This chapter doesn't contain PHP code snippets, because PHP PCRE require delimiters. There is no way to omit them",source:"@site/..\\docs\\delimiters.mdx",permalink:"/docs/delimiters",lastUpdatedAt:1596999510,sidebar:"docs",previous:{title:"Composite Pattern",permalink:"/docs/composite-pattern"},next:{title:"Count occurrences",permalink:"/docs/count"}},l=[{value:"Flags",id:"flags",children:[]},{value:"I want to break it",id:"i-want-to-break-it",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(r.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE require delimiters. There is no way to omit them\nin Vanilla PHP.")),Object(r.b)("p",null,"Thanks to automatic delimiters, one can use regular expressions without ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/overview#brain-strain"}),"brain strain")," and without spending time,\nchoosing a suitable delimiter."),Object(r.b)(c.a,{tregx:"pattern('#[A-Z]/[a-z]+')->match($subject)->all();",php:"preg_match_all('%#[A-Z]/[a-z]+%', $subject);",mdxType:"CodeTabs"}),Object(r.b)("p",null,"We can see it for ourselves, using ",Object(r.b)("inlineCode",{parentName:"p"},"delimiter")," method:"),Object(r.b)(c.a,{tregx:"echo pattern('Welcome/Or not')->delimited() . \"\\n\";\necho pattern('https://github.com#heading')->delimited() . \"\\n\";\necho pattern('https://github.com#heading?key=hello%20there')->delimited() . \"\\n\";",mdxType:"CodeTabs"}),Object(r.b)(c.b,{text:!0,mdxType:"Result"},"#Welcome/Or not#\n%https://github.com#heading%\n~https://github.com#heading?key=hello%20there~\n"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If the was constructed with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),", ",Object(r.b)("inlineCode",{parentName:"p"},"delimiter()")," returns the pattern unchanged.")),Object(r.b)("h2",{id:"flags"},"Flags"),Object(r.b)("p",null,"There are two ways of passing flags:"),Object(r.b)("p",null,"Either pass a second argument to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"pattern()")),"/",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"Pattern::of()")),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"// global function\npattern('[A-Z][a-z]+', 'i')->match($subject)->first();\n\n// static method\nPattern::of('[A-Z][a-z]+', 'i')->match($subject)->first();\n")),Object(r.b)("p",null,"or use an old-school pattern:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z][a-z]+/i')->match($subject)->first();\n")),Object(r.b)("h2",{id:"i-want-to-break-it"},"I want to break it"),Object(r.b)("p",null,"T-Regx has a set of predefined, suitable delimiters (like ",Object(r.b)("inlineCode",{parentName:"p"},"/"),", ",Object(r.b)("inlineCode",{parentName:"p"},"#"),", ",Object(r.b)("inlineCode",{parentName:"p"},"~"),", ",Object(r.b)("inlineCode",{parentName:"p"},"%"),", etc.) and simply uses the first one, that\ndoesn't occur in your pattern. If you exhaust each of them; if you use every possible, predefined,\nsuitable delimiter - it will throw ",Object(r.b)("inlineCode",{parentName:"p"},"ExplicitDelimiterRequiredException"),"."),Object(r.b)("p",null,"In that case, you simply have to use an explicit delimiter with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(r.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),"."),Object(r.b)("p",null,"If you think another automatic delimiter can be used, please create ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/issues/new/choose"}),"a github issue"),"."))}b.isMDXComponent=!0}}]);