(this["webpackJsonpreact-movie-query"]=this["webpackJsonpreact-movie-query"]||[]).push([[0],{49:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(10),a=c(41),n=c.n(a),r=(c(49),c(0)),i=c.n(r),l=c(1),j=c(11),o=c(14),b=c(4),d=function(e){var t=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"container my-1 px-md-5",children:t}),Object(b.jsx)("div",{className:"py-5 bg-light",children:Object(b.jsx)("div",{className:"container px-md-5 text-center",children:"Alfath Muqoddas \xa92021"})})]})},m=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),m=r[0],u=r[1],h=Object(s.useState)(!1),x=Object(j.a)(h,2),p=x[0],O=x[1],f=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://www.omdbapi.com/?s=".concat(m,"&apikey=af1284eb&"),e.next=4,fetch(c);case 4:return s=e.sent,e.next=7,s.json();case 7:(n=e.sent).Search&&(a(n.Search),O(!0)),u("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(b.jsxs)("div",{className:"container px-md-5",children:[Object(b.jsx)("a",{href:"#/movie",className:"navbar-brand",children:"React Movie App"}),Object(b.jsxs)("form",{className:"d-flex",onSubmit:f,children:[Object(b.jsx)("input",{type:"text",className:"form-control me-2",value:m,onChange:function(e){return u(e.target.value)},placeholder:"Search for movies..."}),Object(b.jsx)("input",{type:"submit",className:"btn btn-danger",value:"Search"})]})]})}),Object(b.jsx)(d,{children:p?Object(b.jsx)("div",{className:"row row-cols-md-4 row-cols-2 py-5 gy-2 gx-2 gx-lg-0",children:c.map((function(e,t){return Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center bright position-relative rounded-3",style:{maxWidth:"250px",height:"375px",backgroundColor:"black",padding:"5px"},children:Object(b.jsxs)(o.b,{to:{pathname:"/movie/".concat(e.imdbID),state:{movie:e}},children:[Object(b.jsx)("img",{src:e.Poster,alt:"movie",className:"rounded-3",style:{maxWidth:"100%",maxHeight:"100%"}}),Object(b.jsxs)("div",{className:"position-absolute  top-50 start-50  translate-middle  middle  text-center  text-light",children:[Object(b.jsx)("span",{className:"fw-bold fst-italic",children:e.Title})," (",e.Year,")"]})]})})},t)}))}):Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"71vh"},children:Object(b.jsx)("h1",{className:"fst-italic",children:"Search Movies"})})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},h=c(15),x=function(){return Object(b.jsxs)("div",{className:"container my-5",children:[Object(b.jsx)(o.b,{to:"/movie",className:"text-decoration-none",children:Object(b.jsx)("h4",{children:"Movie Query App"})}),Object(b.jsx)(o.b,{to:"/firebase-app",className:"text-decoration-none",children:Object(b.jsx)("h4",{children:"Firebase Issue Tracker"})}),Object(b.jsx)(o.b,{to:"/react-drums",className:"text-decoration-none",children:Object(b.jsx)("h4",{children:"React Drums"})})]})},p=function(){var e=Object(h.f)().state.movie.imdbID,t=Object(s.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!1),o=Object(j.a)(r,2),m=o[0],u=o[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(l.a)(i.a.mark((function t(){var c,s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="https://www.omdbapi.com/?i=".concat(e,"&apikey=af1284eb&"),console.log(c),t.next=5,fetch(c);case 5:return s=t.sent,t.next=8,s.json();case 8:a=t.sent,n(a),u(!0),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(b.jsx)("div",{className:"container px-md-5",children:Object(b.jsx)("a",{href:"#/movie",className:"navbar-brand",children:"React Movie App"})})}),Object(b.jsx)(d,{children:m?Object(b.jsxs)("div",{className:"row my-5 gx-5",children:[Object(b.jsx)("div",{className:"col-12 col-md-4 mb-4 text-center",children:Object(b.jsx)("img",{src:a.Poster,alt:"movie-poster",className:"w-100 rounded-3"})}),Object(b.jsxs)("div",{className:"col-12 col-md-8",children:[Object(b.jsxs)("h2",{className:"text-center",children:[a.Title," ",Object(b.jsxs)("small",{children:["(",a.Year,")"]})]}),Object(b.jsxs)("div",{className:"d-flex gap-5 mb-3 justify-content-center",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("p",{className:"mb-1",children:"IMDb Rating"}),Object(b.jsx)("h1",{children:a.imdbRating})]}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("p",{className:"mb-1",children:"Metascore"}),Object(b.jsx)("h1",{children:a.Metascore})]})]}),Object(b.jsx)("p",{children:a.Plot}),Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Genre:"})," ",a.Genre]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Rated:"})," ",a.Rated]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Director:"})," ",a.Director]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Writer:"})," ",a.Writer]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Starring:"})," ",a.Actors]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Release:"})," ",a.Released]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Duration:"})," ",a.Runtime]})]})]})]}):Object(b.jsx)("div",{className:"text-center my-5",children:Object(b.jsx)("h1",{children:"Loading..."})})})]})},O=c(29),f=c(44),v=c(20),g=c(18),N=(c(60),function e(t){e.defaultProps={navColor:"bg-dark"};var c=S.currentUser,s=Object(h.e)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"nav",style:{fontFamily:"sans-serif"},children:[Object(b.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(b.jsx)("div",{className:"nav-header",children:Object(b.jsx)("div",{className:"nav-title",children:Object(b.jsx)(o.b,{to:"/firebase-app",className:"text-light text-decoration-none",children:"React Firebase Issue Tracker"})})}),Object(b.jsx)("div",{className:"nav-btn",children:Object(b.jsxs)("label",{htmlFor:"nav-check",children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})}),c?Object(b.jsxs)("div",{className:"nav-links",children:[Object(b.jsx)(o.b,{to:"/firebase-app/profile",children:c.displayName||c.email}),Object(b.jsx)("button",{className:"btn-nav",onClick:function(e){e.preventDefault(),Object(g.e)(S).then((function(){s.push("/firebase-app")}))},children:"Logout"})]}):Object(b.jsxs)("div",{className:"nav-links",children:[Object(b.jsx)(o.b,{to:"/firebase-app/login",children:"Login"}),Object(b.jsx)(o.b,{to:"/firebase-app/register",children:"Register"})]})]})})}),y=Object(f.a)({apiKey:"AIzaSyDLjXox2BBmOp_RRjVaSKfpGA7QFZI_0rQ",authDomain:"fir-crud-94681.firebaseapp.com",projectId:"fir-crud-94681",storageBucket:"fir-crud-94681.appspot.com",messagingSenderId:"456468945866",appId:"1:456468945866:web:d6954e993d07b4f3aecd33"}),w=Object(v.e)(),S=Object(g.b)();console.log(y),console.log(w);var k=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),o=r[0],m=r[1],u=Object(s.useState)("Low"),h=Object(j.a)(u,2),x=h[0],p=h[1],f=S.currentUser;function g(){return(g=Object(l.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=f.uid,e.next=4,Object(v.a)(Object(v.b)(w,"tasks"),{title:c,desc:o,sev:x,uid:s,IssueID:(new Date).valueOf(),createdAt:new Date});case 4:a(""),m("");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=Object(s.useState)([]),k=Object(j.a)(y,2),F=k[0],D=k[1];return Object(s.useEffect)((function(){var e=Object(v.h)(Object(v.b)(w,"tasks"),Object(v.g)("createdAt","desc")),t=Object(v.f)(e,(function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),D(t)}));return function(){return t()}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(d,{children:Object(b.jsxs)("div",{className:"container",children:[f?Object(b.jsxs)("div",{className:"my-5",children:[Object(b.jsx)("h3",{className:"text-center mb-3",children:"Add Issue"}),Object(b.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},className:"mx-auto w-100",style:{maxWidth:"500px"},children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{name:"description",type:"text",className:"form-control mb-2",placeholder:"enter Issue Description",value:c,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"severity",children:"Severity"}),Object(b.jsxs)("select",{className:"form-select mb-3",value:x,onChange:function(e){return p(e.target.value)},name:"severity",children:[Object(b.jsx)("option",{value:"Low",children:"Low"}),Object(b.jsx)("option",{value:"Medium",children:"Medium"}),Object(b.jsx)("option",{value:"High",children:"High"})]}),Object(b.jsx)("label",{htmlFor:"assigned",children:"Assigned To"}),Object(b.jsx)("input",{name:"assigned",type:"text",className:"form-control mb-2",placeholder:"Enter Assigned To",value:o,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"+"})]})]}):Object(b.jsx)("div",{className:"text-center my-5",children:Object(b.jsx)("h3",{children:"Login to Create Issue"})}),Object(b.jsx)("div",{className:"mx-auto mb-5 w-100",style:{maxWidth:"500px"},children:F.map((function(e){return Object(b.jsx)("div",{className:"task d-flex justify-content-between align-items-center bg-light rounded p-3 my-3",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Issue ID: ",e.IssueID]}),Object(b.jsxs)("h4",{children:["Description: ",e.title]}),Object(b.jsxs)("p",{children:["Severity: ",e.sev]}),Object(b.jsxs)("p",{children:["Assigned To: ",e.desc]})]})},e.id)}))})]})})]})},F=function(){var e=Object(g.b)(),t=e.currentUser,c=Object(s.useState)(""),a=Object(j.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),d=l[0],m=l[1],u=Object(h.e)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),t?Object(b.jsx)("div",{className:"container my-5",children:Object(b.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(b.jsxs)("div",{className:"container my-5",children:[Object(b.jsx)("h3",{className:"text-center",children:"Login"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Object(g.d)(e,n,d).then((function(e){u.push("/firebase-app")})).catch((function(e){alert(e.message)})),r(""),m("")},className:"mx-auto my-4 w-100",style:{maxWidth:"500px"},children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:d,onChange:function(e){return m(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Login"})]}),Object(b.jsxs)("p",{className:"text-center",children:["Doesn't have an account? Register ",Object(b.jsx)(o.b,{to:"/firebase-app/register",children:"here"})]})]})]})},D=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(j.a)(n,2),i=r[0],l=r[1],d=Object(h.e)(),m=Object(g.b)(),u=m.currentUser;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),u?Object(b.jsx)("div",{className:"container my-5",children:Object(b.jsx)("h3",{className:"text-center",children:"You Already Logged In"})}):Object(b.jsxs)("div",{className:"container my-5",children:[Object(b.jsx)("h3",{className:"text-center",children:"Register New Account"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(g.a)(m,c,i).then((function(e){var t=e.user;console.log(t)})).then((function(){d.push("/firebase-app/edit-profile")})).catch((function(e){alert(e.message)}))},className:"mx-auto my-4 w-100",style:{maxWidth:"500px"},children:[Object(b.jsx)("label",{htmlFor:"email",children:"Register Email"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control mt-2 mb-3",placeholder:"enter email...",value:c,onChange:function(e){return a(e.target.value)},required:!0}),Object(b.jsx)("label",{htmlFor:"password",children:"Create Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control my-2",placeholder:"enter password...",value:i,onChange:function(e){return l(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary",value:"Register"})]}),Object(b.jsxs)("div",{className:"text-center",children:["Already have an account? Login ",Object(b.jsx)(o.b,{to:"/firebase-app/login",children:"here"})]})]})]})},I=function(){var e=Object(g.b)().currentUser,t=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)(Object(v.d)(w,"tasks",t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(s.useState)([]),a=Object(j.a)(c,2),n=a[0],r=a[1];return Object(g.c)(S,(function(e){if(e){var t=Object(v.h)(Object(v.b)(w,"tasks"),Object(v.i)("uid","==",e.uid),Object(v.g)("createdAt","desc")),c=Object(v.f)(t,(function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return c()}}})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(d,{children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"my-5",children:[Object(b.jsx)("h3",{className:"text-center",children:"User Profile"}),Object(b.jsx)("p",{children:e.displayName}),Object(b.jsx)("p",{children:e.photoURL}),Object(b.jsx)("p",{children:e.email}),Object(b.jsx)(o.b,{to:"/firebase-app/edit-profile",children:Object(b.jsx)("button",{className:"btn btn-primary text-light",children:"Edit Profile"})})]}),Object(b.jsx)("div",{className:"mx-auto mb-5 w-100",style:{maxWidth:"500px"},children:n.map((function(e){return Object(b.jsxs)("div",{className:"task d-flex shadowHover justify-content-between align-items-center shadow-sm rounded-3 p-2 my-3",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Issue ID: ",e.IssueID]}),Object(b.jsxs)("h4",{children:["Description: ",e.title]}),Object(b.jsxs)("p",{children:["Severity: ",e.sev]}),Object(b.jsxs)("p",{children:["Assigned To: ",e.desc]})]}),Object(b.jsx)("button",{onClick:function(){return t(e.id)},className:"btn btn-danger rounded",children:"\ud83d\uddd1"})]},e.id)}))})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"my-5",children:Object(b.jsx)("h3",{children:"You need to login to see your profile"})})})})]})},A=function(){var e=Object(g.b)().currentUser,t=Object(s.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],m=i[1],u=Object(h.e)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(d,{children:e?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"my-5",children:[Object(b.jsx)("h3",{className:"text-center",children:"Edit Profile"}),Object(b.jsxs)("form",{onSubmit:function(t){Object(g.f)(e,{displayName:a,photoURL:l}).then((function(){u.push("/firebase-app")})).catch((function(e){alert("error")})),n(""),m("")},className:"mx-auto my-4 w-100",style:{maxWidth:"500px"},children:[Object(b.jsx)("label",{htmlFor:"displayName",children:"Edit UserName"}),Object(b.jsx)("input",{type:"text",name:"displayName",className:"form-control mt-2 mb-3",placeholder:"edit display name...",value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("label",{htmlFor:"avatar",children:"Edit Avatar"}),Object(b.jsx)("input",{type:"text",name:"avatar",className:"form-control my-2",placeholder:"add image url",value:l,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("input",{type:"submit",className:"input-group-text btn btn-primary me-3",value:"Apply"}),Object(b.jsx)(o.b,{to:"/firebase-app",children:"Edit Later"})]})]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"my-5",children:Object(b.jsx)("h3",{children:"You need to login to update your profile"})})})})]})},R=Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(h.a,{exact:!0,path:"/movie",component:m}),Object(b.jsx)(h.a,{exact:!0,path:"/",component:x}),Object(b.jsx)(h.a,{exact:!0,path:"/movie/:id",component:p}),Object(b.jsx)(h.a,{exact:!0,path:"/firebase-app",component:k}),Object(b.jsx)(h.a,{exact:!0,path:"/firebase-app/login",component:F}),Object(b.jsx)(h.a,{exact:!0,path:"/firebase-app/register",component:D}),Object(b.jsx)(h.a,{exact:!0,path:"/firebase-app/profile",component:I}),Object(b.jsx)(h.a,{exact:!0,path:"/firebase-app/edit-profile",component:A})]})});n.a.render(R,document.getElementById("root")),u()}},[[61,1,2]]]);
//# sourceMappingURL=main.c647a6ec.chunk.js.map