(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(1),r=a(6),c=(a(0),a(204)),i={id:"match-details",title:"Match details"},l={id:"match-details",title:"Match details",description:"When using `pattern()->match()` and `->replace->callback()`, some methods receive a callback that accepts `Match` details\r",source:"@site/..\\docs\\match-details.md",permalink:"/docs/match-details",lastUpdatedAt:1586708538,sidebar:"docs",previous:{title:"Map with keys (Flat map)",permalink:"/docs/match-flat-map"},next:{title:"Capturing groups",permalink:"/docs/match-groups"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Matched text",id:"matched-text",children:[]},{value:"Integers",id:"integers",children:[]},{value:"Subject",id:"subject",children:[]},{value:"Ordinal value (index)",id:"ordinal-value-index",children:[]},{value:"Limit",id:"limit",children:[]},{value:"Offsets",id:"offsets",children:[]},{value:"Other occurrences",id:"other-occurrences",children:[]},{value:"User data",id:"user-data",children:[]},{value:"Groups",id:"groups",children:[]}],p={rightToc:b};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When using ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->match()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"->replace->callback()"),", some methods receive a callback that accepts ",Object(c.b)("inlineCode",{parentName:"p"},"Match")," details\nobject. These methods are: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(c.b)("inlineCode",{parentName:"a"},"findFirst()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-for-each"}),Object(c.b)("inlineCode",{parentName:"a"},"forEach()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-flat-map"}),Object(c.b)("inlineCode",{parentName:"a"},"flatMap()")),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/replace-callback"}),Object(c.b)("inlineCode",{parentName:"a"},"callback()")),". "),Object(c.b)("p",null,'The details can be used to get concise information about the matched occurrence, such\nas its value (i.e. "the whole match"), capturing groups and their UTF-8 safe offsets, limits, indexes, other matches\nas well as the used subject (although it could also be pass as a closure parameter).'),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"Using ",Object(c.b)("inlineCode",{parentName:"p"},"Match")," details, you gain access to:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#matched-text"}),Object(c.b)("inlineCode",{parentName:"a"},"text()")),"/",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#matched-text"}),Object(c.b)("inlineCode",{parentName:"a"},"textLength()"))," - value of a matched occurrence"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#integers"}),Object(c.b)("inlineCode",{parentName:"a"},"toInt()")),"/",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#integers"}),Object(c.b)("inlineCode",{parentName:"a"},"isInt()"))," which allow you to handle integers safely"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#subject"}),Object(c.b)("inlineCode",{parentName:"a"},"subject()"))," - subject against which the pattern was matched"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#ordinal-value-index"}),Object(c.b)("inlineCode",{parentName:"a"},"index()"))," - ordinal value of a matched occurrence"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#limit"}),Object(c.b)("inlineCode",{parentName:"a"},"limit()"))," - limit which was put on the matches"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#offsets"}),"offsets of matched values")," in the subject:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"character offsets (UTF-8 safe) - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"offset()"))),Object(c.b)("li",{parentName:"ul"},"byte offsets - ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"byteOffset()"))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#other-occurrences"}),Object(c.b)("inlineCode",{parentName:"a"},"all()"))," - other matched occurrences"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#other-occurrences"}),"User data")," - sharing custom data between callbacks"),Object(c.b)("li",{parentName:"ul"},"details about capturing groups, in the next chapter: ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/match-groups"}),"Capturing groups"))),Object(c.b)("h2",{id:"matched-text"},"Matched text"),Object(c.b)("p",null,"There are 6 similar ways to get the value of the matched occurrence."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{3-4,6-8}","{3-4,6-8}":!0}),"pattern('[A-Z][a-z]+')->match('I like Trains')->map(function (Match $match) {\n\n    return $match->text();             // using text() method\n    return $match->group(0)->text();   // group #0 is the whole match in all regexp engines\n\n    return (string) $match;            // cast it to string\n    return (string) $match->group(0);  // cast group #0 to string\n    return \"$match\";                   // enclose it in double quotes\n});\n")),Object(c.b)("p",null,"or you can just accept ",Object(c.b)("inlineCode",{parentName:"p"},"string")," in the callback signature."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+')->match('I like Trains')->map(function (string $match) {\n    return $match;\n});\n")),Object(c.b)("p",null,"All of them are redundant and equal to each other. Their redundancy comes from the fact the there are a few ways of\ncasting an object to string in PHP, casting ",Object(c.b)("inlineCode",{parentName:"p"},"Match")," to string is the same as getting ",Object(c.b)("inlineCode",{parentName:"p"},"text()")," in T-Regx, and that the\nwhole match is also group ",Object(c.b)("inlineCode",{parentName:"p"},"0")," in regular expressions."),Object(c.b)("p",null,"There's also UTF8-safe method ",Object(c.b)("inlineCode",{parentName:"p"},"textLength()")," which, you guessed it, returns the length of a matched text."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+')->match('I like Trains')->map(function (Match $match) {\n    return $match->text();         // 'Trains'\n    return $match->textLength();   // 6\n});\n")),Object(c.b)("h2",{id:"integers"},"Integers"),Object(c.b)("p",null,"Method ",Object(c.b)("inlineCode",{parentName:"p"},"isInt()")," returns ",Object(c.b)("inlineCode",{parentName:"p"},"true"),' if, and only if, the matched occurrence is numeric. And by "numeric", we mean "real" numeric,\nnot PHP numeric:'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"String values considered valid integers: ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'14'"),", ",Object(c.b)("inlineCode",{parentName:"li"},"'-14'"),", ",Object(c.b)("inlineCode",{parentName:"li"},"'000'")," "))),Object(c.b)("li",{parentName:"ul"},"Strings that aren't treated as valid integers: ",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'+14'"),", ",Object(c.b)("inlineCode",{parentName:"li"},"' 10'"),", ",Object(c.b)("inlineCode",{parentName:"li"},"'10 '"),", ",Object(c.b)("inlineCode",{parentName:"li"},"''"),", ",Object(c.b)("inlineCode",{parentName:"li"},"' '"),", ",Object(c.b)("inlineCode",{parentName:"li"},"'0.0'"),", ",Object(c.b)("inlineCode",{parentName:"li"},"'0,0'"),",")))),Object(c.b)("p",null,"The string is considered a valid integer if:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"contains only ",Object(c.b)("inlineCode",{parentName:"li"},"0-9")," characters, and more than 1 of them (so ",Object(c.b)("inlineCode",{parentName:"li"},"00")," is also a valid integer, but ",Object(c.b)("inlineCode",{parentName:"li"},"''")," isn't)"),Object(c.b)("li",{parentName:"ul"},"optionally starts with only one ",Object(c.b)("inlineCode",{parentName:"li"},"-")," sign"),Object(c.b)("li",{parentName:"ul"},"its numeric representation is:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"higher than ",Object(c.b)("inlineCode",{parentName:"li"},"PHP_INT_MIN")," (-9223372036854775808)"),Object(c.b)("li",{parentName:"ul"},"lower than ",Object(c.b)("inlineCode",{parentName:"li"},"PHP_INT_MAX")," (9223372036854775807)"))),Object(c.b)("li",{parentName:"ul"},"doesn't contain any other characters")),Object(c.b)("h4",{id:"checking-and-parsing"},"Checking and parsing"),Object(c.b)("p",null,"There are two methods regarding integers: ",Object(c.b)("inlineCode",{parentName:"p"},"isInt()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"toInt()"),"."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"$match->isInt()")," returns ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"/",Object(c.b)("inlineCode",{parentName:"p"},"false")," depending on whether the matched occurrence is numeric. ",Object(c.b)("inlineCode",{parentName:"p"},"toInt()"),"\nreturns said numeric occurrence as an integer, or throws ",Object(c.b)("inlineCode",{parentName:"p"},"IntegerFormatException")," instead."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{3}","{3}":!0}),"pattern('\\d+')->match('User input was: 4 times')->first(function (Match $match) {\n    if ($match->isInt()) {\n        for ($i = 0; $i < $match->toInt(); $i++) {\n            // tasks\n        }\n    }\n});\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"PS: It's implemented with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.filter-var.php"}),Object(c.b)("inlineCode",{parentName:"a"},"filter_var()")),", but you can think of it as ",Object(c.b)("inlineCode",{parentName:"p"},"/^-?\\d+$/")," with max/min values check.")),Object(c.b)("h2",{id:"subject"},"Subject"),Object(c.b)("p",null,"To get the subject in your callback, use ",Object(c.b)("inlineCode",{parentName:"p"},"Match.subject()"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z][a-z]+')->match('I like Trains')->map(function (Match $match) {\n    return $match->subject();\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'I like Trains'\n")),Object(c.b)("p",null,"This is equivalent to storing the subject in a variable and using it in your closure."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$subject = 'I like Trains';\n\npattern('[A-Z][a-z]+')->match($subject)->map(function (Match $match) use ($subject) {\n    return $subject;\n});\n")),Object(c.b)("h2",{id:"ordinal-value-index"},"Ordinal value (index)"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Match.index()")," returns the ordinal number of a matched occurrence."),Object(c.b)("p",null,"In this example, we'll modify every second word:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{2}","{2}":!0}),"pattern('\\w+')->match('I like Trains, but I also like bikes')->map(function (Match $match) {\n    if ($match->index() % 2 === 0) {\n        return strtolower($match);\n    }\n    return strtoupper($match);\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['i', 'LIKE', 'trains', 'BUT', 'i', 'ALSO', 'like', 'BIKES']\n")),Object(c.b)("p",null,"Results of ",Object(c.b)("inlineCode",{parentName:"p"},"Match.index()")," are always ",Object(c.b)("strong",{parentName:"p"},"continuous integer")," numbers, going from ",Object(c.b)("inlineCode",{parentName:"p"},"0")," to ",Object(c.b)("inlineCode",{parentName:"p"},"1"),", ",Object(c.b)("inlineCode",{parentName:"p"},"2"),", ",Object(c.b)("inlineCode",{parentName:"p"},"3"),"..., even when filtered."),Object(c.b)("h2",{id:"limit"},"Limit"),Object(c.b)("p",null,"Depending on whether you used ","[",Object(c.b)("inlineCode",{parentName:"p"},"all()"),"]",", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()"))," or ","[",Object(c.b)("inlineCode",{parentName:"p"},"only(int)"),"]"," - method ",Object(c.b)("inlineCode",{parentName:"p"},"limit()")," will return ",Object(c.b)("inlineCode",{parentName:"p"},"-1"),", ",Object(c.b)("inlineCode",{parentName:"p"},"1")," or an\nargument given to ",Object(c.b)("inlineCode",{parentName:"p"},"only()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace($string)->all()->callback(function (Match $match) {\n    $match->limit();   // -1\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace($string)->first()->callback(function (Match $match) {\n    $match->limit();   // 1\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace($string)->only(5)->callback(function (Match $match) {\n    $match->limit();   // 5\n});\n")),Object(c.b)("h2",{id:"offsets"},"Offsets"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Match.offset()")," can be used to get the offset of the matched occurrence in the subject. ",Object(c.b)("inlineCode",{parentName:"p"},"Match.offset()")," is multi-byte\ncharacter safe and returns offset in characters, whereas ",Object(c.b)("inlineCode",{parentName:"p"},"Match.byteOffset()")," returns the offset in bytes."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('here')->match('Apples for 0.30\u20ac, here')->first(function (Match $match) {\n    $characters = $match->offset();   // 18\n    $byes = $match->byteOffset();     // 20\n});\n")),Object(c.b)("p",null,"Here's what the numbers mean:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Apples for 0.30\u20ac, here\n                  \u2191\n                  offset()\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"A  p   p   l   e   s      f   o   r      0  .  3  0  \u20ac           ,     h   e   r   e\n65 112 112 108 101 115 32 102 111 114 32 48 46 51 48 226 130 172 44 32 104 101 114 101\n                                                                       \u2191\n                                                                       byteOffset()\n")),Object(c.b)("p",null,"In other words, ",Object(c.b)("inlineCode",{parentName:"p"},"offset()")," treats bytes ",Object(c.b)("inlineCode",{parentName:"p"},"[226, 130, 172]")," as one multi-byte character (euro sign ",Object(c.b)("inlineCode",{parentName:"p"},"\u20ac"),") and counts them as\none; whereas ",Object(c.b)("inlineCode",{parentName:"p"},"byteOffset()")," would count them as three."),Object(c.b)("p",null,"Use:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"offset()")," with functions: ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.mb-substr.php"}),Object(c.b)("inlineCode",{parentName:"a"},"mb_substr()")),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.mb-strpos.php"}),Object(c.b)("inlineCode",{parentName:"a"},"mb_strpos()"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"byteOffset()")," with functions: ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.substr.php"}),Object(c.b)("inlineCode",{parentName:"a"},"substr()")),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.strpos.php"}),Object(c.b)("inlineCode",{parentName:"a"},"strpos()")))),Object(c.b)("h2",{id:"other-occurrences"},"Other occurrences"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Match")," has access to other matched occurrences:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Match.all()")," - for whole matches (like ",Object(c.b)("inlineCode",{parentName:"li"},"Match.text()"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"Match.group().all()")," - for capturing groups (like ",Object(c.b)("inlineCode",{parentName:"li"},"Match.group().text()"),")")),Object(c.b)("p",null,"Even if you use ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," or ",Object(c.b)("inlineCode",{parentName:"p"},"only(int)")," methods, ",Object(c.b)("inlineCode",{parentName:"p"},"Match.all()")," always returns unlimited occurrences."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{4}","{4}":!0}),"pattern('\\w+')->match('Apples are cool')->map(function (Match $match) {\n    return [\n        'match' => $match->text(),\n        'all'   => $match->all()\n    ];\n});\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"[\n  ['match' => 'Apples', 'all' => ['Apples', 'are', 'cool']],\n  ['match' => 'are',    'all' => ['Apples', 'are', 'cool']],\n  ['match' => 'cool',   'all' => ['Apples', 'are', 'cool']]\n]\n")),Object(c.b)("h2",{id:"user-data"},"User data"),Object(c.b)("p",null,"To most users this functionality will occur as redundant - it's only use case are multiple calls to callbacks, for example\nwhen using chained ",Object(c.b)("inlineCode",{parentName:"p"},"filter()->map()"),". With user data, it's possible to perform an operation in ",Object(c.b)("inlineCode",{parentName:"p"},"filter()"),", store its\nvalue in user data, and then use the value in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()"))," without reference closure variables."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{4,8}","{4,8}":!0}),"pattern('\\w{2}')->match('Languages: en, de, xd, sv')\n    ->filter(function (Match $match) {\n        $languageInfo = HeavyService::fetch($match->text());\n        $match->setUserData($languageInfo);\n        return $languageInfo->isValid();\n    })\n    ->map(function (Match $match) {\n        $languageInfo = $match->getUserData();\n        return $languageInfo->languages():\n    });\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"There were ideas of adding structures for user data, like ",Object(c.b)("inlineCode",{parentName:"p"},"setUserData('key', $value)"),"/",Object(c.b)("inlineCode",{parentName:"p"},"getUserData('key')"),",\nbut we decided to give more control to the user about it's structure. That's why user data is ",Object(c.b)("inlineCode",{parentName:"p"},"mixed"),".")),Object(c.b)("h2",{id:"groups"},"Groups"),Object(c.b)("p",null,"With ",Object(c.b)("inlineCode",{parentName:"p"},"Match.group(string|int)"),", you can easily retrieve capturing groups."),Object(c.b)("p",null,"Just like with ",Object(c.b)("inlineCode",{parentName:"p"},"Match"),", retrieving matched occurrence value is done with ",Object(c.b)("inlineCode",{parentName:"p"},"text()")," method or by casting it to ",Object(c.b)("inlineCode",{parentName:"p"},"string"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:"{5,7-8}","{5,7-8}":!0}),"$pattern = '(?<value>\\d+)(?<unit>cm|mm)';\n$subject = '192mm and 168cm or 18mm and 12cm';\n\npattern($pattern)->match($subject)->first(function (Match $match) {\n    $text = $match->text();                            // '192mm'\n\n    $value = (string) $match->group('value');          // '192'\n    $unit  =          $match->group('unit')->text();   // 'mm'\n});\n")),Object(c.b)("p",null,"More about capturing groups can be found in the next section: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),"Capturing groups"),"."))}o.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,h=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return a?r.a.createElement(h,l({ref:t},p,{components:a})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);