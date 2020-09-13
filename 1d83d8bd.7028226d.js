(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{169:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a),i=n(172),r=n(173),c=n(171),l=n(47),p=n.n(l);class m extends o.a.Component{render(){return o.a.createElement("div",{className:p.a.code},o.a.createElement(c.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var s=function(e){var t=e.tregx,n=e.php,a=[t?{label:"T-Regx",value:"t-regx"}:{},n?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return o.a.createElement(i.a,{defaultValue:"t-regx",values:a},t&&o.a.createElement(r.a,{value:"t-regx"},o.a.createElement(m,null,t)),n&&o.a.createElement(r.a,{value:"php"},o.a.createElement(m,null,n)))},b=n(48),d=n.n(b),h=({text:e,children:t})=>o.a.createElement("div",{className:d.a.result},o.a.createElement(m,{language:e?"text":"php"},t))},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),i=(n(0),n(168)),r=n(169),c={id:"replace-by-group",title:"Replace by group"},l={unversionedId:"replace-by-group",id:"replace-by-group",isDocsHomePage:!1,title:"Replace by group",description:"Method replace()->by()->group() can be used when you would just like to replace a whole match by one of its capturing group,",source:"@site/..\\docs\\replace-by-group.mdx",permalink:"/docs/replace-by-group",lastUpdatedAt:1596999511,sidebar:"docs",previous:{title:"Replace with callback",permalink:"/docs/replace-callback"},next:{title:"Replace by map",permalink:"/docs/replace-by-map"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Unmatched group",id:"unmatched-group",children:[{value:"<code>orIgnore()</code>",id:"orignore",children:[]},{value:"<code>orEmpty()</code>",id:"orempty",children:[]},{value:"<code>orReturn(string)</code>",id:"orreturnstring",children:[]},{value:"<code>orElse(callable)</code>",id:"orelsecallable",children:[]},{value:"<code>orThrow()</code>",id:"orthrow",children:[]}]},{value:"Identity",id:"identity",children:[]}],m={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->by()->group()")," can be used when you would just like to replace a whole match by one of its capturing group,\noptionally handling what should happen when a group is not matched."),Object(i.b)("p",null,"This is, in fact, a shorthand for a rather common usage of ",Object(i.b)("inlineCode",{parentName:"p"},"callback()")," with a function replacing by a capturing\ngroup - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/replace-by-group#identity"}),"Scroll down to see an example"),"."),Object(i.b)("p",null,"Apart from replacing by an inline group, you can also retrieve matched capturing groups with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-group"}),"inline groups"),"."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"There are several URL addresses in ",Object(i.b)("inlineCode",{parentName:"p"},"$links")," variable. Given a regular expression matching a URL, with a group\ncapturing the URL domain, you can easily leave off only the domain in the matched links:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orThrow();",php:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)#', function ($match) {\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, socket, facebook, t-regx :)'"),Object(i.b)("p",null,"Each matched link was replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," capturing group. In this case, ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," capturing group is not an\noptional group (it's always going to be matched, when the whole pattern is matched), so the matched occurrence is\nalways going to be replaced with it."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Of course, ",Object(i.b)("inlineCode",{parentName:"p"},"NonexistentGroupException")," is thrown when ",Object(i.b)("inlineCode",{parentName:"p"},"by()->group()")," is used with a non-existent group. Likewise,\n",Object(i.b)("inlineCode",{parentName:"p"},"\\InvalidArgumentException")," is thrown for a malformed group, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"-2")," or ",Object(i.b)("inlineCode",{parentName:"p"},'"2name"'),".")),Object(i.b)("h2",{id:"unmatched-group"},"Unmatched group"),Object(i.b)("p",null,"How do you handle unmatched/optional groups?"),Object(i.b)("p",null,"For example, a group ",Object(i.b)("inlineCode",{parentName:"p"},"(?<name>\\w+)?")," is optional. For an occurrence with the optional ",Object(i.b)("inlineCode",{parentName:"p"},"'name'")," group that happened not\nto be matched, you can chose either to ignore the replacement (simply don't perform any replace in the match),\nreplace with a default or an empty string, or call a producer to return what should the match be replaced with."),Object(i.b)("p",null,"You can also chose to throw an exception, if the unmatched group is not supposed to be optional, to ensure integrity."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orIgnore()")," - leaves the match unchanged - doesn't replace the match, if the group itself is not matched"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orEmpty()")," - matched occurrence is replaced with an empty string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orReturn(string)")," - match is replaced with the given ",Object(i.b)("inlineCode",{parentName:"li"},"string")," argument"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElse(callable)")," - uses a callback with ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Match"))," argument, in order to evaluate a replacement"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orThrow()")," - throws a default or a custom exception, just like ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/match-find-first"}),"findFirst()->orThrow()"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"orEmpty()")," is the most performance-light method, because it uses ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace()"),", whereas ",Object(i.b)("inlineCode",{parentName:"p"},"orReturn()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"orIgnore()"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"orElse()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"orThrow()")," use ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace_callback()"),".")),Object(i.b)("p",null,"Now, for the sake of this example, let's say a domain is an optional part of an URL address. Below, you'll find 4\ncode snippets illustrating the usage of each of those:"),Object(i.b)("h3",{id:"orignore"},Object(i.b)("inlineCode",{parentName:"h3"},"orIgnore()")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare simply left as they were (ignored):"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orIgnore();",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return $match[0]; // orIgnore() leaves the match as it was\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return $match[0];\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, http://.io, facebook, https://.com :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Match ",Object(i.b)("inlineCode",{parentName:"li"},"www.google.com")," was replaced with the matched occurrence of it's capturing group - ",Object(i.b)("inlineCode",{parentName:"li"},"google")),Object(i.b)("li",{parentName:"ul"},"Match ",Object(i.b)("inlineCode",{parentName:"li"},"facebook.com")," was replaced with the matched occurrence of it's capturing group - ",Object(i.b)("inlineCode",{parentName:"li"},"facebook")),Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare left unchanged (ignored), in this case.")),Object(i.b)("h3",{id:"orempty"},Object(i.b)("inlineCode",{parentName:"h3"},"orEmpty()")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare replaced with an empty string:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orEmpty();",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return ''; // orEmpty() replaces the match with an empty string\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    // Check between unmatched and matched-empty is unnecessary\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, , facebook,  :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare replaced with an empty string, in this case.")),Object(i.b)("h3",{id:"orreturnstring"},Object(i.b)("inlineCode",{parentName:"h3"},"orReturn(string)")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare replaced with a given parameter string:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orReturn('UNKNOWN');",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return 'UNKNOWN'; // orReturn() replaces the match with a constant string\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return 'UNKNOWN';\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, UNKNOWN, facebook, UNKNOWN :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare replaced with a given ",Object(i.b)("inlineCode",{parentName:"li"},"'UNKNOWN'")," string, in this case.")),Object(i.b)("h3",{id:"orelsecallable"},Object(i.b)("inlineCode",{parentName:"h3"},"orElse(callable)")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare then passed to the producer, which result is then replaced in place of the link:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orElse(function (Match $match) {\n        return \"Not found **$match**\";\n    });",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\n$producer = function (array $match) {\n    return \"Not found **{$match[0]}**\";\n};\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) use ($producer) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return $producer($match); // orElse() uses a callback to replace the subject\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return $producer($match);\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, Not found **http://.io**, facebook, Not found **https://.com** :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so callback\nfunction is called with ",Object(i.b)("inlineCode",{parentName:"li"},"Match")," details (first with ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io"),", and then with ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com"),"), and the link is replaced\nwith a result of that function.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Even this simple T-Regx snippet is represented as a massive PHP code. Using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details#ordinal-value-index"}),Object(i.b)("inlineCode",{parentName:"a"},"Match.index()"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(i.b)("inlineCode",{parentName:"a"},"Match.offset()"))," when\nreplacing would make PHP code even more complex, introducing counting variables and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE")),".")),Object(i.b)("h3",{id:"orthrow"},Object(i.b)("inlineCode",{parentName:"h3"},"orThrow()")),Object(i.b)("p",null,"You can either call this method without parameters, or with your custom exception class name (just like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(i.b)("inlineCode",{parentName:"a"},"findFirst()"))," parameter):"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orThrow(MyCustomException::class);",php:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            throw new MyCustomException(); // orThrow() throws an exception when the group wasn't matched\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            throw new MyCustomException();\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, socket, facebook, t-regx :)'"),Object(i.b)("p",null,"Of course, for subject ",Object(i.b)("inlineCode",{parentName:"p"},"$links")," equal to ",Object(i.b)("inlineCode",{parentName:"p"},"'My links are: www..com'")," (optional group ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," is unmatched) - ",Object(i.b)("inlineCode",{parentName:"p"},"MyCustomException")," would be thrown."),Object(i.b)("h2",{id:"identity"},"Identity"),Object(i.b)("p",null,"As mentioned, ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->by()->group()")," is just a short-hand for ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->callback()"),"."),Object(i.b)("p",null,"The below ",Object(i.b)("inlineCode",{parentName:"p"},"by()->group()")," code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->by()->group('domain')->orXXX();\n")),Object(i.b)("p",null,"is identical to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->callback(function (Match $match) {\n        return $match->group('domain')->orXXX();\n    });\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"by()->group()")," is the most performance-light method, because it doesn't require creating ",Object(i.b)("inlineCode",{parentName:"p"},"Match")," details, for the sake\nof ",Object(i.b)("inlineCode",{parentName:"p"},"callback()"),".")))}s.isMDXComponent=!0}}]);