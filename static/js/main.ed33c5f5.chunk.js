(this["webpackJsonpreact-movie-query"]=this["webpackJsonpreact-movie-query"]||[]).push([[0],{49:function(e,t,c){},51:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(10),a=c(41),n=c.n(a),r=(c(49),c(0)),i=c.n(r),l=c(1),j=c(11),o=c(15),b=c(14),d=(c(51),c(29)),m=c(42),u=c(19),h=c(21),p=c(4),x=Object(m.a)({apiKey:"AIzaSyDLjXox2BBmOp_RRjVaSKfpGA7QFZI_0rQ",authDomain:"fir-crud-94681.firebaseapp.com",projectId:"fir-crud-94681",storageBucket:"fir-crud-94681.appspot.com",messagingSenderId:"456468945866",appId:"1:456468945866:web:d6954e993d07b4f3aecd33"}),O=Object(u.e)(),f=Object(h.b)();console.log(x),console.log(O);var v=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),o=r[0],b=r[1],m=f.currentUser;function h(){return(h=Object(l.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=m.uid,e.next=4,Object(u.a)(Object(u.b)(O,"tasks"),{title:c,desc:o,uid:s,createdAt:new Date});case 4:a(""),b("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=Object(s.useState)([]),v=Object(j.a)(x,2),y=v[0],w=v[1];return Object(s.useEffect)((function(){var e=Object(u.h)(Object(u.b)(O,"tasks"),Object(u.g)("createdAt","desc")),t=Object(u.f)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),w(t)}));return function(){return t()}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(N,{children:Object(p.jsxs)("div",{className:"container",children:[m?Object(p.jsxs)("div",{className:"my-5",children:[Object(p.jsx)("h3",{className:"text-center mb-3",children:"Add Task"}),Object(p.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},className:"mx-auto",style:{width:"500px"},children:[Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"enter title..",value:c,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"enter description..",value:o,onChange:function(e){return b(e.target.value)}}),Object(p.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"+"})]})]}):Object(p.jsx)("div",{className:"text-center my-5",children:Object(p.jsx)("h3",{children:"Login to Create Task"})}),Object(p.jsx)("div",{className:"mx-auto mb-5",style:{width:"500px"},children:y.map((function(e){return Object(p.jsx)("div",{className:"task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:e.title}),Object(p.jsx)("p",{children:e.desc})]})},e.id)}))})]})})]})},g=function e(t){e.defaultProps={navColor:"bg-dark"};var c=f.currentUser,s=Object(b.e)();return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"nav",style:{fontFamily:"sans-serif"},children:[Object(p.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(p.jsx)("div",{className:"nav-header",children:Object(p.jsx)("div",{className:"nav-title",children:Object(p.jsx)(o.b,{to:"/firebase-app",className:"text-light text-decoration-none",children:"React Firebase"})})}),Object(p.jsx)("div",{className:"nav-btn",children:Object(p.jsxs)("label",{htmlFor:"nav-check",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})}),c?Object(p.jsxs)("div",{className:"nav-links",children:[Object(p.jsx)(o.b,{to:"/firebase-app/profile",children:c.displayName||c.email}),Object(p.jsx)("button",{className:"btn-nav",onClick:function(e){e.preventDefault(),Object(h.d)(f).then((function(){s.push("/firebase-app")}))},children:"Logout"})]}):Object(p.jsxs)("div",{className:"nav-links",children:[Object(p.jsx)(o.b,{to:"/firebase-app/login",children:"Login"}),Object(p.jsx)(o.b,{to:"/firebase-app/register",children:"Register"})]})]})})},N=function(e){var t=e.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container my-1 px-md-5",style:{fontFamily:"sans-serif"},children:t}),Object(p.jsx)("div",{className:"py-5 bg-light",children:Object(p.jsx)("div",{className:"container px-md-5 text-center",children:"Alfath Muqoddas \xa92021"})})]})},y=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),b=r[0],d=r[1],m=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://www.omdbapi.com/?s=".concat(t,"&apikey=af1284eb&"),e.next=3,fetch(c);case 3:return s=e.sent,e.next=6,s.json();case 6:(n=e.sent).Search&&a(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){m(b)}),[b]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(N,{children:[Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)("h1",{className:"mb-2 mt-5",children:"React Movie App"}),Object(p.jsx)("form",{className:"input-group mx-auto w-100",style:{width:"500px"},children:Object(p.jsx)("input",{type:"text",className:"form-control",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Type to search..."})})]}),Object(p.jsx)("div",{className:"row row-cols-md-4 row-cols-2 my-5 gy-2 gx-0",children:c.map((function(e,t){return Object(p.jsx)("div",{className:"col bg-dark",children:Object(p.jsx)("div",{className:"p-2 bright position-relative",children:Object(p.jsxs)(o.b,{to:{pathname:"/movie/".concat(e.imdbID),state:{movie:e}},children:[Object(p.jsx)("img",{src:e.Poster,alt:"movie",className:"w-100 rounded-3"}),Object(p.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle middle text-light",children:Object(p.jsx)("h1",{children:"+"})})]})})})}))})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},F=function(){return Object(p.jsxs)("div",{className:"container my-5",children:[Object(p.jsx)(o.b,{to:"/movie",className:"text-decoration-none",children:Object(p.jsx)("h4",{children:"Movie Query App"})}),Object(p.jsx)(o.b,{to:"/firebase-app",className:"text-decoration-none",children:Object(p.jsx)("h4",{children:"Firebase CRUD App"})})]})},k=function(){var e=Object(b.f)().state.movie.imdbID,t=Object(s.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!1),o=Object(j.a)(r,2),d=o[0],m=o[1],u=function(){var t=Object(l.a)(i.a.mark((function t(){var c,s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="https://www.omdbapi.com/?i=".concat(e,"&apikey=af1284eb&"),console.log(c),t.next=5,fetch(c);case 5:return s=t.sent,t.next=8,s.json();case 8:a=t.sent,n(a),m(!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){u()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(N,{children:d?Object(p.jsxs)("div",{className:"row my-5 gx-5",children:[Object(p.jsx)("div",{className:"col-12 col-md-4 mb-4 text-center",children:Object(p.jsx)("img",{src:a.Poster,alt:"movie-poster",className:"w-100 rounded-3"})}),Object(p.jsxs)("div",{className:"col-12 col-md-8",children:[Object(p.jsxs)("h2",{className:"text-center",children:[a.Title," ",Object(p.jsxs)("small",{children:["(",a.Year,")"]})]}),Object(p.jsxs)("div",{className:"d-flex gap-5 mb-3 justify-content-center",children:[Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("p",{className:"mb-1",children:"IMDb Rating"}),Object(p.jsx)("h1",{children:a.imdbRating})]}),Object(p.jsxs)("div",{className:"text-center",children:[Object(p.jsx)("p",{className:"mb-1",children:"Metascore"}),Object(p.jsx)("h1",{children:a.Metascore})]})]}),Object(p.jsx)("p",{children:a.Plot}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Genre:"})," ",a.Genre]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Rated:"})," ",a.Rated]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Director:"})," ",a.Director]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Writer:"})," ",a.Writer]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Starring:"})," ",a.Actors]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Release:"})," ",a.Released]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Duraion:"})," ",a.Runtime]})]})]})]}):Object(p.jsx)("div",{className:"text-center my-5",children:Object(p.jsx)("h1",{children:"Loading..."})})})})},S=function(){var e=Object(h.b)(),t=e.currentUser,c=Object(s.useState)(""),a=Object(j.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),d=l[0],m=l[1],u=Object(b.e)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),t?Object(p.jsx)("div",{className:"container my-5",children:Object(p.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(p.jsxs)("div",{className:"container my-5",children:[Object(p.jsx)("h3",{className:"text-center",children:"Login"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Object(h.c)(e,n,d).then((function(e){u.push("/firebase-app")})).catch((function(e){alert(e.message)})),r(""),m("")},className:"mx-auto my-4",style:{width:"500px"},children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:d,onChange:function(e){return m(e.target.value)},required:!0}),Object(p.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Login"})]}),Object(p.jsxs)("p",{className:"text-center",children:["Doesn't have an account? Register ",Object(p.jsx)(o.b,{to:"/firebase-app/register",children:"here"})]})]})]})},R=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),i=r[0],l=r[1],d=Object(b.e)(),m=Object(h.b)(),u=m.currentUser;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),u?Object(p.jsx)("div",{className:"container my-5",children:Object(p.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(p.jsxs)("div",{className:"container my-5",children:[Object(p.jsx)("h3",{className:"text-center",children:"Register New Account"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(h.a)(m,c,i).then((function(e){var t=e.user;console.log(t)})).then((function(){d.push("/firebase-app/edit-profile")})).catch((function(e){alert(e.message)}))},className:"mx-auto my-4",style:{width:"500px"},children:[Object(p.jsx)("label",{htmlFor:"email",children:"Register Email"}),Object(p.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:c,onChange:function(e){return a(e.target.value)},required:!0}),Object(p.jsx)("label",{htmlFor:"password",children:"Create Password"}),Object(p.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:i,onChange:function(e){return l(e.target.value)},required:!0}),Object(p.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Register"})]}),Object(p.jsxs)("div",{className:"text-center",children:["Already have an account? Login ",Object(p.jsx)(o.b,{to:"/firebase-app/login",children:"here"})]})]})]})},C=function(){var e=Object(h.b)().currentUser,t=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(Object(u.d)(O,"tasks",t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(s.useState)([]),a=Object(j.a)(c,2),n=a[0],r=a[1],o=Object(u.h)(Object(u.b)(O,"tasks"),Object(u.i)("uid","==",e.uid),Object(u.g)("createdAt","desc"));Object(u.f)(o,(function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),r(t)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(N,{children:e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"my-5",children:[Object(p.jsx)("h3",{className:"text-center",children:"User Profile"}),Object(p.jsx)("p",{children:e.displayName}),Object(p.jsx)("p",{children:e.photoURL}),Object(p.jsx)("p",{children:e.email})]}),Object(p.jsx)("div",{className:"mx-auto mb-5",style:{width:"500px"},children:n.map((function(e){return Object(p.jsxs)("div",{className:"task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:e.title}),Object(p.jsx)("p",{children:e.desc})]}),Object(p.jsx)("button",{onClick:function(){return t(e.id)},className:"btn btn-danger rounded",children:"\ud83d\uddd1"})]},e.id)}))})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"my-5",children:Object(p.jsx)("h3",{children:"You need to login to see your profile"})})})})]})},A=function(){var e=Object(h.b)().currentUser,t=Object(s.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],d=i[1],m=Object(b.e)();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(N,{children:e?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"my-5",children:[Object(p.jsx)("h3",{className:"text-center",children:"Edit Profile"}),Object(p.jsxs)("form",{onSubmit:function(t){Object(h.e)(e,{displayName:a,photoURL:l}).then((function(){m.push("/firebase-app")})).catch((function(e){alert("error")})),n(""),d("")},className:"mx-auto my-4",style:{width:"500px"},children:[Object(p.jsx)("label",{htmlFor:"displayName",children:"Edit UserName"}),Object(p.jsx)("input",{type:"text",name:"displayName",className:"form-control mt-2 mb-3",placeholder:"edit display name...",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("label",{htmlFor:"avatar",children:"Edit Avatar"}),Object(p.jsx)("input",{type:"text",name:"avatar",className:"form-control my-2",placeholder:"add image url",value:l,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary me-3",value:"Apply"}),Object(p.jsx)(o.b,{to:"/firebase-app",children:"Edit Later"})]})]})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"my-5",children:Object(p.jsx)("h3",{children:"You need to login to update your profile"})})})})]})},D=Object(p.jsx)(o.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(b.a,{exact:!0,path:"/movie",component:y}),Object(p.jsx)(b.a,{exact:!0,path:"/",component:F}),Object(p.jsx)(b.a,{exact:!0,path:"/movie/:id",component:k}),Object(p.jsx)(b.a,{exact:!0,path:"/firebase-app",component:v}),Object(p.jsx)(b.a,{exact:!0,path:"/firebase-app/login",component:S}),Object(p.jsx)(b.a,{exact:!0,path:"/firebase-app/register",component:R}),Object(p.jsx)(b.a,{exact:!0,path:"/firebase-app/profile",component:C}),Object(p.jsx)(b.a,{exact:!0,path:"/firebase-app/edit-profile",component:A})]})});n.a.render(D,document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.ed33c5f5.chunk.js.map