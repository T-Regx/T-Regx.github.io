(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{164:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(271),c=n(274);t.default=function(){return a.a.createElement(c.a,null,a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"post"},a.a.createElement("img",{src:"/img/blue-matrix-wide.jpg",alt:"Matrix code"})),a.a.createElement("br",null),a.a.createElement("div",{className:"post",style:{display:"flex"}},a.a.createElement("img",{src:"/img/t.regx.matrix.png",alt:"T-Regx in the dream world"}),a.a.createElement(o.a,null,"> Have you ever had a dream, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?"))))}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return Pe}));var r=n(0),a=n.n(r),o=n(272),c=n.n(o),i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},f=["style","script"],p=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,m=/\n{2,}$/,y=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,h=/^ {2,}\n/,k=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,v=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,w=/^(?:\n *)*\n/,S=/\r\n?/g,E=/^\[\^(.*)\](:.*)\n/,C=/^\[\^(.*)\]/,T=/\f/g,$=/^\s*?\[(x|\s)\]/,O=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,z=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,L=/&([a-z]+);/g,_=/^<!--.*?-->/,B=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,N=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,U=/^\{.*\}$/,j=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,M=/ *\n+$/,R=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,H=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,Z=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,q=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,G=/^\[([^\]]*)\] ?\[([^\]]*)\]/,J=/(\[|\])/g,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,W=/\t/g,K=/^ *\| */,Q=/(^ *\||\| *$)/g,X=/ *$/,Y=/^ *:-+: *$/,ee=/^ *:-+ *$/,te=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ae=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,oe=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ie=/(^\n+|\n+$|\s+$)/g,le=/^([ \t]*)/,ue=/\\([^0-9A-Z\s])/gi,se=/^( *)((?:[*+-]|\d+\.)) +/,fe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,pe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,de=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,me=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ye=[y,b,v,O,A,z,_,N,fe,pe,F,H];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function he(e){return te.test(e)?"right":Y.test(e)?"center":ee.test(e)?"left":null}function ke(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var o=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&o.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(X,"")),o[o.length-1].push(e))})),o}function ve(e,t,n){n.inline=!0;var r=ke(e[1],t,n),a=function(e){return e.replace(Q,"").split("|").map(he)}(e[2]),o=function(e,t,n){return e.trim().split("\n").map((function(e){return ke(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:o,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function xe(e){function t(r,a){for(var o=[],c="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,c);if(s){var f=s[0];r=r.substring(f.length);var p=u.parse(s,t,a);null==p.type&&(p.type=l),o.push(p),c=f;break}i++}return o}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(S,"\n").replace(T,"").replace(W,"    ")}(e),n)}}function we(e){return function(t,n){return n.inline?e.exec(t):null}}function Se(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Ee(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ce(e){return function(t){return e.exec(t)}}function Te(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(t){return null}return e}function $e(e){return e.replace(ue,"$1")}function Oe(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function Ae(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var o=e(t,n);return n.inline=r,n.simple=a,o}function ze(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Le(e,t,n){return{content:Oe(t,e[1],n)}}function _e(){return{}}function Be(){return null}function Ne(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Ue(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function je(e,t){var n=Ue(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":l(n))&&"render"in n?n:Ue(t,e+".component",e):e}function Ie(e,t){function n(e,n){for(var r=Ue(t.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),c=2;c<a;c++)o[c-2]=arguments[c];return l.apply(void 0,[je(e,t.overrides),i({},n,r,{className:Ne(n&&n.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===V.test(e));var a=X(Q(r?e:e.replace(ie,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=n("span",{key:"outer"},o)):o=n("span",{key:"outer"}),o}function o(e){var t=e.match(p);return t?t.reduce((function(e,t,n){var o=t.indexOf("=");if(-1!==o){var i=function(e){return-1!==e.indexOf("-")&&null===e.match(B)&&(e=e.replace(D,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,o)).trim(),l=c()(t.slice(o+1).trim()),s=u[i]||i,f=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Te(t):(t.match(U)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,l);(z.test(f)||N.test(f))&&(e[s]=a.a.cloneElement(r(f.trim()),{key:n}))}else e[u[t]||t]=!0;return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},s,t.namedCodesToUnicode):s;var l=t.createElement||a.a.createElement;var S=[],T={},W={blockQuote:{match:Ee(y),order:2,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ce(h),order:2,parse:_e,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Ee(k),order:2,parse:_e,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Ee(b),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ee(v),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Se(x),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Ee(E),order:1,parse:function(e){return S.push({footnote:e[2],identifier:e[1]}),{}},react:Be},footnoteReference:{match:we(C),order:2,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:Te(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:we($),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ee(O),order:2,parse:function(e,n,r){return{content:Oe(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Ee(A),order:1,parse:function(e,t,n){return{content:Oe(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ce(_),order:2,parse:function(){return{}},react:Be},image:{match:Se(me),order:2,parse:function(e){return{alt:e[1],target:$e(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Te(e.target)})}},link:{match:we(de),order:4,parse:function(e,t,n){return{content:Ae(t,e[1],n),target:$e(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Te(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:we(P),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:we(j),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:we(I),order:1,parse:function(e){var t=e[1],n=e[1];return d.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=R.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,pe.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(m,"\n").match(fe),i=!1;return{items:c.map((function(e,r){var a=se.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(se,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var f,p=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,f=l.replace(M,"\n\n")):(n.inline=!0,f=l.replace(M,""));var m=t(f,n);return n.inline=p,n._list=d,m})),ordered:a,start:o}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Ee(w),order:4,parse:_e,react:function(){return"\n"}},paragraph:{match:Ee(H),order:4,parse:Le,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:we(Z),order:1,parse:function(e){return T[e[1]]={target:e[2],title:e[4]},{}},react:Be},refImage:{match:Se(q),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Te(T[e.ref].target),title:T[e.ref].title})}},refLink:{match:we(G),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(J,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return T[e.ref]?n("a",{key:r.key,href:Te(T[e.ref].target),title:T[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Ee(F),order:2,parse:ve,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,o){return n("th",{key:o,style:be(e,o)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,o){return n("tr",{key:o},a.map((function(a,o){return n("td",{key:o,style:be(e,o)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?K.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ce(ce),order:5,parse:function(e){return{content:e[0].replace(L,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Se(ne),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Se(re),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Se(oe),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Se(ae),order:4,parse:Le,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(W.htmlBlock={match:Ce(z),order:2,parse:function(e,t,n){var r=e[3].match(le)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return ye.some((function(t){return t.test(e)}))}(c)?ze:Oe,l=e[1].toLowerCase(),u=-1!==f.indexOf(l);return{attrs:o(e[2]),content:u?e[3]:i(t,c,n),noInnerParse:u,tag:u?l:e[1]}},react:function(e,t,r){return n(e.tag,i({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},W.htmlSelfClosing={match:Ce(N),order:2,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,i({},e.attrs,{key:r.key}))}});var Q=xe(W),X=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,o=[],c=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),u="string"==typeof l;u&&c?o[o.length-1]+=l:o.push(l),c=u}return r.key=a,o}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(W)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return S.length&&Y.props.children.push(n("footer",{key:"footer"},S.map((function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,X(Q(e.footnote,{inline:!0})))})))),Y}function Pe(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ie(t,n),r)}},272:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);