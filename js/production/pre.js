// Knockout JavaScript library v2.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){ 
function c(a){throw a;}var l=void 0,m=!0,o=null,p=!1,r=window.ko={};r.b=function(a,b){for(var d=a.split("."),e=window,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=b};r.l=function(a,b,d){a[b]=d};
r.a=new function(){function a(a,e){if("INPUT"!=a.tagName||!a.type)return p;if("click"!=e.toLowerCase())return p;var b=a.type.toLowerCase();return"checkbox"==b||"radio"==b}var b=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},e={};d[/Firefox\/2/i.test(navigator.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave".split(",");for(var f in d){var h=d[f];if(h.length)for(var g=0,i=h.length;g<i;g++)e[h[g]]=
f}var j=function(){for(var a=3,e=document.createElement("div"),b=e.getElementsByTagName("i");e.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",b[0];);return 4<a?a:l}();return{Ba:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,e){for(var b=0,f=a.length;b<f;b++)e(a[b])},k:function(a,e){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,e);for(var b=0,f=a.length;b<f;b++)if(a[b]===e)return b;return-1},Wa:function(a,e,b){for(var f=0,d=
a.length;f<d;f++)if(e.call(b,a[f]))return a[f];return o},ca:function(a,e){var b=r.a.k(a,e);0<=b&&a.splice(b,1)},ya:function(a){for(var a=a||[],e=[],b=0,f=a.length;b<f;b++)0>r.a.k(e,a[b])&&e.push(a[b]);return e},ba:function(a,e){for(var a=a||[],b=[],f=0,d=a.length;f<d;f++)b.push(e(a[f]));return b},aa:function(a,e){for(var a=a||[],b=[],f=0,d=a.length;f<d;f++)e(a[f])&&b.push(a[f]);return b},J:function(a,e){for(var b=0,f=e.length;b<f;b++)a.push(e[b]);return a},extend:function(a,e){for(var b in e)e.hasOwnProperty(b)&&
(a[b]=e[b]);return a},U:function(a){for(;a.firstChild;)r.removeNode(a.firstChild)},oa:function(a,e){r.a.U(a);e&&r.a.n(e,function(e){a.appendChild(e)})},Ja:function(a,e){var b=a.nodeType?[a]:a;if(0<b.length){for(var f=b[0],d=f.parentNode,h=0,g=e.length;h<g;h++)d.insertBefore(e[h],f);h=0;for(g=b.length;h<g;h++)r.removeNode(b[h])}},La:function(a,e){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",e):a.selected=e},z:function(a){return(a||"").replace(b,"")},Db:function(a,e){for(var b=
[],f=(a||"").split(e),d=0,h=f.length;d<h;d++){var g=r.a.z(f[d]);""!==g&&b.push(g)}return b},Cb:function(a,e){a=a||"";return e.length>a.length?p:a.substring(0,e.length)===e},hb:function(a){for(var e=Array.prototype.slice.call(arguments,1),b="return ("+a+")",f=0;f<e.length;f++)e[f]&&"object"==typeof e[f]&&(b="with(sc["+f+"]) { "+b+" } ");return(new Function("sc",b))(e)},fb:function(a,e){if(e.compareDocumentPosition)return 16==(e.compareDocumentPosition(a)&16);for(;a!=o;){if(a==e)return m;a=a.parentNode}return p},
ga:function(a){return r.a.fb(a,document)},s:function(e,b,f){if("undefined"!=typeof jQuery){if(a(e,b))var d=f,f=function(a,e){var b=this.checked;if(e)this.checked=e.Ya!==m;d.call(this,a);this.checked=b};jQuery(e).bind(b,f)}else"function"==typeof e.addEventListener?e.addEventListener(b,f,p):"undefined"!=typeof e.attachEvent?e.attachEvent("on"+b,function(a){f.call(e,a)}):c(Error("Browser doesn't support addEventListener or attachEvent"))},sa:function(b,f){(!b||!b.nodeType)&&c(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var d=[];a(b,f)&&d.push({Ya:b.checked});jQuery(b).trigger(f,d)}else if("function"==typeof document.createEvent)"function"==typeof b.dispatchEvent?(d=document.createEvent(e[f]||"HTMLEvents"),d.initEvent(f,m,m,window,0,0,0,0,0,p,p,p,p,0,b),b.dispatchEvent(d)):c(Error("The supplied element doesn't support dispatchEvent"));else if("undefined"!=typeof b.fireEvent){if("click"==f&&"INPUT"==b.tagName&&("checkbox"==b.type.toLowerCase()||"radio"==b.type.toLowerCase()))b.checked=
b.checked!==m;b.fireEvent("on"+f)}else c(Error("Browser doesn't support triggering events"))},d:function(a){return r.V(a)?a():a},eb:function(a,e){return 0<=r.a.k((a.className||"").split(/\s+/),e)},Qa:function(a,e,b){var f=r.a.eb(a,e);if(b&&!f)a.className=(a.className||"")+" "+e;else if(f&&!b){for(var b=(a.className||"").split(/\s+/),f="",d=0;d<b.length;d++)b[d]!=e&&(f+=b[d]+" ");a.className=r.a.z(f)}},outerHTML:function(a){if(j===l){var e=a.outerHTML;if("string"==typeof e)return e}e=window.document.createElement("div");
e.appendChild(a.cloneNode(m));return e.innerHTML},Ma:function(a,e){var b=r.a.d(e);if(b===o||b===l)b="";"innerText"in a?a.innerText=b:a.textContent=b;if(9<=j)a.innerHTML=a.innerHTML},yb:function(a,e){for(var a=r.a.d(a),e=r.a.d(e),b=[],f=a;f<=e;f++)b.push(f);return b},X:function(a){for(var e=[],b=0,f=a.length;b<f;b++)e.push(a[b]);return e},ob:6===j,pb:7===j,Ca:function(a,e){for(var b=r.a.X(a.getElementsByTagName("INPUT")).concat(r.a.X(a.getElementsByTagName("TEXTAREA"))),f="string"==typeof e?function(a){return a.name===
e}:function(a){return e.test(a.name)},d=[],h=b.length-1;0<=h;h--)f(b[h])&&d.push(b[h]);return d},vb:function(a){return"string"==typeof a&&(a=r.a.z(a))?window.JSON&&window.JSON.parse?window.JSON.parse(a):(new Function("return "+a))():o},qa:function(a){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&c(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(r.a.d(a))},wb:function(a,e,b){var b=b||{},f=b.params||{},d=b.includeFields||this.Ba,h=a;if("object"==typeof a&&"FORM"==a.tagName)for(var h=a.action,g=d.length-1;0<=g;g--)for(var j=r.a.Ca(a,d[g]),i=j.length-1;0<=i;i--)f[j[i].name]=j[i].value;var e=r.a.d(e),u=document.createElement("FORM");u.style.display="none";u.action=h;u.method="post";for(var y in e)a=document.createElement("INPUT"),a.name=y,a.value=r.a.qa(r.a.d(e[y])),u.appendChild(a);for(y in f)a=document.createElement("INPUT"),
a.name=y,a.value=f[y],u.appendChild(a);document.body.appendChild(u);b.submitter?b.submitter(u):u.submit();setTimeout(function(){u.parentNode.removeChild(u)},0)}}};r.b("ko.utils",r.a);
r.a.n([["arrayForEach",r.a.n],["arrayFirst",r.a.Wa],["arrayFilter",r.a.aa],["arrayGetDistinctValues",r.a.ya],["arrayIndexOf",r.a.k],["arrayMap",r.a.ba],["arrayPushAll",r.a.J],["arrayRemoveItem",r.a.ca],["extend",r.a.extend],["fieldsIncludedWithJsonPost",r.a.Ba],["getFormFields",r.a.Ca],["postJson",r.a.wb],["parseJson",r.a.vb],["registerEventHandler",r.a.s],["stringifyJson",r.a.qa],["range",r.a.yb],["toggleDomNodeCssClass",r.a.Qa],["triggerEvent",r.a.sa],["unwrapObservable",r.a.d]],function(a){r.b("ko.utils."+
a[0],a[1])});Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return b.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});
r.a.e=new function(){var a=0,b="__ko__"+(new Date).getTime(),d={};return{get:function(a,b){var d=r.a.e.getAll(a,p);return d===l?l:d[b]},set:function(a,b,d){d===l&&r.a.e.getAll(a,p)===l||(r.a.e.getAll(a,m)[b]=d)},getAll:function(e,f){var h=e[b];if(!(h&&"null"!==h)){if(!f)return;h=e[b]="ko"+a++;d[h]={}}return d[h]},clear:function(a){var f=a[b];f&&(delete d[f],a[b]=o)}}};r.b("ko.utils.domData",r.a.e);r.b("ko.utils.domData.clear",r.a.e.clear);
r.a.A=new function(){function a(a,b){var h=r.a.e.get(a,d);h===l&&b&&(h=[],r.a.e.set(a,d,h));return h}function b(e){var b=a(e,p);if(b)for(var b=b.slice(0),d=0;d<b.length;d++)b[d](e);r.a.e.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&jQuery.cleanData([e])}var d="__ko_domNodeDisposal__"+(new Date).getTime();return{va:function(e,b){"function"!=typeof b&&c(Error("Callback must be a function"));a(e,m).push(b)},Ia:function(e,b){var h=a(e,p);h&&(r.a.ca(h,b),0==h.length&&r.a.e.set(e,
d,l))},F:function(a){if(!(1!=a.nodeType&&9!=a.nodeType)){b(a);var f=[];r.a.J(f,a.getElementsByTagName("*"));for(var a=0,d=f.length;a<d;a++)b(f[a])}},removeNode:function(a){r.F(a);a.parentNode&&a.parentNode.removeChild(a)}}};r.F=r.a.A.F;r.removeNode=r.a.A.removeNode;r.b("ko.cleanNode",r.F);r.b("ko.removeNode",r.removeNode);r.b("ko.utils.domNodeDisposal",r.a.A);r.b("ko.utils.domNodeDisposal.addDisposeCallback",r.a.A.va);r.b("ko.utils.domNodeDisposal.removeDisposeCallback",r.a.A.Ia);
r.a.ma=function(a){var b;if("undefined"!=typeof jQuery){if((b=jQuery.clean([a]))&&b[0]){for(a=b[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var d=r.a.z(a).toLowerCase();b=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];a="ignored<div>"+
d[1]+a+d[2]+"</div>";for("function"==typeof window.innerShiv?b.appendChild(window.innerShiv(a)):b.innerHTML=a;d[0]--;)b=b.lastChild;b=r.a.X(b.lastChild.childNodes)}return b};r.a.Z=function(a,b){r.a.U(a);if(b!==o&&b!==l)if("string"!=typeof b&&(b=b.toString()),"undefined"!=typeof jQuery)jQuery(a).html(b);else for(var d=r.a.ma(b),e=0;e<d.length;e++)a.appendChild(d[e])};r.b("ko.utils.parseHtmlFragment",r.a.ma);r.b("ko.utils.setHtml",r.a.Z);
r.r=function(){function a(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function b(a,f){if(a)if(8==a.nodeType){var d=r.r.Ga(a.nodeValue);d!=o&&f.push({cb:a,tb:d})}else if(1==a.nodeType)for(var d=0,g=a.childNodes,i=g.length;d<i;d++)b(g[d],f)}var d={};return{ka:function(b){"function"!=typeof b&&c(Error("You can only pass a function to ko.memoization.memoize()"));var f=a()+a();d[f]=b;return"<\!--[ko_memo:"+f+"]--\>"},Ra:function(a,b){var h=d[a];h===l&&c(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return h.apply(o,b||[]),m}finally{delete d[a]}},Sa:function(a,f){var d=[];b(a,d);for(var g=0,i=d.length;g<i;g++){var j=d[g].cb,k=[j];f&&r.a.J(k,f);r.r.Ra(d[g].tb,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},Ga:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:o}}}();r.b("ko.memoization",r.r);r.b("ko.memoization.memoize",r.r.ka);r.b("ko.memoization.unmemoize",r.r.Ra);r.b("ko.memoization.parseMemoText",r.r.Ga);
r.b("ko.memoization.unmemoizeDomNodeAndDescendants",r.r.Sa);r.Aa={throttle:function(a,b){a.throttleEvaluation=b;var d=o;return r.i({read:a,write:function(e){clearTimeout(d);d=setTimeout(function(){a(e)},b)}})},notify:function(a,b){a.equalityComparer="always"==b?function(){return p}:r.w.fn.equalityComparer;return a}};r.b("ko.extenders",r.Aa);r.Oa=function(a,b){this.da=a;this.bb=b;r.l(this,"dispose",this.v)};r.Oa.prototype.v=function(){this.nb=m;this.bb()};
r.R=function(){this.u={};r.a.extend(this,r.R.fn);r.l(this,"subscribe",this.ra);r.l(this,"extend",this.extend);r.l(this,"getSubscriptionsCount",this.kb)};
r.R.fn={ra:function(a,b,d){var d=d||"change",a=b?a.bind(b):a,e=new r.Oa(a,function(){r.a.ca(this.u[d],e)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(e);return e},notifySubscribers:function(a,b){b=b||"change";this.u[b]&&r.a.n(this.u[b].slice(0),function(b){b&&b.nb!==m&&b.da(a)})},kb:function(){var a=0,b;for(b in this.u)this.u.hasOwnProperty(b)&&(a+=this.u[b].length);return a},extend:function(a){var b=this;if(a)for(var d in a){var e=r.Aa[d];"function"==typeof e&&(b=e(b,a[d]))}return b}};
r.Ea=function(a){return"function"==typeof a.ra&&"function"==typeof a.notifySubscribers};r.b("ko.subscribable",r.R);r.b("ko.isSubscribable",r.Ea);r.T=function(){var a=[];return{Xa:function(b){a.push({da:b,za:[]})},end:function(){a.pop()},Ha:function(b){r.Ea(b)||c("Only subscribable things can act as dependencies");if(0<a.length){var d=a[a.length-1];0<=r.a.k(d.za,b)||(d.za.push(b),d.da(b))}}}}();var B={undefined:m,"boolean":m,number:m,string:m};
r.w=function(a){function b(){if(0<arguments.length){if(!b.equalityComparer||!b.equalityComparer(d,arguments[0]))b.H(),d=arguments[0],b.G();return this}r.T.Ha(b);return d}var d=a;r.R.call(b);b.G=function(){b.notifySubscribers(d)};b.H=function(){b.notifySubscribers(d,"beforeChange")};r.a.extend(b,r.w.fn);r.l(b,"valueHasMutated",b.G);r.l(b,"valueWillMutate",b.H);return b};r.w.fn={B:r.w,equalityComparer:function(a,b){return a===o||typeof a in B?a===b:p}};
r.V=function(a){return a===o||a===l||a.B===l?p:a.B===r.w?m:r.V(a.B)};r.P=function(a){return"function"==typeof a&&a.B===r.w?m:"function"==typeof a&&a.B===r.i&&a.lb?m:p};r.b("ko.observable",r.w);r.b("ko.isObservable",r.V);r.b("ko.isWriteableObservable",r.P);
r.Q=function(a){0==arguments.length&&(a=[]);a!==o&&a!==l&&!("length"in a)&&c(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var b=new r.w(a);r.a.extend(b,r.Q.fn);r.l(b,"remove",b.remove);r.l(b,"removeAll",b.zb);r.l(b,"destroy",b.fa);r.l(b,"destroyAll",b.ab);r.l(b,"indexOf",b.indexOf);r.l(b,"replace",b.replace);return b};
r.Q.fn={remove:function(a){for(var b=this(),d=[],e="function"==typeof a?a:function(b){return b===a},f=0;f<b.length;f++){var h=b[f];e(h)&&(0===d.length&&this.H(),d.push(h),b.splice(f,1),f--)}d.length&&this.G();return d},zb:function(a){if(a===l){var b=this(),d=b.slice(0);this.H();b.splice(0,b.length);this.G();return d}return!a?[]:this.remove(function(b){return 0<=r.a.k(a,b)})},fa:function(a){var b=this(),d="function"==typeof a?a:function(b){return b===a};this.H();for(var e=b.length-1;0<=e;e--)d(b[e])&&
(b[e]._destroy=m);this.G()},ab:function(a){return a===l?this.fa(function(){return m}):!a?[]:this.fa(function(b){return 0<=r.a.k(a,b)})},indexOf:function(a){var b=this();return r.a.k(b,a)},replace:function(a,b){var d=this.indexOf(a);0<=d&&(this.H(),this()[d]=b,this.G())}};r.a.n("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){r.Q.fn[a]=function(){var b=this();this.H();b=b[a].apply(b,arguments);this.G();return b}});
r.a.n(["slice"],function(a){r.Q.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});r.b("ko.observableArray",r.Q);function C(a,b){a&&"object"==typeof a?b=a:(b=b||{},b.read=a||b.read);"function"!=typeof b.read&&c("Pass a function that returns the value of the dependentObservable");return b}
r.i=function(a,b,d){function e(){r.a.n(q,function(a){a.v()});q=[]}function f(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(v),v=setTimeout(h,a)):h()}function h(){if(j&&"function"==typeof d.disposeWhen&&d.disposeWhen())g.v();else{try{e();r.T.Xa(function(a){q.push(a.ra(f))});var a=d.read.call(d.owner||b);g.notifySubscribers(i,"beforeChange");i=a}finally{r.T.end()}g.notifySubscribers(i);j=m}}function g(){if(0<arguments.length)"function"===typeof d.write?d.write.apply(d.owner||b,arguments):c("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else return j||h(),r.T.Ha(g),i}var i,j=p,d=C(a,d),k="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:o,n=o;if(k){n=function(){g.v()};r.a.A.va(k,n);var t=d.disposeWhen;d.disposeWhen=function(){return!r.a.ga(k)||"function"==typeof t&&t()}}var q=[],v=o;g.jb=function(){return q.length};g.lb="function"===typeof d.write;g.v=function(){k&&r.a.A.Ia(k,n);e()};r.R.call(g);r.a.extend(g,r.i.fn);d.deferEvaluation!==m&&h();r.l(g,"dispose",g.v);r.l(g,"getDependenciesCount",g.jb);return g};
r.i.fn={B:r.i};r.i.B=r.w;r.b("ko.dependentObservable",r.i);r.b("ko.computed",r.i);
(function(){function a(e,f,h){h=h||new d;e=f(e);if(!("object"==typeof e&&e!==o&&e!==l&&!(e instanceof Date)))return e;var g=e instanceof Array?[]:{};h.save(e,g);b(e,function(b){var d=f(e[b]);switch(typeof d){case "boolean":case "number":case "string":case "function":g[b]=d;break;case "object":case "undefined":var k=h.get(d);g[b]=k!==l?k:a(d,f,h)}});return g}function b(a,b){if(a instanceof Array)for(var d=0;d<a.length;d++)b(d);else for(d in a)b(d)}function d(){var a=[],b=[];this.save=function(d,g){var i=
r.a.k(a,d);0<=i?b[i]=g:(a.push(d),b.push(g))};this.get=function(d){d=r.a.k(a,d);return 0<=d?b[d]:l}}r.Pa=function(b){0==arguments.length&&c(Error("When calling ko.toJS, pass the object you want to convert."));return a(b,function(a){for(var b=0;r.V(a)&&10>b;b++)a=a();return a})};r.toJSON=function(a){a=r.Pa(a);return r.a.qa(a)}})();r.b("ko.toJS",r.Pa);r.b("ko.toJSON",r.toJSON);
r.h={q:function(a){return"OPTION"==a.tagName?a.__ko__hasDomDataOptionValue__===m?r.a.e.get(a,r.c.options.la):a.getAttribute("value"):"SELECT"==a.tagName?0<=a.selectedIndex?r.h.q(a.options[a.selectedIndex]):l:a.value},S:function(a,b){if("OPTION"==a.tagName)switch(typeof b){case "string":r.a.e.set(a,r.c.options.la,l);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=b;break;default:r.a.e.set(a,r.c.options.la,b),a.__ko__hasDomDataOptionValue__=m,a.value="number"===typeof b?
b:""}else if("SELECT"==a.tagName)for(var d=a.options.length-1;0<=d;d--){if(r.h.q(a.options[d])==b){a.selectedIndex=d;break}}else{if(b===o||b===l)b="";a.value=b}}};r.b("ko.selectExtensions",r.h);r.b("ko.selectExtensions.readValue",r.h.q);r.b("ko.selectExtensions.writeValue",r.h.S);
r.j=function(){function a(a,e){for(var d=o;a!=d;)d=a,a=a.replace(b,function(a,b){return e[b]});return a}var b=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,e=["true","false"];return{D:[],Y:function(b){var e=r.a.z(b);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var b=[],d=o,i,j=0;j<e.length;j++){var k=e.charAt(j);if(d===o)switch(k){case '"':case "'":case "/":d=j,i=k}else if(k==i&&"\\"!==e.charAt(j-1)){k=e.substring(d,j+
1);b.push(k);var n="@ko_token_"+(b.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1),j=j-(k.length-n.length),d=o}}i=d=o;for(var t=0,q=o,j=0;j<e.length;j++){k=e.charAt(j);if(d===o)switch(k){case "{":d=j;q=k;i="}";break;case "(":d=j;q=k;i=")";break;case "[":d=j,q=k,i="]"}k===q?t++:k===i&&(t--,0===t&&(k=e.substring(d,j+1),b.push(k),n="@ko_token_"+(b.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1),j-=k.length-n.length,d=o))}i=[];e=e.split(",");d=0;for(j=e.length;d<j;d++)t=e[d],q=t.indexOf(":"),
0<q&&q<t.length-1?(k=t.substring(q+1),i.push({key:a(t.substring(0,q),b),value:a(k,b)})):i.push({unknown:a(t,b)});return i},ia:function(a){for(var b="string"===typeof a?r.j.Y(a):a,g=[],a=[],i,j=0;i=b[j];j++)if(0<g.length&&g.push(","),i.key){var k;a:{k=i.key;var n=r.a.z(k);switch(n.length&&n.charAt(0)){case "'":case '"':break a;default:k="'"+n+"'"}}i=i.value;g.push(k);g.push(":");g.push(i);n=r.a.z(i);if(0<=r.a.k(e,r.a.z(n).toLowerCase())?0:n.match(d)!==o)0<a.length&&a.push(", "),a.push(k+" : function(__ko_value) { "+
i+" = __ko_value; }")}else i.unknown&&g.push(i.unknown);b=g.join("");0<a.length&&(b=b+", '_ko_property_writers' : { "+a.join("")+" } ");return b},rb:function(a,b){for(var e=0;e<a.length;e++)if(r.a.z(a[e].key)==b)return m;return p}}}();r.b("ko.jsonExpressionRewriting",r.j);r.b("ko.jsonExpressionRewriting.bindingRewriteValidators",r.j.D);r.b("ko.jsonExpressionRewriting.parseObjectLiteral",r.j.Y);r.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",r.j.ia);
(function(){function a(a){return 8==a.nodeType&&(f?a.text:a.nodeValue).match(h)}function b(a){return 8==a.nodeType&&(f?a.text:a.nodeValue).match(g)}function d(e,d){for(var f=e,g=1,h=[];f=f.nextSibling;){if(b(f)&&(g--,0===g))return h;h.push(f);a(f)&&g++}d||c(Error("Cannot find closing comment tag to match: "+e.nodeValue));return o}function e(a,b){var e=d(a,b);return e?0<e.length?e[e.length-1].nextSibling:a.nextSibling:o}var f="<\!--test--\>"===document.createComment("test").text,h=f?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,g=f?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,i={ul:m,ol:m};r.f={C:{},childNodes:function(b){return a(b)?d(b):b.childNodes},ha:function(b){if(a(b))for(var b=r.f.childNodes(b),e=0,d=b.length;e<d;e++)r.removeNode(b[e]);else r.a.U(b)},oa:function(b,e){if(a(b)){r.f.ha(b);for(var d=b.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else r.a.oa(b,e)},xb:function(b,e){a(b)?b.parentNode.insertBefore(e,b.nextSibling):b.firstChild?b.insertBefore(e,b.firstChild):b.appendChild(e)},
mb:function(b,e,d){a(b)?b.parentNode.insertBefore(e,d.nextSibling):d.nextSibling?b.insertBefore(e,d.nextSibling):b.appendChild(e)},nextSibling:function(d){return a(d)?e(d).nextSibling:d.nextSibling&&b(d.nextSibling)?l:d.nextSibling},ta:function(b){return(b=a(b))?b[1]:o},ib:function(a){if(r.f.ta(a)){var b;b=r.f.childNodes(a);for(var e=[],d=0,f=b.length;d<f;d++)r.a.A.F(b[d]),e.push(r.a.outerHTML(b[d]));b=String.prototype.concat.apply("",e);r.f.ha(a);(new r.m.I(a)).text(b)}},Fa:function(d){if(i[d.tagName.toLowerCase()]){var f=
d.firstChild;if(f){do if(1===f.nodeType){var g;g=f.firstChild;var h=o;if(g){do if(h)h.push(g);else if(a(g)){var q=e(g,m);q?g=q:h=[g]}else b(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=f.nextSibling;for(q=0;q<g.length;q++)h?d.insertBefore(g[q],h):d.appendChild(g[q])}}while(f=f.nextSibling)}}}}})();r.L=function(){};
r.a.extend(r.L.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=o;case 8:return r.f.ta(a)!=o;default:return p}},getBindings:function(a,b){var d=this.getBindingsString(a,b);return d?this.parseBindingsString(d,b):o},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return r.f.ta(a);default:return o}},parseBindingsString:function(a,b){try{var d=b.$data,e=" { "+r.j.ia(a)+" } ";return r.a.hb(e,d===o?window:
d,b)}catch(f){c(Error("Unable to parse bindings.\nMessage: "+f+";\nBindings value: "+a))}}});r.L.instance=new r.L;r.b("ko.bindingProvider",r.L);
(function(){function a(a,d){for(var h,g=d.childNodes[0];h=g;)g=r.f.nextSibling(h),b(a,h,p)}function b(b,f,h){var g=m,i=1==f.nodeType;i&&r.f.Fa(f);if(i&&h||r.L.instance.nodeHasBindings(f))g=d(f,o,b,h).Bb;i&&g&&a(b,f)}function d(a,b,d,g){function i(a){return function(){return n[a]}}function j(){return n}var k=0;r.f.ib(a);var n,t;new r.i(function(){var q=d&&d instanceof r.K?d:new r.K(r.a.d(d)),v=q.$data;g&&r.Na(a,q);if(n=("function"==typeof b?b():b)||r.L.instance.getBindings(a,q)){if(0===k){k=1;for(var s in n){var w=
r.c[s];w&&8===a.nodeType&&!r.f.C[s]&&c(Error("The binding '"+s+"' cannot be used with virtual elements"));if(w&&"function"==typeof w.init&&(w=(0,w.init)(a,i(s),j,v,q))&&w.controlsDescendantBindings)t!==l&&c(Error("Multiple bindings ("+t+" and "+s+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),t=s}k=2}if(2===k)for(s in n)(w=r.c[s])&&"function"==typeof w.update&&(0,w.update)(a,i(s),j,v,q)}},o,{disposeWhenNodeIsRemoved:a});
return{Bb:t===l}}r.c={};r.K=function(a,b){this.$data=a;b?(this.$parent=b.$data,this.$parents=(b.$parents||[]).slice(0),this.$parents.unshift(this.$parent),this.$root=b.$root):(this.$parents=[],this.$root=a)};r.K.prototype.createChildContext=function(a){return new r.K(a,this)};r.Na=function(a,b){if(2==arguments.length)r.a.e.set(a,"__ko_bindingContext__",b);else return r.a.e.get(a,"__ko_bindingContext__")};r.xa=function(a,b,h){1===a.nodeType&&r.f.Fa(a);return d(a,b,h,m)};r.Ta=function(b,d){1===d.nodeType&&
a(b,d)};r.wa=function(a,d){d&&1!==d.nodeType&&8!==d.nodeType&&c(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));d=d||window.document.body;b(a,d,m)};r.ea=function(a){switch(a.nodeType){case 1:case 8:var b=r.Na(a);if(b)return b;if(a.parentNode)return r.ea(a.parentNode)}};r.$a=function(a){return(a=r.ea(a))?a.$data:l};r.b("ko.bindingHandlers",r.c);r.b("ko.applyBindings",r.wa);r.b("ko.applyBindingsToDescendants",r.Ta);r.b("ko.applyBindingsToNode",
r.xa);r.b("ko.contextFor",r.ea);r.b("ko.dataFor",r.$a)})();r.a.n(["click"],function(a){r.c[a]={init:function(b,d,e,f){return r.c.event.init.call(this,b,function(){var b={};b[a]=d();return b},e,f)}}});
r.c.event={init:function(a,b,d,e){var f=b()||{},h;for(h in f)(function(){var f=h;"string"==typeof f&&r.a.s(a,f,function(a){var h,k=b()[f];if(k){var n=d();try{var t=r.a.X(arguments);t.unshift(e);h=k.apply(e,t)}finally{if(h!==m)a.preventDefault?a.preventDefault():a.returnValue=p}if(n[f+"Bubble"]===p)a.cancelBubble=m,a.stopPropagation&&a.stopPropagation()}})})()}};
r.c.submit={init:function(a,b,d,e){"function"!=typeof b()&&c(Error("The value for a submit binding must be a function"));r.a.s(a,"submit",function(d){var h,g=b();try{h=g.call(e,a)}finally{if(h!==m)d.preventDefault?d.preventDefault():d.returnValue=p}})}};r.c.visible={update:function(a,b){var d=r.a.d(b()),e="none"!=a.style.display;if(d&&!e)a.style.display="";else if(!d&&e)a.style.display="none"}};
r.c.enable={update:function(a,b){var d=r.a.d(b());if(d&&a.disabled)a.removeAttribute("disabled");else if(!d&&!a.disabled)a.disabled=m}};r.c.disable={update:function(a,b){r.c.enable.update(a,function(){return!r.a.d(b())})}};function D(a,b,d){d&&b!==r.h.q(a)&&r.h.S(a,b);b!==r.h.q(a)&&r.a.sa(a,"change")}
r.c.value={init:function(a,b,d){var e=["change"],f=d().valueUpdate;f&&("string"==typeof f&&(f=[f]),r.a.J(e,f),e=r.a.ya(e));r.a.n(e,function(e){var f=p;r.a.Cb(e,"after")&&(f=m,e=e.substring(5));var i=f?function(a){setTimeout(a,0)}:function(a){a()};r.a.s(a,e,function(){i(function(){var e=b(),f=r.h.q(a);r.P(e)?e(f):(e=d(),e._ko_property_writers&&e._ko_property_writers.value&&e._ko_property_writers.value(f))})})})},update:function(a,b){var d=r.a.d(b()),e=r.h.q(a),f=d!=e;0===d&&0!==e&&"0"!==e&&(f=m);f&&
(e=function(){r.h.S(a,d)},e(),"SELECT"==a.tagName&&setTimeout(e,0));"SELECT"==a.tagName&&0<a.length&&D(a,d,p)}};
r.c.options={update:function(a,b,d){"SELECT"!=a.tagName&&c(Error("options binding applies only to SELECT elements"));var e=0==a.length,f=r.a.ba(r.a.aa(a.childNodes,function(a){return a.tagName&&"OPTION"==a.tagName&&a.selected}),function(a){return r.h.q(a)||a.innerText||a.textContent}),h=a.scrollTop;a.scrollTop=0;for(var g=r.a.d(b());0<a.length;)r.F(a.options[0]),a.remove(0);if(g){d=d();"number"!=typeof g.length&&(g=[g]);if(d.optionsCaption){var i=document.createElement("OPTION");r.a.Z(i,d.optionsCaption);
r.h.S(i,l);a.appendChild(i)}for(var b=0,j=g.length;b<j;b++){var i=document.createElement("OPTION"),k="string"==typeof d.optionsValue?g[b][d.optionsValue]:g[b],k=r.a.d(k);r.h.S(i,k);var n=d.optionsText,k="function"==typeof n?n(g[b]):"string"==typeof n?g[b][n]:k;if(k===o||k===l)k="";r.a.Ma(i,k);a.appendChild(i)}g=a.getElementsByTagName("OPTION");b=i=0;for(j=g.length;b<j;b++)0<=r.a.k(f,r.h.q(g[b]))&&(r.a.La(g[b],m),i++);if(h)a.scrollTop=h;e&&"value"in d&&D(a,r.a.d(d.value),m)}}};r.c.options.la="__ko.optionValueDomData__";
r.c.selectedOptions={Da:function(a){for(var b=[],a=a.childNodes,d=0,e=a.length;d<e;d++){var f=a[d];"OPTION"==f.tagName&&f.selected&&b.push(r.h.q(f))}return b},init:function(a,b,d){r.a.s(a,"change",function(){var a=b();r.P(a)?a(r.c.selectedOptions.Da(this)):(a=d(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(r.c.selectedOptions.Da(this)))})},update:function(a,b){"SELECT"!=a.tagName&&c(Error("values binding applies only to SELECT elements"));var d=r.a.d(b());if(d&&
"number"==typeof d.length)for(var e=a.childNodes,f=0,h=e.length;f<h;f++){var g=e[f];"OPTION"==g.tagName&&r.a.La(g,0<=r.a.k(d,r.h.q(g)))}}};r.c.text={update:function(a,b){r.a.Ma(a,b())}};r.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,b){var d=r.a.d(b());r.a.Z(a,d)}};r.c.css={update:function(a,b){var d=r.a.d(b()||{}),e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);r.a.Qa(a,e,f)}}};
r.c.style={update:function(a,b){var d=r.a.d(b()||{}),e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);a.style[e]=f||""}}};r.c.uniqueName={init:function(a,b){if(b())a.name="ko_unique_"+ ++r.c.uniqueName.Za,(r.a.ob||r.a.pb)&&a.mergeAttributes(document.createElement("<input name='"+a.name+"'/>"),p)}};r.c.uniqueName.Za=0;
r.c.checked={init:function(a,b,d){r.a.s(a,"click",function(){var e;if("checkbox"==a.type)e=a.checked;else if("radio"==a.type&&a.checked)e=a.value;else return;var f=b();"checkbox"==a.type&&r.a.d(f)instanceof Array?(e=r.a.k(r.a.d(f),a.value),a.checked&&0>e?f.push(a.value):!a.checked&&0<=e&&f.splice(e,1)):r.P(f)?f()!==e&&f(e):(f=d(),f._ko_property_writers&&f._ko_property_writers.checked&&f._ko_property_writers.checked(e))});"radio"==a.type&&!a.name&&r.c.uniqueName.init(a,function(){return m})},update:function(a,
b){var d=r.a.d(b());if("checkbox"==a.type)a.checked=d instanceof Array?0<=r.a.k(d,a.value):d;else if("radio"==a.type)a.checked=a.value==d}};r.c.attr={update:function(a,b){var d=r.a.d(b())||{},e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);f===p||f===o||f===l?a.removeAttribute(e):a.setAttribute(e,f.toString())}}};
r.c.hasfocus={init:function(a,b,d){function e(a){var e=b();a!=r.a.d(e)&&(r.P(e)?e(a):(e=d(),e._ko_property_writers&&e._ko_property_writers.hasfocus&&e._ko_property_writers.hasfocus(a)))}r.a.s(a,"focus",function(){e(m)});r.a.s(a,"focusin",function(){e(m)});r.a.s(a,"blur",function(){e(p)});r.a.s(a,"focusout",function(){e(p)})},update:function(a,b){var d=r.a.d(b());d?a.focus():a.blur();r.a.sa(a,d?"focusin":"focusout")}};
r.c["with"]={o:function(a){return function(){var b=a();return{"if":b,data:b,templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c["with"].o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c["with"].o(b),d,e,f)}};r.j.D["with"]=p;r.f.C["with"]=m;r.c["if"]={o:function(a){return function(){return{"if":a(),templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c["if"].o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c["if"].o(b),d,e,f)}};
r.j.D["if"]=p;r.f.C["if"]=m;r.c.ifnot={o:function(a){return function(){return{ifnot:a(),templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c.ifnot.o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c.ifnot.o(b),d,e,f)}};r.j.D.ifnot=p;r.f.C.ifnot=m;
r.c.foreach={o:function(a){return function(){var b=r.a.d(a());return!b||"number"==typeof b.length?{foreach:b,templateEngine:r.p.M}:{foreach:b.data,includeDestroyed:b.includeDestroyed,afterAdd:b.afterAdd,beforeRemove:b.beforeRemove,afterRender:b.afterRender,templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c.foreach.o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c.foreach.o(b),d,e,f)}};r.j.D.foreach=p;r.f.C.foreach=m;r.b("ko.allowedVirtualElementBindings",r.f.C);
r.t=function(){};r.t.prototype.renderTemplateSource=function(){c("Override renderTemplateSource")};r.t.prototype.createJavaScriptEvaluatorBlock=function(){c("Override createJavaScriptEvaluatorBlock")};r.t.prototype.makeTemplateSource=function(a){if("string"==typeof a){var b=document.getElementById(a);b||c(Error("Cannot find template with ID "+a));return new r.m.g(b)}if(1==a.nodeType||8==a.nodeType)return new r.m.I(a);c(Error("Unknown template type: "+a))};
r.t.prototype.renderTemplate=function(a,b,d){return this.renderTemplateSource(this.makeTemplateSource(a),b,d)};r.t.prototype.isTemplateRewritten=function(a){return this.allowTemplateRewriting===p?m:this.W&&this.W[a]?m:this.makeTemplateSource(a).data("isRewritten")};r.t.prototype.rewriteTemplate=function(a,b){var d=this.makeTemplateSource(a),e=b(d.text());d.text(e);d.data("isRewritten",m);if("string"==typeof a)this.W=this.W||{},this.W[a]=m};r.b("ko.templateEngine",r.t);
r.$=function(){function a(a,b,d){for(var a=r.j.Y(a),g=r.j.D,i=0;i<a.length;i++){var j=a[i].key;if(g.hasOwnProperty(j)){var k=g[j];"function"===typeof k?(j=k(a[i].value))&&c(Error(j)):k||c(Error("This template engine does not support the '"+j+"' binding within its templates"))}}a="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+r.j.ia(a)+" } })()         })";return d.createJavaScriptEvaluatorBlock(a)+b}var b=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{gb:function(a,b){b.isTemplateRewritten(a)||b.rewriteTemplate(a,function(a){return r.$.ub(a,b)})},ub:function(e,f){return e.replace(b,function(b,e,d,j,k,n,t){return a(t,e,f)}).replace(d,function(b,e){return a(e,"<\!-- ko --\>",f)})},Ua:function(a){return r.r.ka(function(b,d){b.nextSibling&&r.xa(b.nextSibling,a,d)})}}}();r.b("ko.templateRewriting",r.$);r.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",r.$.Ua);r.m={};r.m.g=function(a){this.g=a};
r.m.g.prototype.text=function(){if(0==arguments.length)return"script"==this.g.tagName.toLowerCase()?this.g.text:this.g.innerHTML;var a=arguments[0];"script"==this.g.tagName.toLowerCase()?this.g.text=a:r.a.Z(this.g,a)};r.m.g.prototype.data=function(a){if(1===arguments.length)return r.a.e.get(this.g,"templateSourceData_"+a);r.a.e.set(this.g,"templateSourceData_"+a,arguments[1])};r.m.I=function(a){this.g=a};r.m.I.prototype=new r.m.g;
r.m.I.prototype.text=function(){if(0==arguments.length)return r.a.e.get(this.g,"__ko_anon_template__");r.a.e.set(this.g,"__ko_anon_template__",arguments[0])};r.b("ko.templateSources",r.m);r.b("ko.templateSources.domElement",r.m.g);r.b("ko.templateSources.anonymousTemplate",r.m.I);
(function(){function a(a,b,d){for(var g=0;node=a[g];g++)node.parentNode===b&&(1===node.nodeType||8===node.nodeType)&&d(node)}function b(a,b,h,g,i){var i=i||{},j=i.templateEngine||d;r.$.gb(h,j);h=j.renderTemplate(h,g,i);("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)&&c("Template engine must return an array of DOM nodes");j=p;switch(b){case "replaceChildren":r.f.oa(a,h);j=m;break;case "replaceNode":r.a.Ja(a,h);j=m;break;case "ignoreTargetNode":break;default:c(Error("Unknown renderMode: "+
b))}j&&(r.ua(h,g),i.afterRender&&i.afterRender(h,g.$data));return h}var d;r.pa=function(a){a!=l&&!(a instanceof r.t)&&c("templateEngine must inherit from ko.templateEngine");d=a};r.ua=function(b,d){var h=r.a.J([],b),g=0<b.length?b[0].parentNode:o;a(h,g,function(a){r.wa(d,a)});a(h,g,function(a){r.r.Sa(a,[d])})};r.na=function(a,f,h,g,i){h=h||{};(h.templateEngine||d)==l&&c("Set a template engine before calling renderTemplate");i=i||"replaceChildren";if(g){var j=g.nodeType?g:0<g.length?g[0]:o;return new r.i(function(){var d=
f&&f instanceof r.K?f:new r.K(r.a.d(f)),n="function"==typeof a?a(d.$data):a,d=b(g,i,n,d,h);"replaceNode"==i&&(g=d,j=g.nodeType?g:0<g.length?g[0]:o)},o,{disposeWhen:function(){return!j||!r.a.ga(j)},disposeWhenNodeIsRemoved:j&&"replaceNode"==i?j.parentNode:j})}return r.r.ka(function(b){r.na(a,f,h,b,"replaceNode")})};r.Ab=function(a,d,h,g,i){function j(a,b){var d=k(a);r.ua(b,d);h.afterRender&&h.afterRender(b,d.$data)}function k(a){return i.createChildContext(r.a.d(a))}return new r.i(function(){var i=
r.a.d(d)||[];"undefined"==typeof i.length&&(i=[i]);i=r.a.aa(i,function(a){return h.includeDestroyed||a===l||a===o||!r.a.d(a._destroy)});r.a.Ka(g,i,function(d){var f="function"==typeof a?a(d):a;return b(o,"ignoreTargetNode",f,k(d),h)},h,j)},o,{disposeWhenNodeIsRemoved:g})};r.c.template={init:function(a,b){var d=r.a.d(b());"string"!=typeof d&&!d.name&&1==a.nodeType&&((new r.m.I(a)).text(a.innerHTML),r.a.U(a));return{controlsDescendantBindings:m}},update:function(a,b,d,g,i){b=r.a.d(b());g=m;"string"==
typeof b?d=b:(d=b.name,"if"in b&&(g=g&&r.a.d(b["if"])),"ifnot"in b&&(g=g&&!r.a.d(b.ifnot)));var j=o;"object"===typeof b&&"foreach"in b?j=r.Ab(d||a,g&&b.foreach||[],b,a,i):g?(i="object"==typeof b&&"data"in b?i.createChildContext(r.a.d(b.data)):i,j=r.na(d||a,i,b,a)):r.f.ha(a);i=j;(b=r.a.e.get(a,"__ko__templateSubscriptionDomDataKey__"))&&"function"==typeof b.v&&b.v();r.a.e.set(a,"__ko__templateSubscriptionDomDataKey__",i)}};r.j.D.template=function(a){a=r.j.Y(a);return 1==a.length&&a[0].unknown?o:r.j.rb(a,
"name")?o:"This template engine does not support anonymous templates nested within its templates"};r.f.C.template=m})();r.b("ko.setTemplateEngine",r.pa);r.b("ko.renderTemplate",r.na);
r.a.N=function(a,b,d){if(d===l)return r.a.N(a,b,1)||r.a.N(a,b,10)||r.a.N(a,b,Number.MAX_VALUE);for(var a=a||[],b=b||[],e=a,f=b,h=[],g=0;g<=f.length;g++)h[g]=[];for(var g=0,i=Math.min(e.length,d);g<=i;g++)h[0][g]=g;g=1;for(i=Math.min(f.length,d);g<=i;g++)h[g][0]=g;for(var i=e.length,j,k=f.length,g=1;g<=i;g++){j=Math.max(1,g-d);for(var n=Math.min(k,g+d);j<=n;j++)h[j][g]=e[g-1]===f[j-1]?h[j-1][g-1]:Math.min(h[j-1][g]===l?Number.MAX_VALUE:h[j-1][g]+1,h[j][g-1]===l?Number.MAX_VALUE:h[j][g-1]+1)}d=a.length;
e=b.length;f=[];g=h[e][d];if(g===l)h=o;else{for(;0<d||0<e;){i=h[e][d];k=0<e?h[e-1][d]:g+1;n=0<d?h[e][d-1]:g+1;j=0<e&&0<d?h[e-1][d-1]:g+1;if(k===l||k<i-1)k=g+1;if(n===l||n<i-1)n=g+1;j<i-1&&(j=g+1);k<=n&&k<j?(f.push({status:"added",value:b[e-1]}),e--):(n<k&&n<j?f.push({status:"deleted",value:a[d-1]}):(f.push({status:"retained",value:a[d-1]}),e--),d--)}h=f.reverse()}return h};r.b("ko.utils.compareArrays",r.a.N);
(function(){function a(a){if(2<a.length){for(var b=a[0],f=a[a.length-1],h=[b];b!==f;){b=b.nextSibling;if(!b)return;h.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(h))}}function b(b,e,f,h){var g=[],b=r.i(function(){var b=e(f)||[];0<g.length&&(a(g),r.a.Ja(g,b),h&&h(f,b));g.splice(0,g.length);r.a.J(g,b)},o,{disposeWhenNodeIsRemoved:b,disposeWhen:function(){return 0==g.length||!r.a.ga(g[0])}});return{sb:g,i:b}}r.a.Ka=function(d,e,f,h,g){for(var e=e||[],h=h||{},i=r.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===
l,j=r.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],k=r.a.ba(j,function(a){return a.Va}),n=r.a.N(k,e),e=[],t=0,q=[],k=[],v=o,s=0,w=n.length;s<w;s++)switch(n[s].status){case "retained":var x=j[t];e.push(x);0<x.O.length&&(v=x.O[x.O.length-1]);t++;break;case "deleted":j[t].i.v();a(j[t].O);r.a.n(j[t].O,function(a){q.push({element:a,index:s,value:n[s].value});v=a});t++;break;case "added":var x=n[s].value,z=b(d,f,x,g),u=z.sb;e.push({Va:n[s].value,O:u,i:z.i});for(var z=0,y=u.length;z<
y;z++){var A=u[z];k.push({element:A,index:s,value:n[s].value});v==o?r.f.xb(d,A):r.f.mb(d,A,v);v=A}g&&g(x,u)}r.a.n(q,function(a){r.F(a.element)});f=p;if(!i){if(h.afterAdd)for(s=0;s<k.length;s++)h.afterAdd(k[s].element,k[s].index,k[s].value);if(h.beforeRemove){for(s=0;s<q.length;s++)h.beforeRemove(q[s].element,q[s].index,q[s].value);f=m}}f||r.a.n(q,function(a){r.removeNode(a.element)});r.a.e.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",e)}})();
r.b("ko.utils.setDomNodeChildrenFromArrayMapping",r.a.Ka);r.p=function(){this.allowTemplateRewriting=p};r.p.prototype=new r.t;r.p.prototype.renderTemplateSource=function(a){a=a.text();return r.a.ma(a)};r.p.M=new r.p;r.pa(r.p.M);r.b("ko.nativeTemplateEngine",r.p);
(function(){r.ja=function(){var a=this.qb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(d,e,f){f=f||{};2>a&&c(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var h=d.data("precompiled");h||(h=d.text()||"",h=jQuery.template(o,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),d.data("precompiled",h));
d=[e.$data];e=jQuery.extend({koBindingContext:e},f.templateOptions);e=jQuery.tmpl(h,d,e);e.appendTo(document.createElement("div"));jQuery.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};if(0<a)jQuery.tmpl.tag.ko_code={open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "}};r.ja.prototype=new r.t;
var a=new r.ja;0<a.qb&&r.pa(a);r.b("ko.jqueryTmplTemplateEngine",r.ja)})();
})(window);                  
﻿var iadb = (function (ns, ko, window) {


	var en;
	var vocabulary = {
		en: en = {
			selectCountry: 'Select Country',
			projects: 'Projects',
			sectors: 'Sectors',
			sector: 'Sector',
			priorities: 'Themes',
			priority: 'Theme',
			results: 'Results',
			dataLayers: 'Data Layers',
			back: 'Back',
			map: 'Map',
			projectGallery: 'Project Gallery',
			share: 'Share',
			partners: 'Partners',
			project: 'Project',
			projectN: 'Project #',
			projectName: 'Project Name',
			selectAll: 'Select All',
			whatsShown: 'What\'s Shown',
			legend: 'Legend',
			noLayersSelected: 'There are no layers selected',
			pressEsc: 'Press esc to close',
			projectNumber: 'Project number',
			photos: 'Photos',
			projectInfo: 'Project info',
			readMore: 'Read more',
			readLess: 'Read less',
			showingResults1: 'Showing',
			showingResults2: 'of',
			showingResults3: 'results',
			mediaNotAvaliable: 'Photos and videos are not available',
			showProjectInfo: 'Show project information',
			shotRelatedOutputs: 'Show related outputs',
			loading: 'Loading',
			videos: 'Videos',
			documents: 'Documents',
			news: 'News',
			noProjectsFound: 'There are no projects with the criteria specified',
			countries: 'Country',
			HA: 'Haiti',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivia',
			UR: 'Uruguay',
			selectProject: 'Select a project in this location',
			CC: 'Environmental Sustainability',
			sAG: 'Agriculture and Rural Development',
			sAS: 'Water and Sanitation',
			sDU: 'Urban Development and Housing',
			sED: 'Education',
			sEN: 'Energy',
			sFM: 'Financial Markets',
			sIN: 'Industry',
			sIS: 'Social Investment',
			sOT: 'Other',
			sPA: 'Environment and Natural Disasters',
			sPS: 'Private Firms and SME Development',
			sRI: 'Regional Integration',
			sRM: 'Reform/Modernization of the State',
			sSA: 'Health',
			sST: 'Science and Technology',
			sTD: 'Trade',
			sTR: 'Transport',
			sTU: 'Sustainable Tourism'
		},
		es: propotyped({
			selectCountry: 'Seleccione el país',
			projects: 'Proyectos',
			sectors: 'Sectores',
			sector: 'Sector',
			priorities: 'Temas',
			priority: 'Tema',
			results: 'Resultados',
			dataLayers: 'Capas de datos',
			back: 'Volver',
			map: 'Mapa',
			projectGallery: 'Galería de Proyectos',
			share: 'Compartir',
			partners: 'Socios',
			project: 'Proyecto',
			projectN: 'Núm. del Proyecto',
			projectName: 'Nombre del proyecto',
			selectAll: 'Seleccionar todos',
			whatsShown: 'Lo que se muestra',
			legend: 'Leyenda',
			noLayersSelected: 'No hay capas seleccionadas',
			pressEsc: 'Presione ESC para cerrar',
			projectNumber: 'Número del proyecto',
			photos: 'Fotos',
			projectInfo: 'Información del Proyecto',
			readMore: 'Lea más',
			readLess: 'Lea menos',
			showingResults1: 'Mostrando',
			showingResults2: 'de',
			showingResults3: 'resultados',
			mediaNotAvaliable: 'Fotos y videos no disponibles',
			showProjectInfo: 'Muestra información del proyecto',
			shotRelatedOutputs: 'Muestra resultados relacionados',
			loading: 'Cargando, por favor espere',
			videos: 'Videos',
			documents: 'Documentos',
			news: 'Noticias',
			noProjectsFound: 'No hay proyectos con los criterios especificados',
			countries: 'Países',
			HA: 'Haití',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivia',
			UR: 'Uruguay',
			selectProject: 'Seleccione un proyecto en esta ubicación',
			CC: 'Sostenibilidad Ambiental',
			sAG: 'Agricultura Y Desarrollo Rural',
			sAS: 'Agua Y Saneamiento',
			sDU: 'Desarrollo Urbano Y Vivienda',
			sED: 'Educación',
			sEN: 'Energía',
			sFM: 'Mercados Financieros',
			sIN: 'Industria',
			sIS: 'Inversión Social',
			sOT: 'Otros',
			sPA: 'Medio Ambiente Y Desastres Naturales',
			sPS: 'Empresas Priv Y Desarrollo De Pyme',
			sRI: 'Integración Regional',
			sRM: 'Reforma/Modernización Del Estado',
			sSA: 'Salud',
			sST: 'Ciencia Y Tecnología',
			sTD: 'Comercio',
			sTR: 'Transporte',
			sTU: 'Turismo Sostenible'
		}, en),
		fr: propotyped({
			selectCountry: 'Choisir le pays',
			projects: 'Projets',
			sectors: 'Secteurs',
			sector: 'Secteur',
			priorities: 'Thèmes',
			priority: 'Thème',
			results: 'Résultats',
			dataLayers: 'Couches de données',
			back: 'Retour',
			map: 'Carte',
			projectGallery: 'Galerie de projets',
			share: 'Partager',
			partners: 'Partenaires',
			project: 'Projet',
			projectN: 'No. du projet',
			projectName: 'Nom du projet',
			selectAll: 'Sélectionner tout',
			whatsShown: 'Ce qui est affiché',
			legend: 'Légende',
			noLayersSelected: 'Il n\'ya pas de couches sélectionnées',
			pressEsc: 'Appuyez sur Échap',
			projectNumber: 'Numéro de projet',
			photos: 'Photos',
			projectInfo: 'Informations sur le projet',
			readMore: 'Lire plus',
			readLess: 'Lire moins',
			showingResults1: 'Affichage',
			showingResults2: 'de',
			showingResults3: 'résultats',
			mediaNotAvaliable: 'Photos et vidéos ne sont pas disponibles',
			showProjectInfo: 'Affiche des informations de projet',
			shotRelatedOutputs: 'Afficher les résultats liés',
			loading: 'Chargement, s\'il vous plaît attendre',
			videos: 'Vídeos',
			documents: 'Documents',
			news: 'Nouvelles',
			noProjectsFound: 'Il n\'y a pas de projets avec les critères spécifiés',
			countries: 'Pays',
			HA: 'Haïti',
			GY: 'Guyana',
			NI: 'Nicaragua',
			HO: 'Honduras',
			PA: 'Paraguay',
			BO: 'Bolivie',
			UR: 'Uruguay',
			selectProject: 'Selecione um projeto neste local',
			CC: 'Durabilité Environnementale',
			sAG: 'Agriculture et Développement Rural',
			sAS: 'Eau et Assainissement',
			sDU: 'Développement Urbain et Logement',
			sED: 'Éducation',
			sEN: 'Énergie',
			sFM: 'Marchés Financiers',
			sIN: 'Industrie',
			sIS: 'Investissement Social',
			sOT: 'Autres',
			sPA: 'Environnement Et Catastrophes Naturelles',
			sPS: 'Entreprises Privées et Développement Des PME',
			sRI: 'Intégration Régionale',
			sRM: 'Réforme/Modernisation de l\'État',
			sSA: 'Santé',
			sST: 'Science et Technologie',
			sTD: 'Commerce',
			sTR: 'Transport',
			sTU: 'Développement Durable'
		}, en),
		pt: propotyped({
			selectCountry: 'Selecione um país',
			projects: 'Projetos',
			sectors: 'Setores',
			sector: 'Setor',
			priorities: 'Temas',
			priority: 'Tema',
			results: 'Resultados',
			dataLayers: 'Camada de dados',
			back: 'Voltar',
			map: 'Mapa',
			projectGallery: 'Galeria de projetos',
			share: 'Compartilhar',
			partners: 'Parceiros',
			project: 'Projeto',
			projectN: 'Núm. de Projeto',
			projectName: 'Nome do projeto',
			selectAll: 'selecione Todos os',
			whatsShown: 'O que é mostrado',
			legend: 'Lenda',
			noLayersSelected: 'Não há camadas selecionadas',
			pressEsc: 'Pressione Esc para fechar',
			projectNumber: 'Número do projeto',
			photos: 'Fotos',
			projectInfo: 'Informações do Projeto',
			readMore: 'Leia mais',
			readLess: 'Leia menos',
			showingResults1: 'Mostrando',
			showingResults2: 'de',
			showingResults3: 'resultados',
			mediaNotAvaliable: 'Fotos e vídeos não estão disponíveis',
			showProjectInfo: 'Exibe informações sobre o projeto',
			shotRelatedOutputs: 'Mostrar resultados relacionados',
			loading: 'Carregando, por favor aguarde',
			videos: 'Vidéos',
			documents: 'Documentos',
			news: 'Notícia',
			noProjectsFound: 'Não há projetos com os critérios especificados',
			countries: 'Países',
			HA: 'Haiti',
			GY: 'Guiana',
			NI: 'Nicarágua',
			HO: 'Honduras',
			PA: 'Paraguai',
			BO: 'Bolívia',
			UR: 'Uruguai',
			selectProject: 'Sélectionnez un projet dans ce lieu',
			CC: 'Sustentabilidade Ambiental',
			sAG: 'Agricultura E Desenvolvimento Rural',
			sAS: 'Água E Saneamento',
			sDU: 'Desenvolvimento Urbano E Moradia',
			sED: 'Educação',
			sEN: 'Energia',
			sFM: 'Mercados Financeiros',
			sIN: 'Indústria',
			sIS: 'Investimento Social',
			sOT: 'Outros',
			sPA: 'Meio Ambiente E Desastres Naturais',
			sPS: 'Empresas Privadas E Desenvolvimento Das PME',
			sRI: 'Integração Regional',
			sRM: 'Reforma/Modernização Do Estado',
			sSA: 'Saúde',
			sST: 'Ciência E Tecnologia',
			sTD: 'Comércio',
			sTR: 'Transporte',
			sTU: 'Turismo Sustentável'
		}, en)
	};

	ns.getCurrentLanguage = function () {
		var hash = window.location.hash || '';
		var match = hash.match(/#\/iadb\/(en|es|fr|pt)/);
		if (match && match[1])
			return match[1];
		return 'en';
	};

	ns.getCurrentCountry = function () {
		var hash = window.location.hash || '';
		var match = hash.match(/#\/iadb\/(en|es|fr|pt)\/(.*?)\//);
		var countryName = "haiti";
		if (match && match[2])
			countryName = match[2];
		var currentCountry = ko.utils.arrayFirst(ns['Country'].countries, function (value) {
			return (value.name.toLowerCase() == countryName.toLowerCase())
		});
		return currentCountry;
	};

	ns.write = function (lang, key) {
		var text = lang[key];
		document.write(text());
	}

	function propotyped(values, prototype) {
		var fn = function () {
			for (var key in values) {
				if (values.hasOwnProperty(key)) {
					this[key] = values[key];
				}
			}
		};
		fn.prototype = prototype;
		return new fn();
	}


	ns['Lang'] = function (defaultLanguage) {
		defaultLanguage = defaultLanguage || 'en';
		this.language = ko.observable(defaultLanguage);
		for (var key in vocabulary.en) {
			if (!vocabulary.en.hasOwnProperty(key)) continue;
			this[key] = ko.dependentObservable(function () { return vocabulary[this.language()][key]; }, this);
		}
	};

	ns['Lang'].prototype = {
		dispose: function () {
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					var something = this[key];
					if (something && something.dispose) {
						something.dispose();
					}
					this[key] = null;
					delete this[key];
				}
			}
		}
	};

	ns.getProjectGalleryLink = function () {
		var country = ns.getCurrentCountry();
		var language = ns.getCurrentLanguage();
		return "http://www.iadb.org/mapamericas/projectgallery/?country=" + country.abbr + "&lang=" + language;
	};

	ns.getPartnersLink = function () {
		var language = ns.getCurrentLanguage();
		return "http://www.iadb.org/mapamericas/partners/?lang=" + language;
	};

	ns.getShareLink = function () {
		var country = ns.getCurrentCountry();
		var language = ns.getCurrentLanguage();
		var hash = window.location.hash;
		if (hash != null && hash.length) {
			hash = hash.substr(1);
			return "http://www.iadb.org/" + language + "/mapamericas/" + country.name + "/?projectID=" + hash;
		} else {
			return "http://www.iadb.org/" + language + "/mapamericas/" + country.name + "/";
		}
	};

	ns['Country'] = {
		countries: [
        { "name": "Haiti", abbr: "HA", maps: { "en": 37, "es": 81, "pt": 83, "fr": 82} },
        { "name": "Bolivia", abbr: "BO", maps: { "en": 103, "es": 104, "pt": 116, "fr": 115} },
        { "name": "Guyana", abbr: "GY", maps: { "en": 102, "es": 101, "pt": 123, "fr": 119} },
        { "name": "Honduras", abbr: "HO", maps: { "en": 100, "es": 99, "pt": 125, "fr": 124} },
        { "name": "Nicaragua", abbr: "NI", maps: { "en": 98, "es": 97, "pt": 127, "fr": 126} },
        { "name": "Uruguay", abbr: "UR", maps: { "en": 131, "es": 132, "pt": 134, "fr": 133} }
        ],
		getMapId: function () {
			var currentCountryName = ns.getCurrentCountry().name.toLowerCase();
			var currentCountry = ko.utils.arrayFirst(ns['Country'].countries, function (value) {
				return (value.name.toLowerCase() == currentCountryName)
			});
			if (currentCountry) {
				return currentCountry.maps[iadb.getCurrentLanguage()];
			}
			return 37;
		}
	}
	return ns;
} (iadb || {}, ko, window));﻿/*--------------------------------------------------------------------------
* linq.js - LINQ for JavaScript
* ver 2.2.0.2 (Jan. 21th, 2011)
*
* created and maintained by neuecc <ils@neue.cc>
* licensed under Microsoft Public License(Ms-PL)
* http://neue.cc/
* http://linqjs.codeplex.com/
*--------------------------------------------------------------------------*/

(function (window) {
	var Enumerable = function (getEnumerator) {
		this.GetEnumerator = getEnumerator;
	}
	window['Enumerable'] = Enumerable;

	// Generator

	Enumerable.Choice = function () // variable argument
	{
		var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

		return new Enumerable(function () {
			return new IEnumerator(
                Functions.Blank,
                function () {
                	return this.Yield(args[Math.floor(Math.random() * args.length)]);
                },
                Functions.Blank);
		});
	}

	Enumerable.Cycle = function () // variable argument
	{
		var args = (arguments[0] instanceof Array) ? arguments[0] : arguments;

		return new Enumerable(function () {
			var index = 0;
			return new IEnumerator(
                Functions.Blank,
                function () {
                	if (index >= args.length) index = 0;
                	return this.Yield(args[index++]);
                },
                Functions.Blank);
		});
	}

	Enumerable.Empty = function () {
		return new Enumerable(function () {
			return new IEnumerator(
                Functions.Blank,
                function () { return false; },
                Functions.Blank);
		});
	}

	Enumerable.From = function (obj) {
		if (obj == null) {
			return Enumerable.Empty();
		}
		if (obj instanceof Enumerable) {
			return obj;
		}
		if (typeof obj == Types.Number || typeof obj == Types.Boolean) {
			return Enumerable.Repeat(obj, 1);
		}
		if (typeof obj == Types.String) {
			return new Enumerable(function () {
				var index = 0;
				return new IEnumerator(
                    Functions.Blank,
                    function () {
                    	return (index < obj.length) ? this.Yield(obj.charAt(index++)) : false;
                    },
                    Functions.Blank);
			});
		}
		if (typeof obj != Types.Function) {
			// array or array like object
			if (typeof obj.length == Types.Number) {
				return new ArrayEnumerable(obj);
			}

			// JScript's IEnumerable
			if (!(obj instanceof Object) && Utils.IsIEnumerable(obj)) {
				return new Enumerable(function () {
					var isFirst = true;
					var enumerator;
					return new IEnumerator(
                        function () { enumerator = new Enumerator(obj); },
                        function () {
                        	if (isFirst) isFirst = false;
                        	else enumerator.moveNext();

                        	return (enumerator.atEnd()) ? false : this.Yield(enumerator.item());
                        },
                        Functions.Blank);
				});
			}
		}

		// case function/object : Create KeyValuePair[]
		return new Enumerable(function () {
			var array = [];
			var index = 0;

			return new IEnumerator(
                function () {
                	for (var key in obj) {
                		if (!(obj[key] instanceof Function)) {
                			array.push({ Key: key, Value: obj[key] });
                		}
                	}
                },
                function () {
                	return (index < array.length)
                        ? this.Yield(array[index++])
                        : false;
                },
                Functions.Blank);
		});
	},

    Enumerable.Return = function (element) {
    	return Enumerable.Repeat(element, 1);
    }

	// Overload:function(input, pattern)
	// Overload:function(input, pattern, flags)
	Enumerable.Matches = function (input, pattern, flags) {
		if (flags == null) flags = "";
		if (pattern instanceof RegExp) {
			flags += (pattern.ignoreCase) ? "i" : "";
			flags += (pattern.multiline) ? "m" : "";
			pattern = pattern.source;
		}
		if (flags.indexOf("g") === -1) flags += "g";

		return new Enumerable(function () {
			var regex;
			return new IEnumerator(
                function () { regex = new RegExp(pattern, flags) },
                function () {
                	var match = regex.exec(input);
                	return (match) ? this.Yield(match) : false;
                },
                Functions.Blank);
		});
	}

	// Overload:function(start, count)
	// Overload:function(start, count, step)
	Enumerable.Range = function (start, count, step) {
		if (step == null) step = 1;
		return Enumerable.ToInfinity(start, step).Take(count);
	}

	// Overload:function(start, count)
	// Overload:function(start, count, step)
	Enumerable.RangeDown = function (start, count, step) {
		if (step == null) step = 1;
		return Enumerable.ToNegativeInfinity(start, step).Take(count);
	}

	// Overload:function(start, to)
	// Overload:function(start, to, step)
	Enumerable.RangeTo = function (start, to, step) {
		if (step == null) step = 1;
		return (start < to)
            ? Enumerable.ToInfinity(start, step).TakeWhile(function (i) { return i <= to; })
            : Enumerable.ToNegativeInfinity(start, step).TakeWhile(function (i) { return i >= to; })
	}

	// Overload:function(obj)
	// Overload:function(obj, num)
	Enumerable.Repeat = function (obj, num) {
		if (num != null) return Enumerable.Repeat(obj).Take(num);

		return new Enumerable(function () {
			return new IEnumerator(
                Functions.Blank,
                function () { return this.Yield(obj); },
                Functions.Blank);
		});
	}

	Enumerable.RepeatWithFinalize = function (initializer, finalizer) {
		initializer = Utils.CreateLambda(initializer);
		finalizer = Utils.CreateLambda(finalizer);

		return new Enumerable(function () {
			var element;
			return new IEnumerator(
                function () { element = initializer(); },
                function () { return this.Yield(element); },
                function () {
                	if (element != null) {
                		finalizer(element);
                		element = null;
                	}
                });
		});
	}

	// Overload:function(func)
	// Overload:function(func, count)
	Enumerable.Generate = function (func, count) {
		if (count != null) return Enumerable.Generate(func).Take(count);
		func = Utils.CreateLambda(func);

		return new Enumerable(function () {
			return new IEnumerator(
                Functions.Blank,
                function () { return this.Yield(func()); },
                Functions.Blank);
		});
	}

	// Overload:function()
	// Overload:function(start)
	// Overload:function(start, step)
	Enumerable.ToInfinity = function (start, step) {
		if (start == null) start = 0;
		if (step == null) step = 1;

		return new Enumerable(function () {
			var value;
			return new IEnumerator(
                function () { value = start - step },
                function () { return this.Yield(value += step); },
                Functions.Blank);
		});
	}

	// Overload:function()
	// Overload:function(start)
	// Overload:function(start, step)
	Enumerable.ToNegativeInfinity = function (start, step) {
		if (start == null) start = 0;
		if (step == null) step = 1;

		return new Enumerable(function () {
			var value;
			return new IEnumerator(
                function () { value = start + step },
                function () { return this.Yield(value -= step); },
                Functions.Blank);
		});
	}

	Enumerable.Unfold = function (seed, func) {
		func = Utils.CreateLambda(func);

		return new Enumerable(function () {
			var isFirst = true;
			var value;
			return new IEnumerator(
                Functions.Blank,
                function () {
                	if (isFirst) {
                		isFirst = false;
                		value = seed;
                		return this.Yield(value);
                	}
                	value = func(value);
                	return this.Yield(value);
                },
                Functions.Blank);
		});
	}

	// Extension Methods

	Enumerable.prototype =
    {
    	/* Projection and Filtering Methods */

    	// Overload:function(func)
    	// Overload:function(func, resultSelector<element>)
    	// Overload:function(func, resultSelector<element, nestLevel>)
    	CascadeBreadthFirst: function (func, resultSelector) {
    		var source = this;
    		func = Utils.CreateLambda(func);
    		resultSelector = Utils.CreateLambda(resultSelector);

    		return new Enumerable(function () {
    			var enumerator;
    			var nestLevel = 0;
    			var buffer = [];

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (true) {
                    		if (enumerator.MoveNext()) {
                    			buffer.push(enumerator.Current());
                    			return this.Yield(resultSelector(enumerator.Current(), nestLevel));
                    		}

                    		var next = Enumerable.From(buffer).SelectMany(function (x) { return func(x); });
                    		if (!next.Any()) {
                    			return false;
                    		}
                    		else {
                    			nestLevel++;
                    			buffer = [];
                    			Utils.Dispose(enumerator);
                    			enumerator = next.GetEnumerator();
                    		}
                    	}
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	// Overload:function(func)
    	// Overload:function(func, resultSelector<element>)
    	// Overload:function(func, resultSelector<element, nestLevel>)
    	CascadeDepthFirst: function (func, resultSelector) {
    		var source = this;
    		func = Utils.CreateLambda(func);
    		resultSelector = Utils.CreateLambda(resultSelector);

    		return new Enumerable(function () {
    			var enumeratorStack = [];
    			var enumerator;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (true) {
                    		if (enumerator.MoveNext()) {
                    			var value = resultSelector(enumerator.Current(), enumeratorStack.length);
                    			enumeratorStack.push(enumerator);
                    			enumerator = Enumerable.From(func(enumerator.Current())).GetEnumerator();
                    			return this.Yield(value);
                    		}

                    		if (enumeratorStack.length <= 0) return false;
                    		Utils.Dispose(enumerator);
                    		enumerator = enumeratorStack.pop();
                    	}
                    },
                    function () {
                    	try { Utils.Dispose(enumerator); }
                    	finally { Enumerable.From(enumeratorStack).ForEach(function (s) { s.Dispose(); }) }
                    });
    		});
    	},

    	Flatten: function () {
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var middleEnumerator = null;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (true) {
                    		if (middleEnumerator != null) {
                    			if (middleEnumerator.MoveNext()) {
                    				return this.Yield(middleEnumerator.Current());
                    			}
                    			else {
                    				middleEnumerator = null;
                    			}
                    		}

                    		if (enumerator.MoveNext()) {
                    			if (enumerator.Current() instanceof Array) {
                    				Utils.Dispose(middleEnumerator);
                    				middleEnumerator = Enumerable.From(enumerator.Current())
                                        .SelectMany(Functions.Identity)
                                        .Flatten()
                                        .GetEnumerator();
                    				continue;
                    			}
                    			else {
                    				return this.Yield(enumerator.Current());
                    			}
                    		}

                    		return false;
                    	}
                    },
                    function () {
                    	try { Utils.Dispose(enumerator); }
                    	finally { Utils.Dispose(middleEnumerator); }
                    });
    		});
    	},

    	Pairwise: function (selector) {
    		var source = this;
    		selector = Utils.CreateLambda(selector);

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();
                    	enumerator.MoveNext();
                    },
                    function () {
                    	var prev = enumerator.Current();
                    	return (enumerator.MoveNext())
                            ? this.Yield(selector(prev, enumerator.Current()))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	// Overload:function(func)
    	// Overload:function(seed,func<value,element>)
    	// Overload:function(seed,func<value,element>,resultSelector)
    	Scan: function (seed, func, resultSelector) {
    		if (resultSelector != null) return this.Scan(seed, func).Select(resultSelector);

    		var isUseSeed;
    		if (func == null) {
    			func = Utils.CreateLambda(seed); // arguments[0]
    			isUseSeed = false;
    		}
    		else {
    			func = Utils.CreateLambda(func);
    			isUseSeed = true;
    		}
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var value;
    			var isFirst = true;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	if (isFirst) {
                    		isFirst = false;
                    		if (!isUseSeed) {
                    			if (enumerator.MoveNext()) {
                    				return this.Yield(value = enumerator.Current());
                    			}
                    		}
                    		else {
                    			return this.Yield(value = seed);
                    		}
                    	}

                    	return (enumerator.MoveNext())
                            ? this.Yield(value = func(value, enumerator.Current()))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	// Overload:function(selector<element>)
    	// Overload:function(selector<element,index>)
    	Select: function (selector) {
    		var source = this;
    		selector = Utils.CreateLambda(selector);

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	return (enumerator.MoveNext())
                            ? this.Yield(selector(enumerator.Current(), index++))
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function(collectionSelector<element>)
    	// Overload:function(collectionSelector<element,index>)
    	// Overload:function(collectionSelector<element>,resultSelector)
    	// Overload:function(collectionSelector<element,index>,resultSelector)
    	SelectMany: function (collectionSelector, resultSelector) {
    		var source = this;
    		collectionSelector = Utils.CreateLambda(collectionSelector);
    		if (resultSelector == null) resultSelector = function (a, b) { return b; }
    		resultSelector = Utils.CreateLambda(resultSelector);

    		return new Enumerable(function () {
    			var enumerator;
    			var middleEnumerator = undefined;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	if (middleEnumerator === undefined) {
                    		if (!enumerator.MoveNext()) return false;
                    	}
                    	do {
                    		if (middleEnumerator == null) {
                    			var middleSeq = collectionSelector(enumerator.Current(), index++);
                    			middleEnumerator = Enumerable.From(middleSeq).GetEnumerator();
                    		}
                    		if (middleEnumerator.MoveNext()) {
                    			return this.Yield(resultSelector(enumerator.Current(), middleEnumerator.Current()));
                    		}
                    		Utils.Dispose(middleEnumerator);
                    		middleEnumerator = null;
                    	} while (enumerator.MoveNext())
                    	return false;
                    },
                    function () {
                    	try { Utils.Dispose(enumerator); }
                    	finally { Utils.Dispose(middleEnumerator); }
                    })
    		});
    	},

    	// Overload:function(predicate<element>)
    	// Overload:function(predicate<element,index>)
    	Where: function (predicate) {
    		predicate = Utils.CreateLambda(predicate);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (enumerator.MoveNext()) {
                    		if (predicate(enumerator.Current(), index++)) {
                    			return this.Yield(enumerator.Current());
                    		}
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	OfType: function (type) {
    		var typeName;
    		switch (type) {
    			case Number: typeName = Types.Number; break;
    			case String: typeName = Types.String; break;
    			case Boolean: typeName = Types.Boolean; break;
    			case Function: typeName = Types.Function; break;
    			default: typeName = null; break;
    		}
    		return (typeName === null)
                ? this.Where(function (x) { return x instanceof type })
                : this.Where(function (x) { return typeof x === typeName });
    	},

    	// Overload:function(second,selector<outer,inner>)
    	// Overload:function(second,selector<outer,inner,index>)
    	Zip: function (second, selector) {
    		selector = Utils.CreateLambda(selector);
    		var source = this;

    		return new Enumerable(function () {
    			var firstEnumerator;
    			var secondEnumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () {
                    	firstEnumerator = source.GetEnumerator();
                    	secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function () {
                    	if (firstEnumerator.MoveNext() && secondEnumerator.MoveNext()) {
                    		return this.Yield(selector(firstEnumerator.Current(), secondEnumerator.Current(), index++));
                    	}
                    	return false;
                    },
                    function () {
                    	try { Utils.Dispose(firstEnumerator); }
                    	finally { Utils.Dispose(secondEnumerator); }
                    })
    		});
    	},

    	/* Join Methods */

    	// Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    	// Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    	Join: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
    		outerKeySelector = Utils.CreateLambda(outerKeySelector);
    		innerKeySelector = Utils.CreateLambda(innerKeySelector);
    		resultSelector = Utils.CreateLambda(resultSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var source = this;

    		return new Enumerable(function () {
    			var outerEnumerator;
    			var lookup;
    			var innerElements = null;
    			var innerCount = 0;

    			return new IEnumerator(
                    function () {
                    	outerEnumerator = source.GetEnumerator();
                    	lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function () {
                    	while (true) {
                    		if (innerElements != null) {
                    			var innerElement = innerElements[innerCount++];
                    			if (innerElement !== undefined) {
                    				return this.Yield(resultSelector(outerEnumerator.Current(), innerElement));
                    			}

                    			innerElement = null;
                    			innerCount = 0;
                    		}

                    		if (outerEnumerator.MoveNext()) {
                    			var key = outerKeySelector(outerEnumerator.Current());
                    			innerElements = lookup.Get(key).ToArray();
                    		}
                    		else {
                    			return false;
                    		}
                    	}
                    },
                    function () { Utils.Dispose(outerEnumerator); })
    		});
    	},

    	// Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector)
    	// Overload:function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector)
    	GroupJoin: function (inner, outerKeySelector, innerKeySelector, resultSelector, compareSelector) {
    		outerKeySelector = Utils.CreateLambda(outerKeySelector);
    		innerKeySelector = Utils.CreateLambda(innerKeySelector);
    		resultSelector = Utils.CreateLambda(resultSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator = source.GetEnumerator();
    			var lookup = null;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();
                    	lookup = Enumerable.From(inner).ToLookup(innerKeySelector, Functions.Identity, compareSelector);
                    },
                    function () {
                    	if (enumerator.MoveNext()) {
                    		var innerElement = lookup.Get(outerKeySelector(enumerator.Current()));
                    		return this.Yield(resultSelector(enumerator.Current(), innerElement));
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	/* Set Methods */

    	All: function (predicate) {
    		predicate = Utils.CreateLambda(predicate);

    		var result = true;
    		this.ForEach(function (x) {
    			if (!predicate(x)) {
    				result = false;
    				return false; // break
    			}
    		});
    		return result;
    	},

    	// Overload:function()
    	// Overload:function(predicate)
    	Any: function (predicate) {
    		predicate = Utils.CreateLambda(predicate);

    		var enumerator = this.GetEnumerator();
    		try {
    			if (arguments.length == 0) return enumerator.MoveNext(); // case:function()

    			while (enumerator.MoveNext()) // case:function(predicate)
    			{
    				if (predicate(enumerator.Current())) return true;
    			}
    			return false;
    		}
    		finally { Utils.Dispose(enumerator); }
    	},

    	Concat: function (second) {
    		var source = this;

    		return new Enumerable(function () {
    			var firstEnumerator;
    			var secondEnumerator;

    			return new IEnumerator(
                    function () { firstEnumerator = source.GetEnumerator(); },
                    function () {
                    	if (secondEnumerator == null) {
                    		if (firstEnumerator.MoveNext()) return this.Yield(firstEnumerator.Current());
                    		secondEnumerator = Enumerable.From(second).GetEnumerator();
                    	}
                    	if (secondEnumerator.MoveNext()) return this.Yield(secondEnumerator.Current());
                    	return false;
                    },
                    function () {
                    	try { Utils.Dispose(firstEnumerator); }
                    	finally { Utils.Dispose(secondEnumerator); }
                    })
    		});
    	},

    	Insert: function (index, second) {
    		var source = this;

    		return new Enumerable(function () {
    			var firstEnumerator;
    			var secondEnumerator;
    			var count = 0;
    			var isEnumerated = false;

    			return new IEnumerator(
                    function () {
                    	firstEnumerator = source.GetEnumerator();
                    	secondEnumerator = Enumerable.From(second).GetEnumerator();
                    },
                    function () {
                    	if (count == index && secondEnumerator.MoveNext()) {
                    		isEnumerated = true;
                    		return this.Yield(secondEnumerator.Current());
                    	}
                    	if (firstEnumerator.MoveNext()) {
                    		count++;
                    		return this.Yield(firstEnumerator.Current());
                    	}
                    	if (!isEnumerated && secondEnumerator.MoveNext()) {
                    		return this.Yield(secondEnumerator.Current());
                    	}
                    	return false;
                    },
                    function () {
                    	try { Utils.Dispose(firstEnumerator); }
                    	finally { Utils.Dispose(secondEnumerator); }
                    })
    		});
    	},

    	Alternate: function (value) {
    		value = Enumerable.Return(value);
    		return this.SelectMany(function (elem) {
    			return Enumerable.Return(elem).Concat(value);
    		}).TakeExceptLast();
    	},

    	// Overload:function(value)
    	// Overload:function(value, compareSelector)
    	Contains: function (value, compareSelector) {
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var enumerator = this.GetEnumerator();
    		try {
    			while (enumerator.MoveNext()) {
    				if (compareSelector(enumerator.Current()) === value) return true;
    			}
    			return false;
    		}
    		finally { Utils.Dispose(enumerator) }
    	},

    	DefaultIfEmpty: function (defaultValue) {
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var isFirst = true;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	if (enumerator.MoveNext()) {
                    		isFirst = false;
                    		return this.Yield(enumerator.Current());
                    	}
                    	else if (isFirst) {
                    		isFirst = false;
                    		return this.Yield(defaultValue);
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function()
    	// Overload:function(compareSelector)
    	Distinct: function (compareSelector) {
    		return this.Except(Enumerable.Empty(), compareSelector);
    	},

    	// Overload:function(second)
    	// Overload:function(second, compareSelector)
    	Except: function (second, compareSelector) {
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var keys;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();
                    	keys = new Dictionary(compareSelector);
                    	Enumerable.From(second).ForEach(function (key) { keys.Add(key); });
                    },
                    function () {
                    	while (enumerator.MoveNext()) {
                    		var current = enumerator.Current();
                    		if (!keys.Contains(current)) {
                    			keys.Add(current);
                    			return this.Yield(current);
                    		}
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function(second)
    	// Overload:function(second, compareSelector)
    	Intersect: function (second, compareSelector) {
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var keys;
    			var outs;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();

                    	keys = new Dictionary(compareSelector);
                    	Enumerable.From(second).ForEach(function (key) { keys.Add(key); });
                    	outs = new Dictionary(compareSelector);
                    },
                    function () {
                    	while (enumerator.MoveNext()) {
                    		var current = enumerator.Current();
                    		if (!outs.Contains(current) && keys.Contains(current)) {
                    			outs.Add(current);
                    			return this.Yield(current);
                    		}
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function(second)
    	// Overload:function(second, compareSelector)
    	SequenceEqual: function (second, compareSelector) {
    		compareSelector = Utils.CreateLambda(compareSelector);

    		var firstEnumerator = this.GetEnumerator();
    		try {
    			var secondEnumerator = Enumerable.From(second).GetEnumerator();
    			try {
    				while (firstEnumerator.MoveNext()) {
    					if (!secondEnumerator.MoveNext()
                            || compareSelector(firstEnumerator.Current()) !== compareSelector(secondEnumerator.Current())) {
    						return false;
    					}
    				}

    				if (secondEnumerator.MoveNext()) return false;
    				return true;
    			}
    			finally { Utils.Dispose(secondEnumerator); }
    		}
    		finally { Utils.Dispose(firstEnumerator); }
    	},

    	Union: function (second, compareSelector) {
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var source = this;

    		return new Enumerable(function () {
    			var firstEnumerator;
    			var secondEnumerator;
    			var keys;

    			return new IEnumerator(
                    function () {
                    	firstEnumerator = source.GetEnumerator();
                    	keys = new Dictionary(compareSelector);
                    },
                    function () {
                    	var current;
                    	if (secondEnumerator === undefined) {
                    		while (firstEnumerator.MoveNext()) {
                    			current = firstEnumerator.Current();
                    			if (!keys.Contains(current)) {
                    				keys.Add(current);
                    				return this.Yield(current);
                    			}
                    		}
                    		secondEnumerator = Enumerable.From(second).GetEnumerator();
                    	}
                    	while (secondEnumerator.MoveNext()) {
                    		current = secondEnumerator.Current();
                    		if (!keys.Contains(current)) {
                    			keys.Add(current);
                    			return this.Yield(current);
                    		}
                    	}
                    	return false;
                    },
                    function () {
                    	try { Utils.Dispose(firstEnumerator); }
                    	finally { Utils.Dispose(secondEnumerator); }
                    })
    		});
    	},

    	/* Ordering Methods */

    	OrderBy: function (keySelector) {
    		return new OrderedEnumerable(this, keySelector, false);
    	},

    	OrderByDescending: function (keySelector) {
    		return new OrderedEnumerable(this, keySelector, true);
    	},

    	Reverse: function () {
    		var source = this;

    		return new Enumerable(function () {
    			var buffer;
    			var index;

    			return new IEnumerator(
                    function () {
                    	buffer = source.ToArray();
                    	index = buffer.length;
                    },
                    function () {
                    	return (index > 0)
                            ? this.Yield(buffer[--index])
                            : false;
                    },
                    Functions.Blank)
    		});
    	},

    	Shuffle: function () {
    		var source = this;

    		return new Enumerable(function () {
    			var buffer;

    			return new IEnumerator(
                    function () { buffer = source.ToArray(); },
                    function () {
                    	if (buffer.length > 0) {
                    		var i = Math.floor(Math.random() * buffer.length);
                    		return this.Yield(buffer.splice(i, 1)[0]);
                    	}
                    	return false;
                    },
                    Functions.Blank)
    		});
    	},

    	/* Grouping Methods */

    	// Overload:function(keySelector)
    	// Overload:function(keySelector,elementSelector)
    	// Overload:function(keySelector,elementSelector,resultSelector)
    	// Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    	GroupBy: function (keySelector, elementSelector, resultSelector, compareSelector) {
    		var source = this;
    		keySelector = Utils.CreateLambda(keySelector);
    		elementSelector = Utils.CreateLambda(elementSelector);
    		if (resultSelector != null) resultSelector = Utils.CreateLambda(resultSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.ToLookup(keySelector, elementSelector, compareSelector)
                            .ToEnumerable()
                            .GetEnumerator();
                    },
                    function () {
                    	while (enumerator.MoveNext()) {
                    		return (resultSelector == null)
                                ? this.Yield(enumerator.Current())
                                : this.Yield(resultSelector(enumerator.Current().Key(), enumerator.Current()));
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function(keySelector)
    	// Overload:function(keySelector,elementSelector)
    	// Overload:function(keySelector,elementSelector,resultSelector)
    	// Overload:function(keySelector,elementSelector,resultSelector,compareSelector)
    	PartitionBy: function (keySelector, elementSelector, resultSelector, compareSelector) {

    		var source = this;
    		keySelector = Utils.CreateLambda(keySelector);
    		elementSelector = Utils.CreateLambda(elementSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);
    		var hasResultSelector;
    		if (resultSelector == null) {
    			hasResultSelector = false;
    			resultSelector = function (key, group) { return new Grouping(key, group) }
    		}
    		else {
    			hasResultSelector = true;
    			resultSelector = Utils.CreateLambda(resultSelector);
    		}

    		return new Enumerable(function () {
    			var enumerator;
    			var key;
    			var compareKey;
    			var group = [];

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();
                    	if (enumerator.MoveNext()) {
                    		key = keySelector(enumerator.Current());
                    		compareKey = compareSelector(key);
                    		group.push(elementSelector(enumerator.Current()));
                    	}
                    },
                    function () {
                    	var hasNext;
                    	while ((hasNext = enumerator.MoveNext()) == true) {
                    		if (compareKey === compareSelector(keySelector(enumerator.Current()))) {
                    			group.push(elementSelector(enumerator.Current()));
                    		}
                    		else break;
                    	}

                    	if (group.length > 0) {
                    		var result = (hasResultSelector)
                                ? resultSelector(key, Enumerable.From(group))
                                : resultSelector(key, group);
                    		if (hasNext) {
                    			key = keySelector(enumerator.Current());
                    			compareKey = compareSelector(key);
                    			group = [elementSelector(enumerator.Current())];
                    		}
                    		else group = [];

                    		return this.Yield(result);
                    	}

                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	BufferWithCount: function (count) {
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                function () { enumerator = source.GetEnumerator(); },
                function () {
                	var array = [];
                	var index = 0;
                	while (enumerator.MoveNext()) {
                		array.push(enumerator.Current());
                		if (++index >= count) return this.Yield(array);
                	}
                	if (array.length > 0) return this.Yield(array);
                	return false;
                },
                function () { Utils.Dispose(enumerator); })
    		});
    	},

    	/* Aggregate Methods */

    	// Overload:function(func)
    	// Overload:function(seed,func)
    	// Overload:function(seed,func,resultSelector)
    	Aggregate: function (seed, func, resultSelector) {
    		return this.Scan(seed, func, resultSelector).Last();
    	},

    	// Overload:function()
    	// Overload:function(selector)
    	Average: function (selector) {
    		selector = Utils.CreateLambda(selector);

    		var sum = 0;
    		var count = 0;
    		this.ForEach(function (x) {
    			sum += selector(x);
    			++count;
    		});

    		return sum / count;
    	},

    	// Overload:function()
    	// Overload:function(predicate)
    	Count: function (predicate) {
    		predicate = (predicate == null) ? Functions.True : Utils.CreateLambda(predicate);

    		var count = 0;
    		this.ForEach(function (x, i) {
    			if (predicate(x, i)) ++count;
    		});
    		return count;
    	},

    	// Overload:function()
    	// Overload:function(selector)
    	Max: function (selector) {
    		if (selector == null) selector = Functions.Identity;
    		return this.Select(selector).Aggregate(function (a, b) { return (a > b) ? a : b; });
    	},

    	// Overload:function()
    	// Overload:function(selector)
    	Min: function (selector) {
    		if (selector == null) selector = Functions.Identity;
    		return this.Select(selector).Aggregate(function (a, b) { return (a < b) ? a : b; });
    	},

    	MaxBy: function (keySelector) {
    		keySelector = Utils.CreateLambda(keySelector);
    		return this.Aggregate(function (a, b) { return (keySelector(a) > keySelector(b)) ? a : b });
    	},

    	MinBy: function (keySelector) {
    		keySelector = Utils.CreateLambda(keySelector);
    		return this.Aggregate(function (a, b) { return (keySelector(a) < keySelector(b)) ? a : b });
    	},

    	// Overload:function()
    	// Overload:function(selector)
    	Sum: function (selector) {
    		if (selector == null) selector = Functions.Identity;
    		return this.Select(selector).Aggregate(0, function (a, b) { return a + b; });
    	},

    	/* Paging Methods */

    	ElementAt: function (index) {
    		var value;
    		var found = false;
    		this.ForEach(function (x, i) {
    			if (i == index) {
    				value = x;
    				found = true;
    				return false;
    			}
    		});

    		if (!found) throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");
    		return value;
    	},

    	ElementAtOrDefault: function (index, defaultValue) {
    		var value;
    		var found = false;
    		this.ForEach(function (x, i) {
    			if (i == index) {
    				value = x;
    				found = true;
    				return false;
    			}
    		});

    		return (!found) ? defaultValue : value;
    	},

    	// Overload:function()
    	// Overload:function(predicate)
    	First: function (predicate) {
    		if (predicate != null) return this.Where(predicate).First();

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			value = x;
    			found = true;
    			return false;
    		});

    		if (!found) throw new Error("First:No element satisfies the condition.");
    		return value;
    	},

    	// Overload:function(defaultValue)
    	// Overload:function(defaultValue,predicate)
    	FirstOrDefault: function (defaultValue, predicate) {
    		if (predicate != null) return this.Where(predicate).FirstOrDefault(defaultValue);

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			value = x;
    			found = true;
    			return false;
    		});
    		return (!found) ? defaultValue : value;
    	},

    	// Overload:function()
    	// Overload:function(predicate)
    	Last: function (predicate) {
    		if (predicate != null) return this.Where(predicate).Last();

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			found = true;
    			value = x;
    		});

    		if (!found) throw new Error("Last:No element satisfies the condition.");
    		return value;
    	},

    	// Overload:function(defaultValue)
    	// Overload:function(defaultValue,predicate)
    	LastOrDefault: function (defaultValue, predicate) {
    		if (predicate != null) return this.Where(predicate).LastOrDefault(defaultValue);

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			found = true;
    			value = x;
    		});
    		return (!found) ? defaultValue : value;
    	},

    	// Overload:function()
    	// Overload:function(predicate)
    	Single: function (predicate) {
    		if (predicate != null) return this.Where(predicate).Single();

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			if (!found) {
    				found = true;
    				value = x;
    			}
    			else throw new Error("Single:sequence contains more than one element.");
    		});

    		if (!found) throw new Error("Single:No element satisfies the condition.");
    		return value;
    	},

    	// Overload:function(defaultValue)
    	// Overload:function(defaultValue,predicate)
    	SingleOrDefault: function (defaultValue, predicate) {
    		if (predicate != null) return this.Where(predicate).SingleOrDefault(defaultValue);

    		var value;
    		var found = false;
    		this.ForEach(function (x) {
    			if (!found) {
    				found = true;
    				value = x;
    			}
    			else throw new Error("Single:sequence contains more than one element.");
    		});

    		return (!found) ? defaultValue : value;
    	},

    	Skip: function (count) {
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () {
                    	enumerator = source.GetEnumerator();
                    	while (index++ < count && enumerator.MoveNext()) { };
                    },
                    function () {
                    	return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	// Overload:function(predicate<element>)
    	// Overload:function(predicate<element,index>)
    	SkipWhile: function (predicate) {
    		predicate = Utils.CreateLambda(predicate);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;
    			var isSkipEnd = false;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (!isSkipEnd) {
                    		if (enumerator.MoveNext()) {
                    			if (!predicate(enumerator.Current(), index++)) {
                    				isSkipEnd = true;
                    				return this.Yield(enumerator.Current());
                    			}
                    			continue;
                    		}
                    		else return false;
                    	}

                    	return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;

                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	Take: function (count) {
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	return (index++ < count && enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); }
                )
    		});
    	},

    	// Overload:function(predicate<element>)
    	// Overload:function(predicate<element,index>)
    	TakeWhile: function (predicate) {
    		predicate = Utils.CreateLambda(predicate);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	return (enumerator.MoveNext() && predicate(enumerator.Current(), index++))
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	// Overload:function()
    	// Overload:function(count)
    	TakeExceptLast: function (count) {
    		if (count == null) count = 1;
    		var source = this;

    		return new Enumerable(function () {
    			if (count <= 0) return source.GetEnumerator(); // do nothing

    			var enumerator;
    			var q = [];

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	while (enumerator.MoveNext()) {
                    		if (q.length == count) {
                    			q.push(enumerator.Current());
                    			return this.Yield(q.shift());
                    		}
                    		q.push(enumerator.Current());
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	TakeFromLast: function (count) {
    		if (count <= 0 || count == null) return Enumerable.Empty();
    		var source = this;

    		return new Enumerable(function () {
    			var sourceEnumerator;
    			var enumerator;
    			var q = [];

    			return new IEnumerator(
                    function () { sourceEnumerator = source.GetEnumerator(); },
                    function () {
                    	while (sourceEnumerator.MoveNext()) {
                    		if (q.length == count) q.shift()
                    		q.push(sourceEnumerator.Current());
                    	}
                    	if (enumerator == null) {
                    		enumerator = Enumerable.From(q).GetEnumerator();
                    	}
                    	return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	IndexOf: function (item) {
    		var found = null;
    		this.ForEach(function (x, i) {
    			if (x === item) {
    				found = i;
    				return true;
    			}
    		});

    		return (found !== null) ? found : -1;
    	},

    	LastIndexOf: function (item) {
    		var result = -1;
    		this.ForEach(function (x, i) {
    			if (x === item) result = i;
    		});

    		return result;
    	},

    	/* Convert Methods */

    	ToArray: function () {
    		var array = [];
    		this.ForEach(function (x) {
    			array.push(x || null);
    		});
    		return array;
    	},

    	// Overload:function(keySelector)
    	// Overload:function(keySelector, elementSelector)
    	// Overload:function(keySelector, elementSelector, compareSelector)
    	ToLookup: function (keySelector, elementSelector, compareSelector) {
    		keySelector = Utils.CreateLambda(keySelector);
    		elementSelector = Utils.CreateLambda(elementSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);

    		var dict = new Dictionary(compareSelector);
    		this.ForEach(function (x) {
    			var key = keySelector(x);
    			var element = elementSelector(x);

    			var array = dict.Get(key);
    			if (array !== undefined) array.push(element);
    			else dict.Add(key, [element]);
    		});
    		return new Lookup(dict);
    	},

    	ToObject: function (keySelector, elementSelector) {
    		keySelector = Utils.CreateLambda(keySelector);
    		elementSelector = Utils.CreateLambda(elementSelector);

    		var obj = {};
    		this.ForEach(function (x) {
    			obj[keySelector(x)] = elementSelector(x);
    		});
    		return obj;
    	},

    	// Overload:function(keySelector, elementSelector)
    	// Overload:function(keySelector, elementSelector, compareSelector)
    	ToDictionary: function (keySelector, elementSelector, compareSelector) {
    		keySelector = Utils.CreateLambda(keySelector);
    		elementSelector = Utils.CreateLambda(elementSelector);
    		compareSelector = Utils.CreateLambda(compareSelector);

    		var dict = new Dictionary(compareSelector);
    		this.ForEach(function (x) {
    			dict.Add(keySelector(x), elementSelector(x));
    		});
    		return dict;
    	},

    	// Overload:function()
    	// Overload:function(replacer)
    	// Overload:function(replacer, space)
    	ToJSON: function (replacer, space) {
    		return JSON.stringify(this.ToArray(), replacer, space);
    	},

    	// Overload:function()
    	// Overload:function(separator)
    	// Overload:function(separator,selector)
    	ToString: function (separator, selector) {
    		if (separator == null) separator = "";
    		if (selector == null) selector = Functions.Identity;

    		return this.Select(selector).ToArray().join(separator);
    	},


    	/* Action Methods */

    	// Overload:function(action<element>)
    	// Overload:function(action<element,index>)
    	Do: function (action) {
    		var source = this;
    		action = Utils.CreateLambda(action);

    		return new Enumerable(function () {
    			var enumerator;
    			var index = 0;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	if (enumerator.MoveNext()) {
                    		action(enumerator.Current(), index++);
                    		return this.Yield(enumerator.Current());
                    	}
                    	return false;
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	// Overload:function(action<element>)
    	// Overload:function(action<element,index>)
    	// Overload:function(func<element,bool>)
    	// Overload:function(func<element,index,bool>)
    	ForEach: function (action) {
    		action = Utils.CreateLambda(action);

    		var index = 0;
    		var enumerator = this.GetEnumerator();
    		try {
    			while (enumerator.MoveNext()) {
    				if (action(enumerator.Current(), index++) === false) break;
    			}
    		}
    		finally { Utils.Dispose(enumerator); }
    	},

    	// Overload:function()
    	// Overload:function(separator)
    	// Overload:function(separator,selector)
    	Write: function (separator, selector) {
    		if (separator == null) separator = "";
    		selector = Utils.CreateLambda(selector);

    		var isFirst = true;
    		this.ForEach(function (item) {
    			if (isFirst) isFirst = false;
    			else document.write(separator);
    			document.write(selector(item));
    		});
    	},

    	// Overload:function()
    	// Overload:function(selector)
    	WriteLine: function (selector) {
    		selector = Utils.CreateLambda(selector);

    		this.ForEach(function (item) {
    			document.write(selector(item));
    			document.write("<br />");
    		});
    	},

    	Force: function () {
    		var enumerator = this.GetEnumerator();

    		try { while (enumerator.MoveNext()) { } }
    		finally { Utils.Dispose(enumerator); }
    	},

    	/* Functional Methods */

    	Let: function (func) {
    		func = Utils.CreateLambda(func);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                    function () {
                    	enumerator = Enumerable.From(func(source)).GetEnumerator();
                    },
                    function () {
                    	return (enumerator.MoveNext())
                            ? this.Yield(enumerator.Current())
                            : false;
                    },
                    function () { Utils.Dispose(enumerator); })
    		});
    	},

    	Share: function () {
    		var source = this;
    		var sharedEnumerator;

    		return new Enumerable(function () {
    			return new IEnumerator(
                    function () {
                    	if (sharedEnumerator == null) {
                    		sharedEnumerator = source.GetEnumerator();
                    	}
                    },
                    function () {
                    	return (sharedEnumerator.MoveNext())
                            ? this.Yield(sharedEnumerator.Current())
                            : false;
                    },
                    Functions.Blank
                )
    		});
    	},

    	MemoizeAll: function () {
    		var source = this;
    		var cache;
    		var enumerator;

    		return new Enumerable(function () {
    			var index = -1;

    			return new IEnumerator(
                    function () {
                    	if (enumerator == null) {
                    		enumerator = source.GetEnumerator();
                    		cache = [];
                    	}
                    },
                    function () {
                    	index++;
                    	if (cache.length <= index) {
                    		return (enumerator.MoveNext())
                                ? this.Yield(cache[index] = enumerator.Current())
                                : false;
                    	}

                    	return this.Yield(cache[index]);
                    },
                    Functions.Blank
                )
    		});
    	},

    	/* Error Handling Methods */

    	Catch: function (handler) {
    		handler = Utils.CreateLambda(handler);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	try {
                    		return (enumerator.MoveNext())
                               ? this.Yield(enumerator.Current())
                               : false;
                    	}
                    	catch (e) {
                    		handler(e);
                    		return false;
                    	}
                    },
                    function () { Utils.Dispose(enumerator); });
    		});
    	},

    	Finally: function (finallyAction) {
    		finallyAction = Utils.CreateLambda(finallyAction);
    		var source = this;

    		return new Enumerable(function () {
    			var enumerator;

    			return new IEnumerator(
                    function () { enumerator = source.GetEnumerator(); },
                    function () {
                    	return (enumerator.MoveNext())
                           ? this.Yield(enumerator.Current())
                           : false;
                    },
                    function () {
                    	try { Utils.Dispose(enumerator); }
                    	finally { finallyAction(); }
                    });
    		});
    	},

    	/* For Debug Methods */

    	// Overload:function()
    	// Overload:function(message)
    	// Overload:function(message,selector)
    	Trace: function (message, selector) {
    		if (message == null) message = "Trace";
    		selector = Utils.CreateLambda(selector);

    		return this.Do(function (item) {
    			console.log(message, ":", selector(item));
    		});
    	}
    }

	// private

	// static functions
	var Functions =
    {
    	Identity: function (x) { return x; },
    	True: function () { return true; },
    	Blank: function () { }
    }

	// static const
	var Types =
    {
    	Boolean: typeof true,
    	Number: typeof 0,
    	String: typeof "",
    	Object: typeof {},
    	Undefined: typeof undefined,
    	Function: typeof function () { }
    }

	// static utility methods
	var Utils =
    {
    	// Create anonymous function from lambda expression string
    	CreateLambda: function (expression) {
    		if (expression == null) return Functions.Identity;
    		if (typeof expression == Types.String) {
    			if (expression == "") {
    				return Functions.Identity;
    			}
    			else if (expression.indexOf("=>") == -1) {
    				return new Function("$,$$,$$$,$$$$", "return " + expression);
    			}
    			else {
    				var expr = expression.match(/^[(\s]*([^()]*?)[)\s]*=>(.*)/);
    				return new Function(expr[1], "return " + expr[2]);
    			}
    		}
    		return expression;
    	},

    	IsIEnumerable: function (obj) {
    		if (typeof Enumerator != Types.Undefined) {
    			try {
    				new Enumerator(obj);
    				return true;
    			}
    			catch (e) { }
    		}
    		return false;
    	},

    	Compare: function (a, b) {
    		return (a === b) ? 0
                : (a > b) ? 1
                : -1;
    	},

    	Dispose: function (obj) {
    		if (obj != null) obj.Dispose();
    	}
    }

	// IEnumerator State
	var State = { Before: 0, Running: 1, After: 2 }

	// name "Enumerator" is conflict JScript's "Enumerator"
	var IEnumerator = function (initialize, tryGetNext, dispose) {
		var yielder = new Yielder();
		var state = State.Before;

		this.Current = yielder.Current;
		this.MoveNext = function () {
			try {
				switch (state) {
					case State.Before:
						state = State.Running;
						initialize(); // fall through
					case State.Running:
						if (tryGetNext.apply(yielder)) {
							return true;
						}
						else {
							this.Dispose();
							return false;
						}
					case State.After:
						return false;
				}
			}
			catch (e) {
				this.Dispose();
				throw e;
			}
		}
		this.Dispose = function () {
			if (state != State.Running) return;

			try { dispose(); }
			finally { state = State.After; }
		}
	}

	// for tryGetNext
	var Yielder = function () {
		var current = null;
		this.Current = function () { return current; }
		this.Yield = function (value) {
			current = value;
			return true;
		}
	}

	// for OrderBy/ThenBy

	var OrderedEnumerable = function (source, keySelector, descending, parent) {
		this.source = source;
		this.keySelector = Utils.CreateLambda(keySelector);
		this.descending = descending;
		this.parent = parent;
	}
	OrderedEnumerable.prototype = new Enumerable();

	OrderedEnumerable.prototype.CreateOrderedEnumerable = function (keySelector, descending) {
		return new OrderedEnumerable(this.source, keySelector, descending, this);
	}

	OrderedEnumerable.prototype.ThenBy = function (keySelector) {
		return this.CreateOrderedEnumerable(keySelector, false);
	}

	OrderedEnumerable.prototype.ThenByDescending = function (keySelector) {
		return this.CreateOrderedEnumerable(keySelector, true);
	}

	OrderedEnumerable.prototype.GetEnumerator = function () {
		var self = this;
		var buffer;
		var indexes;
		var index = 0;

		return new IEnumerator(
            function () {
            	buffer = [];
            	indexes = [];
            	self.source.ForEach(function (item, index) {
            		buffer.push(item);
            		indexes.push(index);
            	});
            	var sortContext = SortContext.Create(self, null);
            	sortContext.GenerateKeys(buffer);

            	indexes.sort(function (a, b) { return sortContext.Compare(a, b); });
            },
            function () {
            	return (index < indexes.length)
                    ? this.Yield(buffer[indexes[index++]])
                    : false;
            },
            Functions.Blank
        )
	}

	var SortContext = function (keySelector, descending, child) {
		this.keySelector = keySelector;
		this.descending = descending;
		this.child = child;
		this.keys = null;
	}

	SortContext.Create = function (orderedEnumerable, currentContext) {
		var context = new SortContext(orderedEnumerable.keySelector, orderedEnumerable.descending, currentContext);
		if (orderedEnumerable.parent != null) return SortContext.Create(orderedEnumerable.parent, context);
		return context;
	}

	SortContext.prototype.GenerateKeys = function (source) {
		var len = source.length;
		var keySelector = this.keySelector;
		var keys = new Array(len);
		for (var i = 0; i < len; i++) keys[i] = keySelector(source[i]);
		this.keys = keys;

		if (this.child != null) this.child.GenerateKeys(source);
	}

	SortContext.prototype.Compare = function (index1, index2) {
		var comparison = Utils.Compare(this.keys[index1], this.keys[index2]);

		if (comparison == 0) {
			if (this.child != null) return this.child.Compare(index1, index2)
			comparison = Utils.Compare(index1, index2);
		}

		return (this.descending) ? -comparison : comparison;
	}

	// optimize array or arraylike object

	var ArrayEnumerable = function (source) {
		this.source = source;
	}
	ArrayEnumerable.prototype = new Enumerable();

	ArrayEnumerable.prototype.Any = function (predicate) {
		return (predicate == null)
            ? (this.source.length > 0)
            : Enumerable.prototype.Any.apply(this, arguments);
	}

	ArrayEnumerable.prototype.Count = function (predicate) {
		return (predicate == null)
            ? this.source.length
            : Enumerable.prototype.Count.apply(this, arguments);
	}

	ArrayEnumerable.prototype.ElementAt = function (index) {
		return (0 <= index && index < this.source.length)
            ? this.source[index]
            : Enumerable.prototype.ElementAt.apply(this, arguments);
	}

	ArrayEnumerable.prototype.ElementAtOrDefault = function (index, defaultValue) {
		return (0 <= index && index < this.source.length)
            ? this.source[index]
            : defaultValue;
	}

	ArrayEnumerable.prototype.First = function (predicate) {
		return (predicate == null && this.source.length > 0)
            ? this.source[0]
            : Enumerable.prototype.First.apply(this, arguments);
	}

	ArrayEnumerable.prototype.FirstOrDefault = function (defaultValue, predicate) {
		if (predicate != null) {
			return Enumerable.prototype.FirstOrDefault.apply(this, arguments);
		}

		return this.source.length > 0 ? this.source[0] : defaultValue;
	}

	ArrayEnumerable.prototype.Last = function (predicate) {
		return (predicate == null && this.source.length > 0)
            ? this.source[this.source.length - 1]
            : Enumerable.prototype.Last.apply(this, arguments);
	}

	ArrayEnumerable.prototype.LastOrDefault = function (defaultValue, predicate) {
		if (predicate != null) {
			return Enumerable.prototype.LastOrDefault.apply(this, arguments);
		}

		return this.source.length > 0 ? this.source[this.source.length - 1] : defaultValue;
	}

	ArrayEnumerable.prototype.Skip = function (count) {
		var source = this.source;

		return new Enumerable(function () {
			var index;

			return new IEnumerator(
                function () { index = (count < 0) ? 0 : count },
                function () {
                	return (index < source.length)
                        ? this.Yield(source[index++])
                        : false;
                },
                Functions.Blank);
		});
	};

	ArrayEnumerable.prototype.TakeExceptLast = function (count) {
		if (count == null) count = 1;
		return this.Take(this.source.length - count);
	}

	ArrayEnumerable.prototype.TakeFromLast = function (count) {
		return this.Skip(this.source.length - count);
	}

	ArrayEnumerable.prototype.Reverse = function () {
		var source = this.source;

		return new Enumerable(function () {
			var index;

			return new IEnumerator(
                function () {
                	index = source.length;
                },
                function () {
                	return (index > 0)
                        ? this.Yield(source[--index])
                        : false;
                },
                Functions.Blank)
		});
	}

	ArrayEnumerable.prototype.SequenceEqual = function (second, compareSelector) {
		if ((second instanceof ArrayEnumerable || second instanceof Array)
            && compareSelector == null
            && Enumerable.From(second).Count() != this.Count()) {
			return false;
		}

		return Enumerable.prototype.SequenceEqual.apply(this, arguments);
	}

	ArrayEnumerable.prototype.ToString = function (separator, selector) {
		if (selector != null || !(this.source instanceof Array)) {
			return Enumerable.prototype.ToString.apply(this, arguments);
		}

		if (separator == null) separator = "";
		return this.source.join(separator);
	}

	ArrayEnumerable.prototype.GetEnumerator = function () {
		var source = this.source;
		var index = 0;

		return new IEnumerator(
            Functions.Blank,
            function () {
            	return (index < source.length)
                    ? this.Yield(source[index++])
                    : false;
            },
            Functions.Blank);
	}

	// Collections

	var Dictionary = (function () {
		// static utility methods
		var HasOwnProperty = function (target, key) {
			return Object.prototype.hasOwnProperty.call(target, key);
		}

		var ComputeHashCode = function (obj) {
			if (obj === null) return "null";
			if (obj === undefined) return "undefined";

			return (typeof obj.toString === Types.Function)
                ? obj.toString()
                : Object.prototype.toString.call(obj);
		}

		// LinkedList for Dictionary
		var HashEntry = function (key, value) {
			this.Key = key;
			this.Value = value;
			this.Prev = null;
			this.Next = null;
		}

		var EntryList = function () {
			this.First = null;
			this.Last = null;
		}
		EntryList.prototype =
        {
        	AddLast: function (entry) {
        		if (this.Last != null) {
        			this.Last.Next = entry;
        			entry.Prev = this.Last;
        			this.Last = entry;
        		}
        		else this.First = this.Last = entry;
        	},

        	Replace: function (entry, newEntry) {
        		if (entry.Prev != null) {
        			entry.Prev.Next = newEntry;
        			newEntry.Prev = entry.Prev;
        		}
        		else this.First = newEntry;

        		if (entry.Next != null) {
        			entry.Next.Prev = newEntry;
        			newEntry.Next = entry.Next;
        		}
        		else this.Last = newEntry;

        	},

        	Remove: function (entry) {
        		if (entry.Prev != null) entry.Prev.Next = entry.Next;
        		else this.First = entry.Next;

        		if (entry.Next != null) entry.Next.Prev = entry.Prev;
        		else this.Last = entry.Prev;
        	}
        }

		// Overload:function()
		// Overload:function(compareSelector)
		var Dictionary = function (compareSelector) {
			this.count = 0;
			this.entryList = new EntryList();
			this.buckets = {}; // as Dictionary<string,List<object>>
			this.compareSelector = (compareSelector == null) ? Functions.Identity : compareSelector;
		}

		Dictionary.prototype =
        {
        	Add: function (key, value) {
        		var compareKey = this.compareSelector(key);
        		var hash = ComputeHashCode(compareKey);
        		var entry = new HashEntry(key, value);
        		if (HasOwnProperty(this.buckets, hash)) {
        			var array = this.buckets[hash];
        			for (var i = 0; i < array.length; i++) {
        				if (this.compareSelector(array[i].Key) === compareKey) {
        					this.entryList.Replace(array[i], entry);
        					array[i] = entry;
        					return;
        				}
        			}
        			array.push(entry);
        		}
        		else {
        			this.buckets[hash] = [entry];
        		}
        		this.count++;
        		this.entryList.AddLast(entry);
        	},

        	Get: function (key) {
        		var compareKey = this.compareSelector(key);
        		var hash = ComputeHashCode(compareKey);
        		if (!HasOwnProperty(this.buckets, hash)) return undefined;

        		var array = this.buckets[hash];
        		for (var i = 0; i < array.length; i++) {
        			var entry = array[i];
        			if (this.compareSelector(entry.Key) === compareKey) return entry.Value;
        		}
        		return undefined;
        	},

        	Set: function (key, value) {
        		var compareKey = this.compareSelector(key);
        		var hash = ComputeHashCode(compareKey);
        		if (HasOwnProperty(this.buckets, hash)) {
        			var array = this.buckets[hash];
        			for (var i = 0; i < array.length; i++) {
        				if (this.compareSelector(array[i].Key) === compareKey) {
        					var newEntry = new HashEntry(key, value);
        					this.entryList.Replace(array[i], newEntry);
        					array[i] = newEntry;
        					return true;
        				}
        			}
        		}
        		return false;
        	},

        	Contains: function (key) {
        		var compareKey = this.compareSelector(key);
        		var hash = ComputeHashCode(compareKey);
        		if (!HasOwnProperty(this.buckets, hash)) return false;

        		var array = this.buckets[hash];
        		for (var i = 0; i < array.length; i++) {
        			if (this.compareSelector(array[i].Key) === compareKey) return true;
        		}
        		return false;
        	},

        	Clear: function () {
        		this.count = 0;
        		this.buckets = {};
        		this.entryList = new EntryList();
        	},

        	Remove: function (key) {
        		var compareKey = this.compareSelector(key);
        		var hash = ComputeHashCode(compareKey);
        		if (!HasOwnProperty(this.buckets, hash)) return;

        		var array = this.buckets[hash];
        		for (var i = 0; i < array.length; i++) {
        			if (this.compareSelector(array[i].Key) === compareKey) {
        				this.entryList.Remove(array[i]);
        				array.splice(i, 1);
        				if (array.length == 0) delete this.buckets[hash];
        				this.count--;
        				return;
        			}
        		}
        	},

        	Count: function () {
        		return this.count;
        	},

        	ToEnumerable: function () {
        		var self = this;
        		return new Enumerable(function () {
        			var currentEntry;

        			return new IEnumerator(
                        function () { currentEntry = self.entryList.First },
                        function () {
                        	if (currentEntry != null) {
                        		var result = { Key: currentEntry.Key, Value: currentEntry.Value };
                        		currentEntry = currentEntry.Next;
                        		return this.Yield(result);
                        	}
                        	return false;
                        },
                        Functions.Blank);
        		});
        	}
        }

		return Dictionary;
	})();

	// dictionary = Dictionary<TKey, TValue[]>
	var Lookup = function (dictionary) {
		this.Count = function () {
			return dictionary.Count();
		}

		this.Get = function (key) {
			return Enumerable.From(dictionary.Get(key));
		}

		this.Contains = function (key) {
			return dictionary.Contains(key);
		}

		this.ToEnumerable = function () {
			return dictionary.ToEnumerable().Select(function (kvp) {
				return new Grouping(kvp.Key, kvp.Value);
			});
		}
	}

	var Grouping = function (key, elements) {
		this.Key = function () {
			return key;
		}

		ArrayEnumerable.call(this, elements);
	}
	Grouping.prototype = new ArrayEnumerable();

})(window);
/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global window:false, global:false*/

/**
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license <http://www.opensource.org/licenses/mit-license.php>
 * @author Miller Medeiros <http://millermedeiros.com/>
 * @version 0.6.3
 * @build 187 (07/11/2011 10:14 AM)
 **/
(function(global){
	
    /**
     * @namespace Signals Namespace - Custom event/messaging system based on AS3 Signals
     * @name signals
     */
    var signals = /** @lends signals */{
        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '0.6.3'
    };



    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name signals.SignalBinding
     * @param {signals.Signal} signal	Reference to Signal object that listener is currently bound to.
     * @param {Function} listener	Handler function bound to the signal.
     * @param {boolean} isOnce	If binding should be executed just once.
     * @param {Object} [listenerContext]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority]	The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf signals.SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type signals.Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = /** @lends signals.SignalBinding.prototype */ {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,
        
        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr]	Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce: ' + this._isOnce +', isBound: '+ this.isBound() +', active: ' + this.active + ']';
        }

    };


/*global signals:true, SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================
    
    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @author Miller Medeiros
     * @constructor
     */
    signals.Signal = function () {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
    };

    signals.Signal.prototype = {

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [scope]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, scope, priority) {

            var prevIndex = this._indexOfListener(listener),
                binding;

            if (prevIndex !== -1) { //avoid creating a new Binding for same listener if already added to list
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, scope, priority);
                this._addBinding(binding);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener) {
            var n = this._bindings.length;
            while (n--) {
                if (this._bindings[n]._listener === listener) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener	Signal handler function.
         * @param {Object} [scope]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority]	The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, scope, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, scope, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener	Signal handler function.
         * @param {Object} [scope]	Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority]	The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, scope, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, scope, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener	Handler function that should be removed.
         * @return {Function} Listener handler function.
         */
        remove : function (listener) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see signals.Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params]	Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                bindings = this._bindings.slice(), //clone array in case add/remove items during dispatch
                n = this._bindings.length;

            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active: '+ this.active +' numListeners: '+ this.getNumListeners() +']';
        }

    };



	global.signals = signals;
	
}(window || this));
