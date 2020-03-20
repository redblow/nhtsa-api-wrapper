/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,r,o){return new(r||(r=Promise))((function(n,s){function i(t){try{u(o.next(t))}catch(t){s(t)}}function a(t){try{u(o.throw(t))}catch(t){s(t)}}function u(t){t.done?n(t.value):new r((function(e){e(t.value)})).then(i,a)}u((o=o.apply(t,e||[])).next())}))}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,r){var o=function(t){function e(){this.fetch=!1,this.DOMException=t.DOMException}return e.prototype=t,new e}("undefined"!=typeof self?self:e);!function(t){!function(e){var r="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in t,i="ArrayBuffer"in t;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function p(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function y(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i&&n&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r,o=p(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=c(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[c(t)]},d.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},d.prototype.set=function(t,e){this.map[c(t)]=h(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},o&&(d.prototype[Symbol.iterator]=d.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var r,o,n=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),g.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},m.call(w.prototype),m.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];E.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function j(t,r){return new Promise((function(o,s){var i=new w(t,r);if(i.signal&&i.signal.aborted)return s(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;o(new E(n,r))},a.onerror=function(){s(new TypeError("Network request failed"))},a.ontimeout=function(){s(new TypeError("Network request failed"))},a.onabort=function(){s(new e.DOMException("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&n&&(a.responseType="blob"),i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})),i.signal&&(i.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",u)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}j.polyfill=!0,t.fetch||(t.fetch=j,t.Headers=d,t.Request=w,t.Response=E),e.Headers=d,e.Request=w,e.Response=E,e.fetch=j}({})}(o),delete o.fetch.polyfill,(r=o.fetch).default=o.fetch,r.fetch=o.fetch,r.Headers=o.Headers,r.Request=o.Request,r.Response=o.Response,t.exports=r}));r.fetch,r.Headers,r.Request,r.Response;function o(t){const e=Object.prototype.toString.call(t).toLowerCase();return e.slice(8,e.length-1)}const n={apiResponseFormat:"json",baseUrl:"https://vpic.nhtsa.dot.gov/api/vehicles",options:{}};class s{constructor(t){let e;e=t&&"object"===o(t)?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options)}):Object.assign({},n),this.apiResponseFormat="json",this.baseUrl=e.baseUrl,this.options=e.options}buildQueryString(e,r=!1){return t(this,void 0,void 0,(function*(){return e=e&&"object"===o(e)?Object.assign(Object.assign({},e),{format:this.apiResponseFormat}):{format:this.apiResponseFormat},yield function(t={},e=!1){if("object"!==o(t))return Promise.reject(new Error(`queryString(params) - expected params in the form of an object, got: ${t}`));const r=Object.entries(t),n=r.length;if(n<1)return Promise.resolve("");let s=!1;const i=r.map(([t,r],i)=>{let a="",u="";const c=o(r);if(r&&"number"===c&&(r=r.toString()),(r||e)&&("string"===c||"number"===c))return s||(a="?",s=!0),i<n-1&&(u="&"),`${a}${t}=${r}${u}`});return Promise.resolve(encodeURI(i.join("")))}(e,r)}))}get(e,n={}){return t(this,void 0,void 0,(function*(){const t=o(e);if("string"!==t)return Promise.reject(new Error(`Fetch.get(url) - url argument must be of type string, got: ${t}`));const s=o(n);if("object"!==s)return Promise.reject(new Error(`Fetch.get(url, options) - options argument must be of type object, got: ${s}`));const i=Object.assign(Object.assign({},this.options),n),a=yield r(e,i).then(t=>{if(!(null==t?void 0:t.status)||t.status>=400)throw new Error(`Bad response from server, code: ${null==t?void 0:t.status}, text: ${null==t?void 0:t.statusText}, headers: ${null==t?void 0:t.headers}`);return t}).catch(t=>Promise.reject(new Error(`Fetch.get() http error: ${t}`))),u=yield a.json().then(t=>t),c=Object.assign(Object.assign({},u),{FetchResponse:{headers:a.headers,ok:a.ok,redirected:a.redirected,status:a.status,statusText:a.statusText,url:a.url}});return Promise.resolve(c)}))}}export{s as F,t as _,o as g};
//# sourceMappingURL=Fetch-5fb1d142.js.map