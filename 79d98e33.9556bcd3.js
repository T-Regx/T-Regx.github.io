(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(161)),l={title:"Release 0.9.2 - You're in for a treat!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},o={permalink:"/blog/2020/02/18/release-0.9.2",source:"@site/blog\\2020-02-18-release-0.9.2.md",description:"\ud83d\ude0e T-Regx The Dinosaur is really proud to announce its first beta version! Despite the beta suffix, it's 100% suitable for production use. It doesn't have any known bugs - check out the issues. There is a few breaking changes (since that's a 0.* version), but there are also a looot of improvements and new feautres.",date:"2020-02-18T00:00:00.000Z",tags:[],title:"Release 0.9.2 - You're in for a treat!",readingTime:2.345,truncated:!1,prevItem:{title:"Release 0.9.3 - Minor changes",permalink:"/blog/2020/02/22/release-0.9.3"},nextItem:{title:"Don't forget about T-Regx",permalink:"/blog/2019/10/15/dont-forget-about-t-regx"}},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\ud83d\ude0e T-Regx The Dinosaur is really proud to announce its first beta version! Despite the beta suffix, it's 100% suitable for production use. It doesn't have any known bugs - check out the issues. There is a few breaking changes (since that's a 0.* version), but there are also a looot of improvements and new feautres.\nWhat's new in this release:"),Object(r.b)("p",null,"Here's a release on github: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2"}),"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2")," (see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/master/ChangeLog.md"}),"Changelog.md"),")."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Breaking changes",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Methods ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::of()"),' no longer "magically" guess whether a pattern is delimited or not.\n',Object(r.b)("inlineCode",{parentName:"li"},"Pattern::of()")," assumes pattern ",Object(r.b)("em",{parentName:"li"},"is")," delimited, new ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::pcre()")," takes an old-school delimited pattern."),Object(r.b)("li",{parentName:"ul"},"Constructor ",Object(r.b)("inlineCode",{parentName:"li"},"new Pattern()")," is no longer a part of T-Regx API. Use ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::of()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"pattern()")),Object(r.b)("li",{parentName:"ul"},"Renamed ",Object(r.b)("inlineCode",{parentName:"li"},"Match.parseInt()")," to ",Object(r.b)("inlineCode",{parentName:"li"},"Match.toInt()")," (the same for ",Object(r.b)("inlineCode",{parentName:"li"},"MatchGroup"),")"),Object(r.b)("li",{parentName:"ul"},"Removed ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->match()->test()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"fails()"),". From now on, use ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->test()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"fails()")),Object(r.b)("li",{parentName:"ul"},"Removed ",Object(r.b)("inlineCode",{parentName:"li"},"is()"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"is()->delimited()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"is()->usable()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"is()->valid()")," is changed to ",Object(r.b)("inlineCode",{parentName:"li"},"valid()")))),Object(r.b)("li",{parentName:"ul"},"Removed ",Object(r.b)("inlineCode",{parentName:"li"},"split()->ex()"),", changed ",Object(r.b)("inlineCode",{parentName:"li"},"split()->inc()")," to ",Object(r.b)("inlineCode",{parentName:"li"},"split()")))),Object(r.b)("li",{parentName:"ul"},"Features",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"Match.group().replace()")," \ud83d\udd25"),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->match()->fluent()")," \ud83d\udd25"),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->match()->asInt()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->match()->distinct()")," (leaves only unique matches)"),Object(r.b)("li",{parentName:"ul"},"Added prepared pattern method ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (see below)"),Object(r.b)("li",{parentName:"ul"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->match()->groups()"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"groups()->forEach()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"iterate()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"groups()->flatMap()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"groups()->map()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"group()->fluent()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"groups()->names()")," (and ",Object(r.b)("inlineCode",{parentName:"li"},"namedGroups()->names()"),")"),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"groups()->count()")," (and ",Object(r.b)("inlineCode",{parentName:"li"},"namedGroups()->count()"),")"))),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"match()->offsets()->fluent()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"match()->group(string)->offsets()->fluent()")),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"pattern()->forArray()->strict()")," which throws for invalid values, instead of filtering them out"))),Object(r.b)("li",{parentName:"ul"},"SafeRegex",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"preg::grep_keys()")," \ud83d\udd25, that works exactly like ",Object(r.b)("inlineCode",{parentName:"li"},"preg::grep()"),", but filters by keys (also accepts ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-grep.php"}),Object(r.b)("inlineCode",{parentName:"a"},"PREG_GREP_INVERT")),")"))),Object(r.b)("li",{parentName:"ul"},"Enhancements/updates",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Method ",Object(r.b)("inlineCode",{parentName:"li"},"by()->group()->orElse()")," now receives lazy-loaded ",Object(r.b)("inlineCode",{parentName:"li"},"Match"),", instead of a subject"),Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"withReferences()")," to ",Object(r.b)("inlineCode",{parentName:"li"},"CompositePattern.chainedReplace()")),Object(r.b)("li",{parentName:"ul"},"Previously named ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," is renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::bind()")),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (old ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),") still accepts values as an associative array, but new ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," receives values without regard for the keys."),Object(r.b)("li",{parentName:"ul"},"Fixed passing invalid types to ",Object(r.b)("inlineCode",{parentName:"li"},"forArray()"),". Previously, caused fatal error due to internal ",Object(r.b)("inlineCode",{parentName:"li"},"preg_grep()")," implementation."))),Object(r.b)("li",{parentName:"ul"},"Other",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Now ",Object(r.b)("inlineCode",{parentName:"li"},"MalformedPatternException")," is thrown, instead of ",Object(r.b)("inlineCode",{parentName:"li"},"CompileSafeRegexException"),", when using invalid PCRE syntax."),Object(r.b)("li",{parentName:"ul"},"Returning ",Object(r.b)("inlineCode",{parentName:"li"},"Match")," from ",Object(r.b)("inlineCode",{parentName:"li"},"replace()->callback()")," (instead of ",Object(r.b)("inlineCode",{parentName:"li"},"Match.text()")," as ",Object(r.b)("inlineCode",{parentName:"li"},"string"),")"),Object(r.b)("li",{parentName:"ul"},"Match ",Object(r.b)("inlineCode",{parentName:"li"},"+12")," is no longer considered a valid integer for ",Object(r.b)("inlineCode",{parentName:"li"},"isInt()"),"/",Object(r.b)("inlineCode",{parentName:"li"},"toInt()")),Object(r.b)("li",{parentName:"ul"},"Unnamed group will be represented as ",Object(r.b)("inlineCode",{parentName:"li"},"null")," in ",Object(r.b)("inlineCode",{parentName:"li"},"Match.groupNames()"),", instead of being simply ignored"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"helper()")," method, ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern")," and ",Object(r.b)("inlineCode",{parentName:"li"},"PatternBuilder")," now return interface ",Object(r.b)("inlineCode",{parentName:"li"},"PatternInterface"),", instead of ",Object(r.b)("inlineCode",{parentName:"li"},"Pattern")," class.\n",Object(r.b)("inlineCode",{parentName:"li"},"Pattern")," class now only holds static utility methods, and ",Object(r.b)("inlineCode",{parentName:"li"},"PatternImpl")," holds the pattern implementation."))),Object(r.b)("li",{parentName:"ul"},"Maintenance",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PhpUnit throws different exceptions because of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.php.net/rfc/tostring_exceptions"}),"PHP ",Object(r.b)("inlineCode",{parentName:"a"},"__toString()")," exception policy change"),".")))),Object(r.b)("p",null,"Foot note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Apart from PHP type hints, every version up to this point could be run on PHP 5.3 (if one removes type hints from\ncode, one can run T-Regx on PHP 5.3). Every error, exception, malfunction, inconsistency was handled correctly by\nT-Regx. From this version on (",Object(r.b)("inlineCode",{parentName:"li"},"0.9.2"),"), handling of the errors and inconsistencies is dropped, since T-Regx now\nonly supports PHP 7.1.")),Object(r.b)("p",null,"Hope you guys will like and enjoy it! "))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);