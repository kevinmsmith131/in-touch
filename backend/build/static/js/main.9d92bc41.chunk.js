(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),n=a(28),c=a.n(n),o=(a(74),a(53)),i=a.n(o),l=a(13),u=a(6),p=a(24),j=a(4),d=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isRetrieving:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isRetrieving:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isRetrieving:!1,error:t.payload};case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{following:[].concat(Object(p.a)(e.user.following),[t.payload])})});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{following:e.user.following.filter((function(e){return e!==t.payload}))})});default:return e}},b=a(0),f={user:JSON.parse(localStorage.getItem("user"))||null,isRetrieving:!1,error:!1},m=Object(r.createContext)(f),O=function(e){var t=e.children,a=Object(r.useReducer)(d,f),s=Object(u.a)(a,2),n=s[0],c=s[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))})),Object(b.jsx)(m.Provider,{value:{user:n.user,isRetrieving:n.isRetrieving,error:n.error,dispatch:c},children:t})},h=function(e){return{type:"LOGIN_SUCCESS",payload:e}},x=function(e){return{type:"LOGIN_FAILURE",payload:e}},v=function(e){var t=e.isHomepage,a=e.username,s=Object(r.useContext)(m),n=s.user,c=s.dispatch,o="http://localhost:3000/api/images";return Object(b.jsxs)("div",{className:"headerContainer",children:[Object(b.jsx)("div",{className:"headerLeft"}),Object(b.jsx)("button",{className:"logoutButton",onClick:function(){c(h(null)),localStorage.clear(),window.location.replace("http://localhost:3000/")},children:Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)(i.a,{className:"logoutButtonLogo"})})}),Object(b.jsx)("div",{className:"headerCenter",children:Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("span",{className:"logo",children:"InTouch"})})}),Object(b.jsx)("div",{className:"headerRight",children:t||n.username!==a?Object(b.jsx)(l.b,{to:"/profile/".concat(n.username),children:Object(b.jsx)("img",{src:n.profilePicture?o+n.profilePicture:o+"/user/defaultAvatar.jpg",alt:"",className:"headerProPic"})}):Object(b.jsx)("a",{href:"#top",children:Object(b.jsx)("img",{src:n.profilePicture?o+n.profilePicture:o+"/user/defaultAvatar.jpg",alt:"",className:"headerProPic"})})})]})},g=a(3),w=a.n(g),N=a(7),k=(a(86),a(54)),y=a.n(k),C=a(31),P=a.n(C),I=(a(87),function(e){var t=e.user,a="http://localhost:3000/api/images";return Object(b.jsx)(l.b,{to:"/profile/".concat(t.username),children:Object(b.jsxs)("li",{className:"followingbarFollowee",children:[Object(b.jsx)("img",{className:"followingbarFolloweeImg",src:t.profilePicture?a+t.profilePicture:a+"/user/defaultAvatar.jpg",alt:""}),Object(b.jsx)("span",{className:"followingbarFolloweeName",children:t.username})]})})}),_=a(5),D=a.n(_),L={info:function(){var e;return(e=console).log.apply(e,arguments)},error:function(){var e;return(e=console).log.apply(e,arguments)}},E=function(e){var t=e.user,a=Object(r.useState)([]),s=Object(u.a)(a,2),n=s[0],c=s[1];Object(r.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t||!t._id){e.next=6;break}return e.next=4,D.a.get("/users/following/".concat(t._id));case 4:a=e.sent,c(a.data.filter((function(e){return null!==e&&void 0!==e})));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),L.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);return Object(b.jsx)("div",{id:"followingbar",children:Object(b.jsxs)("div",{className:"followingbarWrapper",children:[Object(b.jsxs)("div",{className:"followingbarTitleWrapper",children:[Object(b.jsxs)("div",{className:"followingbarTitle",onClick:function(){return document.getElementById("followingbar").scrollTo(0,0)},children:[Object(b.jsx)(y.a,{className:"followeeLogo",htmlColor:"rgb(100, 100, 100)"}),Object(b.jsx)("p",{children:"Following"})]}),Object(b.jsx)("hr",{className:"followingbarHr"})]}),0===n.length?Object(b.jsxs)("div",{className:"noUsersFollowing",children:[Object(b.jsx)(P.a,{className:"noUsersFollowingIcon",fontSize:"large"}),"Following No Users"]}):Object(b.jsx)("ul",{className:"followingbarFollowees",children:n.map((function(e){return Object(b.jsx)(I,{user:e},e._id)}))})]})})},S=(a(106),a(107),a(56)),F=a.n(S),R=a(57),T=a.n(R),U=a(58),B=a.n(U),A=a(59),W=a.n(A),H=a(55),q=a.n(H),G=function(e){var t=e.isHomepage,a=Object(r.useContext)(m),s=a.user,n=a.dispatch,c="http://localhost:3000/api/images",o=Object(r.useRef)(),i=Object(r.useState)(null),p=Object(u.a)(i,2),d=p[0],f=p[1],O=Object(r.useState)("media"),x=Object(u.a)(O,2),v=x[0],g=x[1],k=function(){var e=Object(N.a)(w.a.mark((function e(){var t,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={userId:s._id,caption:o.current.value},!d){e.next=15;break}return a=new FormData,r="/post/"+Date.now()+d.name,a.append("name",r),a.append("file",d),t.content=r,e.prev=7,e.next=10,D.a.post("/upload",a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),L.error(e.t0);case 15:if(e.prev=15,!d&&!o.current.value){e.next=22;break}return e.next=19,D.a.post("/posts",t);case 19:window.location.reload(),e.next=23;break;case 22:alert("Cannot make an empty post");case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(15),L.error(e.t1);case 28:case"end":return e.stop()}}),e,null,[[7,12],[15,25]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(N.a)(w.a.mark((function e(){var t,a,r,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d){e.next=20;break}return t=new FormData,a="/post/"+Date.now()+d.name,t.append("name",a),t.append("file",d),e.next=8,D.a.post("/upload",t);case 8:return e.next=10,D.a.get("/users/",{params:{userId:s._id}});case 10:return r=e.sent,c={},o={},"coverPhoto"===v?(c=Object(j.a)(Object(j.a)({},r),{},{coverPicture:a}),o=Object(j.a)(Object(j.a)({},s),{},{coverPicture:a})):(c=Object(j.a)(Object(j.a)({},r),{},{profilePicture:a}),o=Object(j.a)(Object(j.a)({},s),{},{profilePicture:a})),e.next=16,D.a.put("/users/".concat(s._id),c);case 16:n(h(o)),window.location.reload(),e.next=21;break;case 20:alert("Cannot update without a picture");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),L.error(e.t0);case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(N.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o.current.value){e.next=9;break}return e.next=4,D.a.get("/users/",{params:{userId:s._id}});case 4:return t=e.sent,a=Object(j.a)(Object(j.a)({},t),{},{bio:o.current.value}),e.next=8,D.a.put("/users/".concat(s._id),a);case 8:window.location.reload();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),L.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),P=function(e){return f(e.target.files[0])};return Object(b.jsx)("div",{className:"makepost",children:Object(b.jsxs)("div",{className:"makepostWrapper",children:[Object(b.jsxs)("div",{className:"makepostTop",children:[t?Object(b.jsx)(l.b,{to:"/profile/".concat(s.username),children:Object(b.jsx)("img",{className:"makepostProPic",src:s.profilePicture?c+s.profilePicture:c+"/user/defaultAvatar.jpg",alt:""})}):Object(b.jsx)("a",{href:"#top",children:Object(b.jsx)("img",{className:"makepostProPic",src:s.profilePicture?c+s.profilePicture:c+"/user/defaultAvatar.jpg",alt:""})}),Object(b.jsx)("input",{className:"makepostInput",placeholder:"What would you like to tell the world, "+s.username+"?",ref:o,maxLength:"500"})]}),Object(b.jsx)("hr",{className:"makepostHr"}),d&&Object(b.jsxs)("div",{className:"makepostContentWrapper",children:[Object(b.jsx)("img",{className:"makepostContent",src:URL.createObjectURL(d),alt:""}),Object(b.jsx)(q.a,{className:"makepostContentCancel",onClick:function(){return f(null)}})]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"media"===v?k():"profilePic"===v||"coverPhoto"===v?y():"bio"===v?C():L.error("Invalid button press received")},children:[Object(b.jsx)("div",{className:"makepostBottom",children:Object(b.jsxs)("div",{className:"makepostOptions",children:[Object(b.jsxs)("label",{className:"makepostOption",htmlFor:"media",onClick:function(){return g("media")},children:[Object(b.jsx)(F.a,{className:"makepostIcon",htmlColor:"rgb(206, 33, 55)"}),Object(b.jsx)("span",{className:"makepostOptionText",children:"Media"}),Object(b.jsx)("input",{type:"file",style:{display:"none"},id:"media",accept:".png, .jpg, .jpeg",onChange:P})]}),Object(b.jsxs)("label",{className:"makepostOption",htmlFor:"proPic",onClick:function(){g("profilePic"),alert("Select the photo you wish to be your new profile picture, then click post, like you are making a normal post.")},children:[Object(b.jsx)(T.a,{className:"makepostIcon",htmlColor:"rgb(0, 102, 204"}),Object(b.jsx)("span",{className:"makepostOptionText",children:"Profile Picture"}),Object(b.jsx)("input",{type:"file",style:{display:"none"},id:"proPic",accept:".png, .jpg, .jpeg",onChange:P})]}),Object(b.jsxs)("label",{className:"makepostOption",htmlFor:"cover",onClick:function(){g("coverPhoto"),alert("Select the photo you wish to be your new cover photo, then click post, like you are making a normal post.")},children:[Object(b.jsx)(B.a,{className:"makepostIcon",htmlColor:"rgb(0, 180, 0)"}),Object(b.jsx)("span",{className:"makepostOptionText",children:"Cover Photo"}),Object(b.jsx)("input",{type:"file",style:{display:"none"},id:"cover",accept:".png, .jpg, .jpeg",onChange:P})]}),Object(b.jsxs)("label",{className:"makepostOption",onClick:function(){g("bio"),alert("Write your new bio in the text input area, as if you were writing a caption, then press post.")},children:[Object(b.jsx)(W.a,{className:"makepostIcon",htmlColor:"rgb(245, 176, 66)"}),Object(b.jsx)("span",{className:"makepostOptionText",children:"Bio"})]})]})}),Object(b.jsx)("div",{className:"makepostPostButtonSection",children:Object(b.jsx)("button",{className:"makepostPostButton",type:"submit",children:"Post"})})]})]})})},K=(a(108),a(33)),z=a.n(K),J=a(32),Y=a.n(J),V=a(61),M=a.n(V),$=a(133),Q=a(60);$.a.locale(Q);var X=new $.a("en-US"),Z=function(e){var t=e.post,a=e.isHomepage,s=Object(r.useState)(t.likes.length),n=Object(u.a)(s,2),c=n[0],o=n[1],i=Object(r.useState)({}),p=Object(u.a)(i,2),d=p[0],f=p[1],O=Object(r.useState)(!1),h=Object(u.a)(O,2),x=h[0],v=h[1],g=Object(r.useState)(!1),k=Object(u.a)(g,2),y=k[0],C=k[1],P="http://localhost:3000/api/images",I=Object(r.useContext)(m).user,_=a?"postDropdownHome":"postDropdownProfile",E=a?"postDropdownWidgetHome":"postDropdownWidgetProfile";Object(r.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/users?userId=".concat(t.userId));case 2:a=e.sent,f(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.userId]),Object(r.useEffect)((function(){v(t.likes.includes(I._id))}),[I,t.likes]);var S=function(){var e=Object(N.a)(w.a.mark((function e(){var a,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=prompt("Enter the new caption for the post."),"y"!==(null===(a=prompt("Enter Y to confirm or anything else to cancel. Casing does not matter."))||void 0===a?void 0:a.toLowerCase())){e.next=13;break}return e.prev=3,s=Object(j.a)(Object(j.a)({},t),{},{caption:r}),e.next=7,D.a.put("/posts/".concat(t._id),s);case 7:window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),L.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("y"!==(null===(a=prompt("Enter Y to confirm or anything else to cancel. Casing does not matter."))||void 0===a?void 0:a.toLowerCase())){e.next=11;break}return e.prev=2,e.next=5,D.a.delete("/posts/".concat(t._id),{data:t});case 5:window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),L.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"post",children:Object(b.jsxs)("div",{className:"postWrapper",children:[Object(b.jsxs)("div",{className:"postTop",children:[a?Object(b.jsx)(l.b,{to:"/profile/".concat(d.username),children:Object(b.jsx)("img",{className:"postProPic",src:d.profilePicture?P+d.profilePicture:P+"/user/defaultAvatar.jpg",alt:""})}):Object(b.jsx)("a",{href:"#top",children:Object(b.jsx)("img",{className:"postProPic",src:d.profilePicture?P+d.profilePicture:P+"/user/defaultAvatar.jpg",alt:""})}),Object(b.jsxs)("div",{className:"postTopText",children:[a?Object(b.jsx)(l.b,{to:"/profile/".concat(d.username),color:"black",children:Object(b.jsx)("span",{className:"postUsername",children:d.username})}):Object(b.jsx)("a",{href:"#top",children:Object(b.jsx)("span",{className:"postUsername",children:d.username})}),Object(b.jsx)("span",{className:"postDate",children:X.format(Date.now()-(Date.now()-new Date(t.createdAt).getTime()),"mini-now")})]}),y&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:_,children:[Object(b.jsxs)("div",{className:"postDropdownEntry",onClick:S,children:[Object(b.jsx)(M.a,{className:"postDropdownEdit"}),Object(b.jsx)("span",{className:"postDropdownEdit",children:"Edit Caption"})]}),Object(b.jsxs)("div",{className:"postDropdownEntry",onClick:F,children:[Object(b.jsx)(Y.a,{className:"postDropdownDelete"}),Object(b.jsx)("span",{className:"postDropdownDelete",children:"Delete Post"})]})]}),Object(b.jsx)("div",{className:E})]}),(null===t||void 0===t?void 0:t.userId)===(null===I||void 0===I?void 0:I._id)&&Object(b.jsx)(z.a,{className:"postOptions",style:{marginLeft:a?"80%":"75%"},onClick:function(){return C(!y)}})]}),Object(b.jsx)("span",{className:"postCaption",children:null===t||void 0===t?void 0:t.caption}),Object(b.jsx)("div",{className:"postCenter",children:Object(b.jsx)("img",{className:"postContent",src:P+(null===t||void 0===t?void 0:t.content),alt:""})}),Object(b.jsxs)("div",{className:"postBottom",children:[Object(b.jsx)("img",{className:"likeButton",src:"".concat(P,"/likeButton.png"),onClick:function(){try{D.a.put("/posts/"+t._id+"/like",{userId:I._id})}catch(e){}o(x?c-1:c+1),v(!x)},alt:""}),Object(b.jsx)("span",{className:"postNumLikes",children:c})]})]})})},ee=a(62),te=a.n(ee),ae=function(e){var t=e.username,a=e.isHomepage,s=Object(r.useState)([]),n=Object(u.a)(s,2),c=n[0],o=n[1],i=Object(r.useContext)(m).user,l=a||c.length>0||t===i.username?"homeFeedWrapper":"profileFeedWrapper";return Object(r.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,D.a.get("/posts/profile/"+t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,D.a.get("posts/feed/"+i._id);case 8:e.t0=e.sent;case 9:a=e.t0,o(a.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,i]),Object(b.jsx)("div",{className:"feed",children:Object(b.jsxs)("div",{className:l,children:[(t===i.username||t===i.userName)&&Object(b.jsx)(G,{isHomepage:a}),0===c.length?Object(b.jsxs)("div",{className:"noPosts",children:[Object(b.jsx)(te.a,{className:"noPostIcon",fontSize:"large"}),"No Posts Yet"]}):c.map((function(e){return Object(b.jsx)(Z,{post:e,isHomepage:a},e._id)}))]})})},re=(a(109),function(){var e=Object(r.useContext)(m).user;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{isHomepage:!0}),Object(b.jsxs)("div",{className:"homeContainer",children:[Object(b.jsx)(E,{user:e}),Object(b.jsx)(ae,{isHomepage:!0})]})]})}),se=(a(110),a(111),a(40)),ne=a.n(se),ce=a(39),oe=a.n(ce),ie=a(41),le=a.n(ie),ue=a(64),pe=a.n(ue),je=a(63),de=a.n(je),be=function(e){var t=e.user,a="http://localhost:3000/api/images",s=Object(r.useState)([]),n=Object(u.a)(s,2),c=n[0],o=n[1],i=Object(r.useContext)(m),p=i.user,d=i.dispatch,f=Object(r.useState)(p.following.includes(t._id)),O=Object(u.a)(f,2),h=O[0],x=O[1];Object(r.useEffect)((function(){x(p.following.includes(t._id))}),[p,t]),Object(r.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t||!t._id){e.next=6;break}return e.next=4,D.a.get("/users/followers/".concat(t._id));case 4:a=e.sent,o(a.data.filter((function(e){return null!==e&&void 0!==e})));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),L.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var v=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!h){e.next=7;break}return e.next=4,D.a.put("/users/".concat(t._id,"/unfollow"),{userId:p._id});case 4:d({type:"UNFOLLOW",payload:t._id}),e.next=10;break;case 7:return e.next=9,D.a.put("/users/".concat(t._id,"/follow"),{userId:p._id});case 9:d({type:"FOLLOW",payload:t._id});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),L.error(e.t0);case 15:x(!h),window.location.reload();case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(N.a)(w.a.mark((function e(a){var r,s,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(r=prompt("Enter your "+a+". There is a 40 character limit to keep information to the point.")).length>40&&(a=a.charAt(0).toUpperCase()+a.slice(1),r=a+" unspecified",alert(a+" input exceeded 40 character limit. "+a+" set to unspecified."),a=a.charAt(0).toLowerCase()+a.slice(1)),e.next=5,D.a.get("/users/",{params:{userId:t._id}});case 5:return s=e.sent,n={},"location"===a?n=Object(j.a)(Object(j.a)({},s),{},{location:r}):"job"===a?n=Object(j.a)(Object(j.a)({},s),{},{job:r}):"education"===a?n=Object(j.a)(Object(j.a)({},s),{},{education:r}):L.error("Invalid user information field selected"),e.next=10,D.a.put("/users/".concat(t._id),n);case 10:window.location.reload(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),L.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"profileinfo",children:Object(b.jsxs)("div",{className:"profileinfoItem",children:[t.username!==p.username&&(h?Object(b.jsx)("button",{className:"profileinfoUnfollowButton",onClick:v,children:Object(b.jsxs)("div",{className:"profileinfoUnfollowButtonContent",children:[Object(b.jsx)(de.a,{})," Unfollow"]})}):Object(b.jsx)("button",{className:"profileinfoFollowButton",onClick:v,children:Object(b.jsxs)("div",{className:"profileinfoFollowButtonContent",children:[Object(b.jsx)(pe.a,{})," Follow"]})})),Object(b.jsxs)("div",{className:"profileinfoMain",children:[Object(b.jsx)("h4",{className:"profileinfoTitle",children:"Information"}),Object(b.jsxs)("div",{className:"profileinfoPair",children:[p._id===t._id?Object(b.jsx)(oe.a,{className:"profileinfoKeySelf",htmlColor:"rgb(60, 60, 60)",onClick:function(){return g("location")}}):Object(b.jsx)(oe.a,{className:"profileinfoKey",htmlColor:"rgb(60, 60, 60)"}),Object(b.jsx)("span",{className:"profileinfoValue",children:t.location?t.location:"Location unspecified"})]}),Object(b.jsxs)("div",{className:"profileinfoPair",children:[p._id===t._id?Object(b.jsx)(ne.a,{className:"profileinfoKeySelf",htmlColor:"rgb(60, 60, 60)",onClick:function(){return g("job")}}):Object(b.jsx)(ne.a,{className:"profileinfoKey",htmlColor:"rgb(60, 60, 60)"}),Object(b.jsx)("span",{className:"profileinfoValue",children:t.job?t.job:"Job unspecified"})]}),Object(b.jsxs)("div",{className:"profileinfoPair",children:[p._id===t._id?Object(b.jsx)(le.a,{className:"profileinfoKeySelf",htmlColor:"rgb(60, 60, 60)",onClick:function(){return g("education")}}):Object(b.jsx)(le.a,{className:"profileinfoKey",htmlColor:"rgb(60, 60, 60)"}),Object(b.jsx)("span",{className:"profileinfoValue",children:t.education?t.education:"Education unspecified"})]})]}),Object(b.jsxs)("div",{className:"profileinfoFollowing",children:[Object(b.jsx)("h4",{className:"profileinfoTitle",children:"Followers"}),0===c.length?Object(b.jsxs)("div",{className:"noUsersFollowed",children:[Object(b.jsx)(P.a,{className:"noUsersFollowedIcon",fontSize:"large"}),"No Followers"]}):Object(b.jsx)("div",{className:"profileinfoFollowingList",children:c.map((function(e){return Object(b.jsx)(l.b,{to:"/profile/".concat(e.username),style:{textDecoration:"none"},children:Object(b.jsxs)("div",{className:"profileinfoFollowee",children:[Object(b.jsx)("img",{className:"profileinfoFolloweeProPic",src:e.profilePicture?a+e.profilePicture:a+"/user/defaultAvatar.jpg",alt:""}),Object(b.jsx)("span",{className:"profileinfoFolloweeUsername",children:e.username})]})},e._id)}))})]})]})})},fe=a(65),me=a.n(fe),Oe=a(66),he=a.n(Oe),xe=a(67),ve=a.n(xe),ge=a(8),we=function(){var e="http://localhost:3000/api/images",t=Object(r.useState)({}),a=Object(u.a)(t,2),s=a[0],n=a[1],c=Object(r.useState)(!1),o=Object(u.a)(c,2),i=o[0],l=o[1],p=Object(ge.h)().username,d=Object(r.useContext)(m),f=d.user,O=d.dispatch,x=Object(ge.g)();Object(r.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("/users?username=".concat(p));case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(r.useEffect)((function(){i&&l(!1)}),[s]);var g=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,r,n,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=prompt("Enter your new "+t+"."),"y"!==(null===(a=prompt("Enter Y to confirm or N to cancel. Casing does not matter."))||void 0===a?void 0:a.toLowerCase())){e.next=34;break}return e.prev=3,e.next=6,D.a.get("/users?username=".concat(p));case 6:if(n=e.sent,"email"!==t||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){e.next=12;break}return e.next=10,D.a.put("/users/email/".concat(s._id),{data:Object(j.a)(Object(j.a)({},n),{},{email:r})});case 10:e.next=28;break;case 12:if("username"!==t){e.next=21;break}return e.next=15,D.a.put("/users/username/".concat(s._id),{data:Object(j.a)(Object(j.a)({},n),{},{username:r})});case 15:c=e.sent,o=c.data.name,O(h(Object(j.a)(Object(j.a)({},f),{},{username:o}))),x.push("/profile/".concat(o)),e.next=28;break;case 21:if(!("password"===t&&r.length>=5)){e.next=26;break}return e.next=24,D.a.put("/users/password/".concat(s._id),{data:Object(j.a)(Object(j.a)({},n),{},{password:r})});case 24:e.next=28;break;case 26:return alert("Invalid ".concat(t,". Passwords must be at least 5 characters and emails must be in valid format.")),e.abrupt("return");case 28:alert("".concat(t," successfully changed.")),e.next=34;break;case 31:e.prev=31,e.t0=e.catch(3),L.error(e.t0);case 34:case"end":return e.stop()}}),e,null,[[3,31]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("y"!==(null===(t=prompt("Enter Y to confirm or N to cancel. Casing does not matter."))||void 0===t?void 0:t.toLowerCase())){e.next=11;break}return e.prev=2,e.next=5,D.a.delete("/users/".concat(f._id),{data:f});case 5:x.push("/register"),O(h(null)),localStorage.clear(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),L.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{isHomepage:!1,username:p}),Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)(E,{user:s}),Object(b.jsxs)("div",{className:"profileRight",children:[Object(b.jsxs)("div",{className:"profileCover",children:[Object(b.jsx)("img",{className:"profileCoverPic",src:s.coverPicture?e+s.coverPicture:e+"/user/defaultCover.png",alt:""}),Object(b.jsx)("img",{className:"profileProPic",src:s.profilePicture?e+s.profilePicture:e+"/user/defaultAvatar.jpg",alt:""})]}),i&&Object(b.jsxs)("div",{className:"profileDropdown triangle",children:[Object(b.jsxs)("div",{className:"profileDropdownEntry",onClick:function(){return g("email")},children:[Object(b.jsx)(me.a,{className:"profileDropdownEdit"}),Object(b.jsx)("span",{className:"profileDropdownEdit",children:"Change Email"})]}),Object(b.jsxs)("div",{className:"profileDropdownEntry",onClick:function(){return g("username")},children:[Object(b.jsx)(he.a,{className:"profileDropdownEdit"}),Object(b.jsx)("span",{className:"profileDropdownEdit",children:"Change Username"})]}),Object(b.jsxs)("div",{className:"profileDropdownEntry",onClick:function(){return g("password")},children:[Object(b.jsx)(ve.a,{className:"profileDropdownEdit"}),Object(b.jsx)("span",{className:"profileDropdownEdit",children:"Change Password"})]}),Object(b.jsxs)("div",{className:"profileDropdownEntry",onClick:k,children:[Object(b.jsx)(Y.a,{className:"profileDropdownDelete"}),Object(b.jsx)("span",{className:"profileDropdownDelete",children:"Delete Account"})]})]}),Object(b.jsxs)("div",{className:"profileInfo",children:[Object(b.jsx)("a",{href:"#top",children:Object(b.jsx)("h4",{className:"profileInfoName",children:s.username})}),Object(b.jsx)("span",{className:"profileInfoBio",children:s.bio}),(null===s||void 0===s?void 0:s._id)===(null===f||void 0===f?void 0:f._id)&&Object(b.jsx)(z.a,{className:"profileOptions",onClick:function(){return l(!i)}})]}),Object(b.jsxs)("div",{className:"profileRightBottom",children:[Object(b.jsx)(ae,{username:p,isHomepage:!1}),Object(b.jsx)(be,{user:s})]})]})]})]})},Ne=(a(112),function(){var e=Object(N.a)(w.a.mark((function e(t,a){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"LOGIN_START"}),e.prev=1,e.next=4,D.a.post("/auth/login",{email:t.email.current.value.toLowerCase(),password:t.password.current.value});case 4:r=e.sent,a(h(r.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),a(x(e.t0)),alert("No user exists with these credentials. Use Register Page for registration.");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()),ke=a(132),ye=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useContext)(m),s=a.isRetrieving,n=a.dispatch;return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("div",{className:"loginWrapper",children:[Object(b.jsxs)("div",{className:"loginLeft",children:[Object(b.jsx)("h3",{className:"loginLogo",children:"InTouch"}),Object(b.jsx)("span",{className:"loginDescription",children:"The quickest and easiest way to stay in touch."})]}),Object(b.jsx)("div",{className:"loginRight",children:Object(b.jsxs)("form",{className:"loginBox",onSubmit:function(a){a.preventDefault(),Ne({email:e,password:t},n)},children:[Object(b.jsx)("input",{className:"loginInput",placeholder:"Email",type:"email",ref:e,required:!0}),Object(b.jsx)("input",{className:"loginInput",placeholder:"Password",type:"password",ref:t,required:!0,minLength:"5"}),Object(b.jsx)("button",{className:"loginButton",type:"submit",disabled:s,children:s?Object(b.jsx)(ke.a,{color:"white",size:"20px"}):"Login"}),Object(b.jsx)(l.b,{to:"/register",children:Object(b.jsx)("div",{className:"loginCreateAccount",disabled:s,children:"Register Page"})})]})})]})})},Ce=(a(113),function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(r.useContext)(m).dispatch,c=Object(r.useRef)(),o=Object(r.useRef)(),i=Object(r.useRef)(),p=Object(r.useRef)(),j=function(){var e=Object(N.a)(w.a.mark((function e(t){var a,r,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s(!0),a=function(){return window.location.reload()},i.current.value===p.current.value){e.next=8;break}p.current.setCustomValidity("Passwords do not match"),s(!1),e.next=22;break;case 8:return r={username:c.current.value,email:o.current.value.toLowerCase(),password:i.current.value},e.prev=9,e.next=12,D.a.post("auth/register",r);case 12:l=e.sent,n(h(l.data)),s(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(9),alert("There is already a user with these credentials. Use Login Page for logging in."),s(!1),setTimeout(a,3e3);case 22:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"register",children:Object(b.jsxs)("div",{className:"registerWrapper",children:[Object(b.jsxs)("div",{className:"registerLeft",children:[Object(b.jsx)("h3",{className:"registerLogo",children:"InTouch"}),Object(b.jsx)("span",{className:"registerDescription",children:"The quickest and easiest way to stay in touch."})]}),Object(b.jsx)("div",{className:"registerRight",children:Object(b.jsxs)("form",{className:"registerBox",onSubmit:j,children:[Object(b.jsx)("input",{className:"registerInput",placeholder:"Email",ref:o,type:"email",required:!0}),Object(b.jsx)("input",{className:"registerInput",placeholder:"Username",ref:c,required:!0}),Object(b.jsx)("input",{className:"registerInput",placeholder:"Password",type:"password",ref:i,minLength:"5",required:!0}),Object(b.jsx)("input",{className:"registerInput",placeholder:"Confirm Password",type:"password",ref:p,minLength:"5",required:!0}),Object(b.jsx)("button",{className:"registerButton",type:"submit",disabled:a,children:a?Object(b.jsx)(ke.a,{color:"white",size:"20px"}):"Create Account"}),Object(b.jsx)(l.b,{to:"/login",children:Object(b.jsx)("div",{className:"registerButtonLogin",disabled:a,children:"Login Page"})})]})})]})})}),Pe=function(){var e=Object(r.useContext)(m).user;return Object(b.jsx)(l.a,{children:Object(b.jsxs)(ge.d,{children:[Object(b.jsx)(ge.b,{exact:!0,path:"/",children:e?Object(b.jsx)(re,{}):Object(b.jsx)(Ce,{})}),Object(b.jsx)(ge.b,{path:"/login",children:e?Object(b.jsx)(ge.a,{to:"/"}):Object(b.jsx)(ye,{})}),Object(b.jsx)(ge.b,{path:"/register",children:e?Object(b.jsx)(ge.a,{to:"/"}):Object(b.jsx)(Ce,{})}),Object(b.jsx)(ge.b,{path:"/profile/:username",children:Object(b.jsx)(we,{})})]})})};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{children:Object(b.jsx)(Pe,{})})}),document.getElementById("root"))},74:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.9d92bc41.chunk.js.map