!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){!function(e){"use strict";function t(e){var n,i,s=new Error(e);return n=s,i=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,i):n.__proto__=i,s}function n(e,n,i){var s=n.slice(0,i).split(/\n/),r=s.length,a=s[r-1].length+1;throw t(e+=" at line "+r+" col "+a+":\n\n  "+n.split(/\n/)[r-1]+"\n  "+Array(a).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var i=new Function("return this")().Promise,s=!1;try{s=new Function("return (async function(){}).constructor")()}catch(e){if(!(e instanceof SyntaxError))throw e}function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function a(e,t,n){for(var i in t)r(t,i)&&(null==t[i]||"object"!=typeof t[i]||"storage"!==i&&"prefixes"!==i||n?e[i]=t[i]:e[i]=a({},t[i]));return e}var o=/^async +/,l=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,c=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function m(e){return u.test(e)?e.replace(u,"\\$&"):e}function f(e,i){i.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),l.lastIndex=0,c.lastIndex=0,d.lastIndex=0;var s=i.prefixes,r=[s.h,s.b,s.i,s.r,s.c,s.e].reduce((function(e,t){return e&&t?e+"|"+m(t):t?m(t):e}),""),a=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+m(i.tags[1])+")","g"),u=new RegExp("([^]*?)"+m(i.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),f=0,g=!1;function p(t,s){var r,m={f:[]},p=0,_="c";function h(t){var s=e.slice(f,t),r=s.trim();if("f"===_)"safe"===r?m.raw=!0:i.async&&o.test(r)?(r=r.replace(o,""),m.f.push([r,"",!0])):m.f.push([r,""]);else if("fp"===_)m.f[m.f.length-1][1]+=r;else if("err"===_){if(r){var a=s.search(/\S/);n("invalid syntax",e,f+a)}}else m[_]=r;f=t+1}for("h"===s||"b"===s||"c"===s?_="n":"r"===s&&(m.raw=!0,s="i"),a.lastIndex=f;null!==(r=a.exec(e));){var v=r[1],w=r[2],x=r[3],b=r[4],y=r[5],L=r.index;if(v)"("===v?(0===p&&("n"===_?(h(L),_="p"):"f"===_&&(h(L),_="fp")),p++):")"===v?0==--p&&"c"!==_&&(h(L),_="err"):0===p&&"|"===v?(h(L),_="f"):"=>"===v&&(h(L),f+=1,_="res");else if(w)if("/*"===w){var S=e.indexOf("*/",a.lastIndex);-1===S&&n("unclosed comment",e,r.index),a.lastIndex=S+2}else"'"===w?(c.lastIndex=r.index,c.exec(e)?a.lastIndex=c.lastIndex:n("unclosed string",e,r.index)):'"'===w?(d.lastIndex=r.index,d.exec(e)?a.lastIndex=d.lastIndex:n("unclosed string",e,r.index)):"`"===w&&(l.lastIndex=r.index,l.exec(e)?a.lastIndex=l.lastIndex:n("unclosed string",e,r.index));else if(x)return h(L),f=L+r[0].length,u.lastIndex=f,g=y,b&&"h"===s&&(s="s"),m.t=s,m}return n("unclosed tag",e,t),m}var _=function r(a,l){a.b=[],a.d=[];var c,d=!1,m=[];function _(e,t){e&&(e=function(e,t,n,i){var s,r;return"string"==typeof t.autoTrim?s=r=t.autoTrim:Array.isArray(t.autoTrim)&&(s=t.autoTrim[1],r=t.autoTrim[0]),(n||!1===n)&&(s=n),(i||!1===i)&&(r=i),"slurp"===s&&"slurp"===r?e.trim():("_"===s||"slurp"===s?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==s&&"nl"!==s||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,i,g,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),m.push(e))}for(;null!==(c=u.exec(e));){var h,v=c[1],w=c[2],x=c[3]||"";for(var b in s)if(s[b]===x){h=b;break}_(v,w),f=c.index+c[0].length,h||n("unrecognized tag type: "+x,e,f);var y=p(c.index,h),L=y.t;if("h"===L){var S=y.n||"";i.async&&o.test(S)&&(y.a=!0,y.n=S.replace(o,"")),y=r(y),m.push(y)}else if("c"===L){if(a.n===y.n)return d?(d.d=m,a.b.push(d)):a.d=m,a;n("Helper start and end don't match",e,c.index+c[0].length)}else if("b"===L){d?(d.d=m,a.b.push(d)):a.d=m;var A=y.n||"";i.async&&o.test(A)&&(y.a=!0,y.n=A.replace(o,"")),d=y,m=[]}else if("s"===L){var H=y.n||"";i.async&&o.test(H)&&(y.a=!0,y.n=H.replace(o,"")),m.push(y)}else m.push(y)}if(!l)throw t('unclosed helper "'+a.n+'"');return _(e.slice(f,e.length),!1),a.d=m,a}({f:[]},!0);if(i.plugins)for(var h=0;h<i.plugins.length;h++){var v=i.plugins[h];v.processAST&&(_.d=v.processAST(_.d,i))}return _.d}function g(e,t){var n=f(e,t),i="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+w(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var s=0;s<t.plugins.length;s++){var r=t.plugins[s];r.processFnString&&(i=r.processFnString(i,t))}return i}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n][0],s=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+i+"')("+e,s&&(e+=","+s),e+=")"}return e}function _(e,t,n,i,s,r){var a="{exec:"+(s?"async ":"")+v(n,t,e)+",params:["+i+"]";return r&&(a+=",name:'"+r+"'"),s&&(a+=",async:true"),a+"}"}function h(e,t){for(var n="[",i=0;i<e.length;i++){var s=e[i];n+=_(t,s.res||"",s.d,s.p||"",s.a,s.n),i<e.length&&(n+=",")}return n+"]"}function v(e,t,n){return"function("+t+"){var tR='';"+w(e,n)+"return tR}"}function w(e,t){for(var n=0,i=e.length,s="";n<i;n++){var r=e[n];if("string"==typeof r)s+="tR+='"+r+"';";else{var a=r.t,o=r.c||"",l=r.f,c=r.n||"",d=r.p||"",u=r.res||"",m=r.b,f=!!r.a;if("i"===a){t.defaultFilter&&(o="c.l('F','"+t.defaultFilter+"')("+o+")");var g=p(o,l);!r.raw&&t.autoEscape&&(g="c.l('F','e')("+g+")"),s+="tR+="+g+";"}else if("h"===a)if(t.storage.nativeHelpers.get(c))s+=t.storage.nativeHelpers.get(c)(r,t);else{var v=(f?"await ":"")+"c.l('H','"+c+"')("+_(t,u,r.d,d,f);v+=m?","+h(m,t):",[]",s+="tR+="+p(v+=",c)",l)+";"}else"s"===a?s+="tR+="+p((f?"await ":"")+"c.l('H','"+c+"')({params:["+d+"]},[],c)",l)+";":"e"===a&&(s+=o+"\n")}}return s}var x=function(){function e(e){this.cache=e}return e.prototype.define=function(e,t){this.cache[e]=t},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e]},e.prototype.reset=function(){this.cache={}},e.prototype.load=function(e){a(this.cache,e,!0)},e}();function b(e,n,i,s){if(n&&n.length>0)throw t((s?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(i&&i.length>0)throw t((s?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function L(e){return y[e]}var S=new x({}),A=new x({each:function(e,t){var n="",i=e.params[0];if(b("each",t,!1),e.async)return new Promise((function(t){!function e(t,n,i,s,r){i(t[n],n).then((function(a){s+=a,n===t.length-1?r(s):e(t,n+1,i,s,r)}))}(i,0,e.exec,n,t)}));for(var s=0;s<i.length;s++)n+=e.exec(i[s],s);return n},foreach:function(e,t){var n=e.params[0];if(b("foreach",t,!1),e.async)return new Promise((function(t){!function e(t,n,i,s,r,a){s(n[i],t[n[i]]).then((function(o){r+=o,i===n.length-1?a(r):e(t,n,i+1,s,r,a)}))}(n,Object.keys(n),0,e.exec,"",t)}));var i="";for(var s in n)r(n,s)&&(i+=e.exec(s,n[s]));return i},include:function(e,n,i){b("include",n,!1);var s=i.storage.templates.get(e.params[0]);if(!s)throw t('Could not fetch template "'+e.params[0]+'"');return s(e.params[1],i)},extends:function(e,n,i){var s=e.params[1]||{};s.content=e.exec();for(var r=0;r<n.length;r++){var a=n[r];s[a.name]=a.exec()}var o=i.storage.templates.get(e.params[0]);if(!o)throw t('Could not fetch template "'+e.params[0]+'"');return o(s,i)},useScope:function(e,t){return b("useScope",t,!1),e.exec(e.params[0])}}),H=new x({if:function(e,t){b("if",!1,e.f,!0);var n="if("+e.p+"){"+w(e.d,t)+"}";if(e.b)for(var i=0;i<e.b.length;i++){var s=e.b[i];"else"===s.n?n+="else{"+w(s.d,t)+"}":"elif"===s.n&&(n+="else if("+s.p+"){"+w(s.d,t)+"}")}return n},try:function(e,n){if(b("try",!1,e.f,!0),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var i="try{"+w(e.d,n)+"}",s=e.b[0];return i+"catch"+(s.res?"("+s.res+")":"")+"{"+w(s.d,n)+"}"},block:function(e,t){return b("block",e.b,e.f,!0),"if(!"+t.varName+"["+e.p+"]){tR+=("+v(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),z=new x({e:function(e){var t=String(e);return/[&<>"']/.test(t)?t.replace(/[&<>"']/g,L):t}}),M={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(e,n){if("H"===e){var i=this.storage.helpers.get(n);if(i)return i;throw t("Can't find helper '"+n+"'")}if("F"===e){var s=this.storage.filters.get(n);if(s)return s;throw t("Can't find filter '"+n+"'")}},async:!1,storage:{helpers:A,nativeHelpers:H,filters:z,templates:S},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function V(e,t){var n={};return a(n,M),t&&a(n,t),e&&a(n,e),n.l.bind(n),n}function I(e,n){var i=V(n||{}),r=Function;if(i.async){if(!s)throw t("This environment doesn't support async/await");r=s}try{return new r(i.varName,"c","cb",g(e,i))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+g(e,i)):n}}function q(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:I(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}M.l.bind(M),e.compile=I,e.compileScope=w,e.compileScopeIntoFunction=v,e.compileToString=g,e.defaultConfig=M,e.filters=z,e.getConfig=V,e.helpers=A,e.nativeHelpers=H,e.parse=f,e.render=function(e,n,s,r){var a=V(s||{});if(!a.async)return q(e,a)(n,a);if(!r){if("function"==typeof i)return new i((function(t,i){try{t(q(e,a)(n,a))}catch(e){i(e)}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{q(e,a)(n,a,r)}catch(e){return r(e)}},e.templates=S,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){n(6)},function(e,t){e.exports='<div class="mwl {{it.settings.theme}}"></div>'},function(e,t){e.exports='<div class="mwl__topbar">\n</div>\n\n<div class="mwl__navigation__previous">\n  {{ it.Icons.arrow_left | safe }}\n</div>\n<div class="mwl__navigation__next">\n  {{ it.Icons.arrow_right | safe }}\n</div>\n\n<div class="mwl__slider">\n  {{@each(it.images) => image, index}}\n  <div class="mwl__slider__image" data-index="{{index}}">\n    <div class="mwl__slider__image__thumbnail">\n\n      <div class="mwl__slider__image__thumbnail__low-res-container">\n        {{@if(image.low_res_src)}}\n        <img class="mwl__slider__image__thumbnail__low-res" data-src="{{image.low_res_src}}">\n        {{#else}}\n        <img class="mwl__slider__image__thumbnail__low-res" data-src="">\n        {{/if}}\n      </div>\n      <img class="mwl__slider__image__thumbnail__high-res {{image.orientation}}" data-src="{{image.src}}" {{\n        @if(image.srcset && image.sizes) }} data-srcset="{{image.srcset}}" data-sizes="{{image.sizes}}" {{ /if }}>\n      <div id="image-map-{{index}}" class="image-map"></div>\n    </div>\n  </div>\n  {{/each}}\n</div>\n\n<div class="mwl__metadata">\n</div>'},function(e,t){e.exports='{{@if(it.image.exifs.title && it.settings.infos_to_display.title)}}\n<h2>\n  {{it.image.exifs.title | safe}}\n</h2>\n{{/if}}\n\n{{@if(it.settings.infos_to_display.caption && it.image.caption)}}\n\n{{@if(it.image.caption.length > 150)}}\n<p class="short-description visible">\n  {{it.image.caption.substr(0, 150) | safe }}...\n  <span class="toggle-full-description">{{it.Icons.plus | safe}}</span>\n</p>\n{{/if}}\n<p class="full-description {{it.image.caption.length > 150 ? \'\' : \'visible\'}}">\n  {{it.image.caption | safe}}\n  {{@if(it.image.caption.length > 150)}}\n  <span class="toggle-full-description">{{it.Icons.minus | safe}}</span>\n  {{/if}}\n</p>\n\n{{/if}}\n\n<div class="exifs">\n  {{@each(it.exifs) => exif, index}}\n  {{@if(exif.visible)}}\n  <div class="exif">{{exif.icon | safe}}<span> &nbsp;{{exif.value}}</span></div>\n  {{/if}}\n  {{/each}}\n</div>'},function(e,t){e.exports='<div class="mwl__topbar__slide-counter">\n  <span class="current-slide">\n    {{it.data.currentIndex}}\n  </span>\n  /\n  <span class="number-of-slides">\n    {{it.data.numberOfImages}}\n  </span>\n</div>\n<div class="mwl__topbar__controls">\n  {{@each(it.controls) => control, index}}\n  {{@if(control.enabled)}}\n  <div\n    class="mwl__topbar__controls__control mwl__topbar__controls__control--{{control.slug}} {{control.hidden ? \'hidden\' : \'\'}}">\n    {{control.icon | safe}}\n\n    {{@if(control.slug === \'sharing\' && it.data.currentUrl)}}\n    <div class="mwl__topbar__controls__control--sharing__options">\n      <li>\n        <a href="https://www.facebook.com/sharer/sharer.php?u={{it.data.currentUrl}}" target="_blank">\n          Share on Facebook\n        </a>\n      </li>\n      <li>\n        <a href="https://twitter.com/intent/tweet?text={{it.data.currentUrl}}" target="_blank">\n          Share on Twitter\n        </a>\n      </li>\n      <li>\n        <a href="https://pinterest.com/pin/create/button/?url={{it.data.currentUrl}}" target="_blank">Share on\n          Pinterest\n        </a>\n      </li>\n    </div>\n    {{/if}}\n\n    {{@if(control.label)}}\n    <div class="mwl__topbar__controls__control__label">\n      {{control.label}}\n    </div>\n    {{/if}}\n  </div>\n  {{/if}}\n  {{/each}}\n</div>'},function(e,t,n){"use strict";n.r(t);var i=function(e){return{id:e.id,index:e.index,caption:e.caption,low_res_src:e.img_low_res_src,src:e.img_src,gps:e.img_gps,srcset:e.img_srcset,sizes:e.img_sizes,dimensions:e.dimensions,orientation:e.img_orientation,exifs:e.img_exifs}},s=function(e){return{scrapThePage:function(){var t=0;return e.anti_selector?e.anti_selector+=", .leaflet-tile, .leaflet-google-mutant":e.anti_selector+=".leaflet-tile, .leaflet-google-mutant",document.querySelectorAll("img.mwl-img").forEach((function(e){e.classList.remove("mwl-img")})),document.querySelectorAll(e.selector).forEach((function(n){n.querySelectorAll("img:not(.mwl-img)").forEach((function(n){n.closest(e.anti_selector)||(n.classList.add("mwl-img"),n.setAttribute("mwl-index",t),t++)}))})),t},retrieveImagesData:function(){var t=document.querySelectorAll(".mwl-img"),n=[];return t.forEach((function(t){var s=t.currentSrc;if(t.classList.contains("mgl-lazy")&&!t.classList.contains("lazyloaded")&&(s=!1),t.getAttribute("data-mwl-img-id")&&mwl_data&&mwl_data[t.getAttribute("data-mwl-img-id")].success){var r,a=mwl_data[t.getAttribute("data-mwl-img-id")];a.data.gps.split(",").length>1?a.gps={lat:parseFloat(a.data.gps.split(",")[0]),lng:parseFloat(a.data.gps.split(",")[1])}:a.gps={lat:"N/A",lng:"N/A"},"description"==e.caption_source&&a.data.description&&(r=a.data.description),"caption"==e.caption_source&&a.data.caption&&(r=a.data.caption);var o={id:a.data.id,index:parseInt(t.getAttribute("mwl-index")),caption:r,img_low_res_src:s,img_src:encodeURI(a.file),img_srcset:a.file_srcset,img_sizes:a.file_sizes,dimensions:a.dimension,img_orientation:a.dimension.width>a.dimension.height?"landscape":"portrait",img_exifs:a.data,img_gps:a.gps};n.push(i(o))}else{var l="";t.classList.contains("mgl-lazy")&&(l=t.getAttribute("mgl-src")),t.getAttribute("data-lazy-src")&&(l=t.getAttribute("data-lazy-src")),l||(l=t.getAttribute("src"));var c="";t.getAttribute("data-lazy-srcset")&&(c=t.getAttribute("data-lazy-srcset")),c||(c=t.getAttribute("srcset"));var d="";t.getAttribute("data-lazy-sizes")&&(d=t.getAttribute("data-lazy-sizes")),d||(d=t.getAttribute("sizes"));var u={index:parseInt(t.getAttribute("mwl-index")),img_low_res_src:s,img_src:l,img_srcset:c,img_sizes:d,caption:!1,dimensions:!1,img_orientation:"landscape",img_exifs:{title:"",caption:"",camera:"N/A",lens:"N/A",aperture:"N/A",shutter_speed:"N/A",iso:"N/A",focal_length:"N/A",date:"N/A"}};n.push(i(u))}})),n}}},r={close:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',fullscreen:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"/></svg>',shrink:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" /></svg>',play:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z"/></svg>',pause:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M14,19H18V5H14M6,19H10V5H6V19Z"/></svg>',map:'<svg style="width:24px;height:24px" viewBox="0 0 24 24" ><path fill="#000000" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"/></svg>',download:'<svg style="width:24px;height:24px;" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>',sharing:'<svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',arrow_left:'<svg style="width:24px;height:22px" viewBox="0 0 24 24"><path fill="#000000" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" /></svg>',arrow_right:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg>',camera:'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/></svg>',iso:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"/></svg>',shutter_speed:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm4.03 6.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"/></svg>',lens:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',aperture:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"/></svg>',calendar:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"/></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'},a=n(0),o=function(e){var t,i,s,o,l=e,c=[],d=!1,u=!1,m=!1,f=function(){l.deep_linking&&"function"==typeof mwl_pro_create_deeplinking_hash&&(!1===i?mwl_pro_remove_deeplinking_hash():d=mwl_pro_create_deeplinking_hash(c[i].id))},g=function(){var e=n(3),t=a.render(e,{settings:l,Icons:r,images:c});o.innerHTML=t},p=function(e){var n=document.querySelector(".mwl .mwl__slider"),s=document.querySelectorAll(".mwl__slider__image");e&&n.classList.add("mwl-animate"),n.style.transform="translate3d(".concat(100*-i,"%, 0, 0)"),s.forEach((function(e,n){var s=e.querySelector("img.mwl__slider__image__thumbnail__low-res"),r=s.parentNode,a=e.querySelector("img.mwl__slider__image__thumbnail__high-res");if(e.classList.remove("visible"),function(e){return e===i||(Math.abs(e-i)<2||(0===i&&e===t-1||i===t-1&&0===e))}(n)){var o=c[i];if(l.low_res_placeholder&&o.dimensions.width&&o.dimensions.height){if(s.dataset.src)s.setAttribute("src",s.dataset.src);else{var d=document.querySelector('.mwl-img[mwl-index="'.concat(n,'"]')).currentSrc;s.setAttribute("src",d)}var u=o.dimensions.width/o.dimensions.height,m=r.offsetWidth/r.offsetHeight;s.style.maxHeight=o.dimensions.height+"px",s.style.maxWidth=o.dimensions.width+"px",u<m?(s.style.width="auto",s.style.height="100%"):(s.style.width="100%",s.style.height="auto")}a.setAttribute("src",a.dataset.src),a.dataset.srcset&&a.setAttribute("srcset",a.dataset.srcset),a.dataset.sizes&&a.setAttribute("sizes",a.dataset.sizes),n===i&&(a.complete||l.low_res_placeholder?setTimeout((function(){e.classList.add("visible")})):a.onload=function(){e.classList.add("visible")})}}))},_=function(){var e=c[i],t=n(4),s=a.render(t,{settings:l,Icons:r,image:e,exifs:[{visible:"N/A"!=e.exifs.camera&&l.infos_to_display.camera,icon:r.camera,value:e.exifs.camera},{visible:"N/A"!=e.exifs.focal_length&&l.infos_to_display.focal_length,icon:r.eye,value:e.exifs.focal_length},{visible:"N/A"!=e.exifs.shutter_speed&&l.infos_to_display.shutter_speed,icon:r.shutter_speed,value:e.exifs.shutter_speed},{visible:"N/A"!=e.exifs.aperture&&l.infos_to_display.aperture,icon:r.aperture,value:e.exifs.aperture},{visible:"N/A"!=e.exifs.iso&&l.infos_to_display.iso,icon:r.iso,value:e.exifs.iso},{visible:"N/A"!=e.exifs.lens&&l.infos_to_display.lens,icon:r.lens,value:e.exifs.lens},{visible:"N/A"!=e.exifs.date&&0!=e.exifs.date&&l.infos_to_display.date,icon:r.calendar,value:e.exifs.date}]});document.querySelector(".mwl .mwl__metadata").innerHTML=s,H()},h=function(){var e=c[i],s=n(5),o=a.render(s,{settings:l,Icons:r,data:{currentIndex:i+1,currentUrl:d,numberOfImages:t},controls:[{enabled:Boolean(l.social_sharing),slug:"sharing",icon:r.sharing},{enabled:l.download.enabled,slug:"download",label:"Download Image",icon:r.download},{enabled:l.slideshow.enabled,hidden:m,slug:"play",label:"Start slideshow",icon:r.play},{enabled:l.slideshow.enabled,hidden:!m,slug:"pause",label:"Stop slideshow",icon:r.pause},{enabled:l.map.enabled&&e.gps&&"N/A"!==e.gps.lat&&"N/A"!==e.gps.lng,slug:"map",label:"Show on map",icon:r.map},{enabled:!0,hidden:u,slug:"fullscreen",label:"Hide info",icon:r.fullscreen},{enabled:!0,hidden:!u,slug:"shrink",label:"Show info",icon:r.shrink},{enabled:!0,slug:"close",label:"Close",icon:r.close}]});document.querySelector(".mwl .mwl__topbar").innerHTML=o,z()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o.classList.add("visible"),o.setAttribute("data-index",e),i=e,f(),g(),_(),p(),h(),A()},w=function(){document.querySelectorAll(".mwl img.zoomed").forEach((function(e){e.classList.remove("zoomed"),e.style.transform="translate3d(0,0,0) scale(1)"}))},x=function(){var e=document.querySelector("#image-map-".concat(i));e.classList.contains("visible")&&q();var t=e.parentNode;t.removeChild(e);var n=document.createElement("div");n.setAttribute("id","image-map-".concat(i)),n.setAttribute("class","image-map"),t.appendChild(n)},b=function(){w(),x(),I(),i=!1,o.classList.remove("visible"),f()},y=function(e){o.setAttribute("data-index",e),w(),x(),i=e,f(),p(!0),h(),setTimeout((function(){_()}),300)},L=function(){var e=i-1;0==i&&(e=c.length-1),y(e),i=e},S=function(){var e=i+1;i==c.length-1&&(e=0),y(e),i=e},A=function(){document.querySelector(".mwl").onclick=function(e){["mwl__topbar","mwl__slider__image__thumbnail","mwl__slider__image__thumbnail__low-res-container","exifs"].forEach((function(t){e.target.classList.contains(t)&&b()}))},document.querySelector(".mwl__navigation__previous").onclick=function(){L()},document.querySelector(".mwl__navigation__next").onclick=function(){S()},document.onkeydown=function(e){if(o.classList.contains("visible"))switch(e.key){case"Escape":b();break;case"ArrowLeft":L();break;case"ArrowRight":S();break;default:return}},document.querySelectorAll("img.mwl__slider__image__thumbnail__high-res").forEach((function(e){e.onclick=function(t){if(l.magnification.enabled&&!e.classList.contains("swiping"))if(e.classList.contains("zoomed"))e.classList.remove("zoomed"),e.style.transform="translate3d(0,0,0) scale(1)";else{e.classList.add("zoomed");var n=e.getBoundingClientRect(),i=n.left,s=n.top,r=t.clientX-(i+n.width/2),a=t.clientY-(s+n.height/2),o=r-2*r,c=a-2*a;e.style.transform="translate3d(".concat(o,"px, ").concat(c,"px, 0) scale(2)")}}}));var e,t=0,n=0,i=document.querySelector(".mwl__slider");i.ontouchstart=function(s){t=s.touches[0].clientX,n=t,e=i.style.transform.match(/(\-?[0-9]*%)/)[0]},i.ontouchmove=function(s){var r=s.touches[0].clientX,a=r-t;n=r,Math.abs(a)>2&&(i.classList.remove("mwl-animate"),i.style.transform="translate3d(calc(".concat(e," + ").concat(a,"px), 0px, 0px)"))},i.ontouchend=function(s){var r=n-t;i.classList.add("mwl-animate"),Math.abs(r)<200?i.style.transform="translate3d(".concat(e,", 0px, 0px)"):r>0?L():S()},document.querySelectorAll(".mwl__slider__image__thumbnail img").forEach((function(e){e.oncontextmenu=function(e){l.right_click_protection&&e.preventDefault()}}))},H=function(){document.querySelector(".toggle-full-description")&&document.querySelectorAll(".toggle-full-description").forEach((function(e){e.onclick=function(){var e=document.querySelector(".mwl__metadata .full-description"),t=document.querySelector(".mwl__metadata .short-description");e&&t&&(e.classList.contains("visible")?(e.classList.remove("visible"),t.classList.add("visible")):(e.classList.add("visible"),t.classList.remove("visible")))}}))},z=function(){document.querySelector(".mwl__topbar__controls__control--close").onclick=function(){b()},document.querySelector(".mwl__topbar__controls__control--fullscreen").onclick=function(){o.classList.add("extended"),u=!0,document.querySelector(".mwl__topbar__controls__control--fullscreen").classList.add("hidden"),document.querySelector(".mwl__topbar__controls__control--shrink").classList.remove("hidden")},document.querySelector(".mwl__topbar__controls__control--shrink").onclick=function(){o.classList.remove("extended"),u=!1,document.querySelector(".mwl__topbar__controls__control--fullscreen").classList.remove("hidden"),document.querySelector(".mwl__topbar__controls__control--shrink").classList.add("hidden")},document.querySelector(".mwl__topbar__controls__control--play")&&(document.querySelector(".mwl__topbar__controls__control--play").onclick=function(){V(),m=!0}),document.querySelector(".mwl__topbar__controls__control--pause")&&(document.querySelector(".mwl__topbar__controls__control--pause").onclick=function(){I(),m=!1}),document.querySelector(".mwl__topbar__controls__control--map")&&(document.querySelector(".mwl__topbar__controls__control--map").onclick=function(){q()}),document.querySelector(".mwl__topbar__controls__control--download")&&(document.querySelector(".mwl__topbar__controls__control--download").onclick=function(){M()})},M=function(){var e=c[i].src,t=document.createElement("a");t.href=e,t.download=e.split(/[\\/]/).pop(),document.body.appendChild(t),t.click()},V=function(){var e=document.querySelector(".mwl__topbar__controls__control--play"),t=document.querySelector(".mwl__topbar__controls__control--pause");e&&t&&(e.classList.add("hidden"),t.classList.remove("hidden"),s=setInterval((function(){S()}),l.slideshow.slide_duration))},I=function(){var e=document.querySelector(".mwl__topbar__controls__control--play"),t=document.querySelector(".mwl__topbar__controls__control--pause");e&&t&&(t.classList.add("hidden"),e.classList.remove("hidden"),clearInterval(s))},q=function(){w();var e=document.querySelector("#image-map-".concat(i)),t=e.getAttribute("id"),n=document.querySelector('.mwl__slider__image[data-index="'.concat(i,'"]')).querySelector("img.mwl__slider__image__thumbnail__high-res"),s=c[i];e.classList.contains("visible")?(e.classList.remove("visible"),x(),e.style.width=0,e.style.height=0):(e.classList.add("visible"),e.style.width="".concat(n.offsetWidth,"px"),e.style.height="".concat(n.offsetHeight,"px"),window.mwlInitMap(t,s))};return{settings:l,setNumberOfImages:function(e){t=e},setImages:function(e){c=e},setMwlImgListeners:function(){document.querySelectorAll(".mwl-img").forEach((function(e){e.onclick=function(t){t.preventDefault();var n=parseInt(e.getAttribute("mwl-index"));v(n)}}))},createLightboxContainer:function(){var e=n(2),t=a.render(e,{settings:l}),i=document.createRange().createContextualFragment(t);document.body.appendChild(i),o=document.querySelector(".mwl")},setListeners:A,getIndexById:function(e){var t=!1;return c.forEach((function(n){n.id==e&&(t=n.index)})),t},openLightbox:v,imagesHaveChanged:function(){if(void 0!==l){var e=!1;return c.forEach((function(t,n){document.querySelector('.mwl-img[mwl-index="'.concat(n,'"]'))||(e=!0)})),l.anti_selector?l.anti_selector+=", .leaflet-tile, .leaflet-google-mutant":l.anti_selector+=".leaflet-tile, .leaflet-google-mutant",document.querySelectorAll(l.selector).forEach((function(t){t.querySelectorAll("img").forEach((function(t){t.closest(l.anti_selector)||t.classList.contains("mwl-img")||(e=!0)}))})),e}},refreshLightbox:function(){o.classList.contains("visible")&&v(i)}}},l={selector:mwl.settings.selector,anti_selector:mwl.settings.anti_selector,theme:mwl.settings.theme,slideshow:{enabled:mwl.settings.slideshow.enabled,slide_duration:mwl.settings.slideshow.timer},thumbnails_navigation:{enabled:!1,height:200},preloading:mwl.settings.preloading,magnification:{enabled:mwl.settings.magnification},map:mwl.settings.map,caption_source:mwl.settings.caption_source,low_res_placeholder:mwl.settings.low_res_placeholder,deep_linking:mwl.settings.deep_linking,social_sharing:mwl.settings.social_sharing,infos_to_display:{title:mwl.settings.exif.title,caption:mwl.settings.exif.caption,camera:mwl.settings.exif.camera,date:mwl.settings.exif.date,lens:mwl.settings.exif.lens,shutter_speed:mwl.settings.exif.shutter_speed,aperture:mwl.settings.exif.aperture,focal_length:mwl.settings.exif.focal_length,iso:mwl.settings.exif.iso},download:{enabled:mwl.settings.download_link},right_click_protection:mwl.settings.right_click_protection},c=o(l),d=s(l);document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){var e=d.scrapThePage();c.setMwlImgListeners();var t=d.retrieveImagesData();c.setNumberOfImages(e),c.setImages(t),c.createLightboxContainer();var n=navigator.userAgent.toLowerCase();if(-1!=n.indexOf("safari")&&(n.indexOf("chrome")>-1||document.querySelector(".mwl").classList.add("safari-browser")),window.location.href.indexOf("#mwl-")>0){var i=window.location.href.match(/(#mwl-)([0-9])+/gm),s=parseInt(i[0].match(/([0-9])+/gm)[0]);!1!==c.getIndexById(s)&&c.openLightbox(c.getIndexById(s))}document.body.addEventListener("post-load",(function(){if(c.imagesHaveChanged()){var e=d.scrapThePage();c.setMwlImgListeners();var t=d.retrieveImagesData();c.setNumberOfImages(e),c.setImages(t),c.refreshLightbox()}}))}),300)}))}]);