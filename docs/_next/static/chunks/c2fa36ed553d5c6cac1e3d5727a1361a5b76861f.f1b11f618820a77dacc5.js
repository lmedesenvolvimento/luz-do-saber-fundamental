(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),s=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,s=e.hasQuery;return r||o&&(void 0!==s&&s)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(s.AmpStateContext))}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,o=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),i=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){s.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=i},"8Kt/":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),s=n(r("Xuae")),i=r("lwAK"),a=r("FYa8"),c=r("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?s=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var a=0,c=f.length;a<c;a++){var l=f[a];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var u=o.props[l],p=n[l]||new Set;p.has(u)?s=!1:(p.add(u),n[l]=p)}}}return s}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}var d=s.default();function h(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"8lYe":function(e,t,r){"use strict";var n=r("MX0m"),o=r.n(n),s=r("q1tI"),i=r.n(s).a.createElement;t.a=function(){return i("footer",{className:"jsx-818039485 footer full-width"},i("div",{className:"jsx-818039485 row display-content social-icons"},i("ul",{className:"jsx-818039485"},i("li",{className:"jsx-818039485"},i("a",{href:"",className:"jsx-818039485"},i("img",{src:"static/icone_google_reader.svg",alt:"",className:"jsx-818039485"}))),i("li",{className:"jsx-818039485"},i("a",{href:"",className:"jsx-818039485"},i("img",{src:"static/icone_twitter.svg",alt:"",className:"jsx-818039485"}))),i("li",{className:"jsx-818039485"},i("a",{href:"",className:"jsx-818039485"},i("img",{src:"static/icone_youtube.svg",alt:"",className:"jsx-818039485"}))),i("li",{className:"jsx-818039485"},i("a",{href:"",className:"jsx-818039485"},i("img",{src:"static/icone_facebook.svg",alt:"",className:"jsx-818039485"}))))),i("div",{className:"jsx-818039485 row display-content"},i("div",{className:"jsx-818039485"},i("img",{src:"static/lme.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/ufc-virtual.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/ufc.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/cientista-chefe-azul.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/governo.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/prefeitura.png",alt:"",className:"jsx-818039485 logo"})),i("div",{className:"jsx-818039485"},i("img",{src:"static/funcap.png",alt:"",className:"jsx-818039485 logo funcap"}))),i("span",{className:"jsx-818039485 copyright"},i("a",{href:"",className:"jsx-818039485"},"Termos de uso e pol\xedtica de privacidade")," | \xa9 2019 Luz do Saber. Todos os direitos reservados."),i(o.a,{id:"818039485"},[".footer.jsx-818039485{font-family:'Itim',cursive;margin-top:280px;text-align:center;}",".display-content.jsx-818039485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:20px;}",".display-content.jsx-818039485>div.jsx-818039485{margin-left:30px;margin-right:30px;}","div.jsx-818039485>img.jsx-818039485{max-width:100%;height:auto;}","ul.jsx-818039485 li.jsx-818039485{display:inline-block;padding:5px;}",".social-icons.jsx-818039485{margin-top:30px;}",".copyright.jsx-818039485{font-size:0.8em;text-transform:uppercase;display:inline-block;margin:30px;}",".logo.jsx-818039485{width:160px;height:50px;margin-bottom:15px;}",".funcap.jsx-818039485{width:120px;}"]))}},"8oxB":function(e,t){var r,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},MX0m:function(e,t,r){e.exports=r("3niX")},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||s()}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),o=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),s=t+o;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+o)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var s=this.computeId(o,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=i},Xuae:function(e,t,r){"use strict";var n=r("lwsE"),o=r("PJYZ"),s=r("W8MJ"),i=r("a1gu"),a=r("Nsbk"),c=r("7W2i"),l=r("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=r("q1tI"),p=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(l(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(l){c(h,l);var f,d=(f=h,function(){var e,t=a(f);if(u()){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return i(this,e)});function h(e){var s;return n(this,h),s=d.call(this,e),p&&(t.add(o(s)),r(o(s))),s}return s(h,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),s(h,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},YFqc:function(e,t,r){e.exports=r("cTJO")},b0oO:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function i(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=r("MX0m"),u=r.n(l),f=r("q1tI"),p=r.n(f),d=r("i8i4"),h=r.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=r("YFqc"),v=r.n(b),g=r("QmWs"),y=r("yLiY"),j=r.n(y),w=p.a.createElement,_=j()().publicRuntimeConfig,k=function(e){var t=e.children,r=x(e,["children"]);return w(v.a,m({},r,{as:"".concat(_.basePath||"").concat(Object(g.format)(r.href))}),t)},S=p.a.createElement;function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,r,o,s,l=(t=f,function(){var e,r=a(t);if(N()){var n=a(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return i(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=l.call(this,e)).selected="",t}return r=f,(o=[{key:"componentWillUnmount",value:function(){for(var e=h.a.findDOMNode(this).getElementsByClassName("selected"),t=0;t<e.length;t++){var r=e[t];r.classList.remove("selected"),console.log(r.classList)}}},{key:"render",value:function(){return S("nav",{className:"jsx-2703776257 d-flex row main-nav"},S("div",{className:"jsx-2703776257 col-sm"},S("div",{className:"jsx-2703776257 row logo"},S("h1",{className:"jsx-2703776257 hidden-title"},"LUZ DO SABER - PORTAL"),S("img",{src:"static/logo-rosto-0.png",alt:"Logo Sol Luz do Saber",width:"55%",className:"jsx-2703776257 logo-rosto"}),S("img",{src:"static/logo-raios.png",alt:"Logo Sol Luz do Saber",width:"55%",className:"jsx-2703776257 logo-sol"}))),S("div",{className:"jsx-2703776257 col-sm-8 nav-search"},S("div",{className:"jsx-2703776257 row search-bar"},S("div",{className:"jsx-2703776257 search-bar-itens search-input-container shadow-sm"},S("input",{type:"text",name:"search",id:"search",placeholder:"O QUE VOC\xca PROCURA?",className:"jsx-2703776257 search-input form-input-font"})),S("form",{action:"https://luz-do-saber-staging.herokuapp.com/#/",target:"_blank",className:"jsx-2703776257 search-bar-itens btn-container shadow-sm"},S("button",{className:"jsx-2703776257 btn search-input btn-font-light form-input-font"},"Editar")),S("div",{className:"jsx-2703776257 search-bar-itens btn-container shadow-sm"},S("button",{className:"jsx-2703776257 btn search-input btn-font-dark form-input-font"},"Instalar"))),S("div",{className:"jsx-2703776257 hamburguer-container"},S("input",{id:"menu-hamburguer",type:"checkbox",className:"jsx-2703776257"}),S("label",{htmlFor:"menu-hamburguer",className:"jsx-2703776257"},S("div",{className:"jsx-2703776257 menu-hamburguer"},S("span",{className:"jsx-2703776257 hamburguer"}))),S("div",{className:"jsx-2703776257 row menu-container"},S("ul",{className:"jsx-2703776257 col-sm menu"},S(C,{href:"/",selected:this.props.selected,to:"inicio"},"In\xedcio"),S(C,{href:"/projeto",selected:this.props.selected,to:"projeto"},"Projeto"),S(C,{href:"/download",selected:this.props.selected,to:"download"},"Downloads"),S(C,{to:"tutorial"},"Tutorial"),S(C,{to:"forum"},"F\xf3rum"),S(C,{to:"creditos"},"Cr\xe9ditos"),S(C,{href:"/contact",selected:this.props.selected,to:"contact"},"Contato"))))),S(u.a,{id:"2703776257"},['@media (min-width:1200px){.hamburguer-container.jsx-2703776257>input.jsx-2703776257,.hamburguer-container.jsx-2703776257>label.jsx-2703776257{display:none;}.main-nav.jsx-2703776257{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2703776257{visibility:hidden;position:absolute;}.nav-search.jsx-2703776257{font-family:"Itim",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.search-bar.jsx-2703776257{position:absolute;right:70px;top:25px;}.menu.jsx-2703776257{position:absolute;bottom:-17px;}.menu.jsx-2703776257 li.jsx-2703776257{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;border:1px solid #f0f0f0;margin-left:1px;}.menu.jsx-2703776257 li.jsx-2703776257:hover{cursor:pointer;}.menu.jsx-2703776257 li.jsx-2703776257 a.jsx-2703776257{color:#333;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2703776257 .inicio.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .inicio.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .projeto.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .projeto.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .download.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .download.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .tutorial.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .tutorial.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .forum.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .forum.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .creditos.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .creditos.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .contato.jsx-2703776257{border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}.menu.jsx-2703776257 .contato.jsx-2703776257:hover{background:#ffb151;color:#fff;}.selected.jsx-2703776257{background:#ffb151;}.disabled.jsx-2703776257{background:#d3d3d3;color:#fff;border-top:3px solid #d3d3d3;}.logo-rosto.jsx-2703776257{position:absolute;}button.jsx-2703776257,input.jsx-2703776257{top:6px;left:7px;}}','@media (min-width:320px) and (max-width:1199px){.hamburguer-container.jsx-2703776257>input.jsx-2703776257{display:none;}.hamburguer-container.jsx-2703776257{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.menu-hamburguer.jsx-2703776257{position:fixed;top:16px;background:#fff;border-radius:50%;width:60px;height:60px;right:30px;}.hamburguer.jsx-2703776257{position:absolute;display:block;width:30px;height:2px;top:28px;right:15px;background:#000;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2703776257:before,.hamburguer.jsx-2703776257:after{background:#000;content:"";display:block;width:30px;height:2px;position:absolute;-webkit-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}.hamburguer.jsx-2703776257:before{top:-10px;}.hamburguer.jsx-2703776257:after{bottom:-10px;}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:0;}input.jsx-2703776257:checked~label.jsx-2703776257 .hamburguer.jsx-2703776257:after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);bottom:0;}input.jsx-2703776257:checked~.menu-container.jsx-2703776257{-webkit-transform:translateX(300px);-ms-transform:translateX(300px);transform:translateX(300px);}.main-nav.jsx-2703776257{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;text-transform:uppercase;}.hidden-title.jsx-2703776257{visibility:hidden;position:absolute;}.nav-search.jsx-2703776257{font-family:"Itim",cursive;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:10;}.search-bar.jsx-2703776257{display:none;position:absolute;right:70px;top:50px;}.search-bar-itens.jsx-2703776257:first-child{display:none;}.menu-container.jsx-2703776257{position:fixed;background:rgb(92,183,204);background:linear-gradient( 90deg, rgba(92,183,204,0.9) 49%, rgba(48,142,163,0.9) 100%, rgba(9,9,121,0.9) 100% );top:0;left:-300px;width:300px;height:100%;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;}.menu.jsx-2703776257{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.menu.jsx-2703776257 li.jsx-2703776257{display:block;padding:10px;width:60%;font-size:1em;text-align:center;margin:15px;color:#fff;font-weight:bold;}.menu.jsx-2703776257 li.jsx-2703776257:hover{cursor:pointer;}.menu.jsx-2703776257 li.jsx-2703776257 a.jsx-2703776257{color:#fff;-webkit-text-decoration:none;text-decoration:none;display:block;}.menu.jsx-2703776257 .inicio.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .inicio.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .software.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .software.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .download.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .download.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .tutorial.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .tutorial.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .forum.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .forum.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .creditos.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .creditos.jsx-2703776257:hover{background:#ffb151;color:#fff;}.menu.jsx-2703776257 .contato.jsx-2703776257{border:1px solid transparent;border-bottom:3px solid rgba(255,255,255,1);}.menu.jsx-2703776257 .contato.jsx-2703776257:hover{background:#ffb151;color:#fff;}.selected.jsx-2703776257{background:#ffb151;}.logo-rosto.jsx-2703776257{position:absolute;width:148px;height:98px;}.logo-sol.jsx-2703776257{width:148px;height:98px;}button.jsx-2703776257,input.jsx-2703776257{top:6px;left:7px;}}']))}}])&&n(r.prototype,o),s&&n(r,s),f}(p.a.Component);function C(e){var t=e.children,r=e.href,n=e.selected,o=e.to,s=n===o?"selected":"";return S(p.a.Fragment,null,S("li",{className:"jsx-3031335792 "+"".concat(o," ").concat(s)},S(O,{href:r},t)),S(u.a,{id:"3031335792"},["li.jsx-3031335792{display:inline-block;padding:10px;width:100px;font-size:0.8em;text-align:center;margin-left:1px;border:1px solid transparent;border-top:4px solid rgba(24,65,109,0.15);}","li.jsx-3031335792:hover{background:#ffb151;color:#fff;cursor:pointer;}","li.selected.jsx-3031335792{background:#ffb151;}"]))}function O(e){var t=e.children,r=e.href;return r?S(p.a.Fragment,null,S(k,{href:r,passHref:!0},S("a",{className:"jsx-2659787274"},t)),S(u.a,{id:"2659787274"},["a.jsx-2659787274{color:#333 !important;-webkit-text-decoration:none;text-decoration:none;display:block;}"])):t}t.a=R},bPq6:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),s=r("8Kt/"),i=r.n(s),a=(r("b0oO"),o.a.createElement);t.a=function(e){return a("main",{className:"container"},a(i.a,null,a("title",null,"Luz do Saber Portal"),a("meta",{name:"description",content:""}),a("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a("link",{rel:"apple-touch-icon",href:"icon.png"}),a("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),a("link",{href:"https://fonts.googleapis.com/css?family=Itim&display=swap",rel:"stylesheet"}),a("link",{rel:"stylesheet",href:"static/styles/global.css"})),a("main",null,e.children))}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;i(o(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",i("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(i(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];i(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&i(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),a&&r(t,a),e}();function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),s=r("a1gu"),i=r("Nsbk"),a=r("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=r("TqRt"),u=r("284h");t.__esModule=!0,t.default=void 0;var f,p=u(r("q1tI")),d=r("QmWs"),h=r("g/15"),m=l(r("nOHt"));function x(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new Map,v=window.IntersectionObserver,g={};function y(){return f||(v?f=new v((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(l,e);var t,r=(t=l,function(){var e,r=i(t);if(c()){var n=i(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function l(e){var t;return n(this,l),(t=r.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,r=null,n=null;return function(o,s){if(n&&o===t&&s===r)return n;var i=e(o,s);return t=o,r=s,n=i,i}}((function(e,t){return{href:x(e),as:t?x(t):t}})),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),i=s.href,a=s.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),a=a?(0,d.resolve)(c,a):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=a.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](i,a,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=y();return r?(r.observe(e),b.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var s=p.Children.only(t),i={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(i.href=o||n),p.default.cloneElement(s,i)}}]),l}(p.Component);t.default=j},lwAK:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.AmpStateContext=o.createContext({})},yLiY:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n},t.setConfig=function(e){n=e}}}]);