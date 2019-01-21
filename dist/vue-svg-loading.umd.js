/*! vue-svg-loading v1.0.0 inotom (http://www.serendip.ws/) | MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("SvgLoading",[],e):"object"==typeof exports?exports.SvgLoading=e():t.SvgLoading=e()}(window,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2)}([function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";var r={props:{size:{type:Number,default:50},fill:{type:String,default:"#666"}}};n(4);var o=function(t,e,n,r,o,i,a,s){var f,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(u.functional){u._injectStyles=f;var c=u.render;u.render=function(t,e){return f.call(e),c(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:u}}(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg-loading",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100",fill:t.fill,width:t.size,height:t.size}},t._l(12,function(t){return n("path",{key:"path-"+t,class:"svg-loading__path--"+t,attrs:{opacity:.1+.05*t,d:"M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",transform:"rotate("+(30*t-1)+" 50 50)"}})}),0)},[],!1,null,"3aaf000c",null);o.options.__file="SvgLoading.vue";e.a=o.exports},function(t,i,a){"use strict";a.r(i),function(t){a.d(i,"install",function(){return n});var e=a(1);function n(t){n.installed||(n.installed=!0,t.component("svg-loading",e.a))}var r={install:n},o=null;"undefined"!=typeof window?o=window.Vue:void 0!==t&&(o=t.Vue),o&&o.use(r),i.default=e.a}.call(this,a(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".svg-loading[data-v-3aaf000c]{-webkit-animation:svg-loading-data-v-3aaf000c 1s infinite steps(12);animation:svg-loading-data-v-3aaf000c 1s infinite steps(12)}@-webkit-keyframes svg-loading-data-v-3aaf000c{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svg-loading-data-v-3aaf000c{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n",""])},function(t,e,n){"use strict";t.exports=function(n){var a=[];return a.toString=function(){return this.map(function(t){var e=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},a.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<t.length;r++){var i=t[r];null!=i[0]&&n[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),a.push(i))}},a}},function(t,e,r){var n,o,i,f={},u=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),a=(i={},function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}i[t]=n}return i[t]}),c=null,l=0,s=[],d=r(8);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(y(r.parts[i],e))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(y(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function v(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);0<=e&&s.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return m(e,t.attrs),h(t,e),e}function m(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function y(e,t){var n,r,o,i,a,s;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var f=l++;n=c||(c=b(t)),r=_.bind(null,n,f,!1),o=_.bind(null,n,f,!0)}else o=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=t,s=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",m(s,a.attrs),h(a,s),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n=s,t),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}t.exports=function(t,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=u()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var s=v(t,a);return p(s,a),function(t){for(var e=[],n=0;n<s.length;n++){var r=s[n];(o=f[r.id]).refs--,e.push(o)}t&&p(v(t,a),a);for(n=0;n<e.length;n++){var o;if(0===(o=e[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete f[o.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}}])});
//# sourceMappingURL=vue-svg-loading.umd.js.map