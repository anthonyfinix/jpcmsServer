(this.webpackJsonpjptech=this.webpackJsonpjptech||[]).push([[0],{246:function(e,t,a){e.exports={content:"job_content__1AdaG"}},357:function(e,t,a){e.exports={wrapper:"sidebar_wrapper__1TluO"}},360:function(e,t,a){e.exports={wrapper:"header_wrapper__2Ks2h"}},377:function(e,t,a){e.exports={wrapper:"content_wrapper__3SaDL"}},395:function(e,t,a){},396:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),o=(a(395),a(396),a(30)),u=a(508),i=a(7),l=function(e){var t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.createContext("");return Object(i.jsxs)(s.Provider,{value:{notify:function(e){c(e),setTimeout((function(){return c("")}),7e3)}},children:[e.children,Object(i.jsx)(u.a,{open:!!n,autoHideDuration:6e3,message:n})]})},j=a(181),d=a(28),b=a(510),f=a(314),O=a(236),p=a(91),x=a(237),h=a.n(x),m=function(){return Object(i.jsx)(b.a,{position:"static",children:Object(i.jsxs)(f.a,{children:[Object(i.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(i.jsx)(h.a,{})}),Object(i.jsx)(p.a,{variant:"h6",children:"JPCMS"})]})})},v=a(357),g=a.n(v),w=function(){return Object(i.jsx)("div",{className:g.a.wrapper,children:Object(i.jsx)("h5",{children:"Sidebar"})})},D=a(105),C=a.n(D),S=a(202),N=a(17),R=a(358),k=a.n(R).a.create({baseURL:"https://jpcms.herokuapp.com/"});k.interceptors.request.use((function(e){var t=localStorage.getItem("JPtechSolutionAccessToken");return t&&(e.headers.authorization="Bearer ".concat(t)),e})),k.interceptors.response.use((function(e){var t=e.headers.authorization;return t&&localStorage.setItem("JPtechSolutionAccessToken",t.split(" ")[1]),e}));var P=k,Y=a(511),_=a(323),L=a(238),M=a(239),y=a(244),J=a(324),z=a(325),A=a(64),U=a.n(A),I=function(e){var t=e.open,a=e.handleClose,c=e.createJob,s=e.selected,u=e.updateJob,l=e.isUpdate,j=r.a.useState(""),d=Object(o.a)(j,2),b=d[0],f=d[1],O=r.a.useState(""),p=Object(o.a)(O,2),x=p[0],h=p[1],m=r.a.useState(""),v=Object(o.a)(m,2),g=v[0],w=v[1],D=r.a.useState(""),C=Object(o.a)(D,2),S=C[0],N=C[1],R=r.a.useState(""),k=Object(o.a)(R,2),P=k[0],A=k[1],I=r.a.useState(!1),E=Object(o.a)(I,2),T=E[0],F=E[1],B=r.a.useState(""),V=Object(o.a)(B,2),q=V[0],G=V[1],H=r.a.useState("".concat(U()().format("YYYY"),"-").concat(U()().format("MM"),"-").concat(U()().format("DD"))),K=Object(o.a)(H,2),Q=K[0],W=K[1],X=r.a.useState("".concat(U()().format("YYYY"),"-").concat(U()().format("MM"),"-").concat(U()().format("DD"))),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],te=r.a.useState(""),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1];return Object(n.useEffect)((function(){l&&s&&(f(s.customerName),h(s.serialNumber),w(s.model),N(s.issues),A(s.brand),F(s.status),G(s.amount),W("".concat(U()(s.receivedDate).format("YYYY"),"-").concat(U()(s.receivedDate).format("MM"),"-").concat(U()(s.receivedDate).format("DD"))),ee("".concat(U()(s.returnedDate).format("YYYY"),"-").concat(U()(s.returnedDate).format("MM"),"-").concat(U()(s.returnedDate).format("DD"))),re(s.detailedDescription))}),[l]),Object(i.jsx)(Y.a,{open:t,onClose:a,children:Object(i.jsxs)("div",{className:"add-new-service-wrapper",children:[Object(i.jsx)(_.a,{size:"small",value:b,onChange:function(e){return f(e.target.value)},label:"Customer Name",variant:"outlined"}),Object(i.jsx)(_.a,{size:"small",value:x,onChange:function(e){return h(e.target.value)},label:"Serial Number",variant:"outlined",type:"number"}),Object(i.jsx)(_.a,{size:"small",value:g,onChange:function(e){return w(e.target.value)},label:"Model",variant:"outlined"}),Object(i.jsx)(_.a,{size:"small",value:S,onChange:function(e){return N(e.target.value)},label:"Issues",variant:"outlined"}),Object(i.jsx)(_.a,{size:"small",value:P,onChange:function(e){return A(e.target.value)},label:"Brand",variant:"outlined"}),Object(i.jsxs)(L.a,{variant:"outlined",size:"small",children:[Object(i.jsx)(M.a,{id:"demo-simple-select-outlined-label",children:"Status"}),Object(i.jsxs)(y.a,{value:!0===T?"resolved":"returned",onChange:function(e){return F("resolved"===e.target.value)},children:[Object(i.jsx)(J.a,{value:"resolved",children:"Resolved"}),Object(i.jsx)(J.a,{value:"returned",children:"Return"})]})]}),Object(i.jsx)(_.a,{size:"small",value:q,onChange:function(e){return G(e.target.value)},label:"Amount",variant:"outlined"}),Object(i.jsx)(_.a,{id:"date",label:"Received Date",type:"date",defaultValue:Q,InputLabelProps:{shrink:!0},onChange:function(e){console.log("LOCAL",e.target.value),W(e.target.value)}}),Object(i.jsx)(_.a,{id:"date",label:"Returned Date",type:"date",defaultValue:$,InputLabelProps:{shrink:!0},onChange:function(e){return ee(e.target.value)}}),Object(i.jsx)(_.a,{value:ne,onChange:function(e){return re(e.target.value)},size:"small",label:"Detailed Description",multiline:!0,variant:"outlined"}),l?Object(i.jsx)(z.a,{onClick:function(){u({id:s._id,customerName:b,serialNumber:x,model:g,issues:S,brand:P,status:T,amount:q,receivedDate:Q,returnedDate:$,detailedDescription:ne})},children:"Update"}):Object(i.jsx)(z.a,{onClick:function(){c({customerName:b,serialNumber:x,model:g,issues:S,brand:P,status:T,amount:q,receivedDate:Q,returnedDate:$,detailedDescription:ne})},children:"Add New Job"})]})})},E=a(232),T=a(360),F=a.n(T),B=function(e){var t=e.addNew;return Object(i.jsxs)(E.a,{display:"flex",className:F.a.wrapper,justifyContent:"space-between",alignItems:"center",children:[Object(i.jsx)("h1",{children:"Jobs"}),Object(i.jsx)(z.a,{onClick:t,variant:"contained",children:"Add New"})]})},V=a(246),q=a.n(V),G=a(243),H=a.n(G),K=a(376),Q=a.n(K),W=a(363),X=a.n(W),Z=a(373),$=a.n(Z),ee=a(364),te=a.n(ee),ae=a(371),ne=a.n(ae),re=a(248),ce=a.n(re),se=a(247),oe=a.n(se),ue=a(365),ie=a.n(ue),le=a(366),je=a.n(le),de=a(368),be=a.n(de),fe=a(369),Oe=a.n(fe),pe=a(370),xe=a.n(pe),he=a(374),me=a.n(he),ve=a(367),ge=a.n(ve),we=a(372),De=a.n(we),Ce=a(375),Se=a.n(Ce),Ne=a(179),Re=function(){var e,t=r.a.useState(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],u=r.a.useState(!1),l=Object(o.a)(u,2),j=l[0],d=l[1],b=r.a.useState([]),f=Object(o.a)(b,2),O=f[0],p=f[1],x=function(){d(!1),c&&s(!1)},h=function(){return d(!0)},m=r.a.useRef(null),v=r.a.useState(null),g=Object(o.a)(v,2),w=g[0],D=g[1],R={Add:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(X.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(te.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(oe.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(ie.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(ce.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(je.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(ge.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(be.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(Oe.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(xe.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(ce.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(ne.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(oe.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(De.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(i.jsx)($.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(me.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(i.jsx)(Se.a,Object(N.a)(Object(N.a)({},e),{},{ref:t}))}))},k=function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/service",Object(N.a)({},t));case 2:if(e.sent.error){e.next=9;break}return x(),e.next=7,P.get("/service");case 7:a=e.sent,p(a.data.result);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(S.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/service",Object(N.a)({},t));case 2:if(a=e.sent,console.log(a),a.error){e.next=11;break}return x(),e.next=8,P.get("/service");case 8:n=e.sent,p(n.data.result),m.current=null;case 11:s(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.delete("/service/".concat(m.current._id));case 2:return e.next=4,P.get("/service");case 4:t=e.sent,p(t.data.result),D(null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){P.get("/service").then((function(e){p(e.data.result)}))}),[]),Object(i.jsxs)("div",{className:q.a.content,children:[Object(i.jsx)(B,{addNew:h}),Object(i.jsx)(H.a,{options:{search:!1,showTitle:!1,toolbar:!1},icons:R,className:q.a.wrapper,columns:[{field:"customerName",title:"Customer Name"},{field:"serialNumber",title:"Sr.No"},{field:"model",title:"Model"},{field:"receivedDate",title:"Rec Date"},{field:"returnedDate",title:"Ret Date"},{field:"amount",title:"Amount"}],data:(e=O,e.map((function(e){return{id:e._id,serialNumber:e.serialNumber,customerName:e.customerName,model:e.model,issue:e.issues,brand:e.brand,receivedDate:e.receivedDate,returnedDate:e.returnedDate,detailedDescription:e.detailedDescription,amount:e.amount}}))),actions:[{icon:function(){return Object(i.jsx)(Q.a,{})},tooltip:"Save User",onClick:function(e,t){D(e.target),P.get("/service/".concat(t.id)).then((function(e){m.current=e.data.result}))}}]}),Object(i.jsx)(I,{open:j,handleClose:x,createJob:k,updateJob:Y,selected:m.current,isUpdate:c}),Object(i.jsxs)(Ne.a,{id:"simple-menu",anchorEl:w,keepMounted:!0,open:Boolean(w),onClose:function(){return D(null)},children:[Object(i.jsx)(J.a,{onClick:_,children:"Delete"}),Object(i.jsx)(J.a,{onClick:function(){D(null),h(),s(!0)},children:"Update"})]})]})},ke=a(377),Pe=a.n(ke),Ye=function(){return Object(i.jsx)("div",{className:Pe.a.wrapper,children:Object(i.jsx)(d.c,{children:Object(i.jsx)(d.a,{exact:!0,path:"/",component:Re})})})},_e=r.a.createContext(null),Le=function(e){var t=r.a.useState(null),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(!0),u=Object(o.a)(s,2),l=u[0],j=u[1];return r.a.useEffect((function(){var e=localStorage.getItem("JPtechSolutionAccessToken");e?P.get("/user/login",{headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return!e.data.error&&c(e.data)})).finally((function(){return j(!1)})):j(!1)}),[]),l?Object(i.jsx)("h1",{children:"Loading User"}):Object(i.jsx)(_e.Provider,{value:{user:n,setUser:c,isUserLoading:l,setIsUserLoading:j},children:e.children})},Me=function(){var e=r.a.useContext(_e).user,t=Object(d.f)();return r.a.useEffect((function(){e||t.push("/login")}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{}),Object(i.jsxs)("div",{className:"content-wrapper",children:[Object(i.jsx)(w,{}),Object(i.jsx)(Ye,{})]})]})},ye=a(124),Je=function(){var e=Object(d.f)(),t=r.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],s=r.a.useState(""),u=Object(o.a)(s,2),l=u[0],j=u[1],b=r.a.useContext(_e),f=b.user,O=b.setUser;return r.a.useEffect((function(){f&&e.push("/")})),Object(i.jsx)(E.a,{padding:10,children:Object(i.jsx)(ye.a,{children:Object(i.jsxs)(E.a,{display:"flex",flexDirection:"column",padding:10,children:[Object(i.jsx)(_.a,{label:"username",value:n,variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)(_.a,{label:"password",value:l,variant:"outlined",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)(z.a,{onClick:function(){P.post("/user/login",{username:n,password:l}).then((function(e){e.data.error||O(e.data.user)}))},children:"Login"})]})})})},ze=function(){return Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/login",component:Je}),Object(i.jsx)(d.a,{exact:!0,path:"/",component:Me})]})};var Ae=function(){return Object(i.jsx)(Le,{children:Object(i.jsx)(j.a,{children:Object(i.jsx)(l,{children:Object(i.jsx)(ze,{})})})})},Ue=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,909)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(Ae,{})}),document.getElementById("root")),Ue()}},[[484,1,2]]]);
//# sourceMappingURL=main.bfb5ce53.chunk.js.map