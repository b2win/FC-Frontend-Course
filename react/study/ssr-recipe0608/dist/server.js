!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=require("react/jsx-runtime")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(6)},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r);function u(e,t,n,r,o,u,c){try{var i=e[u](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}n(2);var c=n(4),i=n.n(c),s=n(5),l=n.n(s),a=n(1),f=n(0),d=function(){return Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(a.Link,{to:"/red",children:"Red"})}),Object(f.jsx)("li",{children:Object(f.jsx)(a.Link,{to:"/blue",children:"Blue"})})]})},j=function(){return Object(f.jsx)("div",{className:"Red",children:"Red"})},p=function(){return Object(f.jsx)(j,{})},x=function(){return Object(f.jsx)("div",{className:"Blue",children:"Blue"})},b=function(){return Object(f.jsx)(x,{})};var v=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(d,{}),Object(f.jsx)("hr",{}),Object(f.jsx)(a.Route,{path:"/red",component:p}),Object(f.jsx)(a.Route,{path:"/blue",component:b})]})},O=l()(),h=function(){var e,t=(e=o.a.mark((function e(t,n,r){var u,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u={},c=Object(f.jsx)(a.StaticRouter,{location:t.url,context:u,children:Object(f.jsx)(v,{})}),s=i.a.renderToString(c),n.send(s);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var c=e.apply(t,n);function i(e){u(c,r,o,i,s,"next",e)}function s(e){u(c,r,o,i,s,"throw",e)}i(void 0)}))});return function(e,n,r){return t.apply(this,arguments)}}();O.use(h),O.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);