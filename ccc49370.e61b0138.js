(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{244:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(276),s=a(298),l=a(325),c=a(284);t.default=function(e){console.log(e);var t=e.content,a=e.metadata,r=(e.nextItem,e.prevItem,t.frontMatter);return n.a.createElement(i.a,{title:a.title,description:a.description},t&&n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(s.a,{frontMatter:r,metadata:a},n.a.createElement(t,null)),n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(l.a,{nextItem:a.nextItem,prevItem:a.prevItem})))),n.a.createElement(c.d,{identifier:a.permalink,path:a.permalink,title:a.title})))}},284:function(e,t,a){"use strict";a(277),a(282);var r=a(0),n=a.n(r),i=a(271),s=a(125),l=a.n(s),c=function(e){var t=e.src,a=e.title,r=void 0===a?"":a;return n.a.createElement("div",{className:l.a.projectLogo},n.a.createElement("img",{src:t,alt:"Project Logo",title:r}))},o=function(e){var t=e.name;if("valentine"===t)return n.a.createElement(h,{heart:Object(i.a)("img/heart.png"),dino:Object(i.a)("img/t.regx.png"),title:"Valentine's Day T-Regx"});var a={regular:{src:"t.regx.png",title:"T-Regx"},carnival:{src:"t.regx.carnival.png",title:"Carnival T-Regx"},easter:{src:"t.regx.easter.png",title:"Easter T-Regx"},holiday:{src:"t.regx.summer.png",title:"Holiday T-Regx"},halloween:{src:"t.regx.halloween.png",title:"Halloween T-Regx"},christmas:{src:"t.regx.santa.png",title:"Santa T-Regx"}}[t];return n.a.createElement(c,{src:Object(i.a)("img/"+a.src),title:a.name})},g=function(){var e,t,a,r,i=function(e,t){return e+31*t};return n.a.createElement(o,{name:(r=new Date,e=r.getDate(),t=r.getMonth()+1,(a=[{start:[30,12],end:[2,1],name:"newyears"},{start:[12,2],end:[17,2],name:"valentine"},{start:[6,1],end:[25,2],name:"carnival"},{start:[20,3],end:[4,4],name:"easter"},{start:[30,6],end:[31,8],name:"holiday"},{start:[30,10],end:[31,10],name:"halloween"},{start:[6,12],end:[29,12],name:"christmas"}].find((function(a){var r=a.start,n=a.end,s=i.apply(void 0,r),l=i.apply(void 0,n),c=i(e,t);return s<=c&&c<=l})))?a.name:"regular")})},u=a(267),m=a.n(u),p=a(126),d=a.n(p),h=function(e){var t=e.heart,a=e.dino;return n.a.createElement("div",{className:d.a.valentinesDino},n.a.createElement("div",{className:d.a.subContainer},n.a.createElement("img",{src:t,alt:"",className:m()(d.a.heart,d.a.moveVertical)})),n.a.createElement("div",{className:m()(d.a.subContainer,d.a.c2)},n.a.createElement("img",{src:t,alt:"",className:m()(d.a.heart,d.a.moveVertical)})),n.a.createElement("div",{className:m()(d.a.subContainer,d.a.c3)},n.a.createElement("img",{src:t,alt:"",className:m()(d.a.heart,d.a.moveVertical)})),n.a.createElement("img",{src:a,alt:"",className:d.a.tRegx}))},v=(a(51),{upper:[{title:"Build Status",src:"https://travis-ci.org/T-Regx/T-Regx.svg?branch=master",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"Coverage Status",src:"https://coveralls.io/repos/github/T-Regx/T-Regx/badge.svg?branch=master",href:"https://coveralls.io/github/T-Regx/T-Regx?branch=master"},{title:"Dependencies",src:"https://img.shields.io/badge/dependencies-0-brightgreen.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"Repository Size",src:"https://github-size-badge.herokuapp.com/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"License",src:"https://img.shields.io/github/license/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"GitHub last commit",src:"https://img.shields.io/github/last-commit/T-Regx/T-Regx/develop.svg",href:"https://github.com/T-Regx/T-Regx"},{title:'GitHub commit activity"',src:"https://img.shields.io/github/commit-activity/y/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"}],lower:[{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.1-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.2-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.3-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.4-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-8.0-yellow.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=popout",href:"http://makeapullrequest.com"}]}),f=a(127),x=a.n(f);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var b=function(e){return n.a.createElement("a",{href:e.href,title:e.title},n.a.createElement("img",{src:e.src,alt:e.title,className:x.a.badge}))},E=function(){var e=v.upper,t=v.lower;return n.a.createElement("div",{className:x.a.badgesSection},n.a.createElement("div",{className:x.a.upperBadges},e.map((function(e,t){return n.a.createElement(b,R({key:t},e))}))),n.a.createElement("div",{className:x.a.lowerBadges},t.map((function(e,t){return n.a.createElement(b,R({key:t},e))}))))},T=a(273),w=a(128),y=a.n(w),P=[{title:"Invalid pattern<sup>(eg. `/unclosed[A-/`)</sup>",php:"Issues a warning",tRegx:"`MalformedPatternException` with descriptive message"},{title:"Corrupted subject<sup>(eg. malformed utf-8 sequence)</sup>",php:"\n* Different methods return different error values (`false`, `null` or `[]`)\n* `preg_last_error()` returns error code",tRegx:"`RuntimeCleanRegexException` with descriptive message"},{title:"Overly complex pattern<sup>(eg. containing `?R`)</sup>",php:"\n* No warning\n* `preg_last_error()` returns error code\n        ",tRegx:"`RuntimeSafeRegexException` with descriptive message"},{title:"Returning an invalid replacement value",php:"\n - `preg_last_error()` returns **success** code <sup>(returns `PREG_NO_ERROR`)</sup>\n - Silently converts the value to string <sup>(e.g. `integer`)<sup>\n - Raises a warning <sup>(e.g. `array`)<sup>\n - Throws a fatal error, terminating the application <sup>(e.g. `stdClass`, objects without `__toString`)<sup>",tRegx:"`InvalidReplacementException` with descriptive message"},{title:"Using an invalid capturing group name<sup>(eg. name `!@#$`, index `-2`)</sup>",php:"Actually tries to get the group",tRegx:"`InvalidArgumentException` with descriptive message"},{title:"Using a nonexistent group<sup>(group name typo, group deleted)</sup>",php:"Actually tries to get the group",tRegx:"`NonexistentGroupException` with descriptive message"},{title:"Using an un-matched group<sup>(conditional group, unmatched by subject)",php:"Actually tries to get the group",tRegx:"`GroupNotMatchedException` with descriptive message"},{title:"Offsets in UTF-8<sup>(eg. 18\u20ac)</sup>",php:"In bytes<sup>5 bytes</sup>",tRegx:" - Method `offset()` - 3 characters\n - Method `byteOffset()` - 5 bytes"},{title:"Worst case complexity",php:"`(string|int|null)[][][]`<sup>array of arrays of arrays of string/null and integer - `preg_match_all()` with `PREG_OFFSET_CAPTURE`</sup>",tRegx:"`string[]`<sup>array of strings</sup>"}];var N=function(){var e=P.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,n.a.createElement(T.a,null,e.title)),n.a.createElement("td",null,n.a.createElement(T.a,null,e.php)),n.a.createElement("td",null,n.a.createElement(T.a,null,e.tRegx)))}));return n.a.createElement("table",{className:y.a.comparisonTable,width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,"Plain PHP"),n.a.createElement("th",null,"T-Regx")),n.a.createElement("tr",{className:y.a.logoRow},n.a.createElement("th",null),n.a.createElement("th",null,n.a.createElement("img",{src:Object(i.a)("/img/comparison/php.png"),alt:"Plain PHP"})),n.a.createElement("th",null,n.a.createElement("img",{src:Object(i.a)("/img/t.regx.png"),alt:"T-Regx"})))),n.a.createElement("tbody",null,e))},H=a(270),j=function(e){var t=e.shortName,a=void 0===t?"t-regx":t,i=e.identifier,s=void 0===i?"46dff8e37535ddb3571510672d1af48683bad013":i,l=e.title,c=void 0===l?"Questions about T-Regx":l,o=(e.path,Object(H.a)().siteConfig,function(){this.page.identifier=s,c&&(this.page.title=c),this.page.url=location.href});return Object(r.useEffect)((function(){if(window.DISQUS)window.DISQUS.reset({reload:!0,config:o});else{window.disqus_config=o;var e=document.createElement("script");e.src="https://"+a+".disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),e.setAttribute("async",!0),document.body.appendChild(e)}})),n.a.createElement("div",{id:"disqus_thread"})},O=function(){var e=Object(H.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement("a",{className:"github-button",href:t.customFields.mainRepoUrl,title:"See this project on GitHub","data-icon":"octicon-star","data-show-count":"true","data-count-href":"/"+t.organizationName+"/"+t.projectName+"/stargazers","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"T-Regx")};a.d(t,"a",(function(){return g})),a.d(t,"f",(function(){return h})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return N})),a.d(t,"d",(function(){return j})),a.d(t,"e",(function(){return O}))}}]);