(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(1),i=(n(0),n(204));const r={title:"Release 0.9.2 - You're in for a treat!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},l={permalink:"/blog/2020/02/18/release-0.9.2",source:"@site/blog/2020-02-18-release-0.9.2.md",description:"\ud83d\ude0e T-Regx The Dinosaur is really proud to announce its first beta version! Despite the beta suffix, it's 100% suitable for production use. It doesn't have any known bugs - check out the issues. There is a few breaking changes (since that's a 0.* version), but there are also a looot of improvements and new feautres.",date:"2020-02-18T00:00:00.000Z",tags:[],title:"Release 0.9.2 - You're in for a treat!",readingTime:2.345,truncated:!1,prevItem:{title:"Release 0.9.3 - Minor changes",permalink:"/blog/2020/02/22/release-0.9.3"},nextItem:{title:"Don't forget about T-Regx",permalink:"/blog/2019/10/15/dont-forget-about-t-regx"}},o=[],b={rightToc:o};function c({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\ud83d\ude0e T-Regx The Dinosaur is really proud to announce its first beta version! Despite the beta suffix, it's 100% suitable for production use. It doesn't have any known bugs - check out the issues. There is a few breaking changes (since that's a 0.* version), but there are also a looot of improvements and new feautres.\nWhat's new in this release:"),Object(i.b)("p",null,"Here's a release on github: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2"}),"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2")," (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/master/ChangeLog.md"}),"Changelog.md"),")."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Breaking changes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Methods ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::of()"),' no longer "magically" guess whether a pattern is delimited or not.\n',Object(i.b)("inlineCode",{parentName:"li"},"Pattern::of()")," assumes pattern ",Object(i.b)("em",{parentName:"li"},"is")," delimited, new ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::pcre()")," takes an old-school delimited pattern."),Object(i.b)("li",{parentName:"ul"},"Constructor ",Object(i.b)("inlineCode",{parentName:"li"},"new Pattern()")," is no longer a part of T-Regx API. Use ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::of()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"pattern()")),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"Match.parseInt()")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Match.toInt()")," (the same for ",Object(i.b)("inlineCode",{parentName:"li"},"MatchGroup"),")"),Object(i.b)("li",{parentName:"ul"},"Removed ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->match()->test()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"fails()"),". From now on, use ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->test()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"fails()")),Object(i.b)("li",{parentName:"ul"},"Removed ",Object(i.b)("inlineCode",{parentName:"li"},"is()"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"is()->delimited()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"is()->usable()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"is()->valid()")," is changed to ",Object(i.b)("inlineCode",{parentName:"li"},"valid()")))),Object(i.b)("li",{parentName:"ul"},"Removed ",Object(i.b)("inlineCode",{parentName:"li"},"split()->ex()"),", changed ",Object(i.b)("inlineCode",{parentName:"li"},"split()->inc()")," to ",Object(i.b)("inlineCode",{parentName:"li"},"split()")))),Object(i.b)("li",{parentName:"ul"},"Features",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"Match.group().replace()")," \ud83d\udd25"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->match()->fluent()")," \ud83d\udd25"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->match()->asInt()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->match()->distinct()")," (leaves only unique matches)"),Object(i.b)("li",{parentName:"ul"},"Added prepared pattern method ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (see below)"),Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->match()->groups()"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"groups()->forEach()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"iterate()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"groups()->flatMap()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"groups()->map()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"group()->fluent()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"groups()->names()")," (and ",Object(i.b)("inlineCode",{parentName:"li"},"namedGroups()->names()"),")"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"groups()->count()")," (and ",Object(i.b)("inlineCode",{parentName:"li"},"namedGroups()->count()"),")"))),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"match()->offsets()->fluent()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"match()->group(string)->offsets()->fluent()")),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->forArray()->strict()")," which throws for invalid values, instead of filtering them out"))),Object(i.b)("li",{parentName:"ul"},"SafeRegex",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"preg::grep_keys()")," \ud83d\udd25, that works exactly like ",Object(i.b)("inlineCode",{parentName:"li"},"preg::grep()"),", but filters by keys (also accepts ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-grep.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_GREP_INVERT")),")"))),Object(i.b)("li",{parentName:"ul"},"Enhancements/updates",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Method ",Object(i.b)("inlineCode",{parentName:"li"},"by()->group()->orElse()")," now receives lazy-loaded ",Object(i.b)("inlineCode",{parentName:"li"},"Match"),", instead of a subject"),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"withReferences()")," to ",Object(i.b)("inlineCode",{parentName:"li"},"CompositePattern.chainedReplace()")),Object(i.b)("li",{parentName:"ul"},"Previously named ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," is renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::bind()")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (old ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),") still accepts values as an associative array, but new ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," receives values without regard for the keys."),Object(i.b)("li",{parentName:"ul"},"Fixed passing invalid types to ",Object(i.b)("inlineCode",{parentName:"li"},"forArray()"),". Previously, caused fatal error due to internal ",Object(i.b)("inlineCode",{parentName:"li"},"preg_grep()")," implementation."))),Object(i.b)("li",{parentName:"ul"},"Other",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Now ",Object(i.b)("inlineCode",{parentName:"li"},"MalformedPatternException")," is thrown, instead of ",Object(i.b)("inlineCode",{parentName:"li"},"CompileSafeRegexException"),", when using invalid PCRE syntax."),Object(i.b)("li",{parentName:"ul"},"Returning ",Object(i.b)("inlineCode",{parentName:"li"},"Match")," from ",Object(i.b)("inlineCode",{parentName:"li"},"replace()->callback()")," (instead of ",Object(i.b)("inlineCode",{parentName:"li"},"Match.text()")," as ",Object(i.b)("inlineCode",{parentName:"li"},"string"),")"),Object(i.b)("li",{parentName:"ul"},"Match ",Object(i.b)("inlineCode",{parentName:"li"},"+12")," is no longer considered a valid integer for ",Object(i.b)("inlineCode",{parentName:"li"},"isInt()"),"/",Object(i.b)("inlineCode",{parentName:"li"},"toInt()")),Object(i.b)("li",{parentName:"ul"},"Unnamed group will be represented as ",Object(i.b)("inlineCode",{parentName:"li"},"null")," in ",Object(i.b)("inlineCode",{parentName:"li"},"Match.groupNames()"),", instead of being simply ignored"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"helper()")," method, ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern")," and ",Object(i.b)("inlineCode",{parentName:"li"},"PatternBuilder")," now return interface ",Object(i.b)("inlineCode",{parentName:"li"},"PatternInterface"),", instead of ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern")," class.\n",Object(i.b)("inlineCode",{parentName:"li"},"Pattern")," class now only holds static utility methods, and ",Object(i.b)("inlineCode",{parentName:"li"},"PatternImpl")," holds the pattern implementation."))),Object(i.b)("li",{parentName:"ul"},"Maintenance",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PhpUnit throws different exceptions because of ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.php.net/rfc/tostring_exceptions"}),"PHP ",Object(i.b)("inlineCode",{parentName:"a"},"__toString()")," exception policy change"),".")))),Object(i.b)("p",null,"Foot note:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Apart from PHP type hints, every version up to this point could be run on PHP 5.3 (if one removes type hints from\ncode, one can run T-Regx on PHP 5.3). Every error, exception, malfunction, inconsistency was handled correctly by\nT-Regx. From this version on (",Object(i.b)("inlineCode",{parentName:"li"},"0.9.2"),"), handling of the errors and inconsistencies is dropped, since T-Regx now\nonly supports PHP 7.1.")),Object(i.b)("p",null,"Hope you guys will like and enjoy it! "))}c.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||r;return n?i.a.createElement(u,o({ref:t},c,{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);