(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));n(0);var a=n(207);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const l={title:"Welcome T-Regx",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},i=[],o={rightToc:i},b="wrapper";function s({components:e,...t}){return Object(a.b)(b,r({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The library changes its name! Now it's called ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx"}),"T-Regx"),"! It's a combination of\nwords ",Object(a.b)("em",{parentName:"p"},'"T-Rex"')," - the dinosaur - and ",Object(a.b)("em",{parentName:"p"},'"RegExp"'),"."),Object(a.b)("p",null,"Also, I've invested much more time into the development of ",Object(a.b)("del",{parentName:"p"},"CleanRegex")," T-Regx. Read on, for a detailed list of features."),Object(a.b)("p",null,"Here are the results:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Library changed its name. :D"),Object(a.b)("li",{parentName:"ul"},"PHP silences almost all of buggy situations, so T-Regx is now throwing different exceptions for:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Invalid pattern - ",Object(a.b)("em",{parentName:"li"},"should never happen in prod")),Object(a.b)("li",{parentName:"ul"},"Unmatched subject - should be handled by the developer"),Object(a.b)("li",{parentName:"ul"},"Invalid group name (like ",Object(a.b)("inlineCode",{parentName:"li"},"_*"),") - ",Object(a.b)("em",{parentName:"li"},"should never happen")),Object(a.b)("li",{parentName:"ul"},"Nonexistent group name (one that wasn't used in a pattern) - ",Object(a.b)("em",{parentName:"li"},"should never happen")),Object(a.b)("li",{parentName:"ul"},"Group index exceeding number of groups - ",Object(a.b)("em",{parentName:"li"},"should never happen")),Object(a.b)("li",{parentName:"ul"},"Negative group index - ",Object(a.b)("em",{parentName:"li"},"should never happen")),Object(a.b)("li",{parentName:"ul"},"Group that wasn't matched by subject - should be handled by the developer"),Object(a.b)("li",{parentName:"ul"},"Capture a split delimiter, that's not inside a capturing group - ",Object(a.b)("em",{parentName:"li"},"should never happen")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"forFirst()"),' for matches, replacements and groups - useful in cases of "should be handled by the developer"'),Object(a.b)("li",{parentName:"ul"},"PCRE returns offsets as bytes, always. T-Regx now returns these offsets as characters, using ",Object(a.b)("inlineCode",{parentName:"li"},"mb_string")," extension.\nYou can still get offsets in bytes using ",Object(a.b)("inlineCode",{parentName:"li"},"->byteOffset()")," method."),Object(a.b)("li",{parentName:"ul"},"Added ",Object(a.b)("inlineCode",{parentName:"li"},"CompositePattern")," class. It's used to perform operations of many patterns and on one subject, like:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Check if all patterns match a subject"),Object(a.b)("li",{parentName:"ul"},"Check if any pattern matches a subject"),Object(a.b)("li",{parentName:"ul"},"Invoke many replacements, and pass result of one ",Object(a.b)("inlineCode",{parentName:"li"},"preg_replace()")," as a subject to the other.")))),Object(a.b)("p",null,"But it's still a long way until ",Object(a.b)("inlineCode",{parentName:"p"},"T-Regx 1.0")," is released. :)"))}s.isMDXComponent=!0}}]);