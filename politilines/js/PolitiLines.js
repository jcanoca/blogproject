/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
/*
PFS: 03/05/2015
Recursos:
	ficheros json: http://politilines.periscopic.com/data/
	imagenes: http://politilines.periscopic.com/assets/
	css: http://politilines.periscopic.com/css/
	js: http://politilines.periscopic.com/js/
*/
(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bO(a+"["+f+"]",b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bN(a,c,d,e,"*",g));return l}function bM(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bo(a,b,c){var e=b==="width"?bi:bj,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function _(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(p,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b>1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length>1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&&d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&&c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(i);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(h+=" "+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(i);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var j=(" "+g.className+" ").replace(h," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");g.className=d.trim(j)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(o.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(j,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&o.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&l.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&&(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&C("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&C("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=p.exec(h),k="",j&&(k=j[0],h=h.replace(p,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:"absolute",visibility:"hidden",display:"block"},bi=["Left","Right"],bj=["Top","Bottom"],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f<=0){f=bk(a,b,b),f==="0px"&&bm&&(f=bm(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bl=function(a,c,e){var f,g,h;e=e.replace(be,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bm=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bf.test(d)&&bg.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bk=bl||bm,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&])_=[^&]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement("a"),bJ.href="",bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bz,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,"\r\n")}}):{name:b.name,value:c.replace(br,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bQ(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bs,"").replace(bx,bK[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]==="http:"?80:443))!=(bK[3]||(bK[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(by.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,"$1_="+w);e.url=x+(x===e.url?(by.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join("&").replace(bp,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bR++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bS.test(b.url)||f&&bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bS,l),b.url===j&&(f&&(k=k.replace(bS,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&&"withCredentials"in bV,bV=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&&c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cd(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(cc("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc("show",1),slideUp:cc("hide",1),slideToggle:cc("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!ca&&(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cf.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);


/*!
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta11, Last updated: 2011-07-04*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2011 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue. 
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta11 - (in progress) 
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			originalPadding = elem.css('paddingTop') + ' ' +
								elem.css('paddingRight') + ' ' +
								elem.css('paddingBottom') + ' ' +
								elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
										(parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s)
			{

				var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
						maintainAtBottom = false, maintainAtRight = false;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);
					
					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane 
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight  = settings.stickToRight  && isCloseToRight();

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;
					
					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				pane.css('overflow', 'auto');
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');

				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
						scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();
					
					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}
					
					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if (verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;
				
				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
				
				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}
				
				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);
				
				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}
				
				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (destX) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function isCloseToBottom()
			{
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight()
			{
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition, dY = verticalDragPosition;
						jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}
			
			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);
				
				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);
				
				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);
				
				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}
				
				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}
			
			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash) // hash must be escaped to prevent XSS
						;
					try {
						e = $(hash);
					} catch (err) {
						return;
					}

					if (e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(hash, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks()
			{
				$('a.jspHijack').unbind('click.jsp-hijack').removeClass('jspHijack');
			}

			function hijackInternalLinks()
			{
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jspHijack').bind(
					'click.jsp-hijack',
					function()
					{
						var uriParts = this.href.split('#'), hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (hash.length > 0 && pane.find('#' + hash).length > 0) {
								scrollToElement('#' + hash, true);
								// Need to return false otherwise things mess up... Would be nice to maybe also scroll
								// the window to the top of the scrollpane?
								return false;
							}
						}
					}
				);
			}
			
			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;
  
				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}
						
						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;
						
						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
						
						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
						
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}
			
			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragY(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'easing'	: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth;
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight;
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: function()
					{
						hijackInternalLinks();
					},
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);
			
			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
		
		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		return this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
			}
		);
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		stickToBottom				: false,
		stickToRight				: false,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		contentWidth				: undefined,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 0,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery,this);



/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);


/*
 * Modified with a fix for bitmap fills temporarily adding scrollbars to Firefox.
 * Brett Johnson - http://now.periscopic.com
 */
/*!
 * Raphael 1.5.2 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */
(function () {
    function R() {
        if (R.is(arguments[0], array)) {
            var a = arguments[0],
                cnv = create[apply](R, a.splice(0, 3 + R.is(a[0], nu))),
                res = cnv.set();
            for (var i = 0, ii = a[length]; i < ii; i++) {
                var j = a[i] || {};
                elements[has](j.type) && res[push](cnv[j.type]().attr(j));
            }
            return res;
        }
        return create[apply](R, arguments);
    }
    R.version = "1.5.2";
    var separator = /[, ]+/,
        elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
        formatrg = /\{(\d+)\}/g,
        proto = "prototype",
        has = "hasOwnProperty",
        doc = document,
        win = window,
        oldRaphael = {
            was: Object[proto][has].call(win, "Raphael"),
            is: win.Raphael
        },
        Paper = function () {
            this.customAttributes = {};
        },
        paperproto,
        appendChild = "appendChild",
        apply = "apply",
        concat = "concat",
        supportsTouch = "createTouch" in doc,
        E = "",
        S = " ",
        Str = String,
        split = "split",
        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[split](S),
        touchMap = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        join = "join",
        length = "length",
        lowerCase = Str[proto].toLowerCase,
        math = Math,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        pow = math.pow,
        PI = math.PI,
        nu = "number",
        string = "string",
        array = "array",
        toString = "toString",
        fillString = "fill",
        objectToString = Object[proto][toString],
        paper = {},
        push = "push",
        ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        round = math.round,
        setAttribute = "setAttribute",
        toFloat = parseFloat,
        toInt = parseInt,
        ms = " progid:DXImageTransform.Microsoft",
        upperCase = Str[proto].toUpperCase,
        availableAttrs = {blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", opacity: 1, path: "M0,0", r: 0, rotation: 0, rx: 0, ry: 0, scale: "1 1", src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", translation: "0 0", width: 0, x: 0, y: 0},
        availableAnimAttrs = {along: "along", blur: nu, "clip-rect": "csv", cx: nu, cy: nu, fill: "colour", "fill-opacity": nu, "font-size": nu, height: nu, opacity: nu, path: "path", r: nu, rotation: "csv", rx: nu, ry: nu, scale: "csv", stroke: "colour", "stroke-opacity": nu, "stroke-width": nu, translation: "csv", width: nu, x: nu, y: nu},
        rp = "replace",
        animKeyFrames= /^(from|to|\d+%?)$/,
        commaSpaces = /\s*,\s*/,
        hsrg = {hs: 1, rg: 1},
        p2s = /,?([achlmqrstvxz]),?/gi,
        pathCommand = /([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
        pathValues = /(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,
        radial_gradient = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
        sortByKey = function (a, b) {
            return a.key - b.key;
        };

    R.type = (win.SVGAngle || doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
    if (R.type == "VML") {
        var d = doc.createElement("div"),
            b;
        d.innerHTML = '<v:shape adj="1"/>';
        b = d.firstChild;
        b.style.behavior = "url(#default#VML)";
        if (!(b && typeof b.adj == "object")) {
            return R.type = null;
        }
        d = null;
    }
    R.svg = !(R.vml = R.type == "VML");
    Paper[proto] = R[proto];
    paperproto = Paper[proto];
    R._id = 0;
    R._oid = 0;
    R.fn = {};
    R.is = function (o, type) {
        type = lowerCase.call(type);
        if (type == "finite") {
            return !isnan[has](+o);
        }
        return  (type == "null" && o === null) ||
                (type == typeof o) ||
                (type == "object" && o === Object(o)) ||
                (type == "array" && Array.isArray && Array.isArray(o)) ||
                objectToString.call(o).slice(8, -1).toLowerCase() == type;
    };
    R.angle = function (x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return ((x < 0) * 180 + math.atan(-y / -x) * 180 / PI + 360) % 360;
        } else {
            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
        }
    };
    R.rad = function (deg) {
        return deg % 360 * PI / 180;
    };
    R.deg = function (rad) {
        return rad * 180 / PI % 360;
    };
    R.snapTo = function (values, value, tolerance) {
        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
        if (R.is(values, array)) {
            var i = values.length;
            while (i--) if (abs(values[i] - value) <= tolerance) {
                return values[i];
            }
        } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };
    function createUUID() {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [],
            i = 0;
        for (; i < 32; i++) {
            s[i] = (~~(math.random() * 16))[toString](16);
        }
        s[12] = 4;  // bits 12-15 of the time_hi_and_version field to 0010
        s[16] = ((s[16] & 3) | 8)[toString](16);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        return "r-" + s[join]("");
    }

    R.setWindow = function (newwin) {
        win = newwin;
        doc = win.document;
    };
    // colour utilities
    var toHex = function (color) {
        if (R.vml) {
            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
            var trim = /^\s+|\s+$/g;
            var bod;
            try {
                var docum = new ActiveXObject("htmlfile");
                docum.write("<body>");
                docum.close();
                bod = docum.body;
            } catch(e) {
                bod = createPopup().document.body;
            }
            var range = bod.createTextRange();
            toHex = cacher(function (color) {
                try {
                    bod.style.color = Str(color)[rp](trim, E);
                    var value = range.queryCommandValue("ForeColor");
                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
                    return "#" + ("000000" + value[toString](16)).slice(-6);
                } catch(e) {
                    return "none";
                }
            });
        } else {
            var i = doc.createElement("i");
            i.title = "Rapha\xebl Colour Picker";
            i.style.display = "none";
            doc.body[appendChild](i);
            toHex = cacher(function (color) {
                i.style.color = color;
                return doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            });
        }
        return toHex(color);
    },
    hsbtoString = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")";
    },
    hsltoString = function () {
        return "hsl(" + [this.h, this.s, this.l] + ")";
    },
    rgbtoString = function () {
        return this.hex;
    };
    R.hsb2rgb = function (h, s, b, o) {
        if (R.is(h, "object") && "h" in h && "s" in h && "b" in h) {
            b = h.b;
            s = h.s;
            h = h.h;
            o = h.o;
        }
        return R.hsl2rgb(h, s, b / 2, o);
    };
    R.hsl2rgb = function (h, s, l, o) {
        if (R.is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        var rgb = {},
            channels = ["r", "g", "b"],
            t2, t1, t3, r, g, b;
        if (!s) {
            rgb = {
                r: l,
                g: l,
                b: l
            };
        } else {
            if (l < .5) {
                t2 = l * (1 + s);
            } else {
                t2 = l + s - l * s;
            }
            t1 = 2 * l - t2;
            for (var i = 0; i < 3; i++) {
                t3 = h + 1 / 3 * -(i - 1);
                t3 < 0 && t3++;
                t3 > 1 && t3--;
                if (t3 * 6 < 1) {
                    rgb[channels[i]] = t1 + (t2 - t1) * 6 * t3;
                } else if (t3 * 2 < 1) {
                    rgb[channels[i]] = t2;
                } else if (t3 * 3 < 2) {
                    rgb[channels[i]] = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                } else {
                    rgb[channels[i]] = t1;
                }
            }
        }
        rgb.r *= 255;
        rgb.g *= 255;
        rgb.b *= 255;
        rgb.hex = "#" + (16777216 | rgb.b | (rgb.g << 8) | (rgb.r << 16)).toString(16).slice(1);
        R.is(o, "finite") && (rgb.opacity = o);
        rgb.toString = rgbtoString;
        return rgb;
    };
    R.rgb2hsb = function (red, green, blue) {
        if (green == null && R.is(red, "object") && "r" in red && "g" in red && "b" in red) {
            blue = red.b;
            green = red.g;
            red = red.r;
        }
        if (green == null && R.is(red, string)) {
            var clr = R.getRGB(red);
            red = clr.r;
            green = clr.g;
            blue = clr.b;
        }
        if (red > 1 || green > 1 || blue > 1) {
            red /= 255;
            green /= 255;
            blue /= 255;
        }
        var max = mmax(red, green, blue),
            min = mmin(red, green, blue),
            hue,
            saturation,
            brightness = max;
        if (min == max) {
            return {h: 0, s: 0, b: max, toString: hsbtoString};
        } else {
            var delta = (max - min);
            saturation = delta / max;
            if (red == max) {
                hue = (green - blue) / delta;
            } else if (green == max) {
                hue = 2 + ((blue - red) / delta);
            } else {
                hue = 4 + ((red - green) / delta);
            }
            hue /= 6;
            hue < 0 && hue++;
            hue > 1 && hue--;
        }
        return {h: hue, s: saturation, b: brightness, toString: hsbtoString};
    };
    R.rgb2hsl = function (red, green, blue) {
        if (green == null && R.is(red, "object") && "r" in red && "g" in red && "b" in red) {
            blue = red.b;
            green = red.g;
            red = red.r;
        }
        if (green == null && R.is(red, string)) {
            var clr = R.getRGB(red);
            red = clr.r;
            green = clr.g;
            blue = clr.b;
        }
        if (red > 1 || green > 1 || blue > 1) {
            red /= 255;
            green /= 255;
            blue /= 255;
        }
        var max = mmax(red, green, blue),
            min = mmin(red, green, blue),
            h,
            s,
            l = (max + min) / 2,
            hsl;
        if (min == max) {
            hsl =  {h: 0, s: 0, l: l};
        } else {
            var delta = max - min;
            s = l < .5 ? delta / (max + min) : delta / (2 - max - min);
            if (red == max) {
                h = (green - blue) / delta;
            } else if (green == max) {
                h = 2 + (blue - red) / delta;
            } else {
                h = 4 + (red - green) / delta;
            }
            h /= 6;
            h < 0 && h++;
            h > 1 && h--;
            hsl = {h: h, s: s, l: l};
        }
        hsl.toString = hsltoString;
        return hsl;
    };
    R._path2string = function () {
        return this.join(",")[rp](p2s, "$1");
    };
    function cacher(f, scope, postprocessor) {
        function newf() {
            var arg = Array[proto].slice.call(arguments, 0),
                args = arg[join]("\u25ba"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache[has](args)) {
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count[length] >= 1e3 && delete cache[count.shift()];
            count[push](args);
            cache[args] = f[apply](scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }
 
    R.getRGB = cacher(function (colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {r: -1, g: -1, b: -1, hex: "none", error: 1};
        }
        if (colour == "none") {
            return {r: -1, g: -1, b: -1, hex: "none"};
        }
        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
        var res,
            red,
            green,
            blue,
            opacity,
            t,
            values,
            rgb = colour.match(colourRegExp);
        if (rgb) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return R.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6][split](commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return R.hsl2rgb(red, green, blue, opacity);
            }
            rgb = {r: red, g: green, b: blue};
            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
            R.is(opacity, "finite") && (rgb.opacity = opacity);
            return rgb;
        }
        return {r: -1, g: -1, b: -1, hex: "none", error: 1};
    }, R);
    R.getColor = function (value) {
        var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
            rgb = this.hsb2rgb(start.h, start.s, start.b);
        start.h += .075;
        if (start.h > 1) {
            start.h = 0;
            start.s -= .2;
            start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
        }
        return rgb.hex;
    };
    R.getColor.reset = function () {
        delete this.start;
    };
    // path utilities
    R.parsePathString = cacher(function (pathString) {
        if (!pathString) {
            return null;
        }
        var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0},
            data = [];
        if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
            data = pathClone(pathString);
        }
        if (!data[length]) {
            Str(pathString)[rp](pathCommand, function (a, b, c) {
                var params = [],
                    name = lowerCase.call(b);
                c[rp](pathValues, function (a, b) {
                    b && params[push](+b);
                });
                if (name == "m" && params[length] > 2) {
                    data[push]([b][concat](params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                while (params[length] >= paramCounts[name]) {
                    data[push]([b][concat](params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) {
                        break;
                    }
                }
            });
        }
        data[toString] = R._path2string;
        return data;
    });
    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            x = pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y = pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t * t * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t * t * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t * t * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t * t * (p2y - 2 * c2y + c1y),
            ax = (1 - t) * p1x + t * c1x,
            ay = (1 - t) * p1y + t * c1y,
            cx = (1 - t) * c2x + t * p2x,
            cy = (1 - t) * c2y + t * p2y,
            alpha = (90 - math.atan((mx - nx) / (my - ny)) * 180 / PI);
        (mx > nx || my < ny) && (alpha += 180);
        return {x: x, y: y, m: {x: mx, y: my}, n: {x: nx, y: ny}, start: {x: ax, y: ay}, end: {x: cx, y: cy}, alpha: alpha};
    };
    var pathDimensions = cacher(function (path) {
        if (!path) {
            return {x: 0, y: 0, width: 0, height: 0};
        }
        path = path2curve(path);
        var x = 0, 
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path[length]; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X[push](x);
                Y[push](y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X[concat](dim.min.x, dim.max.x);
                Y = Y[concat](dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin[apply](0, X),
            ymin = mmin[apply](0, Y);
        return {
            x: xmin,
            y: ymin,
            width: mmax[apply](0, X) - xmin,
            height: mmax[apply](0, Y) - ymin
        };
    }),
        pathClone = function (pathArray) {
            var res = [];
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
                pathArray = R.parsePathString(pathArray);
            }
            for (var i = 0, ii = pathArray[length]; i < ii; i++) {
                res[i] = [];
                for (var j = 0, jj = pathArray[i][length]; j < jj; j++) {
                    res[i][j] = pathArray[i][j];
                }
            }
            res[toString] = R._path2string;
            return res;
        },
        pathToRelative = cacher(function (pathArray) {
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
                pathArray = R.parsePathString(pathArray);
            }
            var res = [],
                x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0;
            if (pathArray[0][0] == "M") {
                x = pathArray[0][1];
                y = pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[push](["M", x, y]);
            }
            for (var i = start, ii = pathArray[length]; i < ii; i++) {
                var r = res[i] = [],
                    pa = pathArray[i];
                if (pa[0] != lowerCase.call(pa[0])) {
                    r[0] = lowerCase.call(pa[0]);
                    switch (r[0]) {
                        case "a":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] - x).toFixed(3);
                            r[7] = +(pa[7] - y).toFixed(3);
                            break;
                        case "v":
                            r[1] = +(pa[1] - y).toFixed(3);
                            break;
                        case "m":
                            mx = pa[1];
                            my = pa[2];
                        default:
                            for (var j = 1, jj = pa[length]; j < jj; j++) {
                                r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                            }
                    }
                } else {
                    r = res[i] = [];
                    if (pa[0] == "m") {
                        mx = pa[1] + x;
                        my = pa[2] + y;
                    }
                    for (var k = 0, kk = pa[length]; k < kk; k++) {
                        res[i][k] = pa[k];
                    }
                }
                var len = res[i][length];
                switch (res[i][0]) {
                    case "z":
                        x = mx;
                        y = my;
                        break;
                    case "h":
                        x += +res[i][len - 1];
                        break;
                    case "v":
                        y += +res[i][len - 1];
                        break;
                    default:
                        x += +res[i][len - 2];
                        y += +res[i][len - 1];
                }
            }
            res[toString] = R._path2string;
            return res;
        }, 0, pathClone),
        pathToAbsolute = cacher(function (pathArray) {
            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
                pathArray = R.parsePathString(pathArray);
            }
            var res = [],
                x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = ["M", x, y];
            }
            for (var i = start, ii = pathArray[length]; i < ii; i++) {
                var r = res[i] = [],
                    pa = pathArray[i];
                if (pa[0] != upperCase.call(pa[0])) {
                    r[0] = upperCase.call(pa[0]);
                    switch (r[0]) {
                        case "A":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +(pa[6] + x);
                            r[7] = +(pa[7] + y);
                            break;
                        case "V":
                            r[1] = +pa[1] + y;
                            break;
                        case "H":
                            r[1] = +pa[1] + x;
                            break;
                        case "M":
                            mx = +pa[1] + x;
                            my = +pa[2] + y;
                        default:
                            for (var j = 1, jj = pa[length]; j < jj; j++) {
                                r[j] = +pa[j] + ((j % 2) ? x : y);
                            }
                    }
                } else {
                    for (var k = 0, kk = pa[length]; k < kk; k++) {
                        res[i][k] = pa[k];
                    }
                }
                switch (r[0]) {
                    case "Z":
                        x = mx;
                        y = my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = res[i][res[i][length] - 2];
                        my = res[i][res[i][length] - 1];
                    default:
                        x = res[i][res[i][length] - 2];
                        y = res[i][res[i][length] - 1];
                }
            }
            res[toString] = R._path2string;
            return res;
        }, null, pathClone),
        l2c = function (x1, y1, x2, y2) {
            return [x1, y1, x2, y2, x2, y2];
        },
        q2c = function (x1, y1, ax, ay, x2, y2) {
            var _13 = 1 / 3,
                _23 = 2 / 3;
            return [
                    _13 * x1 + _23 * ax,
                    _13 * y1 + _23 * ay,
                    _13 * x2 + _23 * ax,
                    _13 * y2 + _23 * ay,
                    x2,
                    y2
                ];
        },
        a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
            // for more information of where this math came from visit:
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            var _120 = PI * 120 / 180,
                rad = PI / 180 * (+angle || 0),
                res = [],
                xy,
                rotate = cacher(function (x, y, rad) {
                    var X = x * math.cos(rad) - y * math.sin(rad),
                        Y = x * math.sin(rad) + y * math.cos(rad);
                    return {x: X, y: Y};
                });
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                var cos = math.cos(PI / 180 * angle),
                    sin = math.sin(PI / 180 * angle),
                    x = (x1 - x2) / 2,
                    y = (y1 - y2) / 2;
                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
                if (h > 1) {
                    h = math.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                var rx2 = rx * rx,
                    ry2 = ry * ry,
                    k = (large_arc_flag == sweep_flag ? -1 : 1) *
                        math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                    cx = k * rx * y / ry + (x1 + x2) / 2,
                    cy = k * -ry * x / rx + (y1 + y2) / 2,
                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));

                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                f1 < 0 && (f1 = PI * 2 + f1);
                f2 < 0 && (f2 = PI * 2 + f2);
                if (sweep_flag && f1 > f2) {
                    f1 = f1 - PI * 2;
                }
                if (!sweep_flag && f2 > f1) {
                    f2 = f2 - PI * 2;
                }
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            var df = f2 - f1;
            if (abs(df) > _120) {
                var f2old = f2,
                    x2old = x2,
                    y2old = y2;
                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math.cos(f2);
                y2 = cy + ry * math.sin(f2);
                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
            }
            df = f2 - f1;
            var c1 = math.cos(f1),
                s1 = math.sin(f1),
                c2 = math.cos(f2),
                s2 = math.sin(f2),
                t = math.tan(df / 4),
                hx = 4 / 3 * rx * t,
                hy = 4 / 3 * ry * t,
                m1 = [x1, y1],
                m2 = [x1 + hx * s1, y1 - hy * c1],
                m3 = [x2 + hx * s2, y2 - hy * c2],
                m4 = [x2, y2];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) {
                return [m2, m3, m4][concat](res);
            } else {
                res = [m2, m3, m4][concat](res)[join]()[split](",");
                var newres = [];
                for (var i = 0, ii = res[length]; i < ii; i++) {
                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                }
                return newres;
            }
        },
        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
            var t1 = 1 - t;
            return {
                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
            };
        },
        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
                c = p1x - c1x,
                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
                y = [p1y, p2y],
                x = [p1x, p2x],
                dot;
            abs(t1) > "1e12" && (t1 = .5);
            abs(t2) > "1e12" && (t2 = .5);
            if (t1 > 0 && t1 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                x[push](dot.x);
                y[push](dot.y);
            }
            if (t2 > 0 && t2 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                x[push](dot.x);
                y[push](dot.y);
            }
            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
            c = p1y - c1y;
            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
            abs(t1) > "1e12" && (t1 = .5);
            abs(t2) > "1e12" && (t2 = .5);
            if (t1 > 0 && t1 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
                x[push](dot.x);
                y[push](dot.y);
            }
            if (t2 > 0 && t2 < 1) {
                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
                x[push](dot.x);
                y[push](dot.y);
            }
            return {
                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
                max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
            };
        }),
        path2curve = cacher(function (path, path2) {
            var p = pathToAbsolute(path),
                p2 = path2 && pathToAbsolute(path2),
                attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
                processPath = function (path, d) {
                    var nx, ny;
                    if (!path) {
                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                    }
                    !(path[0] in {T:1, Q:1}) && (d.qx = d.qy = null);
                    switch (path[0]) {
                        case "M":
                            d.X = path[1];
                            d.Y = path[2];
                            break;
                        case "A":
                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
                            break;
                        case "S":
                            nx = d.x + (d.x - (d.bx || d.x));
                            ny = d.y + (d.y - (d.by || d.y));
                            path = ["C", nx, ny][concat](path.slice(1));
                            break;
                        case "T":
                            d.qx = d.x + (d.x - (d.qx || d.x));
                            d.qy = d.y + (d.y - (d.qy || d.y));
                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                            break;
                        case "Q":
                            d.qx = path[1];
                            d.qy = path[2];
                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                            break;
                        case "L":
                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
                            break;
                        case "H":
                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
                            break;
                        case "V":
                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
                            break;
                        case "Z":
                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
                            break;
                    }
                    return path;
                },
                fixArc = function (pp, i) {
                    if (pp[i][length] > 7) {
                        pp[i].shift();
                        var pi = pp[i];
                        while (pi[length]) {
                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
                        }
                        pp.splice(i, 1);
                        ii = mmax(p[length], p2 && p2[length] || 0);
                    }
                },
                fixM = function (path1, path2, a1, a2, i) {
                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                        path2.splice(i, 0, ["M", a2.x, a2.y]);
                        a1.bx = 0;
                        a1.by = 0;
                        a1.x = path1[i][1];
                        a1.y = path1[i][2];
                        ii = mmax(p[length], p2 && p2[length] || 0);
                    }
                };
            for (var i = 0, ii = mmax(p[length], p2 && p2[length] || 0); i < ii; i++) {
                p[i] = processPath(p[i], attrs);
                fixArc(p, i);
                p2 && (p2[i] = processPath(p2[i], attrs2));
                p2 && fixArc(p2, i);
                fixM(p, p2, attrs, attrs2, i);
                fixM(p2, p, attrs2, attrs, i);
                var seg = p[i],
                    seg2 = p2 && p2[i],
                    seglen = seg[length],
                    seg2len = p2 && seg2[length];
                attrs.x = seg[seglen - 2];
                attrs.y = seg[seglen - 1];
                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
                attrs2.x = p2 && seg2[seg2len - 2];
                attrs2.y = p2 && seg2[seg2len - 1];
            }
            return p2 ? [p, p2] : p;
        }, null, pathClone),
        parseDots = cacher(function (gradient) {
            var dots = [];
            for (var i = 0, ii = gradient[length]; i < ii; i++) {
                var dot = {},
                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
                dot.color = R.getRGB(par[1]);
                if (dot.color.error) {
                    return null;
                }
                dot.color = dot.color.hex;
                par[2] && (dot.offset = par[2] + "%");
                dots[push](dot);
            }
            for (i = 1, ii = dots[length] - 1; i < ii; i++) {
                if (!dots[i].offset) {
                    var start = toFloat(dots[i - 1].offset || 0),
                        end = 0;
                    for (var j = i + 1; j < ii; j++) {
                        if (dots[j].offset) {
                            end = dots[j].offset;
                            break;
                        }
                    }
                    if (!end) {
                        end = 100;
                        j = ii;
                    }
                    end = toFloat(end);
                    var d = (end - start) / (j - i + 1);
                    for (; i < j; i++) {
                        start += d;
                        dots[i].offset = start + "%";
                    }
                }
            }
            return dots;
        }),
        getContainer = function (x, y, w, h) {
            var container;
            if (R.is(x, string) || R.is(x, "object")) {
                container = R.is(x, string) ? doc.getElementById(x) : x;
                if (container.tagName) {
                    if (y == null) {
                        return {
                            container: container,
                            width: container.style.pixelWidth || container.offsetWidth,
                            height: container.style.pixelHeight || container.offsetHeight
                        };
                    } else {
                        return {container: container, width: y, height: w};
                    }
                }
            } else {
                return {container: 1, x: x, y: y, width: w, height: h};
            }
        },
        plugins = function (con, add) {
            var that = this;
            for (var prop in add) {
                if (add[has](prop) && !(prop in con)) {
                    switch (typeof add[prop]) {
                        case "function":
                            (function (f) {
                                con[prop] = con === that ? f : function () { return f[apply](that, arguments); };
                            })(add[prop]);
                        break;
                        case "object":
                            con[prop] = con[prop] || {};
                            plugins.call(this, con[prop], add[prop]);
                        break;
                        default:
                            con[prop] = add[prop];
                        break;
                    }
                }
            }
        },
        tear = function (el, paper) {
            el == paper.top && (paper.top = el.prev);
            el == paper.bottom && (paper.bottom = el.next);
            el.next && (el.next.prev = el.prev);
            el.prev && (el.prev.next = el.next);
        },
        tofront = function (el, paper) {
            if (paper.top === el) {
                return;
            }
            tear(el, paper);
            el.next = null;
            el.prev = paper.top;
            paper.top.next = el;
            paper.top = el;
        },
        toback = function (el, paper) {
            if (paper.bottom === el) {
                return;
            }
            tear(el, paper);
            el.next = paper.bottom;
            el.prev = null;
            paper.bottom.prev = el;
            paper.bottom = el;
        },
        insertafter = function (el, el2, paper) {
            tear(el, paper);
            el2 == paper.top && (paper.top = el);
            el2.next && (el2.next.prev = el);
            el.next = el2.next;
            el.prev = el2;
            el2.next = el;
        },
        insertbefore = function (el, el2, paper) {
            tear(el, paper);
            el2 == paper.bottom && (paper.bottom = el);
            el2.prev && (el2.prev.next = el);
            el.prev = el2.prev;
            el2.prev = el;
            el.next = el2;
        },
        removed = function (methodname) {
            return function () {
                throw new Error("Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object");
            };
        };
    R.pathToRelative = pathToRelative;
    // SVG
    if (R.svg) {
        paperproto.svgns = "http://www.w3.org/2000/svg";
        paperproto.xlink = "http://www.w3.org/1999/xlink";
        round = function (num) {
            return +num + (~~num === num) * .5;
        };
        var $ = function (el, attr) {
            if (attr) {
                for (var key in attr) {
                    if (attr[has](key)) {
                        el[setAttribute](key, Str(attr[key]));
                    }
                }
            } else {
                el = doc.createElementNS(paperproto.svgns, el);
                el.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
                return el;
            }
        };
        R[toString] = function () {
            return  "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
        };
        var thePath = function (pathString, SVG) {
            var el = $("path");
            SVG.canvas && SVG.canvas[appendChild](el);
            var p = new Element(el, SVG);
            p.type = "path";
            setFillAndStroke(p, {fill: "none", stroke: "#000", path: pathString});
            return p;
        };
        var addGradientFill = function (o, gradient, SVG) {
            var type = "linear",
                fx = .5, fy = .5,
                s = o.style;
            gradient = Str(gradient)[rp](radial_gradient, function (all, _fx, _fy) {
                type = "radial";
                if (_fx && _fy) {
                    fx = toFloat(_fx);
                    fy = toFloat(_fy);
                    var dir = ((fy > .5) * 2 - 1);
                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&
                        (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) &&
                        fy != .5 &&
                        (fy = fy.toFixed(5) - 1e-5 * dir);
                }
                return E;
            });
            gradient = gradient[split](/\s*\-\s*/);
            if (type == "linear") {
                var angle = gradient.shift();
                angle = -toFloat(angle);
                if (isNaN(angle)) {
                    return null;
                }
                var vector = [0, 0, math.cos(angle * PI / 180), math.sin(angle * PI / 180)],
                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                vector[2] *= max;
                vector[3] *= max;
                if (vector[2] < 0) {
                    vector[0] = -vector[2];
                    vector[2] = 0;
                }
                if (vector[3] < 0) {
                    vector[1] = -vector[3];
                    vector[3] = 0;
                }
            }
            var dots = parseDots(gradient);
            if (!dots) {
                return null;
            }
            var id = o.getAttribute(fillString);
            id = id.match(/^url\(#(.*)\)$/);
            id && SVG.defs.removeChild(doc.getElementById(id[1]));

            var el = $(type + "Gradient");
            el.id = createUUID();
            $(el, type == "radial" ? {fx: fx, fy: fy} : {x1: vector[0], y1: vector[1], x2: vector[2], y2: vector[3]});
            SVG.defs[appendChild](el);
            for (var i = 0, ii = dots[length]; i < ii; i++) {
                var stop = $("stop");
                $(stop, {
                    offset: dots[i].offset ? dots[i].offset : !i ? "0%" : "100%",
                    "stop-color": dots[i].color || "#fff"
                });
                el[appendChild](stop);
            }
            $(o, {
                fill: "url(#" + el.id + ")",
                opacity: 1,
                "fill-opacity": 1
            });
            s.fill = E;
            s.opacity = 1;
            s.fillOpacity = 1;
            return 1;
        };
        var updatePosition = function (o) {
            var bbox = o.getBBox();
            $(o.pattern, {patternTransform: R.format("translate({0},{1})", bbox.x, bbox.y)});
        };
        var setFillAndStroke = function (o, params) {
            var dasharray = {
                    "": [0],
                    "none": [0],
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                },
                node = o.node,
                attrs = o.attrs,
                rot = o.rotate(),
                addDashes = function (o, value) {
                    value = dasharray[lowerCase.call(value)];
                    if (value) {
                        var width = o.attrs["stroke-width"] || "1",
                            butt = {round: width, square: width, butt: 0}[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
                            dashes = [];
                        var i = value[length];
                        while (i--) {
                            dashes[i] = value[i] * width + ((i % 2) ? 1 : -1) * butt;
                        }
                        $(node, {"stroke-dasharray": dashes[join](",")});
                    }
                };
            params[has]("rotation") && (rot = params.rotation);
            var rotxy = Str(rot)[split](separator);
            if (!(rotxy.length - 1)) {
                rotxy = null;
            } else {
                rotxy[1] = +rotxy[1];
                rotxy[2] = +rotxy[2];
            }
            toFloat(rot) && o.rotate(0, true);
            for (var att in params) {
                if (params[has](att)) {
                    if (!availableAttrs[has](att)) {
                        continue;
                    }
                    var value = params[att];
                    attrs[att] = value;
                    switch (att) {
                        case "blur":
                            o.blur(value);
                            break;
                        case "rotation":
                            o.rotate(value, true);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var pn = node.parentNode;
                            if (lowerCase.call(pn.tagName) != "a") {
                                var hl = $("a");
                                pn.insertBefore(hl, node);
                                hl[appendChild](node);
                                pn = hl;
                            }
                            if (att == "target" && value == "blank") {
                                pn.setAttributeNS(o.paper.xlink, "show", "new");
                            } else {
                                pn.setAttributeNS(o.paper.xlink, att, value);
                            }
                            break;
                        case "cursor":
                            node.style.cursor = value;
                            break;
                        case "clip-rect":
                            var rect = Str(value)[split](separator);
                            if (rect[length] == 4) {
                                o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                                var el = $("clipPath"),
                                    rc = $("rect");
                                el.id = createUUID();
                                $(rc, {
                                    x: rect[0],
                                    y: rect[1],
                                    width: rect[2],
                                    height: rect[3]
                                });
                                el[appendChild](rc);
                                o.paper.defs[appendChild](el);
                                $(node, {"clip-path": "url(#" + el.id + ")"});
                                o.clip = rc;
                            }
                            if (!value) {
                                var clip = doc.getElementById(node.getAttribute("clip-path")[rp](/(^url\(#|\)$)/g, E));
                                clip && clip.parentNode.removeChild(clip);
                                $(node, {"clip-path": E});
                                delete o.clip;
                            }
                        break;
                        case "path":
                            if (o.type == "path") {
                                $(node, {d: value ? attrs.path = pathToAbsolute(value) : "M0,0"});
                            }
                            break;
                        case "width":
                            node[setAttribute](att, value);
                            if (attrs.fx) {
                                att = "x";
                                value = attrs.x;
                            } else {
                                break;
                            }
                        case "x":
                            if (attrs.fx) {
                                value = -attrs.x - (attrs.width || 0);
                            }
                        case "rx":
                            if (att == "rx" && o.type == "rect") {
                                break;
                            }
                        case "cx":
                            rotxy && (att == "x" || att == "cx") && (rotxy[1] += value - attrs[att]);
                            node[setAttribute](att, value);
                            o.pattern && updatePosition(o);
                            break;
                        case "height":
                            node[setAttribute](att, value);
                            if (attrs.fy) {
                                att = "y";
                                value = attrs.y;
                            } else {
                                break;
                            }
                        case "y":
                            if (attrs.fy) {
                                value = -attrs.y - (attrs.height || 0);
                            }
                        case "ry":
                            if (att == "ry" && o.type == "rect") {
                                break;
                            }
                        case "cy":
                            rotxy && (att == "y" || att == "cy") && (rotxy[2] += value - attrs[att]);
                            node[setAttribute](att, value);
                            o.pattern && updatePosition(o);
                            break;
                        case "r":
                            if (o.type == "rect") {
                                $(node, {rx: value, ry: value});
                            } else {
                                node[setAttribute](att, value);
                            }
                            break;
                        case "src":
                            if (o.type == "image") {
                                node.setAttributeNS(o.paper.xlink, "href", value);
                            }
                            break;
                        case "stroke-width":
                            node.style.strokeWidth = value;
                            // Need following line for Firefox
                            node[setAttribute](att, value);
                            if (attrs["stroke-dasharray"]) {
                                addDashes(o, attrs["stroke-dasharray"]);
                            }
                            break;
                        case "stroke-dasharray":
                            addDashes(o, value);
                            break;
                        case "translation":
                            var xy = Str(value)[split](separator);
                            xy[0] = +xy[0] || 0;
                            xy[1] = +xy[1] || 0;
                            if (rotxy) {
                                rotxy[1] += xy[0];
                                rotxy[2] += xy[1];
                            }
                            translate.call(o, xy[0], xy[1]);
                            break;
                        case "scale":
                            xy = Str(value)[split](separator);
                            o.scale(+xy[0] || 1, +xy[1] || +xy[0] || 1, isNaN(toFloat(xy[2])) ? null : +xy[2], isNaN(toFloat(xy[3])) ? null : +xy[3]);
                            break;
                        case fillString:
                            var isURL = Str(value).match(ISURL);
                            if (isURL) {
                                el = $("pattern");
                                var ig = $("image");
                                el.id = createUUID();
                                $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                                $(ig, {x: 0, y: 0});
                                ig.setAttributeNS(o.paper.xlink, "href", isURL[1]);
                                el[appendChild](ig); 
                                var img = doc.createElement("img");
                                var spn = doc.createElement("span");
                                spn.style.cssText = "position:absolute;left:-9999em;top-9999em;height:0px;width:0px;overflow:hidden";
                                spn.appendChild(img);
                                img.onload = function () {
                                    $(el, {width: this.offsetWidth, height: this.offsetHeight});
                                    $(ig, {width: this.offsetWidth, height: this.offsetHeight});
                                    doc.body.removeChild(spn);
                                    o.paper.safari();
                                };
                                doc.body[appendChild](spn);
                                img.src = isURL[1];
                                o.paper.defs[appendChild](el);
                                node.style.fill = "url(#" + el.id + ")";
                                $(node, {fill: "url(#" + el.id + ")"});
                                o.pattern = el;
                                o.pattern && updatePosition(o);
                                break;
                            }
                            var clr = R.getRGB(value);
                            if (!clr.error) {
                                delete params.gradient;
                                delete attrs.gradient;
                                !R.is(attrs.opacity, "undefined") &&
                                    R.is(params.opacity, "undefined") &&
                                    $(node, {opacity: attrs.opacity});
                                !R.is(attrs["fill-opacity"], "undefined") &&
                                    R.is(params["fill-opacity"], "undefined") &&
                                    $(node, {"fill-opacity": attrs["fill-opacity"]});
                            } else if ((({circle: 1, ellipse: 1})[has](o.type) || Str(value).charAt() != "r") && addGradientFill(node, value, o.paper)) {
                                attrs.gradient = value;
                                attrs.fill = "none";
                                break;
                            }
                            clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
                        case "stroke":
                            clr = R.getRGB(value);
                            node[setAttribute](att, clr.hex);
                            att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
                            break;
                        case "gradient":
                            (({circle: 1, ellipse: 1})[has](o.type) || Str(value).charAt() != "r") && addGradientFill(node, value, o.paper);
                            break;
                        case "opacity":
                            if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                                $(node, {"stroke-opacity": value > 1 ? value / 100 : value});
                            }
                            // fall
                        case "fill-opacity":
                            if (attrs.gradient) {
                                var gradient = doc.getElementById(node.getAttribute(fillString)[rp](/^url\(#|\)$/g, E));
                                if (gradient) {
                                    var stops = gradient.getElementsByTagName("stop");
                                    stops[stops[length] - 1][setAttribute]("stop-opacity", value);
                                }
                                break;
                            }
                        default:
                            att == "font-size" && (value = toInt(value, 10) + "px");
                            var cssrule = att[rp](/(\-.)/g, function (w) {
                                return upperCase.call(w.substring(1));
                            });
                            node.style[cssrule] = value;
                            // Need following line for Firefox
                            node[setAttribute](att, value);
                            break;
                    }
                }
            }
            
            tuneText(o, params);
            if (rotxy) {
                o.rotate(rotxy.join(S));
            } else {
                toFloat(rot) && o.rotate(rot, true);
            }
        };
        var leading = 1.2,
        tuneText = function (el, params) {
            if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
                return;
            }
            var a = el.attrs,
                node = el.node,
                fontSize = node.firstChild ? toInt(doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;
 
            if (params[has]("text")) {
                a.text = params.text;
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
                var texts = Str(params.text)[split]("\n");
                for (var i = 0, ii = texts[length]; i < ii; i++) if (texts[i]) {
                    var tspan = $("tspan");
                    i && $(tspan, {dy: fontSize * leading, x: a.x});
                    tspan[appendChild](doc.createTextNode(texts[i]));
                    node[appendChild](tspan);
                }
            } else {
                texts = node.getElementsByTagName("tspan");
                for (i = 0, ii = texts[length]; i < ii; i++) {
                    i && $(texts[i], {dy: fontSize * leading, x: a.x});
                }
            }
            $(node, {y: a.y});
            var bb = el.getBBox(),
                dif = a.y - (bb.y + bb.height / 2);
            dif && R.is(dif, "finite") && $(node, {y: a.y + dif});
        },
        Element = function (node, svg) {
            var X = 0,
                Y = 0;
            this[0] = node;
            this.id = R._oid++;
            this.node = node;
            node.raphael = this;
            this.paper = svg;
            this.attrs = this.attrs || {};
            this.transformations = []; // rotate, translate, scale
            this._ = {
                tx: 0,
                ty: 0,
                rt: {deg: 0, cx: 0, cy: 0},
                sx: 1,
                sy: 1
            };
            !svg.bottom && (svg.bottom = this);
            this.prev = svg.top;
            svg.top && (svg.top.next = this);
            svg.top = this;
            this.next = null;
        };
        var elproto = Element[proto];
        Element[proto].rotate = function (deg, cx, cy) {
            if (this.removed) {
                return this;
            }
            if (deg == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][join](S);
                }
                return this._.rt.deg;
            }
            var bbox = this.getBBox();
            deg = Str(deg)[split](separator);
            if (deg[length] - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            if (cx != null && cx !== false) {
                this._.rt.deg = deg;
            } else {
                this._.rt.deg += deg;
            }
            (cy == null) && (cx = null);
            this._.rt.cx = cx;
            this._.rt.cy = cy;
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            if (this._.rt.deg) {
                this.transformations[0] = R.format("rotate({0} {1} {2})", this._.rt.deg, cx, cy);
                this.clip && $(this.clip, {transform: R.format("rotate({0} {1} {2})", -this._.rt.deg, cx, cy)});
            } else {
                this.transformations[0] = E;
                this.clip && $(this.clip, {transform: E});
            }
            $(this.node, {transform: this.transformations[join](S)});
            return this;
        };
        Element[proto].hide = function () {
            !this.removed && (this.node.style.display = "none");
            return this;
        };
        Element[proto].show = function () {
            !this.removed && (this.node.style.display = "");
            return this;
        };
        Element[proto].remove = function () {
            if (this.removed) {
                return;
            }
            tear(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            for (var i in this) {
                delete this[i];
            }
            this.removed = true;
        };
        Element[proto].getBBox = function () {
            if (this.removed) {
                return this;
            }
            if (this.type == "path") {
                return pathDimensions(this.attrs.path);
            }
            if (this.node.style.display == "none") {
                this.show();
                var hide = true;
            }
            var bbox = {};
            try {
                bbox = this.node.getBBox();
            } catch(e) {
                // Firefox 3.0.x plays badly here
            } finally {
                bbox = bbox || {};
            }
            if (this.type == "text") {
                bbox = {x: bbox.x, y: Infinity, width: 0, height: 0};
                for (var i = 0, ii = this.node.getNumberOfChars(); i < ii; i++) {
                    var bb = this.node.getExtentOfChar(i);
                    (bb.y < bbox.y) && (bbox.y = bb.y);
                    (bb.y + bb.height - bbox.y > bbox.height) && (bbox.height = bb.y + bb.height - bbox.y);
                    (bb.x + bb.width - bbox.x > bbox.width) && (bbox.width = bb.x + bb.width - bbox.x);
                }
            }
            hide && this.hide();
            return bbox;
        };
        Element[proto].attr = function (name, value) {
            if (this.removed) {
                return this;
            }
            if (name == null) {
                var res = {};
                for (var i in this.attrs) if (this.attrs[has](i)) {
                    res[i] = this.attrs[i];
                }
                this._.rt.deg && (res.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (res.scale = this.scale());
                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                return res;
            }
            if (value == null && R.is(name, string)) {
                if (name == "translation") {
                    return translate.call(this);
                }
                if (name == "rotation") {
                    return this.rotate();
                }
                if (name == "scale") {
                    return this.scale();
                }
                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient;
                }
                return this.attrs[name];
            }
            if (value == null && R.is(name, array)) {
                var values = {};
                for (var j = 0, jj = name.length; j < jj; j++) {
                    values[name[j]] = this.attr(name[j]);
                }
                return values;
            }
            if (value != null) {
                var params = {};
                params[name] = value;
            } else if (name != null && R.is(name, "object")) {
                params = name;
            }
            for (var key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                var par = this.paper.customAttributes[key].apply(this, [][concat](params[key]));
                this.attrs[key] = params[key];
                for (var subkey in par) if (par[has](subkey)) {
                    params[subkey] = par[subkey];
                }
            }
            setFillAndStroke(this, params);
            return this;
        };
        Element[proto].toFront = function () {
            if (this.removed) {
                return this;
            }
            this.node.parentNode[appendChild](this.node);
            var svg = this.paper;
            svg.top != this && tofront(this, svg);
            return this;
        };
        Element[proto].toBack = function () {
            if (this.removed) {
                return this;
            }
            if (this.node.parentNode.firstChild != this.node) {
                this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
                toback(this, this.paper);
                var svg = this.paper;
            }
            return this;
        };
        Element[proto].insertAfter = function (element) {
            if (this.removed) {
                return this;
            }
            var node = element.node || element[element.length - 1].node;
            if (node.nextSibling) {
                node.parentNode.insertBefore(this.node, node.nextSibling);
            } else {
                node.parentNode[appendChild](this.node);
            }
            insertafter(this, element, this.paper);
            return this;
        };
        Element[proto].insertBefore = function (element) {
            if (this.removed) {
                return this;
            }
            var node = element.node || element[0].node;
            node.parentNode.insertBefore(this.node, node);
            insertbefore(this, element, this.paper);
            return this;
        };
        Element[proto].blur = function (size) {
            // Experimental. No Safari support. Use it on your own risk.
            var t = this;
            if (+size !== 0) {
                var fltr = $("filter"),
                    blur = $("feGaussianBlur");
                t.attrs.blur = size;
                fltr.id = createUUID();
                $(blur, {stdDeviation: +size || 1.5});
                fltr.appendChild(blur);
                t.paper.defs.appendChild(fltr);
                t._blur = fltr;
                $(t.node, {filter: "url(#" + fltr.id + ")"});
            } else {
                if (t._blur) {
                    t._blur.parentNode.removeChild(t._blur);
                    delete t._blur;
                    delete t.attrs.blur;
                }
                t.node.removeAttribute("filter");
            }
        };
        var theCircle = function (svg, x, y, r) {
            var el = $("circle");
            svg.canvas && svg.canvas[appendChild](el);
            var res = new Element(el, svg);
            res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};
            res.type = "circle";
            $(el, res.attrs);
            return res;
        },
        theRect = function (svg, x, y, w, h, r) {
            var el = $("rect");
            svg.canvas && svg.canvas[appendChild](el);
            var res = new Element(el, svg);
            res.attrs = {x: x, y: y, width: w, height: h, r: r || 0, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000"};
            res.type = "rect";
            $(el, res.attrs);
            return res;
        },
        theEllipse = function (svg, x, y, rx, ry) {
            var el = $("ellipse");
            svg.canvas && svg.canvas[appendChild](el);
            var res = new Element(el, svg);
            res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};
            res.type = "ellipse";
            $(el, res.attrs);
            return res;
        },
        theImage = function (svg, src, x, y, w, h) {
            var el = $("image");
            $(el, {x: x, y: y, width: w, height: h, preserveAspectRatio: "none"});
            el.setAttributeNS(svg.xlink, "href", src);
            svg.canvas && svg.canvas[appendChild](el);
            var res = new Element(el, svg);
            res.attrs = {x: x, y: y, width: w, height: h, src: src};
            res.type = "image";
            return res;
        },
        theText = function (svg, x, y, text) {
            var el = $("text");
            $(el, {x: x, y: y, "text-anchor": "middle"});
            svg.canvas && svg.canvas[appendChild](el);
            var res = new Element(el, svg);
            res.attrs = {x: x, y: y, "text-anchor": "middle", text: text, font: availableAttrs.font, stroke: "none", fill: "#000"};
            res.type = "text";
            setFillAndStroke(res, res.attrs);
            return res;
        },
        setSize = function (width, height) {
            this.width = width || this.width;
            this.height = height || this.height;
            this.canvas[setAttribute]("width", this.width);
            this.canvas[setAttribute]("height", this.height);
            return this;
        },
        create = function () {
            var con = getContainer[apply](0, arguments),
                container = con && con.container,
                x = con.x,
                y = con.y,
                width = con.width,
                height = con.height;
            if (!container) {
                throw new Error("SVG container not found.");
            }
            var cnvs = $("svg");
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            $(cnvs, {
                xmlns: "http://www.w3.org/2000/svg",
                version: 1.1,
                width: width,
                height: height
            });
            if (container == 1) {
                cnvs.style.cssText = "position:absolute;left:" + x + "px;top:" + y + "px";
                doc.body[appendChild](cnvs);
            } else {
                if (container.firstChild) {
                    container.insertBefore(cnvs, container.firstChild);
                } else {
                    container[appendChild](cnvs);
                }
            }
            container = new Paper;
            container.width = width;
            container.height = height;
            container.canvas = cnvs;
            plugins.call(container, container, R.fn);
            container.clear();
            return container;
        };
        paperproto.clear = function () {
            var c = this.canvas;
            while (c.firstChild) {
                c.removeChild(c.firstChild);
            }
            this.bottom = this.top = null;
            (this.desc = $("desc"))[appendChild](doc.createTextNode("Created with Rapha\xebl"));
            c[appendChild](this.desc);
            c[appendChild](this.defs = $("defs"));
        };
        paperproto.remove = function () {
            this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var i in this) {
                this[i] = removed(i);
            }
        };
    }

    // VML
    if (R.vml) {
        var map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
            bites = /([clmz]),?([^clmz]*)/gi,
            blurregexp = / progid:\S+Blur\([^\)]+\)/g,
            val = /-?[^,\s-]+/g,
            coordsize = 1e3 + S + 1e3,
            zoom = 10,
            pathlike = {path: 1, rect: 1},
            path2vml = function (path) {
                var total =  /[ahqstv]/ig,
                    command = pathToAbsolute;
                Str(path).match(total) && (command = path2curve);
                total = /[clmz]/g;
                if (command == pathToAbsolute && !Str(path).match(total)) {
                    var res = Str(path)[rp](bites, function (all, command, args) {
                        var vals = [],
                            isMove = lowerCase.call(command) == "m",
                            res = map[command];
                        args[rp](val, function (value) {
                            if (isMove && vals[length] == 2) {
                                res += vals + map[command == "m" ? "l" : "L"];
                                vals = [];
                            }
                            vals[push](round(value * zoom));
                        });
                        return res + vals;
                    });
                    return res;
                }
                var pa = command(path), p, r;
                res = [];
                for (var i = 0, ii = pa[length]; i < ii; i++) {
                    p = pa[i];
                    r = lowerCase.call(pa[i][0]);
                    r == "z" && (r = "x");
                    for (var j = 1, jj = p[length]; j < jj; j++) {
                        r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                    }
                    res[push](r);
                }
                return res[join](S);
            };
        
        R[toString] = function () {
            return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
        };
        thePath = function (pathString, vml) {
            var g = createNode("group");
            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
            g.coordsize = vml.coordsize;
            g.coordorigin = vml.coordorigin;
            var el = createNode("shape"), ol = el.style;
            ol.width = vml.width + "px";
            ol.height = vml.height + "px";
            el.coordsize = coordsize;
            el.coordorigin = vml.coordorigin;
            g[appendChild](el);
            var p = new Element(el, g, vml),
                attr = {fill: "none", stroke: "#000"};
            pathString && (attr.path = pathString);
            p.type = "path";
            p.path = [];
            p.Path = E;
            setFillAndStroke(p, attr);
            vml.canvas[appendChild](g);
            return p;
        };
        setFillAndStroke = function (o, params) {
            o.attrs = o.attrs || {};
            var node = o.node,
                a = o.attrs,
                s = node.style,
                xy,
                newpath = (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.r != a.r) && o.type == "rect",
                res = o;

            for (var par in params) if (params[has](par)) {
                a[par] = params[par];
            }
            if (newpath) {
                a.path = rectPath(a.x, a.y, a.width, a.height, a.r);
                o.X = a.x;
                o.Y = a.y;
                o.W = a.width;
                o.H = a.height;
            }
            params.href && (node.href = params.href);
            params.title && (node.title = params.title);
            params.target && (node.target = params.target);
            params.cursor && (s.cursor = params.cursor);
            "blur" in params && o.blur(params.blur);
            if (params.path && o.type == "path" || newpath) {
                node.path = path2vml(a.path);
            }
            if (params.rotation != null) {
                o.rotate(params.rotation, true);
            }
            if (params.translation) {
                xy = Str(params.translation)[split](separator);
                translate.call(o, xy[0], xy[1]);
                if (o._.rt.cx != null) {
                    o._.rt.cx +=+ xy[0];
                    o._.rt.cy +=+ xy[1];
                    o.setBox(o.attrs, xy[0], xy[1]);
                }
            }
            if (params.scale) {
                xy = Str(params.scale)[split](separator);
                o.scale(+xy[0] || 1, +xy[1] || +xy[0] || 1, +xy[2] || null, +xy[3] || null);
            }
            if ("clip-rect" in params) {
                var rect = Str(params["clip-rect"])[split](separator);
                if (rect[length] == 4) {
                    rect[2] = +rect[2] + (+rect[0]);
                    rect[3] = +rect[3] + (+rect[1]);
                    var div = node.clipRect || doc.createElement("div"),
                        dstyle = div.style,
                        group = node.parentNode;
                    dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                    if (!node.clipRect) {
                        dstyle.position = "absolute";
                        dstyle.top = 0;
                        dstyle.left = 0;
                        dstyle.width = o.paper.width + "px";
                        dstyle.height = o.paper.height + "px";
                        group.parentNode.insertBefore(div, group);
                        div[appendChild](group);
                        node.clipRect = div;
                    }
                }
                if (!params["clip-rect"]) {
                    node.clipRect && (node.clipRect.style.clip = E);
                }
            }
            if (o.type == "image" && params.src) {
                node.src = params.src;
            }
            if (o.type == "image" && params.opacity) {
                node.filterOpacity = ms + ".Alpha(opacity=" + (params.opacity * 100) + ")";
                s.filter = (node.filterMatrix || E) + (node.filterOpacity || E);
            }
            params.font && (s.font = params.font);
            params["font-family"] && (s.fontFamily = '"' + params["font-family"][split](",")[0][rp](/^['"]+|['"]+$/g, E) + '"');
            params["font-size"] && (s.fontSize = params["font-size"]);
            params["font-weight"] && (s.fontWeight = params["font-weight"]);
            params["font-style"] && (s.fontStyle = params["font-style"]);
            if (params.opacity != null || 
                params["stroke-width"] != null ||
                params.fill != null ||
                params.stroke != null ||
                params["stroke-width"] != null ||
                params["stroke-opacity"] != null ||
                params["fill-opacity"] != null ||
                params["stroke-dasharray"] != null ||
                params["stroke-miterlimit"] != null ||
                params["stroke-linejoin"] != null ||
                params["stroke-linecap"] != null) {
                node = o.shape || node;
                var fill = (node.getElementsByTagName(fillString) && node.getElementsByTagName(fillString)[0]),
                    newfill = false;
                !fill && (newfill = fill = createNode(fillString));
                if ("fill-opacity" in params || "opacity" in params) {
                    var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
                    opacity = mmin(mmax(opacity, 0), 1);
                    fill.opacity = opacity;
                }
                params.fill && (fill.on = true);
                if (fill.on == null || params.fill == "none") {
                    fill.on = false;
                }
                if (fill.on && params.fill) {
                    var isURL = params.fill.match(ISURL);
                    if (isURL) {
                        fill.src = isURL[1];
                        fill.type = "tile";
                    } else {
                        fill.color = R.getRGB(params.fill).hex;
                        fill.src = E;
                        fill.type = "solid";
                        if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill)) {
                            a.fill = "none";
                            a.gradient = params.fill;
                        }
                    }
                }
                newfill && node[appendChild](fill);
                var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),
                newstroke = false;
                !stroke && (newstroke = stroke = createNode("stroke"));
                if ((params.stroke && params.stroke != "none") ||
                    params["stroke-width"] ||
                    params["stroke-opacity"] != null ||
                    params["stroke-dasharray"] ||
                    params["stroke-miterlimit"] ||
                    params["stroke-linejoin"] ||
                    params["stroke-linecap"]) {
                    stroke.on = true;
                }
                (params.stroke == "none" || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
                var strokeColor = R.getRGB(params.stroke);
                stroke.on && params.stroke && (stroke.color = strokeColor.hex);
                opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
                var width = (toFloat(params["stroke-width"]) || 1) * .75;
                opacity = mmin(mmax(opacity, 0), 1);
                params["stroke-width"] == null && (width = a["stroke-width"]);
                params["stroke-width"] && (stroke.weight = width);
                width && width < 1 && (opacity *= width) && (stroke.weight = 1);
                stroke.opacity = opacity;
                
                params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
                stroke.miterlimit = params["stroke-miterlimit"] || 8;
                params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
                if (params["stroke-dasharray"]) {
                    var dasharray = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
                }
                newstroke && node[appendChild](stroke);
            }
            if (res.type == "text") {
                s = res.paper.span.style;
                a.font && (s.font = a.font);
                a["font-family"] && (s.fontFamily = a["font-family"]);
                a["font-size"] && (s.fontSize = a["font-size"]);
                a["font-weight"] && (s.fontWeight = a["font-weight"]);
                a["font-style"] && (s.fontStyle = a["font-style"]);
                res.node.string && (res.paper.span.innerHTML = Str(res.node.string)[rp](/</g, "&#60;")[rp](/&/g, "&#38;")[rp](/\n/g, "<br>"));
                res.W = a.w = res.paper.span.offsetWidth;
                res.H = a.h = res.paper.span.offsetHeight;
                res.X = a.x;
                res.Y = a.y + round(res.H / 2);
 
                // text-anchor emulationm
                switch (a["text-anchor"]) {
                    case "start":
                        res.node.style["v-text-align"] = "left";
                        res.bbx = round(res.W / 2);
                    break;
                    case "end":
                        res.node.style["v-text-align"] = "right";
                        res.bbx = -round(res.W / 2);
                    break;
                    default:
                        res.node.style["v-text-align"] = "center";
                    break;
                }
            }
        };
        addGradientFill = function (o, gradient) {
            o.attrs = o.attrs || {};
            var attrs = o.attrs,
                fill,
                type = "linear",
                fxfy = ".5 .5";
            o.attrs.gradient = gradient;
            gradient = Str(gradient)[rp](radial_gradient, function (all, fx, fy) {
                type = "radial";
                if (fx && fy) {
                    fx = toFloat(fx);
                    fy = toFloat(fy);
                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
                    fxfy = fx + S + fy;
                }
                return E;
            });
            gradient = gradient[split](/\s*\-\s*/);
            if (type == "linear") {
                var angle = gradient.shift();
                angle = -toFloat(angle);
                if (isNaN(angle)) {
                    return null;
                }
            }
            var dots = parseDots(gradient);
            if (!dots) {
                return null;
            }
            o = o.shape || o.node;
            fill = o.getElementsByTagName(fillString)[0] || createNode(fillString);
            !fill.parentNode && o.appendChild(fill);
            if (dots[length]) {
                fill.on = true;
                fill.method = "none";
                fill.color = dots[0].color;
                fill.color2 = dots[dots[length] - 1].color;
                var clrs = [];
                for (var i = 0, ii = dots[length]; i < ii; i++) {
                    dots[i].offset && clrs[push](dots[i].offset + S + dots[i].color);
                }
                fill.colors && (fill.colors.value = clrs[length] ? clrs[join]() : "0% " + fill.color);
                if (type == "radial") {
                    fill.type = "gradientradial";
                    fill.focus = "100%";
                    fill.focussize = fxfy;
                    fill.focusposition = fxfy;
                } else {
                    fill.type = "gradient";
                    fill.angle = (270 - angle) % 360;
                }
            }
            return 1;
        };
        Element = function (node, group, vml) {
            var Rotation = 0,
                RotX = 0,
                RotY = 0,
                Scale = 1;
            this[0] = node;
            this.id = R._oid++;
            this.node = node;
            node.raphael = this;
            this.X = 0;
            this.Y = 0;
            this.attrs = {};
            this.Group = group;
            this.paper = vml;
            this._ = {
                tx: 0,
                ty: 0,
                rt: {deg:0},
                sx: 1,
                sy: 1
            };
            !vml.bottom && (vml.bottom = this);
            this.prev = vml.top;
            vml.top && (vml.top.next = this);
            vml.top = this;
            this.next = null;
        };
        elproto = Element[proto];
        elproto.rotate = function (deg, cx, cy) {
            if (this.removed) {
                return this;
            }
            if (deg == null) {
                if (this._.rt.cx) {
                    return [this._.rt.deg, this._.rt.cx, this._.rt.cy][join](S);
                }
                return this._.rt.deg;
            }
            deg = Str(deg)[split](separator);
            if (deg[length] - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            if (cx != null) {
                this._.rt.deg = deg;
            } else {
                this._.rt.deg += deg;
            }
            cy == null && (cx = null);
            this._.rt.cx = cx;
            this._.rt.cy = cy;
            this.setBox(this.attrs, cx, cy);
            this.Group.style.rotation = this._.rt.deg;
            // gradient fix for rotation. TODO
            // var fill = (this.shape || this.node).getElementsByTagName(fillString);
            // fill = fill[0] || {};
            // var b = ((360 - this._.rt.deg) - 270) % 360;
            // !R.is(fill.angle, "undefined") && (fill.angle = b);
            return this;
        };
        elproto.setBox = function (params, cx, cy) {
            if (this.removed) {
                return this;
            }
            var gs = this.Group.style,
                os = (this.shape && this.shape.style) || this.node.style;
            params = params || {};
            for (var i in params) if (params[has](i)) {
                this.attrs[i] = params[i];
            }
            cx = cx || this._.rt.cx;
            cy = cy || this._.rt.cy;
            var attr = this.attrs,
                x,
                y,
                w,
                h;
            switch (this.type) {
                case "circle":
                    x = attr.cx - attr.r;
                    y = attr.cy - attr.r;
                    w = h = attr.r * 2;
                    break;
                case "ellipse":
                    x = attr.cx - attr.rx;
                    y = attr.cy - attr.ry;
                    w = attr.rx * 2;
                    h = attr.ry * 2;
                    break;
                case "image":
                    x = +attr.x;
                    y = +attr.y;
                    w = attr.width || 0;
                    h = attr.height || 0;
                    break;
                case "text":
                    this.textpath.v = ["m", round(attr.x), ", ", round(attr.y - 2), "l", round(attr.x) + 1, ", ", round(attr.y - 2)][join](E);
                    x = attr.x - round(this.W / 2);
                    y = attr.y - this.H / 2;
                    w = this.W;
                    h = this.H;
                    break;
                case "rect":
                case "path":
                    if (!this.attrs.path) {
                        x = 0;
                        y = 0;
                        w = this.paper.width;
                        h = this.paper.height;
                    } else {
                        var dim = pathDimensions(this.attrs.path);
                        x = dim.x;
                        y = dim.y;
                        w = dim.width;
                        h = dim.height;
                    }
                    break;
                default:
                    x = 0;
                    y = 0;
                    w = this.paper.width;
                    h = this.paper.height;
                    break;
            }
            cx = (cx == null) ? x + w / 2 : cx;
            cy = (cy == null) ? y + h / 2 : cy;
            var left = cx - this.paper.width / 2,
                top = cy - this.paper.height / 2, t;
            gs.left != (t = left + "px") && (gs.left = t);
            gs.top != (t = top + "px") && (gs.top = t);
            this.X = pathlike[has](this.type) ? -left : x;
            this.Y = pathlike[has](this.type) ? -top : y;
            this.W = w;
            this.H = h;
            if (pathlike[has](this.type)) {
                os.left != (t = -left * zoom + "px") && (os.left = t);
                os.top != (t = -top * zoom + "px") && (os.top = t);
            } else if (this.type == "text") {
                os.left != (t = -left + "px") && (os.left = t);
                os.top != (t = -top + "px") && (os.top = t);
            } else {
                gs.width != (t = this.paper.width + "px") && (gs.width = t);
                gs.height != (t = this.paper.height + "px") && (gs.height = t);
                os.left != (t = x - left + "px") && (os.left = t);
                os.top != (t = y - top + "px") && (os.top = t);
                os.width != (t = w + "px") && (os.width = t);
                os.height != (t = h + "px") && (os.height = t);
            }
        };
        elproto.hide = function () {
            !this.removed && (this.Group.style.display = "none");
            return this;
        };
        elproto.show = function () {
            !this.removed && (this.Group.style.display = "block");
            return this;
        };
        elproto.getBBox = function () {
            if (this.removed) {
                return this;
            }
            if (pathlike[has](this.type)) {
                return pathDimensions(this.attrs.path);
            }
            return {
                x: this.X + (this.bbx || 0),
                y: this.Y,
                width: this.W,
                height: this.H
            };
        };
        elproto.remove = function () {
            if (this.removed) {
                return;
            }
            tear(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.Group.parentNode.removeChild(this.Group);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var i in this) {
                delete this[i];
            }
            this.removed = true;
        };
        elproto.attr = function (name, value) {
            if (this.removed) {
                return this;
            }
            if (name == null) {
                var res = {};
                for (var i in this.attrs) if (this.attrs[has](i)) {
                    res[i] = this.attrs[i];
                }
                this._.rt.deg && (res.rotation = this.rotate());
                (this._.sx != 1 || this._.sy != 1) && (res.scale = this.scale());
                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                return res;
            }
            if (value == null && R.is(name, "string")) {
                if (name == "translation") {
                    return translate.call(this);
                }
                if (name == "rotation") {
                    return this.rotate();
                }
                if (name == "scale") {
                    return this.scale();
                }
                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
                    return this.attrs.gradient;
                }
                return this.attrs[name];
            }
            if (this.attrs && value == null && R.is(name, array)) {
                var ii, values = {};
                for (i = 0, ii = name[length]; i < ii; i++) {
                    values[name[i]] = this.attr(name[i]);
                }
                return values;
            }
            var params;
            if (value != null) {
                params = {};
                params[name] = value;
            }
            value == null && R.is(name, "object") && (params = name);
            if (params) {
                for (var key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
                    var par = this.paper.customAttributes[key].apply(this, [][concat](params[key]));
                    this.attrs[key] = params[key];
                    for (var subkey in par) if (par[has](subkey)) {
                        params[subkey] = par[subkey];
                    }
                }
                if (params.text && this.type == "text") {
                    this.node.string = params.text;
                }
                setFillAndStroke(this, params);
                if (params.gradient && (({circle: 1, ellipse: 1})[has](this.type) || Str(params.gradient).charAt() != "r")) {
                    addGradientFill(this, params.gradient);
                }
                (!pathlike[has](this.type) || this._.rt.deg) && this.setBox(this.attrs);
            }
            return this;
        };
        elproto.toFront = function () {
            !this.removed && this.Group.parentNode[appendChild](this.Group);
            this.paper.top != this && tofront(this, this.paper);
            return this;
        };
        elproto.toBack = function () {
            if (this.removed) {
                return this;
            }
            if (this.Group.parentNode.firstChild != this.Group) {
                this.Group.parentNode.insertBefore(this.Group, this.Group.parentNode.firstChild);
                toback(this, this.paper);
            }
            return this;
        };
        elproto.insertAfter = function (element) {
            if (this.removed) {
                return this;
            }
            if (element.constructor == Set) {
                element = element[element.length - 1];
            }
            if (element.Group.nextSibling) {
                element.Group.parentNode.insertBefore(this.Group, element.Group.nextSibling);
            } else {
                element.Group.parentNode[appendChild](this.Group);
            }
            insertafter(this, element, this.paper);
            return this;
        };
        elproto.insertBefore = function (element) {
            if (this.removed) {
                return this;
            }
            if (element.constructor == Set) {
                element = element[0];
            }
            element.Group.parentNode.insertBefore(this.Group, element.Group);
            insertbefore(this, element, this.paper);
            return this;
        };
        elproto.blur = function (size) {
            var s = this.node.runtimeStyle,
                f = s.filter;
            f = f.replace(blurregexp, E);
            if (+size !== 0) {
                this.attrs.blur = size;
                s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
                s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
            } else {
                s.filter = f;
                s.margin = 0;
                delete this.attrs.blur;
            }
        };
 
        theCircle = function (vml, x, y, r) {
            var g = createNode("group"),
                o = createNode("oval"),
                ol = o.style;
            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
            g.coordsize = coordsize;
            g.coordorigin = vml.coordorigin;
            g[appendChild](o);
            var res = new Element(o, g, vml);
            res.type = "circle";
            setFillAndStroke(res, {stroke: "#000", fill: "none"});
            res.attrs.cx = x;
            res.attrs.cy = y;
            res.attrs.r = r;
            res.setBox({x: x - r, y: y - r, width: r * 2, height: r * 2});
            vml.canvas[appendChild](g);
            return res;
        };
        function rectPath(x, y, w, h, r) {
            if (r) {
                return R.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z", x + r, y, w - r * 2, r, -r, h - r * 2, r * 2 - w, r * 2 - h);
            } else {
                return R.format("M{0},{1}l{2},0,0,{3},{4},0z", x, y, w, h, -w);
            }
        }
        theRect = function (vml, x, y, w, h, r) {
            var path = rectPath(x, y, w, h, r),
                res = vml.path(path),
                a = res.attrs;
            res.X = a.x = x;
            res.Y = a.y = y;
            res.W = a.width = w;
            res.H = a.height = h;
            a.r = r;
            a.path = path;
            res.type = "rect";
            return res;
        };
        theEllipse = function (vml, x, y, rx, ry) {
            var g = createNode("group"),
                o = createNode("oval"),
                ol = o.style;
            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
            g.coordsize = coordsize;
            g.coordorigin = vml.coordorigin;
            g[appendChild](o);
            var res = new Element(o, g, vml);
            res.type = "ellipse";
            setFillAndStroke(res, {stroke: "#000"});
            res.attrs.cx = x;
            res.attrs.cy = y;
            res.attrs.rx = rx;
            res.attrs.ry = ry;
            res.setBox({x: x - rx, y: y - ry, width: rx * 2, height: ry * 2});
            vml.canvas[appendChild](g);
            return res;
        };
        theImage = function (vml, src, x, y, w, h) {
            var g = createNode("group"),
                o = createNode("image");
            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
            g.coordsize = coordsize;
            g.coordorigin = vml.coordorigin;
            o.src = src;
            g[appendChild](o);
            var res = new Element(o, g, vml);
            res.type = "image";
            res.attrs.src = src;
            res.attrs.x = x;
            res.attrs.y = y;
            res.attrs.w = w;
            res.attrs.h = h;
            res.setBox({x: x, y: y, width: w, height: h});
            vml.canvas[appendChild](g);
            return res;
        };
        theText = function (vml, x, y, text) {
            var g = createNode("group"),
                el = createNode("shape"),
                ol = el.style,
                path = createNode("path"),
                ps = path.style,
                o = createNode("textpath");
            g.style.cssText = "position:absolute;left:0;top:0;width:" + vml.width + "px;height:" + vml.height + "px";
            g.coordsize = coordsize;
            g.coordorigin = vml.coordorigin;
            path.v = R.format("m{0},{1}l{2},{1}", round(x * 10), round(y * 10), round(x * 10) + 1);
            path.textpathok = true;
            ol.width = vml.width;
            ol.height = vml.height;
            o.string = Str(text);
            o.on = true;
            el[appendChild](o);
            el[appendChild](path);
            g[appendChild](el);
            var res = new Element(o, g, vml);
            res.shape = el;
            res.textpath = path;
            res.type = "text";
            res.attrs.text = text;
            res.attrs.x = x;
            res.attrs.y = y;
            res.attrs.w = 1;
            res.attrs.h = 1;
            setFillAndStroke(res, {font: availableAttrs.font, stroke: "none", fill: "#000"});
            res.setBox();
            vml.canvas[appendChild](g);
            return res;
        };
        setSize = function (width, height) {
            var cs = this.canvas.style;
            width == +width && (width += "px");
            height == +height && (height += "px");
            cs.width = width;
            cs.height = height;
            cs.clip = "rect(0 " + width + " " + height + " 0)";
            return this;
        };
        var createNode;
        doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            createNode = function (tagName) {
                return doc.createElement('<rvml:' + tagName + ' class="rvml">');
            };
        } catch (e) {
            createNode = function (tagName) {
                return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
        }
        create = function () {
            var con = getContainer[apply](0, arguments),
                container = con.container,
                height = con.height,
                s,
                width = con.width,
                x = con.x,
                y = con.y;
            if (!container) {
                throw new Error("VML container not found.");
            }
            var res = new Paper,
                c = res.canvas = doc.createElement("div"),
                cs = c.style;
            x = x || 0;
            y = y || 0;
            width = width || 512;
            height = height || 342;
            width == +width && (width += "px");
            height == +height && (height += "px");
            res.width = 1e3;
            res.height = 1e3;
            res.coordsize = zoom * 1e3 + S + zoom * 1e3;
            res.coordorigin = "0 0";
            res.span = doc.createElement("span");
            res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            c[appendChild](res.span);
            cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
            if (container == 1) {
                doc.body[appendChild](c);
                cs.left = x + "px";
                cs.top = y + "px";
                cs.position = "absolute";
            } else {
                if (container.firstChild) {
                    container.insertBefore(c, container.firstChild);
                } else {
                    container[appendChild](c);
                }
            }
            plugins.call(res, res, R.fn);
            return res;
        };
        paperproto.clear = function () {
            this.canvas.innerHTML = E;
            this.span = doc.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas[appendChild](this.span);
            this.bottom = this.top = null;
        };
        paperproto.remove = function () {
            this.canvas.parentNode.removeChild(this.canvas);
            for (var i in this) {
                this[i] = removed(i);
            }
            return true;
        };
    }
 
    // rest
    // WebKit rendering bug workaround method
    var version = navigator.userAgent.match(/Version\/(.*?)\s/);
    if ((navigator.vendor == "Apple Computer, Inc.") && (version && version[1] < 4 || navigator.platform.slice(0, 2) == "iP")) {
        paperproto.safari = function () {
            var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
            win.setTimeout(function () {rect.remove();});
        };
    } else {
        paperproto.safari = function () {};
    }
 
    // Events
    var preventDefault = function () {
        this.returnValue = false;
    },
    preventTouch = function () {
        return this.originalEvent.preventDefault();
    },
    stopPropagation = function () {
        this.cancelBubble = true;
    },
    stopTouch = function () {
        return this.originalEvent.stopPropagation();
    },
    addEvent = (function () {
        if (doc.addEventListener) {
            return function (obj, type, fn, element) {
            	
                var realName = supportsTouch && touchMap[type] ? touchMap[type] : type;
                
                var f = function (e) {
                    if (supportsTouch && touchMap[has](type)) {
                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                            if (e.targetTouches[i].target == obj) {
                                var olde = e;
                                e = e.targetTouches[i];
                                e.originalEvent = olde;
                                e.preventDefault = preventTouch;
                                e.stopPropagation = stopTouch;
                                break;
                            }
                        }
                    }
                    return fn.call(element, e);
                };
                obj.addEventListener(realName, f, false);
                return function () {
                    obj.removeEventListener(realName, f, false);
                    return true;
                };
            };
        } else if (doc.attachEvent) {
            return function (obj, type, fn, element) {
                var f = function (e) {
                    e = e || win.event;
                    e.preventDefault = e.preventDefault || preventDefault;
                    e.stopPropagation = e.stopPropagation || stopPropagation;
                    return fn.call(element, e);
                };
                obj.attachEvent("on" + type, f);
                var detacher = function () {
                    obj.detachEvent("on" + type, f);
                    return true;
                };
                return detacher;
            };
        }
    })(),
    drag = [],
    dragMove = function (e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
            scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft,
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            x += scrollX;
            y += scrollY;
            dragi.move && dragi.move.call(dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
    dragUp = function (e) {
        R.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            dragi.end && dragi.end.call(dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
        }
        drag = [];
    };
    for (var i = events[length]; i--;) {
        (function (eventName) {
            R[eventName] = Element[proto][eventName] = function (fn, scope) {
                if (R.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || doc, eventName, fn, scope || this)});
                }
                return this;
            };
            R["un" + eventName] = Element[proto]["un" + eventName] = function (fn) {
                var events = this.events,
                    l = events[length];
                while (l--) if (events[l].name == eventName && events[l].f == fn) {
                    events[l].unbind();
                    events.splice(l, 1);
                    !events.length && delete this.events;
                    return this;
                }
                return this;
            };
        })(events[i]);
    }
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        this._drag = {};
        this.mousedown(function (e) {
            (e.originalEvent || e).preventDefault();
            var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop,
                scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
            this._drag.x = e.clientX + scrollX;
            this._drag.y = e.clientY + scrollY;
            this._drag.id = e.identifier;
            onstart && onstart.call(start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
            drag.push({el: this, move: onmove, end: onend, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
        });
        return this;
    };
    elproto.undrag = function (onmove, onstart, onend) {
        var i = drag.length;
        while (i--) {
            drag[i].el == this && (drag[i].move == onmove && drag[i].end == onend) && drag.splice(i++, 1);
        }
        !drag.length && R.unmousemove(dragMove).unmouseup(dragUp);
    };
    paperproto.circle = function (x, y, r) {
        return theCircle(this, x || 0, y || 0, r || 0);
    };
    paperproto.rect = function (x, y, w, h, r) {
        return theRect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
    };
    paperproto.ellipse = function (x, y, rx, ry) {
        return theEllipse(this, x || 0, y || 0, rx || 0, ry || 0);
    };
    paperproto.path = function (pathString) {
        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
        return thePath(R.format[apply](R, arguments), this);
    };
    paperproto.image = function (src, x, y, w, h) {
        return theImage(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
    };
    paperproto.text = function (x, y, text) {
        return theText(this, x || 0, y || 0, Str(text));
    };
    paperproto.set = function (itemsArray) {
        arguments[length] > 1 && (itemsArray = Array[proto].splice.call(arguments, 0, arguments[length]));
        return new Set(itemsArray);
    };
    paperproto.setSize = setSize;
    paperproto.top = paperproto.bottom = null;
    paperproto.raphael = R;
    function x_y() {
        return this.x + S + this.y;
    }
    elproto.resetScale = function () {
        if (this.removed) {
            return this;
        }
        this._.sx = 1;
        this._.sy = 1;
        this.attrs.scale = "1 1";
    };
    elproto.scale = function (x, y, cx, cy) {
        if (this.removed) {
            return this;
        }
        if (x == null && y == null) {
            return {
                x: this._.sx,
                y: this._.sy,
                toString: x_y
            };
        }
        y = y || x;
        !+y && (y = x);
        var dx,
            dy,
            dcx,
            dcy,
            a = this.attrs;
        if (x != 0) {
            var bb = this.getBBox(),
                rcx = bb.x + bb.width / 2,
                rcy = bb.y + bb.height / 2,
                kx = abs(x / this._.sx),
                ky = abs(y / this._.sy);
            cx = (+cx || cx == 0) ? cx : rcx;
            cy = (+cy || cy == 0) ? cy : rcy;
            var posx = this._.sx > 0,
                posy = this._.sy > 0,
                dirx = ~~(x / abs(x)),
                diry = ~~(y / abs(y)),
                dkx = kx * dirx,
                dky = ky * diry,
                s = this.node.style,
                ncx = cx + abs(rcx - cx) * dkx * (rcx > cx == posx ? 1 : -1),
                ncy = cy + abs(rcy - cy) * dky * (rcy > cy == posy ? 1 : -1),
                fr = (x * dirx > y * diry ? ky : kx);
            switch (this.type) {
                case "rect":
                case "image":
                    var neww = a.width * kx,
                        newh = a.height * ky;
                    this.attr({
                        height: newh,
                        r: a.r * fr,
                        width: neww,
                        x: ncx - neww / 2,
                        y: ncy - newh / 2
                    });
                    break;
                case "circle":
                case "ellipse":
                    this.attr({
                        rx: a.rx * kx,
                        ry: a.ry * ky,
                        r: a.r * fr,
                        cx: ncx,
                        cy: ncy
                    });
                    break;
                case "text":
                    this.attr({
                        x: ncx,
                        y: ncy
                    });
                    break;
                case "path":
                    var path = pathToRelative(a.path),
                        skip = true,
                        fx = posx ? dkx : kx,
                        fy = posy ? dky : ky;
                    for (var i = 0, ii = path[length]; i < ii; i++) {
                        var p = path[i],
                            P0 = upperCase.call(p[0]);
                        if (P0 == "M" && skip) {
                            continue;
                        } else {
                            skip = false;
                        }
                        if (P0 == "A") {
                            p[path[i][length] - 2] *= fx;
                            p[path[i][length] - 1] *= fy;
                            p[1] *= kx;
                            p[2] *= ky;
                            p[5] = +(dirx + diry ? !!+p[5] : !+p[5]);
                        } else if (P0 == "H") {
                            for (var j = 1, jj = p[length]; j < jj; j++) {
                                p[j] *= fx;
                            }
                        } else if (P0 == "V") {
                            for (j = 1, jj = p[length]; j < jj; j++) {
                                p[j] *= fy;
                            }
                         } else {
                            for (j = 1, jj = p[length]; j < jj; j++) {
                                p[j] *= (j % 2) ? fx : fy;
                            }
                        }
                    }
                    var dim2 = pathDimensions(path);
                    dx = ncx - dim2.x - dim2.width / 2;
                    dy = ncy - dim2.y - dim2.height / 2;
                    path[0][1] += dx;
                    path[0][2] += dy;
                    this.attr({path: path});
                break;
            }
            if (this.type in {text: 1, image:1} && (dirx != 1 || diry != 1)) {
                if (this.transformations) {
                    this.transformations[2] = "scale("[concat](dirx, ",", diry, ")");
                    this.node[setAttribute]("transform", this.transformations[join](S));
                    dx = (dirx == -1) ? -a.x - (neww || 0) : a.x;
                    dy = (diry == -1) ? -a.y - (newh || 0) : a.y;
                    this.attr({x: dx, y: dy});
                    a.fx = dirx - 1;
                    a.fy = diry - 1;
                } else {
                    this.node.filterMatrix = ms + ".Matrix(M11="[concat](dirx,
                        ", M12=0, M21=0, M22=", diry,
                        ", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
                    s.filter = (this.node.filterMatrix || E) + (this.node.filterOpacity || E);
                }
            } else {
                if (this.transformations) {
                    this.transformations[2] = E;
                    this.node[setAttribute]("transform", this.transformations[join](S));
                    a.fx = 0;
                    a.fy = 0;
                } else {
                    this.node.filterMatrix = E;
                    s.filter = (this.node.filterMatrix || E) + (this.node.filterOpacity || E);
                }
            }
            a.scale = [x, y, cx, cy][join](S);
            this._.sx = x;
            this._.sy = y;
        }
        return this;
    };
    elproto.clone = function () {
        if (this.removed) {
            return null;
        }
        var attr = this.attr();
        delete attr.scale;
        delete attr.translation;
        return this.paper[this.type]().attr(attr);
    };
    var curveslengths = {},
    getPointAtSegmentLength = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        var len = 0,
            precision = 100,
            name = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y].join(),
            cache = curveslengths[name],
            old, dot;
        !cache && (curveslengths[name] = cache = {data: []});
        cache.timer && clearTimeout(cache.timer);
        cache.timer = setTimeout(function () {delete curveslengths[name];}, 2000);
        if (length != null) {
            var total = getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
            precision = ~~total * 10;
        }
        for (var i = 0; i < precision + 1; i++) {
            if (cache.data[length] > i) {
                dot = cache.data[i * precision];
            } else {
                dot = R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, i / precision);
                cache.data[i] = dot;
            }
            i && (len += pow(pow(old.x - dot.x, 2) + pow(old.y - dot.y, 2), .5));
            if (length != null && len >= length) {
                return dot;
            }
            old = dot;
        }
        if (length == null) {
            return len;
        }
    },
    getLengthFactory = function (istotal, subpath) {
        return function (path, length, onlystart) {
            path = path2curve(path);
            var x, y, p, l, sp = "", subpaths = {}, point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += ["C", point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                            if (onlystart) {return sp;}
                            subpaths.start = sp;
                            sp = ["M", point.x, point.y + "C", point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]][join]();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return {x: point.x, y: point.y, alpha: point.alpha};
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[1], p[2], p[3], p[4], p[5], p[6], 1);
            point.alpha && (point = {x: point.x, y: point.y, alpha: point.alpha});
            return point;
        };
    };
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    elproto.getTotalLength = function () {
        if (this.type != "path") {return;}
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
        return getTotalLength(this.attrs.path);
    };
    elproto.getPointAtLength = function (length) {
        if (this.type != "path") {return;}
        return getPointAtLength(this.attrs.path, length);
    };
    elproto.getSubpath = function (from, to) {
        if (this.type != "path") {return;}
        if (abs(this.getTotalLength() - to) < "1e-6") {
            return getSubpathsAtLength(this.attrs.path, from).end;
        }
        var a = getSubpathsAtLength(this.attrs.path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };

    // animation easing formulas
    R.easing_formulas = {
        linear: function (n) {
            return n;
        },
        "<": function (n) {
            return pow(n, 3);
        },
        ">": function (n) {
            return pow(n - 1, 3) + 1;
        },
        "<>": function (n) {
            n = n * 2;
            if (n < 1) {
                return pow(n, 3) / 2;
            }
            n -= 2;
            return (pow(n, 3) + 2) / 2;
        },
        backIn: function (n) {
            var s = 1.70158;
            return n * n * ((s + 1) * n - s);
        },
        backOut: function (n) {
            n = n - 1;
            var s = 1.70158;
            return n * n * ((s + 1) * n + s) + 1;
        },
        elastic: function (n) {
            if (n == 0 || n == 1) {
                return n;
            }
            var p = .3,
                s = p / 4;
            return pow(2, -10 * n) * math.sin((n - s) * (2 * PI) / p) + 1;
        },
        bounce: function (n) {
            var s = 7.5625,
                p = 2.75,
                l;
            if (n < (1 / p)) {
                l = s * n * n;
            } else {
                if (n < (2 / p)) {
                    n -= (1.5 / p);
                    l = s * n * n + .75;
                } else {
                    if (n < (2.5 / p)) {
                        n -= (2.25 / p);
                        l = s * n * n + .9375;
                    } else {
                        n -= (2.625 / p);
                        l = s * n * n + .984375;
                    }
                }
            }
            return l;
        }
    };

    var animationElements = [],
        animation = function () {
            var Now = +new Date;
            for (var l = 0; l < animationElements[length]; l++) {
                var e = animationElements[l];
                if (e.stop || e.el.removed) {
                    continue;
                }
                var time = Now - e.start,
                    ms = e.ms,
                    easing = e.easing,
                    from = e.from,
                    diff = e.diff,
                    to = e.to,
                    t = e.t,
                    that = e.el,
                    set = {},
                    now;
                if (time < ms) {
                    var pos = easing(time / ms);
                    for (var attr in from) if (from[has](attr)) {
                        switch (availableAnimAttrs[attr]) {
                            case "along":
                                now = pos * ms * diff[attr];
                                to.back && (now = to.len - now);
                                var point = getPointAtLength(to[attr], now);
                                that.translate(diff.sx - diff.x || 0, diff.sy - diff.y || 0);
                                diff.x = point.x;
                                diff.y = point.y;
                                that.translate(point.x - diff.sx, point.y - diff.sy);
                                to.rot && that.rotate(diff.r + point.alpha, point.x, point.y);
                                break;
                            case nu:
                                now = +from[attr] + pos * ms * diff[attr];
                                break;
                            case "colour":
                                now = "rgb(" + [
                                    upto255(round(from[attr].r + pos * ms * diff[attr].r)),
                                    upto255(round(from[attr].g + pos * ms * diff[attr].g)),
                                    upto255(round(from[attr].b + pos * ms * diff[attr].b))
                                ][join](",") + ")";
                                break;
                            case "path":
                                now = [];
                                for (var i = 0, ii = from[attr][length]; i < ii; i++) {
                                    now[i] = [from[attr][i][0]];
                                    for (var j = 1, jj = from[attr][i][length]; j < jj; j++) {
                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
                                    }
                                    now[i] = now[i][join](S);
                                }
                                now = now[join](S);
                                break;
                            case "csv":
                                switch (attr) {
                                    case "translation":
                                        var x = pos * ms * diff[attr][0] - t.x,
                                            y = pos * ms * diff[attr][1] - t.y;
                                        t.x += x;
                                        t.y += y;
                                        now = x + S + y;
                                    break;
                                    case "rotation":
                                        now = +from[attr][0] + pos * ms * diff[attr][0];
                                        from[attr][1] && (now += "," + from[attr][1] + "," + from[attr][2]);
                                    break;
                                    case "scale":
                                        now = [+from[attr][0] + pos * ms * diff[attr][0], +from[attr][1] + pos * ms * diff[attr][1], (2 in to[attr] ? to[attr][2] : E), (3 in to[attr] ? to[attr][3] : E)][join](S);
                                    break;
                                    case "clip-rect":
                                        now = [];
                                        i = 4;
                                        while (i--) {
                                            now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                        }
                                    break;
                                }
                                break;
                            default:
                              var from2 = [].concat(from[attr]);
                                now = [];
                                i = that.paper.customAttributes[attr].length;
                                while (i--) {
                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
                                }
                                break;
                        }
                        set[attr] = now;
                    }
                    that.attr(set);
                    that._run && that._run.call(that);
                } else {
                    if (to.along) {
                        point = getPointAtLength(to.along, to.len * !to.back);
                        that.translate(diff.sx - (diff.x || 0) + point.x - diff.sx, diff.sy - (diff.y || 0) + point.y - diff.sy);
                        to.rot && that.rotate(diff.r + point.alpha, point.x, point.y);
                    }
                    (t.x || t.y) && that.translate(-t.x, -t.y);
                    to.scale && (to.scale += E);
                    that.attr(to);
                    animationElements.splice(l--, 1);
                }
            }
            R.svg && that && that.paper && that.paper.safari();
            animationElements[length] && setTimeout(animation);
        },
        keyframesRun = function (attr, element, time, prev, prevcallback) {
            var dif = time - prev;
            element.timeouts.push(setTimeout(function () {
                R.is(prevcallback, "function") && prevcallback.call(element);
                element.animate(attr, dif, attr.easing);
            }, prev));
        },
        upto255 = function (color) {
            return mmax(mmin(color, 255), 0);
        },
        translate = function (x, y) {
            if (x == null) {
                return {x: this._.tx, y: this._.ty, toString: x_y};
            }
            this._.tx += +x;
            this._.ty += +y;
            switch (this.type) {
                case "circle":
                case "ellipse":
                    this.attr({cx: +x + this.attrs.cx, cy: +y + this.attrs.cy});
                    break;
                case "rect":
                case "image":
                case "text":
                    this.attr({x: +x + this.attrs.x, y: +y + this.attrs.y});
                    break;
                case "path":
                    var path = pathToRelative(this.attrs.path);
                    path[0][1] += +x;
                    path[0][2] += +y;
                    this.attr({path: path});
                break;
            }
            return this;
        };
    elproto.animateWith = function (element, params, ms, easing, callback) {
        for (var i = 0, ii = animationElements.length; i < ii; i++) {
            if (animationElements[i].el.id == element.id) {
                params.start = animationElements[i].start;
            }
        }
        return this.animate(params, ms, easing, callback);
    };
    elproto.animateAlong = along();
    elproto.animateAlongBack = along(1);
    function along(isBack) {
        return function (path, ms, rotate, callback) {
            var params = {back: isBack};
            R.is(rotate, "function") ? (callback = rotate) : (params.rot = rotate);
            path && path.constructor == Element && (path = path.attrs.path);
            path && (params.along = path);
            return this.animate(params, ms, callback);
        };
    }
    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
        var cx = 3 * p1x,
            bx = 3 * (p2x - p1x) - cx,
            ax = 1 - cx - bx,
            cy = 3 * p1y,
            by = 3 * (p2y - p1y) - cy,
            ay = 1 - cy - by;
        function sampleCurveX(t) {
            return ((ax * t + bx) * t + cx) * t;
        }
        function solve(x, epsilon) {
            var t = solveCurveX(x, epsilon);
            return ((ay * t + by) * t + cy) * t;
        }
        function solveCurveX(x, epsilon) {
            var t0, t1, t2, x2, d2, i;
            for(t2 = x, i = 0; i < 8; i++) {
                x2 = sampleCurveX(t2) - x;
                if (abs(x2) < epsilon) {
                    return t2;
                }
                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
                if (abs(d2) < 1e-6) {
                    break;
                }
                t2 = t2 - x2 / d2;
            }
            t0 = 0;
            t1 = 1;
            t2 = x;
            if (t2 < t0) {
                return t0;
            }
            if (t2 > t1) {
                return t1;
            }
            while (t0 < t1) {
                x2 = sampleCurveX(t2);
                if (abs(x2 - x) < epsilon) {
                    return t2;
                }
                if (x > x2) {
                    t0 = t2;
                } else {
                    t1 = t2;
                }
                t2 = (t1 - t0) / 2 + t0;
            }
            return t2;
        }
        return solve(t, 1 / (200 * duration));
    }
    elproto.onAnimation = function (f) {
        this._run = f || 0;
        return this;
    };
    elproto.animate = function (params, ms, easing, callback) {
        var element = this;
        element.timeouts = element.timeouts || [];
        if (R.is(easing, "function") || !easing) {
            callback = easing || null;
        }
        if (element.removed) {
            callback && callback.call(element);
            return element;
        }
        var from = {},
            to = {},
            animateable = false,
            diff = {};
        for (var attr in params) if (params[has](attr)) {
            if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
                animateable = true;
                from[attr] = element.attr(attr);
                (from[attr] == null) && (from[attr] = availableAttrs[attr]);
                to[attr] = params[attr];
                switch (availableAnimAttrs[attr]) {
                    case "along":
                        var len = getTotalLength(params[attr]);
                        var point = getPointAtLength(params[attr], len * !!params.back);
                        var bb = element.getBBox();
                        diff[attr] = len / ms;
                        diff.tx = bb.x;
                        diff.ty = bb.y;
                        diff.sx = point.x;
                        diff.sy = point.y;
                        to.rot = params.rot;
                        to.back = params.back;
                        to.len = len;
                        params.rot && (diff.r = toFloat(element.rotate()) || 0);
                        break;
                    case nu:
                        diff[attr] = (to[attr] - from[attr]) / ms;
                        break;
                    case "colour":
                        from[attr] = R.getRGB(from[attr]);
                        var toColour = R.getRGB(to[attr]);
                        diff[attr] = {
                            r: (toColour.r - from[attr].r) / ms,
                            g: (toColour.g - from[attr].g) / ms,
                            b: (toColour.b - from[attr].b) / ms
                        };
                        break;
                    case "path":
                        var pathes = path2curve(from[attr], to[attr]);
                        from[attr] = pathes[0];
                        var toPath = pathes[1];
                        diff[attr] = [];
                        for (var i = 0, ii = from[attr][length]; i < ii; i++) {
                            diff[attr][i] = [0];
                            for (var j = 1, jj = from[attr][i][length]; j < jj; j++) {
                                diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                            }
                        }
                        break;
                    case "csv":
                        var values = Str(params[attr])[split](separator),
                            from2 = Str(from[attr])[split](separator);
                        switch (attr) {
                            case "translation":
                                from[attr] = [0, 0];
                                diff[attr] = [values[0] / ms, values[1] / ms];
                            break;
                            case "rotation":
                                from[attr] = (from2[1] == values[1] && from2[2] == values[2]) ? from2 : [0, values[1], values[2]];
                                diff[attr] = [(values[0] - from[attr][0]) / ms, 0, 0];
                            break;
                            case "scale":
                                params[attr] = values;
                                from[attr] = Str(from[attr])[split](separator);
                                diff[attr] = [(values[0] - from[attr][0]) / ms, (values[1] - from[attr][1]) / ms, 0, 0];
                            break;
                            case "clip-rect":
                                from[attr] = Str(from[attr])[split](separator);
                                diff[attr] = [];
                                i = 4;
                                while (i--) {
                                    diff[attr][i] = (values[i] - from[attr][i]) / ms;
                                }
                            break;
                        }
                        to[attr] = values;
                        break;
                    default:
                        values = [].concat(params[attr]);
                        from2 = [].concat(from[attr]);
                        diff[attr] = [];
                        i = element.paper.customAttributes[attr][length];
                        while (i--) {
                            diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
                        }
                        break;
                }
            }
        }
        if (!animateable) {
            var attrs = [],
                lastcall;
            for (var key in params) if (params[has](key) && animKeyFrames.test(key)) {
                attr = {value: params[key]};
                key == "from" && (key = 0);
                key == "to" && (key = 100);
                attr.key = toInt(key, 10);
                attrs.push(attr);
            }
            attrs.sort(sortByKey);
            if (attrs[0].key) {
                attrs.unshift({key: 0, value: element.attrs});
            }
            for (i = 0, ii = attrs[length]; i < ii; i++) {
                keyframesRun(attrs[i].value, element, ms / 100 * attrs[i].key, ms / 100 * (attrs[i - 1] && attrs[i - 1].key || 0), attrs[i - 1] && attrs[i - 1].value.callback);
            }
            lastcall = attrs[attrs[length] - 1].value.callback;
            if (lastcall) {
                element.timeouts.push(setTimeout(function () {lastcall.call(element);}, ms));
            }
        } else {
            var easyeasy = R.easing_formulas[easing];
            if (!easyeasy) {
                easyeasy = Str(easing).match(bezierrg);
                if (easyeasy && easyeasy[length] == 5) {
                    var curve = easyeasy;
                    easyeasy = function (t) {
                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                    };
                } else {
                    easyeasy = function (t) {
                        return t;
                    };
                }
            }
            animationElements.push({
                start: params.start || +new Date,
                ms: ms,
                easing: easyeasy,
                from: from,
                diff: diff,
                to: to,
                el: element,
                t: {x: 0, y: 0}
            });
            R.is(callback, "function") && (element._ac = setTimeout(function () {
                callback.call(element);
            }, ms));
            animationElements[length] == 1 && setTimeout(animation);
        }
        return this;
    };
    elproto.stop = function () {
        for (var i = 0; i < animationElements.length; i++) {
            animationElements[i].el.id == this.id && animationElements.splice(i--, 1);
        }
        for (i = 0, ii = this.timeouts && this.timeouts.length; i < ii; i++) {
            clearTimeout(this.timeouts[i]);
        }
        this.timeouts = [];
        clearTimeout(this._ac);
        delete this._ac;
        return this;
    };
    elproto.translate = function (x, y) {
        return this.attr({translation: x + " " + y});
    };
    elproto[toString] = function () {
        return "Rapha\xebl\u2019s object";
    };
    R.ae = animationElements;
 
    // Set
    var Set = function (items) {
        this.items = [];
        this[length] = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items[length]; i < ii; i++) {
                if (items[i] && (items[i].constructor == Element || items[i].constructor == Set)) {
                    this[this.items[length]] = this.items[this.items[length]] = items[i];
                    this[length]++;
                }
            }
        }
    };
    Set[proto][push] = function () {
        var item,
            len;
        for (var i = 0, ii = arguments[length]; i < ii; i++) {
            item = arguments[i];
            if (item && (item.constructor == Element || item.constructor == Set)) {
                len = this.items[length];
                this[len] = this.items[len] = item;
                this[length]++;
            }
        }
        return this;
    };
    Set[proto].pop = function () {
        delete this[this[length]--];
        return this.items.pop();
    };
    for (var method in elproto) if (elproto[has](method)) {
        Set[proto][method] = (function (methodname) {
            return function () {
                for (var i = 0, ii = this.items[length]; i < ii; i++) {
                    this.items[i][methodname][apply](this.items[i], arguments);
                }
                return this;
            };
        })(method);
    }
    Set[proto].attr = function (name, value) {
        if (name && R.is(name, array) && R.is(name[0], "object")) {
            for (var j = 0, jj = name[length]; j < jj; j++) {
                this.items[j].attr(name[j]);
            }
        } else {
            for (var i = 0, ii = this.items[length]; i < ii; i++) {
                this.items[i].attr(name, value);
            }
        }
        return this;
    };
    Set[proto].animate = function (params, ms, easing, callback) {
        (R.is(easing, "function") || !easing) && (callback = easing || null);
        var len = this.items[length],
            i = len,
            item,
            set = this,
            collector;
        callback && (collector = function () {
            !--len && callback.call(set);
        });
        easing = R.is(easing, string) ? easing : collector;
        item = this.items[--i].animate(params, ms, easing, collector);
        while (i--) {
            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, params, ms, easing, collector);
        }
        return this;
    };
    Set[proto].insertAfter = function (el) {
        var i = this.items[length];
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    Set[proto].getBBox = function () {
        var x = [],
            y = [],
            w = [],
            h = [];
        for (var i = this.items[length]; i--;) {
            var box = this.items[i].getBBox();
            x[push](box.x);
            y[push](box.y);
            w[push](box.x + box.width);
            h[push](box.y + box.height);
        }
        x = mmin[apply](0, x);
        y = mmin[apply](0, y);
        return {
            x: x,
            y: y,
            width: mmax[apply](0, w) - x,
            height: mmax[apply](0, h) - y
        };
    };
    Set[proto].clone = function (s) {
        s = new Set;
        for (var i = 0, ii = this.items[length]; i < ii; i++) {
            s[push](this.items[i].clone());
        }
        return s;
    };

    R.registerFont = function (font) {
        if (!font.face) {
            return font;
        }
        this.fonts = this.fonts || {};
        var fontcopy = {
                w: font.w,
                face: {},
                glyphs: {}
            },
            family = font.face["font-family"];
        for (var prop in font.face) if (font.face[has](prop)) {
            fontcopy.face[prop] = font.face[prop];
        }
        if (this.fonts[family]) {
            this.fonts[family][push](fontcopy);
        } else {
            this.fonts[family] = [fontcopy];
        }
        if (!font.svg) {
            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
            for (var glyph in font.glyphs) if (font.glyphs[has](glyph)) {
                var path = font.glyphs[glyph];
                fontcopy.glyphs[glyph] = {
                    w: path.w,
                    k: {},
                    d: path.d && "M" + path.d[rp](/[mlcxtrv]/g, function (command) {
                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[command] || "M";
                        }) + "z"
                };
                if (path.k) {
                    for (var k in path.k) if (path[has](k)) {
                        fontcopy.glyphs[glyph].k[k] = path.k[k];
                    }
                }
            }
        }
        return font;
    };
    paperproto.getFont = function (family, weight, style, stretch) {
        stretch = stretch || "normal";
        style = style || "normal";
        weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;
        if (!R.fonts) {
            return;
        }
        var font = R.fonts[family];
        if (!font) {
            var name = new RegExp("(^|\\s)" + family[rp](/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
            for (var fontName in R.fonts) if (R.fonts[has](fontName)) {
                if (name.test(fontName)) {
                    font = R.fonts[fontName];
                    break;
                }
            }
        }
        var thefont;
        if (font) {
            for (var i = 0, ii = font[length]; i < ii; i++) {
                thefont = font[i];
                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
                    break;
                }
            }
        }
        return thefont;
    };
    paperproto.print = function (x, y, string, font, size, origin, letter_spacing) {
        origin = origin || "middle"; // baseline|middle
        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
        var out = this.set(),
            letters = Str(string)[split](E),
            shift = 0,
            path = E,
            scale;
        R.is(font, string) && (font = this.getFont(font));
        if (font) {
            scale = (size || 16) / font.face["units-per-em"];
            var bb = font.face.bbox.split(separator),
                top = +bb[0],
                height = +bb[1] + (origin == "baseline" ? bb[3] - bb[1] + (+font.face.descent) : (bb[3] - bb[1]) / 2);
            for (var i = 0, ii = letters[length]; i < ii; i++) {
                var prev = i && font.glyphs[letters[i - 1]] || {},
                    curr = font.glyphs[letters[i]];
                shift += i ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;
                curr && curr.d && out[push](this.path(curr.d).attr({fill: "#000", stroke: "none", translation: [shift, 0]}));
            }
            out.scale(scale, scale, top, height).translate(x - top, y - height);
        }
        return out;
    };

    R.format = function (token, params) {
        var args = R.is(params, array) ? [0][concat](params) : arguments;
        token && R.is(token, string) && args[length] - 1 && (token = token[rp](formatrg, function (str, i) {
            return args[++i] == null ? E : args[i];
        }));
        return token || E;
    };
    R.ninja = function () {
        oldRaphael.was ? (win.Raphael = oldRaphael.is) : delete Raphael;
        return R;
    };
    R.el = elproto;
    R.st = Set[proto];

    oldRaphael.was ? (win.Raphael = R) : (Raphael = R);
})();


/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
		 * Build: http://www.modernizr.com/download/#-csstransitions-touch-iepp-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
		 */
		;window.Modernizr=function(a,b,c){function C(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return B(d,b)}function B(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function A(a,b){return!!~(""+a).indexOf(b)}function z(a,b){return typeof a===b}function y(a,b){return x(n.join(a+";")+(b||""))}function x(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u,v={}.hasOwnProperty,w;!z(v,c)&&!z(v.call,c)?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],c)};var D=function(c,d){var f=c.join(""),g=d.length;t(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9},g,d)}([,["@media (",n.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);p.touch=function(){return e.touch},p.csstransitions=function(){return C("transitionProperty")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));x(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=n,e._domPrefixes=o,e.testProp=function(a){return B([a])},e.testAllProps=C,e.testStyles=t,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};                    

(function(){
var $_,$Main,$closure,$estr,js;
$estr = function() { return js.Boot.__string_rec(this,''); }
var periscopic = periscopic || {};
if(!periscopic.utils) periscopic.utils = {}
periscopic.utils.Arrays = function() { }
periscopic.utils.Arrays.__name__ = ["periscopic","utils","Arrays"];
periscopic.utils.Arrays.unique = function(a) {
	var out = [];
	var _g = 0;
	while(_g < a.length) {
		var val = a[_g];
		++_g;
		if(Lambda.indexOf(out,val) == -1) out[out.length] = val;
	}
	return out;
}
periscopic.utils.Arrays.intersect = function(a,b) {
	var out = [];
	var _g = 0;
	while(_g < a.length) {
		var val = a[_g];
		++_g;
		if(Lambda.indexOf(b,val) > -1) out[out.length] = val;
	}
	return out;
}
periscopic.utils.Arrays.slicePeriodic = function(from,offset,sampleSize,period,samples) {
	if(samples == null) samples = 0;
	var out = [];
	var i = offset;
	var slices = Math.ceil((from.length - offset) / period);
	slices = samples < 1 || samples > slices?slices:samples;
	var _g = 0;
	while(_g < slices) {
		var j = _g++;
		var _g1 = 0;
		while(_g1 < sampleSize) {
			var k = _g1++;
			out[out.length] = from[i++];
		}
		i = offset + j * period;
	}
	return out;
}
periscopic.utils.Arrays.prototype.__class__ = periscopic.utils.Arrays;
var politi = politi || {};
if(!politi.view) politi.view = {}
politi.view.Node = function(text,cssClass) {
	if( text === $_ ) return;
	this.cssBase = cssClass != null?cssClass:"node";
	this.tf = js.Lib.document.createElement("div");
	this.tf.style.cursor = "pointer";
	this.tf.className = this.cssBase;
	this.tf.innerHTML = text;
	this.connectionFlag = 0;
	this.pinned = false;
	politi.view.VizView.text_layer.appendChild(this.tf);
	this.bounds = new periscopic.geom.Rectangle();
	this.position();
}
politi.view.Node.__name__ = ["politi","view","Node"];
politi.view.Node.prototype.tf = null;
politi.view.Node.prototype.bounds = null;
politi.view.Node.prototype.cssDel = null;
politi.view.Node.prototype.cssBase = null;
politi.view.Node.prototype.pinned = null;
politi.view.Node.prototype.connectionFlag = null;
politi.view.Node.prototype.wraps = null;
politi.view.Node.prototype.position = function() {
}
politi.view.Node.prototype.destroy = function() {
	politi.view.VizView.text_layer.removeChild(this.tf);
	this.tf = null;
	this.bounds = null;
}
politi.view.Node.prototype.updateBounds = function() {
	this.bounds.y = this.tf.offsetTop;
	this.bounds.x = this.tf.offsetLeft;
	this.bounds.width = this.tf.clientWidth;
	this.bounds.height = this.tf.clientHeight;
}
politi.view.Node.prototype.getHeight = function() {
	return this.tf.clientHeight;
}
politi.view.Node.prototype.getWidth = function() {
	return this.tf.clientWidth;
}
politi.view.Node.prototype.handleUnpinned = function() {
	this.pinned = false;
}
politi.view.Node.prototype.setCss = function(cssClass,color,delayMS) {
	if(delayMS == null) delayMS = 0;
	if(this.cssDel != null) {
		periscopic.utils.GlobalTimer.clearTimeout(this.cssDel);
		this.cssDel = null;
	}
	if(delayMS > 0) {
		this.cssDel = periscopic.utils.GlobalTimer.setTimeout($closure(this,"setCss"),delayMS,[cssClass,color,0]);
		return;
	}
	if(cssClass != null) this.tf.className = this.cssBase + " " + cssClass;
	this.tf.style.color = color == null?"":color;
}
politi.view.Node.prototype.__class__ = politi.view.Node;
politi.view.CandidateNode = function(text,y,index) {
	if( text === $_ ) return;
	this.era = politi.view.VizView.dataEra;
	this.midY = y;
	this.idx = index;
	politi.view.Node.call(this,text);
	this.tf.onmouseover = $closure(this,"handleOver");
	this.tf.onmouseout = $closure(this,"handleOut");
	this.tf.onclick = $closure(this,"handleClick");
}
politi.view.CandidateNode.__name__ = ["politi","view","CandidateNode"];
politi.view.CandidateNode.__super__ = politi.view.Node;
for(var k in politi.view.Node.prototype ) politi.view.CandidateNode.prototype[k] = politi.view.Node.prototype[k];
politi.view.CandidateNode.prototype.midY = null;
politi.view.CandidateNode.prototype.idx = null;
politi.view.CandidateNode.prototype.era = null;
politi.view.CandidateNode.prototype.handleOver = function(e) {
	if(this.era == politi.view.VizView.dataEra) politi.model.Filter.getInstance().overCand(this.idx);
}
politi.view.CandidateNode.prototype.handleOut = function(e) {
	if(this.era == politi.view.VizView.dataEra) politi.model.Filter.getInstance().outCand(this.idx);
}
politi.view.CandidateNode.prototype.handleClick = function(e) {
	if(this.era == politi.view.VizView.dataEra) {
		if(this.pinned) {
			this.pinned = false;
			politi.model.Filter.getInstance().unpin();
		} else {
			this.pinned = true;
			politi.model.Filter.getInstance().pinCand(this.idx,$closure(this,"handleUnpinned"));
		}
	}
}
politi.view.CandidateNode.prototype.position = function() {
	this.bounds.y = this.midY - Std["int"](this.tf.clientHeight * 0.5);
	this.bounds.x = 572;
	this.bounds.width = this.tf.clientWidth;
	this.bounds.height = this.tf.clientHeight;
	this.tf.style.top = this.bounds.get_top() + "px";
	this.tf.style.left = this.bounds.x + "px";
}
politi.view.CandidateNode.prototype.__class__ = politi.view.CandidateNode;
if(!politi.control) politi.control = {}
politi.control.MainController = function(p) {
	if( p !== $_ ) 
	politi.view.MenuView.getInstance();
	var dc = politi.model.DebateCategories.getInstance();
	dc.load();
	this.meta = new politi.view.MetaView();
}
politi.control.MainController.__name__ = ["politi","control","MainController"];
politi.control.MainController._instance = null;
politi.control.MainController.getInstance = function() {
	if(politi.control.MainController._instance == null) politi.control.MainController._instance = new politi.control.MainController();
	return politi.control.MainController._instance;
}
politi.control.MainController.prototype.meta = null;
politi.control.MainController.prototype.__class__ = politi.control.MainController;
if(typeof haxe=='undefined') haxe = {}
haxe.Http = function(url) {
	if( url === $_ ) return;
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
	h.request(false);
	return r;
}
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
	var me = this;
	var r = new js.XMLHttpRequest();
	var onreadystatechange = function() {
		if(r.readyState != 4) return;
		var s = (function($this) {
			var $r;
			try {
				$r = r.status;
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(s == undefined) s = null;
		if(s != null) me.onStatus(s);
		if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
		case null: case undefined:
			me.onError("Failed to connect or resolve host");
			break;
		case 12029:
			me.onError("Failed to connect to host");
			break;
		case 12007:
			me.onError("Unknown host");
			break;
		default:
			me.onError("Http Error #" + r.status);
		}
	};
	if(this.async) r.onreadystatechange = onreadystatechange;
	var uri = this.postData;
	if(uri != null) 
		post = true;
	else {
		var $it0 = this.params.keys();
		while( $it0.hasNext() ) {
			var p = $it0.next();
			if(uri == null) uri = ""; else uri += "&";
			uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
		}
	}
	try {
		if(post) 
			r.open("POST",this.url,this.async); 
		else if(uri != null) {
			var question = this.url.split("?").length <= 1;
			r.open("GET",this.url + (question?"?":"&") + uri,this.async);
			uri = null;
		} else r.open("GET",this.url,this.async);
	} catch( e ) {
		this.onError(e.toString());
		return;
	}
	if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $it1 = this.headers.keys();
	while( $it1.hasNext() ) {
		var h = $it1.next();
		r.setRequestHeader(h,this.headers.get(h));
	}
	r.send(uri);
	if(!this.async) onreadystatechange();
}
haxe.Http.prototype.onData = function(data) {
}
haxe.Http.prototype.onError = function(msg) {
}
haxe.Http.prototype.onStatus = function(status) {
}
haxe.Http.prototype.__class__ = haxe.Http;
politi.view.CandidatePlot = function(x,y,totalSentences) {
	if( x === $_ ) return;
	this._pt = { x : x, y : y};
	this._sentencesPerStep = totalSentences / 60;
	this._pixelsPerSentence = 20 / this._sentencesPerStep;
	this._underlays = [];
	var _g = 0;
	while(_g < 60) {
		var i = _g++;
		this._underlays[i] = politi.view.VizView.vector_layer.rect(0,0,0,0);
	}
	this._baseline = politi.view.VizView.vector_layer.rect(this._pt.x,this._pt.y + 1,119,1);
	this._baseline.attr({ fill : "#E5E5E5", stroke : "none"});
	this._help = new js.JQuery("<div></div>").addClass("helpBtn").appendTo(new js.JQuery(politi.view.VizView.text_layer));
	this._help.css({ left : this._pt.x + 120 + 5, top : this._pt.y - 12, cursor : "pointer"});
	this._help.mouseover($closure(this,"overHelp")).mouseout($closure(this,"outHelp"));
}
politi.view.CandidatePlot.__name__ = ["politi","view","CandidatePlot"];
politi.view.CandidatePlot.sortIndex = function(a,b) {
	return a.index > b.index?1:-1;
}
politi.view.CandidatePlot.prototype._underlays = null;
politi.view.CandidatePlot.prototype._overlays = null;
politi.view.CandidatePlot.prototype._pt = null;
politi.view.CandidatePlot.prototype._sentencesPerStep = null;
politi.view.CandidatePlot.prototype._pixelsPerSentence = null;
politi.view.CandidatePlot.prototype._baseline = null;
politi.view.CandidatePlot.prototype._help = null;
politi.view.CandidatePlot.prototype._helpTip = null;
politi.view.CandidatePlot.prototype.overHelp = function(e) {
	this._helpTip = new politi.view.CandidatePlotTooltip(this._help.get()[0]);
}
politi.view.CandidatePlot.prototype.outHelp = function(e) {
	this._helpTip.remove();
	this._helpTip = null;
}
politi.view.CandidatePlot.prototype.setPrimaryUses = function(uses) {
	var sents = politi.model.DebateData.sentencesIn(uses);
	sents.sort(politi.view.CandidatePlot.sortIndex);
	var count;
	var idx = 0;
	var maxSentence;
	var numSents = sents.length;
	var rect;
	var ht;
	var _g = 0;
	while(_g < 60) {
		var step = _g++;
		maxSentence = (step + 1) * this._sentencesPerStep;
		count = 0;
		while(idx < numSents && sents[idx].index < maxSentence) {
			count++;
			idx++;
		}
		rect = this._underlays[step];
		ht = Math.ceil(count * this._pixelsPerSentence);
		rect.attr({ stroke : "none", fill : "#4B4B4B", x : this._pt.x + step * 2, y : this._pt.y - ht, width : 1, height : ht});
	}
	return this;
}
politi.view.CandidatePlot.prototype.setActiveUses = function(uses) {
	if(uses == null) {
		var _g = 0, _g1 = this._underlays;
		while(_g < _g1.length) {
			var rect = _g1[_g];
			++_g;
			rect.animate({ fill : "#4B4B4B"},350,">");
		}
	} else {
		var sents = politi.model.DebateData.sentencesIn(uses);
		sents.sort(politi.view.CandidatePlot.sortIndex);
		var found;
		var idx = 0;
		var maxSentence;
		var numSents = sents.length;
		var rect;
		var ht;
		var _g = 0;
		while(_g < 60) {
			var step = _g++;
			maxSentence = (step + 1) * this._sentencesPerStep;
			found = false;
			while(idx < numSents && sents[idx].index < maxSentence) {
				found = true;
				idx++;
			}
			rect = this._underlays[step];
			rect.animate({ fill : found?"#4B4B4B":"#D0D0D0"},350,">");
		}
	}
}
politi.view.CandidatePlot.prototype.destroy = function() {
	var _g = 0, _g1 = this._underlays;
	while(_g < _g1.length) {
		var rect = _g1[_g];
		++_g;
		rect.remove();
	}
	this._baseline.remove();
	this._help.remove();
	this._underlays = this._overlays = null;
	this._baseline = null;
	this._help = null;
}
politi.view.CandidatePlot.prototype.__class__ = politi.view.CandidatePlot;
if(!periscopic.events) periscopic.events = {}
periscopic.events.Listener = function(inListener,inUseCapture,inPriority) {
	if( inListener === $_ ) return;
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = periscopic.events.Listener.sIDs++;
}
periscopic.events.Listener.__name__ = ["periscopic","events","Listener"];
periscopic.events.Listener.prototype.mListner = null;
periscopic.events.Listener.prototype.mUseCapture = null;
periscopic.events.Listener.prototype.mPriority = null;
periscopic.events.Listener.prototype.mID = null;
periscopic.events.Listener.prototype.Is = function(inListener,inCapture) {
	return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
}
periscopic.events.Listener.prototype.dispatchEvent = function(event) {
	this.mListner(event);
}
periscopic.events.Listener.prototype.__class__ = periscopic.events.Listener;
periscopic.events.IEventDispatcher = function() { }
periscopic.events.IEventDispatcher.__name__ = ["periscopic","events","IEventDispatcher"];
periscopic.events.IEventDispatcher.prototype.addEventListener = null;
periscopic.events.IEventDispatcher.prototype.dispatchEvent = null;
periscopic.events.IEventDispatcher.prototype.hasEventListener = null;
periscopic.events.IEventDispatcher.prototype.removeEventListener = null;
periscopic.events.IEventDispatcher.prototype.willTrigger = null;
periscopic.events.IEventDispatcher.prototype.__class__ = periscopic.events.IEventDispatcher;
periscopic.events.EventDispatcher = function(target) {
	if( target === $_ ) return;
	if(this.mTarget != null) this.mTarget = target; else this.mTarget = this;
	this.mEventMap = new Hash();
}
periscopic.events.EventDispatcher.__name__ = ["periscopic","events","EventDispatcher"];
periscopic.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
periscopic.events.EventDispatcher.prototype.mTarget = null;
periscopic.events.EventDispatcher.prototype.mEventMap = null;
periscopic.events.EventDispatcher.prototype.addEventListener = function(type,inListener,useCapture,inPriority,useWeakReference) {
	var capture = useCapture == null?false:useCapture;
	var priority = inPriority == null?0:inPriority;
	var list = this.mEventMap.get(type);
	if(list == null) {
		list = new Array();
		this.mEventMap.set(type,list);
	}
	var l = new periscopic.events.Listener(inListener,capture,priority);
	list.push(l);
}
periscopic.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if(event.target == null) event.target = this.mTarget;
	var list = this.mEventMap.get(event.type);
	var capture = event.eventPhase == periscopic.events.EventPhase.CAPTURING_PHASE;
	if(list != null) {
		list.sort(periscopic.events.EventDispatcher.compareListeners);
		var idx = 0;
		while(idx < list.length) {
			var listener = list[idx];
			if(listener.mUseCapture == capture) {
				listener.dispatchEvent(event);
				if(event.jeashGetIsCancelledNow()) return true;
			}
			if(idx < list.length && listener != list[idx]) {
			} else idx++;
		}
		return true;
	}
	return false;
}
periscopic.events.EventDispatcher.prototype.dispatchId = function(id) {
	return this.dispatchEvent(new periscopic.events.Event(id));
}
periscopic.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.mEventMap.exists(type) && this.mEventMap.get(type).length > 0;
}
periscopic.events.EventDispatcher.prototype.removeEventListener = function(type,listener,inCapture) {
	if(!this.mEventMap.exists(type)) return;
	var list = this.mEventMap.get(type);
	var capture = inCapture == null?false:inCapture;
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].Is(listener,capture)) {
			list.splice(i,1);
			return;
		}
	}
}
periscopic.events.EventDispatcher.prototype.toString = function() {
	return "[ " + Type.getClassName(Type.getClass(this)) + " ]";
}
periscopic.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.hasEventListener(type);
}
periscopic.events.EventDispatcher.prototype.RemoveByID = function(inType,inID) {
	if(!this.mEventMap.exists(inType)) return;
	var list = this.mEventMap.get(inType);
	var _g1 = 0, _g = list.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(list[i].mID == inID) {
			list.splice(i,1);
			return;
		}
	}
}
periscopic.events.EventDispatcher.prototype.DumpListeners = function() {
	haxe.Log.trace(this.mEventMap,{ fileName : "EventDispatcher.hx", lineNumber : 171, className : "periscopic.events.EventDispatcher", methodName : "DumpListeners"});
}
periscopic.events.EventDispatcher.prototype.__class__ = periscopic.events.EventDispatcher;
periscopic.events.EventDispatcher.__interfaces__ = [periscopic.events.IEventDispatcher];
List = function(p) {
	if( p !== $_ ) 
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
politi.view.VizView = function(p) {
	if( p !== $_ ) 
	politi.view.VizView.partyColors = new Hash();
	politi.view.VizView.partyColors.set("DEMOCRAT","#186e99");
	politi.view.VizView.partyColors.set("REPUBLICAN","#a13413");
	politi.view.VizView.vector_layer = new Raphael(js.Lib.document.getElementById("vector_layer"));
	politi.view.VizView.text_layer = js.Lib.document.getElementById("text_layer");
	this.filter = politi.model.Filter.getInstance().init($closure(this,"update"));
	this.threadsMtx01 = [];
	this.threadsMtx12 = [];
	this.beadRw = [];
	this.used = false;
}
politi.view.VizView.__name__ = ["politi","view","VizView"];
politi.view.VizView._instance = null;
politi.view.VizView.getInstance = function() {
	if(politi.view.VizView._instance == null) politi.view.VizView._instance = new politi.view.VizView();
	return politi.view.VizView._instance;
}
politi.view.VizView.vector_layer = null;
politi.view.VizView.text_layer = null;
politi.view.VizView.partyColors = null;
politi.view.VizView.dataEra = null;
politi.view.VizView.prototype.candColors = null;
politi.view.VizView.prototype.candNodes = null;
politi.view.VizView.prototype.wordNodes = null;
politi.view.VizView.prototype.issueNodes = null;
politi.view.VizView.prototype.candPlots = null;
politi.view.VizView.prototype.filter = null;
politi.view.VizView.prototype.prevData = null;
politi.view.VizView.prototype.threadsMtx01 = null;
politi.view.VizView.prototype.threadsMtx12 = null;
politi.view.VizView.prototype.beadRw = null;
politi.view.VizView.prototype.beadOne = null;
politi.view.VizView.prototype.used = null;
politi.view.VizView.prototype.debateData = null;
politi.view.VizView.prototype.update = function(data,animateRecycle) {
	if(animateRecycle == null) animateRecycle = true;
	var fresh;
	if(this.prevData != null && (data == null || this.prevData.focus != data.focus || this.prevData.select != data.select)) {
		politi.view.Thread.recycleAll(animateRecycle);
		politi.view.Bead.recycleAll(animateRecycle);
		if(this.beadOne != null) this.beadOne.recycle(animateRecycle);
		this.threadsMtx01 = [];
		this.threadsMtx12 = [];
		this.beadRw = [];
		this.beadOne = null;
		fresh = true;
	} else fresh = false;
	this.prevData = data;
	if(data == null || fresh) {
		var _g = 0, _g1 = this.issueNodes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.setCss("node_disconnect",null);
			i.connectionFlag = 0;
		}
		var _g = 0, _g1 = this.wordNodes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.setWordUses(null);
			i.setCss("node_disconnect",null);
		}
		var _g = 0, _g1 = this.candNodes;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.setCss("node_disconnect",null);
			i.connectionFlag = 0;
		}
		var _g = 0, _g1 = this.candPlots;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			i.setActiveUses(null);
		}
		if(data == null) return;
	}
	var thread;
	var bead;
	var k;
	var len0 = data.len0;
	var len1 = data.len1;
	var len2 = data.len2;
	var data01 = data.data01;
	var data12 = data.data12;
	var bead0 = data.bead0;
	var bead1 = data.bead1;
	var bead2 = data.bead2;
	var maxAlpha = data.controls > 1 || data.pinned > -1?1:0.2;
	var bead1Data = data.bead1Data;
	var bead2Data = data.bead2Data;
	var _g = 0;
	while(_g < len2) {
		var i = _g++;
		var val = bead2Data[i];
		val = val == null?[]:val;
		this.candPlots[i].setActiveUses(val);
	}
	if(data.focus == 0 || data.focus == 2) {
		if(data.focus == 0) {
			var _g = 0;
			while(_g < len0) {
				var i = _g++;
				var _g1 = 0;
				while(_g1 < len1) {
					var j = _g1++;
					k = i * len1 + j;
					thread = this.threadsMtx01[k];
					if(data01[k] > 0) {
						if(thread == null) {
							this.threadsMtx01[k] = thread = politi.view.Thread.procure();
							thread.setNodes(this.issueNodes[i],this.wordNodes[j],"#666666",data01[k] < 2?0.15:maxAlpha,true);
						} else thread.setOpacity(data01[k] < 2?0.15:maxAlpha);
					} else if(thread != null) {
						politi.view.Thread.recycle(thread,animateRecycle);
						this.threadsMtx01[k] = null;
					}
				}
			}
			var _g = 0;
			while(_g < len1) {
				var i = _g++;
				var _g1 = 0;
				while(_g1 < len2) {
					var j = _g1++;
					k = i * len2 + j;
					thread = this.threadsMtx12[k];
					if(data12[k] > 0) {
						if(thread == null) {
							this.threadsMtx12[k] = thread = politi.view.Thread.procure();
							thread.setNodes(this.wordNodes[i],this.candNodes[j],this.candColors[j % this.candColors.length],data12[k] < 2?0.15:maxAlpha,true,200);
						} else thread.setOpacity(data12[k] < 2?0.15:maxAlpha);
					} else if(thread != null) {
						politi.view.Thread.recycle(thread,animateRecycle);
						this.threadsMtx12[k] = null;
					}
				}
			}
			var _g = 0;
			while(_g < len2) {
				var i = _g++;
				var node = this.candNodes[i];
				if(bead2[i] > 0) {
					var alpha = bead2[i] < 2?0.15:maxAlpha;
					alpha = (3 * alpha + 1) / 4;
					var col = this.candColors[i % this.candColors.length];
					if(alpha < 1) col = "#" + StringTools.hex(periscopic.utils.ColorTool.interpolate(16579836,Std.parseInt(StringTools.replace(col,"#","0x")),alpha));
					node.setCss("candidate_connect",col,node.connectionFlag == 0?400:0);
					node.connectionFlag = 1;
				} else {
					this.candNodes[i].setCss("node_disconnect",null,0);
					node.connectionFlag = 0;
				}
			}
			if(this.beadOne == null) {
				this.beadOne = politi.view.KeyBead.getInstance();
				var node = this.issueNodes[data.select];
				var bnds = null;
				if(Modernizr.csstransitions) {
					node.updateBounds();
					bnds = node.bounds.clone();
				}
				if(node.wraps == null) {
					node.setCss("node_select_instant",null,0);
					node.wraps = node.tf.clientWidth > 195?1:0;
					if(node.wraps == 1) {
						node.setCss("node_select_wrap_instant",null,0);
						node.wraps = node.tf.clientWidth > 195?2:1;
					}
					node.setCss("",null,0);
				}
				node.setCss(node.wraps > 0?node.wraps < 2?"node_select_wrap_instant":"node_select_wrap2_instant":"node_select_instant",null,0);
				node.updateBounds();
				this.beadOne.setNode(node,"#969696",data.pinned == 0?1:0.5,0,"#6a6a6a",bnds);
				if(Modernizr.csstransitions) {
					node.setCss("",null,0);
					node.setCss(node.wraps > 0?node.wraps < 2?"node_select_wrap":"node_select_wrap2":"node_select",null,30);
				} else node.setCss(node.wraps > 0?node.wraps < 2?"node_select_wrap":"node_select_wrap2":"node_select",null,0);
			} else this.beadOne.setOpacity(1);
			this.beadOne.setPinState(data.pinned == 0,true,-2);
		} else if(data.focus == 2) {
			var _g = 0;
			while(_g < len1) {
				var i = _g++;
				var _g1 = 0;
				while(_g1 < len2) {
					var j = _g1++;
					k = i * len2 + j;
					thread = this.threadsMtx12[k];
					if(data12[k] > 0) {
						if(thread == null) {
							this.threadsMtx12[k] = thread = politi.view.Thread.procure();
							thread.setNodes(this.wordNodes[i],this.candNodes[j],this.candColors[j % this.candColors.length],data12[k] < 2?0.15:maxAlpha,false);
						} else thread.setOpacity(data12[k] < 2?0.15:maxAlpha);
					} else if(thread != null) {
						politi.view.Thread.recycle(thread,animateRecycle);
						this.threadsMtx12[k] = null;
					}
				}
			}
			var _g = 0;
			while(_g < len0) {
				var i = _g++;
				var _g1 = 0;
				while(_g1 < len1) {
					var j = _g1++;
					k = i * len1 + j;
					thread = this.threadsMtx01[k];
					if(data01[k] > 0) {
						if(thread == null) {
							this.threadsMtx01[k] = thread = politi.view.Thread.procure();
							thread.setNodes(this.issueNodes[i],this.wordNodes[j],["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"][j % ["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"].length],data01[k] < 2?0.15:maxAlpha,false,200);
						} else thread.setOpacity(data01[k] < 2?0.15:maxAlpha);
					} else if(thread != null) {
						politi.view.Thread.recycle(thread,animateRecycle);
						this.threadsMtx01[k] = null;
					}
				}
			}
			var _g = 0;
			while(_g < len0) {
				var i = _g++;
				var node = this.issueNodes[i];
				if(bead0[i] > 0) {
					var alpha = bead0[i] < 2?0.15:maxAlpha;
					alpha = (3 * alpha + 1) / 4;
					var col = "#4A4A4A";
					if(alpha < 1) col = "#" + StringTools.hex(periscopic.utils.ColorTool.interpolate(16579836,Std.parseInt(StringTools.replace(col,"#","0x")),alpha));
					if(node.wraps == null) {
						node.setCss("issue_connect_instant",null,0);
						node.wraps = node.tf.clientWidth > 195?1:0;
						if(node.wraps == 1) {
							node.setCss("issue_connect_wrap_instant",null,0);
							node.wraps = node.tf.clientWidth > 195?2:1;
						}
						node.setCss("",null,0);
					}
					node.setCss(node.wraps > 0?node.wraps < 2?"issue_connect_wrap":"issue_connect_wrap2":"issue_connect",col,node.connectionFlag == 0?400:0);
					node.connectionFlag = 1;
				} else {
					node.setCss("node_disconnect",null,0);
					node.connectionFlag = 0;
				}
			}
			if(this.beadOne == null) {
				this.beadOne = politi.view.KeyBead.getInstance();
				var node = this.candNodes[data.select];
				var bnds = null;
				if(Modernizr.csstransitions) {
					node.updateBounds();
					bnds = node.bounds.clone();
				}
				node.setCss("node_select_instant",null,0);
				node.updateBounds();
				this.beadOne.setNode(node,"#969696",data.pinned == 0?1:0.7,0,this.candColors[data.select % this.candColors.length],bnds);
				if(Modernizr.csstransitions) {
					node.setCss("",null,0);
					node.setCss("node_select pin_issue",null,30);
				} else node.setCss("node_select pin_issue",null,0);
			} else this.beadOne.setOpacity(1);
			this.beadOne.setPinState(data.pinned == 2,false,-12);
		}
		var cols = data.focus == 0?["#6A6A6A"]:["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"];
		var _g = 0;
		while(_g < len1) {
			var i = _g++;
			bead = this.beadRw[i];
			if(bead1[i] > 0) {
				this.wordNodes[i].setWordUses(bead1Data[i]);
				if(bead == null) {
					this.beadRw[i] = bead = politi.view.Bead.procure();
					bead.setNode(this.wordNodes[i],cols[i % cols.length],bead1[i] < 2?0.15:0.45,0);
					this.wordNodes[i].setCss("word_connect",null,0);
				} else bead.setOpacity(bead1[i] < 2?0.15:maxAlpha);
			} else if(bead != null) {
				politi.view.Bead.recycle(bead,animateRecycle);
				this.beadRw[i] = null;
			}
		}
	} else if(data.focus == 1) {
		var k1 = 0;
		var candStart = -(len2 - 1) * 0.5;
		var candStep = 10;
		var _g = 0;
		while(_g < len0) {
			var h = _g++;
			var _g1 = 0;
			while(_g1 < len1) {
				var i = _g1++;
				var _g2 = 0;
				while(_g2 < len2) {
					var j = _g2++;
					thread = this.threadsMtx01[k1];
					if(data01[k1] > 0) {
						if(thread == null) {
							this.threadsMtx01[k1] = thread = politi.view.Thread.procure();
							thread.setNodes(this.issueNodes[h],this.wordNodes[i],this.candColors[j % this.candColors.length],data01[k1] < 2?0.15:maxAlpha,false,null,(candStart + j) * candStep);
						} else thread.setOpacity(data01[k1] < 2?0.15:maxAlpha);
					} else if(thread != null) {
						politi.view.Thread.recycle(thread,animateRecycle);
						this.threadsMtx01[k1] = null;
					}
					k1++;
				}
			}
		}
		k1 = 0;
		var _g = 0;
		while(_g < len1) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < len2) {
				var j = _g1++;
				k1 = i * len2 + j;
				thread = this.threadsMtx12[k1];
				if(data12[k1] > 0) {
					if(thread == null) {
						this.threadsMtx12[k1] = thread = politi.view.Thread.procure();
						thread.setNodes(this.wordNodes[i],this.candNodes[j],this.candColors[j % this.candColors.length],data12[k1] < 2?0.15:maxAlpha,true);
					} else thread.setOpacity(data12[k1] < 2?0.15:maxAlpha);
				} else if(thread != null) {
					politi.view.Thread.recycle(thread,animateRecycle);
					this.threadsMtx12[k1] = null;
				}
			}
		}
		this.wordNodes[data.select].setWordUses(bead1Data[data.select]);
		if(this.beadOne == null) {
			this.beadOne = politi.view.KeyBead.getInstance();
			var node = this.wordNodes[data.select];
			node.setCss("word_select",null,0);
			this.beadOne.setNode(node,"#969696",data.pinned == 0?1:0.7,0,["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"][data.select % ["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"].length]);
		} else this.beadOne.setOpacity(1);
		this.beadOne.setPinState(data.pinned == 1,true,-2);
		var _g = 0;
		while(_g < len0) {
			var i = _g++;
			var node = this.issueNodes[i];
			if(bead0[i] > 0) {
				var alpha = bead0[i] < 2?0.15:maxAlpha;
				alpha = (3 * alpha + 1) / 4;
				var col = "#4A4A4A";
				if(alpha < 1) col = "#" + StringTools.hex(periscopic.utils.ColorTool.interpolate(16579836,Std.parseInt(StringTools.replace(col,"#","0x")),alpha));
				if(node.wraps == null) {
					node.setCss("issue_connect_instant",null,0);
					node.wraps = node.tf.clientWidth > 195?1:0;
					if(node.wraps == 1) {
						node.setCss("issue_connect_wrap_instant",null,0);
						node.wraps = node.tf.clientWidth > 195?2:1;
					}
					node.setCss("",null,0);
				}
				node.setCss(node.wraps > 0?node.wraps < 2?"issue_connect_wrap":"issue_connect_wrap2":"issue_connect",col,node.connectionFlag == 0?150:0);
				node.connectionFlag = 1;
			} else {
				node.setCss("node_disconnect",null,0);
				node.connectionFlag = 0;
			}
		}
		var _g = 0;
		while(_g < len2) {
			var i = _g++;
			var node = this.candNodes[i];
			if(bead2[i] > 0) {
				var alpha = bead2[i] < 2?0.15:maxAlpha;
				alpha = (3 * alpha + 1) / 4;
				var col = this.candColors[i % this.candColors.length];
				if(alpha < 1) col = "#" + StringTools.hex(periscopic.utils.ColorTool.interpolate(16579836,Std.parseInt(StringTools.replace(col,"#","0x")),alpha));
				node.setCss("candidate_connect",col,node.connectionFlag == 0?150:0);
				node.connectionFlag = 1;
			} else {
				this.candNodes[i].setCss("node_disconnect",null,0);
				node.connectionFlag = 0;
			}
		}
	}
}
politi.view.VizView.prototype.setData = function(data) {
	if(this.used) {
		politi.view.VizView.dataEra++;
		js.Lib.document.getElementById("vector_layer").className = "shell";
		js.Lib.document.getElementById("text_shell").className = "shell";
		periscopic.utils.GlobalTimer.setTimeout($closure(this,"applyData"),300,[data]);
	} else {
		politi.view.VizView.dataEra = 0;
		this.applyData(data);
	}
	this.debateData = data;
}
politi.view.VizView.prototype.applyData = function(data) {
	if(this.used) {
		politi.model.Filter.getInstance().unpin(false);
		this.update(null,false);
		var _g = 0, _g1 = this.issueNodes;
		while(_g < _g1.length) {
			var nd = _g1[_g];
			++_g;
			nd.destroy();
		}
		var _g = 0, _g1 = this.wordNodes;
		while(_g < _g1.length) {
			var nd = _g1[_g];
			++_g;
			nd.destroy();
		}
		var _g = 0, _g1 = this.candNodes;
		while(_g < _g1.length) {
			var nd = _g1[_g];
			++_g;
			nd.destroy();
		}
		var _g = 0, _g1 = this.candPlots;
		while(_g < _g1.length) {
			var pl = _g1[_g];
			++_g;
			pl.destroy();
		}
	}
	js.Lib.document.getElementById("vector_layer").className = "shell opaque";
	js.Lib.document.getElementById("text_shell").className = "shell opaque";
	this.used = true;
	var issues = data.getIssues();
	var words = data.getWords();
	var cands = data.getCandidates();
	var cand;
	var off;
	var step;
	this.candColors = ["#946d10","#0e948f","#94125b","#6fa20c","#a22713","#09a1da","#880cb6"].slice(0);
	this.issueNodes = [];
	step = 788 / (issues.length + 1);
	off = Std["int"](step) + 4;
	var _g1 = 0, _g = issues.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.issueNodes[i] = new politi.view.IssueNode(issues[i].issue,Std["int"](i * step) + off,i);
	}
	this.wordNodes = [];
	step = 788 / (words.length + 1);
	off = Std["int"](step) + 4;
	var _g1 = 0, _g = words.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.wordNodes[i] = new politi.view.WordNode(words[i],Std["int"](i * step) + off,i);
	}
	this.candPlots = [];
	this.candNodes = [];
	step = 788 / (cands.length + 1);
	off = Std["int"](step) + 4;
	var _g1 = 0, _g = cands.length;
	while(_g1 < _g) {
		var i = _g1++;
		cand = cands[i];
		if(cand.party != null) {
			var party = StringTools.trim(cand.party.toUpperCase());
			if(politi.view.VizView.partyColors.exists(party)) this.candColors[i] = politi.view.VizView.partyColors.get(party);
		}
		this.candPlots[i] = new politi.view.CandidatePlot(587,Std["int"](i * step) + off - 21,data.totalSentences).setPrimaryUses(politi.model.DebateData.usesInDebater(cands[i]));
		this.candNodes[i] = new politi.view.CandidateNode(cands[i].name,Std["int"](i * step) + off,i);
	}
}
politi.view.VizView.prototype.__class__ = politi.view.VizView;
periscopic.events.Event = function(inType,inBubbles,inCancelable) {
	if( inType === $_ ) return;
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = periscopic.events.EventPhase.AT_TARGET;
}
periscopic.events.Event.__name__ = ["periscopic","events","Event"];
periscopic.events.Event.prototype.bubbles = null;
periscopic.events.Event.prototype.cancelable = null;
periscopic.events.Event.prototype.eventPhase = null;
periscopic.events.Event.prototype.target = null;
periscopic.events.Event.prototype.currentTarget = null;
periscopic.events.Event.prototype.type = null;
periscopic.events.Event.prototype.data = null;
periscopic.events.Event.prototype.jeashIsCancelled = null;
periscopic.events.Event.prototype.jeashIsCancelledNow = null;
periscopic.events.Event.prototype.jeashSetPhase = function(phase) {
	this.eventPhase = phase;
}
periscopic.events.Event.prototype.jeashGetIsCancelled = function() {
	return this.jeashIsCancelled;
}
periscopic.events.Event.prototype.jeashGetIsCancelledNow = function() {
	return this.jeashIsCancelledNow;
}
periscopic.events.Event.prototype.clone = function() {
	return new periscopic.events.Event(this.type,this.bubbles,this.cancelable);
}
periscopic.events.Event.prototype.stopImmediatePropagation = function() {
	this.jeashIsCancelledNow = this.jeashIsCancelled = true;
}
periscopic.events.Event.prototype.stopPropagation = function() {
	this.jeashIsCancelled = true;
}
periscopic.events.Event.prototype.toString = function() {
	return "Event";
}
periscopic.events.Event.prototype.__class__ = periscopic.events.Event;
if(!periscopic.geom) periscopic.geom = {}
periscopic.geom.Point = function(inX,inY) {
	if( inX === $_ ) return;
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
}
periscopic.geom.Point.__name__ = ["periscopic","geom","Point"];
periscopic.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
periscopic.geom.Point.interpolate = function(pt1,pt2,f) {
	return new periscopic.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
periscopic.geom.Point.polar = function(len,angle) {
	return new periscopic.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
periscopic.geom.Point.prototype.x = null;
periscopic.geom.Point.prototype.y = null;
periscopic.geom.Point.prototype.add = function(v) {
	return new periscopic.geom.Point(v.x + this.x,v.y + this.y);
}
periscopic.geom.Point.prototype.clone = function() {
	return new periscopic.geom.Point(this.x,this.y);
}
periscopic.geom.Point.prototype.equals = function(toCompare) {
	return toCompare.x == this.x && toCompare.y == this.y;
}
periscopic.geom.Point.prototype.length = null;
periscopic.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}
periscopic.geom.Point.prototype.normalize = function(thickness) {
	if(this.x == 0 && this.y == 0) this.x = thickness; else {
		var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
		this.x *= norm;
		this.y *= norm;
	}
}
periscopic.geom.Point.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
periscopic.geom.Point.prototype.subtract = function(v) {
	return new periscopic.geom.Point(this.x - v.x,this.y - v.y);
}
periscopic.geom.Point.prototype.toString = function() {
	return "(" + this.x + "," + this.y + ")";
}
periscopic.geom.Point.prototype.__class__ = periscopic.geom.Point;
if(!politi.model) politi.model = {}
politi.model.Filter = function(p) {
}
politi.model.Filter.__name__ = ["politi","model","Filter"];
politi.model.Filter._instance = null;
politi.model.Filter.getInstance = function() {
	if(politi.model.Filter._instance == null) politi.model.Filter._instance = new politi.model.Filter();
	return politi.model.Filter._instance;
}
politi.model.Filter.prototype.issue = null;
politi.model.Filter.prototype.word = null;
politi.model.Filter.prototype.candidate = null;
politi.model.Filter.prototype.issueLoose = null;
politi.model.Filter.prototype.wordLoose = null;
politi.model.Filter.prototype.candidateLoose = null;
politi.model.Filter.prototype.pinned = null;
politi.model.Filter.prototype._update = null;
politi.model.Filter.prototype._unpinCallback = null;
politi.model.Filter.prototype.init = function(update) {
	if(this._update != null) throw "Filter has already been inited";
	this.issue = this.word = this.candidate = this.pinned = -1;
	this._update = update;
	return this;
}
politi.model.Filter.prototype.reset = function() {
	this.issue = this.word = this.candidate = this.pinned = -1;
	if(this._unpinCallback != null) {
		this._unpinCallback();
		this._unpinCallback = null;
	}
	this.pinned = this.issue = this.word = this.candidate - 1;
}
politi.model.Filter.prototype.runUpdate = function() {
	if(politi.model.DebateCategories.selected != null) {
		if(this.pinned < 0) this.issueLoose = this.wordLoose = this.candidateLoose = false; else {
			this.issueLoose = this.pinned != 0 && this.issue >= 0;
			this.wordLoose = this.pinned != 1 && this.word >= 0;
			this.candidateLoose = this.pinned != 2 && this.candidate >= 0;
		}
		this._update(politi.model.DebateCategories.selected.render(this),true);
	}
}
politi.model.Filter.prototype.clear = function() {
	this.issue = this.word = this.candidate = this.pinned = -1;
}
politi.model.Filter.prototype.unpin = function(update) {
	if(update == null) update = true;
	if(this.pinned != -1) {
		this.reset();
		if(update) this.runUpdate();
	}
}
politi.model.Filter.prototype.overIssue = function(i) {
	if(this.pinned != 0) {
		this.issue = i;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.outIssue = function(i) {
	if(this.pinned != 0) {
		this.issue = -1;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.pinIssue = function(i,unpinCallback) {
	if(this.pinned != -1) this.reset();
	this.pinned = 0;
	this.issue = i;
	this.runUpdate();
	this._unpinCallback = unpinCallback;
}
politi.model.Filter.prototype.overWord = function(i) {
	if(this.pinned != 1) {
		this.word = i;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.outWord = function(i) {
	if(this.pinned != 1) {
		this.word = -1;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.pinWord = function(i,unpinCallback) {
	if(this.pinned != -1) this.reset();
	this.pinned = 1;
	this.word = i;
	this.runUpdate();
	this._unpinCallback = unpinCallback;
}
politi.model.Filter.prototype.overCand = function(i) {
	if(this.pinned != 2) {
		this.candidate = i;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.outCand = function(i) {
	if(this.pinned != 2) {
		this.candidate = -1;
		this.runUpdate();
	}
}
politi.model.Filter.prototype.pinCand = function(i,unpinCallback) {
	if(this.pinned != -1) this.reset();
	this.pinned = 2;
	this.candidate = i;
	this.runUpdate();
	this._unpinCallback = unpinCallback;
}
politi.model.Filter.prototype.__class__ = politi.model.Filter;
periscopic.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if( inX === $_ ) return;
	this.x = inX == null?0:inX;
	this.y = inY == null?0:inY;
	this.width = inWidth == null?0:inWidth;
	this.height = inHeight == null?0:inHeight;
}
periscopic.geom.Rectangle.__name__ = ["periscopic","geom","Rectangle"];
periscopic.geom.Rectangle.prototype.x = null;
periscopic.geom.Rectangle.prototype.y = null;
periscopic.geom.Rectangle.prototype.width = null;
periscopic.geom.Rectangle.prototype.height = null;
periscopic.geom.Rectangle.prototype.left = null;
periscopic.geom.Rectangle.prototype.get_left = function() {
	return this.x;
}
periscopic.geom.Rectangle.prototype.set_left = function(l) {
	this.width -= l - this.x;
	this.x = l;
	return l;
}
periscopic.geom.Rectangle.prototype.right = null;
periscopic.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
}
periscopic.geom.Rectangle.prototype.set_right = function(r) {
	this.width = r - this.x;
	return r;
}
periscopic.geom.Rectangle.prototype.top = null;
periscopic.geom.Rectangle.prototype.get_top = function() {
	return this.y;
}
periscopic.geom.Rectangle.prototype.set_top = function(t) {
	this.height -= t - this.y;
	this.y = t;
	return t;
}
periscopic.geom.Rectangle.prototype.bottom = null;
periscopic.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
}
periscopic.geom.Rectangle.prototype.set_bottom = function(b) {
	this.height = b - this.y;
	return b;
}
periscopic.geom.Rectangle.prototype.topLeft = null;
periscopic.geom.Rectangle.prototype.get_topLeft = function() {
	return new periscopic.geom.Point(this.x,this.y);
}
periscopic.geom.Rectangle.prototype.set_topLeft = function(p) {
	this.x = p.x;
	this.y = p.y;
	return p.clone();
}
periscopic.geom.Rectangle.prototype.size = null;
periscopic.geom.Rectangle.prototype.get_size = function() {
	return new periscopic.geom.Point(this.width,this.height);
}
periscopic.geom.Rectangle.prototype.set_size = function(p) {
	this.width = p.x;
	this.height = p.y;
	return p.clone();
}
periscopic.geom.Rectangle.prototype.bottomRight = null;
periscopic.geom.Rectangle.prototype.get_bottomRight = function() {
	return new periscopic.geom.Point(this.x + this.width,this.y + this.height);
}
periscopic.geom.Rectangle.prototype.set_bottomRight = function(p) {
	this.width = p.x - this.x;
	this.height = p.y - this.y;
	return p.clone();
}
periscopic.geom.Rectangle.prototype.clone = function() {
	return new periscopic.geom.Rectangle(this.x,this.y,this.width,this.height);
}
periscopic.geom.Rectangle.prototype.contains = function(inX,inY) {
	return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
}
periscopic.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x,point.y);
}
periscopic.geom.Rectangle.prototype.containsRect = function(rect) {
	return this.contains(rect.x,rect.y) && this.containsPoint(rect.get_bottomRight());
}
periscopic.geom.Rectangle.prototype.equals = function(toCompare) {
	return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
}
periscopic.geom.Rectangle.prototype.inflate = function(dx,dy) {
	this.x -= dx;
	this.width += dx * 2;
	this.y -= dy;
	this.height += dy * 2;
}
periscopic.geom.Rectangle.prototype.inflatePoint = function(point) {
	this.inflate(point.x,point.y);
}
periscopic.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return new periscopic.geom.Rectangle();
	var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	if(y1 <= y0) return new periscopic.geom.Rectangle();
	return new periscopic.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
periscopic.geom.Rectangle.prototype.intersects = function(toIntersect) {
	var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
	var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
	if(x1 <= x0) return false;
	var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
	var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
	return y1 > y0;
}
periscopic.geom.Rectangle.prototype.union = function(toUnion) {
	var x0 = this.x > toUnion.x?toUnion.x:this.x;
	var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
	var y0 = this.y > toUnion.y?toUnion.x:this.y;
	var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
	return new periscopic.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
}
periscopic.geom.Rectangle.prototype.isEmpty = function() {
	return this.width == 0 && this.height == 0;
}
periscopic.geom.Rectangle.prototype.offset = function(dx,dy) {
	this.x += dx;
	this.y += dy;
}
periscopic.geom.Rectangle.prototype.offsetPoint = function(point) {
	this.x += point.x;
	this.y += point.y;
}
periscopic.geom.Rectangle.prototype.midY = function() {
	return this.y + 0.5 * this.height;
}
periscopic.geom.Rectangle.prototype.midX = function() {
	return this.x + 0.5 * this.width;
}
periscopic.geom.Rectangle.prototype.setEmpty = function() {
	this.x = this.y = this.width = this.height = 0;
}
periscopic.geom.Rectangle.prototype.extendBounds = function(r) {
	var dx = this.x - r.x;
	if(dx > 0) {
		this.x -= dx;
		this.width += dx;
	}
	var dy = this.y - r.y;
	if(dy > 0) {
		this.y -= dy;
		this.height += dy;
	}
	if(r.get_right() > this.get_right()) this.set_right(r.get_right());
	if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
}
periscopic.geom.Rectangle.prototype.__class__ = periscopic.geom.Rectangle;
politi.view.WordNode = function(word,y,index) {
	if( word === $_ ) return;
	this.era = politi.view.VizView.dataEra;
	this.data = word;
	this.midY = y;
	this.idx = index;
	politi.view.Node.call(this,"","word_node");
	this.tf.onmouseover = $closure(this,"handleOver");
	this.tf.onmouseout = $closure(this,"handleOut");
	this.tf.onclick = $closure(this,"handleClick");
	this.innerTf = js.Lib.document.createElement("span");
	this.innerTf.className = "text";
	this.innerTf.innerHTML = word.word;
	this.countTf = js.Lib.document.createElement("span");
	this.countTf.className = "count";
	this.countTf.innerHTML = Std.string(word.count);
	this.tf.appendChild(this.innerTf);
	this.tf.appendChild(this.countTf);
	this.position();
}
politi.view.WordNode.__name__ = ["politi","view","WordNode"];
politi.view.WordNode.__super__ = politi.view.Node;
for(var k in politi.view.Node.prototype ) politi.view.WordNode.prototype[k] = politi.view.Node.prototype[k];
politi.view.WordNode.latent = null;
politi.view.WordNode.prototype.midY = null;
politi.view.WordNode.prototype.idx = null;
politi.view.WordNode.prototype.innerTf = null;
politi.view.WordNode.prototype.countTf = null;
politi.view.WordNode.prototype.data = null;
politi.view.WordNode.prototype.pixelShifted = null;
politi.view.WordNode.prototype.curUses = null;
politi.view.WordNode.prototype.ownsTip = null;
politi.view.WordNode.prototype.filtTmr = null;
politi.view.WordNode.prototype.overTmr = null;
politi.view.WordNode.prototype.outTmr = null;
politi.view.WordNode.prototype.era = null;
politi.view.WordNode.prototype.setWordUses = function(uses) {
	if(uses == null) this.countTf.innerHTML = Std.string(this.data.count); else this.countTf.innerHTML = uses.length + "<br>" + this.data.count;
	this.curUses = uses;
}
politi.view.WordNode.prototype.setFilter = function() {
	if(this.era == politi.view.VizView.dataEra) {
		this.filtTmr = null;
		politi.model.Filter.getInstance().overWord(this.idx);
	}
	if(this.curUses != null && this.curUses.length > 0) {
		periscopic.utils.GlobalTimer.clearTimeout(this.overTmr);
		this.overTmr = periscopic.utils.GlobalTimer.setTimeout($closure(this,"launchTip"),450,null);
	}
}
politi.view.WordNode.prototype.handleOver = function(e) {
	if(politi.view.WordNode.tip == null) {
		this.filtTmr = periscopic.utils.GlobalTimer.setTimeout($closure(this,"setFilter"),75,null);
		var filt = politi.model.Filter.getInstance();
	} else if(this.ownsTip) this.handleOverGroup(null); else politi.view.WordNode.latent = this;
}
politi.view.WordNode.prototype.launchTip = function() {
	if(politi.view.WordNode.tip == null) {
		if(this.curUses != null && this.curUses.length > 0) {
			this.ownsTip = true;
			politi.view.WordNode.tip = new politi.view.WordTooltip(this.curUses,this,this.tf);
			politi.view.WordNode.tip.el.onmouseover = $closure(this,"handleOverGroup");
			politi.view.WordNode.tip.el.onmouseout = $closure(this,"handleOutGroup");
		}
	}
}
politi.view.WordNode.prototype.removeTip = function() {
	if(politi.view.WordNode.tip != null && this.ownsTip) {
		politi.view.WordNode.tip.remove();
		politi.view.WordNode.tip.el.onmouseover = null;
		politi.view.WordNode.tip.el.onmouseout = null;
		politi.view.WordNode.tip = null;
		this.ownsTip = false;
	}
}
politi.view.WordNode.prototype.handleOverGroup = function(e) {
	periscopic.utils.GlobalTimer.clearTimeout(this.outTmr);
}
politi.view.WordNode.prototype.handleOutGroup = function(e) {
	this.outTmr = periscopic.utils.GlobalTimer.setTimeout($closure(this,"handleLongOut"),200,null);
}
politi.view.WordNode.prototype.handleOut = function(e) {
	if(politi.view.WordNode.tip == null) {
		if(this.filtTmr != null) {
			periscopic.utils.GlobalTimer.clearTimeout(this.filtTmr);
			this.filtTmr = null;
		} else if(this.era == politi.view.VizView.dataEra) politi.model.Filter.getInstance().outWord(this.idx);
		periscopic.utils.GlobalTimer.clearTimeout(this.overTmr);
	} else if(this.ownsTip) this.handleOutGroup(null); else if(politi.view.WordNode.latent == this) politi.view.WordNode.latent = null;
}
politi.view.WordNode.prototype.handleLongOut = function() {
	this.removeTip();
	this.handleOut(null);
	if(politi.view.WordNode.latent != null) {
		politi.view.WordNode.latent.handleOver(null);
		politi.view.WordNode.latent = null;
	}
}
politi.view.WordNode.prototype.handleClick = function(e) {
	if(this.era == politi.view.VizView.dataEra) {
		if(this.pinned) {
			this.pinned = false;
			politi.model.Filter.getInstance().unpin();
			if(this.ownsTip) {
				this.removeTip();
				periscopic.utils.GlobalTimer.clearTimeout(this.overTmr);
			}
		} else {
			this.pinned = true;
			politi.model.Filter.getInstance().pinWord(this.idx,$closure(this,"handleUnpinned"));
			if(politi.view.WordNode.tip == null) {
				periscopic.utils.GlobalTimer.clearTimeout(this.overTmr);
				this.overTmr = periscopic.utils.GlobalTimer.setTimeout($closure(this,"launchTip"),100,null);
			}
		}
	}
}
politi.view.WordNode.prototype.position = function() {
	if(this.innerTf) {
		this.bounds.y = this.midY - Std["int"](this.tf.clientHeight * 0.5);
		this.bounds.x = 382 - Std["int"]((this.tf.clientWidth - this.countTf.clientWidth) * 0.5);
		this.bounds.width = this.tf.clientWidth;
		this.bounds.height = this.tf.clientHeight;
		this.tf.style.top = this.bounds.get_top() + "px";
		this.tf.style.left = this.bounds.x + "px";
	}
}
politi.view.WordNode.prototype.destroy = function() {
	if(this.ownsTip) this.removeTip();
	periscopic.utils.GlobalTimer.clearTimeout(this.filtTmr);
	politi.view.Node.prototype.destroy.call(this);
}
politi.view.WordNode.prototype.__class__ = politi.view.WordNode;
if(!periscopic.display) periscopic.display = {}
if(!periscopic.display.svg) periscopic.display.svg = {}
periscopic.display.svg.PathCommands = function() { }
periscopic.display.svg.PathCommands.__name__ = ["periscopic","display","svg","PathCommands"];
periscopic.display.svg.PathCommands.tooltip = function(width,height,tipLength,tipWidth,horizontal,flip,tipPosition,radius) {
	if(radius == null) radius = 2;
	if(tipPosition == null) tipPosition = 0.5;
	var dir = flip?-1:1;
	var inDist = ((horizontal?height:width) - 2 * (tipWidth + radius)) * tipPosition + (tipWidth + radius);
	var outDist = ((horizontal?height:width) - 2 * (tipWidth + radius)) * (1 - tipPosition) + (tipWidth + radius);
	var axis = horizontal?width:height;
	var command;
	if(horizontal) {
		command = "M0 0L" + tipLength * dir + " " + tipWidth + " " + tipLength * dir + " " + (outDist - radius);
		command += "Q" + tipLength * dir + " " + outDist + " " + (tipLength + radius) * dir + " " + outDist;
		command += "L" + (tipLength + axis - radius) * dir + " " + outDist;
		command += "Q" + (tipLength + axis) * dir + " " + outDist + " " + (tipLength + axis) * dir + " " + (outDist - radius);
		command += "L" + (tipLength + axis) * dir + " " + -(inDist - radius);
		command += "Q" + (tipLength + axis) * dir + " " + -inDist + " " + (tipLength + axis - radius) * dir + " " + -inDist;
		command += "L" + (tipLength + radius) * dir + " " + -inDist;
		command += "Q" + tipLength * dir + " " + -inDist + " " + tipLength * dir + " " + -(inDist - radius);
		command += "L" + tipLength * dir + " " + -tipWidth + "L0 0";
	} else {
		command = "M0 0L" + tipWidth + " " + tipLength * dir + " " + (outDist - radius) + " " + tipLength * dir;
		command += "Q" + outDist + " " + tipLength * dir + " " + outDist + " " + (tipLength + radius) * dir;
		command += "L" + outDist + " " + (tipLength + axis - radius) * dir;
		command += "Q" + outDist + " " + (tipLength + axis) * dir + " " + (outDist - radius) + " " + (tipLength + axis) * dir;
		command += "L" + -(inDist - radius) + " " + (tipLength + axis) * dir;
		command += "Q" + -inDist + " " + (tipLength + axis) * dir + " " + -inDist + " " + (tipLength + axis - radius) * dir;
		command += "L" + -inDist + " " + (tipLength + radius) * dir;
		command += "Q" + -inDist + " " + tipLength * dir + " " + -(inDist - radius) + " " + tipLength * dir;
		command += "L" + -tipWidth + " " + tipLength * dir + "L0 0";
	}
	return command;
}
periscopic.display.svg.PathCommands.rect = function(x,y,width,height) {
	return "M" + x + " " + y + "l0 " + height + " " + width + " 0 0 " + -height + " " + -width + " 0";
}
periscopic.display.svg.PathCommands.line = function(x,y,x2,y2) {
	return "M" + x + " " + y + "L" + x2 + " " + y2;
}
periscopic.display.svg.PathCommands.ellipse = function(x,y,xrad,yrad) {
	var s = "M" + x + " " + (y - yrad) + "C" + (x + xrad * 0.56) + " " + (y - yrad) + " " + (x + xrad) + " " + (y - yrad * 0.56);
	s += " " + (x + xrad) + " " + y + " " + (x + xrad) + " " + (y + yrad * 0.56) + " " + (x + xrad * 0.56) + " " + (y + yrad);
	s += " " + x + " " + (y + yrad) + " " + (x - xrad * 0.56) + " " + (y + yrad) + " " + (x - xrad) + " " + (y + yrad * 0.56);
	s += " " + (x - xrad) + " " + y + " " + (x - xrad) + " " + (y - yrad * 0.56) + " " + (x - xrad * 0.56) + " " + (y - yrad);
	s += " " + x + " " + (y - yrad) + "Z";
	return s;
}
periscopic.display.svg.PathCommands.prototype.__class__ = periscopic.display.svg.PathCommands;
politi.model.DebateData = function(data,dl) {
	if( data === $_ ) return;
	this.list = dl;
	this.city = data.city;
	this.date = Date.fromString(data.date);
	this.sponsors = data.sponsors;
	this.venue = data.venue;
	this.loadable = data.url && data.url.length > 0;
	if(this.loadable) this._url = "../politilines/data/" + data.url + "?" + Math.floor(Math.random() * Math.pow(10,10));
	this._loaded = false;
}
politi.model.DebateData.__name__ = ["politi","model","DebateData"];
politi.model.DebateData.sortAlphabeticIssues = function(a,b) {
	return a.issue.toUpperCase() > b.issue.toUpperCase()?1:-1;
}
politi.model.DebateData.sentencesIn = function(a) {
	var sents = [];
	var sent;
	var _g = 0;
	while(_g < a.length) {
		var $use = a[_g];
		++_g;
		sent = $use.sentence;
		if(Lambda.indexOf(sents,sent) < 0) sents.push(sent);
	}
	return sents;
}
politi.model.DebateData.usesInDebater = function(d) {
	var uses = [];
	var i = 0;
	var _g = 0, _g1 = d.blocks;
	while(_g < _g1.length) {
		var block = _g1[_g];
		++_g;
		var $it0 = block.wordUses.iterator();
		while( $it0.hasNext() ) {
			var wordList = $it0.next();
			var _g2 = 0;
			while(_g2 < wordList.length) {
				var $use = wordList[_g2];
				++_g2;
				uses[i++] = $use;
			}
		}
	}
	return uses;
}
politi.model.DebateData.debatersIn = function(a) {
	var cands = [];
	var cand;
	var _g = 0;
	while(_g < a.length) {
		var $use = a[_g];
		++_g;
		cand = $use.sentence.block.debater;
		if(Lambda.indexOf(cands,cand) < 0) cands.push(cand);
	}
	return cands;
}
politi.model.DebateData.issuesIn = function(a) {
	var issues = [];
	var issue;
	var _g = 0;
	while(_g < a.length) {
		var $use = a[_g];
		++_g;
		var _g1 = 0, _g2 = $use.sentence.block.issues;
		while(_g1 < _g2.length) {
			var issue1 = _g2[_g1];
			++_g1;
			if(Lambda.indexOf(issues,issue1) < 0) issues.push(issue1);
		}
	}
	return issues;
}
politi.model.DebateData.prototype._intersectAll = null;
politi.model.DebateData.prototype._intersectAllUses = null;
politi.model.DebateData.prototype._words = null;
politi.model.DebateData.prototype._cands = null;
politi.model.DebateData.prototype._loaded = null;
politi.model.DebateData.prototype._debaterDatas = null;
politi.model.DebateData.prototype._wordDatas = null;
politi.model.DebateData.prototype._issueDatas = null;
politi.model.DebateData.prototype._debaterHash = null;
politi.model.DebateData.prototype._wordHash = null;
politi.model.DebateData.prototype._issueHash = null;
politi.model.DebateData.prototype.totalSentences = null;
politi.model.DebateData.prototype._url = null;
politi.model.DebateData.prototype.city = null;
politi.model.DebateData.prototype.sponsors = null;
politi.model.DebateData.prototype.venue = null;
politi.model.DebateData.prototype.date = null;
politi.model.DebateData.prototype.loadable = null;
politi.model.DebateData.prototype.list = null;
politi.model.DebateData.prototype.load = function() {
	if(this._loaded) this.updateView(); else {
		var http = new haxe.Http(this._url);
		http.onData = $closure(this,"handleData");
		// http.request(true);
		http.request(false);
	}
}
politi.model.DebateData.prototype.handleData = function(data) {
	var dt = js.JQuery.parseJSON(data);
	var cands = dt.candidates;
	var inBlocks = dt.blocks;
	var tmpBlocks = [];
	var issueKeys;
	var wordKeys;
	var tmpBlock;
	var tmpIssue;
	var tmpWord;
	var sentenceCount = 0;
	var sentences;
	var i;
	var wordUses;
	var wordUse;
	this._intersectAll = [];
	this._intersectAllUses = [];
	this._debaterHash = new Hash();
	this._issueHash = new Hash();
	this._wordHash = new Hash();
	this._debaterDatas = [];
	this._issueDatas = [];
	this._wordDatas = [];
	var _g = 0;
	while(_g < cands.length) {
		var cand = cands[_g];
		++_g;
		var data1 = { name : cand.name, party : cand.party || null, blocks : [], index : null};
		this._debaterHash.set(cand.name,data1);
		this._debaterDatas.push(data1);
	}
	var _g = 0;
	while(_g < inBlocks.length) {
		var block = inBlocks[_g];
		++_g;
		if(block == null) tmpBlocks.push(null); else {
			issueKeys = block.issues;
			tmpBlock = { prevSentences : sentenceCount, issues : [], issuesText : "", debater : null, words : [], wordUses : null};
			tmpBlocks.push(tmpBlock);
			sentenceCount += block.sentences.length;
			sentences = [];
			i = 0;
			var _g1 = 0, _g2 = block.sentences;
			while(_g1 < _g2.length) {
				var txt = _g2[_g1];
				++_g1;
				sentences[i] = { index : tmpBlock.prevSentences + i, text : txt, block : tmpBlock};
				i++;
			}
			var _g1 = 0;
			while(_g1 < issueKeys.length) {
				var issueKey = issueKeys[_g1];
				++_g1;
				if(this._issueHash.exists(issueKey)) {
					tmpIssue = this._issueHash.get(issueKey);
					tmpIssue.blocks.push(tmpBlock);
				} else {
					tmpIssue = { issue : issueKey, blocks : [tmpBlock], index : null};
					this._issueHash.set(issueKey,tmpIssue);
					this._issueDatas[this._issueDatas.length] = tmpIssue;
				}
				tmpBlock.issues.push(tmpIssue);
			}
			tmpBlock.issues.sort(politi.model.DebateData.sortAlphabeticIssues);
			var s = "";
			var _g1 = 0, _g2 = tmpBlock.issues;
			while(_g1 < _g2.length) {
				var issue = _g2[_g1];
				++_g1;
				s += (s.length > 0?", ":"") + issue.issue;
			}
			tmpBlock.issuesText = s;
			var words = block.words;
			var wordKeys1 = Reflect.fields(words);
			var _g1 = 0;
			while(_g1 < wordKeys1.length) {
				var wordKey = wordKeys1[_g1];
				++_g1;
				if(this._wordHash.exists(wordKey)) {
					tmpWord = this._wordHash.get(wordKey);
					tmpWord.blocks.push(tmpBlock);
				} else {
					tmpWord = { word : wordKey, blocks : [tmpBlock], count : 0, index : null, uses : []};
					this._wordHash.set(wordKey,tmpWord);
					this._wordDatas[this._wordDatas.length] = tmpWord;
				}
				tmpBlock.words.push(tmpWord);
			}
			tmpBlock.wordUses = wordUses = new Hash();
			var _g1 = 0;
			while(_g1 < wordKeys1.length) {
				var key = wordKeys1[_g1];
				++_g1;
				var sentenceIdxs = words[key];
				var a = [];
				var _g2 = 0;
				while(_g2 < sentenceIdxs.length) {
					var idx = sentenceIdxs[_g2];
					++_g2;
					tmpWord = this._wordHash.get(key);
					tmpWord.count++;
					wordUse = { word : tmpWord, sentence : sentences[idx]};
					a.push(wordUse);
					tmpWord.uses.push(wordUse);
				}
				wordUses.set(key,a);
			}
		}
	}
	this.totalSentences = sentenceCount;
	var _g = 0;
	while(_g < cands.length) {
		var cand = cands[_g];
		++_g;
		var debater = this._debaterHash.get(cand.name);
		var indices = cand.block_indices;
		var _g1 = 0;
		while(_g1 < indices.length) {
			var idx = indices[_g1];
			++_g1;
			tmpBlock = tmpBlocks[idx];
			debater.blocks.push(tmpBlock);
			tmpBlock.debater = debater;
		}
	}
	var sortDescendingCount = function(a,b) {
		return b.count - a.count;
	};
	this._wordDatas.sort(sortDescendingCount);
	if(this._wordDatas.length > 40) this._wordDatas = this._wordDatas.slice(0,40);
	i = 0;
	var _g = 0, _g1 = this._wordDatas;
	while(_g < _g1.length) {
		var tmp = _g1[_g];
		++_g;
		tmp.index = i++;
	}
	var sortAlphabeticDebaters = function(a,b) {
		return a.name.split(" ").pop().toUpperCase() > b.name.split(" ").pop().toUpperCase()?1:-1;
	};
	this._debaterDatas.sort(sortAlphabeticDebaters);
	i = 0;
	var _g = 0, _g1 = this._debaterDatas;
	while(_g < _g1.length) {
		var tmp = _g1[_g];
		++_g;
		tmp.index = i++;
	}
	this._issueDatas.sort(politi.model.DebateData.sortAlphabeticIssues);
	i = 0;
	var _g = 0, _g1 = this._issueDatas;
	while(_g < _g1.length) {
		var tmp = _g1[_g];
		++_g;
		tmp.index = i++;
	}
	var intersectBlocks;
	i = 0;
	var k;
	var debater;
	var issue;
	var word;
	var il = this._debaterDatas.length;
	var jl = this._issueDatas.length;
	var kl = this._wordDatas.length;
	var tstCount = 0;
	var _g = 0;
	while(_g < il) {
		var i1 = _g++;
		debater = this._debaterDatas[i1];
		var _g1 = 0;
		while(_g1 < jl) {
			var j = _g1++;
			issue = this._issueDatas[j];
			intersectBlocks = periscopic.utils.Arrays.intersect(issue.blocks,debater.blocks);
			var mergedMap = new Hash();
			var _g2 = 0;
			while(_g2 < intersectBlocks.length) {
				var block = intersectBlocks[_g2];
				++_g2;
				var $it0 = block.wordUses.keys();
				while( $it0.hasNext() ) {
					var key = $it0.next();
					var wordList;
					if(mergedMap.exists(key)) wordList = mergedMap.get(key); else {
						wordList = [];
						mergedMap.set(key,wordList);
					}
					var _g3 = 0, _g4 = block.wordUses.get(key);
					while(_g3 < _g4.length) {
						var $use = _g4[_g3];
						++_g3;
						wordList[wordList.length] = $use;
					}
				}
			}
			var _g2 = 0;
			while(_g2 < kl) {
				var k1 = _g2++;
				word = this._wordDatas[k1];
				if(mergedMap.exists(word.word)) {
					var idx = j * kl * il + k1 * il + i1;
					this._intersectAll[idx] = true;
					this._intersectAllUses[idx] = mergedMap.get(word.word);
				}
			}
		}
	}
	this._loaded = true;
	if(politi.model.DebateCategories.selected == this) this.updateView();
}
politi.model.DebateData.prototype.updateView = function() {
	politi.view.VizView.getInstance().setData(this);
}
politi.model.DebateData.prototype.getWords = function() {
	return this._wordDatas.copy();
}
politi.model.DebateData.prototype.getIssues = function() {
	return this._issueDatas.copy();
}
politi.model.DebateData.prototype.getCandidates = function() {
	return this._debaterDatas.copy();
}
politi.model.DebateData.prototype.render = function(filter) {
	var connections = [];
	var numIssues = this._issueDatas.length;
	var numWords = this._wordDatas.length;
	var numCands = this._debaterDatas.length;
	var candMatch;
	var issueMatch;
	var wordMatch;
	var candLooseMatch;
	var issueLooseMatch;
	var wordLooseMatch;
	var wdId = filter.word;
	var isId = filter.issue;
	var cdId = filter.candidate;
	var wdLs = filter.wordLoose;
	var isLs = filter.issueLoose;
	var cdLs = filter.candidateLoose;
	var focus = filter.pinned;
	if(focus < 0) focus = wdId >= 0?1:isId >= 0?0:cdId >= 0?2:-1;
	if(focus == 0 || focus == 2) {
		var a = [];
		var b = [];
		var bd0 = [];
		var bd1 = [];
		var bd2 = [];
		var n, l, l2, p1, tmp, p3;
		var bd1Data = [];
		var bd2Data = [];
		var off;
		n = l = 0;
		var _g = 0;
		while(_g < numIssues) {
			var j = _g++;
			issueMatch = isId < 0 || isId == j;
			issueLooseMatch = isLs || issueMatch;
			l2 = 0;
			var _g1 = 0;
			while(_g1 < numWords) {
				var k = _g1++;
				wordMatch = wdId < 0 || wdId == k;
				wordLooseMatch = wdLs || wordMatch;
				p1 = 0;
				var _g2 = 0;
				while(_g2 < numCands) {
					var i = _g2++;
					candMatch = cdId < 0 || cdId == i;
					candLooseMatch = cdLs || candMatch;
					p3 = this._intersectAll[n] != null && wordLooseMatch && issueLooseMatch && candLooseMatch?1 + (wordMatch && issueMatch && candMatch?1:0):0;
					p1 = p3 > p1?p3:p1;
					tmp = b[l2];
					b[l2++] = tmp == null || tmp < p3?p3:tmp;
					tmp = bd0[j];
					bd0[j] = tmp == null || tmp < p3?p3:tmp;
					tmp = bd1[k];
					if(tmp == null || tmp <= p3) {
						if(p3 > 0) {
							if(tmp == null || tmp < p3) bd1Data[k] = [];
							bd1Data[k].push(this._intersectAllUses[n]);
						}
						bd1[k] = p3;
					}
					tmp = bd2[i];
					if(tmp == null || tmp <= p3) {
						if(p3 > 1) {
							if(tmp == null || tmp < p3) bd2Data[i] = [];
							bd2Data[i].push(this._intersectAllUses[n]);
						}
						bd2[i] = p3;
					}
					n++;
				}
				a[l++] = p1;
			}
		}
		return { pinned : filter.pinned, focus : focus, select : focus == 0?isId:cdId, controls : (wdId > -1?1:0) + (isId > -1?1:0) + (cdId > -1?1:0), data01 : a, data12 : b, col0 : isId, col1 : wdId, col2 : cdId, bead0 : bd0, bead1 : bd1, bead2 : bd2, bead1Data : this.cleanBeadData(bd1Data), bead2Data : this.cleanBeadData(bd2Data), len0 : numIssues, len1 : numWords, len2 : numCands};
	} else if(focus == 1) {
		var a = [];
		var b = [];
		var n, l, l2, tmp, p3;
		var bd0 = [];
		var bd1 = [];
		var bd2 = [];
		var bd1Data = [];
		var bd2Data = [];
		var off;
		n = l = 0;
		var _g = 0;
		while(_g < numIssues) {
			var j = _g++;
			issueMatch = isId < 0 || isId == j;
			issueLooseMatch = isLs || issueMatch;
			l2 = 0;
			var _g1 = 0;
			while(_g1 < numWords) {
				var k = _g1++;
				wordMatch = wdId < 0 || wdId == k;
				wordLooseMatch = wdLs || wordMatch;
				var _g2 = 0;
				while(_g2 < numCands) {
					var i = _g2++;
					candMatch = cdId < 0 || cdId == i;
					candLooseMatch = cdLs || candMatch;
					p3 = this._intersectAll[n] && wordLooseMatch && issueLooseMatch && candLooseMatch?1 + (wordMatch && issueMatch && candMatch?1:0):0;
					a[l++] = p3;
					tmp = b[l2];
					b[l2++] = tmp == null || tmp < p3?p3:tmp;
					tmp = bd0[j];
					bd0[j] = tmp == null || tmp < p3?p3:tmp;
					tmp = bd1[k];
					if(tmp == null || tmp <= p3) {
						if(p3 > 0) {
							if(tmp == null || tmp < p3) bd1Data[k] = [];
							bd1Data[k].push(this._intersectAllUses[n]);
						}
						bd1[k] = p3;
					}
					tmp = bd2[i];
					if(tmp == null || tmp <= p3) {
						if(p3 > 1) {
							if(tmp == null || tmp < p3) bd2Data[i] = [];
							bd2Data[i].push(this._intersectAllUses[n]);
						}
						bd2[i] = p3;
					}
					n++;
				}
			}
		}
		return { pinned : filter.pinned, focus : focus, select : wdId, controls : 1 + (isId > -1?1:0) + (cdId > -1?1:0), data01 : a, data12 : b, col0 : isId, col1 : wdId, col2 : cdId, bead0 : bd0, bead1 : bd1, bead2 : bd2, bead1Data : this.cleanBeadData(bd1Data), bead2Data : this.cleanBeadData(bd2Data), len0 : numIssues, len1 : numWords, len2 : numCands};
	}
	return null;
}
politi.model.DebateData.prototype.cleanBeadData = function(a) {
	var out = [];
	var tmp;
	var _g = 0;
	while(_g < a.length) {
		var sub = a[_g];
		++_g;
		tmp = [];
		if(sub) {
			var _g1 = 0;
			while(_g1 < sub.length) {
				var subsub = sub[_g1];
				++_g1;
				if(subsub) {
					var _g2 = 0;
					while(_g2 < subsub.length) {
						var val = subsub[_g2];
						++_g2;
						tmp.push(val);
					}
				}
			}
		}
		out.push(periscopic.utils.Arrays.unique(tmp));
	}
	return out;
}
politi.model.DebateData.prototype.writtenDate = function() {
	return periscopic.locale.EnglishUS.month(this.date.getMonth()) + " " + periscopic.locale.EnglishUS.fullOrdinal(this.date.getDate()) + ", " + this.date.getFullYear();
}
politi.model.DebateData.prototype.writtenMonthYear = function() {
	return periscopic.locale.EnglishUS.month(this.date.getMonth()) + ", " + this.date.getFullYear();
}
politi.model.DebateData.prototype.writtenVenue = function() {
	return this.venue + " in " + this.city;
}
politi.model.DebateData.prototype.writtenSponsors = function() {
	return StringTools.replace(this.sponsors,","," | ");
}
politi.model.DebateData.prototype.detailDate = function() {
	return periscopic.utils.Strings.forceLength(Std.string(this.date.getMonth() + 1),2,"0") + "-" + periscopic.utils.Strings.forceLength(Std.string(this.date.getDate()),2,"0") + "-" + periscopic.utils.Strings.forceLength(Std.string(this.date.getFullYear() % 100),2,"0");
}
politi.model.DebateData.prototype.detailSponsors = function() {
	var a = this.sponsors.split(",");
	var i = 0;
	var s = a[i];
	while(++i < a.length) {
		s += ", ";
		if(i == a.length - 1) s += "and ";
		s += a[i];
	}
	return s;
}
politi.model.DebateData.prototype.__class__ = politi.model.DebateData;
politi.view.Thread = function(p) {
	if( p !== $_ ) 
	this.g = politi.view.VizView.vector_layer.path("M0 0");
	this.anchrL = true;
}
politi.view.Thread.__name__ = ["politi","view","Thread"];
politi.view.Thread.procure = function() {
	var thread = politi.view.Thread._pool.length > 0?politi.view.Thread._pool.pop():new politi.view.Thread();
	if(politi.view.Thread.last != null) politi.view.Thread.last = politi.view.Thread.last.next = thread; else politi.view.Thread.first = politi.view.Thread.last = thread;
	return thread;
}
politi.view.Thread.recycle = function(inst,animate) {
	if(inst == politi.view.Thread.first) politi.view.Thread.first = inst.next;
	if(inst == politi.view.Thread.last) politi.view.Thread.last = inst.prev;
	inst.remove(animate);
}
politi.view.Thread.recycleAll = function(animate) {
	var thread;
	var next = politi.view.Thread.first;
	politi.view.Thread.first = politi.view.Thread.last = null;
	while(next != null) {
		thread = next;
		next = thread.next;
		thread.remove(animate);
	}
}
politi.view.Thread.recycled = function(inst) {
	inst.g.attr({ path : "M0 0"});
	politi.view.Thread._pool[politi.view.Thread._pool.length] = inst;
}
politi.view.Thread.first = null;
politi.view.Thread.last = null;
politi.view.Thread.prototype.prev = null;
politi.view.Thread.prototype.next = null;
politi.view.Thread.prototype.g = null;
politi.view.Thread.prototype.left = null;
politi.view.Thread.prototype.right = null;
politi.view.Thread.prototype.anchrL = null;
politi.view.Thread.prototype.del = null;
politi.view.Thread.prototype.setNodes = function(leftNode,rightNode,color,opacity,fromLeft,delayMS,offset) {
	if(offset == null) offset = 0;
	if(delayMS == null) delayMS = 0;
	this.anchrL = fromLeft;
	this.left = leftNode;
	this.right = rightNode;
	var l = leftNode.bounds;
	var r = rightNode.bounds;
	var path = fromLeft?"M" + l.get_right() + " " + l.midY():"M" + r.get_left() + " " + r.midY();
	var o = { path : path, stroke : color};
	o["stroke-opacity"] = opacity;
	this.g.attr(o);
	var controlDist = (r.get_left() - l.get_right()) * 0.3;
	path = "M" + l.get_right() + " " + l.midY() + "C" + (l.get_right() + controlDist) + " " + (l.midY() + offset) + " " + (r.get_left() - controlDist) + " " + (r.midY() + offset) + " " + r.get_left() + " " + r.midY();
	this.clearDelays();
	if(delayMS <= 0) this.g.stop().animate({ path : path},350,">"); else this.del = periscopic.utils.GlobalTimer.setTimeout($closure(this.g,"animate"),delayMS,[{ path : path},350,">"]);
}
politi.view.Thread.prototype.clearDelays = function() {
	if(this.del != null) {
		periscopic.utils.GlobalTimer.clearTimeout(this.del);
		this.del = null;
	}
}
politi.view.Thread.prototype.setOpacity = function(opacity,delayMS) {
	if(delayMS == null) delayMS = 0;
	var o = { };
	o["stroke-opacity"] = opacity;
	this.clearDelays();
	if(delayMS <= 0) this.g.animate(o,500,">"); else this.del = periscopic.utils.GlobalTimer.setTimeout($closure(this.g,"animate"),delayMS,[o,500,">"]);
}
politi.view.Thread.prototype.remove = function(animate) {
	var me = this;
	if(this.prev != null) this.prev.next = this.next;
	if(this.next != null) this.next.prev = this.prev;
	this.next = this.prev = null;
	this.clearDelays();
	var path = this.anchrL?"M" + this.left.bounds.get_right() + " " + this.left.bounds.midY():"M" + this.right.bounds.get_left() + " " + this.right.bounds.midY();
	if(animate) {
		var complete = function() {
			politi.view.Thread.recycled(me);
		};
		this.g.stop().animate({ path : path},500,">",complete);
	} else {
		this.g.stop().attr({ path : path});
		politi.view.Thread.recycled(this);
	}
}
politi.view.Thread.prototype.__class__ = politi.view.Thread;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
periscopic.utils.GlobalTimer = function() { }
periscopic.utils.GlobalTimer.__name__ = ["periscopic","utils","GlobalTimer"];
periscopic.utils.GlobalTimer.setInterval = function(func,milliseconds,rest) {
	rest = rest == null?[]:rest;
	var timer = new haxe.Timer(milliseconds);
	periscopic.utils.GlobalTimer.timers.push(timer);
	var id = periscopic.utils.GlobalTimer.timers.length - 1;
	timer.run = function() {
		func.apply(null,rest);
	};
	return id;
}
periscopic.utils.GlobalTimer.clearInterval = function(id) {
	periscopic.utils.GlobalTimer.timers[id].stop();
	periscopic.utils.GlobalTimer.timers[id] = null;
}
periscopic.utils.GlobalTimer.setTimeout = function(func,milliseconds,rest) {
	var id = 0;
	var run = function() {
		rest = rest == null?[]:rest;
		func.apply(null,rest);
		periscopic.utils.GlobalTimer.clearTimeout(id);
	};
	id = setTimeout(run,milliseconds);
	return id;
}
periscopic.utils.GlobalTimer.clearTimeout = function(id) {
	clearTimeout(id);
}
periscopic.utils.GlobalTimer.prototype.__class__ = periscopic.utils.GlobalTimer;
politi.view.WordTooltip = function(uses,wordNode,anchr) {
	if( uses === $_ ) return;
	var doc = js.Lib.document;
	var body = doc.body;
	var content = doc.createElement("div");
	var showTmr = null;
	var curFilter = politi.model.Filter.getInstance();
	var pinCategory;
	var unpinCategory;
	var unpinVal;
	var unpinOverallVal;
	content.className = "word_tip";
	var link = doc.createElement("div");
	link.className = "link";
	link.innerHTML = "explore the use" + (uses.length > 1?"s":"") + " of this word";
	if(curFilter.pinned == 2 || curFilter.pinned == 0) {
		if(curFilter.pinned == 2) {
			pinCategory = "group";
			unpinCategory = "issue";
			unpinVal = politi.model.DebateData.issuesIn(uses).length;
			unpinOverallVal = politi.model.DebateData.issuesIn(uses[0].word.uses).length;
		} else {
			pinCategory = "issue";
			unpinCategory = "group";
			unpinVal = politi.model.DebateData.debatersIn(uses).length;
			unpinOverallVal = politi.model.DebateData.debatersIn(uses[0].word.uses).length;
		}
		var grid = doc.createElement("div");
		grid.className = "grid";
		var col1 = doc.createElement("div");
		col1.innerHTML = "<div>total:</div><div class='labels'>this " + pinCategory + ":</div><div class='labels'>all " + pinCategory + "s:</div>";
		var col2 = doc.createElement("div");
		col2.innerHTML = "<div class='labels'>uses</div><div class='gridItem'>" + uses.length + "</div><div class='gridItem'>" + uses[0].word.count + "</div>";
		var col3 = doc.createElement("div");
		col3.innerHTML = "<div class='labels'>" + unpinCategory + "s</div><div class='gridItem'>" + unpinVal + "</div><div class='gridItem'>" + unpinOverallVal + "</div>";
		col1.className = col2.className = "col";
		col3.className = "col lastCol";
		grid.appendChild(col1);
		grid.appendChild(col2);
		grid.appendChild(col3);
		content.appendChild(grid);
		body.appendChild(content);
		grid.style.width = col1.clientWidth + col2.clientWidth + col3.clientWidth + 12 + "px";
		content.style.width = col1.clientWidth + col2.clientWidth + col3.clientWidth + 25 + "px";
		grid.innerHTML += "<div style=\"clear:both;\"></div>";
		content.appendChild(link);
		content.style.height = grid.clientHeight + link.clientHeight + 25 + "px";
	} else {
		content.appendChild(link);
		content.style.width = 160 + "px";
		content.style.height = 20 + "px";
	}
	var tip = null;
	var visible = false;
	var create = function() {
		tip = periscopic.js.raphael.RaphaelTooltip.create(content,8,5,false,true,0.5,8);
		tip.el.style.position = "absolute";
		var bnds = periscopic.js.JsUtils.boundsOf(anchr,true);
		body.appendChild(tip.el);
		tip.el.className = "tip_hidden";
		tip.el.style.left = Math.round(bnds.x + 0.5 * bnds.w - tip.x) + "px";
		tip.el.style.top = Math.round(bnds.y - 2 - tip.y) + "px";
	};
	var hidden = false;
	var hide = function() {
		if(!hidden) {
			hidden = true;
			periscopic.utils.GlobalTimer.clearTimeout(showTmr);
			if(visible) {
				tip.el.className = "tip_hidden";
				visible = false;
			}
			periscopic.utils.GlobalTimer.setTimeout(function() {
				body.removeChild(tip.el);
			},3000,null);
		}
	};
	var show = function() {
		if(!visible) {
			tip.el.className = "tip_hidden tip_shown";
			visible = true;
		}
	};
	create();
	tip.el.className = "tip_hidden";
	showTmr = periscopic.utils.GlobalTimer.setTimeout(show,1,null);
	this.el = tip.el;
	this.remove = hide;
	new js.JQuery(link).click(function(e) {
		new politi.view.WordOverlay(uses);
		hide();
	});
}
politi.view.WordTooltip.__name__ = ["politi","view","WordTooltip"];
politi.view.WordTooltip.prototype.remove = null;
politi.view.WordTooltip.prototype.el = null;
politi.view.WordTooltip.prototype.__class__ = politi.view.WordTooltip;
politi.view.CandidatePlotTooltip = function(anchr) {
	if( anchr === $_ ) return;
	var doc = js.Lib.document;
	var body = doc.body;
	var content = new js.JQuery("<div></div>");
	var showTmr = null;
	content.addClass("plot_tip").html("This sparkline indicates the volume <br>of group&apos;s sentences used over <br>the course of the debate. Specific <br>word appearances are highlighted <br>upon interaction with the Top Words.").appendTo(body);
	content.css({width:  200, height: 76});
	var tip = null;
	var visible = false;
	var create = function() {
		tip = periscopic.js.raphael.RaphaelTooltip.create(content.get()[0],8,5,false,true,0.9,8);
		tip.el.style.position = "absolute";
		var bnds = periscopic.js.JsUtils.boundsOf(anchr,true);
		body.appendChild(tip.el);
		tip.el.className = "tip_hidden";
		tip.el.style.left = Math.round(bnds.x + 0.9 * bnds.w - tip.x) + "px";
		tip.el.style.top = Math.round(bnds.y - 2 - tip.y) + "px";
	};
	var hidden = false;
	var hide = function() {
		if(!hidden) {
			hidden = true;
			periscopic.utils.GlobalTimer.clearTimeout(showTmr);
			if(visible) {
				tip.el.className = "tip_hidden";
				visible = false;
			}
			periscopic.utils.GlobalTimer.setTimeout(function() {
				body.removeChild(tip.el);
			},3000,null);
		}
	};
	var show = function() {
		if(!visible) {
			tip.el.className = "tip_hidden tip_shown";
			visible = true;
		}
	};
	create();
	tip.el.className = "tip_hidden";
	showTmr = periscopic.utils.GlobalTimer.setTimeout(show,1,null);
	this.remove = hide;
}
politi.view.CandidatePlotTooltip.__name__ = ["politi","view","CandidatePlotTooltip"];
politi.view.CandidatePlotTooltip.prototype.remove = null;
politi.view.CandidatePlotTooltip.prototype.__class__ = politi.view.CandidatePlotTooltip;
periscopic.utils.Strings = function() { }
periscopic.utils.Strings.__name__ = ["periscopic","utils","Strings"];
periscopic.utils.Strings.forceLength = function(s,chars,fillChar,prepend) {
	if(prepend == null) prepend = true;
	if(prepend) while(s.length < chars) s = fillChar + s; else while(s.length < chars) s = s + fillChar;
	return s;
}
periscopic.utils.Strings.getCommaDelimited = function(n) {
	var s = Std.string(Math.abs(n));
	var s2 = "";
	var p = s.indexOf(".");
	var p2 = 0;
	var l;
	if(p == -1) p = s.length;
	if(n < 0) s2 = "-";
	while(p2 < p) {
		l = (p - p2) % 3;
		if(l == 0 && p > p2) l = 3;
		s2 += s.substr(p2,l);
		p2 += l;
		if(p2 < p) s2 += ",";
	}
	return s2 + s.substr(p);
}
periscopic.utils.Strings.forceTrailingSlash = function(s) {
	return s + (s.charAt(s.length - 1) == "/"?"":"/");
}
periscopic.utils.Strings.prototype.__class__ = periscopic.utils.Strings;
politi.view.MenuView = function(p) {
	if( p !== $_ ) 
	politi.model.DebateCategories.getInstance().addEventListener("debateCategoriesReady",$closure(this,"handleReady"),false,0,true);
}
politi.view.MenuView.__name__ = ["politi","view","MenuView"];
politi.view.MenuView._instance = null;
politi.view.MenuView.getInstance = function() {
	if(politi.view.MenuView._instance == null) politi.view.MenuView._instance = new politi.view.MenuView();
	return politi.view.MenuView._instance;
}
politi.view.MenuView.prototype.curSelection = null;
politi.view.MenuView.prototype.handleReady = function(e) {
	var doc = js.Lib.document;
	var cats = politi.model.DebateCategories.getInstance().categories;
	var el = doc.getElementById("side_menus");
	var divider;
	var sub;
	var _g = 0;
	while(_g < cats.length) {
		var list = cats[_g];
		++_g;
		divider = doc.createElement("div");
		divider.className = "divider";
		sub = new politi.view.SubMenuView(list,$closure(this,"handleDateClick"));
		el.appendChild(sub.el);
		el.appendChild(divider);
	}
}
politi.view.MenuView.prototype.handleDateClick = function(li,data) {
	if(this.curSelection != null && this.curSelection != li) this.curSelection.className = null;
	this.curSelection = li;
	li.className = "selected";
	politi.model.DebateCategories.getInstance().selectData(data);
	this.updateSelectedDebate();
}
politi.view.MenuView.prototype.updateSelectedDebate = function() {
	var el = js.Lib.document.getElementById("event_info");
	var db = politi.model.DebateCategories.selected;
	var s = StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace("<span id=\"event_date\">$DATE;</span><br/><strong>$CITY;</strong><br/>$VENUE;<br/><span id=\"event_sponsors\">Sponsors: $SPONSORS;</span>","$DATE;",db.detailDate()),"$CITY;",db.city),"$VENUE;",db.venue),"$SPONSORS;",db.detailSponsors());
	el.innerHTML = StringTools.replace(s,"<br/><br/>","<br/>");
}
politi.view.MenuView.prototype.__class__ = politi.view.MenuView;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
var js = js || {};
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
haxe.Firebug = function() { }
haxe.Firebug.__name__ = ["haxe","Firebug"];
haxe.Firebug.detect = function() {
	try {
		return console != null && console.error != null;
	} catch( e ) {
		return false;
	}
}
haxe.Firebug.redirectTraces = function() {
	haxe.Log.trace = haxe.Firebug.trace;
	js.Lib.setErrorHandler(haxe.Firebug.onError);
}
haxe.Firebug.onError = function(err,stack) {
	var buf = err + "\n";
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		buf += "Called from " + s + "\n";
	}
	haxe.Firebug.trace(buf,null);
	return true;
}
haxe.Firebug.trace = function(v,inf) {
	var type = inf != null && inf.customParams != null?inf.customParams[0]:null;
	if(type != "warn" && type != "info" && type != "debug" && type != "error") type = inf == null?"error":"log";
	console[type]((inf == null?"":inf.fileName + ":" + inf.lineNumber + " : ") + Std.string(v));
}
haxe.Firebug.prototype.__class__ = haxe.Firebug;
haxe.Timer = function(time_ms) {
	if( time_ms === $_ ) return;
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype.id = null;
haxe.Timer.prototype.timerId = null;
haxe.Timer.prototype.stop = function() {
	if(this.id == null) return;
	window.clearInterval(this.timerId);
	var arr = haxe_timers;
	arr[this.id] = null;
	if(this.id > 100 && this.id == arr.length - 1) {
		var p = this.id - 1;
		while(p >= 0 && arr[p] == null) p--;
		arr = arr.slice(0,p + 1);
	}
	this.id = null;
}
haxe.Timer.prototype.run = function() {
}
haxe.Timer.prototype.__class__ = haxe.Timer;
if(!periscopic.locale) periscopic.locale = {}
periscopic.locale.EnglishUS = function() { }
periscopic.locale.EnglishUS.__name__ = ["periscopic","locale","EnglishUS"];
periscopic.locale.EnglishUS.month = function(i) {
	return ["January","February","March","April","May","June","July","August","September","October","November","December"][i];
}
periscopic.locale.EnglishUS.ordinal = function(i) {
	var cent = i % 100;
	if(cent < 5 || cent > 20) {
		if(i % 10 == 1) return "st";
		if(i % 10 == 2) return "nd";
		if(i % 10 == 3) return "rd";
	}
	return "th";
}
periscopic.locale.EnglishUS.fullOrdinal = function(i) {
	return i + periscopic.locale.EnglishUS.ordinal(i);
}
periscopic.locale.EnglishUS.prototype.__class__ = periscopic.locale.EnglishUS;
if(!periscopic.js) periscopic.js = {}
if(!periscopic.js.raphael) periscopic.js.raphael = {}
periscopic.js.raphael.RaphaelTooltip = function() { }
periscopic.js.raphael.RaphaelTooltip.__name__ = ["periscopic","js","raphael","RaphaelTooltip"];
periscopic.js.raphael.RaphaelTooltip.create = function(content,tipLength,tipWidth,horizontal,flip,tipPosition,radius) {
	if(radius == null) radius = 2;
	if(tipPosition == null) tipPosition = 0.5;
	var shell = js.Lib.document.createElement("div");
	var div1 = js.Lib.document.createElement("div");
	js.Lib.document.body.appendChild(shell);
	shell.appendChild(div1);
	shell.appendChild(content);
	var raph = new Raphael(div1,2 + content.offsetWidth + (horizontal?tipLength:0),2 + content.offsetHeight + (horizontal?0:tipLength));
	var path = periscopic.display.svg.PathCommands.tooltip(content.offsetWidth,content.offsetHeight,tipLength,tipWidth,horizontal,flip,tipPosition,radius);
	var shape = raph.path(path);
	var box = shape.getBBox();
	shape.attr({ fill : "#FFFFFF", stroke : "#D6D6D6"});
	shape.translate(-box.x,-box.y);
	content.style.position = div1.style.position = "absolute";
	js.Lib.document.body.removeChild(shell);
	return { x : horizontal?flip?box.width:0:tipPosition * box.width, y : horizontal?tipPosition * box.height:flip?box.height:0, el : shell};
}
periscopic.js.raphael.RaphaelTooltip.prototype.__class__ = periscopic.js.raphael.RaphaelTooltip;
politi.model.Lexicon = function() { }
politi.model.Lexicon.__name__ = ["politi","model","Lexicon"];
politi.model.Lexicon.prototype.__class__ = politi.model.Lexicon;
periscopic.js.JsUtils = function() { }
periscopic.js.JsUtils.__name__ = ["periscopic","js","JsUtils"];
periscopic.js.JsUtils.positionOf = function(el,absolute) {
	var xy = { x : el.offsetLeft, y : el.offsetTop};
	if(!absolute) return xy;
	el = el.offsetParent;
	while(el != null) {
		xy.x += el.offsetLeft;
		xy.y += el.offsetTop;
		el = el.offsetParent;
	}
	return xy;
}
periscopic.js.JsUtils.boundsOf = function(el,absolute) {
	var box = periscopic.js.JsUtils.positionOf(el,absolute);
	box.w = el.offsetWidth;
	box.h = el.offsetHeight;
	return box;
}
periscopic.js.JsUtils.prototype.__class__ = periscopic.js.JsUtils;
politi.view.IssueNode = function(text,y,index) {
	if( text === $_ ) return;
	this.era = politi.view.VizView.dataEra;
	this.midY = y;
	this.idx = index;
	politi.view.Node.call(this,text);
	this.tf.onmouseover = $closure(this,"handleOver");
	this.tf.onmouseout = $closure(this,"handleOut");
	this.tf.onclick = $closure(this,"handleClick");
}
politi.view.IssueNode.__name__ = ["politi","view","IssueNode"];
politi.view.IssueNode.__super__ = politi.view.Node;
for(var k in politi.view.Node.prototype ) politi.view.IssueNode.prototype[k] = politi.view.Node.prototype[k];
politi.view.IssueNode.prototype.midY = null;
politi.view.IssueNode.prototype.idx = null;
politi.view.IssueNode.prototype.era = null;
politi.view.IssueNode.prototype.handleOver = function(e) {
	if(this.era == politi.view.VizView.dataEra) politi.model.Filter.getInstance().overIssue(this.idx);
}
politi.view.IssueNode.prototype.handleOut = function(e) {
	if(this.era == politi.view.VizView.dataEra) politi.model.Filter.getInstance().outIssue(this.idx);
}
politi.view.IssueNode.prototype.handleClick = function(e) {
	if(this.era == politi.view.VizView.dataEra) {
		if(this.pinned) {
			this.pinned = false;
			politi.model.Filter.getInstance().unpin();
		} else {
			this.pinned = true;
			politi.model.Filter.getInstance().pinIssue(this.idx,$closure(this,"handleUnpinned"));
		}
	}
}
politi.view.IssueNode.prototype.position = function() {
	this.bounds.y = this.midY - Std["int"](this.tf.clientHeight * 0.5);
	this.bounds.x = 198 - this.tf.clientWidth;
	this.bounds.width = this.tf.clientWidth;
	this.bounds.height = this.tf.clientHeight;
	this.tf.style.top = this.bounds.get_top() + "px";
	this.tf.style.right = 770 - this.bounds.get_right() + "px";
}
politi.view.IssueNode.prototype.__class__ = politi.view.IssueNode;
StringBuf = function(p) {
	if( p !== $_ ) 
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype.__class__ = Lambda;
politi.model.DebateCategories = function(p) {
	if( p !== $_ ) 
	periscopic.events.EventDispatcher.call(this);
	politi.model.DebateCategories.selected = null;
	this.categories = null;
	this._inited = false;
}
politi.model.DebateCategories.__name__ = ["politi","model","DebateCategories"];
politi.model.DebateCategories.__super__ = periscopic.events.EventDispatcher;
for(var k in periscopic.events.EventDispatcher.prototype ) politi.model.DebateCategories.prototype[k] = periscopic.events.EventDispatcher.prototype[k];
politi.model.DebateCategories._instance = null;
politi.model.DebateCategories.selected = null;
politi.model.DebateCategories.getInstance = function() {
	if(politi.model.DebateCategories._instance == null) politi.model.DebateCategories._instance = new politi.model.DebateCategories();
	return politi.model.DebateCategories._instance;
}
politi.model.DebateCategories.prototype._inited = null;
politi.model.DebateCategories.prototype._last = null;
politi.model.DebateCategories.prototype.categories = null;
politi.model.DebateCategories.prototype.load = function() {
	if(!this._inited) {
		this._inited = true;
		
		// PFS:
		var el = document.getElementById("debates_filter");
		var path_debates = "";
		if (el.value == "day") {
			path_debates = "../politilines/data/debates_by_day.json";
		}
		else {
			path_debates = "../politilines/data/debates_by_month.json";
		}
		
		var http = new haxe.Http(path_debates + "?" + Math.floor(Math.random() * Math.pow(10,10)));
		http.onData = $closure(this,"handleData");
		// http.request(true);
		http.request(false);
	}
}
politi.model.DebateCategories.prototype.handleData = function(data) {
	if(this.categories != null) return;
	var o = js.JQuery.parseJSON(data);
	this.categories = [];
	var cats = o.debateCategories;
	var i = 0;
	var _g = 0;
	while(_g < cats.length) {
		var data1 = cats[_g];
		++_g;
		var list = new politi.model.DebateList(data1);
		this.categories.push(list);
	}
	var latestDebates = [];
	var _g = 0, _g1 = this.categories;
	while(_g < _g1.length) {
		var list = _g1[_g];
		++_g;
		if(list.lastIndex > 0) {
			var debate = list._debates[list.lastIndex - 1];
			if(debate.loadable) latestDebates.push(debate);
		}
	}
	latestDebates.sort(function(db1,db2) {
		return db1.date.getTime() > db2.date.getTime()?1:-1;
	});
	if(latestDebates.length > 0) {
		this.selectData(latestDebates.pop());
		this.dispatchEvent(new periscopic.events.Event("debateCategoriesReady"));
	}
}
politi.model.DebateCategories.prototype.selectData = function(db) {
	if(politi.model.DebateCategories.selected != db && db != null && db.loadable) {
		politi.model.DebateCategories.selected = db;
		this.dispatchEvent(new periscopic.events.Event("debateCategoriesSelectionChange"));
		politi.model.DebateCategories.selected.load();
	}
}
politi.model.DebateCategories.prototype.__class__ = politi.model.DebateCategories;
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
politi.view.SubMenuView = function(debateList,onDateClick) {
	if( debateList === $_ ) return;
	this.open = false;
	
	// PFS:
	var el = document.getElementById("debates_filter");
	var debatesType = el.value;
	
	var futureDebates = debateList.getFutureDebates();
	var pastDebates = debateList.getPastDebates();
	var doc = js.Lib.document;
	var prev = null;
	this.titleEl = doc.createElement("div");
	this.shellEl = doc.createElement("div");
	this.listEl = doc.createElement("div");
	this.el = doc.createElement("div");
	this.titleEl.className = "submenu_title";
	this.shellEl.className = "submenu_shell";
	this.listEl.className = "submenu_list";
	this.el.className = "submenu" + (debateList.listCollapse?" collapseable":"");
	this.titleEl.innerHTML = debateList.name;
	this.el.appendChild(this.titleEl);
	this.el.appendChild(this.shellEl);
	this.shellEl.appendChild(this.listEl);
	var _g = 0;
	while(_g < pastDebates.length) {
		var db = [pastDebates[_g]];
		++_g;
		var li = [doc.createElement("li")];
		// PFS:
		if (debatesType == "day") li[0].innerHTML = db[0].writtenDate(); else li[0].innerHTML = db[0].writtenMonthYear();
		li[0].style.cursor = "pointer";
		li[0].onclick = (function(li,db) {
			return function(e) {
				onDateClick(li[0],db[0]);
			};
		})(li,db);
		if(prev == null) this.listEl.appendChild(li[0]); else this.listEl.insertBefore(li[0],prev);
		prev = li[0];
		if(db[0] == politi.model.DebateCategories.selected) onDateClick(li[0],db[0]);
	}
	var _g = 0;
	while(_g < futureDebates.length) {
		var db = futureDebates[_g];
		++_g;
		var li = doc.createElement("li");
		li.innerHTML = db.writtenDate();
		li.className = "inactive";
		if(prev == null) this.listEl.appendChild(li); else this.listEl.insertBefore(li,prev);
		prev = li;
	}
	if(debateList.listCollapse) {
		this.titleEl.onclick = $closure(this,"handleToggle");
		if(politi.model.DebateCategories.selected.list == debateList) periscopic.utils.GlobalTimer.setTimeout($closure(this,"handleToggle"),30,[null]);
	}
}
politi.view.SubMenuView.__name__ = ["politi","view","SubMenuView"];
politi.view.SubMenuView.prototype.el = null;
politi.view.SubMenuView.prototype.titleEl = null;
politi.view.SubMenuView.prototype.shellEl = null;
politi.view.SubMenuView.prototype.listEl = null;
politi.view.SubMenuView.prototype.open = null;
politi.view.SubMenuView.prototype.handleToggle = function(e) {
	this.open = !this.open;
	this.titleEl.className = "submenu_title" + (this.open?" toggled":"");
	this.shellEl.style.height = this.open?this.listEl.clientHeight + "px":"0px";
}
politi.view.SubMenuView.prototype.__class__ = politi.view.SubMenuView;
Hash = function(p) {
	if( p !== $_ ) 
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
politi.view.WordOverlay = function(uses) {
	if( uses === $_ ) return;
	var doc = js.Lib.document;
	var body = doc.body;
	var content = new js.JQuery("<div></div>").addClass("word_overlay");
	var showTmr = null;
	var curFilter = politi.model.Filter.getInstance();
	var debaterMode = curFilter.pinned == 2;
	var incept = uses[0];
	var wordObj = incept.word;
	var word = wordObj.word;
	// PFS: modifico la variable pattern per fer la cerca ignorant majuscules i minuscules
	// var pattern = new EReg("(\\W?)\\b" + word + "\\b(\\W?)","g");
	var pattern = new EReg("(\\W?)\\b" + word + "\\b(\\W?)","gi");
	var shell = new js.JQuery("<div></div>").addClass("shell");
	var head = new js.JQuery("<div></div>").addClass("head");
	if(debaterMode) {
		var issues = politi.model.DebateData.issuesIn(uses);
		head.html("<em>" + incept.sentence.block.debater.name + "</em> used the word <em>" + incept.word.word + "</em> <em>" + uses.length + "</em> time" + (uses.length > 1?"s":"") + " related to <em>" + issues.length + "</em> top issue" + (issues.length > 1?"s":"") + ".");
	} else {
		var debaters = politi.model.DebateData.debatersIn(uses);
		var s = "The word <em>" + incept.word.word + "</em> was used <em>" + uses.length + "</em> time" + (uses.length > 1?"s":"");
		if(curFilter.pinned == 0) s += " by <em>" + debaters.length + "</em> group" + (debaters.length > 1?"s":"") + "."; else s += " in this debate.";
		head.html(s);
	}
	shell.appendTo(content);
	shell.append(head);
	shell.append(new js.JQuery("<hr>"));
	var scrollpane = new js.JQuery("<div></div>").addClass("scrollpane").appendTo(shell);
	uses = uses.copy();
	uses.sort(debaterMode?politi.view.WordOverlay.sortAlphabeticUseIssues:politi.view.WordOverlay.sortAlphabeticUseDebaters);
	var prevUse = null;
	if(debaterMode) {
		var _g = 0;
		while(_g < uses.length) {
			var $use = uses[_g];
			++_g;
			if(prevUse == null || $use.sentence.block.issuesText != prevUse.sentence.block.issuesText) new js.JQuery("<div></div>").addClass("sentenceHeader").html($use.sentence.block.issuesText + ":").appendTo(scrollpane);
			if(prevUse == null || $use.sentence.block.issuesText != prevUse.sentence.block.issuesText || $use.sentence.text != prevUse.sentence.text) new js.JQuery("<div></div>").addClass("sentence").html(pattern.replace($use.sentence.text,"<em>$1" + word + "$2</em>")).appendTo(scrollpane);
			prevUse = $use;
		}
	} else {
		var _g = 0;
		while(_g < uses.length) {
			var $use = uses[_g];
			++_g;
			if(prevUse == null || $use.sentence.block.debater.name != prevUse.sentence.block.debater.name) new js.JQuery("<div></div>").addClass("sentenceHeader").html($use.sentence.block.debater.name + ":").appendTo(scrollpane);
			if(prevUse == null || $use.sentence.block.debater.name != prevUse.sentence.block.debater.name || $use.sentence.text != prevUse.sentence.text) new js.JQuery("<div></div>").addClass("sentence").html(pattern.replace($use.sentence.text,"<em>$1" + word + "$2</em>")).appendTo(scrollpane);
			prevUse = $use;
		}
	}
	var close = null;
	close = function(e) {
		content.remove();
	};
	var clickOutside = function(e) {
		var targ = new js.JQuery(e.target);
		if(!(targ["is"](".word_overlay") || targ.parents()["is"](".word_overlay"))) close(e);
	};
	new js.JQuery("<div></div>").addClass("close_btn").appendTo(content).click(close);
	periscopic.utils.GlobalTimer.setTimeout(function() {
		new js.JQuery("body").click(clickOutside);
	},1,null);
	new js.JQuery("#stage").append(content);
	var win = new js.JQuery(window);
	var stage = new js.JQuery("#stage");
	var stageOff = stage.offset();
	var xy = politi.view.WordOverlay.positionInBounds(375,300,content.width(),content.height(),stageOff.left,stageOff.top,stage.width(),stage.height(),win.scrollLeft(),win.scrollTop(),win.width(),win.height());
	content.css("top",xy.y);
	content.css("left",xy.x);
	scrollpane.jScrollPane();
}
politi.view.WordOverlay.__name__ = ["politi","view","WordOverlay"];
politi.view.WordOverlay.sortAlphabeticUseIssues = function(a,b) {
	return a.sentence.block.issuesText.toUpperCase() + a.sentence.text > b.sentence.block.issuesText.toUpperCase() + b.sentence.text?1:-1;
}
politi.view.WordOverlay.sortAlphabeticUseDebaters = function(a,b) {
	return a.sentence.block.debater.name.toUpperCase() + a.sentence.text > b.sentence.block.debater.name.toUpperCase() + b.sentence.text?1:-1;
}
politi.view.WordOverlay.positionInBounds = function(targX,targY,width,height,contLeft,contTop,contWidth,contHeight,winLeft,winTop,winWidth,winHeight) {
	var temp;
	temp = winTop + winHeight - contTop - height;
	if(targY > temp) targY = temp;
	temp = winTop - contTop;
	if(targY < temp) targY = temp;
	temp = contHeight - height;
	if(targY > temp) targY = temp;
	temp = 0;
	if(targY < temp) targY = temp;
	temp = winLeft + winWidth - contLeft - width;
	if(targX > temp) targX = temp;
	temp = winLeft - contLeft;
	if(targX < temp) targX = temp;
	temp = contWidth - width;
	if(targX > temp) targX = temp;
	temp = 0;
	if(targX < temp) targX = temp;
	return { x : targX, y : targY};
}
politi.view.WordOverlay.prototype.__class__ = politi.view.WordOverlay;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
politi.view.Bead = function(p) {
	if( p !== $_ ) 
	this.g = politi.view.VizView.vector_layer.path("M0 0");
}
politi.view.Bead.__name__ = ["politi","view","Bead"];
politi.view.Bead.procure = function() {
	var Bead = politi.view.Bead._pool.length > 0?politi.view.Bead._pool.pop():new politi.view.Bead();
	if(politi.view.Bead.last != null) politi.view.Bead.last = politi.view.Bead.last.next = Bead; else politi.view.Bead.first = politi.view.Bead.last = Bead;
	return Bead;
}
politi.view.Bead.recycle = function(inst,animate) {
	if(inst == politi.view.Bead.first) politi.view.Bead.first = inst.next;
	if(inst == politi.view.Bead.last) politi.view.Bead.last = inst.prev;
	inst.remove(animate);
}
politi.view.Bead.recycleAll = function(animate) {
	var bead;
	var next = politi.view.Bead.first;
	politi.view.Bead.first = politi.view.Bead.last = null;
	while(next != null) {
		bead = next;
		next = bead.next;
		bead.remove(animate);
	}
}
politi.view.Bead.recycled = function(inst) {
	politi.view.Bead._pool[politi.view.Bead._pool.length] = inst;
}
politi.view.Bead.first = null;
politi.view.Bead.last = null;
politi.view.Bead.defaultShape = function(bnds) {
	return politi.view.Bead.getShape(bnds.height * 0.125,Math.max(3,bnds.height * 0.125),bnds.get_left(),bnds.get_top(),bnds.width,bnds.height);
}
politi.view.Bead.getShape = function(rad,tri,left,top,width,height) {
	var triLen = tri * 1.5;
	var hh = height * 0.5;
	var inWd = width - triLen * 2;
	var side = hh - (tri + rad);
	var ceil = inWd - rad * 2;
	var s = "M" + left + " " + (top + hh) + "l" + triLen + " " + -tri + "l0 " + -side + "a" + rad + " " + rad + " 0 0 1 " + rad + " " + -rad;
	s += "l" + ceil + " 0a" + rad + " " + rad + " 0 0 1 " + rad + " " + rad + "l0 " + side + "l" + triLen + " " + tri;
	s += "l" + -triLen + " " + tri + "l0 " + side + "a" + rad + " " + rad + " 0 0 1 " + -rad + " " + rad;
	s += "l" + -ceil + " 0a" + rad + " " + rad + " 0 0 1 " + -rad + " " + -rad + "l0 " + -side + "l" + -triLen + " " + -tri + "z";
	return s;
}
politi.view.Bead.prototype.prev = null;
politi.view.Bead.prototype.next = null;
politi.view.Bead.prototype.rect = null;
politi.view.Bead.prototype.fromRect = null;
politi.view.Bead.prototype.g = null;
politi.view.Bead.prototype.del = null;
politi.view.Bead.prototype.setNode = function(node,color,opacity,delayMS,stroke,fromBounds) {
	if(delayMS == null) delayMS = 0;
	this.rect = node.bounds;
	this.fromRect = fromBounds;
	var bnds = node.bounds;
	var path = politi.view.Bead.getShape(bnds.height * 0.125,Math.max(3,bnds.height * 0.125),bnds.get_left(),bnds.get_top(),bnds.width,bnds.height);
	var pathFrom = null;
	if(fromBounds != null) pathFrom = politi.view.Bead.getShape(fromBounds.height * 0.125,Math.max(3,fromBounds.height * 0.125),fromBounds.get_left(),fromBounds.get_top(),fromBounds.width,fromBounds.height);
	var o;
	o = { path : pathFrom == null?path:pathFrom, fill : color};
	if(stroke != null) o.stroke = stroke;
	o["stroke-opacity"] = 0;
	o["fill-opacity"] = 0;
	this.g.attr(o);
	var o2 = { };
	o2["fill-opacity"] = opacity;
	if(stroke != null) o2["stroke-opacity"] = opacity;
	if(pathFrom != null) o2.path = path;
	if(delayMS <= 0) this.g.stop().animate(o2,350,">"); else this.del = periscopic.utils.GlobalTimer.setTimeout($closure(this.g,"animate"),delayMS,[o2,350,">"]);
}
politi.view.Bead.prototype.setOpacity = function(opacity,delayMS) {
	if(delayMS == null) delayMS = 0;
	var o = { };
	o["fill-opacity"] = opacity;
	this.clearDelays();
	if(delayMS <= 0) this.g.stop().animate(o,500,">"); else this.del = periscopic.utils.GlobalTimer.setTimeout($closure(this.g,"animate"),delayMS,[o,500,">"]);
}
politi.view.Bead.prototype.clearDelays = function() {
	if(this.del != null) {
		periscopic.utils.GlobalTimer.clearTimeout(this.del);
		this.del = null;
	}
}
politi.view.Bead.prototype.remove = function(animate) {
	var me = this;
	if(animate) {
		var complete = function() {
			politi.view.Bead.recycled(me);
		};
		this.hide(true,complete);
	} else {
		this.hide(false);
		politi.view.Bead.recycled(this);
	}
}
politi.view.Bead.prototype.hide = function(animate,complete) {
	if(this.prev != null) this.prev.next = this.next;
	if(this.next != null) this.next.prev = this.prev;
	this.next = this.prev = null;
	this.clearDelays();
	var o = { };
	o["fill-opacity"] = 0;
	o["stroke-opacity"] = 0;
	if(this.fromRect != null) {
		var path = politi.view.Bead.defaultShape(this.fromRect);
		o.path = path;
	}
	if(animate) this.g.stop().animate(o,350,">",complete); else this.g.stop().attr(o);
	this.rect = this.fromRect = null;
}
politi.view.Bead.prototype.__class__ = politi.view.Bead;
politi.view.KeyBead = function(p) {
	if( p !== $_ ) 
	politi.view.Bead.call(this);
	var type = is_lte_IE8?".gif":".png";
	this.gOpen = politi.view.VizView.vector_layer.image("images/open" + type,0,0,13,13);
	this.gClose = politi.view.VizView.vector_layer.image("images/close" + type,0,0,13,13);
	var o = { x : -100000, opacity : 0};
	this.gOpen.attr(o);
	this.gClose.attr(o);
	this.pin = false;
	this.ox = 0;
	this.fresh = true;
}
politi.view.KeyBead.__name__ = ["politi","view","KeyBead"];
politi.view.KeyBead.__super__ = politi.view.Bead;
for(var k in politi.view.Bead.prototype ) politi.view.KeyBead.prototype[k] = politi.view.Bead.prototype[k];
politi.view.KeyBead._instance = null;
politi.view.KeyBead._instance2 = null;
politi.view.KeyBead.getInstance = function() {
	if(politi.view.KeyBead.toggle == null || politi.view.KeyBead.toggle == false) {
		if(politi.view.KeyBead._instance == null) politi.view.KeyBead._instance = new politi.view.KeyBead();
		return politi.view.KeyBead._instance;
	} else {
		if(politi.view.KeyBead._instance2 == null) politi.view.KeyBead._instance2 = new politi.view.KeyBead();
		return politi.view.KeyBead._instance2;
	}
}
politi.view.KeyBead.toggle = null;
politi.view.KeyBead.prototype.gOpen = null;
politi.view.KeyBead.prototype.gClose = null;
politi.view.KeyBead.prototype.pin = null;
politi.view.KeyBead.prototype.ox = null;
politi.view.KeyBead.prototype.oLeft = null;
politi.view.KeyBead.prototype.fresh = null;
politi.view.KeyBead.prototype.setPinState = function(pinned,left,x) {
	var a = this.fromRect == null?this.rect:this.fromRect;
	var b = this.rect;
	var o = { x : (left?a.get_left():a.get_right()) + x, y : Std["int"](a.midY() - 7)};
	this.pin = pinned;
	this.ox = x;
	this.oLeft = left;
	var anim = !is_lte_IE8;
	if(!pinned) {
		this.gOpen.attr(o);
		this.gClose.attr({ x : -100000});
		o = { x : (left?b.get_left():b.get_right()) + x, y : Std["int"](b.midY() - 7), opacity : 1};
		if(anim) this.gOpen.animate(o,350,">"); else this.gOpen.attr(o);
	} else {
		if(this.fresh) this.gClose.attr(o);
		this.gOpen.attr({ x : -100000});
		o = { x : (left?b.get_left():b.get_right()) + x, y : Std["int"](b.midY() - 7), opacity : 1};
		if(this.fresh && anim) this.gClose.animate(o,350,">"); else this.gClose.attr(o);
	}
	this.fresh = false;
}
politi.view.KeyBead.prototype.setNode = function(node,color,opacity,delayMS,stroke,fromBounds) {
	if(delayMS == null) delayMS = 0;
	politi.view.Bead.prototype.setNode.call(this,node,color,opacity,delayMS,stroke,fromBounds);
}
politi.view.KeyBead.prototype.recycle = function(animate) {
	politi.view.KeyBead.toggle = !politi.view.KeyBead.toggle;
	var a = this.fromRect == null?this.rect:this.fromRect;
	var b = this.rect;
	var o = { x : (this.oLeft?a.get_left():a.get_right()) + this.ox, y : Std["int"](a.midY() - 7), opacity : 0};
	var p = { opacity : 0};
	var anim = animate && !is_lte_IE8;
	if(!anim) {
		o.x = -10000;
		p.x = -10000;
	}
	if(!this.pin) {
		if(anim) this.gOpen.animate(o,350,">"); else this.gOpen.attr(o);
		this.gClose.attr(p);
	} else {
		if(anim) this.gClose.animate(o,350,">"); else this.gClose.attr(o);
		this.gOpen.attr(p);
	}
	this.fresh = true;
	this.hide(animate);
}
politi.view.KeyBead.prototype.__class__ = politi.view.KeyBead;
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
Main = function(p) {
	if( p !== $_ ) 
	haxe.Firebug.redirectTraces();
	this.init();
}
Main.__name__ = ["Main"];
Main.main = function() {
	new Main();
}
Main.prototype.init = function() {
	politi.control.MainController.getInstance();
}
// PFS:
Main.reload = function() {
	// Remove side_menus elements
	var myNode = document.getElementById("side_menus");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

	var dc = politi.model.DebateCategories.getInstance();
	dc._inited = null;
	dc.categories = null
	dc.load();
}
Main.prototype.__class__ = Main;
politi.model.DebateList = function(data) {
	if( data === $_ ) return;
	this.name = data.name;
	this.listCollapse = data.listCollapse;
	var dbs = data.debates;
	var i = 0;
	var year1;
	var year2;
	this._debates = [];
	var _g = 0;
	while(_g < dbs.length) {
		var db = dbs[_g];
		++_g;
		this._debates.push(new politi.model.DebateData(db,this));
	}
	this._debates.sort(function(db1,db2) {
		return db1.date.getTime() > db2.date.getTime()?1:-1;
	});
	var i1 = this._debates.length - 1;
	while(i1 >= 0 && !this._debates[i1].loadable) i1--;
	if(this._debates.length > 0) {
		year1 = this._debates[0].date.getFullYear();
		year2 = this._debates[this._debates.length - 1].date.getFullYear();
		this.years = year1 + (year1 == year2?"":"-" + year2);
	} else this.years = "";
	this.lastIndex = i1 + 1;
}
politi.model.DebateList.__name__ = ["politi","model","DebateList"];
politi.model.DebateList.prototype.lastIndex = null;
politi.model.DebateList.prototype.name = null;
politi.model.DebateList.prototype.years = null;
politi.model.DebateList.prototype.listCollapse = null;
politi.model.DebateList.prototype._debates = null;
politi.model.DebateList.prototype.getFutureDebates = function() {
	return this._debates.slice(this.lastIndex);
}
politi.model.DebateList.prototype.getPastDebates = function() {
	var a = this._debates.slice(0,this.lastIndex);
	var i = -1;
	while(++i < a.length) if(!a[i].loadable) a.splice(i--,1);
	return a;
}
politi.model.DebateList.prototype.getDebate = function(index) {
	return this._debates[index];
}
politi.model.DebateList.prototype.__class__ = politi.model.DebateList;
periscopic.utils.ColorTool = function() { }
periscopic.utils.ColorTool.__name__ = ["periscopic","utils","ColorTool"];
periscopic.utils.ColorTool.RGBtoGray = function(n) {
	return ((255 & n) + ((65280 & n) >> 8) + ((16711680 & n) >> 16)) / 3;
}
periscopic.utils.ColorTool.grayToRGB = function(mono) {
	return (mono << 16) + (mono << 8) + mono;
}
periscopic.utils.ColorTool.RGBtoChannels = function(n) {
	return { r : (16711680 & n) >> 16, g : (65280 & n) >> 8, b : 255 & n};
}
periscopic.utils.ColorTool.ARGBtoChannels = function(n) {
	return { a : 255 & n >> 24, r : (16711680 & n) >> 16, g : (65280 & n) >> 8, b : 255 & n};
}
periscopic.utils.ColorTool.ChannelsToRGB = function(r,g,b) {
	return (r << 16) + (g << 8) + b;
}
periscopic.utils.ColorTool.ChannelsToARGB = function(a,r,g,b) {
	return (a << 24) + (r << 16) + (g << 8) + b;
}
periscopic.utils.ColorTool.interpolate = function(c1,c2,f) {
	f = Math.max(0,Math.min(1,f));
	var co1 = periscopic.utils.ColorTool.RGBtoChannels(c1);
	var co2 = periscopic.utils.ColorTool.RGBtoChannels(c2);
	return periscopic.utils.ColorTool.ChannelsToRGB(Math.round(co1.r * (1 - f) + co2.r * f),Math.round(co1.g * (1 - f) + co2.g * f),Math.round(co1.b * (1 - f) + co2.b * f));
}
periscopic.utils.ColorTool.intToCss = function(i) {
	return "#" + StringTools.hex(i);
}
periscopic.utils.ColorTool.cssToInt = function(s) {
	return Std.parseInt(StringTools.replace(s,"#","0x"));
}
periscopic.utils.ColorTool.RGB2HSB = function(red,grn,blu) {
	var x;
	var val;
	var f;
	var i;
	var hue;
	var sat;
	x = Math.min(Math.min(red,grn),blu);
	val = Math.max(Math.max(red,grn),blu);
	if(x == val) return { h : null, s : 0.0, b : val * 100};
	f = red == x?grn - blu:grn == x?blu - red:red - grn;
	i = red == x?3:grn == x?5:1;
	hue = Math.floor((i - f / (val - x)) * 60) % 360;
	sat = Math.floor((val - x) / val * 100);
	val = Math.floor(val * 100);
	return { h : hue, s : sat, b : val};
}
periscopic.utils.ColorTool.toHex = function(d) {
	var c = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	var power = 6;
	var s = "";
	var tare;
	while(power > 0) {
		power--;
		tare = Std["int"](d / Math.pow(16,power));
		d -= Std["int"](tare * Math.pow(16,power));
		s += c[tare];
	}
	return s;
}
periscopic.utils.ColorTool.prototype.__class__ = periscopic.utils.ColorTool;
periscopic.events.EventPhase = function() { }
periscopic.events.EventPhase.__name__ = ["periscopic","events","EventPhase"];
periscopic.events.EventPhase.prototype.__class__ = periscopic.events.EventPhase;
if(!politi.view.utils) politi.view.utils = {}
politi.view.utils.Dimensions = function() { }
politi.view.utils.Dimensions.__name__ = ["politi","view","utils","Dimensions"];
politi.view.utils.Dimensions.prototype.__class__ = politi.view.utils.Dimensions;
politi.view.MetaView = function(p) {
	if( p !== $_ ) 
	var doc = js.Lib.document;
	var body = doc.body;
	var content = doc.createElement("div");
	var title = doc.getElementById("describe_scope");
	content.style.width = "400px";
	content.style.height = "105px";
	content.id = "sources_tooltip_content";
	content.innerHTML = "We collected transcripts from <a href='http://cnn.com' target='_blank'>CNN</a> and the <a href='http://www.presidency.ucsb.edu/debates.php' target ='_blank'>American Presidency Project </a>at UCSB, categorized them by hand, then ranked lemmatized word-phrases (or n-grams) by their frequency of use. Word-phrases can be made of up to five words. Our ranking algorithm accounts for things such as exclusive word-phrases - meaning, it won't count \"United States\" twice if it's used in a higher n-gram such as \"President of the United States.\"";
	var tip = null;
	var anchr = null;
	var visible = false;
	var create = function() {
		tip = periscopic.js.raphael.RaphaelTooltip.create(content,8,5,false,true,0.5,5);
		tip.el.style.position = "absolute";
		anchr = doc.getElementById("sources");
		var bnds = periscopic.js.JsUtils.boundsOf(anchr,true);
		body.appendChild(tip.el);
		tip.el.className = "source_hidden";
		tip.el.style.left = Math.round(bnds.x + 0.5 * bnds.w - tip.x) + "px";
		tip.el.style.top = Math.round(bnds.y - 2 - tip.y) + "px";
	};
	create();
	var hide = function(e) {
		if(visible) {
			tip.el.className = "source_hidden";
			visible = false;
			body.onclick = null;
		}
	};
	var bind = function() {
		body.onclick = hide;
	};
	var show = function(e) {
		if(!visible) {
			if(Modernizr.touch) tip.el.className = "source_shown"; else tip.el.className = "source_hidden source_shown";
			visible = true;
			periscopic.utils.GlobalTimer.setTimeout(bind,10,[]);
		}
	};
	var updateTitle = function(e) {
		var list = politi.model.DebateCategories.selected.list;
		title.innerHTML = list.years + " <strong>" + list.name + " Debates</strong>";
	};
	politi.model.DebateCategories.getInstance().addEventListener("debateCategoriesSelectionChange",updateTitle);
	anchr.onclick = show;
}
politi.view.MetaView.__name__ = ["politi","view","MetaView"];
politi.view.MetaView.prototype.__class__ = politi.view.MetaView;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
{
	var q = window.jQuery;
	js.JQuery = q;
	q.fn.noBubble = q.fn.bind;
	q.fn.loadURL = q.fn.load;
	q.fn.toggleClick = q.fn.toggle;
	q.of = q;
	q.fn.iterator = function() {
		return { pos : 0, j : this, hasNext : function() {
			return this.pos < this.j.length;
		}, next : function() {
			return $(this.j[this.pos++]);
		}};
	};
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
window.Modernizr = Modernizr;
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
politi.view.Node.CSS_CLASS = "node";
politi.view.Node.tried = false;
politi.view.CandidateNode.OFFSET = 572;
politi.view.CandidateNode.HEIGHT = 26;
politi.view.CandidatePlot.STEPS = 60;
politi.view.CandidatePlot.WIDTH = 1;
politi.view.CandidatePlot.PAD = 1;
politi.view.CandidatePlot.HEIGHT = 20;
politi.view.CandidatePlot.ACTIVE = "#4B4B4B";
politi.view.CandidatePlot.INACTIVE = "#D0D0D0";
periscopic.events.Listener.sIDs = 1;
periscopic.events.EventDispatcher.mIDBase = 0;
politi.view.VizView.HEIGHT = 780;
politi.view.VizView.LOW_ALPHA = 0.15;
politi.view.VizView.MID_ALPHA = 0.2;
politi.view.VizView.DEFAULT_CAND_COLORS = ["#946d10","#0e948f","#94125b","#6fa20c","#a22713","#09a1da","#880cb6"];
politi.view.VizView.WORD_COLORS = ["#d13993","#36d18e","#d18a2d","#2a98d1","#d1315e","#402cd1","#8bc72c","#c75110","#22c5c7"];
politi.view.VizView.NOT_COLORS = ["#6A6A6A"];
politi.model.Filter.ISSUE = 0;
politi.model.Filter.WORD = 1;
politi.model.Filter.CANDIDATE = 2;
politi.view.WordNode.CENTER = 382;
politi.view.WordNode.HEIGHT = 26;
politi.view.WordNode.tip = null;
politi.model.DebateData.DIRECTORY = "../politilines/data/";
politi.model.DebateData.MAX_WORDS = 40;
politi.view.Thread._pool = [];
periscopic.utils.GlobalTimer.timers = new Array();
periscopic.locale.EnglishUS.MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
politi.model.Lexicon.FUTURE_DEBATE = "<span class=\"fut_date\">$DATE;</span>\n        \t\t\t\t<strong>$VENUE;</strong><br/>\n        \t\t\t\t<span class=\"fut_sponsors\">Sponsors: $SPONSORS;</span>";
politi.model.Lexicon.DEBATE_DETAIL = "<span id=\"event_date\">$DATE;</span><br/><strong>$CITY;</strong><br/>$VENUE;<br/><span id=\"event_sponsors\">Sponsors: $SPONSORS;</span>";
politi.view.IssueNode.OFFSET = 198;
politi.view.IssueNode.HEIGHT = 26;
politi.view.IssueNode.MAX_SELECTED_WIDTH = 195;
politi.model.DebateCategories.PATH = "../politilines/data/debates.json";
politi.model.DebateCategories.READY = "debateCategoriesReady";
politi.model.DebateCategories.SELECTION_CHANGE = "debateCategoriesSelectionChange";
politi.view.Bead._pool = [];
periscopic.events.EventPhase.CAPTURING_PHASE = 0;
periscopic.events.EventPhase.AT_TARGET = 1;
periscopic.events.EventPhase.BUBBLING_PHASE = 2;
politi.view.utils.Dimensions.STAGE_WIDTH = 770;
js.Lib.onerror = null;
Main.main()

})();
