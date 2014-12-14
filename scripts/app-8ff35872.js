!function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div class="jumbotron text-center"><h1>Angular gallery</h1><p class="lead">Test application for Innovecs.</p></div><test-gallery data="main.images" auto-rotate="3000"></test-gallery></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("components/image-modal/index.html",'<div class="modal-header"><button type="button" class="close" ng-click="$close()"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h3 class="modal-title" ng-bind="imageModal.currentWrappedImage.image.title"></h3></div><div class="modal-body text-center big-image-wrap"><img ng-if="!imageModal.currentWrappedImage.noImage" ng-src="{{ imageModal.currentWrappedImage.image.url }}"><h3 ng-if="imageModal.currentWrappedImage.noImage">No image</h3></div><div class="modal-footer"><div class="btn-group text-center"><button class="btn btn-default" ng-click="imageModal.prev()">Previous</button> <button class="btn btn-default" ng-click="imageModal.next()">Next</button></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("components/test-gallery/test-gallery.html",'<div class="row"><div class="col-md-12 col-sm-12"><div class="form-inline gallery-controls"><label class="control-label">Sort by:<select class="form-control" ng-model="main.sortBy" ng-change="main.update()"><option value="title">Title</option><option value="date">Date</option></select></label> <label class="control-label">Pagination:<select class="form-control" ng-model="main.pagination" ng-change="main.update()"><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option></select></label> <label class="control-label">Search: <input class="form-control" ng-model="main.searchQuery" ng-change="main.update()"></label></div></div></div><div class="row" ng-if="main.totalItems == 0"><div class="col-md-12 col-sm-12"><h4 class="text-center">There are no images</h4></div></div><div ng-if="main.totalItems != 0"><div class="row"><div class="col-md-12 col-sm-12"><pagination ng-change="main.update()" ng-model="main.currentPage" total-items="main.totalItems" items-per-page="main.pagination"></pagination></div></div><div class="row"><div class="col-xs-6 col-md-3" ng-repeat="wrappedImage in main.wrappedImages"><test-gallery-item image="wrappedImage" index="$index"></test-gallery-item></div></div><div class="row"><div class="col-md-12 col-sm-12"><pagination ng-change="main.update()" ng-model="main.currentPage" total-items="main.totalItems" items-per-page="main.pagination"></pagination></div></div></div>')}])}(),function(e){try{e=angular.module("templates")}catch(t){e=angular.module("templates",[])}e.run(["$templateCache",function(e){e.put("components/test-gallery-item/test-gallery-item.html",'<a href="" ng-click="$showImage($index)" class="thumbnail" ng-if="!wrappedImage.noImage"><img class="img-responsive gallery-image" ng-src="{{ ::wrappedImage.image.url }}"><div class="caption"><p ng-bind="::wrappedImage.image.title"></p><div ng-bind="::wrappedImage.image.date | date:\'mediumDate\'"></div></div><button type="button" class="close" ng-click="$deleteImage(wrappedImage.id)"><span aria-hidden="true">&times;</span></button></a><div class="thumbnail" ng-if="wrappedImage.noImage"><span class="no-image">No Image</span> <button type="button" class="close" ng-click="$deleteImage(wrappedImage.id)"><span aria-hidden="true">&times;</span></button></div>')}])}(),function e(t,r,n){function o(i,a){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!a&&u)return u(i,!0);if(s)return s(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[i]={exports:{}};t[i][0].call(l.exports,function(e){var r=t[i][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({"./src/app/index.coffee":[function(e){(function(){var t;t=e("./main"),angular.module("testApp",["ngAnimate","ngTouch","ngSanitize","restangular","ui.router","angular-loading-bar","templates",t.name])}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/app/index.coffee","/src/app")},{"./main":"/home/meafmira/projects/test-app/src/app/main/index.coffee",_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js":[function(e,t,r){(function(t,n,o){function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var n,s=typeof e;if("number"===s)n=e>0?e>>>0:0;else if("string"===s)"base64"===t&&(e=j(e)),n=o.byteLength(e,t);else{if("object"!==s||null===e)throw new TypeError("must start with number, buffer, array or string");"Buffer"===e.type&&M(e.data)&&(e=e.data),n=+e.length>0?Math.floor(+e.length):0}if(this.length>Y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Y.toString(16)+" bytes");var i;o.TYPED_ARRAY_SUPPORT?i=o._augment(new Uint8Array(n)):(i=this,i.length=n,i._isBuffer=!0);var a;if(o.TYPED_ARRAY_SUPPORT&&"number"==typeof e.byteLength)i._set(e);else if(x(e))if(o.isBuffer(e))for(a=0;n>a;a++)i[a]=e.readUInt8(a);else for(a=0;n>a;a++)i[a]=(e[a]%256+256)%256;else if("string"===s)i.write(e,0,t);else if("number"===s&&!o.TYPED_ARRAY_SUPPORT&&!r)for(a=0;n>a;a++)i[a]=0;return i}function s(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n),n>o&&(n=o)):n=o;var s=t.length;if(s%2!==0)throw new Error("Invalid hex string");n>s/2&&(n=s/2);for(var i=0;n>i;i++){var a=parseInt(t.substr(2*i,2),16);if(isNaN(a))throw new Error("Invalid hex string");e[r+i]=a}return i}function i(e,t,r,n){var o=L(T(t),e,r,n);return o}function a(e,t,r,n){var o=L(U(t),e,r,n);return o}function u(e,t,r,n){return a(e,t,r,n)}function f(e,t,r,n){var o=L(P(t),e,r,n);return o}function l(e,t,r,n){var o=L(R(t),e,r,n,2);return o}function c(e,t,r){return $.fromByteArray(0===t&&r===e.length?e:e.slice(t,r))}function d(e,t,r){var n="",o="";r=Math.min(e.length,r);for(var s=t;r>s;s++)e[s]<=127?(n+=S(o)+String.fromCharCode(e[s]),o=""):o+="%"+e[s].toString(16);return n+S(o)}function m(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;r>o;o++)n+=String.fromCharCode(e[o]);return n}function p(e,t,r){return m(e,t,r)}function h(e,t,r){var n=e.length;(!t||0>t)&&(t=0),(!r||0>r||r>n)&&(r=n);for(var o="",s=t;r>s;s++)o+=B(e[s]);return o}function g(e,t,r){for(var n=e.slice(t,r),o="",s=0;s<n.length;s+=2)o+=String.fromCharCode(n[s]+256*n[s+1]);return o}function w(e,t,r){if(e%1!==0||0>e)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function y(e,t,r,n,s,i){if(!o.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(t>s||i>t)throw new TypeError("value is out of bounds");if(r+n>e.length)throw new TypeError("index out of range")}function b(e,t,r,n){0>t&&(t=65535+t+1);for(var o=0,s=Math.min(e.length-r,2);s>o;o++)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function _(e,t,r,n){0>t&&(t=4294967295+t+1);for(var o=0,s=Math.min(e.length-r,4);s>o;o++)e[r+o]=t>>>8*(n?o:3-o)&255}function v(e,t,r,n,o,s){if(t>o||s>t)throw new TypeError("value is out of bounds");if(r+n>e.length)throw new TypeError("index out of range")}function I(e,t,r,n,o){return o||v(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),C.write(e,t,r,n,23,4),r+4}function E(e,t,r,n,o){return o||v(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),C.write(e,t,r,n,52,8),r+8}function j(e){for(e=A(e).replace(k,"");e.length%4!==0;)e+="=";return e}function A(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function x(e){return M(e)||o.isBuffer(e)||e&&"object"==typeof e&&"number"==typeof e.length}function B(e){return 16>e?"0"+e.toString(16):e.toString(16)}function T(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(127>=n)t.push(n);else{var o=r;n>=55296&&57343>=n&&r++;for(var s=encodeURIComponent(e.slice(o,r+1)).substr(1).split("%"),i=0;i<s.length;i++)t.push(parseInt(s[i],16))}}return t}function U(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function R(e){for(var t,r,n,o=[],s=0;s<e.length;s++)t=e.charCodeAt(s),r=t>>8,n=t%256,o.push(n),o.push(r);return o}function P(e){return $.toByteArray(e)}function L(e,t,r,n,o){o&&(n-=n%o);for(var s=0;n>s&&!(s+r>=t.length||s>=e.length);s++)t[s+r]=e[s];return s}function S(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var $=e("base64-js"),C=e("ieee754"),M=e("is-array");r.Buffer=o,r.SlowBuffer=o,r.INSPECT_MAX_BYTES=50,o.poolSize=8192;var Y=1073741823;o.TYPED_ARRAY_SUPPORT=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray&&0===new Uint8Array(1).subarray(1,1).byteLength}catch(r){return!1}}(),o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.compare=function(e,t){if(!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError("Arguments must be Buffers");for(var r=e.length,n=t.length,s=0,i=Math.min(r,n);i>s&&e[s]===t[s];s++);return s!==i&&(r=e[s],n=t[s]),n>r?-1:r>n?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(e,t){if(!M(e))throw new TypeError("Usage: Buffer.concat(list[, length])");if(0===e.length)return new o(0);if(1===e.length)return e[0];var r;if(void 0===t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var n=new o(t),s=0;for(r=0;r<e.length;r++){var i=e[r];i.copy(n,s),s+=i.length}return n},o.byteLength=function(e,t){var r;switch(e+="",t||"utf8"){case"ascii":case"binary":case"raw":r=e.length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*e.length;break;case"hex":r=e.length>>>1;break;case"utf8":case"utf-8":r=T(e).length;break;case"base64":r=P(e).length;break;default:r=e.length}return r},o.prototype.length=void 0,o.prototype.parent=void 0,o.prototype.toString=function(e,t,r){var n=!1;if(t>>>=0,r=void 0===r||1/0===r?this.length:r>>>0,e||(e="utf8"),0>t&&(t=0),r>this.length&&(r=this.length),t>=r)return"";for(;;)switch(e){case"hex":return h(this,t,r);case"utf8":case"utf-8":return d(this,t,r);case"ascii":return m(this,t,r);case"binary":return p(this,t,r);case"base64":return c(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return g(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}},o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return 0===o.compare(this,e)},o.prototype.inspect=function(){var e="",t=r.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},o.prototype.compare=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return o.compare(this,e)},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.write=function(e,t,r,n){if(isFinite(t))isFinite(r)||(n=r,r=void 0);else{var o=n;n=t,t=r,r=o}t=Number(t)||0;var c=this.length-t;r?(r=Number(r),r>c&&(r=c)):r=c,n=String(n||"utf8").toLowerCase();var d;switch(n){case"hex":d=s(this,e,t,r);break;case"utf8":case"utf-8":d=i(this,e,t,r);break;case"ascii":d=a(this,e,t,r);break;case"binary":d=u(this,e,t,r);break;case"base64":d=f(this,e,t,r);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=l(this,e,t,r);break;default:throw new TypeError("Unknown encoding: "+n)}return d},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.slice=function(e,t){var r=this.length;if(e=~~e,t=void 0===t?r:~~t,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>t?(t+=r,0>t&&(t=0)):t>r&&(t=r),e>t&&(t=e),o.TYPED_ARRAY_SUPPORT)return o._augment(this.subarray(e,t));for(var n=t-e,s=new o(n,void 0,!0),i=0;n>i;i++)s[i]=this[i+e];return s},o.prototype.readUInt8=function(e,t){return t||w(e,1,this.length),this[e]},o.prototype.readUInt16LE=function(e,t){return t||w(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUInt16BE=function(e,t){return t||w(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUInt32LE=function(e,t){return t||w(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},o.prototype.readUInt32BE=function(e,t){return t||w(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readInt8=function(e,t){return t||w(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){t||w(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(e,t){t||w(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(e,t){return t||w(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return t||w(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readFloatLE=function(e,t){return t||w(e,4,this.length),C.read(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return t||w(e,4,this.length),C.read(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return t||w(e,8,this.length),C.read(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return t||w(e,8,this.length),C.read(this,e,!1,52,8)},o.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,1,255,0),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=e,t+1},o.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e,this[t+1]=e>>>8):b(this,e,t,!0),t+2},o.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=e):b(this,e,t,!1),t+2},o.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e):_(this,e,t,!0),t+4},o.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e):_(this,e,t,!1),t+4},o.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,1,127,-128),o.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[t]=e,t+1},o.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=e,this[t+1]=e>>>8):b(this,e,t,!0),t+2},o.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=e):b(this,e,t,!1),t+2},o.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[t]=e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):_(this,e,t,!0),t+4},o.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),o.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e):_(this,e,t,!1),t+4},o.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){return E(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){return E(this,e,t,!1,r)},o.prototype.copy=function(e,t,r,n){var s=this;if(r||(r=0),n||0===n||(n=this.length),t||(t=0),n!==r&&0!==e.length&&0!==s.length){if(r>n)throw new TypeError("sourceEnd < sourceStart");if(0>t||t>=e.length)throw new TypeError("targetStart out of bounds");if(0>r||r>=s.length)throw new TypeError("sourceStart out of bounds");if(0>n||n>s.length)throw new TypeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;if(1e3>i||!o.TYPED_ARRAY_SUPPORT)for(var a=0;i>a;a++)e[a+t]=this[a+r];else e._set(this.subarray(r,r+i),t)}},o.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),t>r)throw new TypeError("end < start");if(r!==t&&0!==this.length){if(0>t||t>=this.length)throw new TypeError("start out of bounds");if(0>r||r>this.length)throw new TypeError("end out of bounds");var n;if("number"==typeof e)for(n=t;r>n;n++)this[n]=e;else{var o=T(e.toString()),s=o.length;for(n=t;r>n;n++)this[n]=o[n%s]}return this}},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o.TYPED_ARRAY_SUPPORT)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,r=e.length;r>t;t+=1)e[t]=this[t];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var D=o.prototype;o._augment=function(e){return e.constructor=o,e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=D.get,e.set=D.set,e.write=D.write,e.toString=D.toString,e.toLocaleString=D.toString,e.toJSON=D.toJSON,e.equals=D.equals,e.compare=D.compare,e.copy=D.copy,e.slice=D.slice,e.readUInt8=D.readUInt8,e.readUInt16LE=D.readUInt16LE,e.readUInt16BE=D.readUInt16BE,e.readUInt32LE=D.readUInt32LE,e.readUInt32BE=D.readUInt32BE,e.readInt8=D.readInt8,e.readInt16LE=D.readInt16LE,e.readInt16BE=D.readInt16BE,e.readInt32LE=D.readInt32LE,e.readInt32BE=D.readInt32BE,e.readFloatLE=D.readFloatLE,e.readFloatBE=D.readFloatBE,e.readDoubleLE=D.readDoubleLE,e.readDoubleBE=D.readDoubleBE,e.writeUInt8=D.writeUInt8,e.writeUInt16LE=D.writeUInt16LE,e.writeUInt16BE=D.writeUInt16BE,e.writeUInt32LE=D.writeUInt32LE,e.writeUInt32BE=D.writeUInt32BE,e.writeInt8=D.writeInt8,e.writeInt16LE=D.writeInt16LE,e.writeInt16BE=D.writeInt16BE,e.writeInt32LE=D.writeInt32LE,e.writeInt32BE=D.writeInt32BE,e.writeFloatLE=D.writeFloatLE,e.writeFloatBE=D.writeFloatBE,e.writeDoubleLE=D.writeDoubleLE,e.writeDoubleBE=D.writeDoubleBE,e.fill=D.fill,e.inspect=D.inspect,e.toArrayBuffer=D.toArrayBuffer,e};var k=/[^+\/0-9A-z]/g}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/browserify/node_modules/buffer/index.js","/node_modules/browserify/node_modules/buffer")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js","base64-js":"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js",ieee754:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(e,t,r){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function r(e){var t=e.charCodeAt(0);return t===i?62:t===a?63:u>t?-1:u+10>t?t-u+26+26:l+26>t?t-l:f+26>t?t-f+26:void 0}function n(e){function t(e){f[c++]=e}var n,o,i,a,u,f;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;u="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,f=new s(3*e.length/4-u),i=u>0?e.length-4:e.length;var c=0;for(n=0,o=0;i>n;n+=4,o+=3)a=r(e.charAt(n))<<18|r(e.charAt(n+1))<<12|r(e.charAt(n+2))<<6|r(e.charAt(n+3)),t((16711680&a)>>16),t((65280&a)>>8),t(255&a);return 2===u?(a=r(e.charAt(n))<<2|r(e.charAt(n+1))>>4,t(255&a)):1===u&&(a=r(e.charAt(n))<<10|r(e.charAt(n+1))<<4|r(e.charAt(n+2))>>2,t(a>>8&255),t(255&a)),f}function o(t){function r(t){return e.charAt(t)}function n(e){return r(e>>18&63)+r(e>>12&63)+r(e>>6&63)+r(63&e)}var o,s,i,a=t.length%3,u="";for(o=0,i=t.length-a;i>o;o+=3)s=(t[o]<<16)+(t[o+1]<<8)+t[o+2],u+=n(s);switch(a){case 1:s=t[t.length-1],u+=r(s>>2),u+=r(s<<4&63),u+="==";break;case 2:s=(t[t.length-2]<<8)+t[t.length-1],u+=r(s>>10),u+=r(s>>4&63),u+=r(s<<2&63),u+="="}return u}var s="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),f="a".charCodeAt(0),l="A".charCodeAt(0);t.toByteArray=n,t.fromByteArray=o}("undefined"==typeof r?this.base64js={}:r)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(e,t,r){(function(){r.read=function(e,t,r,n,o){var s,i,a=8*o-n-1,u=(1<<a)-1,f=u>>1,l=-7,c=r?o-1:0,d=r?-1:1,m=e[t+c];for(c+=d,s=m&(1<<-l)-1,m>>=-l,l+=a;l>0;s=256*s+e[t+c],c+=d,l-=8);for(i=s&(1<<-l)-1,s>>=-l,l+=n;l>0;i=256*i+e[t+c],c+=d,l-=8);if(0===s)s=1-f;else{if(s===u)return i?0/0:1/0*(m?-1:1);i+=Math.pow(2,n),s-=f}return(m?-1:1)*i*Math.pow(2,s-n)},r.write=function(e,t,r,n,o,s){var i,a,u,f=8*s-o-1,l=(1<<f)-1,c=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,m=n?0:s-1,p=n?1:-1,h=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||1/0===t?(a=isNaN(t)?1:0,i=l):(i=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-i))<1&&(i--,u*=2),t+=i+c>=1?d/u:d*Math.pow(2,1-c),t*u>=2&&(i++,u/=2),i+c>=l?(a=0,i=l):i+c>=1?(a=(t*u-1)*Math.pow(2,o),i+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,o),i=0));o>=8;e[r+m]=255&a,m+=p,a/=256,o-=8);for(i=i<<o|a,f+=o;f>0;e[r+m]=255&i,m+=p,i/=256,f-=8);e[r+m-p]|=128*h}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/node_modules/browserify/node_modules/buffer/node_modules/ieee754")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(e,t){(function(){var e=Array.isArray,r=Object.prototype.toString;t.exports=e||function(e){return!!e&&"[object Array]"==r.call(e)}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js","/node_modules/browserify/node_modules/buffer/node_modules/is-array")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js":[function(e,t){(function(e){function r(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.MutationObserver,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};var n=[];if(t){var o=document.createElement("div"),s=new MutationObserver(function(){var e=n.slice();n.length=0,e.forEach(function(e){e()})});return s.observe(o,{attributes:!0}),function(e){n.length||o.setAttribute("yes","no"),n.push(e)}}return r?(window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=r,e.addListener=r,e.once=r,e.off=r,e.removeListener=r,e.removeAllListeners=r,e.emit=r,e.binding=function(){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(){throw new Error("process.chdir is not supported")}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/browserify/node_modules/process/browser.js","/node_modules/browserify/node_modules/process")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/app/main/index.coffee":[function(e,t){(function(){var r,n;r=e("./main.controller"),n=e("test-gallery"),t.exports=angular.module("testApp.main",[n.name]).config(["$stateProvider","$urlRouterProvider",function(e,t){return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl as main"}),t.otherwise("/")}]).controller("MainCtrl",r)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/app/main/index.coffee","/src/app/main")},{"./main.controller":"/home/meafmira/projects/test-app/src/app/main/main.controller.coffee",_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js","test-gallery":"/home/meafmira/projects/test-app/src/components/test-gallery/index.coffee"}],"/home/meafmira/projects/test-app/src/app/main/main.controller.coffee":[function(e,t){(function(){var e;e=function(){function e(e){this.images=e.getList()}return e}(),e.$inject=["ImageRest"],t.exports=e}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/app/main/main.controller.coffee","/src/app/main")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/components/image-modal/image-modal.controller.coffee":[function(e,t){(function(){var e;e=function(){function e(e,t,r,n){var o;this.wrappedImages=e,this.index=t,this.autoRotate=r,this.$timeout=n,this.index=t,this.currentWrappedImage=this.wrappedImages[this.index],null!=this.autoRotate&&(o=function(e){return function(){return e.next(),e.$timeout(o,e.autoRotate)}}(this))()}return e.prototype.prev=function(){return 0===this.index?this.index=this.wrappedImages.length-1:this.index--,this.currentWrappedImage=this.wrappedImages[this.index]},e.prototype.next=function(){return this.index===this.wrappedImages.length-1?this.index=0:this.index++,this.currentWrappedImage=this.wrappedImages[this.index]},e}(),e.$inject=["wrappedImages","index","autoRotate","$timeout"],t.exports=e}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/image-modal/image-modal.controller.coffee","/src/components/image-modal")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/components/images.service.coffee":[function(e,t){(function(){t.exports=["Restangular",function(e){return e.all("assets/images.json")}]}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/images.service.coffee","/src/components")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/components/test-gallery-item/test-gallery-item.directive.coffee":[function(e,t){(function(){t.exports=function(){return{templateUrl:"components/test-gallery-item/test-gallery-item.html",require:"^testGallery",scope:{wrappedImage:"=image",$index:"=index"},link:function(e,t,r,n){return e.$showImage=n.showImage,e.$deleteImage=n.deleteImage}}}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/test-gallery-item/test-gallery-item.directive.coffee","/src/components/test-gallery-item")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/components/test-gallery/index.coffee":[function(e,t){(function(){var r,n,o,s,i;s=e("./test-gallery.directive"),i=e("test-gallery-item/test-gallery-item.directive"),o=e("./test-gallery.controller"),n=e("images.service"),r=e("image-modal/image-modal.controller"),t.exports=angular.module("test-gallery",["ui.bootstrap","ngCookies"]).controller("TestGalleryCtrl",o).controller("ImageModalCtrl",r).directive("testGallery",s).directive("testGalleryItem",i).factory("ImageRest",n)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/test-gallery/index.coffee","/src/components/test-gallery")},{"./test-gallery.controller":"/home/meafmira/projects/test-app/src/components/test-gallery/test-gallery.controller.coffee","./test-gallery.directive":"/home/meafmira/projects/test-app/src/components/test-gallery/test-gallery.directive.coffee",_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js","image-modal/image-modal.controller":"/home/meafmira/projects/test-app/src/components/image-modal/image-modal.controller.coffee","images.service":"/home/meafmira/projects/test-app/src/components/images.service.coffee","test-gallery-item/test-gallery-item.directive":"/home/meafmira/projects/test-app/src/components/test-gallery-item/test-gallery-item.directive.coffee"}],"/home/meafmira/projects/test-app/src/components/test-gallery/test-gallery.controller.coffee":[function(e,t){(function(){var e,r=function(e,t){return function(){return e.apply(t,arguments)}},n=[].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1};e=function(){function e(e,t,n,o,s){this.$q=e,this.$modal=t,this.$cookies=n,this.$scope=o,this.$attrs=s,this._deletedImages=r(this._deletedImages,this),this._search=r(this._search,this),this._paginate=r(this._paginate,this),this._sort=r(this._sort,this),this.deleteImage=r(this.deleteImage,this),this.showImage=r(this.showImage,this),this.update=r(this.update,this),this.init=r(this.init,this),this.$scope.$watch("data",function(e){return function(t){return null!=t?e.init(t):void 0}}(this))}return e.prototype.init=function(e){var t;return t=this.$cookies.deletedImages,this.deletedImages=null!=t?t.split(","):[],this.sortBy="title",this.pagination=5,this.currentPage=1,this.searchQuery="",this.totalItems=0,this.$q.when(e).then(function(e){return function(t){var r;return r=t.map(function(t,r){var n,o;return t.date=new Date(t.date),n=e.$q.defer(),o=new Image,o.onload=function(){return n.resolve({id:r,image:t,noImage:!1})},o.onerror=function(){return n.resolve({id:r,image:t,noImage:!0})},o.src=t.url,n.promise}),e.deferImages=e.$q.all(r),e.update()}}(this))},e.prototype.update=function(){return this.deferImages.then(function(e){return function(t){return e._deletedImages(t)}}(this)).then(function(e){return function(t){return e._sort(t,e.sortBy)}}(this)).then(function(e){return function(t){return e._search(t,e.searchQuery)}}(this)).then(function(e){return function(t){return e.totalItems=t.length,e.wrappedImagesWithoutPagination=t,e._paginate(t,e.pagination,e.currentPage)}}(this)).then(function(e){return function(t){return e.$scope.$images=t,e.wrappedImages=t}}(this))},e.prototype.showImage=function(e){return this.$modal.open({templateUrl:"components/image-modal/index.html",controller:"ImageModalCtrl as imageModal",resolve:{wrappedImages:function(e){return function(){return e.wrappedImagesWithoutPagination}}(this),index:function(t){return function(){return e+t.pagination*(t.currentPage-1)}}(this),autoRotate:function(e){return function(){return e.$scope.autoRotate}}(this)}})},e.prototype.deleteImage=function(e){return this.deletedImages.push(e.toString()),this.$cookies.deletedImages=this.deletedImages.join(","),this.update()},e.prototype._sort=function(e,t){var r;return r={date:function(e,t){var r,n;return r=e.image.date,n=t.image.date,r.getTime()<n.getTime()?-1:1},title:function(e,t){return e.image.title.localeCompare(t.image.title)}},e.sort(r[t])},e.prototype._paginate=function(e,t,r){return e.filter(function(){return function(e,n){return r*t>n&&n>=(r-1)*t}}(this))},e.prototype._search=function(e,t){return""===t?e:e.filter(function(){return function(e){return-1!==e.image.title.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())}}(this))},e.prototype._deletedImages=function(e){return 0===this.deletedImages.length?e:e.filter(function(e){return function(t){var r;return r=t.id.toString(),n.call(e.deletedImages,r)<0}}(this))},e}(),e.$inject=["$q","$modal","$cookies","$scope","$attrs"],t.exports=e}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/test-gallery/test-gallery.controller.coffee","/src/components/test-gallery")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}],"/home/meafmira/projects/test-app/src/components/test-gallery/test-gallery.directive.coffee":[function(e,t){(function(){t.exports=function(){return{controller:"TestGalleryCtrl as main",templateUrl:function(){return"components/test-gallery/test-gallery.html"},scope:{data:"=",autoRotate:"="}}}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/components/test-gallery/test-gallery.directive.coffee","/src/components/test-gallery")},{_process:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/process/browser.js",buffer:"/home/meafmira/projects/test-app/node_modules/browserify/node_modules/buffer/index.js"}]},{},["./src/app/index.coffee"]);