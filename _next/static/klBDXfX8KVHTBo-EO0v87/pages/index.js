(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var i,r=n("q1tI");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,i),o&&s(n,o),t}();t.default=h},"8oxB":function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"===typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t);var i=n("XXOK"),r=n.n(i),o=n("MX0m"),s=n.n(o),a=n("q1tI"),c=n.n(a),l=n("hfKm"),u=n.n(l);function h(e,t,n){return t in e?u()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n("p0XB"),f=n.n(d);var p=n("yLu3"),m=n.n(p);function v(e,t){return function(e){if(f()(e))return e}(e)||function(e,t){if(m()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,o=!1,s=void 0;try{for(var a,c=r()(e);!(i=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(l){o=!0,s=l}finally{try{i||null==c.return||c.return()}finally{if(o)throw s}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=c.a.createElement,g={textTransform:"uppercase"},w=function(e,t){var n=v(e,2),i=n[0],r=n[1];return y("div",{onClick:function(){t(i)},style:{cursor:"pointer",marginRight:!1!==r?"1ch":0,display:"flex",marginBottom:!1!==r?5.25:0}},y("div",{style:{border:"solid 1px black",paddingLeft:"0.5ch",paddingRight:"0.5ch",background:"#fff"}},i),!1!==r?y("div",{style:{paddingLeft:"1ch",paddingRight:"1ch",borderTop:"solid 1px transparent",borderRight:"solid 1px transparent",borderBottom:"solid 1px transparent"}},r):null)},b=function(e){var t=e.items,n=e.clickKey;return y("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(e){return w(e,n)}))},_=function(e){var t=e.mode,n=e.clickKey;switch(t){case"default":return y("div",null,y("div",{style:{marginBottom:5.25}},y("div",{style:g},"Width"),y(b,{items:[["h","narrower"],["l","wider"]],clickKey:n}),y(b,{clickKey:n,items:[["shift","hold to move by 10"]]})),y("div",{style:{marginBottom:5.25}},y("div",{style:g},"Text"),y(b,{items:[["e","edit text"]],clickKey:n})),y("div",{style:{marginBottom:5.25}},y("div",{style:g},"Image"),y("div",null,"To upload an image you can paste, drop or press"),y(b,{items:[["o","to open a file dialog"]],clickKey:n})));case"editing":return y("div",null,y("div",{style:{marginBottom:5.25}},y("div",{style:g},"Editing"),y(b,{items:[["escape","stop editing (or shift+enter)"]],clickKey:n})));default:return null}},S=function(e){var t,n=e.rlh,i=e.mode,r=e.help,o=e.clickKey,s=e.image_info;return y("div",null,y("div",{style:{position:"fixed",right:"2ch",bottom:n,display:r?"none":"block"}},w(["?",!1],o)),y("div",{style:(t={paddingRight:"1ch",paddingLeft:"1ch",paddingTop:n/4,paddingBottom:n/4,position:"fixed",outline:"solid 1px black",width:"74ch",maxWidth:"calc(100% - 4ch)",background:"white"},h(t,"paddingLeft","2ch"),h(t,"paddingRight","2ch"),h(t,"paddingBottom",n/2),h(t,"paddingTop",n/2),h(t,"right","2ch"),h(t,"bottom",n),h(t,"overflowY","auto"),h(t,"display",r?"block":"none"),t)},y("div",{style:{marginBottom:n/4}},"Pixel-reflow an image to match the dimensions of your text. Save the result as a diptych."),y("div",{style:{background:"#efefef",marginLeft:"-2ch",marginRight:"-2ch",paddingLeft:"2ch",paddingRight:"2ch"}},y(_,{mode:i,clickKey:o})),y("div",{style:{marginBottom:n/4}},y("div",{style:g},"Special"),y(b,{clickKey:o,items:[["w","save diptych as png"],["?","help"]]})),y("div",null,y("a",{href:s[2]},"Default image ",s[1])),y("div",null,y("a",{href:"https://github.com/constraint-systems/diptych"},"View source"))))},k=c.a.createElement,R=16,x=1.5,j=R*x,T=.4*j,O=14*x;var E=[["beach.jpg","by Jos\xe9 Duarte","https://unsplash.com/photos/DuholBfUUCY"],["peck.jpg","from Moby Dick (1956 film)","https://en.wikipedia.org/wiki/Moby_Dick_(1956_film)"],["whale-jump.jpg","by Thomas Kelley","https://unsplash.com/photos/t20pc32VbrU"],["whale-tail.jpg","by Iswanto Arif","https://unsplash.com/photos/VziuvwpGatM"]];t.default=function(e){var t=Object(a.useRef)(null),n=(Object(a.useRef)(null),Object(a.useRef)(null)),i=Object(a.useRef)(null),o=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),h=Object(a.useState)("CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off \u2014 then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n\nThere now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs \u2014 commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there."),d=h[0],f=h[1],p=Object(a.useState)(!0),m=p[0],v=p[1],y=Object(a.useState)("default"),g=y[0],w=y[1],b=Object(a.useState)(E[Math.floor(Math.random()*(E.length-1))])[0],_=Object(a.useState)(!1),I=_[0],C=_[1];function L(){var e=c.current.offsetWidth,i=c.current.offsetHeight,r=e*i,s=l.current,a=s.width,u=s.height,h=a/u,f=Math.floor(Math.sqrt(r*h)),p=Math.floor(r/f),m=document.createElement("canvas");m.width=f,m.height=p;var v=m.getContext("2d");v.drawImage(s,0,0,f,p);var y=v.getImageData(0,0,f,p),g=t.current,w=g.getContext("2d"),b=w.createImageData(e,i);b.data.set(y.data),g.width=n.current,g.height=i+2*j,w.fillStyle="white",w.fillRect(0,0,g.width,g.height),w.putImageData(b,2*T,j),w.font="".concat(R,"px/").concat(x," custom"),w.textBaseline="middle",w.fillStyle="black",function(e,t,n,i,r,o){for(var s=t.split("\n"),a=0;a<s.length;a++){var c,l,u,h=s[a].split(" "),d="";for(c=0;c<h.length;c++){for(l=h[c],u=e.measureText(l);u.width>=r;)l=l.substring(0,l.length-1),u=e.measureText(l);h[c]!=l&&(h.splice(c+1,0,h[c].substr(l.length)),h[c]=l),l=d+h[c]+" ",(u=e.measureText(l)).width>=r&&c>0?(e.fillText(d,n,i),d=h[c]+" ",i+=o):d=l}e.fillText(d,n,i),i+=o,o}}(w,d,g.width-2*T-e,j+j/2+2,e+T/2,R*x),o.current.innerHTML="width: ".concat(n.current,"  image: ").concat(a,"x").concat(u," (").concat(Math.round(a/u*1e3)/1e3,")  source: ").concat(f,"x").concat(p,"  target: ").concat(e,"x").concat(i," (").concat(Math.round(e/i*1e3)/1e3,")")}function B(e,t){var n=new Image;n.onload=function(){l.current=n,L()},n.src=e}function z(e){var i=e.key.toLowerCase(),o=1;if(e.shiftKey&&(o=10),"h"===i){var s=n.current-o;s<10&&(s=10),F(s),L()}else if("l"===i)F(n.current+o),L();else if("o"===i){var a=document.createElement("input");a.setAttribute("type","file"),a.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),a.addEventListener("change",function e(t){var n=!0,i=!1,o=void 0;try{for(var s,a=r()(this.files);!(n=(s=a.next()).done);n=!0){var c=s.value;c.type.indexOf("image")<0||B(URL.createObjectURL(c))}}catch(l){i=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}this.removeEventListener("change",e)})}else if("w"===i){var c=document.createElement("a"),l=function e(){var t=this;requestAnimationFrame(function(){URL.revokeObjectURL(t.href),t.href=null}),this.removeEventListener("click",e)};t.current.toBlob(function(e){c.setAttribute("download","diptych-".concat((new Date).toISOString().slice(0,-4).replace(/-/g,"").replace(/:/g,"").replace(/_/g,"").replace(/\./g,""),"Z.png")),c.setAttribute("href",URL.createObjectURL(e)),c.addEventListener("click",l),c.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))})}else if("e"===i){u.current.focus();var h=u.current;h.selectionStart=h.selectionEnd=h.value.length,e.preventDefault()}else"?"===i&&v(function(e){return!e})}function F(e){n.current=e,i.current.style.width=e+"px"}function P(e){e.preventDefault(),e.stopPropagation();var t=!0,n=!1,i=void 0;try{for(var o,s=r()(e.clipboardData.items);!(t=(o=s.next()).done);t=!0){var a=o.value;if(!(a.type.indexOf("image")<0)){var c=a.getAsFile();B(URL.createObjectURL(c))}}}catch(l){n=!0,i=l}finally{try{t||null==s.return||s.return()}finally{if(n)throw i}}}function M(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}function A(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer.files[0];t.path?t.path:t.name&&t.name,B(URL.createObjectURL(t))}return Object(a.useEffect)(function(){F(window.innerWidth),B(b[0])},[I]),Object(a.useEffect)(function(){window.innerWidth<600&&f("CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation."),setTimeout(function(){C(!0)},0)},[]),Object(a.useEffect)(function(){null!==l.current&&L()},[d]),Object(a.useEffect)(function(){return window.addEventListener("keydown",z),window.addEventListener("paste",P,!1),window.addEventListener("dragover",M,!1),window.addEventListener("drop",A,!1),function(){window.removeEventListener("keydown",z),window.removeEventListener("paste",P),window.removeEventListener("dragover",M,!1),window.removeEventListener("drop",A,!1)}},[d]),k("div",{className:s.a.dynamic([["1263658118",[R,x,j]]])},k("div",{ref:i,style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",paddingLeft:"2ch",paddingRight:"2ch",paddingTop:j,paddingBottom:j,gridColumnGap:"3ch",background:"white"},className:s.a.dynamic([["1263658118",[R,x,j]]])},k("canvas",{style:{position:"absolute",left:0,top:0},ref:t,className:s.a.dynamic([["1263658118",[R,x,j]]])}),k("div",{className:s.a.dynamic([["1263658118",[R,x,j]]])}),k("div",{style:{position:"relative"},className:s.a.dynamic([["1263658118",[R,x,j]]])},k("div",{ref:c,style:{position:"relative",whiteSpace:"pre-wrap",pointerEvents:"none",background:"white"},className:s.a.dynamic([["1263658118",[R,x,j]]])},d,"\u200b"),k("textarea",{ref:u,style:{display:"block",fontSize:"inherit",fontFamily:"inherit",lineHeight:"inherit",border:"none",padding:0,margin:0,position:"absolute",left:0,top:0,width:"100%",height:"100%",resize:"none"},onPaste:function(e){e.stopPropagation()},onFocus:function(e){w("editing")},onBlur:function(e){w("default")},onKeyDown:function(e){"Escape"===e.key&&e.target.blur(),e.shiftKey&&"Enter"===e.key&&e.target.blur(),e.stopPropagation()},onChange:function(e){f(e.target.value)},value:d,spellCheck:"false",className:s.a.dynamic([["1263658118",[R,x,j]]])}))),k("div",{style:{paddingLeft:"2ch",paddingRight:"2ch",paddingTop:j/2,paddingBottom:j/2,whiteSpace:"pre-wrap",fontFamily:"customono",fontSize:14,lineHeight:x},ref:o,className:s.a.dynamic([["1263658118",[R,x,j]]])}),k("div",{style:{position:"fixed",right:"2ch",bottom:"2ch",paddingLeft:"1ch",paddingRight:"1ch",paddingTop:j/2,paddingBottom:j/2},className:s.a.dynamic([["1263658118",[R,x,j]]])}),k("div",{style:{fontFamily:"customono",fontSize:14,lineHeight:x},className:s.a.dynamic([["1263658118",[R,x,j]]])},k(S,{rlh:O,help:m,mode:g,clickKey:function(e){z({key:e})},image_info:b})),k(s.a,{id:"1263658118",dynamic:[R,x,j]},["@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}","@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}","*{box-sizing:border-box;}","html{font-family:'custom',sans-serif;font-size:".concat(R,"px;line-height:").concat(x,";background:#ddd;}"),"body{margin:0;padding:0;}","canvas{display:block;}","h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}","p{margin:0;margin-top:".concat(j,"px;}"),"img{display:block;width:100%;}","a{color:inherit;}","textarea{background:white;}","textarea:focus{background:#efefef;outline:none;}"]))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("9kyW")),r=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,i=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=o,this._instancesCounts[i]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var r=String(n),o=t+r;return e[o]||(e[o]="jsx-".concat((0,i.default)("".concat(t,"-").concat(r)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var o=this.computeId(r,i);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),o&&s(t,o),e}();t.default=a},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?i:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(r(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,o,a;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];s(r,"old rule at index `".concat(e,"` not found")),r.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-".concat(e),""),t&&i.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(i,n):o.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);