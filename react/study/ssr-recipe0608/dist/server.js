!function(e){var r={},t={0:0};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(r){if(0!==t[r]){var n=require("./js/"+({1:"pages-BluePage",2:"pages-RedPage",3:"pages-UsersPage"}[r]||r)+".chunk.js"),o=n.modules,s=n.ids;for(var u in o)e[u]=o[u];for(var c=0;c<s.length;c++)t[s[c]]=0}return Promise.all([])},n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n.oe=function(e){process.nextTick((function(){throw e}))},n(n.s=25)}([function(e,r){e.exports=require("react/jsx-runtime")},function(e,r,t){e.exports=t(24)},function(e,r){e.exports=require("react-router-dom")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r,t){"use strict";function n(e,r,t,n,o,s,u){try{var c=e[s](u),i=c.value}catch(e){return void t(e)}c.done?r(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,s){var u=e.apply(r,t);function c(e){n(u,o,s,c,i,"next",e)}function i(e){n(u,o,s,c,i,"throw",e)}c(void 0)}))}}t.d(r,"a",(function(){return o}))},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("@loadable/component")},function(e,r){e.exports=require("path")},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,"b",(function(){return b})),t.d(r,"c",(function(){return j})),t.d(r,"d",(function(){return O}));var u=t(1),c=t.n(u),i=t(6),a=t(13),l=t.n(a),p=t(4),f=c.a.mark(y),d=c.a.mark(O),v="users/GET_USER",h=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},b=function(e){return{type:v,payload:e}},j=function(){return function(){var e=Object(i.a)(c.a.mark((function e(r){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,l.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(h(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},x=function(e){return l.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function y(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p.call)(x,e.payload);case 3:return r=t.sent,t.next=6,Object(p.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(p.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),f,null,[[0,8]])}function O(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.takeEvery)(v,y);case 2:case"end":return e.stop()}}),d)}var g={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};r.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return s(s({},e),{},{loading:s(s({},e.loading),{},{users:!0})});case"users/GET_USERS_SUCCESS":return s(s({},e),{},{loading:s(s({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return s(s({},e),{},{loading:s(s({},e.loading),{},{users:!1}),error:s(s({},e.error),{},{users:r.payload})});case v:return s(s({},e),{},{loading:s(s({},e.loading),{},{user:!0}),error:s(s({},e.error),{},{user:null})});case"users/GET_USER_SUCCESS":return s(s({},e),{},{loading:s(s({},e.loading),{},{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return s(s({},e),{},{loading:s(s({},e.loading),{},{user:!1}),error:s(s({},e.error),{},{user:r.payload})});default:return e}}},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("@loadable/server")},function(e,r){e.exports=require("react-redux")},function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"c",(function(){return u}));var n=t(3),o=Object(n.createContext)(null);r.b=o;var s=function(e){var r=e.resolve,t=Object(n.useContext)(o);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},u=function(e){var r=Object(n.useContext)(o);return r?r.done?null:void r.promises.push(Promise.resolve(e())):null}},function(e,r,t){"use strict";var n=t(3),o=t.n(n),s=t(2),u=t.n(s),c=t(18),i=t(8),a=t.n(i),l=t(0),p=t.n(l),f=a()({resolved:{},chunkName:function(){return"pages-RedPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(2).then(t.bind(null,22))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 22}}),d=a()({resolved:{},chunkName:function(){return"pages-BluePage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(1).then(t.bind(null,23))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 23}}),v=a()({resolved:{},chunkName:function(){return"pages-UsersPage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(3).then(t.bind(null,21))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 21}});function h(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(c.a,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(s.Route,{path:"/red",component:f}),Object(l.jsx)(s.Route,{path:"/blue",component:d}),Object(l.jsx)(s.Route,{path:"/users",component:v})]})}r.a=h},function(e,r,t){"use strict";t(3);var n=t(2),o=t(0);r.a=function(){return Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.Link,{to:"/red",children:"Red"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.Link,{to:"/blue",children:"Blue"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.Link,{to:"/users",children:"Users"})})]})}},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("redux-thunk")},,,,function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n),s=t(6),u=(t(3),t(11)),c=t.n(u),i=t(12),a=t.n(i),l=t(2),p=t(17),f=t(9),d=t.n(f),v=t(19),h=t.n(v),b=t(5),j=t(7),x=t.n(j),y=t(10),O=t(4),g=o.a.mark(m);function m(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.all)([Object(y.d)()]);case 2:case"end":return e.stop()}}),g)}var S=Object(b.combineReducers)({users:y.a}),E=t(20),P=t.n(E),_=t(15),k=t(16),R=t(14),w=t(0),q=d.a.resolve("./build/loadable-stats.json"),T=JSON.parse(h.a.readFileSync(d.a.resolve("./build/asset-manifest.json"),"utf8"));Object.keys(T.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(T.files[e],'"><\/script>')})).join("");function U(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      '.concat(r.styles,"\n      ").concat(r.links,'\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,"\n      </div>\n      ").concat(r.scripts,"\n    </body>\n    </html>\n      ")}var A=a()(),C=function(){var e=Object(s.a)(o.a.mark((function e(r,t,n){var s,u,i,a,f,d,v,h,y,O,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},u=x()(),i=Object(b.createStore)(S,Object(b.applyMiddleware)(P.a,u)),a=u.run(m).toPromise(),f={done:!1,promises:[]},d=new R.ChunkExtractor({statsFile:q}),v=Object(w.jsx)(R.ChunkExtractorManager,{extractor:d,children:Object(w.jsx)(k.b.Provider,{value:f,children:Object(w.jsx)(_.Provider,{store:i,children:Object(w.jsx)(l.StaticRouter,{location:r.url,context:s,children:Object(w.jsx)(p.a,{})})})})}),c.a.renderToStaticMarkup(v),i.dispatch(j.END),e.prev=9,e.next=12,a;case 12:return e.next=14,Promise.all(f.promises);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",t.status(500));case 19:f.done=!0,h=c.a.renderToString(v),y=JSON.stringify(i.getState()).replace(/</g,"<"),O="<script> __PRELOADED_STATE__ = ".concat(y,"<\/script>"),g={scripts:O+d.getScriptTags(),links:d.getLinkTags(),styles:d.getStyleTags()},t.send(U(h,g));case 25:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(r,t,n){return e.apply(this,arguments)}}(),G=a.a.static(d.a.resolve("./build"),{index:!1});A.use(G),A.use(C),A.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);