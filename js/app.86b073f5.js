(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4ae5e44b","chunk-23f1bd9a":"03617f1c","chunk-2d21d496":"2a44fc0f","chunk-2d7e57c8":"ae3c195e","chunk-334574ea":"340b8243","chunk-6e283428":"8185c226","chunk-77979d9d":"9148a5a0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2d7e57c8":1,"chunk-334574ea":1,"chunk-77979d9d":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-23f1bd9a":"31d6cfe0","chunk-2d21d496":"31d6cfe0","chunk-2d7e57c8":"29bf78da","chunk-334574ea":"5c9713c3","chunk-6e283428":"31d6cfe0","chunk-77979d9d":"92533a55"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/event/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},5272:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("7bb1"),a=n("4c93"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.authenticated?n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/country"}},[e._v("Country")]),e._v(" | "),n("router-link",{attrs:{to:"/people"}},[e._v("People")]),e._v(" | "),n("router-link",{attrs:{to:"/event"}},[e._v("Event")]),e._v(" | "),n("router-link",{attrs:{to:"/meeting"}},[e._v("Meetings")]),e._v(" | "),n("router-link",{attrs:{to:"/login",replace:""},nativeOn:{click:function(t){return e.logout()}}},[e._v("Logout")])],1):e._e(),n("router-view")],1)},c=[],i=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"nraboy",password:"password"}}},mounted:function(){this.authenticated||this.$router.replace({name:"login"})},methods:{setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}}}),l=i,s=(n("034f"),n("2877")),d=Object(s["a"])(l,u,c,!1,null,null,null),f=d.exports,p=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("7c13")}}),r("HelloWorld",{attrs:{msg:"Welcome to AIIAS Event "}})],1)},m=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},b=[],g={name:"HelloWorld",props:{msg:String}},k=g,y=(n("5d06"),Object(s["a"])(k,v,b,!1,null,"43f48a4c",null)),_=y.exports,w={name:"Home",components:{HelloWorld:_}},O=w,j=Object(s["a"])(O,h,m,!1,null,null,null),A=j.exports;r["default"].use(p["a"]);var E=[{path:"/home",name:"Home",component:A},{path:"/",redirect:{name:"login"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/event",name:"Event",component:function(){return n.e("chunk-77979d9d").then(n.bind(null,"d3dc"))}},{path:"/country",name:"Country",component:function(){return n.e("chunk-23f1bd9a").then(n.bind(null,"e138"))}},{path:"/people",name:"People",component:function(){return n.e("chunk-6e283428").then(n.bind(null,"bea6"))}},{path:"/meeting",name:"Meeting",component:function(){return n.e("chunk-2d21d496").then(n.bind(null,"d13f"))}},{path:"/mainmenu",name:"MainMenu",component:function(){return n.e("chunk-334574ea").then(n.bind(null,"ffd3"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d7e57c8").then(n.bind(null,"a55b"))}}],S=new p["a"]({mode:"history",base:"/event/",routes:E}),P=S,x=n("2f62");r["default"].use(x["a"]);var C=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("5f5b"),M=n("b1e0"),H=(n("4989"),n("f9e3"),n("2dd8"),n("8aa5")),I=n.n(H);r["default"].use(T["a"]),r["default"].use(M["a"]),Object.keys(a).forEach((function(e){Object(o["c"])(e,a[e])})),r["default"].component("ValidationObserver",o["a"]),r["default"].component("ValidationProvider",o["b"]),window.$=window.jQuery=n("1157"),n("e71f");var L={apiKey:"AIzaSyBQl8BV1uTzvsp_iin7gD5Aw560Di2g8U8",authDomain:"aiias-event-a.firebaseapp.com",databaseURL:"https://aiias-event-a.firebaseio.com",projectId:"aiias-event-a",storageBucket:"aiias-event-a.appspot.com",messagingSenderId:"343556198820",appId:"1:343556198820:web:160c0f6f65068d7ecdb131"};I.a.initializeApp(L);var B=I.a.firestore();window.db=B,r["default"].config.productionTip=!1,new r["default"]({router:P,store:C,render:function(e){return e(f)}}).$mount("#app")},"5d06":function(e,t,n){"use strict";var r=n("5272"),o=n.n(r);o.a},"7c13":function(e,t,n){e.exports=n.p+"img/aiias.a0d443f2.png"},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.86b073f5.js.map