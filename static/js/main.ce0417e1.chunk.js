(this.webpackJsonpthinkey=this.webpackJsonpthinkey||[]).push([[0],{68:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),i=n(5),o=n(18),u=n(3),j=n(6),l=n.n(j),b=n(13),d=n(8),p=n(19),h=n(20),O=n.n(h),f=(n(61),n(63),n(64),{apiKey:"AIzaSyDC69WPbw-YypjfK7NAbiZFDMjUjOiuGMU",authDomain:"thinkey-project.firebaseapp.com",projectId:"thinkey-project",storageBucket:"thinkey-project.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/thinkey",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDC69WPbw-YypjfK7NAbiZFDMjUjOiuGMU",REACT_APP_APP_ID:"1:503658872394:web:74c85bbd03255ff7a2f0b3",REACT_APP_AUTH_DOMAIN:"thinkey-project.firebaseapp.com",REACT_APP_MEASUREMENT_ID:"G-D2YVPRSC2L",REACT_APP_MESSAGING_SENDER_ID:"503658872394",REACT_APP_PROJECT_ID:"thinkey-project",REACT_APP_STORAGE_BUCKET:"thinkey-project.appspot.com"}).REACT_MESSAGING_SENDER_ID,appId:"1:503658872394:web:74c85bbd03255ff7a2f0b3",measurementId:"G-D2YVPRSC2L"});O.a.initializeApp(f);var m=O.a,x=O.a.auth(),y=O.a.firestore(),v=O.a.storage(),g=n(0),N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],j=Object(a.useState)(!0),d=Object(i.a)(j,2),p=d[0],h=d[1],O=Object(a.useState)(""),f=Object(i.a)(O,2),m=f[0],y=f[1],v=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},N=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,x.createUserWithEmailAndPasswordAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,x.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:N,className:"container",children:[Object(g.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:v,className:"authInput"}),Object(g.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:v,className:"authInput"}),Object(g.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),m&&Object(g.jsx)("span",{className:"authError",children:m})]}),Object(g.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},_=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new m.auth.GoogleAuthProvider:"github"===n&&(a=new m.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(N,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google",Object(g.jsx)(d.a,{icon:p.b,style:{marginLeft:10,color:"#ff0000"}})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github",Object(g.jsx)(d.a,{icon:p.a,style:{marginLeft:10,color:"#000000"}})]})]})]})},A=n(35),k=n(15),S=function(e){var t=e.thinkeyObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),j=Object(i.a)(u,2),p=j[0],h=j[1],O=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,y.doc("thinkey/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,v.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return o((function(e){return!e}))},m=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,y.doc("thinkey/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"thinkey",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:m,className:"container thinkeyEdit",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;h(t)},value:p,required:!0,placeholder:"Edit your thinkey",autoFocus:!0,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Thinkey",className:"formBtn"})]}),Object(g.jsx)("button",{onClick:f,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:t.text}),Object(g.jsx)("h6",{style:{marginTop:20,fontSize:10},children:t.displayName}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(g.jsxs)("div",{className:"thinkey__actions",children:[Object(g.jsx)("span",{onClick:O,children:Object(g.jsx)(d.a,{icon:k.d})}),Object(g.jsx)("span",{onClick:f,children:Object(g.jsx)(d.a,{icon:k.a})})]})]})})},C=n(73),w=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),j=u[0],p=u[1],h=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===j){e.next=12;break}return c=v.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,c.putString(j,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,y.collection("thinkey").add({text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 14:s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(d.a,{icon:k.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:k.c})]})]})]})})},P=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){y.collection("thinkey").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(A.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(w,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(S,{thinkeyObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},E=function(e){var t=e.userObj,n=e.refreshUser,c=Object(u.f)(),r=Object(a.useState)(t.displayName),s=Object(i.a)(r,2),o=s[0],j=s[1],d=function(){var e=Object(b.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===o){e.next=5;break}return e.next=4,t.updateProfile({displayName:o});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:o,autoFocus:!0,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"cancelBtn logOut",onClick:function(){x.signOut(),c.push("/")},children:"Log Out"})]})},I=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{to:"/",style:{marginRight:30},children:Object(g.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/profile",className:"profileInfo",children:[Object(g.jsx)(d.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},D=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(g.jsxs)(o.a,{children:[t&&Object(g.jsx)(I,{userObj:n}),Object(g.jsx)(u.c,{children:t?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(P,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/profile",children:Object(g.jsx)(E,{refreshUser:a,userObj:n})})]}):Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(_,{})})})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){u(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:n?Object(g.jsx)(D,{refreshUser:function(){var e=x.currentUser;u({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(68);s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ce0417e1.chunk.js.map