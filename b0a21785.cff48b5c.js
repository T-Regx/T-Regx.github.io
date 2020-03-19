/*! For license information please see b0a21785.cff48b5c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{240:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return o})),a.d(r,"rightToc",(function(){return c})),a.d(r,"default",(function(){return b}));a(51),a(24),a(19),a(20),a(52),a(0);var t=a(275),n=a(277),l=a(278);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var o={id:"filter",title:"Filter an array"},c=[{value:"Filter a regular array",id:"filter-a-regular-array",children:[]},{value:"Filter an associative array",id:"filter-an-associative-array",children:[]},{value:"Filter by keys",id:"filter-by-keys",children:[]}],u={rightToc:c};function b(e){var r=e.components,a=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(t.b)("wrapper",i({},u,a,{components:r,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Filtering an array, returns a new array with only the values that match the pattern."),Object(t.b)("p",null,"Available methods for ",Object(t.b)("inlineCode",{parentName:"p"},"pattern()->forArray()")," are:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",i({parentName:"li"},{href:"#filter-a-regular-array"}),Object(t.b)("inlineCode",{parentName:"a"},"filter()"))," - filters an array by values (regular array)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",i({parentName:"li"},{href:"#filter-an-associative-array"}),Object(t.b)("inlineCode",{parentName:"a"},"filterAssoc()"))," - filters an array by values, preserving keys (associative array)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",i({parentName:"li"},{href:"#filter-by-keys"}),Object(t.b)("inlineCode",{parentName:"a"},"filterByKeys()"))," - filters an array by keys")),Object(t.b)("h2",{id:"filter-a-regular-array"},"Filter a regular array"),Object(t.b)("p",null,"Method ",Object(t.b)("inlineCode",{parentName:"p"},"filter()")," filters an array and returns values ",Object(t.b)("strong",{parentName:"p"},"re-indexed")," to match the removed elements (unlike ",Object(t.b)("inlineCode",{parentName:"p"},"array_filter()"),")."),Object(t.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(t.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark',\n        'Robert',\n        'lorem impsum',\n        'Jane',\n        'FooBar123'\n    ])\n    ->filter();\n"))),Object(t.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"$input = [\n    'Mark',\n    'Robert',\n    'lorem impsum',\n    'Jane',\n    'FooBar123'\n];\narray_values(preg::grep(\"/[A-Z][a-z]+$/\", $input));\n")))),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"['Mark', 'Robert', 'Jane']\n")),Object(t.b)("p",null,"More precisely it returns ",Object(t.b)("inlineCode",{parentName:"p"},"[0 => 'Mark', 1 => 'Robert', 2 => 'Jane']"),", even though original key for ",Object(t.b)("inlineCode",{parentName:"p"},"'Jane'")," was ",Object(t.b)("inlineCode",{parentName:"p"},"3"),"."),Object(t.b)("h2",{id:"filter-an-associative-array"},"Filter an associative array"),Object(t.b)("p",null,"Method ",Object(t.b)("inlineCode",{parentName:"p"},"filterAssoc()")," works similarly to ",Object(t.b)("inlineCode",{parentName:"p"},"filter()"),", but it preserves the array keys:"),Object(t.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(t.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'm' => 'Mark',\n        'r' => 'Robert',\n        'l' => 'lorem impsum',\n        'j' => 'Jane',\n        's' => 'FooBar123'\n    ])\n    ->filterAssoc();\n"))),Object(t.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"$input = [\n    'm' => 'Mark',\n    'r' => 'Robert',\n    'l' => 'lorem impsum',\n    'j' => 'Jane',\n    's' => 'FooBar123'\n];\npreg::grep(\"/[A-Z][a-z]+$/\", $input);\n")))),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"['m' => 'Mark', 'r' => 'Robert', 'j' => 'Jane']\n")),Object(t.b)("h2",{id:"filter-by-keys"},"Filter by keys"),Object(t.b)("p",null,"With ",Object(t.b)("inlineCode",{parentName:"p"},"filter()")," and ",Object(t.b)("inlineCode",{parentName:"p"},"filterAssoc()"),", only array values are being used to filter the array. With ",Object(t.b)("inlineCode",{parentName:"p"},"filterByKeys()"),", it's the array keys that are used to filter the array. The corresponding values (which can be of type ",Object(t.b)("inlineCode",{parentName:"p"},"mixed"),") are returned unchanged:"),Object(t.b)(n.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(t.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+$')\n    ->forArray([\n        'Mark'          => 'm',\n        'Robert'        => 'r',\n        'lorem impsum'  => 'l',\n        'Jane'          => 'j',\n        'FooBar123'     => 'f'\n    ])\n    ->filterByKeys();\n"))),Object(t.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"$input = [\n    'Mark'         => 'm',\n    'Robert'       => 'r',\n    'lorem impsum' => 'l',\n    'Jane'         => 'j',\n    'FooBar123'    => 'f'\n];\n$filteredKeys = preg::grep(\"/[A-Z][a-z]+$/\", array_keys($input));\narray_intersect_key($input, array_flip($filteredKeys));\n")))),Object(t.b)("pre",null,Object(t.b)("code",i({parentName:"pre"},{className:"language-php"}),"['Mark' => 'm', 'Robert' => 'r', 'Jane' => 'j']\n")))}b.isMDXComponent=!0},275:function(e,r,a){"use strict";a.d(r,"a",(function(){return p})),a.d(r,"b",(function(){return m}));var t=a(0),n=a.n(t);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),b=function(e){var r=n.a.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):o({},r,{},e)),a},p=function(e){var r=b(e.components);return n.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},f=Object(t.forwardRef)((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(a),f=t,m=p["".concat(i,".").concat(f)]||p[f]||s[f]||l;return a?n.a.createElement(m,o({ref:r},u,{components:a})):n.a.createElement(m,o({ref:r},u))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},276:function(e,r,a){var t;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var i=n.apply(null,t);i&&e.push(i)}else if("object"===l)for(var o in t)a.call(t,o)&&t[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},277:function(e,r,a){"use strict";a(24),a(19),a(20);var t=a(0),n=a.n(t),l=a(276),i=a.n(l),o=a(124),c=a.n(o),u=37,b=39;r.a=function(e){var r=e.block,a=e.children,l=e.defaultValue,o=e.values,p=Object(t.useState)(l),s=p[0],f=p[1],m=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":r})},o.map((function(e){var r=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===r,className:i()("tab-item",c.a.tabItem,{"tab-item--active":s===r}),key:r,ref:function(e){return m.push(e)},onKeyDown:function(e){return function(e,r,a){switch(a.keyCode){case b:!function(e,r){var a=e.indexOf(r)+1;e[a]?e[a].focus():e[0].focus()}(e,r);break;case u:!function(e,r){var a=e.indexOf(r)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,r)}}(m,e.target,e)},onFocus:function(){return f(r)},onClick:function(){return f(r)}},a)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(a).filter((function(e){return e.props.value===s}))[0]))}},278:function(e,r,a){"use strict";var t=a(0),n=a.n(t);r.a=function(e){return n.a.createElement("div",null,e.children)}}}]);