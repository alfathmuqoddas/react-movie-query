(this["webpackJsonpreact-movie-query"]=this["webpackJsonpreact-movie-query"]||[]).push([[0],{49:function(e,t,c){},51:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(10),n=c(41),a=c.n(n),r=(c(49),c(0)),i=c.n(r),l=c(1),j=c(11),o=c(15),b=c(14),d=(c(51),c(37)),u=c(42),m=c(25),h=c(23),x=c(5),p=Object(u.a)({apiKey:"AIzaSyDLjXox2BBmOp_RRjVaSKfpGA7QFZI_0rQ",authDomain:"fir-crud-94681.firebaseapp.com",projectId:"fir-crud-94681",storageBucket:"fir-crud-94681.appspot.com",messagingSenderId:"456468945866",appId:"1:456468945866:web:d6954e993d07b4f3aecd33"}),O=Object(m.e)(),f=Object(h.b)();console.log(p),console.log(O);var v=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),o=r[0],b=r[1],u=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(m.a)(Object(m.b)(O,"tasks"),{title:c,desc:o,createdAt:new Date});case 3:n(""),b("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(s.useState)([]),p=Object(j.a)(h,2),v=p[0],y=p[1];Object(s.useEffect)((function(){var e=Object(m.g)(Object(m.b)(O,"tasks")),t=Object(m.f)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),y(t)}));return function(){return t()}}),[]);var w=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(Object(m.d)(O,"tasks",t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=f.currentUser;return console.log(k),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsx)(N,{children:Object(x.jsxs)("div",{className:"container",children:[k?Object(x.jsxs)("div",{className:"my-5",children:[Object(x.jsx)("h3",{className:"text-center mb-3",children:"Add Task"}),Object(x.jsxs)("form",{onSubmit:u,className:"mx-auto",style:{width:"500px"},children:[Object(x.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"enter title..",value:c,onChange:function(e){return n(e.target.value)}}),Object(x.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"enter description..",value:o,onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"+"})]})]}):Object(x.jsx)("div",{className:"text-center my-5",children:Object(x.jsx)("h3",{children:"Login to Create Task"})}),Object(x.jsx)("div",{className:"mx-auto mb-5",style:{width:"500px"},children:v.map((function(e){return Object(x.jsxs)("div",{className:"task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:e.title}),Object(x.jsx)("p",{children:e.desc})]}),k?Object(x.jsx)("button",{onClick:function(){return w(e.id)},className:"btn btn-danger rounded",children:"\ud83d\uddd1"}):Object(x.jsx)("div",{})]},e.id)}))})]})})]})},g=function e(t){e.defaultProps={navColor:"bg-dark"};var c=f.currentUser,s=Object(b.e)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(x.jsx)("div",{className:"nav-header",children:Object(x.jsx)("div",{className:"nav-title",children:Object(x.jsx)(o.b,{to:"/firebase-app",className:"text-light text-decoration-none",children:"React Firebase"})})}),Object(x.jsx)("div",{className:"nav-btn",children:Object(x.jsxs)("label",{htmlFor:"nav-check",children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]})}),c?Object(x.jsxs)("div",{className:"nav-links",children:[Object(x.jsx)("button",{className:"btn btn-danger",children:c.email}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),Object(h.d)(f).then((function(){s.push("/firebase-app")}))},children:"Logout"})]}):Object(x.jsxs)("div",{className:"nav-links",children:[Object(x.jsx)(o.b,{to:"/firebase-app/login",children:"Login"}),Object(x.jsx)(o.b,{to:"/firebase-app/register",children:"Register"})]})]})})},N=function(e){var t=e.children;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"container my-1 px-md-5",style:{"font-family":"sans-serif"},children:t}),Object(x.jsx)("div",{className:"py-5 bg-light",children:Object(x.jsxs)("div",{className:"container px-md-5 text-center",children:["Alfath Muqoddas \xa92021 ",Object(x.jsx)("a",{href:"https://omdbapi.com",target:"_blank",className:"mx-2",children:"OMDb API"}),Object(x.jsx)(o.b,{to:"/",children:"Home"})]})})]})},y=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),b=r[0],d=r[1],u=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://www.omdbapi.com/?s=".concat(t,"&apikey=af1284eb&"),e.next=3,fetch(c);case 3:return s=e.sent,e.next=6,s.json();case 6:(a=e.sent).Search&&n(a.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){u(b)}),[b]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N,{children:[Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("h1",{className:"mb-2 mt-5",children:"React Movie App"}),Object(x.jsx)("form",{className:"input-group mx-auto w-100",style:{width:"500px"},children:Object(x.jsx)("input",{type:"text",className:"form-control",value:b,onChange:function(e){return d(e.target.value)},placeholder:"Type to search..."})})]}),Object(x.jsx)("div",{className:"row row-cols-md-4 row-cols-2 my-5 gy-2 gx-0",children:c.map((function(e,t){return Object(x.jsx)("div",{className:"col bg-dark",children:Object(x.jsx)("div",{className:"p-2 bright position-relative",children:Object(x.jsxs)(o.b,{to:{pathname:"/movie/".concat(e.imdbID),state:{movie:e}},children:[Object(x.jsx)("img",{src:e.Poster,alt:"movie",className:"w-100 rounded-3"}),Object(x.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle middle text-light",children:Object(x.jsx)("h1",{children:"+"})})]})})})}))})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))},k=function(){return Object(x.jsxs)("div",{className:"container my-5",children:[Object(x.jsx)(o.b,{to:"/movie",className:"text-decoration-none",children:Object(x.jsx)("h4",{children:"Movie Query App"})}),Object(x.jsx)(o.b,{to:"/firebase-app",className:"text-decoration-none",children:Object(x.jsx)("h4",{children:"Firebase CRUD App"})})]})},S=function(){var e=Object(b.f)().state.movie.imdbID,t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),o=Object(j.a)(r,2),d=o[0],u=o[1],m=function(){var t=Object(l.a)(i.a.mark((function t(){var c,s,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="https://www.omdbapi.com/?i=".concat(e,"&apikey=af1284eb&"),console.log(c),t.next=5,fetch(c);case 5:return s=t.sent,t.next=8,s.json();case 8:n=t.sent,a(n),u(!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){m()}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{children:d?Object(x.jsxs)("div",{className:"row my-5 gx-5",children:[Object(x.jsx)("div",{className:"col-12 col-md-4 mb-4 text-center",children:Object(x.jsx)("img",{src:n.Poster,alt:"movie-poster",className:"w-100 rounded-3"})}),Object(x.jsxs)("div",{className:"col-12 col-md-8",children:[Object(x.jsxs)("h2",{className:"text-center",children:[n.Title," ",Object(x.jsxs)("small",{children:["(",n.Year,")"]})]}),Object(x.jsxs)("div",{className:"d-flex gap-5 mb-3 justify-content-center",children:[Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("p",{className:"mb-1",children:"IMDb Rating"}),Object(x.jsx)("h1",{children:n.imdbRating})]}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("p",{className:"mb-1",children:"Metascore"}),Object(x.jsx)("h1",{children:n.Metascore})]})]}),Object(x.jsx)("p",{children:n.Plot}),Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Genre:"})," ",n.Genre]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Rated:"})," ",n.Rated]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Director:"})," ",n.Director]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Writer:"})," ",n.Writer]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Starring:"})," ",n.Actors]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Release:"})," ",n.Released]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsx)("strong",{children:"Duraion:"})," ",n.Runtime]})]})]})]}):Object(x.jsx)("div",{className:"text-center my-5",children:Object(x.jsx)("h1",{children:"Loading..."})})})})},F=function(){var e=Object(h.b)(),t=e.currentUser,c=Object(s.useState)(""),n=Object(j.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),d=l[0],u=l[1],m=Object(b.e)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),t?Object(x.jsx)("div",{className:"container my-5",children:Object(x.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(x.jsxs)("div",{className:"container my-5",children:[Object(x.jsx)("h3",{className:"text-center",children:"Login"}),Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Object(h.c)(e,a,d).then((function(e){m.push("/firebase-app");e.user})).catch((function(e){var t=e.message;alert(t)})),r(""),u("")},className:"mx-auto my-4",style:{width:"500px"},children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:a,onChange:function(e){return r(e.target.value)},required:!0}),Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:d,onChange:function(e){return u(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Login"})]}),Object(x.jsxs)("p",{className:"text-center",children:["Doesn't have an account? Register ",Object(x.jsx)(o.b,{to:"/firebase-app/register",children:"here"})]})]})]})},D=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(j.a)(a,2),i=r[0],l=r[1],d=Object(b.e)(),u=Object(h.b)(),m=u.currentUser;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),m?Object(x.jsx)("div",{className:"container my-5",children:Object(x.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(x.jsxs)("div",{className:"container my-5",children:[Object(x.jsx)("h3",{className:"text-center",children:"Register New Account"}),Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(h.a)(u,c,i).then((function(e){var t=e.user;console.log(t)})).then((function(){d.push("/edit-profile")})).catch((function(e){e.code;var t=e.message;console.log(t)}))},className:"mx-auto my-4",style:{width:"500px"},children:[Object(x.jsx)("label",{htmlFor:"email",children:"Register Email"}),Object(x.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:c,onChange:function(e){return n(e.target.value)},required:!0}),Object(x.jsx)("label",{htmlFor:"password",children:"Create Password"}),Object(x.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:i,onChange:function(e){return l(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Register"})]}),Object(x.jsxs)("div",{className:"text-center",children:["Already have an account? Login ",Object(x.jsx)(o.b,{to:"/firebase-app/login",children:"here"})]})]})]})},R=function(){var e=Object(h.b)().currentUser;return console.log(e),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),e?Object(x.jsx)("h3",{children:"Edit Profile"}):Object(x.jsx)("h3",{children:"You need to login to update your profile"})]})},C=Object(x.jsx)(o.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(b.a,{exact:!0,path:"/movie",component:y}),Object(x.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(x.jsx)(b.a,{exact:!0,path:"/movie/:id",component:S}),Object(x.jsx)(b.a,{exact:!0,path:"/firebase-app",component:v}),Object(x.jsx)(b.a,{exact:!0,path:"/firebase-app/login",component:F}),Object(x.jsx)(b.a,{exact:!0,path:"/firebase-app/register",component:D}),Object(x.jsx)(b.a,{exact:!0,path:"/firebase-app/edit-profile",component:R})]})});a.a.render(C,document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.025c03ad.chunk.js.map