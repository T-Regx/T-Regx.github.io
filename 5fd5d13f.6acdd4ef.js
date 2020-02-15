(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{142:function(t,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return i})),e.d(n,"rightToc",(function(){return u})),e.d(n,"default",(function(){return s}));e(324),e(329),e(276),e(337),e(339),e(211);var r=e(207);function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var i={id:"installation",title:"Installation"},u=[{value:"PHP 7.1 and later",id:"php-71-and-later",children:[]}],c={rightToc:u},a="wrapper";function s(t){var n=t.components,e=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,["components"]);return Object(r.b)(a,o({},c,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"T-Regx recommended way of installation is using ",Object(r.b)("a",{href:"https://packagist.org/packages/rawr/t-regx",target:"_blank"},"Composer"),"."),Object(r.b)("h2",{id:"php-71-and-later"},"PHP 7.1 and later"),Object(r.b)("p",null,"The installation of T-Regx for is really simple. Just add a composer dependency:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ composer require rawr/t-regx\n")),Object(r.b)("p",null,"That's it :)"))}s.isMDXComponent=!0},231:function(t,n,e){var r=e(331)("wks"),o=e(271),i=e(242).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},235:function(t,n,e){var r=e(243),o=e(270);t.exports=e(325)?function(t,n,e){return r.setDesc(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},242:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},243:function(t,n){var e=Object;t.exports={create:e.create,getProto:e.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:e.getOwnPropertyDescriptor,setDesc:e.defineProperty,setDescs:e.defineProperties,getKeys:e.keys,getNames:e.getOwnPropertyNames,getSymbols:e.getOwnPropertySymbols,each:[].forEach}},253:function(t,n,e){var r=e(242),o=e(254),i=e(235),u=e(256),c=e(326),a=function(t,n,e){var s,f,p,l,y=t&a.F,v=t&a.G,b=t&a.S,g=t&a.P,h=t&a.B,d=v?r:b?r[n]||(r[n]={}):(r[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),m=x.prototype||(x.prototype={});for(s in v&&(e=n),e)p=((f=!y&&d&&s in d)?d:e)[s],l=h&&f?c(p,r):g&&"function"==typeof p?c(Function.call,p):p,d&&!f&&u(d,s,p),x[s]!=p&&i(x,s,l),g&&m[s]!=p&&(m[s]=p)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},254:function(t,n){var e=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=e)},255:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},256:function(t,n,e){var r=e(242),o=e(235),i=e(271)("src"),u=Function.toString,c=(""+u).split("toString");e(254).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){"function"==typeof e&&(e.hasOwnProperty(i)||o(e,i,t[n]?""+t[n]:c.join(String(n))),e.hasOwnProperty("name")||o(e,"name",n)),t===r?t[n]=e:(u||delete t[n],o(t,n,e))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||u.call(this)}))},257:function(t,n){t.exports={}},270:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},271:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},272:function(t,n,e){var r=e(273);t.exports=function(t){return Object(r(t))}},273:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},274:function(t,n,e){var r=e(275);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},275:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},276:function(t,n,e){"use strict";var r=e(330),o=e(332),i=e(257),u=e(333);t.exports=e(334)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},277:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},278:function(t,n,e){var r=e(243).setDesc,o=e(277),i=e(231)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},324:function(t,n,e){var r=e(253);r(r.S+r.F,"Object",{assign:e(328)})},325:function(t,n,e){t.exports=!e(255)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},326:function(t,n,e){var r=e(327);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},327:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},328:function(t,n,e){var r=e(243),o=e(272),i=e(274);t.exports=e(255)((function(){var t=Object.assign,n={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return n[r]=7,o.split("").forEach((function(t){e[t]=t})),7!=t({},n)[r]||Object.keys(t({},e)).join("")!=o}))?function(t,n){for(var e=o(t),u=arguments,c=u.length,a=1,s=r.getKeys,f=r.getSymbols,p=r.isEnum;c>a;)for(var l,y=i(u[a++]),v=f?s(y).concat(f(y)):s(y),b=v.length,g=0;b>g;)p.call(y,l=v[g++])&&(e[l]=y[l]);return e}:Object.assign},329:function(t,n,e){e(276);var r=e(242),o=e(235),i=e(257),u=e(231)("iterator"),c=r.NodeList,a=r.HTMLCollection,s=c&&c.prototype,f=a&&a.prototype,p=i.NodeList=i.HTMLCollection=i.Array;s&&!s[u]&&o(s,u,p),f&&!f[u]&&o(f,u,p)},330:function(t,n,e){var r=e(231)("unscopables"),o=Array.prototype;null==o[r]&&e(235)(o,r,{}),t.exports=function(t){o[r][t]=!0}},331:function(t,n,e){var r=e(242),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},332:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},333:function(t,n,e){var r=e(274),o=e(273);t.exports=function(t){return r(o(t))}},334:function(t,n,e){"use strict";var r=e(335),o=e(253),i=e(256),u=e(235),c=e(277),a=e(257),s=e(336),f=e(278),p=e(243).getProto,l=e(231)("iterator"),y=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,b,g,h,d){s(e,n,b);var x,m,O=function(t){if(!y&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=n+" Iterator",w="values"==g,_=!1,S=t.prototype,k=S[l]||S["@@iterator"]||g&&S[g],P=k||O(g);if(k){var T=p(P.call(new t));f(T,j,!0),!r&&c(S,"@@iterator")&&u(T,l,v),w&&"values"!==k.name&&(_=!0,P=function(){return k.call(this)})}if(r&&!d||!y&&!_&&S[l]||u(S,l,P),a[n]=P,a[j]=v,g)if(x={values:w?P:O("values"),keys:h?P:O("keys"),entries:w?O("entries"):P},d)for(m in x)m in S||i(S,m,x[m]);else o(o.P+o.F*(y||_),n,x);return x}},335:function(t,n){t.exports=!1},336:function(t,n,e){"use strict";var r=e(243),o=e(270),i=e(278),u={};e(235)(u,e(231)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r.create(u,{next:o(1,e)}),i(t,n+" Iterator")}},337:function(t,n,e){"use strict";var r=e(338),o={};o[e(231)("toStringTag")]="z",o+""!="[object z]"&&e(256)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},338:function(t,n,e){var r=e(275),o=e(231)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=(n=Object(t))[o])?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},339:function(t,n,e){var r=e(272);e(340)("keys",(function(t){return function(n){return t(r(n))}}))},340:function(t,n,e){var r=e(253),o=e(254),i=e(255);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i((function(){e(1)})),"Object",u)}}}]);