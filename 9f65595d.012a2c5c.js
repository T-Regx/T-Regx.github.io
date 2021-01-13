(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{130:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(193),c=n(192),o=n(202);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"text--center1 margin-bottom--xl"},a.a.createElement("h1",null,"Comparison table of plain PHP and T-Regx"),a.a.createElement(c.a,null,"Here's a little table of some of the differences between the behaviour of plain PHP `preg_*()` methods and T-Regx API.")),a.a.createElement(o.c,null),a.a.createElement(o.d,{title:"Questions about T-Regx Comparison",identifier:"7eb37bee54d5e7315fd19ebdc4c56cf7"})))}},191:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(183);t.a=function(e){var t=e.title,n=e.identifier,c=(Object(i.a)(),function(){this.page.identifier=n,t&&(this.page.title=t),this.page.url=location.href});return Object(r.useEffect)((function(){if(window.DISQUS)window.DISQUS.reset({reload:!0,config:c});else{window.disqus_config=c;var e=document.createElement("script");e.src="https://t-regx.disqus.com/embed.js",e.setAttribute("data-timestamp",""+ +new Date),e.setAttribute("async","true"),document.body.appendChild(e)}})),a.a.createElement("div",{id:"disqus_thread"})}},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ue}));var r=n(0),a=n.n(r),i=n(196),c=n.n(i),o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],g=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,f=/\n{2,}$/,d=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,h=/^ *> ?/gm,y=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,R=/^(?:\n *)*\n/,E=/\r\n?/g,T=/^\[\^([^\]]+)](:.*)\n/,w=/^\[\^([^\]]+)]/,P=/\f/g,S=/^\s*?\[(x|\s)\]/,O=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,C=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,N=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,j=/&([a-z]+);/g,_=/^<!--.*?-->/,H=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,A=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,z=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,U=/^<([^ >]+:\/[^ >]+)>/,D=/ *\n+$/,L=/(?:^|\n)( *)$/,B=/-([a-z])?/gi,V=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,G=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,M=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,F=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,J=/\t/g,W=/^ *\| */,K=/(^ *\||\| *$)/g,X=/ *$/,Y=/^ *:-+: *$/,ee=/^ *:-+ *$/,te=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ae=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,ce=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,oe=/(^\n+|\n+$|\s+$)/g,se=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ue=/^( *)((?:[*+-]|\d+\.)) +/,pe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,ge=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,me=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,fe=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,de=[d,b,x,O,C,N,_,A,pe,ge,V,G];function he(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ye(e){return te.test(e)?"right":Y.test(e)?"center":ee.test(e)?"left":null}function ve(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var i=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&i.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(X,"")),i[i.length-1].push(e))})),i}function xe(e,t,n){n.inline=!0;var r=ve(e[1],t,n),a=function(e){return e.replace(K,"").split("|").map(ye)}(e[2]),i=function(e,t,n){return e.trim().split("\n").map((function(e){return ve(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:i,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ke(e){function t(r,a){for(var i=[],c="";r;)for(var o=0;o<n.length;){var s=n[o],l=e[s],u=l.match(r,a,c);if(u){var p=u[0];r=r.substring(p.length);var g=l.parse(u,t,a);null==g.type&&(g.type=s),i.push(g),c=p;break}o++}return i}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(E,"\n").replace(P,"").replace(J,"    ")}(e),n)}}function Re(e){return function(t,n){return n.inline?e.exec(t):null}}function Ee(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function we(e){return function(t){return e.exec(t)}}function Pe(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(t){return null}return e}function Se(e){return e.replace(le,"$1")}function Oe(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var i=e(t,n);return n.inline=r,n.simple=a,i}function Ce(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var i=e(t,n);return n.inline=r,n.simple=a,i}function Ne(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function je(e,t,n){return{content:Oe(t,e[1],n)}}function _e(){return{}}function He(){return null}function Ae(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function $e(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function ze(e,t){var n=$e(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":s(n))&&"render"in n?n:$e(t,e+".component",e):e}function Ie(e,t){function n(e,n){for(var r=$e(t.overrides,e+".props",{}),a=arguments.length,i=Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];return s.apply(void 0,[ze(e,t.overrides),o({},n,r,{className:Ae(n&&n.className,r.className)||void 0})].concat(i))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===Q.test(e));var a=X(K(r?e:e.replace(oe,"")+"\n\n",{inline:r})),i=void 0;return a.length>1?i=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(i=a[0])&&(i=n("span",{key:"outer"},i)):i=n("span",{key:"outer"}),i}function i(e){var t=e.match(g);return t?t.reduce((function(e,t,n){var i=t.indexOf("=");if(-1!==i){var o=function(e){return-1!==e.indexOf("-")&&null===e.match(H)&&(e=e.replace(B,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,i)).trim(),s=c()(t.slice(i+1).trim()),u=l[o]||o,p=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Pe(t):(t.match($)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(o,s);(N.test(p)||A.test(p))&&(e[u]=a.a.cloneElement(r(p.trim()),{key:n}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||he,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},u,t.namedCodesToUnicode):u;var s=t.createElement||a.a.createElement;var E=[],P={},J={blockQuote:{match:Te(d),order:2,parse:function(e,t,n){return{content:t(e[0].replace(h,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:we(y),order:2,parse:_e,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:Te(v),order:2,parse:_e,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:Te(b),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Te(x),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Ee(k),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:Te(T),order:1,parse:function(e){return E.push({footnote:e[2],identifier:e[1]}),{}},react:He},footnoteReference:{match:Re(w),order:2,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:Pe(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Re(S),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Te(O),order:2,parse:function(e,n,r){return{content:Oe(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:Te(C),order:1,parse:function(e,t,n){return{content:Oe(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:we(_),order:2,parse:function(){return{}},react:He},image:{match:Ee(fe),order:2,parse:function(e){return{alt:e[1],target:Se(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Pe(e.target)})}},link:{match:Re(me),order:4,parse:function(e,t,n){return{content:Ce(t,e[1],n),target:Se(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Pe(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Re(U),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Re(z),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Re(I),order:1,parse:function(e){var t=e[1],n=e[1];return m.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=L.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,ge.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,i=a?+r:void 0,c=e[0].replace(f,"\n").match(pe),o=!1;return{items:c.map((function(e,r){var a=ue.exec(e)[0].length,i=new RegExp("^ {1,"+a+"}","gm"),s=e.replace(i,"").replace(ue,""),l=r===c.length-1,u=-1!==s.indexOf("\n\n")||l&&o;o=u;var p,g=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=s.replace(D,"\n\n")):(n.inline=!0,p=s.replace(D,""));var f=t(p,n);return n.inline=g,n._list=m,f})),ordered:a,start:i}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:Te(R),order:4,parse:_e,react:function(){return"\n"}},paragraph:{match:Te(G),order:4,parse:je,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Re(M),order:1,parse:function(e){return P[e[1]]={target:e[2],title:e[4]},{}},react:He},refImage:{match:Ee(F),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Pe(P[e.ref].target),title:P[e.ref].title})}},refLink:{match:Re(q),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(Z,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return P[e.ref]?n("a",{key:r.key,href:Pe(P[e.ref].target),title:P[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:Te(V),order:2,parse:xe,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,i){return n("th",{key:i,style:be(e,i)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,i){return n("tr",{key:i},a.map((function(a,i){return n("td",{key:i,style:be(e,i)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?W.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:we(ce),order:5,parse:function(e){return{content:e[0].replace(j,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Ee(ne),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Ee(re),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Ee(ie),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Ee(ae),order:4,parse:je,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(J.htmlBlock={match:we(N),order:2,parse:function(e,t,n){var r=e[3].match(se)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),o=function(e){return de.some((function(t){return t.test(e)}))}(c)?Ne:Oe,s=e[1].toLowerCase(),l=-1!==p.indexOf(s);return{attrs:i(e[2]),content:l?e[3]:o(t,c,n),noInnerParse:l,tag:l?s:e[1]}},react:function(e,t,r){return n(e.tag,o({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},J.htmlSelfClosing={match:we(A),order:2,parse:function(e){return{attrs:i(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,o({},e.attrs,{key:r.key}))}});var K=ke(J),X=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,i=[],c=!1,o=0;o<n.length;o++){r.key=o;var s=t(n[o],r),l="string"==typeof s;l&&c?i[i.length-1]+=s:i.push(s),c=l}return r.key=a,i}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(J)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return E.length&&Y.props.children.push(n("footer",{key:"footer"},E.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,X(K(e.footnote,{inline:!0})))})))),Y}function Ue(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ie(t,n),r)}},196:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return O.a})),n.d(t,"f",(function(){return N})),n.d(t,"e",(function(){return j}));var r=n(0),a=n.n(r),i=n(190),c=n(195),o=n.n(c),s=n(51),l=n.n(s);function u(e){var t=e.heart,n=e.dino;return a.a.createElement("div",{className:l.a.valentinesDino},a.a.createElement("div",{className:l.a.subContainer},a.a.createElement("img",{src:t,alt:"",className:o()(l.a.heart,l.a.moveVertical)})),a.a.createElement("div",{className:o()(l.a.subContainer,l.a.c2)},a.a.createElement("img",{src:t,alt:"",className:o()(l.a.heart,l.a.moveVertical)})),a.a.createElement("div",{className:o()(l.a.subContainer,l.a.c3)},a.a.createElement("img",{src:t,alt:"",className:o()(l.a.heart,l.a.moveVertical)})),a.a.createElement("img",{src:n,alt:"",className:l.a.tRegx}))}var p=n(52),g=n.n(p),m=function(e){var t=e.src,n=e.title,r=void 0===n?"":n;return a.a.createElement("div",{className:g.a.projectLogo},a.a.createElement("img",{src:t,alt:"Project Logo",title:r}))},f=function(e){var t=e.name;if("valentine"===t)return a.a.createElement(u,{heart:Object(i.a)("img/heart.png"),dino:Object(i.a)("img/t.regx.png"),title:"Valentine's Day T-Regx"});var n={regular:{src:"t.regx.png",title:"T-Regx"},corona:{src:"t.regx.surgical.png",title:"Responsible T-Regx"},coronaXmas:{src:"t.regx.surgical.xmas.png",title:"Responsible T-Regx"},carnival:{src:"t.regx.carnival.png",title:"Carnival T-Regx"},easter:{src:"t.regx.easter.png",title:"Easter T-Regx"},holiday:{src:"t.regx.summer.png",title:"Holiday T-Regx"},halloween:{src:"t.regx.halloween.png",title:"Halloween T-Regx"},christmas:{src:"t.regx.santa.png",title:"Santa T-Regx"}}[t];return a.a.createElement(m,{src:Object(i.a)("img/"+n.src),title:n.name})};function d(){return a.a.createElement(f,{name:function(){new Date;return"corona"}()})}var h=n(2),y=[{title:"Build Status",src:"https://travis-ci.org/T-Regx/T-Regx.svg?branch=master",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"Coverage Status",src:"https://coveralls.io/repos/github/T-Regx/T-Regx/badge.svg?branch=master",href:"https://coveralls.io/github/T-Regx/T-Regx?branch=master"},{title:"Dependencies",src:"https://img.shields.io/badge/dependencies-0-brightgreen.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"Install size",src:"https://github-size-badge.herokuapp.com/T-Regx/fiddle.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"License",src:"https://img.shields.io/github/license/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"GitHub last commit",src:"https://img.shields.io/github/last-commit/T-Regx/T-Regx/develop.svg",href:"https://github.com/T-Regx/T-Regx/commits/develop"},{title:'GitHub commit activity"',src:"https://img.shields.io/github/commit-activity/y/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"}],v=[{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.1-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.2-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.3-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.4-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-8.0-yellow.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=popout",href:"http://makeapullrequest.com"}],x=n(53),b=n.n(x),k=function(e){return a.a.createElement("a",{href:e.href,title:e.title},a.a.createElement("img",{src:e.src,alt:e.title}))};function R(){var e=y,t=v;return a.a.createElement("div",{className:b.a.badgesSection},a.a.createElement("div",{className:b.a.upperBadges},e.map((function(e,t){return a.a.createElement(k,Object(h.a)({key:t},e))}))),a.a.createElement("div",{className:b.a.lowerBadges},t.map((function(e,t){return a.a.createElement(k,Object(h.a)({key:t},e))})),a.a.createElement(N,null)))}var E=n(192),T=n(54),w=n.n(T),P=[{title:"Invalid pattern<sup>(eg. `/unclosed[A-/`)</sup>",php:"Issues a warning",tRegx:"`MalformedPatternException` with descriptive message"},{title:"Corrupted subject<sup>(eg. malformed utf-8 sequence)</sup>",php:"\n* Different methods return different error values (`false`, `null` or `[]`)\n* `preg_last_error()` returns error code",tRegx:"`RuntimeCleanRegexException` with descriptive message"},{title:"Overly complex pattern<sup>(eg. containing `?R`)</sup>",php:"\n* No warning\n* `preg_last_error()` returns error code\n        ",tRegx:"`RuntimeSafeRegexException` with descriptive message"},{title:"Returning an invalid replacement value",php:"\n - `preg_last_error()` returns **success** code <sup>(returns `PREG_NO_ERROR`)</sup>\n - Silently converts the value to string <sup>(e.g. `integer`)<sup>\n - Raises a warning <sup>(e.g. `array`)<sup>\n - Throws a fatal error, terminating the application <sup>(e.g. `stdClass`, objects without `__toString`)<sup>",tRegx:"`InvalidReplacementException` with descriptive message"},{title:"Using an invalid capturing group name<sup>(eg. name `!@#$`, index `-2`)</sup>",php:"Actually tries to get the group",tRegx:"`InvalidArgumentException` with descriptive message"},{title:"Using a nonexistent group<sup>(group name typo, group deleted)</sup>",php:"Actually tries to get the group",tRegx:"`NonexistentGroupException` with descriptive message"},{title:"Using an un-matched group<sup>(conditional group, unmatched by subject)",php:"Actually tries to get the group",tRegx:"`GroupNotMatchedException` with descriptive message"},{title:"Offsets in UTF-8<sup>(eg. 18\u20ac)</sup>",php:"In bytes<sup>5 bytes</sup>",tRegx:" - Method `offset()`<sup>3 characters</sup>\n - Method `byteOffset()`<sup>5 bytes</sup>"},{title:"Offset while replacing",php:"No",tRegx:"Yes"},{title:"Worst case complexity",php:"`(string|int|null)[][][]`<sup>array of arrays of arrays of string/null and integer - `preg_match_all()` with `PREG_OFFSET_CAPTURE`</sup>",tRegx:"`string[]`<sup>array of strings</sup>"},{title:"Testing subject",php:" - `1`/`0` \\- matches/differs\n - `false` \\- some errors<sup>Don't use with `==`, only `===`</sup>\n - Issues a warning \\- other some errors",tRegx:" - `true`/`false` \\- matches/differs\n - `MalformedPatternException` \\- invalid pattern"}];function S(){var e=P.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,a.a.createElement(E.a,null,e.title)),a.a.createElement("td",null,a.a.createElement(E.a,null,e.php)),a.a.createElement("td",null,a.a.createElement(E.a,null,e.tRegx)))}));return a.a.createElement("table",{className:w.a.comparisonTable,width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Plain PHP"),a.a.createElement("th",null,"T-Regx")),a.a.createElement("tr",{className:w.a.logoRow},a.a.createElement("th",null),a.a.createElement("th",null,a.a.createElement("img",{src:Object(i.a)("/img/comparison/php.png"),alt:"Plain PHP"})),a.a.createElement("th",null,a.a.createElement("img",{src:Object(i.a)("/img/t.regx.png"),alt:"T-Regx"})))),a.a.createElement("tbody",null,e))}var O=n(191),C=n(183);function N(){var e=Object(C.a)().siteConfig,t=void 0===e?{}:e;return a.a.createElement("a",{className:"github-button",href:t.customFields.mainRepoUrl,title:"See this project on GitHub","data-icon":"octicon-star","data-show-count":"true","data-count-href":"/"+t.organizationName+"/"+t.projectName+"/stargazers","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"T-Regx")}function j(){return a.a.createElement("div",{style:{height:"32px"}},a.a.createElement("iframe",{src:"https://github.com/sponsors/Danon/button",title:"Sponsor Danon",height:"35",width:"116",style:{border:0}}))}}}]);