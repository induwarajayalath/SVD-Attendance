(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26505bd1"],{3306:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"HomePage",fluid:"",tag:"section"}},[n("v-app-bar",{attrs:{color:"#b88611",dense:"",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[e._v(" Admin Pannel ")]),n("v-spacer"),n("v-btn",{attrs:{color:"#d6a21d"},on:{click:e.logout}},[e._v(" Logout ")]),n("v-spacer")],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("center",[n("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"#455A64",title:"Add new one"}},[n("v-card-text",{staticClass:"px-0 pb-0"},[n("v-sheet"),e._v(" Login email "),n("v-text-field",{attrs:{type:"email"},on:{change:e.genPassword},model:{value:e.loginEmail,callback:function(t){e.loginEmail=t},expression:"loginEmail"}}),e._v(" Class Name "),n("v-text-field",{model:{value:e.className,callback:function(t){e.className=t},expression:"className"}}),e._v(" Login Password "),n("v-text-field",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"#d6a21d"},on:{click:e.addNew}},[e._v(" Submit ")])],1)],1)],1)],1)],1)],1)},o=[],i=(n("99af"),n("fb6a"),n("2b0e")),a=n("2b27"),u=n.n(a),s=(n("5706"),n("8aa50")),f=n.n(s),c=n("683f"),l=n("bc3a");i["a"].use(c["a"]),i["a"].use(u.a);var d=n("d442"),h={data:function(){return{className:"",loginEmail:"",password:""}},mounted:function(){this.showError=!1,this.successBool=!1,u.a.isKey("admin")||this.$router.push("/adminHome")},methods:{addNew:function(){var e=this;f.a.auth().createUserWithEmailAndPassword(this.loginEmail,this.password).then((function(t){l.get("https://us-central1-ds-portal-1585947467436.cloudfunctions.net/createFolder?classs=".concat(e.className,"&email=").concat(e.loginEmail,"&uid=").concat(t.user.uid)).then((function(){e.$alert("Added","","success")})).catch((function(e){alert("Error occured ".error)}))}),(function(t){e.$alert(t.message,"","error")}))},genPassword:function(){this.password=d(this.loginEmail).slice(1,7)},logout:function(){var e=this;f.a.auth().signOut().then((function(){u.a.remove("user"),u.a.remove("folderID"),u.a.remove("subject"),u.a.remove("admin"),e.$router.push("/Login")}))}}},p=h,g=n("2877"),y=n("6544"),w=n.n(y),b=n("40dc"),m=(n("498a"),n("5530")),v=n("9d26"),_=n("8336"),E=i["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(e,t){var n=t.slots,r=t.listeners,o=t.props,i=t.data,a=Object.assign(i,{staticClass:"v-app-bar__nav-icon ".concat(i.staticClass||"").trim(),props:Object(m["a"])({},o,{icon:!0}),on:r}),u=n().default;return e(_["a"],a,u||[e(v["a"],"$menu")])}}),I=n("99d9"),A=n("62ad"),B=n("a523"),x=n("0fd9"),L=n("8dd9"),U=n("2fa4"),S=n("8654"),C=n("2a7f"),k=Object(g["a"])(p,r,o,!1,null,null,null);t["default"]=k.exports;w()(k,{VAppBar:b["a"],VAppBarNavIcon:E,VBtn:_["a"],VCardText:I["b"],VCol:A["a"],VContainer:B["a"],VRow:x["a"],VSheet:L["a"],VSpacer:U["a"],VTextField:S["a"],VToolbarTitle:C["a"]})},d442:function(e,t,n){var r;!function(t){e.exports=t()}((function(){return function e(t,n,o){function i(u,s){if(!n[u]){if(!t[u]){var f="function"==typeof r&&r;if(!s&&f)return r(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var c=n[u]={exports:{}};t[u][0].call(c.exports,(function(e){var n=t[u][1][e];return i(n||e)}),c,c.exports,e,t,n,o)}return n[u].exports}for(var a="function"==typeof r&&r,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,n){(function(r,o,i,a,u,s,f,c,l){"use strict";var d=e("crypto");function h(e,t){return function(e,t){var n;if(n="passthrough"!==t.algorithm?d.createHash(t.algorithm):new m,void 0===n.write&&(n.write=n.update,n.end=n.update),b(t,n).dispatch(e),n.update||n.end(""),n.digest)return n.digest("buffer"===t.encoding?void 0:t.encoding);var r=n.read();return"buffer"!==t.encoding?r.toString(t.encoding):r}(e,t=y(e,t))}(n=t.exports=h).sha1=function(e){return h(e)},n.keys=function(e){return h(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(e){return h(e,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(e){return h(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=d.getHashes?d.getHashes().slice():["sha1","md5"];p.push("passthrough");var g=["buffer","hex","binary","base64"];function y(e,t){t=t||{};var n={};if(n.algorithm=t.algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<p.length;++r)p[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=p[r]);if(-1===p.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+p.join(", "));if(-1===g.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+g.join(", "));return n}function w(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function b(e,t,n){function r(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return n=n||[],{dispatch:function(t){e.replacer&&(t=e.replacer(t));var n=typeof t;return null===t&&(n="null"),this["_"+n](t)},_object:function(t){var o,a=Object.prototype.toString.call(t),u=/\[object (.*)\]/i.exec(a);if(u=(u=u?u[1]:"unknown:["+a+"]").toLowerCase(),0<=(o=n.indexOf(t)))return this.dispatch("[CIRCULAR:"+o+"]");if(n.push(t),void 0!==i&&i.isBuffer&&i.isBuffer(t))return r("buffer:"),r(t);if("object"===u||"function"===u||"asyncfunction"===u){var s=Object.keys(t);e.unorderedObjects&&(s=s.sort()),!1===e.respectType||w(t)||s.splice(0,0,"prototype","__proto__","constructor"),e.excludeKeys&&(s=s.filter((function(t){return!e.excludeKeys(t)}))),r("object:"+s.length+":");var f=this;return s.forEach((function(n){f.dispatch(n),r(":"),e.excludeValues||f.dispatch(t[n]),r(",")}))}if(!this["_"+u]){if(e.ignoreUnknown)return r("["+u+"]");throw new Error('Unknown object type "'+u+'"')}this["_"+u](t)},_array:function(t,o){o=void 0!==o?o:!1!==e.unorderedArrays;var i=this;if(r("array:"+t.length+":"),!o||t.length<=1)return t.forEach((function(e){return i.dispatch(e)}));var a=[],u=t.map((function(t){var r=new m,o=n.slice();return b(e,r,o).dispatch(t),a=a.concat(o.slice(n.length)),r.read().toString()}));return n=n.concat(a),u.sort(),this._array(u,!1)},_date:function(e){return r("date:"+e.toJSON())},_symbol:function(e){return r("symbol:"+e.toString())},_error:function(e){return r("error:"+e.toString())},_boolean:function(e){return r("bool:"+e.toString())},_string:function(e){r("string:"+e.length+":"),r(e.toString())},_function:function(t){r("fn:"),w(t)?this.dispatch("[native]"):this.dispatch(t.toString()),!1!==e.respectFunctionNames&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this._object(t)},_number:function(e){return r("number:"+e.toString())},_xml:function(e){return r("xml:"+e.toString())},_null:function(){return r("Null")},_undefined:function(){return r("Undefined")},_regexp:function(e){return r("regex:"+e.toString())},_uint8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return r("url:"+e.toString())},_map:function(t){r("map:");var n=Array.from(t);return this._array(n,!1!==e.unorderedSets)},_set:function(t){r("set:");var n=Array.from(t);return this._array(n,!1!==e.unorderedSets)},_blob:function(){if(e.ignoreUnknown)return r("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return r("domwindow")},_process:function(){return r("process")},_timer:function(){return r("timer")},_pipe:function(){return r("pipe")},_tcp:function(){return r("tcp")},_udp:function(){return r("udp")},_tty:function(){return r("tty")},_statwatcher:function(){return r("statwatcher")},_securecontext:function(){return r("securecontext")},_connection:function(){return r("connection")},_zlib:function(){return r("zlib")},_context:function(){return r("context")},_nodescript:function(){return r("nodescript")},_httpparser:function(){return r("httpparser")},_dataview:function(){return r("dataview")},_signal:function(){return r("signal")},_fsevent:function(){return r("fsevent")},_tlswrap:function(){return r("tlswrap")}}}function m(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}n.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),b(t=y(e,t),n).dispatch(e)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_794fcf4d.js","/")},{buffer:3,crypto:5,lYpoI2:10}],2:[function(e,t,n){(function(e,t,r,o,i,a,u,s,f){!function(e){"use strict";var t="undefined"!=typeof Uint8Array?Uint8Array:Array,n="+".charCodeAt(0),r="/".charCodeAt(0),o="0".charCodeAt(0),i="a".charCodeAt(0),a="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function f(e){var t=e.charCodeAt(0);return t===n||t===u?62:t===r||t===s?63:t<o?-1:t<o+10?t-o+26+26:t<a+26?t-a:t<i+26?t-i+26:void 0}e.toByteArray=function(e){var n,r,o,i,a;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var u=e.length;i="="===e.charAt(u-2)?2:"="===e.charAt(u-1)?1:0,a=new t(3*e.length/4-i),r=0<i?e.length-4:e.length;var s=0;function c(e){a[s++]=e}for(n=0;n<r;n+=4,0)c((16711680&(o=f(e.charAt(n))<<18|f(e.charAt(n+1))<<12|f(e.charAt(n+2))<<6|f(e.charAt(n+3))))>>16),c((65280&o)>>8),c(255&o);return 2==i?c(255&(o=f(e.charAt(n))<<2|f(e.charAt(n+1))>>4)):1==i&&(c((o=f(e.charAt(n))<<10|f(e.charAt(n+1))<<4|f(e.charAt(n+2))>>2)>>8&255),c(255&o)),a},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,a="";function u(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],a+=u((o=n)>>18&63)+u(o>>12&63)+u(o>>6&63)+u(63&o);switch(i){case 1:a+=u((n=e[e.length-1])>>2),a+=u(n<<4&63),a+="==";break;case 2:a+=u((n=(e[e.length-2]<<8)+e[e.length-1])>>10),a+=u(n>>4&63),a+=u(n<<2&63),a+="="}return a}}(void 0===n?this.base64js={}:n)}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:10}],3:[function(e,t,n){(function(t,r,o,i,a,u,s,f,c){var l=e("base64-js"),d=e("ieee754");function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r,i,a,u,s,f=typeof e;if("base64"===t&&"string"==f)for(e=(r=e).trim?r.trim():r.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==f)i=C(e);else if("string"==f)i=o.byteLength(e,t);else{if("object"!=f)throw new Error("First argument needs to be a number, array or string.");i=C(e.length)}if(o._useTypedArrays?a=o._augment(new Uint8Array(i)):((a=this).length=i,a._isBuffer=!0),o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(k(s=e)||o.isBuffer(s)||s&&"object"==typeof s&&"number"==typeof s.length)for(u=0;u<i;u++)o.isBuffer(e)?a[u]=e.readUInt8(u):a[u]=e[u];else if("string"==f)a.write(e,0,t);else if("number"==f&&!o._useTypedArrays&&!n)for(u=0;u<i;u++)a[u]=0;return a}function h(e,t,n,r){return o._charsWritten=M(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function p(e,t,n,r){return o._charsWritten=M(function(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}(t),e,n,r)}function g(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function y(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(null!=t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(i<=t))return n?(o=e[t],t+1<i&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<i&&(o|=e[t+1])),o}function w(e,t,n,r){r||(V("boolean"==typeof n,"missing or invalid endian"),V(null!=t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length"));var o,i=e.length;if(!(i<=t))return n?(t+2<i&&(o=e[t+2]<<16),t+1<i&&(o|=e[t+1]<<8),o|=e[t],t+3<i&&(o+=e[t+3]<<24>>>0)):(t+1<i&&(o=e[t+1]<<16),t+2<i&&(o|=e[t+2]<<8),t+3<i&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function b(e,t,n,r){if(r||(V("boolean"==typeof n,"missing or invalid endian"),V(null!=t,"missing offset"),V(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t)){var o=y(e,t,n,!0);return 32768&o?-1*(65535-o+1):o}}function m(e,t,n,r){if(r||(V("boolean"==typeof n,"missing or invalid endian"),V(null!=t,"missing offset"),V(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t)){var o=w(e,t,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function v(e,t,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(t+3<e.length,"Trying to read beyond buffer length")),d.read(e,t,n,23,4)}function _(e,t,n,r){return r||(V("boolean"==typeof n,"missing or invalid endian"),V(t+7<e.length,"Trying to read beyond buffer length")),d.read(e,t,n,52,8)}function E(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));var i=e.length;if(!(i<=n))for(var a=0,u=Math.min(i-n,2);a<u;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function I(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));var i=e.length;if(!(i<=n))for(var a=0,u=Math.min(i-n,4);a<u;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function A(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+1<e.length,"Trying to write beyond buffer length"),D(t,32767,-32768)),e.length<=n||E(e,0<=t?t:65535+t+1,n,r,o)}function B(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+3<e.length,"Trying to write beyond buffer length"),D(t,2147483647,-2147483648)),e.length<=n||I(e,0<=t?t:4294967295+t+1,n,r,o)}function x(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+3<e.length,"Trying to write beyond buffer length"),O(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||d.write(e,t,n,r,23,4)}function L(e,t,n,r,o){o||(V(null!=t,"missing value"),V("boolean"==typeof r,"missing or invalid endian"),V(null!=n,"missing offset"),V(n+7<e.length,"Trying to write beyond buffer length"),O(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||d.write(e,t,n,r,52,8)}n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null==e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=N(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=T(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(V(k(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(n=t=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var i=r;r=t,t=n,n=i}t=Number(t)||0;var a,u,s,f,c,l,d,g=this.length-t;switch((!n||g<(n=Number(n)))&&(n=g),r=String(r||"utf8").toLowerCase()){case"hex":a=function(e,t,n,r){n=Number(n)||0;var i=e.length-n;(!r||i<(r=Number(r)))&&(r=i);var a=t.length;V(a%2==0,"Invalid hex string"),a/2<r&&(r=a/2);for(var u=0;u<r;u++){var s=parseInt(t.substr(2*u,2),16);V(!isNaN(s),"Invalid hex string"),e[n+u]=s}return o._charsWritten=2*u,u}(this,e,t,n);break;case"utf8":case"utf-8":c=this,l=t,d=n,a=o._charsWritten=M(N(e),c,l,d);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=h(this,e,t,n);break;case"base64":u=this,s=t,f=n,a=o._charsWritten=M(T(e),u,s,f);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=p(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r,o,i,a,u=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=u.length)===t)return"";switch(e){case"hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=j(e[i]);return o}(u,t,n);break;case"utf8":case"utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=F(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+F(o)}(u,t,n);break;case"ascii":r=g(u,t,n);break;case"binary":r=g(u,t,n);break;case"base64":o=u,a=n,r=0===(i=t)&&a===o.length?l.fromByteArray(o):l.fromByteArray(o.slice(i,a));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(u,t,n);break;default:throw new Error("Unknown encoding")}return r},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){if(n=n||0,r||0===r||(r=this.length),t=t||0,r!==n&&0!==e.length&&0!==this.length){V(n<=r,"sourceEnd < sourceStart"),V(0<=t&&t<e.length,"targetStart out of bounds"),V(0<=n&&n<this.length,"sourceStart out of bounds"),V(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i=r-n;if(i<100||!o._useTypedArrays)for(var a=0;a<i;a++)e[a+t]=this[a+n];else e._set(this.subarray(n,n+i),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=S(e,n,0),t=S(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),a=0;a<r;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(V(null!=e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return y(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return y(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return w(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return w(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(V(null!=e,"missing offset"),V(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){return b(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return b(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return m(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return m(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return v(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return v(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return _(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return _(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(V(null!=e,"missing value"),V(null!=t,"missing offset"),V(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){E(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){E(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){I(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){I(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(V(null!=e,"missing value"),V(null!=t,"missing offset"),V(t<this.length,"Trying to write beyond buffer length"),D(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){A(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){A(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){B(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){B(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){L(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){L(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e=e||0,t=t||0,n=n||this.length,"string"==typeof e&&(e=e.charCodeAt(0)),V("number"==typeof e&&!isNaN(e),"value is not a number"),V(t<=n,"end < start"),n!==t&&0!==this.length){V(0<=t&&t<this.length,"start out of bounds"),V(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=j(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var U=o.prototype;function S(e,t,n){return"number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function C(e){return(e=~~Math.ceil(+e))<0?0:e}function k(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function j(e){return e<16?"0"+e.toString(16):e.toString(16)}function N(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;55296<=r&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function T(e){return l.toByteArray(e)}function M(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function F(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){V("number"==typeof e,"cannot write a non-number as a number"),V(0<=e,"specified a negative value for writing an unsigned value"),V(e<=t,"value is larger than maximum value for type"),V(Math.floor(e)===e,"value has a fractional component")}function D(e,t,n){V("number"==typeof e,"cannot write a non-number as a number"),V(e<=t,"value larger than maximum allowed value"),V(n<=e,"value smaller than minimum allowed value"),V(Math.floor(e)===e,"value has a fractional component")}function O(e,t,n){V("number"==typeof e,"cannot write a non-number as a number"),V(e<=t,"value larger than maximum allowed value"),V(n<=e,"value smaller than minimum allowed value")}function V(e,t){if(!e)throw new Error(t||"Failed assertion")}o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=U.get,e.set=U.set,e.write=U.write,e.toString=U.toString,e.toLocaleString=U.toString,e.toJSON=U.toJSON,e.copy=U.copy,e.slice=U.slice,e.readUInt8=U.readUInt8,e.readUInt16LE=U.readUInt16LE,e.readUInt16BE=U.readUInt16BE,e.readUInt32LE=U.readUInt32LE,e.readUInt32BE=U.readUInt32BE,e.readInt8=U.readInt8,e.readInt16LE=U.readInt16LE,e.readInt16BE=U.readInt16BE,e.readInt32LE=U.readInt32LE,e.readInt32BE=U.readInt32BE,e.readFloatLE=U.readFloatLE,e.readFloatBE=U.readFloatBE,e.readDoubleLE=U.readDoubleLE,e.readDoubleBE=U.readDoubleBE,e.writeUInt8=U.writeUInt8,e.writeUInt16LE=U.writeUInt16LE,e.writeUInt16BE=U.writeUInt16BE,e.writeUInt32LE=U.writeUInt32LE,e.writeUInt32BE=U.writeUInt32BE,e.writeInt8=U.writeInt8,e.writeInt16LE=U.writeInt16LE,e.writeInt16BE=U.writeInt16BE,e.writeInt32LE=U.writeInt32LE,e.writeInt32BE=U.writeInt32BE,e.writeFloatLE=U.writeFloatLE,e.writeFloatBE=U.writeFloatBE,e.writeDoubleLE=U.writeDoubleLE,e.writeDoubleBE=U.writeDoubleBE,e.fill=U.fill,e.inspect=U.inspect,e.toArrayBuffer=U.toArrayBuffer,e}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:11,lYpoI2:10}],4:[function(e,t,n){(function(n,r,o,i,a,u,s,f,c){o=e("buffer").Buffer;var l=4,d=new o(l);d.fill(0),t.exports={hash:function(e,t,n,r){return o.isBuffer(e)||(e=new o(e)),function(e,t,n){for(var r=new o(t),i=n?r.writeInt32BE:r.writeInt32LE,a=0;a<e.length;a++)i.call(r,e[a],4*a,!0);return r}(t(function(e,t){if(e.length%l!=0){var n=e.length+(l-e.length%l);e=o.concat([e,d],n)}for(var r=[],i=t?e.readInt32BE:e.readInt32LE,a=0;a<e.length;a+=l)r.push(i.call(e,a));return r}(e,r),8*e.length),n,r)}}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],5:[function(e,t,n){(function(t,r,o,i,a,u,s,f,c){o=e("buffer").Buffer;var l=e("./sha"),d=e("./sha256"),h=e("./rng"),p={sha1:l,sha256:d,md5:e("./md5")},g=64,y=new o(g);function w(e,t){var n=p[e=e||"sha1"],r=[];return n||b("algorithm:",e,"is not yet supported"),{update:function(e){return o.isBuffer(e)||(e=new o(e)),r.push(e),e.length,this},digest:function(e){var i=o.concat(r),a=t?function(e,t,n){o.isBuffer(t)||(t=new o(t)),o.isBuffer(n)||(n=new o(n)),t.length>g?t=e(t):t.length<g&&(t=o.concat([t,y],g));for(var r=new o(g),i=new o(g),a=0;a<g;a++)r[a]=54^t[a],i[a]=92^t[a];var u=e(o.concat([r,n]));return e(o.concat([i,u]))}(n,t,i):n(i);return r=null,e?a.toString(e):a}}}function b(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}y.fill(0),n.createHash=function(e){return w(e)},n.createHmac=function(e,t){return w(e,t)},n.randomBytes=function(e,t){if(!t||!t.call)return new o(h(e));try{t.call(this,void 0,new o(h(e)))}catch(e){t(e)}},function(e,t){for(var n in e)t(e[n],n)}(["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],(function(e){n[e]=function(){b("sorry,",e,"is not implemented yet")}}))}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:10}],6:[function(e,t,n){(function(n,r,o,i,a,u,s,f,c){var l=e("./helpers");function d(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,a=0;a<e.length;a+=16){var u=n,s=r,f=o,c=i;n=p(n,r,o,i,e[a+0],7,-680876936),i=p(i,n,r,o,e[a+1],12,-389564586),o=p(o,i,n,r,e[a+2],17,606105819),r=p(r,o,i,n,e[a+3],22,-1044525330),n=p(n,r,o,i,e[a+4],7,-176418897),i=p(i,n,r,o,e[a+5],12,1200080426),o=p(o,i,n,r,e[a+6],17,-1473231341),r=p(r,o,i,n,e[a+7],22,-45705983),n=p(n,r,o,i,e[a+8],7,1770035416),i=p(i,n,r,o,e[a+9],12,-1958414417),o=p(o,i,n,r,e[a+10],17,-42063),r=p(r,o,i,n,e[a+11],22,-1990404162),n=p(n,r,o,i,e[a+12],7,1804603682),i=p(i,n,r,o,e[a+13],12,-40341101),o=p(o,i,n,r,e[a+14],17,-1502002290),n=g(n,r=p(r,o,i,n,e[a+15],22,1236535329),o,i,e[a+1],5,-165796510),i=g(i,n,r,o,e[a+6],9,-1069501632),o=g(o,i,n,r,e[a+11],14,643717713),r=g(r,o,i,n,e[a+0],20,-373897302),n=g(n,r,o,i,e[a+5],5,-701558691),i=g(i,n,r,o,e[a+10],9,38016083),o=g(o,i,n,r,e[a+15],14,-660478335),r=g(r,o,i,n,e[a+4],20,-405537848),n=g(n,r,o,i,e[a+9],5,568446438),i=g(i,n,r,o,e[a+14],9,-1019803690),o=g(o,i,n,r,e[a+3],14,-187363961),r=g(r,o,i,n,e[a+8],20,1163531501),n=g(n,r,o,i,e[a+13],5,-1444681467),i=g(i,n,r,o,e[a+2],9,-51403784),o=g(o,i,n,r,e[a+7],14,1735328473),n=y(n,r=g(r,o,i,n,e[a+12],20,-1926607734),o,i,e[a+5],4,-378558),i=y(i,n,r,o,e[a+8],11,-2022574463),o=y(o,i,n,r,e[a+11],16,1839030562),r=y(r,o,i,n,e[a+14],23,-35309556),n=y(n,r,o,i,e[a+1],4,-1530992060),i=y(i,n,r,o,e[a+4],11,1272893353),o=y(o,i,n,r,e[a+7],16,-155497632),r=y(r,o,i,n,e[a+10],23,-1094730640),n=y(n,r,o,i,e[a+13],4,681279174),i=y(i,n,r,o,e[a+0],11,-358537222),o=y(o,i,n,r,e[a+3],16,-722521979),r=y(r,o,i,n,e[a+6],23,76029189),n=y(n,r,o,i,e[a+9],4,-640364487),i=y(i,n,r,o,e[a+12],11,-421815835),o=y(o,i,n,r,e[a+15],16,530742520),n=w(n,r=y(r,o,i,n,e[a+2],23,-995338651),o,i,e[a+0],6,-198630844),i=w(i,n,r,o,e[a+7],10,1126891415),o=w(o,i,n,r,e[a+14],15,-1416354905),r=w(r,o,i,n,e[a+5],21,-57434055),n=w(n,r,o,i,e[a+12],6,1700485571),i=w(i,n,r,o,e[a+3],10,-1894986606),o=w(o,i,n,r,e[a+10],15,-1051523),r=w(r,o,i,n,e[a+1],21,-2054922799),n=w(n,r,o,i,e[a+8],6,1873313359),i=w(i,n,r,o,e[a+15],10,-30611744),o=w(o,i,n,r,e[a+6],15,-1560198380),r=w(r,o,i,n,e[a+13],21,1309151649),n=w(n,r,o,i,e[a+4],6,-145523070),i=w(i,n,r,o,e[a+11],10,-1120210379),o=w(o,i,n,r,e[a+2],15,718787259),r=w(r,o,i,n,e[a+9],21,-343485551),n=b(n,u),r=b(r,s),o=b(o,f),i=b(i,c)}return Array(n,r,o,i)}function h(e,t,n,r,o,i){return b((a=b(b(t,e),b(r,i)))<<(u=o)|a>>>32-u,n);var a,u}function p(e,t,n,r,o,i,a){return h(t&n|~t&r,e,t,o,i,a)}function g(e,t,n,r,o,i,a){return h(t&r|n&~r,e,t,o,i,a)}function y(e,t,n,r,o,i,a){return h(t^n^r,e,t,o,i,a)}function w(e,t,n,r,o,i,a){return h(n^(t|~r),e,t,o,i,a)}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}t.exports=function(e){return l.hash(e,d,16)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],7:[function(e,t,n){(function(e,n,r,o,i,a,u,s,f){var c,l;c=function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n},t.exports=l||c}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:10}],8:[function(e,t,n){(function(n,r,o,i,a,u,s,f,c){var l=e("./helpers");function d(e,t){e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var n,r=Array(80),o=1732584193,i=-271733879,a=-1732584194,u=271733878,s=-1009589776,f=0;f<e.length;f+=16){for(var c=o,l=i,d=a,y=u,w=s,b=0;b<80;b++){r[b]=b<16?e[f+b]:g(r[b-3]^r[b-8]^r[b-14]^r[b-16],1);var m=p(p(g(o,5),h(b,i,a,u)),p(p(s,r[b]),(n=b)<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514));s=u,u=a,a=g(i,30),i=o,o=m}o=p(o,c),i=p(i,l),a=p(a,d),u=p(u,y),s=p(s,w)}return Array(o,i,a,u,s)}function h(e,t,n,r){return e<20?t&n|~t&r:!(e<40)&&e<60?t&n|t&r|n&r:t^n^r}function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function g(e,t){return e<<t|e>>>32-t}t.exports=function(e){return l.hash(e,d,20,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],9:[function(e,t,n){(function(n,r,o,i,a,u,s,f,c){function l(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function d(e,t){return e>>>t|e<<32-t}function h(e,t){return e>>>t}function p(e,t){var n,r,o,i,a,u,s,f,c,p,g,y,w,b,m,v,_,E,I=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),A=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),B=new Array(64);e[t>>5]|=128<<24-t%32,e[15+(t+64>>9<<4)]=t;for(var x=0;x<e.length;x+=16){n=A[0],r=A[1],o=A[2],i=A[3],a=A[4],u=A[5],s=A[6],f=A[7];for(var L=0;L<64;L++)B[L]=L<16?e[L+x]:l(l(l((E=B[L-2],d(E,17)^d(E,19)^h(E,10)),B[L-7]),(_=B[L-15],d(_,7)^d(_,18)^h(_,3))),B[L-16]),c=l(l(l(l(f,d(v=a,6)^d(v,11)^d(v,25)),(m=a)&u^~m&s),I[L]),B[L]),p=l(d(b=n,2)^d(b,13)^d(b,22),(g=n)&(y=r)^g&(w=o)^y&w),f=s,s=u,u=a,a=l(i,c),i=o,o=r,r=n,n=l(c,p);A[0]=l(n,A[0]),A[1]=l(r,A[1]),A[2]=l(o,A[2]),A[3]=l(i,A[3]),A[4]=l(a,A[4]),A[5]=l(u,A[5]),A[6]=l(s,A[6]),A[7]=l(f,A[7])}return A}var g=e("./helpers");t.exports=function(e){return g.hash(e,p,32,!0)}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:10}],10:[function(e,t,n){(function(e,n,r,o,i,a,u,s,f){function c(){}(e=t.exports={}).nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",(function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<n.length&&n.shift()())}),!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=c,e.addListener=c,e.once=c,e.off=c,e.removeListener=c,e.removeAllListeners=c,e.emit=c,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:10}],11:[function(e,t,n){(function(e,t,r,o,i,a,u,s,f){n.read=function(e,t,n,r,o){var i,a,u=8*o-r-1,s=(1<<u)-1,f=s>>1,c=-7,l=n?o-1:0,d=n?-1:1,h=e[t+l];for(l+=d,i=h&(1<<-c)-1,h>>=-c,c+=u;0<c;i=256*i+e[t+l],l+=d,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=r;0<c;a=256*a+e[t+l],l+=d,c-=8);if(0===i)i=1-f;else{if(i===s)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,r),i-=f}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,u,s,f=8*i-o-1,c=(1<<f)-1,l=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),2<=(t+=1<=a+l?d/s:d*Math.pow(2,1-l))*s&&(a++,s/=2),c<=a+l?(u=0,a=c):1<=a+l?(u=(t*s-1)*Math.pow(2,o),a+=l):(u=t*Math.pow(2,l-1)*Math.pow(2,o),a=0));8<=o;e[n+h]=255&u,h+=p,u/=256,o-=8);for(a=a<<o|u,f+=o;0<f;e[n+h]=255&a,h+=p,a/=256,f-=8);e[n+h-p]|=128*g}}).call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")},{buffer:3,lYpoI2:10}]},{},[1])(1)}))}}]);