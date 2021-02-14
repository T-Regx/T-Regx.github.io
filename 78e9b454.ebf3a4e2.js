(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{185:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(201),i=n(200),c=n(203),u=n.n(c),l=n(199),s=[{title:"Browse Docs",content:"Learn more using the [documentation on this site](/docs/introduction-safe). Feel free to visit:\n\n* [Matching](/docs/match)\n* [Match details](/docs/match-details)\n* [Replacing](/docs/replace)\n* [Prepared patterns](/docs/prepared-patterns)\n* [Automatic delimiters](/docs/delimiters)\n* [Validate pattern](/docs/valid)\n    "},{title:"Stay up to date",content:"Find out what's new with this project on [Blog](blog). We'll inform about new releases in advances and anything that needs to happen sooner than a new version.\n    \nCan you find a hidden Matrix reference? :)    \n    "},{title:"Create GitHub issue",content:"Issues on [github](https://github.com/T-Regx/T-Regx/issues/new/choose) are more than welcome. Feel free to:\n  \n* create a [feature request](https://github.com/T-Regx/T-Regx/issues/new?template=feature-request.md)\n* report [a bug](https://github.com/T-Regx/T-Regx/issues/new?template=i-found-a-bug.md)\n* or simply ask a [question](https://github.com/T-Regx/T-Regx/issues/new?template=i-have-a-question.md)\n\nWe'll answer as fast as we can :)\n    "},{title:"Robust Docs",content:"Continuous integration tests are being run for each code example in the documentation every new update of the documentation. That way, we can be 100% sure the code examples you see in the documentation are compatible with the given T-Regx version."},{title:"Join the discussion below!",content:"Ask as many questions about the documentation and the project as you need We'll try to answer them as fast as we can! <br><br><br> ![style](/img/t.regx.discussion.png)"}],p=(t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",null,a.a.createElement("h1",null,"Need help?"),a.a.createElement("p",null,"This project is maintained by a dedicated group of people. If you have experienced any bugs or problems, you're welcome to submit an ",a.a.createElement(p,null,"issue on github!")," :) It never takes us more than 24h to respond!"),a.a.createElement("div",{className:"row"},a.a.createElement(f,null)),a.a.createElement(l.a,{title:"T-Regx Help",identifier:"5afe7e280900a14e5a8edaae9a618a74"}))))},function(e){var t=e.children;return a.a.createElement("a",{href:"https://github.com/T-Regx/T-Regx/issues/new/choose"},t)}),f=function(){return s.map((function(e,t){var n=e.title,r=e.content;return a.a.createElement("div",{key:t,className:u()("col margin-vert--md",{"col--4":t<=2,"col-6":t>2})},a.a.createElement("h2",null,n),a.a.createElement(i.a,null,r))}))}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(191);t.a=function(e){var t=e.title,n=e.identifier,i=(Object(o.a)(),function(){this.page.identifier=n,this.page.disqus_identifiers=n,t&&(this.page.title=t),this.page.url="https://t-regx.com"+location.pathname});return Object(r.useEffect)((function(){if(window.DISQUS)window.DISQUS.reset({reload:!0,config:i});else{window.disqus_config=i;var e=document.createElement("script");e.src="https://t-regx.disqus.com/embed.js",e.setAttribute("data-timestamp",""+ +new Date),e.setAttribute("async","true"),document.body.appendChild(e)}})),a.a.createElement("div",{id:"disqus_thread"})}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ue}));var r=n(0),a=n.n(r),o=n(204),i=n.n(o),c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,m=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,y=/^ {2,}\n/,k=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,S=/\r\n?/g,T=/^\[\^([^\]]+)](:.*)\n/,E=/^\[\^([^\]]+)]/,C=/\f/g,R=/^\s*?\[(x|\s)\]/,A=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,$=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,O=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,j=/&([a-z]+);/g,z=/^<!--.*?-->/,I=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,_=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,q=/^\{.*\}$/,B=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,L=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,N=/ *\n+$/,D=/(?:^|\n)( *)$/,M=/-([a-z])?/gi,P=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,F=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Z=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,W=/^\[([^\]]*)\] ?\[([^\]]*)\]/,G=/(\[|\])/g,J=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Q=/\t/g,V=/^ *\| */,K=/(^ *\||\| *$)/g,X=/ *$/,Y=/^ *:-+: *$/,ee=/^ *:-+ *$/,te=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ae=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,oe=/^\\([^0-9A-Za-z\s])/,ie=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ce=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,se=/^( *)((?:[*+-]|\d+\.)) +/,pe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,de=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,me=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=[h,b,v,A,$,O,z,_,pe,fe,P,F];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ye(e){return te.test(e)?"right":Y.test(e)?"center":ee.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(X,"")),o[o.length-1].push(e))})),o}function ve(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=function(e){return e.replace(K,"").split("|").map(ye)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function xe(e){function t(r,a){for(var o=[],i="";r;)for(var c=0;c<n.length;){var u=n[c],l=e[u],s=l.match(r,a,i);if(s){var p=s[0];r=r.substring(p.length);var f=l.parse(s,t,a);null==f.type&&(f.type=u),o.push(f),i=p;break}c++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(S,"\n").replace(C,"").replace(Q,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function Se(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ee(e){return function(t){return e.exec(t)}}function Ce(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Re(e){return e.replace(le,"$1")}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function $e(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Oe(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function je(e,t,n){return{content:Ae(t,e[1],n)}}function ze(){return{}}function Ie(){return null}function _e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function qe(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Be(e,t){var n=qe(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":u(n))&&"render"in n?n:qe(t,e+".component",e):e}function Le(e,t){function n(e,n){for(var r=qe(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return u.apply(void 0,[Be(e,t.overrides),c({},n,r,{className:_e(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===J.test(e));var a=X(K(r?e:e.replace(ce,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function o(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var o=t.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(I)&&(e=e.replace(M,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,o)).trim(),u=i()(t.slice(o+1).trim()),s=l[c]||c,p=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ce(t):(t.match(q)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,u);(O.test(p)||_.test(p))&&(e[s]=a.a.cloneElement(r(p.trim()),{key:n}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?c({},s,t.namedCodesToUnicode):s;var u=t.createElement||a.a.createElement;var S=[],C={},Q={blockQuote:{match:Te(h),order:2,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ee(y),order:2,parse:ze,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Te(k),order:2,parse:ze,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Te(b),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Te(v),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Se(x),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Te(T),order:1,parse:function(e){return S.push({footnote:e[2],identifier:e[1]}),{}},react:Ie},footnoteReference:{match:we(E),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:we(R),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Te(A),order:2,parse:function(e,n,r){return{content:Ae(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Te($),order:1,parse:function(e,t,n){return{content:Ae(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ee(z),order:2,parse:function(){return{}},react:Ie},image:{match:Se(me),order:2,parse:function(e){return{alt:e[1],target:Re(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Ce(e.target)})}},link:{match:we(de),order:4,parse:function(e,t,n){return{content:$e(t,e[1],n),target:Re(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Ce(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:we(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(B),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(L),order:1,parse:function(e){var t=e[1],n=e[1];return d.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=D.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,fe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,i=e[0].replace(m,"\n").match(pe),c=!1;return{items:i.map((function(e,r){var a=se.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),u=e.replace(o,"").replace(se,""),l=r===i.length-1,s=-1!==u.indexOf("\n\n")||l&&c;c=s;var p,f=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,p=u.replace(N,"\n\n")):(n.inline=!0,p=u.replace(N,""));var m=t(p,n);return n.inline=f,n._list=d,m})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Te(w),order:4,parse:ze,react:function(){return"\n"}},paragraph:{match:Te(F),order:4,parse:je,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:we(Z),order:1,parse:function(e){return C[e[1]]={target:e[2],title:e[4]},{}},react:Ie},refImage:{match:Se(H),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Ce(C[e.ref].target),title:C[e.ref].title})}},refLink:{match:we(W),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(G,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return C[e.ref]?n("a",{key:r.key,href:Ce(C[e.ref].target),title:C[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Te(P),order:2,parse:ve,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:be(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:be(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?V.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ee(ie),order:5,parse:function(e){return{content:e[0].replace(j,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Se(ne),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Se(re),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Se(oe),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Se(ae),order:4,parse:je,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(Q.htmlBlock={match:Ee(O),order:2,parse:function(e,t,n){var r=e[3].match(ue)[1],a=new RegExp("^"+r,"gm"),i=e[3].replace(a,""),c=function(e){return he.some((function(t){return t.test(e)}))}(i)?Oe:Ae,u=e[1].toLowerCase(),l=-1!==p.indexOf(u);return{attrs:o(e[2]),content:l?e[3]:c(t,i,n),noInnerParse:l,tag:l?u:e[1]}},react:function(e,t,r){return n(e.tag,c({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},Q.htmlSelfClosing={match:Ee(_),order:2,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,c({},e.attrs,{key:r.key}))}});var K=xe(Q),X=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],i=!1,c=0;c<n.length;c++){r.key=c;var u=t(n[c],r),l="string"==typeof u;l&&i?o[o.length-1]+=u:o.push(u),i=l}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(Q)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return S.length&&Y.props.children.push(n("footer",{key:"footer"},S.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,X(K(e.footnote,{inline:!0})))})))),Y}function Ue(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Le(t,n),r)}},204:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);