(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=113},129:function(t,e,n){"use strict";var r=n(37);n.n(r).a},130:function(t,e,n){"use strict";var r=n(38);n.n(r).a},131:function(t,e,n){},136:function(t,e,n){var r={"./index.js":137};function o(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=136},137:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{sidebar:!1}},o={toggleSidebar:function(t){t.sidebar=!t.sidebar}}},138:function(t,e,n){"use strict";n.r(e);n(61),n(45),n(46);var r=n(21),o=n.n(r),i=(n(29),n(49),n(95),n(5)),a=n.n(i),s=(n(73),n(74),n(77),n(28),n(55),n(78),n(100),n(112),n(0)),u=(n(57),n(113)),c=u.keys();function l(t){var e=u(t);return e.default||e}var p={},f=!0,d=!1,h=void 0;try{for(var v,m=c[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var x=v.value;p[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){d=!0,h=t}finally{try{f||null==m.return||m.return()}finally{if(d)throw h}}var y=p,g=(n(83),n(114),n(115),n(117),n(119),n(120),n(123),n(22)),w=n.n(g),_=function(){return{}};function b(t,e){var n=t.options.data||_;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function $(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function E(t){return Promise.all($(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function R(t){return T.apply(this,arguments)}function T(){return(T=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:return t.abrupt("return",w()({},e,{meta:k(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function S(t,e){return j.apply(this,arguments)}function j(){return(j=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/curriculum-catalog/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=I(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,R(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,R(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function A(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function N(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?q:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=i[c.name||"pathMatch"],p=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(p=s(l[f]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===f?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=M.exec(t));){var u=n[0],c=n[1],l=n.index;if(a+=t.slice(i,l),i=l+u.length,c)a+=c[1];else{var p=t[i],f=n[2],d=n[3],h=n[4],v=n[5],m=n[6],x=n[7];a&&(r.push(a),a="");var y=null!=f&&null!=p&&p!==f,g="+"===m||"*"===m,w="?"===m||"*"===m,_=n[2]||s,b=h||v;r.push({name:d||o++,prefix:f||"",delimiter:_,optional:w,repeat:g,partial:y,asterisk:!!x,pattern:b?U(b):x?".*":"[^"+L(_)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function D(t,e){var n={},r=w()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function q(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var V=n(84),B=n.n(V),F=n(59),J=function(){return n.e(2).then(n.bind(null,141)).then(function(t){return t.default||t})};s.default.use(F.a),window.history.scrollRestoration="manual";var H=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var K=n(85),z=n.n(K).a,Q={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,l={};X.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};W.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(i))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var d=[t("router-view",r)];return o.keepAlive&&(d=[t("keep-alive",{props:o.keepAliveProps},d)]),t("transition",{props:l,on:p},d)}},X=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],W=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Y={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},G={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(129),n(20)),tt=Object(Z.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);tt.options.__file="nuxt-error.vue";var et=tt.exports,nt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||N(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:Q,NuxtError:et}},rt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(n(130),Object(Z.a)(rt,void 0,void 0,!1,null,null,null));ot.options.__file="nuxt-loading.vue";var it=ot.exports,at=(n(131),{data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"apps",title:"Welcome",to:"/"},{icon:"bubble_chart",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}}),st=Object(Z.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},on:{"update:miniVariant":function(e){t.miniVariant=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,r){return n("v-list-tile",{key:r,attrs:{router:"",to:e.to,exact:""}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),1)],1),t._v(" "),n("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("web")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("remove")])],1),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1),t._v(" "),n("v-content",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{temporary:"",right:t.right,fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-tile",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""}},[t._v("compare_arrows")])],1),t._v(" "),n("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},[],!1,null,null,null);st.options.__file="default.vue";var ut={_default:st.exports},ct={head:{title:"curriculum-catalog",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js + Vuetify.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ut["_"+t]||(t="default"),this.layoutName=t,this.layout=ut["_"+t],this.layout},loadLayout:function(t){return t&&ut["_"+t]||(t="default"),Promise.resolve(ut["_"+t])}},components:{NuxtLoading:it}},lt=(n(132),n(60));s.default.use(lt.a);var pt=n(136),ft=pt.keys(),dt={},ht=ft.find(function(t){return t.includes("./index.")});if(ht&&(dt=Dt(ht)),"function"!=typeof dt){dt.modules||(dt.modules={});var vt=!0,mt=!1,xt=void 0;try{for(var yt,gt=ft[Symbol.iterator]();!(vt=(yt=gt.next()).done);vt=!0){var wt=yt.value,_t=wt.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==_t){var bt=_t.split(/\//);if(_t=bt[bt.length-1],["state","getters","actions","mutations"].includes(_t)){Mt(Pt(dt,bt,!0),wt,_t)}else{var Ct="index"===_t;Ct&&bt.pop();var kt=Pt(dt,bt),$t=Dt(wt);if(kt[_t=bt.pop()]=kt[_t]||{},Ct){var Et={};if(kt[_t].appends){Et.appends=kt[_t].appends;var Rt=!0,Tt=!1,St=void 0;try{for(var jt,Ot=kt[_t].appends[Symbol.iterator]();!(Rt=(jt=Ot.next()).done);Rt=!0){var At=jt.value;Et[At]=kt[_t][At]}}catch(t){Tt=!0,St=t}finally{try{Rt||null==Ot.return||Ot.return()}finally{if(Tt)throw St}}}kt[_t]=Object.assign({},kt[_t],$t,Et),kt[_t].namespaced=!0}else kt[_t]=Object.assign({},$t,kt[_t]),kt[_t].namespaced=!0}}}}catch(t){mt=!0,xt=t}finally{try{vt||null==gt.return||gt.return()}finally{if(mt)throw xt}}}var Nt=dt instanceof Function?dt:function(){return new lt.a.Store(Object.assign({strict:!1},dt,{state:dt.state instanceof Function?dt.state():{}}))};function Dt(t){var e=pt(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function Pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},Pt(t.modules[r],e,n)}function Mt(t,e,n){var r=pt(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}var qt=n(86),Lt=n.n(qt);s.default.use(Lt.a),s.default.component(z.name,z),s.default.component(Q.name,Q),s.default.component(Y.name,Y),s.default.component(nt.name,nt),s.default.use(B.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Ut={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function It(){return(It=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new F.a({mode:"history",base:"/curriculum-catalog/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:H,routes:[{path:"/",component:J,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=Nt(e)).$router=n,o=r.registerModule,r.registerModule=function(t,e,n){return o.call(r,t,e,Object.assign({preserveState:!0},n))},i=w()({router:n,store:r,nuxt:{defaultTransition:Ut,transitions:[Ut],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Ut,{name:t}):Object.assign({},Ut,t):Ut}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,i.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ct),r.app=i,a=e?e.next:function(t){return i.router.push(t)},e?u=n.resolve(e.url).route:(c=A(n.options.base),u=n.resolve(c).route),t.next=13,S(i,{route:u,next:a,error:i.nuxt.error.bind(i),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");i[t="$"+t]=e,r[t]=i[t];var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=18;break;case 18:t.next=21;break;case 21:return t.abrupt("return",{app:i,store:r,router:n});case 22:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Vt,Bt,Ft=[],Jt=window.__NUXT__||{};function Ht(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Kt(t,e,n){return zt.apply(this,arguments)}function zt(){return(zt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Vt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?D(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,E(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Qt(t,e){return Jt.serverRendered&&e&&b(t,e),t._Ctor=t,t}function Xt(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():O(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Wt(t,e,n){return Yt.apply(this,arguments)}function Yt(){return(Yt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,l,p,f,d,h,v,m,x,y,g,w,_=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ft=e===n?[]:k(n,o=[]).map(function(t,e){return N(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&_.$loading.finish&&_.$loading.finish(),n.path!==t.path&&_.$loading.pause&&_.$loading.pause(),i||(i=!0,r(t))},t.next=7,S(Vt,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=Vt.nuxt.dateErr,this._hadError=!!Vt.nuxt.err,(c=k(e,u=[])).length){t.next=25;break}return t.next=14,Xt.call(this,c,Vt.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof et.layout?et.layout(Vt.context):et.layout);case 18:return l=t.sent,t.next=21,Xt.call(this,c,Vt.context,l);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return Vt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Ht(c,e,n)),t.prev=27,t.next=30,Xt.call(this,c,Vt.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!Vt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(Vt.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,Xt.call(this,c,Vt.context,p);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!Vt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,d=!0,h=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(d=(x=m.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(Vt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,v=t.t0;case 70:t.prev=70,t.prev=71,d||null==m.return||m.return();case 73:if(t.prev=73,!h){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=N(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,_._pathChanged&&_._queryChanged||t._path!==Ft[n])t._dataRefresh=!0;else if(!_._pathChanged&&_._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return _._diffQuery[t]}))}if(!_._hadError&&_._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=O(t.options.asyncData,Vt.context).then(function(e){b(t,e),_.$loading.increase&&_.$loading.increase(s)});o.push(c)}if(_.$loading.manual=!1===t.options.loading,a){var l=t.options.fetch(Vt.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){_.$loading.increase&&_.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,g));case 97:return Ft=[],C=g,s.default.config.errorHandler&&s.default.config.errorHandler(C),"function"==typeof(w=et.layout)&&(w=w(Vt.context)),t.next=103,this.loadLayout(w);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,n,g),r(!1);case 106:case"end":return t.stop()}var C},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Gt(t,e){$(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function Zt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?et.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Vt.context)),this.setLayout(e)}function te(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=k(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),Zt.call(n,t)})}function ee(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Bt.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function ne(){return(ne=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Vt=e.app,Bt=e.router,e.store,t.next=5,Promise.all((c=void 0,c=A((u=Bt).options.base,u.options.mode),$(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=Qt(C(e),Jt.data?Jt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new s.default(Vt),o=Jt.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){ee(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Ht(n,Bt.currentRoute)),Ft=Bt.currentRoute.matched.map(function(t){return N(t.path)(Bt.currentRoute.params)})),r.$loading={},Jt.error&&r.error(Jt.error),Bt.beforeEach(Kt.bind(r)),Bt.beforeEach(Wt.bind(r)),Bt.afterEach(Gt),Bt.afterEach(te.bind(r)),!Jt.serverRendered){t.next=23;break}return i(),t.abrupt("return");case 23:Wt.call(r,Bt.currentRoute,Bt.currentRoute,function(t){if(!t)return Gt(Bt.currentRoute,Bt.currentRoute),Zt.call(r,Bt.currentRoute),void i();Bt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 24:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.default.config,{silent:!0,performance:!1}),function(t){return It.apply(this,arguments)}().then(function(t){return ne.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},37:function(t,e,n){},38:function(t,e,n){},87:function(t,e,n){t.exports=n(138)}},[[87,3,1,4]]]);