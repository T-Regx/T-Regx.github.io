(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{163:function(e,r,t){"use strict";t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return f}));var a=t(162),n=t(3),i=t(0),l=t.n(i),o=t(166),p=t(167),s=t(165),c=t(47),u=t.n(c),b=function(e){function r(){return e.apply(this,arguments)||this}return Object(n.a)(r,e),r.prototype.render=function(){return l.a.createElement("div",{className:u.a.code},l.a.createElement(s.a,{className:"language-"+this.language},this.code))},Object(a.a)(r,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),r}(l.a.Component),y=function(e){function r(){return e.apply(this,arguments)||this}return Object(n.a)(r,e),r.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&l.a.createElement(p.a,{value:"t-regx"},l.a.createElement(b,null,this.props.tregx)),this.props.php&&l.a.createElement(p.a,{value:"php"},l.a.createElement(b,null,this.props.php))))},Object(a.a)(r,[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}]),r}(l.a.Component),d=t(48),m=t.n(d),f=function(e){var r=e.text,t=e.children;return l.a.createElement("div",{className:m.a.result},l.a.createElement(b,{language:r?"text":"php"},t))}},62:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var a=t(2),n=t(6),i=(t(0),t(161)),l=t(163),o={id:"filter",title:"Filter an array"},p={unversionedId:"filter",id:"filter",isDocsHomePage:!1,title:"Filter an array",description:"Filtering an array, returns a new array with only the values that match the pattern.",source:"@site/..\\docs\\filter.mdx",permalink:"/docs/filter",lastUpdatedAt:1586997896,sidebar:"docs",previous:{title:"Split a string",permalink:"/docs/split"},next:{title:"Iterator",permalink:"/docs/match-iterator"}},s=[{value:"Filter a regular array",id:"filter-a-regular-array",children:[]},{value:"Filter an associative array",id:"filter-an-associative-array",children:[]},{value:"Filter by keys",id:"filter-by-keys",children:[]}],c={rightToc:s};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Filtering an array, returns a new array with only the values that match the pattern."),Object(i.b)("p",null,"Available methods for ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->forArray()")," are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#filter-a-regular-array"}),Object(i.b)("inlineCode",{parentName:"a"},"filter()"))," - filters an array by values"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#filter-an-associative-array"}),Object(i.b)("inlineCode",{parentName:"a"},"filterAssoc()"))," - filters an array by values, preserving keys (associative array)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#filter-by-keys"}),Object(i.b)("inlineCode",{parentName:"a"},"filterByKeys()"))," - filters an array by keys")),Object(i.b)("h2",{id:"filter-a-regular-array"},"Filter a regular array"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," filters an array and returns values ",Object(i.b)("strong",{parentName:"p"},"re-indexed")," to match the removed elements (unlike ",Object(i.b)("inlineCode",{parentName:"p"},"array_filter()"),")."),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark',\n        'Robert',\n        'lorem impsum',\n        'Jane',\n        'FooBar123'\n    ])\n    ->filter();",php:"$input = [\n    'Mark',\n    'Robert',\n    'lorem impsum',\n    'Jane',\n    'FooBar123'\n];\narray_values(preg::grep(\"/[A-Z][a-z]+$/\", $input));",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['Mark', 'Robert', 'Jane'] "),Object(i.b)("p",null,"More precisely it returns ",Object(i.b)("inlineCode",{parentName:"p"},"[0 => 'Mark', 1 => 'Robert', 2 => 'Jane']"),", even though original key for ",Object(i.b)("inlineCode",{parentName:"p"},"'Jane'")," was ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"."),Object(i.b)("h2",{id:"filter-an-associative-array"},"Filter an associative array"),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"filterAssoc()")," works similarly to ",Object(i.b)("inlineCode",{parentName:"p"},"filter()"),", but it preserves the array keys:"),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'm' => 'Mark',\n        'r' => 'Robert',\n        'l' => 'lorem impsum',\n        'j' => 'Jane',\n        's' => 'FooBar123'\n    ])\n    ->filterAssoc();",php:"$input = [\n    'm' => 'Mark',\n    'r' => 'Robert',\n    'l' => 'lorem impsum',\n    'j' => 'Jane',\n    's' => 'FooBar123'\n];\npreg::grep(\"/[A-Z][a-z]+$/\", $input);",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['m' => 'Mark', 'r' => 'Robert', 'j' => 'Jane']"),Object(i.b)("h2",{id:"filter-by-keys"},"Filter by keys"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"filter()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"filterAssoc()"),", only array values are being used to filter the array. With ",Object(i.b)("inlineCode",{parentName:"p"},"filterByKeys()"),", it's the array keys that are used to filter the array. The corresponding values (which can be of type ",Object(i.b)("inlineCode",{parentName:"p"},"mixed"),") are returned unchanged:"),Object(i.b)(l.a,{tregx:"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark'          => 'm',\n        'Robert'        => 'r',\n        'lorem impsum'  => 'l',\n        'Jane'          => 'j',\n        'FooBar123'     => 'f'\n    ])\n    ->filterByKeys();",php:"$input = [\n    'Mark'         => 'm',\n    'Robert'       => 'r',\n    'lorem impsum' => 'l',\n    'Jane'         => 'j',\n    'FooBar123'    => 'f'\n];\n$filteredKeys = preg::grep(\"/[A-Z][a-z]+$/\", array_keys($input));\narray_intersect_key($input, array_flip($filteredKeys));",mdxType:"CodeTabs"}),Object(i.b)(l.b,{php:!0,mdxType:"Result"},"['Mark' => 'm', 'Robert' => 'r', 'Jane' => 'j']"))}u.isMDXComponent=!0}}]);