(this["webpackJsonpques-app"]=this["webpackJsonpques-app"]||[]).push([[0],{24:function(e,t,n){},58:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(51),i=n.n(a),o=(n(58),n.p,n(24),n(19)),r=o.a.initializeApp({apiKey:"AIzaSyA_hz_HhLxK3aOKz6BAMthQ04VyWQZr5yE",authDomain:"quesapp-4df8c.firebaseapp.com",projectId:"quesapp-4df8c",storageBucket:"quesapp-4df8c.appspot.com",messagingSenderId:"391720005208",appId:"1:391720005208:web:2b846806aab768dfb3e42d",measurementId:"G-NTWW838H92"}),l=n(7),u=n(10),d=n(12),h=(n(63),n(2)),j=function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),j=o[0],b=o[1],O=Object(s.useState)(""),m=Object(l.a)(O,2),x=m[0],p=m[1],g=Object(s.useState)(""),f=Object(l.a)(g,2),v=f[0],k=f[1],N=Object(s.useState)(""),w=Object(l.a)(N,2),C=w[0],y=w[1],S=Object(s.useState)(!1),A=Object(l.a)(S,2),U=A[0],T=A[1],F=Object(u.f)(),q=function(){k(""),y("")},I=function(){r.auth().onAuthStateChanged((function(e){console.log("this is uer",e),e?(b(""),p(""),a(e)):a("")}))};return Object(s.useEffect)((function(){I()}),[]),Object(h.jsx)("section",{className:"login",children:Object(h.jsxs)("div",{className:"loginContainer",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:j,onChange:function(e){return b(e.target.value)}}),Object(h.jsx)("p",{className:"errorMsg",children:v}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",required:!0,value:x,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("p",{className:"errorMsg",children:C}),Object(h.jsxs)("div",{className:"btnContainer",children:[Object(h.jsx)("button",{className:"signUpButt",onClick:function(){q(),r.auth().signInWithEmailAndPassword(j,x).then((function(){console.log("pur",c),F.push("./")})).catch((function(e){switch(console.log("this is era",e.code),e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":k(e.message);break;case"auth/wrong-password":y(e.message)}}))},children:"Login"}),Object(h.jsx)(d.b,{className:"signUpBtn",to:"/signup",children:Object(h.jsxs)("p",{children:["Don't have an account?",Object(h.jsx)("span",{onClick:function(){return T(!U)},children:"Sign up"})]})})]})]})})},b=n(27),O=n(28),m=n(29),x=n(31),p=n(30),g=n(21),f=n.n(g),v=(n(78),function(e){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("p",{children:"Note: answers for game rules are not definitive and if you have a about something extremely unclear them ask on the FTC forum."}),Object(h.jsx)("p",{children:"FIRST Answers is an unofficial, student-led forum made by Aarush and Ashmit from team #14481"}),Object(h.jsx)("p",{children:"\xa9 Don't Blink 2021"})]})}),k=function(e){return console.log("this is is props",e),Object(h.jsxs)("section",{className:"AllTheQues",children:[Object(h.jsx)("h1",{className:"ques-title",children:"View Questions."}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsxs)("tr",{className:"headers",children:[Object(h.jsx)("th",{children:"Question"}),Object(h.jsx)("th",{className:"hide",children:"Tags"}),Object(h.jsx)("th",{className:"hideAgain",children:"Author"})]}),Object(h.jsx)(f.a,{list:e.name,renderItem:function(e){return Object(h.jsxs)("tr",{className:"questions-info",children:[Object(h.jsx)("td",{className:"info-p",style:{borderRight:"2px solid #00172f",borderLeft:"2px solid #eee"},children:Object(h.jsx)(d.b,{to:{pathname:"/question/"+e.id,state:{hello:"Hello World"}},children:Object(h.jsxs)("p",{children:[e.projects.input," "]})})}),Object(h.jsx)("td",{className:"hide",style:{borderRight:"2px solid #00172f"},children:null!=e.projects.tags&&Object(h.jsxs)("p",{children:[e.projects.tags.toString().split(",").join("  |  ")," "]})}),Object(h.jsx)("td",{className:"hideAgain",style:{borderRight:"2px solid #eee"},children:e.projects.nameOfPerson})]})}})]}),Object(h.jsx)(v,{})]})},N=function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(b.a)(this,n),(s=t.call(this,e)).getUserData=function(e){return console.log("am i actually being called?"),new Promise((function(t,n){r.firestore().collection("users").where("email","==",e).get().then((function(e){e.forEach((function(e){t({id:e.id,user:e.data()})}))})).catch((function(e){n("Error getting documents: ",e)}))}))},s.incrementPoints=function(e,t,n){"none"!=t.email&&r.firestore().collection("users").doc(n).update({points:t.user.points+e})},s.handleQuestion=function(){if(console.log("this.state.checked",s.state.checked),null!=r.auth().currentUser)s.getUserData(r.auth().currentUser.email).then((function(e){console.log("this is user",e);s.state.checked;null!=r.auth().currentUser&&r.auth().currentUser.email,r.firestore().collection("posts").add({input:s.state.textInput,nameOfPerson:e.user.name,time:(new Date).getTime(),tags:s.state.checked}).then((function(){s.incrementPoints(5,e,e.id),s.setState({textInput:""}),s.setState({checked:[]}),s.fillUsers()}))}));else{null!=r.auth().currentUser&&r.auth().currentUser.email,r.firestore().collection("posts").add({input:s.state.textInput,nameOfPerson:"Anonymous Hedgehog",time:(new Date).getTime(),tags:s.state.checked}).then((function(){s.setState({textInput:""}),s.setState({checked:[]}),s.fillUsers()}))}},s.fillUsers=function(){var e=[];o.a.firestore().collection("posts").orderBy("time","desc").limit(50).get().then(function(t){t.forEach((function(t){e.push({projects:t.data(),id:t.id})})),s.setState({everyone:e})}.bind(Object(m.a)(s)))},s.handleChange=function(e){var t=s.state.checked;console.log("helo?",t),t.includes(e)?(t.splice(t.indexOf(e),1),console.log("helo1",t)):(t.push(e),console.log("helo2",t)),s.setState({checked:t})},s.state={textInput:"",everyone:[],setData:[],checked:[]},s.fillUsers(),s}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return console.log("everyone4",this.state.everyone),Object(h.jsxs)("section",{className:"hero",children:[Object(h.jsx)("h2",{children:"FIRST Answers."}),Object(h.jsxs)("div",{className:"main-input-container",children:[Object(h.jsx)("input",{onChange:function(t){return e.setState({textInput:t.target.value})},placeholder:"Ask Away...",type:"text",value:this.state.textInput,name:"YourQuestion",className:"mainQ"}),Object(h.jsx)("button",{onClick:this.handleQuestion})]}),Object(h.jsxs)("div",{className:"button-container",children:[Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("programming"),onChange:function(){return e.handleChange("programming")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Programming"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("mechanical"),onChange:function(){return e.handleChange("mechanical")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Mechanical"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("team help"),onChange:function(){return e.handleChange("team help")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Team help"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("Field/game"),onChange:function(){return e.handleChange("Field/game")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Field/game"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("outreach"),onChange:function(){return e.handleChange("outreach")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Outreach"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("fundraising"),onChange:function(){return e.handleChange("fundraising")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Fundraising"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("team management"),onChange:function(){return e.handleChange("team management")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Team management"})]}),Object(h.jsxs)("div",{className:"button-check",children:[Object(h.jsx)("input",{type:"checkbox",id:"YourCheckbox",checked:this.state.checked.includes("resources"),onChange:function(){return e.handleChange("resources")},name:"YourQuestion"}),Object(h.jsx)("h1",{children:"Resources"})]})]}),Object(h.jsx)(k,{name:this.state.everyone})]})}}]),n}(c.a.Component),w=function(){return Object(h.jsx)("section",{className:"home",children:Object(h.jsx)(N,{})})},C=(c.a.Component,function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=(n[0],n[1]),a=Object(s.useState)(""),i=Object(l.a)(a,2),o=i[0],j=i[1],b=Object(s.useState)(""),O=Object(l.a)(b,2),m=O[0],x=O[1],p=Object(s.useState)(""),g=Object(l.a)(p,2),f=g[0],v=g[1],k=Object(s.useState)(""),N=Object(l.a)(k,2),w=N[0],C=N[1],y=Object(s.useState)(""),S=Object(l.a)(y,2),A=S[0],U=S[1],T=Object(s.useState)(!1),F=Object(l.a)(T,2),q=F[0],I=F[1],E=Object(s.useState)(""),Q=Object(l.a)(E,2),Y=Q[0],P=Q[1],L=Object(s.useState)(""),D=Object(l.a)(L,2),B=D[0],R=D[1],H=Object(s.useState)(""),M=Object(l.a)(H,2),z=M[0],W=M[1],J=Object(u.f)(),K=function(){r.auth().onAuthStateChanged((function(e){e?(j(""),x(""),W(""),P(""),R(""),c(e)):c("")}))};return Object(s.useEffect)((function(){K()}),[]),Object(h.jsx)("section",{className:"login",children:Object(h.jsxs)("div",{className:"loginContainer",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:z,onChange:function(e){return W(e.target.value)}}),Object(h.jsx)("p",{className:"errorMsg",children:w}),Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:o,onChange:function(e){return j(e.target.value)}}),Object(h.jsx)("p",{className:"errorMsg",children:f}),Object(h.jsx)("label",{children:"Team Number"}),Object(h.jsx)("input",{type:"numbers",autoFocus:!0,required:!0,value:Y,onChange:function(e){return P(e.target.value)}}),Object(h.jsx)("label",{children:"Team Name"}),Object(h.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:B,onChange:function(e){return R(e.target.value)}}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",required:!0,value:m,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("p",{className:"errorMsg",children:A}),Object(h.jsxs)("div",{className:"btnContainer",children:[Object(h.jsx)("button",{className:"signUpButt",onClick:function(){v(""),U(""),C(""),z.length>2?r.auth().createUserWithEmailAndPassword(o,m).then((function(){r.firestore().collection("users").add({name:z,email:o,teamNumber:Y,teamName:B}).then((function(){J.push("./")})).catch((function(e){switch(console.log("here??"),e.code){case"auth/email-already-in-use":case"auth/invalid-email":v(e.message);break;case"auth/weak-password":U(e.message)}}))})):C("Please enter your name!")},children:"Sign Up"}),Object(h.jsx)(d.b,{to:"/login",children:Object(h.jsxs)("p",{children:["Have an account?",Object(h.jsx)("span",{onClick:function(){return I(!q)},children:"Login"})]})})]})]})})}),y=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){a()}),[]);var a=function(){var e=[];o.a.firestore().collection("users").orderBy("points","desc").limit(50).get().then(function(t){t.forEach((function(t){e.push({projects:t.data(),id:t.id})})),c(e),console.log("this is everyone",e)}.bind(undefined))};return Object(h.jsxs)("section",{className:"scoreboard-container",children:[Object(h.jsxs)("div",{className:"scoreboard-info",children:[Object(h.jsx)("h1",{children:"Scoreboard."}),Object(h.jsx)("p",{children:"View top ranked helpers of FIRST Answers."})]}),Object(h.jsxs)("table",{className:"scoreboard",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"scoreboard-buttons",children:[Object(h.jsx)("button",{children:"\u21e7"}),Object(h.jsx)("button",{children:"\u21e9"})]}),Object(h.jsx)("p",{children:"Rank"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"scoreboard-buttons",children:[Object(h.jsx)("button",{children:"\u21e7"}),Object(h.jsx)("button",{children:"\u21e9"})]}),Object(h.jsx)("p",{children:"Username"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"scoreboard-buttons",children:[Object(h.jsx)("button",{children:"\u21e7"}),Object(h.jsx)("button",{children:"\u21e9"})]}),Object(h.jsx)("p",{children:"Num. of answers"})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"scoreboard-buttons",children:[Object(h.jsx)("button",{children:"\u21e7"}),Object(h.jsx)("button",{children:"\u21e9"})]}),Object(h.jsx)("p",{children:"Total Upvotes"})]})})]}),Object(h.jsx)(f.a,{list:n,className:"scoreboard",renderItem:function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"border-light-l border-dark-r",children:"#1"}),Object(h.jsx)("td",{className:"border-dark-r",children:e.projects.name}),Object(h.jsx)("td",{className:"border-dark-r",children:e.projects.quesAns}),Object(h.jsx)("td",{className:"border-light-r",children:e.projects.points})]})}})]}),Object(h.jsx)(v,{})]})},S=n(39),A=function(e){var t=Object(s.useState)({}),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],j=Object(s.useState)({}),b=Object(l.a)(j,2),O=b[0],m=b[1],x=Object(s.useState)(!1),p=Object(l.a)(x,2),g=p[0],v=p[1],k=Object(s.useState)({}),N=Object(l.a)(k,2),w=N[0],C=N[1],y=Object(s.useState)(""),A=Object(l.a)(y,2),U=A[0],T=A[1];Object(s.useEffect)((function(){E(),F(),I(),console.log("User.email",O.email)}),[]);for(var F=function(){r.auth().onAuthStateChanged((function(e){e?(q(r.auth().currentUser.email),v(!0)):(m({name:"Anonymous Hedgehog",email:"undefined"}),v(!1))}))},q=function(e){console.log("am i actually being called?"),r.firestore().collection("users").where("email","==",e).get().then((function(e){e.forEach((function(e){console.log("hellooo",e.id),m(e.data()),T(e.id)}))})).catch((function(e){console.log("Error getting documents: ",e)}))},I=function(){var e=[];r.firestore().collection("posts").doc(window.location.pathname.substring(10)).collection("answers").orderBy("timestamp","desc").limit(50).get().then(function(t){t.forEach((function(t){var n="white";g&&t.data().upvotes.indexOf(r.auth().currentUser.email)>=0&&(n="#fa5039"),console.log("this is id",t.id),e.push({id:t.id,ans:t.data().ans,name:t.data().name,email:t.data().email,upvotes:t.data().upvotes,downvotes:t.data().downvotes,color:n})})),C(e)}.bind(undefined))},E=function(){return new Promise((function(e,t){r.firestore().collection("posts").doc(window.location.pathname.substring(10)).get().then((function(e){console.log("this is query",e.data()),a(e.data())})).catch((function(e){t("Error getting documents: ",e)}))}))},Q=document.getElementsByTagName("textarea"),Y=0;Y<Q.length;Y++)Q[Y].setAttribute("style","height:"+(Q[Y].scrollHeight+5)+"px;overflow-y:hidden;"),Q[Y].addEventListener("input",P,!1);function P(){this.style.height="auto",this.style.height=this.scrollHeight+5+"px"}return Object(h.jsxs)("section",{className:"qa-container",children:[Object(h.jsxs)("div",{className:"question-container",children:[null!=c&&Object(h.jsxs)("h1",{className:"question-info",children:["Question from ",c.nameOfPerson]}),null!=c&&Object(h.jsx)("h1",{className:"question",children:c.input}),null!=c.tags&&Object(h.jsxs)("p",{className:"tags",children:[Object(h.jsx)("span",{children:"Tags: "}),c.tags.toString().split(",").join(" | ")]})]}),Object(h.jsxs)("div",{className:"answer-container",children:[Object(h.jsx)("textarea",{onChange:function(e){return d(e.target.value)},placeholder:"Start typing...",type:"text",value:u,name:"YourQuestion",className:"answer-input"}),Object(h.jsx)("button",{className:"button-submit",onClick:function(){""!=u&&r.firestore().collection("posts").doc(window.location.pathname.substring(10)).collection("answers").add({name:O.name,ans:u,timestamp:(new Date).getTime(),upvotes:[" "]}).then((function(){!function(e,t,n){g&&(q(r.auth().currentUser.email),console.log("this is quesAns",t.quesAns),"none"!=t.email&&r.firestore().collection("users").doc(n).update({points:t.points+e,quesAns:1+t.quesAns}))}(7,O,U),d(""),I()}))},children:"Submit"}),Object(h.jsx)(f.a,{list:w,renderItem:function(e){return Object(h.jsxs)("div",{className:"inner-container",children:["undefined"!=O.email&&Object(h.jsx)("div",{className:"upvote-container",children:Object(h.jsxs)("button",{style:{color:e.color,backgroundColor:"transparent",border:0,transition:".4s"},onClick:function(){return function(e){if(console.log("this is p",e.upvotes),-1==e.upvotes.indexOf(r.auth().currentUser.email))(t=e.upvotes).push(r.auth().currentUser.email),console.log("this is ppushed"),r.firestore().collection("posts").doc(window.location.pathname.substring(10)).collection("answers").doc(e.id).update({upvotes:t}).then((function(){I()}));else if(e.upvotes.indexOf(r.auth().currentUser.email>=0)){var t;t=(t=e.upvotes).filter((function(e){return e!==r.auth().currentUser.email})),console.log("this is ppushed"),r.firestore().collection("posts").doc(window.location.pathname.substring(10)).collection("answers").doc(e.id).update({upvotes:t}).then((function(){I()}))}}(e)},children:[Object(h.jsx)(S.a,{size:40}),Object(h.jsx)("h1",{style:{marginTop:-6},children:e.upvotes.length-1})]})}),"undefined"==O.email&&Object(h.jsx)("div",{className:"upvote-container",children:Object(h.jsxs)("button",{style:{color:e.color,backgroundColor:"transparent",border:0,transition:".4s"},onClick:function(){return alert("Log in to vote!")},children:[Object(h.jsx)(S.a,{size:40}),Object(h.jsx)("h1",{style:{marginTop:-6},children:e.upvotes.length-1})]})}),Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsx)("p",{className:"answer-details",children:e.name}),Object(h.jsx)("p",{className:"answer-answer",children:e.ans})]})]})}})]})]})},U=function(e){return Object(h.jsx)("div",{className:e.container,children:Object(h.jsx)("a",{href:e.link,className:e.text,children:e.name})})},T=function(){return Object(h.jsxs)("section",{className:"links",children:[Object(h.jsx)("h1",{children:"Important Links."}),Object(h.jsx)("p",{className:"important-i",children:"Here are some important links and resources that will ensure your team stays successful throughout the season."}),Object(h.jsxs)("div",{className:"links-container",children:[Object(h.jsx)(U,{name:"FTC Discord",container:"border-rebeccapurple",link:"https://discord.gg/first-tech-challenge",text:"white"}),Object(h.jsx)(U,{name:"Game Manual 0",container:"border-orange",link:"https://gm0.org/en/latest/",text:"white"}),Object(h.jsx)(U,{name:"FTC Forums",container:"border-lightgrey",link:"https://ftcforum.firstinspires.org/",text:"white3"}),Object(h.jsx)(U,{name:"FTC Reddit",container:"border-darkorange",link:"https://www.reddit.com/r/FTC/",text:"white"}),Object(h.jsx)(U,{name:"SDP-SI Belt Calculator",container:"border-lightblue",link:"https://sdp-si.com/eStore/CenterDistanceDesigner",text:"white"}),Object(h.jsx)(U,{name:"FTC Rendering in Fusion 360",container:"border-white",link:"https://renders360.gitbook.io/ftc-rendering-in-fusion-360/",text:"white"}),Object(h.jsx)(U,{name:"FTC Java Docs",container:"border-indigo",link:"https://ftctechnh.github.io/ftc_app/doc/javadoc/index.html",text:"white"}),Object(h.jsx)(U,{name:"LearnRoadRunner",container:"border-darkblue",link:"https://learnroadrunner.com/",text:"white"})]}),Object(h.jsx)(v,{})]})};function F(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){a()}),[]);var a=function(){r.auth().onAuthStateChanged((function(e){e?(console.log("state = definitely signed in"),c(!0)):console.log("state = definitely signed out")}))};return console.log("this is currrr",r.auth().currentUser),Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"Elements",children:[Object(h.jsx)(d.b,{to:"/",children:"Forums"}),Object(h.jsx)(d.b,{to:"/scoreboard",children:"Scoreboard"}),Object(h.jsx)(d.b,{to:"/Links",children:"Links"}),0==n&&Object(h.jsx)(d.b,{to:"/signup",children:"Sign Up"}),0==n&&Object(h.jsx)(d.b,{to:"/login",children:"Login"}),1==n&&Object(h.jsx)("button",{onClick:function(){console.log("here?"),r.auth().signOut(),window.location.reload()},children:"Logout"})]}),Object(h.jsx)("div",{className:"UserLinks"})]}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{path:"/scoreboard",children:Object(h.jsx)(y,{})}),Object(h.jsx)(u.a,{path:"/Links",children:Object(h.jsx)(T,{})}),Object(h.jsx)(u.a,{path:"/login",children:Object(h.jsx)(j,{})}),Object(h.jsx)(u.a,{path:"/signup",children:Object(h.jsx)(C,{})}),Object(h.jsx)(u.a,{path:"/question",children:Object(h.jsx)(A,{})}),Object(h.jsx)(u.a,{path:"/",children:Object(h.jsx)(w,{})})]})]})})}var q=function(){return document.title="FIRST Answers",Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(F,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),I()}},[[80,1,2]]]);
//# sourceMappingURL=main.afa7f754.chunk.js.map