(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{181:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a),o=t(185),r=t(186),p=t(187),c=t(4),l=t(182),s=t(48),m=t.n(s),u=function(e){function n(){return e.apply(this,arguments)||this}return Object(c.a)(n,e),n.prototype.render=function(){return i.a.createElement("div",{className:m.a.code},i.a.createElement(l.a,{className:"language-"+this.language},this.code))},Object(p.a)(n,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),n}(i.a.Component),d=function(e){var n=e.tregx,t=e.php,a=[n?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return i.a.createElement(o.a,{defaultValue:"t-regx",values:a},n&&i.a.createElement(r.a,{value:"t-regx"},i.a.createElement(u,null,n)),t&&i.a.createElement(r.a,{value:"php"},i.a.createElement(u,null,t)))},b=t(49),g=t.n(b),h=function(e){var n=e.text,t=e.children;return i.a.createElement("div",{className:g.a.result},i.a.createElement(u,{language:n?"text":"php"},t))}},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return m}));var a=t(2),i=t(6),o=(t(0),t(180)),r=t(181),p={id:"replace-by-map",title:"Replace by map"},c={unversionedId:"replace-by-map",id:"replace-by-map",isDocsHomePage:!1,title:"Replace by map",description:"There are cases when you have to use more than one replacement (so with() won't work),",source:"@site/../docs/replace-by-map.mdx",slug:"/replace-by-map",permalink:"/docs/replace-by-map",version:"current",lastUpdatedAt:1611005578,sidebar:"docs",previous:{title:"Replace by group",permalink:"/docs/replace-by-group"},next:{title:"Handling user input",permalink:"/docs/handling-user-input"}},l=[{value:"Standard map",id:"standard-map",children:[{value:"Undefined mapping",id:"undefined-mapping",children:[]},{value:"Ignored replacements",id:"ignored-replacements",children:[]}]},{value:"Groups",id:"groups",children:[]}],s={rightToc:l};function m(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are cases when you have to use more than one replacement (so ",Object(o.b)("inlineCode",{parentName:"p"},"with()")," won't work),\nbut you also don't need ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(o.b)("inlineCode",{parentName:"a"},"Match"))," details or\nany replacement logic, really (so ",Object(o.b)("inlineCode",{parentName:"p"},"callback()")," is a little too much)."),Object(o.b)("h2",{id:"standard-map"},"Standard map"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->all()->by()->map()")," to replace a matched, predefined value (",Object(o.b)("inlineCode",{parentName:"p"},'"mp3"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"mp4"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"gif"'),")\nby its direct counter-part (",Object(o.b)("inlineCode",{parentName:"p"},"'Audio file'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'Video file'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'Animation'"),"):"),Object(o.b)(r.a,{tregx:"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npattern('\\b\\w{3}\\b')->replace($message)->all()->by()->map([\n    'mp3' => 'Audio file',\n    'mp4' => 'Video file',\n    'gif' => 'Animation'\n]);",php:"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio file',\n        'mp4' => 'Video file',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);",mdxType:"CodeTabs"}),Object(o.b)(r.b,{text:!0,mdxType:"Result"},'My words: "Audio file", "Video file", "Animation"'),Object(o.b)("p",null,"Here, we used ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->all()")," as an example, but of course ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->first()")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"replace()->only(int)")," could be used and would replace only the first, or the first few matches."),Object(o.b)("h3",{id:"undefined-mapping"},"Undefined mapping"),Object(o.b)("p",null,"Normally, had you matched a string that's not present in your map, a ",Object(o.b)("inlineCode",{parentName:"p"},"MissingReplacementKeyException")," would be thrown:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$message = 'My words: \"mp3\", \"mp4\", \"xxx\"';\n\npattern('\\w{3}')->replace($message)->all()->by()->map([\n   'mp3'  => 'Audio file',\n   'mp4'  => 'Video file',\n   'gif'  => 'Animation'\n]);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MissingReplacementKeyException")," is a safe-guard, since ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," is supposed to be only used with a predefined\nset of expected matches, and if a different string is matched (like ",Object(o.b)("inlineCode",{parentName:"p"},'"xxx"'),"), that's a heads up\nthat perhaps something went wrong. Either the map was incomplete, or the pattern allowed some unexpected values."),Object(o.b)("h3",{id:"ignored-replacements"},"Ignored replacements"),Object(o.b)("p",null,"On the other hand, if you want to ignore unexpected values - use ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()"),"."),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()"),", superfluous occurrences are left unchanged:"),Object(o.b)(r.a,{tregx:"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npattern('\\b\\w{3,4}\\b')->replace($message)->all()->by()->mapIfExists([\n   'mp3' => 'Audio',\n   'gif' => 'Animation'\n]);",php:"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        return $match[0];\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);",mdxType:"CodeTabs"}),Object(o.b)(r.b,{text:!0,mdxType:"Result"},"Extensions: Audio, mp4, jpg, jpeg, png, Animation"),Object(o.b)("h2",{id:"groups"},"Groups"),Object(o.b)("p",null,"Resolving a replacement based on a ",Object(o.b)("strong",{parentName:"p"},"whole match")," however, is both uncommon and unpractical. It's much more elastic to resolve\nit based on a specific capturing group, using ",Object(o.b)("inlineCode",{parentName:"p"},"by()->group()->map()"),"."),Object(o.b)("p",null,"Remember, that groups can be matched or not matched, so we need to specify how to\nhandle an unmatched group. In this case, we'll use ",Object(o.b)("inlineCode",{parentName:"p"},"orElseThrow()"),", since we don't\nexpect the group to ever be unmatched."),Object(o.b)(r.a,{tregx:"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')\n    ->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->map([\n       'google'   => 'Search Engine',\n       'socket'   => 'Documentation',\n       'facebook' => 'Social Portal',\n       't-regx'   => 'Documentation',\n    ])\n    ->orElseThrow();",php:"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npreg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)#', function (array $match) {\n    // possible invalid group, e.g. \"2group\" or -2\n    validateGroupName('domain');\n\n    $group = $match['domain'];\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (validateGroupMatched('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new GroupNotMatchedException();\n        }\n    }\n\n    $map = [\n        'google'   => 'Search Engine',\n        'socket'   => 'Documentation',\n        'facebook' => 'Social Portal',\n        't-regx'   => 'Documentation',\n    ];\n    if (!array_key_exists($group, $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$group];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $links);",mdxType:"CodeTabs"}),Object(o.b)(r.b,{text:!0,mdxType:"Result"},"Links: Search Engine, Documentation, Social Portal, Documentation"))}m.isMDXComponent=!0}}]);