(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{347:function(e,t,a){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var i={};for(var r in t[a.util.objId(e)]=i,e)e.hasOwnProperty(r)&&(i[r]=a.util.clone(e[r],t));return i;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];i=[];return t[a.util.objId(e)]=i,e.forEach(function(e,n){i[n]=a.util.clone(e,t)}),i}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var r=(i=i||a.languages)[e];if(2==arguments.length){for(var s in n=arguments[1])n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var l={};for(var o in r)if(r.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=r[o]}return a.languages.DFS(a.languages,function(t,a){a===i[e]&&t!=e&&(this[t]=l)}),i[e]=l},DFS:function(e,t,n,i){for(var r in i=i||{},e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==a.util.type(e[r])||i[a.util.objId(e[r])]?"Array"!==a.util.type(e[r])||i[a.util.objId(e[r])]||(i[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],t,r,i)):(i[a.util.objId(e[r])]=!0,a.languages.DFS(e[r],t,null,i)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i);for(var r,s=i.elements||e.querySelectorAll(i.selector),l=0;r=s[l++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(t,i,r){for(var s,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1].toLowerCase(),l=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u={element:t,language:s,grammar:l,code:t.textContent};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(a.hooks.run("before-highlight",u),u.element.textContent=u.code,a.hooks.run("after-highlight",u)),void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),i&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,i,r,s,l){var o=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==l)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,h=!!d.lookbehind,f=!!d.greedy,m=0,y=d.alias;if(f&&!d.pattern.global){var b=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,b+"g")}d=d.pattern||d;for(var v=i,k=r;v<t.length;k+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof o)){if(f&&v!=t.length-1){if(d.lastIndex=k,!(C=d.exec(e)))break;for(var x=C.index+(h?C[1].length:0),F=C.index+C[0].length,j=v,A=k,S=t.length;j<S&&(A<F||!t[j].type&&!t[j-1].greedy);++j)x>=(A+=t[j].length)&&(++v,k=A);if(t[v]instanceof o)continue;_=j-v,w=e.slice(k,A),C.index-=k}else{d.lastIndex=0;var C=d.exec(w),_=1}if(C){h&&(m=C[1]?C[1].length:0);F=(x=C.index+m)+(C=C[0].slice(m)).length;var N=w.slice(0,x),P=w.slice(F),E=[v,_];N&&(++v,k+=N.length,E.push(N));var $=new o(u,p?a.tokenize(C,p):C,y,C,f);if(E.push($),P&&E.push(P),Array.prototype.splice.apply(t,E),1!=_&&a.matchGrammar(e,t,n,v,k,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var i=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return a.matchGrammar(e,i,t,0,0,!1),i},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(t)}}},i=a.Token=function(e,t,a,n,i){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!i};if(i.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return i.stringify(a,t,e)}).join("");var r={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}a.hooks.run("wrap",r);var l=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(l?" "+l:"")+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,r=t.code,s=t.immediateClose;n.postMessage(a.highlight(r,a.languages[i],i)),s&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();e.exports&&(e.exports=i),"undefined"!=typeof global&&(global.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.languages.css,i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css",greedy:!0}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),i.languages.javascript["template-string"].inside.interpolation.inside.rest=i.languages.javascript,i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript",greedy:!0}}),i.languages.js=i.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,n=t.getAttribute("data-src"),r=t,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(a=(t.className.match(s)||[,""])[1]),!a){var l=(n.match(/\.(\w+)$/)||[,""])[1];a=e[l]||l}var o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading…",t.appendChild(o);var u=new XMLHttpRequest;u.open("GET",n,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,i.highlightElement(o)):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}),i.plugins.toolbar&&i.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))},370:function(e,t,a){},433:function(e,t,a){"use strict";var n=a(370);a.n(n).a},515:function(e,t,a){"use strict";a.r(t);var n=a(347),i=a.n(n),r={name:"grid3",data:function(){return{value:["start","end","center","stretch"],justify:"stretch",align:"stretch"}},watch:{justify:function(){this.updateCss()},align:function(){this.updateCss()}},methods:{updateCss:function(){this.$refs.placeSelf.innerHTML=i.a.highlight("place-self: ".concat(this.align==this.justify?"".concat(this.align):"".concat(this.align," ").concat(this.justify),";"),i.a.languages.css)}},mounted:function(){this.updateCss()}},s=(a(433),a(1)),l=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid3-container"},[a("div",{staticClass:"grid-wrapper"},[a("div",{staticClass:"grid-item",style:{justifySelf:e.justify,alignSelf:e.align}},[e._v("\n      gird-item\n    ")])]),e._v(" "),a("pre",{staticClass:"language-css"},[a("code",{ref:"placeSelf"})]),e._v(" "),a("div",{staticClass:"key-value"},[a("span",[e._v("justify-self:  ")]),e._v(" "),e._l(e.value,function(t,n){return a("el-radio",{key:n,attrs:{label:t},model:{value:e.justify,callback:function(t){e.justify=t},expression:"justify"}})})],2),e._v(" "),a("div",{staticClass:"key-value"},[a("span",[e._v("align-self:    ")]),e._v(" "),e._l(e.value,function(t,n){return a("el-radio",{key:n,attrs:{label:t},model:{value:e.align,callback:function(t){e.align=t},expression:"align"}})})],2)])},[],!1,null,"b8718f58",null);l.options.__file="grid3.vue";t.default=l.exports}}]);