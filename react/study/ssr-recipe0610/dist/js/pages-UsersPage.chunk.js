exports.ids=[3],exports.modules={21:function(e,t,r){"use strict";r.r(t);var s=r(4),n=r(2),c=r(0),u=function(e){var t=e.users;return t?Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(n.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},i=r(15),j=r(10),b=Object(i.connect)((function(e){return{users:e.users.users}}),{getUsers:j.c})((function(e){var t=e.users,r=e.getUsers;return Object(s.useEffect)((function(){t||r()}),[r,t]),Object(c.jsx)(u,{users:t})})),d=function(e){var t=e.user,r=t.email,s=t.name,n=t.username;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:[n," (",s,")"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"e-mail:"})," ",r]})]})},O=r(16),a=function(e){var t=e.id,r=Object(i.useSelector)((function(e){return e.users.user})),n=Object(i.useDispatch)();return Object(O.b)((function(){return n(Object(j.b)(t))})),Object(s.useEffect)((function(){r&&r.id===parseInt(t,10)||n(Object(j.b)(t))}),[n,t,r]),r?Object(c.jsx)(d,{user:r}):null};t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(n.Route,{path:"/users/:id",render:function(e){var t=e.match;return Object(c.jsx)(a,{id:t.params.id})}})]})}}};