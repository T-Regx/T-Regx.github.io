(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),i=(n(0),n(200)),r=n(202),c={id:"replace-by-group",title:"Replace by group"},l={unversionedId:"replace-by-group",id:"replace-by-group",isDocsHomePage:!1,title:"Replace by group",description:"Method replace()->by()->group() can be used when you would just like to replace a whole match by one of its capturing group,",source:"@site/../docs/replace-by-group.mdx",slug:"/replace-by-group",permalink:"/docs/replace-by-group",version:"current",lastUpdatedAt:1611615683,sidebar:"docs",previous:{title:"Replace with callback",permalink:"/docs/replace-callback"},next:{title:"Replace by map",permalink:"/docs/replace-by-map"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Unmatched group",id:"unmatched-group",children:[{value:"<code>orElseIgnore()</code>",id:"orelseignore",children:[]},{value:"<code>orElseEmpty()</code>",id:"orelseempty",children:[]},{value:"<code>orElseWith(string)</code>",id:"orelsewithstring",children:[]},{value:"<code>orElseCalling(callable)</code>",id:"orelsecallingcallable",children:[]},{value:"<code>orElseThrow()</code>",id:"orelsethrow",children:[]}]},{value:"Identity",id:"identity",children:[]}],s={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Method ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->by()->group()")," can be used when you would just like to replace a whole match by one of its capturing group,\noptionally handling what should happen when a group is not matched."),Object(i.b)("p",null,"This is, in fact, a shorthand for a rather common usage of ",Object(i.b)("inlineCode",{parentName:"p"},"callback()")," with a function replacing by a capturing\ngroup - ",Object(i.b)("a",{parentName:"p",href:"/docs/replace-by-group#identity"},"scroll down to see an example"),"."),Object(i.b)("p",null,"Apart from replacing by an inline group, you can also retrieve matched capturing groups with ",Object(i.b)("a",{parentName:"p",href:"/docs/match-group"},"inline groups"),"."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"There are several URL addresses in ",Object(i.b)("inlineCode",{parentName:"p"},"$links")," variable. Given a regular expression matching a URL, with a group\ncapturing the URL domain, you can easily leave off only the domain in the matched links:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseThrow();",php:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            throw new GroupNotMatchedException(); // orElseThrow() throws\n        }\n        throw new NonexistentGroupException('domain');\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return new GroupNotMatchedException(); // orElseThrow() throws\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, socket, facebook, t-regx :)'"),Object(i.b)("p",null,"Each matched link was replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," capturing group. In this case, ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," capturing group is not an\noptional group (it's always going to be matched, when the whole pattern is matched), so the matched occurrence is\nalways going to be replaced with it."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"NonexistentGroupException")," is thrown when ",Object(i.b)("inlineCode",{parentName:"p"},"by()->group()")," is used with a non-existent group. Likewise,\n",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(i.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," is thrown for a malformed group, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"-2")," or ",Object(i.b)("inlineCode",{parentName:"p"},'"2name"'),"."))),Object(i.b)("h2",{id:"unmatched-group"},"Unmatched group"),Object(i.b)("p",null,"How do you handle unmatched/optional groups?"),Object(i.b)("p",null,"For example, a group ",Object(i.b)("inlineCode",{parentName:"p"},"(?<name>\\w+)?")," is optional. For an occurrence with the optional ",Object(i.b)("inlineCode",{parentName:"p"},"'name'")," group that happened not\nto be matched, you can chose either to ignore the replacement (simply don't perform any replace in the match),\nreplace with a default or an empty string, or call a producer to return what should the match be replaced with."),Object(i.b)("p",null,"You can also chose to throw an exception, if the unmatched group is not supposed to be optional, to ensure integrity."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElseIgnore()")," - leaves the match unchanged - doesn't replace the match, if the group itself is not matched"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElseEmpty()")," - matched occurrence is replaced with an empty string (default for PHP regexp)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElseWith(string)")," - match is replaced with the given ",Object(i.b)("inlineCode",{parentName:"li"},"string")," argument"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElseCalling(callable)")," - uses a callback with ",Object(i.b)("a",{parentName:"li",href:"/docs/match-details"},Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," argument, in order to evaluate a replacement"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orElseThrow()")," - throws a default or a custom exception, just like ",Object(i.b)("a",{parentName:"li",href:"/docs/match-find-first"},"findFirst()->orThrow()"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Performance")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"orElseEmpty()")," is the most performance-light method, because it uses ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-replace.php"},Object(i.b)("inlineCode",{parentName:"a"},"preg_replace()")),", whereas ",Object(i.b)("inlineCode",{parentName:"p"},"orElseWith()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"orElseIgnore()"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"orElseCalling()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"orElseThrow()")," use ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-replace-callback.php"},Object(i.b)("inlineCode",{parentName:"a"},"preg_replace_callback()")),"."))),Object(i.b)("p",null,"Now, for the sake of this example, let's say a domain is an optional part of an URL address. Below, you'll find 4\ncode snippets illustrating the usage of each of those:"),Object(i.b)("h3",{id:"orelseignore"},Object(i.b)("inlineCode",{parentName:"h3"},"orElseIgnore()")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare simply left as they were (ignored):"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseIgnore();",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return $match[0]; // orElseIgnore() leaves the match as it was\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return $match[0];\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, http://.io, facebook, https://.com :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Match ",Object(i.b)("inlineCode",{parentName:"li"},"www.google.com")," was replaced with the matched occurrence of it's capturing group - ",Object(i.b)("inlineCode",{parentName:"li"},"google")),Object(i.b)("li",{parentName:"ul"},"Match ",Object(i.b)("inlineCode",{parentName:"li"},"facebook.com")," was replaced with the matched occurrence of it's capturing group - ",Object(i.b)("inlineCode",{parentName:"li"},"facebook")),Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare left unchanged (ignored), in this case.")),Object(i.b)("h3",{id:"orelseempty"},Object(i.b)("inlineCode",{parentName:"h3"},"orElseEmpty()")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare replaced with an empty string:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseEmpty();",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return ''; // orElseEmpty() replaces the match with an empty string\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    // Check between unmatched and matched-empty is\n    // unnecessary for orElseEmpty()\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, , facebook,  :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare replaced with an empty string, in this case.")),Object(i.b)("h3",{id:"orelsewithstring"},Object(i.b)("inlineCode",{parentName:"h3"},"orElseWith(string)")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare replaced with a given parameter string:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseWith('UNKNOWN');",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return 'UNKNOWN'; // orElseWith() replaces the match with a constant string\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return 'UNKNOWN';\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, UNKNOWN, facebook, UNKNOWN :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so those matches\nare replaced with a given ",Object(i.b)("inlineCode",{parentName:"li"},"'UNKNOWN'")," string, in this case.")),Object(i.b)("h3",{id:"orelsecallingcallable"},Object(i.b)("inlineCode",{parentName:"h3"},"orElseCalling(callable)")),Object(i.b)("p",null,"Matched links with matched ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," group are replaced with it. Links without the optional group matched, however,\nare then passed to the producer, which result is then replaced in place of the link:"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseCalling(fn(Detail $match) => \"Not found **$match**\");",php:"$links = 'My links are: www.google.com, http://.io, facebook.com, https://.com :)';\n\n$producer = function (array $match) {\n    return \"Not found **{$match[0]}**\";\n};\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) use ($producer) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            return $producer($match); // orElseCalling() uses a callback to replace the subject\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            return $producer($match);\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, Not found **http://.io**, facebook, Not found **https://.com** :)'"),Object(i.b)("p",null,"Description:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Matches ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io")," and ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com")," were matched, but the capturing group ",Object(i.b)("inlineCode",{parentName:"li"},"'domain'")," inside wasn't, so callback\nfunction is called with ",Object(i.b)("a",{parentName:"li",href:"/docs/match-details"},Object(i.b)("inlineCode",{parentName:"a"},"Detail"))," details (first with ",Object(i.b)("inlineCode",{parentName:"li"},"http://.io"),", and then with ",Object(i.b)("inlineCode",{parentName:"li"},"https://.com"),"), and the link is replaced\nwith a result of that function.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'"T-Regx" vs "PHP" code tab')),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Even this simple T-Regx snippet is represented as a massive PHP code. Using ",Object(i.b)("a",{parentName:"p",href:"/docs/match-details#ordinal-value-index"},Object(i.b)("inlineCode",{parentName:"a"},"Detail.index()"))," or ",Object(i.b)("a",{parentName:"p",href:"/docs/match-details#offsets"},Object(i.b)("inlineCode",{parentName:"a"},"Detail.offset()"))," when\nreplacing would make PHP code even more complex, introducing counting variables and ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/pcre.constants.php"},Object(i.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE")),"."))),Object(i.b)("h3",{id:"orelsethrow"},Object(i.b)("inlineCode",{parentName:"h3"},"orElseThrow()")),Object(i.b)("p",null,"You can either call this method without parameters, or with your custom exception class name (just like ",Object(i.b)("a",{parentName:"p",href:"/docs/match-find-first"},Object(i.b)("inlineCode",{parentName:"a"},"findFirst()"))," parameter):"),Object(i.b)(r.a,{tregx:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orElseThrow(MyCustomException::class);",php:"$links = 'My links are: www.google.com, http://socket.io, facebook.com, https://t-regx.com :)';\n\nreturn preg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)?\\.(com|io)#', function ($match) {\n    validateGroupName('domain');\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            throw new MyCustomException(); // orElseThrow() throws an exception when the group wasn't matched\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (!validateGroupMatched('domain', $match)) {\n            throw new MyCustomException();\n        }\n    }\n    return $match['domain'];\n}, $links);",mdxType:"CodeTabs"}),Object(i.b)(r.b,{mdxType:"Result"},"'My links are: google, socket, facebook, t-regx :)'"),Object(i.b)("p",null,"Of course, for subject ",Object(i.b)("inlineCode",{parentName:"p"},"$links")," equal to ",Object(i.b)("inlineCode",{parentName:"p"},"'My links are: www..com'")," (optional group ",Object(i.b)("inlineCode",{parentName:"p"},"'domain'")," is unmatched) - ",Object(i.b)("inlineCode",{parentName:"p"},"MyCustomException")," would be thrown."),Object(i.b)("h2",{id:"identity"},"Identity"),Object(i.b)("p",null,"As mentioned, ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->by()->group()")," is just a short-hand for ",Object(i.b)("inlineCode",{parentName:"p"},"replace()->callback()"),"."),Object(i.b)("p",null,"The below ",Object(i.b)("inlineCode",{parentName:"p"},"by()->group()")," code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"pattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->orXXX();\n")),Object(i.b)("p",null,"is identical to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"pattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')->replace($links)\n    ->all()\n    ->callback(function (Detail $detail) {\n        return $detail->group('domain')->orXXX();\n    });\n")))}m.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,h=m["".concat(r,".").concat(b)]||m[b]||d[b]||i;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return N}));var a=n(0),o=n.n(a),i=n(206),r=n(201),c=n(55),l=n.n(c),p=37,s=39;var m=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,d=e.groupId,b=e.className,h=Object(i.a)(),u=h.tabGroupChoices,w=h.setTabGroupChoices,g=Object(a.useState)(c),f=g[0],O=g[1],j=a.Children.toArray(e.children);if(null!=d){var N=u[d];null!=N&&N!==f&&m.some((function(e){return e.value===N}))&&O(N)}var y=function(e){O(e),null!=d&&w(d,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))};var d=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},b=n(207),h=n(56),u=n.n(h),w=function(e){var t=e.children,n=e.language;return o.a.createElement("div",{className:u.a.code},o.a.createElement(b.a,{className:"language-"+(n||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};var g=function(e){var t=e.tregx,n=e.php;return o.a.createElement(m,{defaultValue:"t-regx",values:f(t,n)},t&&o.a.createElement(d,{value:"t-regx"},o.a.createElement(w,null,t)),n&&o.a.createElement(d,{value:"php"},o.a.createElement(w,null,n)))};function f(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var O=n(57),j=n.n(O),N=function(e){var t=e.text,n=e.children;return o.a.createElement("div",{className:j.a.result},o.a.createElement(w,{language:t?"text":"php"},n))}}}]);