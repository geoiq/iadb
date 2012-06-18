/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete 
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1); return { fragment: e, cacheable: g}
}, f.fragments = {}, f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { f.fn[a] = function (c) { var d = [], e = f(c), g = this.length === 1 && this[0].parentNode; if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) { e[b](this[0]); return this } for (var h = 0, i = e.length; h < i; h++) { var j = (h > 0 ? this.clone(!0) : this).get(); f(e[h])[b](j), d = d.concat(j) } return this.pushStack(d, a, e.selector) } }), f.extend({ clone: function (a, b, c) { var d = a.cloneNode(!0), e, g, h; if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) { bh(a, d), e = bi(a), g = bi(d); for (h = 0; e[h]; ++h) g[h] && bh(e[h], g[h]) } if (b) { bg(a, d); if (c) { e = bi(a), g = bi(d); for (h = 0; e[h]; ++h) bg(e[h], g[h]) } } e = g = null; return d }, clean: function (a, b, d, e) { var g; b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c); var h = [], i; for (var j = 0, k; (k = a[j]) != null; j++) { typeof k == "number" && (k += ""); if (!k) continue; if (typeof k == "string") if (!_.test(k)) k = b.createTextNode(k); else { k = k.replace(Y, "<$1></$2>"); var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = be[l] || be._default, n = m[0], o = b.createElement("div"); o.innerHTML = m[1] + k + m[2]; while (n--) o = o.lastChild; if (!f.support.tbody) { var p = $.test(k), q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : []; for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i]) } !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes } var r; if (!f.support.appendChecked) if (k[0] && typeof (r = k.length) == "number") for (i = 0; i < r; i++) bk(k[i]); else bk(k); k.nodeType ? h.push(k) : h = f.merge(h, k) } if (d) { g = function (a) { return !a.type || bc.test(a.type) }; for (j = 0; h[j]; j++) if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]); else { if (h[j].nodeType === 1) { var s = f.grep(h[j].getElementsByTagName("script"), g); h.splice.apply(h, [j + 1, 0].concat(s)) } d.appendChild(h[j]) } } return h }, cleanData: function (a) { var b, c, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando; for (var i = 0, j; (j = a[i]) != null; i++) { if (j.nodeName && f.noData[j.nodeName.toLowerCase()]) continue; c = j[f.expando]; if (c) { b = d[c] && d[c][e]; if (b && b.events) { for (var k in b.events) g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle); b.handle && (b.handle.elem = null) } h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c] } } } }); var bm = /alpha\([^)]*\)/i, bn = /opacity=([^)]*)/, bo = /([A-Z]|^ms)/g, bp = /^-?\d+(?:px)?$/i, bq = /^-?\d/, br = /^([\-+])=([\-+.\de]+)/, bs = { position: "absolute", visibility: "hidden", display: "block" }, bt = ["Left", "Right"], bu = ["Top", "Bottom"], bv, bw, bx; f.fn.css = function (a, c) { if (arguments.length === 2 && c === b) return this; return f.access(this, a, c, !0, function (a, c, d) { return d !== b ? f.style(a, c, d) : f.css(a, c) }) }, f.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = bv(a, "opacity", "opacity"); return c === "" ? "1" : c } return a.style.opacity } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": f.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, c, d, e) { if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) { var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i]; c = f.cssProps[i] || i; if (d === b) { if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g; return j[c] } h = typeof d, h === "string" && (g = br.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number"); if (d == null || h === "number" && isNaN(d)) return; h === "number" && !f.cssNumber[i] && (d += "px"); if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try { j[c] = d } catch (l) { } } }, css: function (a, c, d) { var e, g; c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float"); if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e; if (bv) return bv(a, c) }, swap: function (a, b, c) { var d = {}; for (var e in b) d[e] = a.style[e], a.style[e] = b[e]; c.call(a); for (e in b) a.style[e] = d[e] } }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) { f.cssHooks[b] = { get: function (a, c, d) { var e; if (c) { if (a.offsetWidth !== 0) return by(a, b, d); f.swap(a, bs, function () { e = by(a, b, d) }); return e } }, set: function (a, b) { if (!bp.test(b)) return b; b = parseFloat(b); if (b >= 0) return b + "px" } } }), f.support.opacity || (f.cssHooks.opacity = { get: function (a, b) { return bn.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")", g = d && d.filter || c.filter || ""; c.zoom = 1; if (b >= 1 && f.trim(g.replace(bm, "")) === "") { c.removeAttribute("filter"); if (d && !d.filter) return } c.filter = bm.test(g) ? g.replace(bm, e) : g + " " + e } }), f(function () { f.support.reliableMarginRight || (f.cssHooks.marginRight = { get: function (a, b) { var c; f.swap(a, { display: "inline-block" }, function () { b ? c = bv(a, "margin-right", "marginRight") : c = a.style.marginRight }); return c } }) }), c.defaultView && c.defaultView.getComputedStyle && (bw = function (a, c) { var d, e, g; c = c.replace(bo, "-$1").toLowerCase(); if (!(e = a.ownerDocument.defaultView)) return b; if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c)); return d }), c.documentElement.currentStyle && (bx = function (a, b) { var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style; !bp.test(d) && bq.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e)); return d === "" ? "auto" : d }), bv = bw || bx, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) { var b = a.offsetWidth, c = a.offsetHeight; return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none" }, f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }); var bz = /%20/g, bA = /\[\]$/, bB = /\r?\n/g, bC = /#.*$/, bD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bE = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bF = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bG = /^(?:GET|HEAD)$/, bH = /^\/\//, bI = /\?/, bJ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bK = /^(?:select|textarea)/i, bL = /\s+/, bM = /([?&])_=[^&]*/, bN = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bO = f.fn.load, bP = {}, bQ = {}, bR, bS, bT = ["*/"] + ["*"]; try { bR = e.href } catch (bU) { bR = c.createElement("a"), bR.href = "", bR = bR.href } bS = bN.exec(bR.toLowerCase()) || [], f.fn.extend({ load: function (a, c, d) { if (typeof a != "string" && bO) return bO.apply(this, arguments); if (!this.length) return this; var e = a.indexOf(" "); if (e >= 0) { var g = a.slice(e, a.length); a = a.slice(0, e) } var h = "GET"; c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST")); var i = this; f.ajax({ url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) { c = a.responseText, a.isResolved() && (a.done(function (a) { c = a }), i.html(g ? f("<div>").append(c.replace(bJ, "")).find(g) : c)), d && i.each(d, [c, b, a]) } }); return this }, serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? f.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || bK.test(this.nodeName) || bE.test(this.type)) }).map(function (a, b) { var c = f(this).val(); return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) { return { name: b.name, value: a.replace(bB, "\r\n")} }) : { name: b.name, value: c.replace(bB, "\r\n")} }).get() } }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { f.fn[b] = function (a) { return this.bind(b, a) } }), f.each(["get", "post"], function (a, c) { f[c] = function (a, d, e, g) { f.isFunction(d) && (g = g || e, e = d, d = b); return f.ajax({ type: c, url: a, data: d, success: e, dataType: g }) } }), f.extend({ getScript: function (a, c) { return f.get(a, b, c, "script") }, getJSON: function (a, b, c) { return f.get(a, b, c, "json") }, ajaxSetup: function (a, b) { b ? bX(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), bX(a, b); return a }, ajaxSettings: { url: bR, isLocal: bF.test(bS[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bT }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { context: !0, url: !0} }, ajaxPrefilter: bV(bP), ajaxTransport: bV(bQ), ajax: function (a, c) { function w(a, c, l, m) { if (s !== 2) { s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0; var o, r, u, w = c, x = l ? bZ(d, v, l) : b, y, z; if (a >= 200 && a < 300 || a === 304) { if (d.ifModified) { if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y; if (z = v.getResponseHeader("Etag")) f.etag[k] = z } if (a === 304) w = "notmodified", o = !0; else try { r = b$(d, x), w = "success", o = !0 } catch (A) { w = "parsererror", u = A } } else { u = w; if (!w || a) w = "error", a < 0 && (a = 0) } v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop")) } } typeof a == "object" && (c = a, a = b), c = c || {}; var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f._Deferred(), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = { readyState: 0, setRequestHeader: function (a, b) { if (!s) { var c = a.toLowerCase(); a = m[c] = m[c] || a, l[a] = b } return this }, getAllResponseHeaders: function () { return s === 2 ? n : null }, getResponseHeader: function (a) { var c; if (s === 2) { if (!o) { o = {}; while (c = bD.exec(n)) o[c[1].toLowerCase()] = c[2] } c = o[a.toLowerCase()] } return c === b ? null : c }, overrideMimeType: function (a) { s || (d.mimeType = a); return this }, abort: function (a) { a = a || "abort", p && p.abort(a), w(0, a); return this } }; h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) { if (a) { var b; if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b) } return this }, d.url = ((a || d.url) + "").replace(bC, "").replace(bH, bS[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bL), d.crossDomain == null && (r = bN.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bS[1] && r[2] == bS[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bS[3] || (bS[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bW(bP, d, c, v); if (s === 2) return !1; t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bG.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart"); if (!d.hasContent) { d.data && (d.url += (bI.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url; if (d.cache === !1) { var x = f.now(), y = d.url.replace(bM, "$1_=" + x); d.url = y + (y === d.url ? (bI.test(d.url) ? "&" : "?") + "_=" + x : "") } } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bT + "; q=0.01" : "") : d.accepts["*"]); for (u in d.headers) v.setRequestHeader(u, d.headers[u]); if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) { v.abort(); return !1 } for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]); p = bW(bQ, d, c, v); if (!p) w(-1, "No Transport"); else { v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () { v.abort("timeout") }, d.timeout)); try { s = 1, p.send(l, w) } catch (z) { s < 2 ? w(-1, z) : f.error(z) } } return v }, param: function (a, c) { var d = [], e = function (a, b) { b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; c === b && (c = f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () { e(this.name, this.value) }); else for (var g in a) bY(g, a[g], c, e); return d.join("&").replace(bz, "+") } }), f.extend({ active: 0, lastModified: {}, etag: {} }); var b_ = f.now(), ca = /(\=)\?(&|$)|\?\?/i; f.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { return f.expando + "_" + b_++ } }), f.ajaxPrefilter("json jsonp", function (b, c, d) { var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string"; if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) { var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2"; b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) { g = [a] }, d.always(function () { a[h] = i, g && f.isFunction(i) && a[h](g[0]) }), b.converters["script json"] = function () { g || f.error(h + " was not called"); return g[0] }, b.dataTypes[0] = "json"; return "script" } }), f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function (a) { f.globalEval(a); return a } } }), f.ajaxPrefilter("script", function (a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), f.ajaxTransport("script", function (a) { if (a.crossDomain) { var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement; return { send: function (f, g) { d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) { if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success") }, e.insertBefore(d, e.firstChild) }, abort: function () { d && d.onload(0, 1) } } } }); var cb = a.ActiveXObject ? function () { for (var a in cd) cd[a](0, 1) } : !1, cc = 0, cd; f.ajaxSettings.xhr = a.ActiveXObject ? function () { return !this.isLocal && ce() || cf() } : ce, function (a) { f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) } (f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) { if (!c.crossDomain || f.support.cors) { var d; return { send: function (e, g) { var h = c.xhr(), i, j; c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async); if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j]; c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest"); try { for (j in e) h.setRequestHeader(j, e[j]) } catch (k) { } h.send(c.hasContent && c.data || null), d = function (a, e) { var j, k, l, m, n; try { if (d && (e || h.readyState === 4)) { d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]); if (e) h.readyState !== 4 && h.abort(); else { j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText; try { k = h.statusText } catch (o) { k = "" } !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204) } } } catch (p) { e || g(-1, p) } m && g(j, k, m, l) }, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange = d) }, abort: function () { d && d(0, 1) } } } }); var cg = {}, ch, ci, cj = /^(?:toggle|show|hide)$/, ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cl, cm = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cn; f.fn.extend({ show: function (a, b, c) { var d, e; if (a || a === 0) return this.animate(cq("show", 3), a, b, c); for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cr(d.nodeName))); for (g = 0; g < h; g++) { d = this[g]; if (d.style) { e = d.style.display; if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || "" } } return this }, hide: function (a, b, c) { if (a || a === 0) return this.animate(cq("hide", 3), a, b, c); for (var d = 0, e = this.length; d < e; d++) if (this[d].style) { var g = f.css(this[d], "display"); g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g) } for (d = 0; d < e; d++) this[d].style && (this[d].style.display = "none"); return this }, _toggle: f.fn.toggle, toggle: function (a, b, c) { var d = typeof a == "boolean"; f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () { var b = d ? a : f(this).is(":hidden"); f(this)[b ? "show" : "hide"]() }) : this.animate(cq("toggle", 3), a, b, c); return this }, fadeTo: function (a, b, c, d) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = f.speed(b, c, d); if (f.isEmptyObject(a)) return this.each(e.complete, [!1]); a = f.extend({}, a); return this[e.queue === !1 ? "each" : "queue"](function () { e.queue === !1 && f._mark(this); var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o; b.animatedProperties = {}; for (i in a) { g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing"; if (h === "hide" && d || h === "show" && !d) return b.complete.call(this); c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cr(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block")) } b.overflow != null && (this.style.overflow = "hidden"); for (i in a) k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !== "px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, "")); return !0 }) }, stop: function (a, b) { a && this.queue([]), this.each(function () { var a = f.timers, c = a.length; b || f._unmark(!0, this); while (c--) a[c].elem === this && (b && a[c](!0), a.splice(c, 1)) }), b || this.dequeue(); return this } }), f.each({ slideDown: cq("show", 1), slideUp: cq("hide", 1), slideToggle: cq("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (a, b) { f.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), f.extend({ speed: function (a, b, c) { var d = a && typeof a == "object" ? f.extend({}, a) : { complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b }; d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) { f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this) }; return d }, easing: { linear: function (a, b, c, d) { return c + d * a }, swing: function (a, b, c, d) { return (-Math.cos(a * Math.PI) / 2 + .5) * d + c } }, timers: [], fx: function (a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} } }), f.fx.prototype = { update: function () { this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this) }, cur: function () { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop]; var a, b = f.css(this.elem, this.prop); return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a }, custom: function (a, b, c) { function g(a) { return d.step(a) } var d = this, e = f.fx; this.startTime = cn || co(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !cl && (cl = setInterval(e.tick, e.interval)) }, show: function () { this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show() }, hide: function () { this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function (a) { var b = cn || co(), c = !0, d = this.elem, e = this.options, g, h; if (a || b >= e.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0; for (g in e.animatedProperties) e.animatedProperties[g] !== !0 && (c = !1); if (c) { e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) { d.style["overflow" + b] = e.overflow[a] }), e.hide && f(d).hide(); if (e.hide || e.show) for (var i in e.animatedProperties) f.style(d, i, e.orig[i]); e.complete.call(d) } return !1 } e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(); return !0 } }, f.extend(f.fx, { tick: function () { for (var a = f.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1); a.length || f.fx.stop() }, interval: 13, stop: function () { clearInterval(cl), cl = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function (a) { f.style(a.elem, "opacity", a.now) }, _default: function (a) { a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now } } }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }); var cs = /^t(?:able|d|h)$/i, ct = /^(?:body|html)$/i; "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) { var b = this[0], c; if (a) return this.each(function (b) { f.offset.setOffset(this, a, b) }); if (!b || !b.ownerDocument) return null; if (b === b.ownerDocument.body) return f.offset.bodyOffset(b); try { c = b.getBoundingClientRect() } catch (d) { } var e = b.ownerDocument, g = e.documentElement; if (!c || !f.contains(g, b)) return c ? { top: c.top, left: c.left} : { top: 0, left: 0 }; var h = e.body, i = cu(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0, l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop, m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j, o = c.left + m - k; return { top: n, left: o} } : f.fn.offset = function (a) { var b = this[0]; if (a) return this.each(function (b) { f.offset.setOffset(this, a, b) }); if (!b || !b.ownerDocument) return null; if (b === b.ownerDocument.body) return f.offset.bodyOffset(b); f.offset.initialize(); var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft; while ((b = b.parentNode) && b !== i && b !== h) { if (f.offset.supportsFixedPosition && k.position === "fixed") break; c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !cs.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c } if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft; f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft)); return { top: l, left: m} }, f.offset = { initialize: function () { var a = c.body, b = c.createElement("div"), d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0, j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"; f.extend(b.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop }, bodyOffset: function (a) { var b = a.offsetTop, c = a.offsetLeft; f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0); return { top: b, left: c} }, setOffset: function (a, b, c) { var d = f.css(a, "position"); d === "static" && (a.style.position = "relative"); var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n; j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k) } }, f.fn.extend({ position: function () { if (!this[0]) return null; var a = this[0], b = this.offsetParent(), c = this.offset(), d = ct.test(b[0].nodeName) ? { top: 0, left: 0} : b.offset(); c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0; return { top: c.top - d.top, left: c.left - d.left} }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || c.body; while (a && !ct.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent; return a }) } }), f.each(["Left", "Top"], function (a, c) { var d = "scroll" + c; f.fn[d] = function (c) { var e, g; if (c === b) { e = this[0]; if (!e) return null; g = cu(e); return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d] } return this.each(function () { g = cu(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c }) } }), f.each(["Height", "Width"], function (a, c) { var d = c.toLowerCase(); f.fn["inner" + c] = function () { var a = this[0]; return a && a.style ? parseFloat(f.css(a, d, "padding")) : null }, f.fn["outer" + c] = function (a) { var b = this[0]; return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null }, f.fn[d] = function (a) { var e = this[0]; if (!e) return a == null ? null : this; if (f.isFunction(a)) return this.each(function (b) { var c = f(this); c[d](a.call(this, b, c[d]())) }); if (f.isWindow(e)) { var g = e.document.documentElement["client" + c], h = e.document.body; return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g } if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]); if (a === b) { var i = f.css(e, d), j = parseFloat(i); return f.isNaN(j) ? i : j } return this.css(d, typeof a == "string" ? a : a + "px") } }), a.jQuery = a.$ = f
})(window);
﻿/// <reference path="knockout-1.3.0-beta-debug.js" />
(function ($, ko) {

    // signal for all menus to avoid delay when another menu is selected
    var menuSelected = new signals.Signal();
    ko.bindingHandlers['highlightable'] = {
        init: function (element, valueAccessor) {
            var link = $(element);
            $(element).hover(function (obj) {
                $(element).addClass("highlighted");
            },
            function (obj) {
                $(element).removeClass("highlighted");
            });
        }
    };
    // This binding handler is used to define behavior of top menus
    ko.bindingHandlers['menu'] = {
        init: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor());
            var link = $(element);
            var parent = link; //link.parent();
            options.timeout = options.timeout || 200;
            options.offset = options.offset || 0;
            options.attachment = options.attachment || 'left';
            var menu = $("#" + options.id);
            var content = menu.children('.content');

            // hiding the dropdown
            function hide() {
                menu.hide();
                parent.removeClass('highlighted');
            }
            var id = 0;

            // hooking to the event
            menuSelected.add(function () { if (id > 0) window.clearTimeout(id); hide() });

            // handlers for menu item
            link.mouseover(function (e) {
                // letting other menus know it's time to close without the delay
                menuSelected.dispatch();
                if (id > 0) window.clearTimeout(id);
                var at = parent.offset();
                var width = parent.outerWidth(false);
                if (options.bottom) {
                    if (options.attachment == 'left') {
                        menu.css({ position: 'absolute', left: (at.left + options.offset) + 'px', bottom: '43px' });
                    } else if (options.attachment == 'right') {
                        menu.css({ position: 'absolute', right: (window.document.body.clientWidth - (at.left + width + options.offset)) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', right: '0px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', left: '0px', top: at.top + parent.outerHeight() + 'px' });
                    }
                } else {
                    if (options.attachment == 'left') {
                        menu.css({ position: 'absolute', left: (at.left + options.offset) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'right') {
                        menu.css({ position: 'absolute', right: (window.document.body.clientWidth - (at.left + width + options.offset)) + 'px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorright') {
                        menu.css({ position: 'absolute', right: '0px', top: at.top + parent.outerHeight() + 'px' });
                    } else if (options.attachment == 'anchorleft') {
                        menu.css({ position: 'absolute', left: '0px', top: at.top + parent.outerHeight() + 'px' });
                    }
                }
                //content.css({ 'max-height': (window.document.body.clientHeight - 200) + 'px' });
                parent.addClass('highlighted');
                menu.show();
                if (options.focus) {
                    $("#" + options.focus)[0].focus();
                }
            }).mouseout(function (e) {
                // closing the window with the delay
                if (id > 0) window.clearTimeout(id);
                id = window.setTimeout(hide, options.timeout);
            });

            // handlers for dropdown
            menu.mouseover(function () {
                // abort closing
                window.clearTimeout(id);
            }).mouseout(function () {
                if (id > 0) window.clearTimeout(id);
                id = window.setTimeout(hide, options.timeout);
            });

            link.attr('href', '#');
        }
    };

    // this binding handler defines behavior of slide windows
    ko.bindingHandlers['slide'] = {
        init: function (element, valueAccessor) {

        },
        update: function (element, valueAccessor) {
            var options = ko.utils.unwrapObservable(valueAccessor());
            var visible = ko.utils.unwrapObservable(options.value);
            var callback = options.callback;
            $(element)['slide' + (visible ? 'Down' : 'Up')](function () {
                if (options.handleSelector) {
                    $(options.handleSelector)[(visible ? 'add' : 'remove') + 'Class']('expanded');
                }
                if (callback) {
                    callback();
                }
            });
        }
    };

    // this binding handler helps to bind css display
    ko.bindingHandlers['display'] = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            element.style.display = value ? 'block' : 'none';
        }
    };

    // this binding helps center windows when a property changes it's value
    ko.bindingHandlers['centerWhen'] = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                window.setTimeout(function () {
                    element.style.left = Math.round((document.body.clientWidth - element.clientWidth) / 2) + 'px';
                    element.style.top = Math.round((document.body.clientHeight - element.clientHeight) / 2) + 'px';
                }, 0);
            }
        }
    }

    ko.bindingHandlers.fadeVisible = {
        init: function (element, valueAccessor) {
            // Initially set the element to be instantly visible/hidden depending on the value
            var value = valueAccessor();
            $(element).toggle(ko.utils.unwrapObservable(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
        },
        update: function (element, valueAccessor) {
            // Whenever the value subsequently changes, slowly fade the element in or out
            var value = valueAccessor();
            ko.utils.unwrapObservable(value) ? $(element).fadeIn(100) : $(element).fadeOut(100);
        }
    };

} (jQuery, ko));

String.prototype.startsWith = function (str, ignoreCase) {
    if (ignoreCase) {
        return this.slice(0, str.length).toLowerCase() == str.toLowerCase();
    } else {
        return this.slice(0, str.length) == str;
    }
};
/** @license
 * Crossroads.js <http://millermedeiros.github.com/crossroads.js>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 0.7.1 - Build: 88 (2012/01/06 05:17 PM)
 */

(function (define) {
define('crossroads', function (require) {
    var signals = require('signals');

    var crossroads,
        patternLexer,
        UNDEF;

    // Helpers -----------
    //====================

    function arrayIndexOf(arr, val) {
        if (arr.indexOf) {
            return arr.indexOf(val);
        } else {
            //Array.indexOf doesn't work on IE 6-7
            var n = arr.length;
            while (n--) {
                if (arr[n] === val) {
                    return n;
                }
            }
            return -1;
        }
    }

    function isKind(val, kind) {
        return '[object '+ kind +']' === Object.prototype.toString.call(val);
    }

    function isRegExp(val) {
        return isKind(val, 'RegExp');
    }

    function isArray(val) {
        return isKind(val, 'Array');
    }

    function isFunction(val) {
        return isKind(val, 'Function');
    }

    //borrowed from AMD-utils
    function typecastValue(val) {
        var r;
        if (val === null || val === 'null') {
            r = null;
        } else if (val === 'true') {
            r = true;
        } else if (val === 'false') {
            r = false;
        } else if (val === UNDEF || val === 'undefined') {
            r = UNDEF;
        } else if (val === '' || isNaN(val)) {
            //isNaN('') returns false
            r = val;
        } else {
            //parseFloat(null || '') returns NaN
            r = parseFloat(val);
        }
        return r;
    }

    function typecastArrayValues(values) {
        var n = values.length,
            result = [];
        while (n--) {
            result[n] = typecastValue(values[n]);
        }
        return result;
    }


    // Crossroads --------
    //====================

    /**
     * @constructor
     */
    function Crossroads() {
        this._routes = [];
        this.bypassed = new signals.Signal();
        this.routed = new signals.Signal();
    }

    Crossroads.prototype = {

        normalizeFn : null,

        create : function () {
            return new Crossroads();
        },

        shouldTypecast : false,

        addRoute : function (pattern, callback, priority) {
            var route = new Route(pattern, callback, priority, this);
            this._sortedInsert(route);
            return route;
        },

        removeRoute : function (route) {
            var i = arrayIndexOf(this._routes, route);
            if (i !== -1) {
                this._routes.splice(i, 1);
            }
            route._destroy();
        },

        removeAllRoutes : function () {
            var n = this.getNumRoutes();
            while (n--) {
                this._routes[n]._destroy();
            }
            this._routes.length = 0;
        },

        parse : function (request) {
            request = request || '';

            var routes = this._getMatchedRoutes(request),
                i = 0,
                n = routes.length,
                cur;

            if (n) {
                //shold be incremental loop, execute routes in order
                while (i < n) {
                    cur = routes[i];
                    cur.route.matched.dispatch.apply(cur.route.matched, cur.params);
                    cur.isFirst = !i;
                    this.routed.dispatch(request, cur);
                    i += 1;
                }
            } else {
                this.bypassed.dispatch(request);
            }
        },

        getNumRoutes : function () {
            return this._routes.length;
        },

        _sortedInsert : function (route) {
            //simplified insertion sort
            var routes = this._routes,
                n = routes.length;
            do { --n; } while (routes[n] && route._priority <= routes[n]._priority);
            routes.splice(n+1, 0, route);
        },

        _getMatchedRoutes : function (request) {
            var res = [],
                routes = this._routes,
                n = routes.length,
                route;
            //should be decrement loop since higher priorities are added at the end of array
            while (route = routes[--n]) {
                if ((!res.length || route.greedy) && route.match(request)) {
                    res.push({
                        route : route,
                        params : route._getParamsArray(request)
                    });
                }
            }
            return res;
        },

        toString : function () {
            return '[crossroads numRoutes:'+ this.getNumRoutes() +']';
        }
    };

    //"static" instance
    crossroads = new Crossroads();
    crossroads.VERSION = '0.7.1';



    // Route --------------
    //=====================

    /**
     * @constructor
     */
    function Route(pattern, callback, priority, router) {
        var isRegexPattern = isRegExp(pattern);
        this._router = router;
        this._pattern = pattern;
        this._paramsIds = isRegexPattern? null : patternLexer.getParamIds(this._pattern);
        this._optionalParamsIds = isRegexPattern? null : patternLexer.getOptionalParamsIds(this._pattern);
        this._matchRegexp = isRegexPattern? pattern : patternLexer.compilePattern(pattern);
        this.matched = new signals.Signal();
        if (callback) {
            this.matched.add(callback);
        }
        this._priority = priority || 0;
    }

    Route.prototype = {

        greedy : false,

        rules : void(0),

        match : function (request) {
            return this._matchRegexp.test(request) && this._validateParams(request); //validate params even if regexp because of `request_` rule.
        },

        _validateParams : function (request) {
            var rules = this.rules,
                values = this._getParamsObject(request),
                key;
            for (key in rules) {
                // normalize_ isn't a validation rule... (#39)
                if(key !== 'normalize_' && rules.hasOwnProperty(key) && ! this._isValidParam(request, key, values)){
                    return false;
                }
            }
            return true;
        },

        _isValidParam : function (request, prop, values) {
            var validationRule = this.rules[prop],
                val = values[prop],
                isValid = false;

            if (val == null && this._optionalParamsIds && arrayIndexOf(this._optionalParamsIds, prop) !== -1) {
                isValid = true;
            }
            else if (isRegExp(validationRule)) {
                isValid = validationRule.test(val);
            }
            else if (isArray(validationRule)) {
                isValid = arrayIndexOf(validationRule, val) !== -1;
            }
            else if (isFunction(validationRule)) {
                isValid = validationRule(val, request, values);
            }

            return isValid; //fail silently if validationRule is from an unsupported type
        },

        _getParamsObject : function (request) {
            var shouldTypecast = this._router.shouldTypecast,
                values = patternLexer.getParamValues(request, this._matchRegexp, shouldTypecast),
                o = {},
                n = values.length;
            while (n--) {
                o[n] = values[n]; //for RegExp pattern and also alias to normal paths
                if (this._paramsIds) {
                    o[this._paramsIds[n]] = values[n];
                }
            }
            o.request_ = shouldTypecast? typecastValue(request) : request;
            o.vals_ = values;
            return o;
        },

        _getParamsArray : function (request) {
            var norm = this.rules? this.rules.normalize_ : null,
                params;
            norm = norm || this._router.normalizeFn; // default normalize
            if (norm && isFunction(norm)) {
                params = norm(request, this._getParamsObject(request));
            } else {
                params = patternLexer.getParamValues(request, this._matchRegexp, this._router.shouldTypecast);
            }
            return params;
        },

        dispose : function () {
            this._router.removeRoute(this);
        },

        _destroy : function () {
            this.matched.dispose();
            this.matched = this._pattern = this._matchRegexp = null;
        },

        toString : function () {
            return '[Route pattern:"'+ this._pattern +'", numListeners:'+ this.matched.getNumListeners() +']';
        }

    };



    // Pattern Lexer ------
    //=====================

    patternLexer = crossroads.patternLexer = (function () {


        var ESCAPE_CHARS_REGEXP = /[\\.+*?\^$\[\](){}\/'#]/g, //match chars that should be escaped on string regexp
            UNNECESSARY_SLASHES_REGEXP = /\/$/g, //trailing slash
            OPTIONAL_SLASHES_REGEXP = /([:}]|\w(?=\/))\/?(:)/g, //slash between `::` or `}:` or `\w:`. $1 = before, $2 = after
            REQUIRED_SLASHES_REGEXP = /([:}])\/?(\{)/g, //used to insert slash between `:{` and `}{`

            REQUIRED_PARAMS_REGEXP = /\{([^}]+)\}/g, //match everything between `{ }`
            OPTIONAL_PARAMS_REGEXP = /:([^:]+):/g, //match everything between `: :`
            PARAMS_REGEXP = /(?:\{|:)([^}:]+)(?:\}|:)/g, //capture everything between `{ }` or `: :`

            //used to save params during compile (avoid escaping things that
            //shouldn't be escaped).
            SAVE_REQUIRED_PARAMS = '__CR_RP__',
            SAVE_OPTIONAL_PARAMS = '__CR_OP__',
            SAVE_REQUIRED_SLASHES = '__CR_RS__',
            SAVE_OPTIONAL_SLASHES = '__CR_OS__',
            SAVED_REQUIRED_REGEXP = new RegExp(SAVE_REQUIRED_PARAMS, 'g'),
            SAVED_OPTIONAL_REGEXP = new RegExp(SAVE_OPTIONAL_PARAMS, 'g'),
            SAVED_OPTIONAL_SLASHES_REGEXP = new RegExp(SAVE_OPTIONAL_SLASHES, 'g'),
            SAVED_REQUIRED_SLASHES_REGEXP = new RegExp(SAVE_REQUIRED_SLASHES, 'g');


        function captureVals(regex, pattern) {
            var vals = [], match;
            while (match = regex.exec(pattern)) {
                vals.push(match[1]);
            }
            return vals;
        }

        function getParamIds(pattern) {
            return captureVals(PARAMS_REGEXP, pattern);
        }

        function getOptionalParamsIds(pattern) {
            return captureVals(OPTIONAL_PARAMS_REGEXP, pattern);
        }

        function compilePattern(pattern) {
            pattern = pattern || '';
            if(pattern){
                pattern = pattern.replace(UNNECESSARY_SLASHES_REGEXP, '');
                pattern = tokenize(pattern);
                pattern = pattern.replace(ESCAPE_CHARS_REGEXP, '\\$&');
                pattern = untokenize(pattern);
            }
            return new RegExp('^'+ pattern + '/?$'); //trailing slash is optional
        }

        function tokenize(pattern) {
            //save chars that shouldn't be escaped
            pattern = pattern.replace(OPTIONAL_SLASHES_REGEXP, '$1'+ SAVE_OPTIONAL_SLASHES +'$2');
            pattern = pattern.replace(REQUIRED_SLASHES_REGEXP, '$1'+ SAVE_REQUIRED_SLASHES +'$2');
            pattern = pattern.replace(OPTIONAL_PARAMS_REGEXP, SAVE_OPTIONAL_PARAMS);
            return pattern.replace(REQUIRED_PARAMS_REGEXP, SAVE_REQUIRED_PARAMS);
        }

        function untokenize(pattern) {
            pattern = pattern.replace(SAVED_OPTIONAL_SLASHES_REGEXP, '\\/?');
            pattern = pattern.replace(SAVED_REQUIRED_SLASHES_REGEXP, '\\/');
            pattern = pattern.replace(SAVED_OPTIONAL_REGEXP, '([^\\/]+)?\/?');
            return pattern.replace(SAVED_REQUIRED_REGEXP, '([^\\/]+)');
        }

        function getParamValues(request, regexp, shouldTypecast) {
            var vals = regexp.exec(request);
            if (vals) {
                vals.shift();
                if (shouldTypecast) {
                    vals = typecastArrayValues(vals);
                }
            }
            return vals;
        }

        //API
        return {
            getParamIds : getParamIds,
            getOptionalParamsIds : getOptionalParamsIds,
            getParamValues : getParamValues,
            compilePattern : compilePattern
        };

    }());


    return crossroads;
});
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require);
    } else {
        window[id] = factory(function (value) {
            return window[value];
        });
    }
}));
﻿/*!!
* Hasher <http://github.com/millermedeiros/hasher>
* @author Miller Medeiros
* @version 1.0.0 (2011/08/03 10:49 PM)
* Released under the MIT License
*/


/*jshint white:false*/
/*global signals:false, window:false*/

/**
* Hasher
* @namespace History Manager for rich-media applications.
* @name hasher
*/
var hasher = (function (window) {

    //--------------------------------------------------------------------------------------
    // Private Vars
    //--------------------------------------------------------------------------------------

    var 

        POOL_INTERVAL = 25,

    // local storage for brevity and better compression --------------------------------

        document = window.document,
        location = window.location,
        history = window.history,
        Signal = signals.Signal,

    // local vars ----------------------------------------------------------------------

        hasher,
        _hash,
        _checkInterval,
        _isActive,
        _frame, //iframe used for legacy IE (6-7)
        _checkHistory,
        _hashValRegexp = /#(.*)$/,
        _baseUrlRegexp = /(\?.*)|(\#.*)/,
        _hashRegexp = /^\#/,

    // sniffing/feature detection -------------------------------------------------------

        _isIE = (! +"\v1"), //hack based on this: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
        _isHashChangeSupported = ('onhashchange' in window), // FF3.6+, IE8+, Chrome 5+, Safari 5+
        _isLegacyIE = _isIE && !_isHashChangeSupported, //check if is IE6-7 since hash change is only supported on IE8+ and changing hash value on IE6-7 doesn't generate history record.
        _isLocal = (location.protocol === 'file:');


    //--------------------------------------------------------------------------------------
    // Private Methods
    //--------------------------------------------------------------------------------------

    function _trimHash(hash) {
        if (!hash) return '';
        var regexp = new RegExp('^\\' + hasher.prependHash + '|\\' + hasher.appendHash + '$', 'g');
        return hash.replace(regexp, '');
    }

    function _getWindowHash() {
        //parsed full URL instead of getting location.hash because Firefox decode hash value (and all the other browsers don't)
        //also because of IE8 bug with hash query in local file [issue #6]
        var result = _hashValRegexp.exec(hasher.getURL());
        return (result && result[1]) ? decodeURIComponent(result[1]) : '';
    }

    function _getFrameHash() {
        return (_frame) ? _frame.contentWindow.frameHash : null;
    }

    function _createFrame() {
        _frame = document.createElement('iframe');
        _frame.src = 'about:blank';
        _frame.style.display = 'none';
        document.body.appendChild(_frame);
    }

    function _updateFrame() {
        if (_frame && _hash !== _getFrameHash()) {
            var frameDoc = _frame.contentWindow.document;
            frameDoc.open();
            //update iframe content to force new history record.
            //based on Really Simple History, SWFAddress and YUI.history.
            frameDoc.write('<html><head><title>' + document.title + '</title><script type="text/javascript">var frameHash="' + _hash + '";</script></head><body>&nbsp;</body></html>');
            frameDoc.close();
        }
    }

    function _registerChange(newHash) {
        newHash = decodeURIComponent(newHash); //fix IE8 while offline
        if (_hash !== newHash) {
            var oldHash = _hash;
            _hash = newHash; //should come before event dispatch to make sure user can get proper value inside event handler
            if (_isLegacyIE) {
                _updateFrame();
            }
            hasher.changed.dispatch(_trimHash(newHash), _trimHash(oldHash));
        }
    }

    _checkHistory = (_isLegacyIE) ?
        function () {
            var windowHash = _getWindowHash(),
                frameHash = _getFrameHash();
            if (frameHash !== _hash && frameHash !== windowHash) { //detect changes made pressing browser history buttons. Workaround since history.back() and history.forward() doesn't update hash value on IE6/7 but updates content of the iframe.
                hasher.setHash(_trimHash(frameHash)); //needs to trim hash since value stored already have prependHash + appendHash
            } else if (windowHash !== _hash) { //detect if hash changed (manually or using setHash)
                _registerChange(windowHash);
            }
        } :
        function () {
            var windowHash = _getWindowHash();
            if (windowHash !== _hash) {
                _registerChange(windowHash);
            }
        };

    function _addListener(elm, eType, fn) {
        if (elm.addEventListener) {
            elm.addEventListener(eType, fn, false);
        } else if (elm.attachEvent) {
            elm.attachEvent('on' + eType, fn);
        }
    }

    function _removeListener(elm, eType, fn) {
        if (elm.removeEventListener) {
            elm.removeEventListener(eType, fn, false);
        } else if (elm.detachEvent) {
            elm.detachEvent('on' + eType, fn);
        }
    }

    //--------------------------------------------------------------------------------------
    // Public (API)
    //--------------------------------------------------------------------------------------

    hasher = /** @lends hasher */{

    /**
    * hasher Version Number
    * @type string
    * @constant
    */
    VERSION: '1.0.0',

    /**
    * String that should always be added to the end of Hash value.
    * <ul>
    * <li>default value: '';</li>
    * <li>will be automatically removed from `hasher.getHash()`</li>
    * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
    * </ul>
    * @type string
    */
    appendHash: '',

    /**
    * String that should always be added to the beginning of Hash value.
    * <ul>
    * <li>default value: '/';</li>
    * <li>will be automatically removed from `hasher.getHash()`</li>
    * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
    * </ul>
    * @type string
    */
    prependHash: '/',

    /**
    * String used to split hash paths; used by `hasher.getHashAsArray()` to split paths.
    * <ul>
    * <li>default value: '/';</li>
    * </ul>
    * @type string
    */
    separator: '/',

    /**
    * Signal dispatched when hash value changes.
    * - pass current hash as 1st parameter to listeners and previous hash value as 2nd parameter.
    * @type signals.Signal
    */
    changed: new Signal(),

    /**
    * Signal dispatched when hasher is stopped.
    * -  pass current hash as first parameter to listeners
    * @type signals.Signal
    */
    stopped: new Signal(),

    /**
    * Signal dispatched when hasher is initialized.
    * - pass current hash as first parameter to listeners.
    * @type signals.Signal
    */
    initialized: new Signal(),

    /**
    * Start listening/dispatching changes in the hash/history.
    * <ul>
    *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons before calling this method.</li>
    * </ul>
    */
    init: function () {
        if (_isActive) return;

        _hash = _getWindowHash();

        //thought about branching/overloading hasher.init() to avoid checking multiple times but
        //don't think worth doing it since it probably won't be called multiple times.
        if (_isHashChangeSupported) {
            _addListener(window, 'hashchange', _checkHistory);
        } else {
            if (_isLegacyIE) {
                if (!_frame) {
                    _createFrame();
                }
                _updateFrame();
            }
            _checkInterval = setInterval(_checkHistory, POOL_INTERVAL);
        }

        _isActive = true;
        hasher.initialized.dispatch(_trimHash(_hash));
    },

    /**
    * Stop listening/dispatching changes in the hash/history.
    * <ul>
    *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons after calling this method, unless you call hasher.init() again.</li>
    *   <li>hasher will still dispatch changes made programatically by calling hasher.setHash();</li>
    * </ul>
    */
    stop: function () {
        if (!_isActive) return;

        if (_isHashChangeSupported) {
            _removeListener(window, 'hashchange', _checkHistory);
        } else {
            clearInterval(_checkInterval);
            _checkInterval = null;
        }

        _isActive = false;
        hasher.stopped.dispatch(_trimHash(_hash));
    },

    /**
    * @return {boolean}    If hasher is listening to changes on the browser history and/or hash value.
    */
    isActive: function () {
        return _isActive;
    },

    /**
    * @return {string} Full URL.
    */
    getURL: function () {
        return location.href;
    },

    /**
    * @return {string} Retrieve URL without query string and hash.
    */
    getBaseURL: function () {
        return hasher.getURL().replace(_baseUrlRegexp, ''); //removes everything after '?' and/or '#'
    },

    /**
    * Set Hash value, generating a new history record.
    * @param {...string} path    Hash value without '#'. Hasher will join
    * path segments using `hasher.separator` and prepend/append hash value
    * with `hasher.appendHash` and `hasher.prependHash`
    * @example hasher.setHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
    */
    setHash: function (path) {
        var paths = Array.prototype.slice.call(arguments);
        path = paths.join(hasher.separator);
        path = path ? hasher.prependHash + path.replace(_hashRegexp, '') + hasher.appendHash : path;
        if (path !== _hash) {
            _registerChange(path); //avoid breaking the application if for some reason `location.hash` don't change
            if (_isIE && _isLocal) {
                path = path.replace(/\?/, '%3F'); //fix IE8 local file bug [issue #6]
            }
            location.hash = '#' + encodeURI(path); //used encodeURI instead of encodeURIComponent to preserve '?', '/', '#'. Fixes Safari bug [issue #8]
        }
    },

    /**
    * @return {string} Hash value without '#', `hasher.appendHash` and `hasher.prependHash`.
    */
    getHash: function () {
        //didn't used actual value of the `location.hash` to avoid breaking the application in case `location.hash` isn't available and also because value should always be synched.
        return _trimHash(_hash);
    },

    /**
    * @return {Array.<string>} Hash value split into an Array.
    */
    getHashAsArray: function () {
        return hasher.getHash().split(hasher.separator);
    },

    /**
    * Removes all event listeners, stops hasher and destroy hasher object.
    * - IMPORTANT: hasher won't work after calling this method, hasher Object will be deleted.
    */
    dispose: function () {
        hasher.stop();
        hasher.initialized.dispose();
        hasher.stopped.dispose();
        hasher.changed.dispose();
        _frame = hasher = window.hasher = null;
    },

    /**
    * @return {string} A string representation of the object.
    */
    toString: function () {
        return '[hasher version="' + hasher.VERSION + '" hash="' + hasher.getHash() + '"]';
    }

};

return hasher;

} (window));
﻿var iadb = (function (module, Math) {
	var sub = module['any'] = {
		"int": function (from, to) {
			return from + Math.round((to - from) * Math.random());
		},
		item: function (array) {
			return array[sub['int'](0, array.length - 1)];
		}
	}
	return module;
} (iadb || {}, Math));
﻿var iadb = (function (iadb) {
    (iadb['CalloutBase'] = function (items, element) {
        this.fadingTime = 1000;
        this.element = element;
        this.parent = parent;
        this.items = ko.observableArray(items || []);
        this.index = ko.observable(-1);
        this.current = ko.dependentObservable(function () {
            var index = this.index();
            return index < 0 ? null : this.items()[index];
        }, this);
        this.visible = ko.observable(false); // ko.dependentObservable(function () { return this.index() >= 0; }, this);
        this.ordinal = ko.dependentObservable(function () { return this.index() + 1; }, this);
        this.count = ko.dependentObservable(function () { return this.items().length; }, this);
        this.changedSelection = new signals.Signal();
    }).prototype = {
        preProcessItem: function (item) {
            return item;
        },
        show: function (items) {
            var $self = this;
            this.visible(false);
            setTimeout(function () {
                this.clear();
                var callout = this;
                Enumerable.From(items).ForEach(function (x) { callout.add($self.preProcessItem(x)); });
                this.first();
                this.visible(true);
            } .bind(this), 100);
        },
        fadeOut: function (callback) {
            this.element.fadeOut(this.fadingTime, callback);
        },
        fadeIn: function (callback) {
            this.element.fadeIn(this.fadingTime, callback);
        },
        clear: function () {
            this.visible(false);
            this.index(-1);
            this.items.removeAll();
        },
        add: function (item) {
            this.items.push(item);
        },
        first: function (show) {
            this.index(this.count() > 0 ? 0 : -1);
        },
        next: function () {
            var index = this.index();
            index++;
            if (index >= this.count()) {
                index = 0;
            }
            this.index(index);
            this.changedSelection.dispatch(this.current());
            return false;
        },
        prev: function () {
            var index = this.index();
            index--;
            if (index < 0) {
                index = this.count() - 1;
            }
            this.index(index);
            this.changedSelection.dispatch(this.current());
            return false;
        }
    };

    (iadb['LayoutCallout'] = function (items, element) {
        // add html to items        
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.preProcessItem = function (item) {
            item.properties = [];
            for (var property in item) {
                if (typeof (item[property]) != "object") {
                    item.properties.push({ name: property, value: item[property].toString() ? item[property].toString() : " " });
                }
            }
            return item;
        };
        return retValue;
    });

    (iadb['Callout'] = function (items, element) {
        var retValue = new iadb['CalloutBase'](items, element);
        retValue.resultPicked = new signals.Signal();
        retValue.relatedOutputs = new signals.Signal();
        retValue.showRelatedProject = function () {
            var current = this.current();
            if (current != null) {
                this.resultPicked.dispatch(current.outputid);
            }
            return false;
        };
        retValue.showRelatedOutputs = function () {
            var current = this.current();
            this.relatedOutputs.dispatch(current.outputid);
        }
        return retValue;
    });


    (iadb['ProjectPicker'] = function (items) {
        this.items = ko.observableArray(items || []);
        this.projectPicked = new signals.Signal();
        this.visible = ko.dependentObservable(function () {
            var items = this.items();
            var result = items.length > 0;
            return result;
        }, this);
    }).prototype = {
        pick: function (item) {
            if (item) {
                this.projectPicked.dispatch(item.id);
            }
        },
        hide: function () {
            this.items.removeAll();
        }
    };

    return iadb;
} (iadb || {}));
﻿var iadb = (function (iadb, $) {

	function corners(radius) {
		var itself = arguments.callee;
		var key = String(radius);

		itself.cache = itself.cache || {};
		if (itself.cache[key]) {
			return itself.cache[key];
		}
		var values = [];
		var r2 = radius * radius;
		for (var i = 0; i <= radius; i++) {
			var value = Math.round(Math.sqrt(1 - i * i / r2) * radius);
			values.push(value);
		}
		itself.cache[key] = values;
		console.log(values);
		return values;
	}
	corners.cache = { '2': [2, 1], '3': [3, 2, 1], '4': [4, 4, 3, 2], '5': [5, 5, 4, 3, 2] };

	function draw(element, radius, where, bg) {
		var values = corners(radius);
		for (var i = 0; i < values.length; i++) {
			var b = 0;
			var t = radius - values[i];
			var line = document.createElement('DIV');
			line.style.position = 'absolute';
			line.style[where] = (radius - i) + 'px';
			line.style.top = t + 'px';
			line.style.bottom = b + 'px';
			line.style.width = 1 + 'px';
			line.style.backgroundColor = bg;
			element.appendChild(line);
		}
	}

	function wrapContent(element, tag) {
		var content = document.createElement(tag);
		while (e = element.firstChild) {
			content.appendChild(e);
		}
		element.appendChild(content);
		return content;
	}

	function applyProperties(object, properties) {
		for (var key in properties) {
			if (properties.hasOwnProperty(key)) {
				object[key] = properties[key];
			}
		}
	}
	function applyStyle(element, style, postfixes) {
		postfixes = postfixes || arguments.callee.postfixes;
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				var value = style[key];
				if (typeof value === 'number') {
					element.style[key] = style[key] + (postfixes[key] || '');
				} else {
					element.style[key] = style[key];
				}
			}
		}
		return element;
	}
	applyStyle.postfixes = { width: 'px', height: 'px', left: 'px', right: 'px', top: 'px', bottom: 'px', paddingLeft: 'px', paddingRight: 'px' };
	function create(tag, style) {
		return applyStyle(document.createElement(tag), style);
	}

	iadb.corners = function (element, radius) {
		var width = element.clientWidth;
		var content = wrapContent(element, 'div');
		applyStyle(element, { width: 'auto', paddingLeft: radius, paddingRight: radius });
		applyStyle(content, { width: width - radius - radius });
		var container = $(element);
		var bg = container.css('background-color');
		container.css('background-color', 'Transparent');
		content.style.backgroundColor = bg;

		//applyStyle(content, {});

		var left = create('div', { position: 'absolute', width: radius, left: 0, top: 0, bottom: 0 });
		draw(left, radius, 'left', bg);
		element.appendChild(left);

		var right = create('div', { position: 'absolute', width: radius, right: 0, top: 0, bottom: 0 });
		draw(right, radius, 'right', bg);
		element.appendChild(right);
	}

	return iadb;

} (iadb || {}, jQuery));
﻿(function (iadb) {
	// sector constructor
	function sector(filename, color, id) {
		return { color: color, filename: filename, id: id };
	};
	iadb.globals = {
		url: "http://iadb.geoiq.com",
		imageurl: "http://iadb.demo.eastbanctech.com",
		sectors: {
			"AG": new sector("AG", 0x296e28, 1),
			"AS": new sector("AS", 0x8cf4c5, 2),
			"DU": new sector("DU", 0xcd7333, 3),
			"ED": new sector("ED", 0xa11016, 4),
			"EN": new sector("EN", 0xffab00, 5),
			"FM": new sector("FM", 0x002c8b, 6),
			"IN": new sector("IN", 0x778762, 7),
			"IS": new sector("IS", 0xff862a, 8),
			"OT": new sector("OT", 0xffc251, 9),
			"PA": new sector("PA", 0xc22900, 10),
			"PS": new sector("PS", 0xcecece, 11),
			"RI": new sector("RI", 0x4c9c39, 12),
			"RM": new sector("RM", 0x6fadca, 13),
			"SA": new sector("SA", 0x60003f, 14),
			"ST": new sector("ST", 0x008484, 15),
			"TD": new sector("TD", 0x2d1a33, 16),
			"TR": new sector("TR", 0x6e5eb7, 17),
			"TU": new sector("TU", 0xcdcd33, 18)
		},
		priorities: {
			"CC": new priority("CC", 0x89be89 , 1)
		},
		outputs: {
			"Other": "1",
			"Energy generation": "1",
			"Energy distribution": "2",
			"Energy transmission": "3",
			"Roads and highways": "5",
			"Urban transport": "6",
			"Rural roads": "7",
			"Bridges": "8",
			"Airports and ports": "9",
			"Drinking water production and storage": "10",
			"Drinking water systems": "12",
			"Water resource management": "13",
			"Wastewater system": "14",
			"Wastewater treatment": "15",
			"Pluvial drainage": "16",
			"Solid waste management": "17",
			"Housing and shelters": "18",
			"Neighborhood improvement": "19",
			"Historical, Cultural & Natural Heritage": "20",
			"Trade Facilitation": "21",
			"Credit financing": "22",
			"Direct support to MSME": "23",
			"Agricultural support": "24",
			"Food safety, animal and plant health": "25",
			"Sustainable tourism": "26",
			"Environmental management": "27",
			"Health facilities and equipment": "28",
			"Educational facilities and equipment": "29",
			"Training to direct beneficiaries": "30",
			"Vulnerable people support": "31",
			"Land demarcation and titling": "32",
			"Citizen security": "33",
			"Institutional support": "35",
			"NO VISUALIZABLE": "1"

			//			"Other": "42",
			//			"Airports and port rehabilitated": "9",//
			//			"Animals vaccinated": "45",
			//			"Bridges built or mantained": "8",//
			//			"Farmers supported": "31",//
			//			"Natural disaster prevention systems": "31",//
			//			"Households with new or upgraded dwellings": "18",//
			//			"Households with new or upgraded water supply": "13",//
			//			"Water infrastructure": "13",//
			//			"Irrigation and draining canals": "13",//
			//			"Strategies, studies, and regulations": "9",
			//			"Individuals benefited from programs to promote higher labor market productivity": "31",//
			//			"Power generation, transmission, and distribution infrastructure rehabilitated": "1",//
			//			"Preventive health campaigns": "8",
			//			"Public institutions supported": "12",
			//			"Public officials trained": "31",//
			//			"Roads built or maintained": "5",//
			//			"Sanitary solutions/facilities installed": "12",//
			//			"Sanitation infrastructure": "12",//
			//			"Schools built or reformed": "29",//
			//			"Schools equipped with furniture and school materials": "44",
			//			"Students benefited from education projects": "31",//
			//			"Teachers trained": "30"//
		},
		getOutputBySectorIcons: function () {
			var returnObject = {};
			var outputs = Enumerable.From(this.outputs).Join(this.sectors, "x=>true", "x=>true", function (outer, inner) {
				var filename = iadb.globals.sectors[inner.Key].filename;
				returnObject[inner.Key + "-" + outer.Key] = encodeURI(iadb.globals.imageurl + "/images/icons/sectors/" + filename + "_" + outer.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		},
		getOutputByPriorityIcons: function () {
			var returnObject = {};
			var outputs = Enumerable.From(this.outputs).Join(this.priorities, "x=>true", "x=>true", function (outer, inner) {
				var filename = iadb.globals.priorities[inner.Key].filename;
				returnObject[inner.Key + "-" + outer.Key] = encodeURI(iadb.globals.imageurl + "/images/icons/priorities/" + filename + "_" + outer.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		},
		getOutputIcons: function () {
			var returnObject = {};
			// Using transportation for generic images
			var outputs = Enumerable.From(this.outputs).Select(function (x) {
				returnObject[x.Key == "Other" ? null : x.Key] = encodeURI("/images/icons/sectors/PS_" + x.Value + ".png");
				return null;
			}).ToArray();
			return returnObject;
		}
	};

	iadb.globals.prototype = {
		getSectorIcon: function (sector) {
			return "";
		},
		getPriorityIcon: function (priority) {
			return "";
		},
		getResultIcon: function (sector, result) {
			return "";
		}
	}
})(iadb || {});
﻿var iadb = (function (iadb, window) {

    var id = 0;

    iadb.nextId = function () {
        return ++id;
    }

    iadb.lastId = function () {
        return id;
    }

    iadb.type = function (something) {
        if (something == null) {
            return String(something);
        } else {
            var type = Object.prototype.toString.call(something);
            return type.substring(8, type.length - 1).toLowerCase();
        }
    };

    iadb.createPickedCount = function (observableArray, context) {
        return {
            read: function () {
                var array = observableArray();
                try {
                    return Enumerable.From(array).Where("$.picked()").Count();
                }
                catch (ex) {
                    return 0;
                }
            },
            write: function (value) { },
            owner: context
        };
    };

    iadb.createPickableListAllHandle = function (observableArray, context) {
        return { read: function () {
            var array = observableArray();
            for (var i = 0; i < array.length; i++) {
                if (!array[i].picked()) return false;
            }
            return true;
        }, write: function (value) {
            window.setTimeout(function () {
                var array = observableArray();
                for (var i = 0; i < array.length; i++) {
                    array[i].picked(value);
                }
            }, 0);
        }, owner: context
        };
    };

    iadb.contentFitsContainer = function (id) {
        var element = document.getElementById(id);
        console.log(['clientHeight', element.clientHeight, 'offsetHeight', element.scrollHeight]);
        return element.clientHeight >= element.scrollHeight;
    };


    iadb.analyzeFeatureSet = function (features) {
        var projects = [];
        var results = [];
        var layerfeatures = [];
        if (iadb.type(features) === 'array') {
            for (var i = 0; i < features.length; i++) {
                var feature = features[i];
                if (iadb.isProjectFeature(feature)) {
                    projects.push(feature);
                } else if (iadb.isResultFeature(feature)) {
                    results.push(feature);
                }
                else layerfeatures.push(feature);
            }
            return { results: results, projects: projects, layerfeatures:layerfeatures };
        } else {
            return { results: [], projects: [], layerfeatures:[] };
        }
    }

    iadb.isProjectFeature = function (feature) {
        if (!feature) return false;
        return !!feature.pronumber;
    };

    iadb.isResultFeature = function (feature) {
        if (!feature) return false;
        return !!feature.outputid;
    }


    return iadb;

} (iadb || {}, window));
﻿/// <reference path="iadb.js" />

var iadb = (function (root, ko, global, $) {
	var main = root['Main'] = {};
	main["MapDelay"] = 1000;
	main['Vm'] = function (repo, map, callout, layerCallout, projectPicker, lang) {
		if (!repo) throw 'repo is not provided';
		if (!map) throw 'map is not provided';

		this.lang = lang;
		this.map = map;
		this.repo = repo;

		this.defaultZoom = map.getZoom();
		this.defaultCenter = map.getCenter();
		var mapuniqueName = map.getBasemap().uniqueName || "google_road";
		this.defaultBasemap = map.getMapByUniqueName(mapuniqueName).id;

		var mapSignals = map.mapSignals;
		mapSignals.mapZoomed.add(function () {
			var linesLayer = map.getLinesLayer();
			this.drawLinesLayer();
		}, this);
		mapSignals.featureSelected.add(function (features) {
			features = features.features;
			if (!features || features.length < 1) return;
			var analysis = iadb.analyzeFeatureSet(features);
			if ((features = analysis.results).length > 0) {
				// change map to google satellite, zoom to maximum, center on the result                
				this.map.setCenter({ latitude: features[0].latitude, longitude: features[0].longitude });
				this.map.setZoom(17);
				this.centerMap({ latitude: features[0].latitude, longitude: features[0].longitude });
				this.pickedBasemap(408);
				var items = Enumerable.From(features).Select(function (x) { return new main.ResultVm(new iadb.Repo.Result(x, repo)); }).ToArray();
				this.callout.show(items);
				this.layerCallout.clear();
				this.projectPicker.hide();
			} else if ((features = analysis.projects).length > 1) {
				var selectedProjects = this.repo.getProject(Enumerable.From(features).Select("$.pronumber").ToArray())
				this.projectPicker.items(selectedProjects);
				this.callout.clear();
				this.layerCallout.clear();
			}
			else if (analysis.projects.length > 0) {
				var projectId = analysis.projects[0].pronumber;
				this.pickProject(projectId);
			}
			else if ((features = analysis.layerfeatures).length > 0) {
				this.callout.clear();
				this.projectPicker.hide();
				this.layerCallout.show(features);
			}
		}, this);

		this.mode = ko.observable();
		this.mainSignals = {
			projectPicked: new signals.Signal(),
			projectUnpicked: new signals.Signal(),
			sectorUnpicked: new signals.Signal(),
			priorityUnpicked: new signals.Signal(),
			outputUnpicked: new signals.Signal(),
			filterResults: new signals.Signal(),
			filterProjects: new signals.Signal(),
			filterSectors: new signals.Signal(),
			filterPriorities: new signals.Signal(),
			resultPicked: new signals.Signal(),
			goBack: new signals.Signal(),
			pickCountry: new signals.Signal()
		};
		this.mainSignals.projectPicked.add(function () { this.mode('projects'); }, this);
		this.mainSignals.projectUnpicked.add(function () { this.mode('projects'); }, this);
		this.mainSignals.sectorUnpicked.add(function () { this.mode('sectors'); }, this);
		this.mainSignals.priorityUnpicked.add(function () { this.mode('priorities'); }, this);
		this.mainSignals.outputUnpicked.add(function () { this.mode('results'); }, this);
		this.mainSignals.filterResults.add(function () { this.mode('results'); }, this);
		this.mainSignals.filterProjects.add(function () { this.mode('projects'); }, this);
		this.mainSignals.filterSectors.add(function () { this.mode('sectors'); }, this);
		this.mainSignals.resultPicked.add(function () { this.mode('results'); }, this);

		this.areProjectsActive = ko.dependentObservable(function () { return this.mode() == "projects"; }, this);
		this.areSectorsActive = ko.dependentObservable(function () { return this.mode() == "sectors"; }, this);
		this.arePrioritiesActive = ko.dependentObservable(function () { return this.mode() == "priorities"; }, this);
		this.areResultsActive = ko.dependentObservable(function () { return this.mode() == "results"; }, this);

		this.loading = ko.observable(false);
		this.history = ko.observableArray([]);
		this.canGoBack = ko.dependentObservable(function () {
			return this.history().length > 1;
		}, this);



		this.layerCallout = layerCallout;

		this.callout = callout;
		this.callout.resultPicked.add(function (resultId) {
			this.resetMapToDefaults();
			this.pickResult(resultId);
		}, this);
		this.callout.relatedOutputs.add(function (resultId) {
			var result = this.repo.getResult(resultId);
			this.resetOutput(false);
			this.resetMapToDefaults();
			Enumerable.From(this.outputs()).ForEach(function (x) {
				if (x.id == result.category.id) {
					x.picked(true);
				}
			});
		}, this);
		this.callout.changedSelection.add(function (item) {
			this.centerMap({ latitude: item.latitude, longitude: item.longitude });
		}, this);

		this.projectPicker = projectPicker;
		this.projectPicker.projectPicked.add(function (projectId) {
			this.projectPicker.hide();
			this.pickProject(projectId);
		}, this);


		this.projects = ko.observableArray([]);
		this.hasSomeProjects = ko.dependentObservable(function () {
			var projects = this.projects();
			for (var i = 0; i < projects.length; i++) {
				if (projects[i].visible()) return true;
			}
			return false;
		}, this);
		this.sectors = ko.observableArray([]);
		this.priorities = ko.observableArray([]);
		this.outputs = ko.observableArray([]);
		this.layers = ko.observableArray([]);

		this.basemaps = ko.observableArray([]);
		this.search = ko.observable("").extend({ throttle: 200 });
		this.search.subscribe(this.searchForProjects, this);

		this.pickedProject = ko.observable(null);
		this.pickedProjectDetailsVisible = ko.observable(false);

		this.pickedBasemap = ko.observable(this.defaultBasemap);                // microsoft roads (id == 414) is suppsed to be a default pick
		this.pickedBasemap.subscribe(this.pickBasemap, this);

		this.bottomPanel = new main.BottomPanelVm(this);

		this.legendVisible = ko.observable(false);
		this.popup = new iadb.Popup();

		// trigger whent anything in sector menu is changed
		this.sectorSetChanged = new signals.Signal();
		var sectorSetChangedId = 0;
		this.sectorSetChanged.add(function () {

			if (sectorSetChangedId > 0) {
				window.clearTimeout(sectorSetChangedId);
				sectorSetChangedId = 0;
			}
			// gives user a second since the last change before recalculation starts
			sectorSetChangedId = window.setTimeout(this.filterSectors.bind(this), 100);
		}, this);
		this.allSectors = ko.dependentObservable(iadb.createPickableListAllHandle(this.sectors, this));

		// trigger whent anything in priority menu is changed
		this.prioritySetChanged = new signals.Signal();
		var prioritySetChangedId = 0;
		this.prioritySetChanged.add(function () {

			if (prioritySetChangedId > 0) {
				window.clearTimeout(prioritySetChangedId);
				prioritySetChangedId = 0;
			}
			// gives user a second since the last change before recalculation starts
			prioritySetChangedId = window.setTimeout(this.filterPriorities.bind(this), 100);
		}, this);
		this.allPriorities = ko.dependentObservable(iadb.createPickableListAllHandle(this.priorities, this));

		//trigger when anything is changed in result menu
		this.outputSetChanged = new signals.Signal();
		var outputSetChangedId = 0;
		this.outputSetChanged.add(function () {
			if (outputSetChangedId > 0) {
				window.clearTimeout(outputSetChangedId);
				outputSetChangedId = 0;
			}
			outputSetChangedId = window.setTimeout(this.filterOutputs.bind(this), 100);
		}, this);
		this.allOutputs = ko.dependentObservable(iadb.createPickableListAllHandle(this.outputs, this));

		//trigger when changing layer
		this.layerSetChanged = new signals.Signal();
		var layerSetChangedId = 0;
		this.layerSetChanged.add(function (layer) {
			map.setVisibility(layer, layer.picked());
		}, this);

		this.allLayers = ko.dependentObservable(iadb.createPickableListAllHandle(this.layers, this));
		this.visibleLayers = ko.dependentObservable(iadb.createPickedCount(this.layers, this));

		this.projectSetChanged = new signals.Signal();
		var projectSetChangedId = 0;
		this.projectSetChanged.add(function () {
			if (projectSetChangedId > 0) {
				window.clearTimeout(projectSetChangedId);
				projectSetChangedId = 0;
			}
			projectSetChangedId = window.setTimeout(this.filterProjects.bind(this), 100);
		}, this);

		this.countries = ko.observableArray([]);
	}

	main['Vm'].prototype = {
		initialize: function () {
			var $self = this;
			var projects = this.repo.getProjects();

			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				project.visible = ko.observable(true);
				project.even = ko.observable(i % 2 == 0);
				this.projects.push(project);
				project.outputs = Enumerable.From(this.repo.results)
                    .Where(function (x) { return x.project == project.id; })
                    .GroupBy(function (x) { return x.category || ''; })
                    .Select(function (x) { return { result: x.Key(), outputs: x.source} })
                    .ToArray();
				project.picked = ko.observable(false);
				project.picked.subscribe(function () {
					this.projectSetChanged.dispatch();
				}, this);
			}

			var sectors = this.repo.getSectors();
			for (var i = 0; i < sectors.length; i++) {
				var vm = new main.SectorVm(sectors[i], this.sectorSetChanged);
				this.sectors.push(vm);
			}
			
			var priorities = this.repo.getPriorities();
			for (var i = 0; i < priorities.length; i++) {
				var vm = new main.PriorityVm(priorities[i], this.prioritySetChanged);
				this.priorities.push(vm);
			}

			this.bottomPanel.updateSectors();

			var outputs = this.repo.getOutputs();
			for (var i = 0; i < outputs.length; i++) {
				var vm = new main.OutputVm(outputs[i], this.outputSetChanged);
				this.outputs.push(vm);
			}

			this.bottomPanel.updatePriorities();

			this.bottomPanel.updateOutputs();

			var basemaps = this.repo.getBasemaps();
			for (var i = 0; i < basemaps.length; i++) {
				var basemap = basemaps[i];
				this.basemaps.push(basemap);
			}

			var countries = this.repo.getCountries();
			for (var i = 0; i < countries.length; i++) {
				var country = countries[i];
				country.even = (i % 2 == 0);
				country.pick = function () { $self.mainSignals.pickCountry.dispatch(this.name) };
				this.countries.push(country);
			}


			var layers = this.repo.getLayers();
			for (var i = 0; i < layers.length; i++) {
				this.layers.push(new main.LayerVm(layers[i], this.layerSetChanged));
			}

			// handling escape to close project details
			$(document).keydown((function (e) {
				if (e.which == 27) {
					if (this.popup.visible()) {
						this.popup.close()
					} else if (this.pickedProjectDetailsVisible()) {
						this.pickedProjectDetailsVisible(false);
					} else if (this.callout.visible()) {
						this.callout.clear();
					} else if (this.layerCallout.visible()) {
						this.layerCallout.clear();
					} else if (this.projectPicker.visible()) {
						this.projectPicker.hide();
					} else if (this.legendVisible()) {
						this.legendVisible(false);
					}
				}
			}).bind(this));

			this.loading(false);
		},
		resetZoomToDefaults: function () {
			this.map.setZoom(this.defaultZoom);
		},
		resetMapToDefaults: function () {
			this.resetZoomToDefaults();
			var map = this.map;
			map.setCenter(this.defaultCenter);
			var mapSignals = map.mapSignals;
			mapSignals.mapPanStop.dispatch(this.defaultCenter);
			this.pickedBasemap(this.defaultBasemap);
		},
		centerMap: function (point) {
			var map = this.map;
			var extent = map.getExtent();
			var pixelToLatitude = map.getHeight() / (extent.north - extent.south);
			var sliderHeightInDegrees = 171 / pixelToLatitude;
			var newcenter = { latitude: point.latitude - sliderHeightInDegrees / 2, longitude: point.longitude };
			map.setCenter(newcenter);
			var mapSignals = map.mapSignals;
			mapSignals.mapPanStop.dispatch(newcenter);
		},
		showUrlForCurrentProject: function (type) {
			var projectId = this.pickedProject().id;
			var format = this.projectPopupTypes[type];
			if (format != null) {
				var url = format.url.replace('{projectId}', projectId);
				this.popup.show(url, format.size, format.scrolling);
			}
			return false;
		},
		showUrlForResult: function (type, id) {
			var format = this.resultPopupTypes[type];
			if (format != null) {
				var url = format.url.replace('{id}', id);
				this.popup.show(url, format.size, format.scrolling);
			}
			return false;
		},
		popupWithUrl: function (type) {
			var url = this.projectPopupTypes[type].url;
			return (this.popup.url() || "").startsWith(url.substr(0, url.length / 2));
		},
		readMoreVisible: function () {
			return (this.pickedProject().description || "").length > 0;
		},
		searchForProjects: function (pattern) {
			pattern = (pattern || "").toLowerCase();
			var projects = this.projects();
			var visibleIndex = 0;
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				var visible = (project.name || "").toLowerCase().indexOf(pattern) >= 0 || (project.sector || "").toLowerCase().indexOf(pattern) >= 0 || (project.priority || "").toLowerCase().indexOf(pattern) >= 0 || (project.id || "").toLowerCase().indexOf(pattern) >= 0;
				if (visible) {
					project.even(visibleIndex++ % 2 == 0);
				}
				project.visible(visible);
			}
		},
		filterProjects: function () {
			this.resetZoomToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			//map.makeSureVisible(projectLayer);
			map.makeSureHidden(resultLayer);
			this.resetOutput(false);
			this.resetSector(true);
			this.resetPriority(true);

			// changing url for result filters           
			this.mainSignals.filterProjects.dispatch(Enumerable.From(this.projects()).Where("$.picked()").Select("$.id").ToArray().join(';'));

			this.pickedProject(null);
			var projects = this.projects();
			var filter = this.buildProjectFilter(projects);
			map.addFilter(projectLayer, filter);

			this.bottomPanel.updateProjects();
			this.bottomPanel.showSectors();
			this.bottomPanel.showPriorities();
		},
		buildProjectFilter: function (projects) {
			var filter = [];
			for (var i = 0; i < projects.length; i++) {
				var project = projects[i];
				if (!project.picked()) continue;
				filter.push("$[pronumber] == '" + project.id + "'");
			}
			return filter.length > 0 ? (filter.length == project.length ? null : filter.join(" OR ")) : null;
		},
		filterSectors: function () {
			this.resetZoomToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			//map.makeSureVisible(projectLayer);
			map.makeSureHidden(resultLayer);
			this.resetOutput(false);
			this.resetProject();
			//map.removeFilters(projectLayer);
			this.pickedProject(null);
			var sectors = this.sectors();
			var filter = this.buildSectorFilter(sectors);

			// changing url for sector filters           
			if (this.allSectors()) {
				this.mainSignals.sectorUnpicked.dispatch();
			}
			else {
				this.mainSignals.filterSectors.dispatch(Enumerable.From(sectors).Where("$.picked()").Select("$.id").ToArray().join(';'));
			}
			map.addFilter(projectLayer, filter);

			this.bottomPanel.updateSectors();
			this.bottomPanel.showSectors();
		},
		buildSectorFilter: function (sectors) {
			var filter = [];
			for (var i = 0; i < sectors.length; i++) {
				var sector = sectors[i];
				if (!sector.picked()) continue;
				filter.push("$[prosectoren] == '" + sector.name + "'");
			}
			return filter.length > 0 ? (filter.length == sectors.length ? null : filter.join(' OR ')) : 'false';
		},
		filterPriorities: function () {
			this.resetZoomToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			//map.makeSureVisible(projectLayer);
			map.makeSureHidden(resultLayer);
			this.resetOutput(false);
			this.resetSector(true);
			this.resetProject();
			//map.removeFilters(projectLayer);
			this.pickedProject(null);
			var priorities = this.priorities();
			var filter = this.buildPriorityFilter(priorities);

			// changing url for priorities filters           
			if (this.allPriorities()) {
				this.mainSignals.priorityUnpicked.dispatch();
			}
			else {
				this.mainSignals.filterPriorities.dispatch(Enumerable.From(priorities).Where("$.picked()").Select("$.id").ToArray().join(';'));
			}
			map.addFilter(projectLayer, filter);

			this.bottomPanel.updatePriorities();
			this.bottomPanel.showPriorities();
		},
		buildPriorityFilter: function (priorities) {
			var filter = [];
			
			if(this.allPriorities())
			{
				for(var i = 0; i < priorities.length; i++)
				{
					var priority = priorities[i];
					filter.push("$[priority] == '" + priority.name + "'")
				}
			}
			else
			{
				for (var i = 0; i < priorities.length; i++) {
					var priority = priorities[i];
					if (!priority.picked()) continue;
					filter.push("$[priority] == '" + priority.name + "'");
				}
			}
			return  filter.join(' OR ');
		},
		filterOutputs: function () {
			this.resetZoomToDefaults();
			var outputs = this.outputs();
			var filter = this.buildOutputFilter(outputs);
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.setVisibility(linesLayer, false);
			this.pickedProject(null);
			//map.makeSureVisible(resultLayer);
			map.makeSureHidden(projectLayer);
			//map.removeFilters(resultLayer);
			this.resetSector(false);
			this.resetProject();

			// changing url for result filters           
			if (this.allOutputs()) {
				this.mainSignals.outputUnpicked.dispatch();
			}
			else {
				this.mainSignals.filterResults.dispatch(Enumerable.From(this.outputs()).Where("$.picked()").Select("$.id").ToArray().join(';'));
			}


			map.addFilter(resultLayer, filter);

			this.bottomPanel.updateOutputs();
			this.bottomPanel.showOutputs();
		},
		buildOutputFilter: function (outputs) {
			var filter = [];
			for (var i = 0; i < outputs.length; i++) {
				var output = outputs[i];
				if (!output.picked()) continue;
				filter.push("$[category] == " + (output.name == "Other" ? "null" : "'" + output.name + "'"));
			}
			return filter.length > 0 ? (filter.length == outputs.length ? null : filter.join(' OR ')) : 'false';
		},
		tryGoBack: function () {
			this.mainSignals.goBack.dispatch();
		},
		pickBasemap: function (id) {
			var map = this.map;
			map.setBasemap(id);
		},
		pickResult: function (resultId) {
			this.callout.clear();
			this.layerCallout.clear();
			var result = this.repo.getResult(resultId);
			var projectId = result.project;
			this.selectProject(projectId);
			this.mainSignals.resultPicked.dispatch(resultId);
		},
		drawLinesLayer: function () {
			//populating lines layer
			var project = this.pickedProject();
			if (project) {
				var map = this.map;
				console.log("," + new Date().getTime() + ",addFeatures," + map.getLinesLayer().title);
				map.addFeatures(map.getLinesLayer().guid, [], true);

				var results = this.repo.getResults();
				var features = Enumerable
                    .From(this.repo.getResults())
                    .Where(function (x) { return x.project == project.id })
                    .Select(function (x) {
                    	return { "project": project.id,
                    		"geometry": { "type": "LineString", "coordinates": [[x['long'], x.lat], [project['long'], project.lat]] }
                    	}
                    }).ToArray();

				var sector = iadb.globals.sectors[project.sector];
				if (sector == undefined) {
					// could not find a sector setting to other;
					sector = iadb.globals.sectors.Other;
				}

				//console.log("," + new Date().getTime() + ",setLayerStyle," + map.getLinesLayer().title);
				map.setLayerStyle(map.getLinesLayer().guid, { type: "LINE", fill: { lineStyle: "thick", color: 0x0000FF, opacity: 1 }, stroke: { color: sector.color, alpha: 1, weight: 2} });

				console.log("," + new Date().getTime() + ",addFeatures," + map.getLinesLayer().title);
				map.addFeatures(map.getLinesLayer().guid, features, true);
			}
		},
		selectProject: function (projectId) {
			console.log('selectProject:', projectId);
			var project = this.pickedProject();

			var map = this.map;
			if (!project || project.id != projectId) {

				project = this.repo.getProject(projectId);

				this.pickedProject(project);

				this.bottomPanel.setProject(this.pickedProject());

				this.drawLinesLayer();

				this.centerMap({ latitude: project.lat, longitude: project['long'] });

				var projectLayer = map.getProjectLayer();
				var resultLayer = map.getResultLayer();
				var linesLayer = map.getLinesLayer();

				$.when(map.addFilter(projectLayer, "$[pronumber] == '" + projectId + "'"))
                    .then(function () {
                    	map.addFilter(resultLayer, "$[project number] == '" + projectId + "'")
                    } .bind(this));
				map.setVisibility(linesLayer, true);
			}
			this.resetSector(false);
			this.resetPriority(false);
			this.legendVisible(false);
			this.callout.clear();
			this.layerCallout.clear();
			this.pickedProjectDetailsVisible(true);
			this.bottomPanel.showProject();
		},
		pickProject: function (projectId) {
			console.log('pickProject:', projectId);
			this.selectProject(projectId);
			this.mainSignals.projectPicked.dispatch(projectId);
		},
		unpickProject: function () {
			console.log('unpickProject');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			this.search("");
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer();
			map.removeFilters(projectLayer);

			map.setVisibility(linesLayer, false);
			map.setVisibility(projectLayer, true);
			map.setVisibility(resultLayer, false);
			this.pickedProjectDetailsVisible(false);
			this.resetProject();
			this.resetSector(true);
			this.resetPriority(true);
			this.resetOutput(false);
			this.pickedProject(null);
			this.bottomPanel.updateProjects();
			this.bottomPanel.showSectors();
			this.bottomPanel.showPriorities();
			this.mainSignals.projectUnpicked.dispatch();
		},
		resetProject: function () {
			console.log('resetProject');
			this.projectPicker.hide();
			// restoring the menu
			this.projectSetChanged.active = false;
			var projects = this.projects();
			for (var i = 0; i < projects.length; i++) {
				projects[i].picked(false);
			}
			this.projectSetChanged.active = true;
		},
		unpickSector: function () {
			console.log('unpickSector');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer()
			map.setVisibility(projectLayer, true);
			map.setVisibility(linesLayer, false);
			map.setVisibility(resultLayer, false);
			this.pickedProjectDetailsVisible(false);
			this.pickedProject(null);
			this.resetSector(true);
			this.resetPriority(true);
			this.resetOutput(false);
			map.removeFilters(projectLayer);
			this.bottomPanel.updateSectors();
			this.bottomPanel.updatePriorities();
			this.bottomPanel.showSectors();
			this.mainSignals.sectorUnpicked.dispatch();
		},
		resetSector: function (state) {
			console.log('start resetSector');
			this.projectPicker.hide();
			// restoring the menu
			this.sectorSetChanged.active = false;
			var sectors = this.sectors();
			for (var i = 0; i < sectors.length; i++) {
				sectors[i].picked(state);
			}
			this.sectorSetChanged.active = true;
			console.log('end resetSector');
		},
		unpickPriority: function () {
			console.log('unpickPriority');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer()
			map.setVisibility(projectLayer, true);
			map.setVisibility(linesLayer, false);
			map.setVisibility(resultLayer, false);
			this.pickedProjectDetailsVisible(false);
			this.pickedProject(null);
			this.resetSector(true);
			this.resetPriority(true);
			this.resetOutput(false);
			map.removeFilters(projectLayer);
			this.bottomPanel.updatePriorities();
			this.bottomPanel.showPriorities();
			this.mainSignals.priorityUnpicked.dispatch();
		},
		resetPriority: function (state) {
			console.log('start resetPriority');
			this.projectPicker.hide();
			// restoring the menu
			this.prioritySetChanged.active = false;
			var priorities = this.priorities();
			for (var i = 0; i < priorities.length; i++) {
				priorities[i].picked(state);
			}
			this.prioritySetChanged.active = true;
			console.log('end resetPriority');
		},
		unpickOutput: function () {
			console.log('unpickOutput');
			this.resetMapToDefaults();
			this.callout.clear();
			this.layerCallout.clear();
			var map = this.map;
			var projectLayer = map.getProjectLayer();
			var resultLayer = map.getResultLayer();
			var linesLayer = map.getLinesLayer()
			map.makeSureHidden(projectLayer);
			map.setVisibility(linesLayer, false);
			map.makeSureVisible(resultLayer);
			this.pickedProjectDetailsVisible(false);
			this.pickedProject(null);
			map.removeFilters(resultLayer);
			this.resetOutput(true);
			this.resetSector(false);
			this.resetPriority(false);
			this.bottomPanel.updateOutputs();
			this.bottomPanel.showOutputs();
			this.mainSignals.outputUnpicked.dispatch();
		},
		resetOutput: function (state) {
			console.log('resetOutput');
			this.projectPicker.hide();
			var map = this.map;
			var resultLayer = map.getResultLayer();
			//map.removeFilters(resultLayer);

			// restoring the menu
			this.outputSetChanged.active = false;
			var outputs = this.outputs();
			for (var i = 0; i < outputs.length; i++) {
				outputs[i].picked(state);
			}
			this.outputSetChanged.active = true;
		},
		resultPopupTypes: {
			photos: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "no", size: { width: 742, height: 575} },
			news: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" },
			videos: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "no", size: { width: 896, height: 555} },
			documents: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" },
			info: { url: 'http://www.iadb.org/en/4338.html?outputID={id}', scrolling: "auto" }

		},
		projectPopupTypes: {
			news: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-news-list,3981.html?projectID={projectId}', scrolling: "auto" },
			videos: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-videos,3978.html?projectid={projectId}', scrolling: "no", size: { width: 896, height: 555} },
			documents: { url: 'http://www.iadb.org/en/eye-on-development/haiti/document-list,3976.html?projectID={projectId}', scrolling: "auto" },
			photos: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-photo-gallery,4080.html?projectID={projectId}', scrolling: "no", size: { width: 742, height: 575} },
			info: { url: 'http://www.iadb.org/en/eye-on-development/haiti/project-description,4039.html?projectID={projectId}', scrolling: "auto" }
		},
		applyFilters: function (mode, filter) {
			switch (mode) {
				case "sectors":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.sectors()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
				case "priorities":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.priorities()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
				case "results":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.outputs()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
				case "projects":
					var enumArray = Enumerable.From(filter.split(';'));
					Enumerable.From(this.projects()).ForEach(function (x) { x.picked(enumArray.Contains(x.id.toString())); });
					break;
			}
		},
		hideLegend: function () {
			this.legendVisible(false);
		}
	};



	(main.LayerVm = function (data, layerSetChanged) {
		this.id = root.nextId();
		this.guid = data.guid;
		this.order = data.order;
		this.name = data.title;
		this.source = data.subtitle;
		this.imageurl = encodeURI("/images/legend/" + this.name + ".png");
		this.picked = ko.observable(data.visible);
		this.picked.subscribe(function (value) {
			layerSetChanged.dispatch(this);
		}, this);
	}).prototype = {
	};

	(main.SectorVm = function (data, sectorSetChanged) {
		this.id = data.id;
		this.name = data.name;
		this.imageurl = data.imageurl;
		this.count = data.count;
		this.picked = ko.observable(true);
		this.picked.subscribe(function (value) {
			sectorSetChanged.dispatch();
		}, this);
	}).prototype = {
	};

	(main.PriorityVm = function (data, prioritySetChanged) {
		this.id = data.id;
		this.name = data.name;
		this.imageurl = data.imageurl;
		this.count = data.count;
		this.picked = ko.observable(true);
		this.picked.subscribe(function (value) {
			prioritySetChanged.dispatch();
		}, this);
	}).prototype = {
	};

	(main.ResultVm = function (data) {
		this.title = data.title;
		this.description = data.description;
		this.imageUrl = data.imageUrl;
		this.outputid = data.outputid;
		this.hasdocuments = data.hasdocuments;
		this.hasnews = data.hasnews;
		this.hasphotos = data.hasphotos;
		this.hasvideos = data.hasvideos;
		this.hasmedia = this.hasphotos || this.hasdocuments || this.hasnews || this.hasvideos;
		this.latitude = data.lat;
		this.longitude = data['long'];
	}).prototype = {
	};

	(main.OutputVm = function (data, outputSetChanged) {
		this.id = data.id;
		this.name = data.name;
		this.imageurl = data.imageurl;
		this.count = data.count;
		this.description = data.description;
		this.picked = ko.observable(false);
		this.picked.subscribe(function (value) {
			outputSetChanged.dispatch();
		}, this);
	}).prototype = {
	};


	(main.BottomPanelResultVm = function (data) {
		this.id = data.id;
		this.name = data.name;
		this.count = data.count;
		this.imageurl = data.imageurl;
	}).prototype = {
	};


	(main.BottomPanelSectorVm = function (data, count) {
		this.id = data.id;
		this.name = data.name;
		this.count = count;
		this.imageurl = data.imageurl;
	}).prototype = {
	};
	
	(main.BottomPanelPriorityVm = function (data, count) {
		this.id = data.id;
		this.name = data.name;
		this.count = count;
		this.imageurl = data.imageurl;
	}).prototype = {
	};

	(main.BottomPanelVm = function (parent) {
		this.parent = parent;
		this.repo = parent.repo;
		this.mode = ko.observable("sectors");
		this.mode = ko.observable("priorities");
		this.project = ko.observable(null);
		this.outputs = ko.observable([]);
		this.sectors = ko.observable([]);
		this.priorities = ko.observable([]);
	}).prototype = {
		showSectors: function () { this.mode("sectors"); },
		showPriorities: function () { this.mode("priorities"); },
		showProject: function () {
			this.mode("projects");
		},
		showOutputs: function () { this.mode("results"); },
		setProject: function (project) {
			this.project(project);
		},
		updateOutputs: function () {
			this.outputs(Enumerable.From(this.parent.outputs()).Where("$.picked()").Select(function (x) { return new main.BottomPanelResultVm(x); }).ToArray());
		},
		updateSectors: function () {
			this.sectors(Enumerable.From(this.parent.sectors()).Where("$.picked()&&$.count>0").Select(function (x) {
				return new main.BottomPanelSectorVm(x, x.count);
			}).Where("$").ToArray());
		},
		updatePriorities: function () {
			this.priorities(Enumerable.From(this.parent.priorities()).Where("$.picked()&&$.count>0").Select(function (x) {
				return new main.BottomPanelPriorityVm(x, x.count);
			}).Where("$").ToArray());
		},
		updateProjects: function () {
			// update bottom panel sectors
			var filteredProjects = Enumerable.From(this.parent.projects()).Where("$.picked()").GroupBy("$.sector").ToArray();
			if (filteredProjects.length == 0) {
				this.sectors(Enumerable.From(this.parent.sectors()).Where("$.count>0").Select(function (x) {
					return new main.BottomPanelSectorVm(x, x.count);
				}).ToArray());
			}
			else {
				this.sectors(Enumerable.From(this.parent.sectors()).Join(filteredProjects, "$.name", "$.Key()", function (inner, outer) {
					return new main.BottomPanelSectorVm(inner, outer.source.length);
				}).Where("$").ToArray());
			}
		},
		getMode: function () { return this.mode(); }
	};
	return root;

})(iadb || {}, ko, window, jQuery);
﻿var iadb = (function (idab, $) {

    (iadb['Map'] = function (f1, options, signals) {
        if (!f1) throw 'f1 is not provided';
        if (!options) throw 'options are not provided';
        if (!signals) throw 'signals are not provided';
        this.f1 = f1;
        this.mapOptions = options;
        this.mapSignals = signals;
    }).prototype = {
        getCenter: function () {
            var center = this.f1.getCenter();
            return { latitude: center.lat, longitude: center.lon };
        },
        getBasemap: function () {
        	return this.f1.getBasemap();
        },
        getLayers: function () {
        	return this.f1.getLayers();
        },
        findLayer: function (predicate) {
            var layers = this.getLayers();
            for (var i = 0; i < layers.length; i++) {
                var layer = layers[i];
                if (predicate(layer)) return layer;
            }
            return null;
        },
        getHeight: function () {
            return $("#" + this.f1.options.dom_id).height();
        },
        getExtent: function () {
            return this.f1.getExtent();
        },
        setZoom: function (zoom) {
            return this.f1.setZoom(zoom);
        },
        getZoom: function () {
            return this.f1.getZoom();
        },
        getLayer: function (predicate) {
            var found = this.findLayer(predicate);
            if (!found) throw 'unable to find a layer using predicate: ' + predicate.toString();
            return found;
        },
        getProjects: function () {
            return this.f1.getFeatures(this.getProjectLayer().guid);
        },
        getProjectLayer: function () {
        	return this.getLayer(this.mapOptions.isProjectLayer);
        },
        getResults: function () {
            return this.f1.getFeatures(this.getResultLayer().guid);
        },
        getResultLayer: function () {
        	return this.getLayer(this.mapOptions.isResultLayer);
        },
        getLinesLayer: function () {
        	return this.getLayer(this.mapOptions.isLinesLayer);
        },
        highlightResult: function (id) {
            var f1 = this.f1;
            var resultLayer = this.findLayer(this.mapOptions.isResultLayer);
            //setTimeout(function () { f1.addHighlight(resultLayer.guid, "$[rf]==" + id.toString()); }, 5000);
            setTimeout(function () { f1.addHighlight(resultLayer.guid, "$[category] == 'Households with new or upgraded water supply'") }, 5000);
        },
        setup: function (sectors) {
            if (!sectors) throw 'sectors are not provided';
            var f1 = this.f1;

            // create categories for projects
            var sectorIndex = 0;
            var sectorIcons = {};
            Enumerable.From(sectors).ForEach(function (x) {
                sectorIcons[x.name] = x.imageurl;
            });

               var projectLayer = this.findLayer(this.mapOptions.isProjectLayer);
               var resultLayer = this.findLayer(this.mapOptions.isResultLayer);

            // display ouputs with category icons
            console.log("," + new Date().getTime() + ",addLayerCategoryFilter," + resultLayer.title);
            f1.addLayerCategoryFilter(resultLayer.guid, { attribute: "custom category", categories: iadb.globals.getOutputBySectorIcons() });

            var slsOptions = { icon: { symbol: iadb.globals.imageurl + "/images/icons/output-other.png"} };
            this.setLayerStyle(resultLayer.guid, slsOptions);

            console.log("," + new Date().getTime() + ",addLayerCategoryFilter," + projectLayer.title);
            f1.addLayerCategoryFilter(projectLayer.guid, { attribute: "prosectoren", categories: sectorIcons });

        },

        setLayerStyle: function (layer, options) {
            console.log("," + new Date().getTime() + ",setLayerStyle," + layer.title);
            console.log(options);
            this.f1.setLayerStyle(layer, options);
        },
        replaceFeatures: function () {
            var f1 = this.f1;
            var projectLayer = this.findLayer(this.mapOptions.isProjectLayer);
            var resultLayer = this.findLayer(this.mapOptions.isResultLayer);

            // replace output layers
            // repopulate outputs
            var projectFeatures = Enumerable.From(f1.getFeatures(projectLayer.guid));
            var outputfeatures = f1.getFeatures(resultLayer.guid);

            var id = 0;
            outputfeatures = Enumerable.From(outputfeatures).Join(projectFeatures, "x=>x['project number']", "y=>y.pronumber", function (inner, outer) {
                var sectorName = outer.prosectoren;
                var category = inner['category'] || "Other";
                inner["custom category"] = sectorName + "-" + category;
                //inner.rf = id++;
                return inner;
            }).ToArray();

            console.log("," + new Date().getTime() + ",addFeatures," + resultLayer.title);
            console.log("outputfeatures:" + (outputfeatures ? "defined" : "null or undefined"));
            this.addFeatures(resultLayer.guid, outputfeatures, true);

        },
        addFeatures: function (guid, features) {
            console.log({ features: features });
            var f1 = this.f1;
            f1.addFeatures(guid, features, true);
        },
        addFilter: function (layer, expression) {
            var dfr = new $.Deferred();
            this.removeFilters(layer).pipe(function () {
                if (expression != null) {
                    if (expression.indexOf('"') >= 0) throw 'expression contains a quote sign: ' + expression;
                    console.log("," + new Date().getTime() + ",addFilter," + layer.title);
                    this.f1.addFilter(layer.guid, { expression: expression });
                }
                this.makeSureVisible(layer);
                console.log('layer ' + layer.guid + ' got filter: ' + expression);
                setTimeout(function () {
                    dfr.resolve();
                }, iadb.Main.MapDelay / 2);
            } .bind(this));
            return dfr.promise();
        },
        removeFilter: function (layer, expression) {
            var dfr = new $.Deferred();
            setTimeout(function () { dfr.resolve() }, iadb.Main.MapDelay / 2);
            console.log("," + new Date().getTime() + ",removeFilter," + layer.title);
            this.f1.removeFilter(layer.guid, { expression: expression });
            return dfr.promise();
        },
        removeFilters: function (layer) {
            var dfr = new $.Deferred();
            setTimeout(function () { dfr.resolve() }, iadb.Main.MapDelay / 2);
            console.log("," + new Date().getTime() + ",removeFilters," + layer.title);
            this.f1.clearFilters(layer.guid);
            return dfr.promise();
        },
        setVisibility: function (layer, visible) {
            console.log("," + new Date().getTime() + ",setVisibility," + layer.title + ',' + visible);
            this.f1.showLayer(layer.guid, visible);
        },
        makeSureVisible: function (layer) {
            if (layer.visible) return;
            this.setVisibility(layer, true);
        },
        makeSureHidden: function (layer) {
            if (!layer.visible) return;
            this.setVisibility(layer, false);
        },
        setCenter: function (point) {
            console.log("," + new Date().getTime() + ",setCenter,");
            this.f1.setCenter(point.latitude, point.longitude);
        },
        setBasemap: function (id) {
            console.log("," + new Date().getTime() + ",setBasemap," + id);
            this.f1.setBasemap(id);
        },
        getMapByUniqueName: function (uname) {
            for (var i = 0; i < iadb.Map.basemaps.length; i++) {
                if (iadb.Map.basemaps[i].uniqueName == uname)
                    return iadb.Map.basemaps[i]
            }
            return null;
        }
    };

    iadb['Map'].basemaps = [
        { id: 410, name: 'Acetate', uniqueName: 'acetate' }, { id: 421, name: 'Acetate Terrain', uniqueName: "acetate_terrain" }, { id: 408, name: 'Google Aerial', uniqueName: "google_aerial" },
        { id: 419, name: 'Google Hybrid', uniqueName: "google_hybrid" }, { id: 412, name: 'Google Road', uniqueName: "google_road" }, { id: 422, name: 'Google Terrain', uniqueName: "google_terrain" },
        { id: 415, name: 'MapQuest', uniqueName: "mapquest" }, { id: 407, name: 'Microsoft Aerial', uniqueName: "maerial" }, { id: 418, name: 'Microsoft Hybrid', uniqueName: "mhybrid" },
        { id: 414, name: 'Microsoft Road', uniqueName: "microsoft_road" }, { id: 406, name: 'NASA Blue Marble', uniqueName: "nasa_blue_marble" }, { id: 411, name: 'OpenStreetMap Road', uniqueName: "openstreetmap_road" },
        { id: 416, name: 'OpenSteetMap GeoCache', uniqueName: "osm_geocache" }
    //        , { id: 409, name: 'Yahoo Aerial', uniqueName: "yaerial" },
    //        { id: 420, name: 'Yahoo Hybrid', uniqueName: "yhybrid" }, { id: 413, name: 'Yahoo Roads', uniqueName: "yroad" }
    ];
    return iadb;

} (iadb || {}, jQuery));
﻿var iadb = (function (iadb, window, undefined) {

	(iadb['Nav'] = function (crossroads, hasher, map) {
		this.map = map;
		this.mapSignals = map.mapSignals;
		this.crossroads = crossroads;
		this.hasher = hasher;
		this.language = iadb.getCurrentLanguage();
		this.country = iadb.getCurrentCountry().name;
		this.zoom = map.getZoom();
		var center = map.f1.getCenter();
		this.centerLat = center.lat;
		this.centerLon = center.lon;
		var mapuniqueName = this.map.getBasemap().uniqueName || "google_road";
		var basemap = this.map.getMapByUniqueName(mapuniqueName);
		this.basemap = basemap ? basemap.id : 414;
		this.hash = "";
	}).prototype = {
		startListening: function (vm) {
			this.vm = vm;
			var crossroads = this.crossroads;
			var hasher = this.hasher;

			crossroads.addRoute('').matched.add(function () { this.dispatch(this.language, this.country, this.zoom, this.centerLat, this.centerLon, this.basemap, vm.unpickProject, vm) }, this)
			crossroads.addRoute('iadb/{language}/{country}/').matched.add(function (language, country) { this.dispatch(language, country, this.zoom, this.centerLat, this.centerLon, this.basemap, vm.unpickProject, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickProject, vm) }, this)
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/project/{projectId}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, projectId) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.pickProject, vm, projectId) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/result/{resultId}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, resultId) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.pickResult, vm, resultId) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-projects').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickProject, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-sectors').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickSector, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-priorities').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickPriority, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/all-results').matched.add(function (language, country, zoom, centerLat, centerLon, basemap) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.unpickOutput, vm) }, this);
			crossroads.addRoute('iadb/{language}/{country}/{zoom}/{centerLat}/{centerLon}/{basemap}/filter/{mode}/{filter}').matched.add(function (language, country, zoom, centerLat, centerLon, basemap, mode, filter) { this.dispatch(language, country, zoom, centerLat, centerLon, basemap, vm.applyFilters, vm, mode, filter) }, this);

			var vmSignals = vm.mainSignals;
			vmSignals.projectPicked.add(function (projectId) { this.setHash('project/' + projectId); }, this);
			vmSignals.resultPicked.add(function (resultId) { this.setHash('result/' + resultId); }, this);
			vmSignals.projectUnpicked.add(function () { this.setHash('all-projects'); }, this);
			vmSignals.sectorUnpicked.add(function () { this.setHash('all-sectors'); }, this);
			vmSignals.priorityUnpicked.add(function () { this.setHash('all-priorities'); }, this);
			vmSignals.outputUnpicked.add(function () { this.setHash('all-results'); }, this);
			vmSignals.filterResults.add(function (filter) { this.setHash('filter/results/' + filter); }, this);
			vmSignals.filterSectors.add(function (filter) { this.setHash('filter/sectors/' + filter); }, this);
			vmSignals.filterPriorities.add(function (filter) { this.setHash('filter/priorities/' + filter); }, this);
			vmSignals.filterProjects.add(function (filter) { this.setHash('filter/projects/' + filter); }, this);
			vmSignals.pickCountry.add(function (country) {
				this.country = country;
				this.setHash("all-projects");
				window.location.reload();
			}, this);
			vmSignals.goBack.add(function () {
				if (this.vm.canGoBack()) {
					this.vm.history().pop();
					var route = encodeURI(vm.history().pop());
					document.location = document.location.href.substring(0, document.location.href.indexOf("#") + 1) + route;
					crossroads.parse(route);
				}
			}, this);

			var mapSignals = this.mapSignals;
			mapSignals.mapPanStop.add(this.updateCenter, this);
			mapSignals.mapZoomed.add(this.updateZoom, this);
			mapSignals.basemapChanged.add(this.updateBasemap, this);

			hasher.initialized.add(crossroads.parse, crossroads); //parse initial hash
			hasher.changed.add(crossroads.parse, crossroads); //parse hash changes
			hasher.init(); //start listening for history change
		},
		dispose: function () {
			this.crossroads.removeAllRoutes();
			this.crossroads = null;

			this.hasher.stop();
			this.hasher.dispose();
			this.hasher = null;
		},
		navigate: function (hash) {
			var hasher = this.hasher;
			var current = hasher.getHash();
			if (current === hash) {
				return false;
			} else {
				hasher.setHash(hash);
				return true;
			}
		},
		updateCenter: function (point) {
			this.centerLat = point.latitude;
			this.centerLon = point.longitude;
			this.refreshHash();
		},
		updateZoom: function (zoom) {
			this.zoom = zoom;
			this.refreshHash();
		},
		updateBasemap: function (basemap) {
			var map = this.map.getMapByUniqueName(basemap.uniqueName);
			if (map) {
				this.basemap = map.id
			}
			else {
				this.basemap = 414;
			}
			this.refreshHash();
		},
		dispatch: function (language, country, zoom, centerLat, centerLon, basemap, handler, context, parama, paramb) {
			if (this.language != language)
				window.location.reload();
			this.language = language;

			var center = this.map.getCenter();
			if (center.latitude != centerLat || center.longitude != centerLon) {
				this.centerLat = centerLat;
				this.centerLon = centerLon;
				this.map.setCenter({ latitude: parseFloat(centerLat), longitude: parseFloat(centerLon) });
			}

			if (this.map.getZoom() != zoom) {
				this.zoom = zoom;
				this.map.setZoom(zoom);
			}

			if (this.basemap != basemap) {
				this.basemap = basemap;
				this.vm.pickedBasemap(basemap);
			}

			handler.call(context, parama, paramb);
		},
		refreshHash: function () {
			this.setHash(this.hash);
		},
		setHash: function (hash) {
			this.hash = hash;
			var extendedhash = "iadb/" + this.language + "/" + this.country + "/" + this.zoom + "/" + this.centerLat + "/" + this.centerLon + "/" + this.basemap + "/" + hash;
			this.vm.history.push(extendedhash);
			var hasher = this.hasher;
			hasher.changed.active = false;
			hasher.setHash(extendedhash);
			hasher.changed.active = true;
		}
	};

	return iadb;
} (iadb || {}, window));
﻿var iadb = (function (iadb, ko) {

    (iadb['Popup'] = function () {
        this.visible = ko.observable(false);
        this.url = ko.observable('');
        this.width = ko.observable(100);
        this.height = ko.observable(100);
        this.scrolling = ko.observable("auto");
    }).prototype = {
        close: function () {
            this.visible(false);
            this.url('');
            return false;
        },
        show: function (url, size, scrolling) {
            size = size || this.defaultSize;
            this.url(url);
            this.width(size.width);
            this.height(size.height);
            this.visible(true);
            this.scrolling(scrolling);
            return false;
        },
        defaultSize: { width: 900, height: 500 }
    };


    return iadb;
   } (iadb || {}, ko));
﻿var iadb = (function (iadb) {

	iadb['Repo'] = function () {
		this.excludedLayers = "outputs lines projects";
	};

	iadb['Repo'].prototype = {
		initialize: function (map, basemaps, countries) {
			if (!map) throw 'map is not provided';
			var projectFeatures = map.getProjects();
			var outputFeatures = map.getResults();

			// create project array
			var projects = this.projects = Enumerable.From(projectFeatures).OrderBy("$.pronumber").Select(function (x) {
				return {
					hasDocuments: x.hasdocuments == "1",
					hasNews: x.hasnews == "1",
					hasPhotos: x.hasphotos == "1",
					hasVideos: x.hasvideos == "1",
					pid: iadb.nextId(),
					id: x.pronumber,
					name: x.proname,
					sector: x.prosectoren,
					priority: x.priority,
					description: x.prodescription,
					lat: x.latitude,
					"long": x.longitude,
					outputcount: Enumerable.From(outputFeatures).Where(function (y) { return y['project number'] == x.pronumber }).Count()
				}
			}).ToArray();
			// create sectors array
			var sectorIndex = 0;
			var sectors = this.sectors = Enumerable.From(iadb.globals.sectors).OrderBy(function (x) {
				return x.Key == "Other" ? "zzz" : x.Key
			}).Select(function (x) {
				var count = Enumerable.From(projects).Where(function (y) { return y.sector == x.Key }).Count();
				return { name: x.Key, id: x.Value.id, count: count, imageurl: encodeURI(iadb.globals.imageurl + "/images/icons/sectors/" + x.Value.filename + ".png") };
			}).Where("$.count>0").ToArray();
			
			// create priorities array
			var priorityIndex = 0;
			var priorities = this.priorities = Enumerable.From(iadb.globals.priorities).OrderBy(function (x) {
				return x.Key == "" ? "" : x.Key
			}).Select(function (x) {
				var count = Enumerable.From(projects).Where(function (y) { return y.sector == x.Key }).Count();
				return { name: x.Key, id: x.Value.id, count: count, imageurl: encodeURI(iadb.globals.imageurl + "/images/icons/priorities/" + x.Value.filename + ".png") };
			}).Where("$.count>0").ToArray();


			// create output category array
			var outputIndex = 0;
			var outputs = this.outputs = Enumerable.From(outputFeatures).GroupBy("$['category']")
            .OrderBy(function (x) {
            	return x.Key() == null ? "zzz" : x.Key();
            })
            .Select(function (x) {
            	return {
            		id: (outputIndex++).toString(),
            		name: x.Key() == null ? "Other" : x.Key(),
            		imageurl: iadb.globals.getOutputIcons()[x.Key()],
            		count: x.source.length
            	}
            }).ToArray();

			// create results array
			var results = this.results = Enumerable.From(outputFeatures).Select(function (x) { return new iadb.Repo.Result(x, this); } .bind(this)).ToArray();

			this.basemaps = basemaps;
			this.countries = countries;
		},

		dispose: function () {
			this.projects = null;
			this.sectors = null;
			this.priorities = null;
			this.outputs = null;
			this.results = null;
			this.basemaps = null;
			this.countries = null;
		},

		getProject: function (project) {
			if (typeof (project) == "string") {
				return Enumerable.From(this.getProjects()).Where(function (x) { return x.id == project }).FirstOrDefault(null);
			}
			else {
				return Enumerable.From(this.getProjects()).Join(Enumerable.From(project), "$.id", "$", function (inner, outer) { return inner; }).ToArray();
			}
		},
		getProjects: function (ids) {
			return this.projects || [];
		},
		getSector: function (sector) {
			return Enumerable.From(this.getSectors()).Where(function (x) { return x.name == sector }).FirstOrDefault(null);
		},

		getSectors: function () {
			return this.sectors || [];
		},
		getPriority: function (priority) {
			return Enumerable.From(this.getPriorities()).Where(function (x) { return x.name == priority }).FirstOrDefault(null);
		},

		getPriorities: function () {
			return this.priorities || [];
		},
		getOutput: function (sector) {
			return Enumerable.From(this.getOutputs()).Where(function (x) { return x.name == sector }).FirstOrDefault(null);
		},
		getOutputs: function () {
			return this.outputs || [];
		},
		getResult: function (id) {
			return Enumerable.From(this.getResults()).Where(function (x) { return x.outputid.toString() == id.toString() }).FirstOrDefault(null);
		},
		getResults: function () {
			return this.results || [];
		},
		getBasemaps: function () {
			return this.basemaps || [];
		},
		getCountries: function () {
			return this.countries || [];
		},
		getLayers: function () {
			var layers = map.getLayers();
			var result = Enumerable.From(layers);
			result = result.OrderBy("$.title");
			result = result.Where((function (x) { return this.excludedLayers.indexOf(x.title.toLowerCase()) < 0; }).bind(this));
			return result.ToArray();
		}
	};
	(iadb.Repo.Result = function (data, repo) {
		// per their request everything except hasphotos should be false;
		this.hasdocuments = false; // data.hasdocuments==1;
		this.hasnews = false; // data.hasnews==1;
		this.hasphotos = data.hasphotos == 1;
		this.hasvideos = false; //data.hasvideos==1;
		this.outputid = data.outputid;
		this.project = data['project number'];
		this.title = data.title;
		this.description = data.body;
		this.lat = data.latitude;
		this['long'] = data.longitude;
		// TODO: Get category
		this.category = repo.getOutput(data['category'] || "Other");
		this.imageUrl = data['photo filename'] == null ? null : encodeURI('http://services.iadb.org/wmsfiles/images/datavis/thumbs/' + data['photo filename']);
	}).prototype = {
	};
	return iadb;

} (iadb || {}));
﻿var iadb = (function (iadb, window, $, undefined) {

	(iadb['Ui'] = function (map) {
		if (!map) debugger;
		this.map = map;
	}).prototype = {
		initialize: function (options) {
			this.initializeZoom();
			if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
				this.applyCorners();
			}
		},
		applyCorners: function () {
			$('.corners').each(function () {
				iadb.corners(this, 10);
			});
		},
		initializeZoom: function () {
			var map = this.map;
			var f1 = map.f1;
			f1.setMapStyle({ infowindow: { visible: false} });
			f1.setMapStyle({ zoom: { expanded: true, horizontal: false} });
		}
	};


	return iadb;
} (iadb || {}, window, jQuery));
﻿// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
// 
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
* All code is in an anonymous closure to keep the global namespace clean.
*
* @param {number=} overflow 
* @param {number=} startdenom
*/
(function (pool, math, width, chunks, significance, overflow, startdenom) {


    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    math['seedrandom'] = function seedrandom(seed, use_entropy) {
        var key = [];
        var arc4;

        // Flatten the seed string or build one from local entropy if needed.
        seed = mixkey(flatten(
    use_entropy ? [seed, pool] :
    arguments.length ? seed :
    [new Date().getTime(), pool, window], 3), key);

        // Use the seed to initialize an ARC4 generator.
        arc4 = new ARC4(key);

        // Mix the randomness into accumulated entropy.
        mixkey(arc4.S, pool);

        // Override Math.random

        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.

        math['random'] = function random() {  // Closure to return a random double:
            var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
            var d = startdenom;                 //   and denominator d = 2 ^ 48.
            var x = 0;                          //   and no 'extra last byte'.
            while (n < significance) {          // Fill up all significant digits by
                n = (n + x) * width;              //   shifting numerator and
                d *= width;                       //   denominator and generating a
                x = arc4.g(1);                    //   new least-significant-byte.
            }
            while (n >= overflow) {             // To avoid rounding up, before adding
                n /= 2;                           //   last byte, shift everything
                d /= 2;                           //   right using integer math until
                x >>>= 1;                         //   we have exactly the desired bits.
            }
            return (n + x) / d;                 // Form the number within [0, 1).
        };

        // Return the seed that was used
        return seed;
    };

    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    /** @constructor */
    function ARC4(key) {
        var t, u, me = this, keylen = key.length;
        var i = 0, j = me.i = me.j = me.m = 0;
        me.S = [];
        me.c = [];

        // The empty key [] is treated as [0].
        if (!keylen) { key = [keylen++]; }

        // Set up S using the standard key scheduling algorithm.
        while (i < width) { me.S[i] = i++; }
        for (i = 0; i < width; i++) {
            t = me.S[i];
            j = lowbits(j + t + key[i % keylen]);
            u = me.S[j];
            me.S[i] = u;
            me.S[j] = t;
        }

        // The "g" method returns the next (count) outputs as one number.
        me.g = function getnext(count) {
            var s = me.S;
            var i = lowbits(me.i + 1); var t = s[i];
            var j = lowbits(me.j + t); var u = s[j];
            s[i] = u;
            s[j] = t;
            var r = s[lowbits(t + u)];
            while (--count) {
                i = lowbits(i + 1); t = s[i];
                j = lowbits(j + t); u = s[j];
                s[i] = u;
                s[j] = t;
                r = r * width + s[lowbits(t + u)];
            }
            me.i = i;
            me.j = j;
            return r;
        };
        // For robust unpredictability discard an initial batch of values.
        // See http://www.rsa.com/rsalabs/node.asp?id=2009
        me.g(width);
    }

    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    /** @param {Object=} result 
    * @param {string=} prop
    * @param {string=} typ */
    function flatten(obj, depth, result, prop, typ) {
        result = [];
        typ = typeof (obj);
        if (depth && typ == 'object') {
            for (prop in obj) {
                if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
                    try { result.push(flatten(obj[prop], depth - 1)); } catch (e) { }
                }
            }
        }
        return (result.length ? result : obj + (typ != 'string' ? '\0' : ''));
    }

    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    /** @param {number=} smear 
    * @param {number=} j */
    function mixkey(seed, key, smear, j) {
        seed += '';                         // Ensure the seed is a string
        smear = 0;
        for (j = 0; j < seed.length; j++) {
            key[lowbits(j)] =
      lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
        }
        seed = '';
        for (j in key) { seed += String.fromCharCode(key[j]); }
        return seed;
    }

    //
    // lowbits()
    // A quick "n mod width" for width a power of 2.
    //
    function lowbits(n) { return n & (width - 1); }

    //
    // The following constants are related to IEEE 754 limits.
    //
    startdenom = math.pow(width, chunks);
    significance = math.pow(2, significance);
    overflow = significance * 2;

    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to intefere with determinstic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);

    // End anonymous scope, and pass initial values.
})(
  [],   // pool: entropy pool starts empty
  Math, // math: package containing random, pow, and seedrandom
  256,  // width: each RC4 output is 0 <= x < 256
  6,    // chunks: at least six RC4 outputs for each double
  52    // significance: there are 52 significant digits in a double
);
