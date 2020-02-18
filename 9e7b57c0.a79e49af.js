(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));n(220),n(12),n(53),n(215),n(217),n(0);var a=n(207);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={title:"Release 0.9.2 - You're in for a treat!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},l=[],b={rightToc:l},o="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(o,i({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\ud83d\ude0e T-Regx The Dinosaur is really proud to announce its first beta version! Despite the beta suffix, it's 100% suitable for production use. It doesn't have any known bugs - check out the issues. There is a few breaking changes (since that's a 0.* version), but there are also a looot of improvements and new feautres.\nWhat's new in this release:"),Object(a.b)("p",null,"Here's a release on github: ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2"}),"https://github.com/T-Regx/T-Regx/releases/tag/v0.9.2")," (see ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/master/ChangeLog.md"}),"Changelog.md"),")."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Breaking changes",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Methods ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::of()"),' no longer "magically" guess whether a pattern is delimited or not.\n',Object(a.b)("inlineCode",{parentName:"li"},"Pattern::of()")," assumes pattern ",Object(a.b)("em",{parentName:"li"},"is")," delimited, new ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::pcre()")," takes an old-school delimited pattern."),Object(a.b)("li",{parentName:"ul"},"Constructor ",Object(a.b)("inlineCode",{parentName:"li"},"new Pattern()")," is no longer a part of T-Regx API. Use ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::of()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"pattern()")),Object(a.b)("li",{parentName:"ul"},"Renamed ",Object(a.b)("inlineCode",{parentName:"li"},"Match.parseInt()")," to ",Object(a.b)("inlineCode",{parentName:"li"},"Match.toInt()")," (the same for ",Object(a.b)("inlineCode",{parentName:"li"},"MatchGroup"),")"),Object(a.b)("li",{parentName:"ul"},"Removed ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->match()->test()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"fails()"),". From now on, use ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->test()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"fails()")),Object(a.b)("li",{parentName:"ul"},"Removed ",Object(a.b)("inlineCode",{parentName:"li"},"is()"),":",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is()->delimited()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is()->usable()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"is()->valid()")," is changed to ",Object(a.b)("inlineCode",{parentName:"li"},"valid()")))),Object(a.b)("li",{parentName:"ul"},"Removed ",Object(a.b)("inlineCode",{parentName:"li"},"split()->ex()"),", changed ",Object(a.b)("inlineCode",{parentName:"li"},"split()->inc()")," to ",Object(a.b)("inlineCode",{parentName:"li"},"split()")))),Object(a.b)("li",{parentName:"ul"},"Features",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"Match.group().replace()")," \ud83d\udd25"),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->match()->fluent()")," \ud83d\udd25"),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->match()->asInt()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->match()->distinct()")," (leaves only unique matches)"),Object(a.b)("li",{parentName:"ul"},"Added prepared pattern method ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (see below)"),Object(a.b)("li",{parentName:"ul"},"In ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->match()->groups()"),":",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"groups()->forEach()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"iterate()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"groups()->flatMap()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"groups()->map()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"group()->fluent()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"groups()->names()")," (and ",Object(a.b)("inlineCode",{parentName:"li"},"namedGroups()->names()"),")"),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"groups()->count()")," (and ",Object(a.b)("inlineCode",{parentName:"li"},"namedGroups()->count()"),")"))),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"match()->offsets()->fluent()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"match()->group(string)->offsets()->fluent()")),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"pattern()->forArray()->strict()")," which throws for invalid values, instead of filtering them out"))),Object(a.b)("li",{parentName:"ul"},"SafeRegex",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"preg::grep_keys()")," \ud83d\udd25, that works exactly like ",Object(a.b)("inlineCode",{parentName:"li"},"preg::grep()"),", but filters by keys (also accepts ",Object(a.b)("a",i({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-grep.php"}),Object(a.b)("inlineCode",{parentName:"a"},"PREG_GREP_INVERT")),")"))),Object(a.b)("li",{parentName:"ul"},"Enhancements/updates",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Method ",Object(a.b)("inlineCode",{parentName:"li"},"by()->group()->orElse()")," now receives lazy-loaded ",Object(a.b)("inlineCode",{parentName:"li"},"Match"),", instead of a subject"),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"withReferences()")," to ",Object(a.b)("inlineCode",{parentName:"li"},"CompositePattern.chainedReplace()")),Object(a.b)("li",{parentName:"ul"},"Previously named ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," is renamed to ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::bind()")),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::bind()")," (old ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::inject()"),") still accepts values as an associative array, but new ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern::inject()")," receives values without regard for the keys."),Object(a.b)("li",{parentName:"ul"},"Fixed passing invalid types to ",Object(a.b)("inlineCode",{parentName:"li"},"forArray()"),". Previously, caused fatal error due to internal ",Object(a.b)("inlineCode",{parentName:"li"},"preg_grep()")," implementation."))),Object(a.b)("li",{parentName:"ul"},"Other",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Now ",Object(a.b)("inlineCode",{parentName:"li"},"MalformedPatternException")," is thrown, instead of ",Object(a.b)("inlineCode",{parentName:"li"},"CompileSafeRegexException"),", when using invalid PCRE syntax."),Object(a.b)("li",{parentName:"ul"},"Returning ",Object(a.b)("inlineCode",{parentName:"li"},"Match")," from ",Object(a.b)("inlineCode",{parentName:"li"},"replace()->callback()")," (instead of ",Object(a.b)("inlineCode",{parentName:"li"},"Match.text()")," as ",Object(a.b)("inlineCode",{parentName:"li"},"string"),")"),Object(a.b)("li",{parentName:"ul"},"Match ",Object(a.b)("inlineCode",{parentName:"li"},"+12")," is no longer considered a valid integer for ",Object(a.b)("inlineCode",{parentName:"li"},"isInt()"),"/",Object(a.b)("inlineCode",{parentName:"li"},"toInt()")),Object(a.b)("li",{parentName:"ul"},"Unnamed group will be represented as ",Object(a.b)("inlineCode",{parentName:"li"},"null")," in ",Object(a.b)("inlineCode",{parentName:"li"},"Match.groupNames()"),", instead of being simply ignored"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"helper()")," method, ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern")," and ",Object(a.b)("inlineCode",{parentName:"li"},"PatternBuilder")," now return interface ",Object(a.b)("inlineCode",{parentName:"li"},"PatternInterface"),", instead of ",Object(a.b)("inlineCode",{parentName:"li"},"Pattern")," class.\n",Object(a.b)("inlineCode",{parentName:"li"},"Pattern")," class now only holds static utility methods, and ",Object(a.b)("inlineCode",{parentName:"li"},"PatternImpl")," holds the pattern implementation."))),Object(a.b)("li",{parentName:"ul"},"Maintenance",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"PhpUnit throws different exceptions because of ",Object(a.b)("a",i({parentName:"li"},{href:"https://wiki.php.net/rfc/tostring_exceptions"}),"PHP ",Object(a.b)("inlineCode",{parentName:"a"},"__toString()")," exception policy change"),".")))),Object(a.b)("p",null,"Foot note:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Apart from PHP type hints, every version up to this point could be run on PHP 5.3 (if one removes type hints from\ncode, one can run T-Regx on PHP 5.3). Every error, exception, malfunction, inconsistency was handled correctly by\nT-Regx. From this version on (",Object(a.b)("inlineCode",{parentName:"li"},"0.9.2"),"), handling of the errors and inconsistencies is dropped, since T-Regx now\nonly supports PHP 7.1.")),Object(a.b)("p",null,"Hope you guys will like and enjoy it! "))}c.isMDXComponent=!0},215:function(e,t,n){"use strict";var a=n(216),i={};i[n(11)("toStringTag")]="z",i+""!="[object z]"&&n(18)(Object.prototype,"toString",(function(){return"[object "+a(this)+"]"}),!0)},216:function(e,t,n){var a=n(54),i=n(11)("toStringTag"),r="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,n,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),i))?n:r?a(t):"Object"==(l=a(t))&&"function"==typeof t.callee?"Arguments":l}},217:function(e,t,n){var a=n(52),i=n(34);n(218)("keys",(function(){return function(e){return i(a(e))}}))},218:function(e,t,n){var a=n(51),i=n(17),r=n(33);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],l={};l[e]=t(n),a(a.S+a.F*r((function(){n(1)})),"Object",l)}},220:function(e,t,n){var a=n(51);a(a.S+a.F,"Object",{assign:n(221)})},221:function(e,t,n){"use strict";var a=n(34),i=n(222),r=n(223),l=n(52),b=n(55),o=Object.assign;e.exports=!o||n(33)((function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=o({},e)[n]||Object.keys(o({},t)).join("")!=a}))?function(e,t){for(var n=l(e),o=arguments.length,c=1,p=i.f,d=r.f;o>c;)for(var s,m=b(arguments[c++]),u=p?a(m).concat(p(m)):a(m),j=u.length,O=0;j>O;)d.call(m,s=u[O++])&&(n[s]=m[s]);return n}:o},222:function(e,t){t.f=Object.getOwnPropertySymbols},223:function(e,t){t.f={}.propertyIsEnumerable}}]);