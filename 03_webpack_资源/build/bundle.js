(()=>{var e={682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([e.id,".title {\n  background-color: blue;\n  text-decoration: underline;\n}\n",""]);const i=s},984:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(81),o=r.n(n),a=r(645),s=r.n(a),i=r(667),c=r.n(i),u=new URL(r(533),r.b),l=s()(o()),d=c()(u);l.push([e.id,".image-bg{\r\n  background-image: url("+d+");\r\n  background-size: contain;\r\n  width: 200px;\r\n  height: 200px;\r\n}",""]);const p=l},390:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([e.id,".title{\r\n  color: red;\r\n  font-weight: 700;\r\n  font-size: 30px;\r\n}",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=r(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);t[i].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},466:e=>{e.exports={priceFormat:function(){return"￥99.88"}}},533:(e,t,r)=>{"use strict";e.exports=r.p+"06dedfb4ca6fc17e0b55.jpg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),s=r.n(a),i=r(565),c=r.n(i),u=r(216),l=r.n(u),d=r(589),p=r.n(d),f=r(390),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=r(682),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var g=r(984),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),t()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const y=document.createElement("div");y.className="title",y.innerHTML="你好，李银河";const x=document.createElement("div");x.className="image-bg",document.body.appendChild(y),document.body.appendChild(x);const{priceFormat:w}=r(466);console.log(53),console.log(w())})()})();