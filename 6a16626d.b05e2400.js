/*! For license information please see 6a16626d.b05e2400.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return m}));var a=t(1),r=t(6),o=(t(0),t(196)),c=t(199),i=t(198),l={id:"replace-by-map",title:"Replace by map"},p={id:"replace-by-map",title:"Replace by map",description:"There are cases when you have to use more than one replacement, but you also don't need [`Match`](match-details.md) details or",source:"@site/..\\docs\\replace-by-map.md",permalink:"/docs/replace-by-map",lastUpdatedAt:1574937126,sidebar:"docs",previous:{title:"Replace by group",permalink:"/docs/replace-by-group"},next:{title:"Handling user input",permalink:"/docs/handling-user-input"}},s=[{value:"Standard map",id:"standard-map",children:[{value:"Superfluous matches",id:"superfluous-matches",children:[]},{value:"Ignored replacements",id:"ignored-replacements",children:[]}]},{value:"Groups",id:"groups",children:[]}],u={rightToc:s};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are cases when you have to use more than one replacement, but you also don't need ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(o.b)("inlineCode",{parentName:"a"},"Match"))," details or\nany replacement logic, really, so both ",Object(o.b)("inlineCode",{parentName:"p"},"with()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"callback()")," are a little unfit."),Object(o.b)("p",null,"Replacing by map allows T-Regx to save a little performance overhead, by not creating ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(o.b)("inlineCode",{parentName:"a"},"Match"))," object."),Object(o.b)("h2",{id:"standard-map"},"Standard map"),Object(o.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npattern('\\b\\w{3}\\b')->replace($message)->all()->by()->map([\n    'mp3' => 'Audio file',\n    'mp4' => 'Video file',\n    'gif' => 'Animation'\n]);\n"))),Object(o.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio file',\n        'mp4' => 'Video file',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'My words: "Audio file", "Video file", "Animation"\n')),Object(o.b)("p",null,"And of course ",Object(o.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(o.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(o.b)("inlineCode",{parentName:"p"},"only(int)")," modifiers are taken into account."),Object(o.b)("h3",{id:"superfluous-matches"},"Superfluous matches"),Object(o.b)("p",null,"Normally, had you found a match that's not present in your map - ",Object(o.b)("inlineCode",{parentName:"p"},"MissingReplacementKeyException")," would be thrown\n(as long as ",Object(o.b)("inlineCode",{parentName:"p"},"gif")," is matched by your pattern, of course):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npattern('\\w{3}')->replace($message)->all()->by()->map([\n   'mp3'   => 'Audio file',\n   'mp4'   => 'Video file'\n  // 'gif'  => 'Animation'\n]);\n")),Object(o.b)("p",null,"If you don't need to specify all your possible ",Object(o.b)("inlineCode",{parentName:"p"},"[match => replacement]")," pairs, you should use one of the below ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()"),"."),Object(o.b)("h3",{id:"ignored-replacements"},"Ignored replacements"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()")," - superfluous occurrences are left unchanged:"),Object(o.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npattern('\\b\\w{3,4}\\b')->replace($message)->all()->by()->mapIfExists([\n   'mp3' => 'Audio',\n   'gif' => 'Animation'\n]);\n"))),Object(o.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        return $match[0];\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Extensions: Audio, mp4, jpg, jpeg, png, Animation\n")),Object(o.b)("h2",{id:"groups"},"Groups"),Object(o.b)("p",null,"Resolving a replacement based on a ",Object(o.b)("strong",{parentName:"p"},"whole match")," however, is both uncommon and unpractical. It's much more elastic to resolve\nit based on a specific capturing group, using ",Object(o.b)("inlineCode",{parentName:"p"},"by()->group()->map()"),":"),Object(o.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')\n    ->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->map([\n       'google'   => 'Search Engine',\n       'socket'   => 'Documentation',\n       'facebook' => 'Social Portal',\n       't-regx'   => 'Documentation',\n    ])\n    ->orThrow();\n"))),Object(o.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npreg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)#', function (array $match) {\n    // possible invalid group, e.g. \"2group\" or -2\n    validateGroupName('domain');\n\n    $group = $match['domain'];\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (validateGroupMatched('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new GroupNotMatchedException();\n        }\n    }\n\n    $map = [\n        'google'   => 'Search Engine',\n        'socket'   => 'Documentation',\n        'facebook' => 'Social Portal',\n        't-regx'   => 'Documentation',\n    ];\n    if (!array_key_exists($group, $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$group];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $links);\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Links: Search Engine, Documentation, Social Portal, Documentation\n")))}m.isMDXComponent=!0},196:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return t?r.a.createElement(d,i({ref:n},p,{components:t})):r.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},197:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},198:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},199:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(200);var c=function(){return Object(a.useContext)(o.a)},i=t(197),l=t.n(i),p=t(93),s=t.n(p);const u=37,m=39;n.a=function(e){const{block:n,children:t,defaultValue:o,values:i,groupId:p}=e,{tabGroupChoices:b,setTabGroupChoices:d}=c(),[g,f]=Object(a.useState)(o);if(null!=p){const e=b[p];null!=e&&e!==g&&f(e)}const h=e=>{f(e),null!=p&&d(p,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},i.map(({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:l()("tab-item",s.a.tabItem,{"tab-item--active":g===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,n,t)=>{switch(t.keyCode){case m:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case u:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(O,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},n))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter(e=>e.props.value===g)[0]))}},200:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});n.a=r}}]);