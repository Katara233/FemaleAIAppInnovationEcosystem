(function(t){function e(e){for(var n,i,o=e[0],s=e[1],u=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/FemaleAIAppInnovationEcosystem/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;r.push([8,"chunk-vendors"]),a()})({0:function(t,e){},1:function(t,e){},"1a3d":function(t,e,a){"use strict";a("fece")},2:function(t,e){},3:function(t,e){},"35cb":function(t,e,a){"use strict";a("a0cf")},"37dd":function(t,e,a){},4:function(t,e){},4398:function(t,e,a){"use strict";a("8c74")},5:function(t,e){},"5c0b":function(t,e,a){"use strict";a("9c0c")},6:function(t,e){},7:function(t,e){},"77dc":function(t,e,a){"use strict";a("37dd")},8:function(t,e,a){t.exports=a("cd49")},"8c74":function(t,e,a){},9931:function(t,e,a){},"9a18":function(t,e,a){"use strict";a("9931")},"9c0c":function(t,e,a){},a0cf:function(t,e,a){},aac2:function(t,e,a){"use strict";a("d27c")},b2db:function(t,e,a){},c0b9:function(t,e,a){},caaf:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("transition",{attrs:{name:t.transitionName}},[a("vue-page-stack",[a("router-view",{key:t.screen,staticClass:"router-view-c"})],1)],1)],1)},r=[],i=a("d4ec"),o=a("bee2"),s=a("262e"),u=a("2caf"),l=a("9ab4"),f=a("1b40"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tile is-ancestor",staticStyle:{"margin-bottom":"100px"}},[a("div",{staticClass:"tile is-parent is-vertical"},t._l(t.imageList,(function(e){return a("div",{key:e.image_url,staticClass:"tile is-child"},[a("b-image",{attrs:{ratio:"1by1  ",src:""+t.apiUrl+e.image_url}}),a("b-button",{attrs:{id:"btn-delete",rounded:"",type:"is-black"},on:{click:function(a){return t.deleteImage(e)}}},[t._v(" Delete ")])],1)})),0)])])},b=[],p=(a("99af"),a("2f62")),v=a("bfa9"),h=a("bc3a"),m=a.n(h),g="https://karatra233.azurewebsites.net/\n",y="",O="",j="",k=new v["a"]({storage:window.localStorage});n["a"].use(p["a"]);var _=new p["a"].Store({state:{githubUsername:"CodeUnicornMartha",imageList:[]},mutations:{setGithubUsername:function(t,e){t.githubUsername=e},setImageList:function(t,e){console.log(e),t.imageList=e}},actions:{refreshImageList:function(t){m.a.get("".concat(g,"images")).then((function(e){t.commit("setImageList",e.data)})).catch((function(e){t.commit("setImageList",[]),console.log(e)}))},deleteImage:function(t,e){m.a.delete("".concat(g).concat(e.image_url)).then((function(){t.dispatch("refreshImageList")}))}},modules:{},plugins:[k.plugin]}),w=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.apiUrl=g,t}return Object(o["a"])(a,[{key:"imageList",get:function(){return this.$store.state.imageList}},{key:"deleteImage",value:function(t){this.$store.dispatch("deleteImage",t)}},{key:"mounted",value:function(){this.$store.dispatch("refreshImageList")}}]),a}(f["c"]);w=Object(l["c"])([Object(f["a"])({store:_})],w);var C=w,x=C,I=(a("d033"),a("2877")),U=Object(I["a"])(x,d,b,!1,null,"b35043e8",null),S=U.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile is-size-4"},[a("b-image",{staticStyle:{"margin-top":"100px"},attrs:{src:t.profile.avatar_url,alt:"Profile Picture of User",ratio:"1by1",rounded:""}}),a("h1",[t._v(t._s(t.profile.name))]),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{tag:"router-link",to:"/editprofile",rounded:"",type:"is-black",expanded:""}},[t._v(" Edit Profile ")])],1)],1)},R=[],$="https://api.github.com/users/",E=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.profile={},t}return Object(o["a"])(a,[{key:"mounted",value:function(){this.getProfileDetails()}},{key:"githubUsername",get:function(){return this.$store.state.githubUsername}},{key:"getProfileDetails",value:function(){var t=this;m.a.get("".concat($).concat(this.githubUsername)).then((function(e){t.profile=e.data})).catch((function(t){console.log(t)}))}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("githubUsername")],E.prototype,"getProfileDetails",null),E=Object(l["c"])([Object(f["a"])({store:_})],E);var L=E,B=L,A=(a("77dc"),Object(I["a"])(B,P,R,!1,null,"02365aba",null)),F=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{"fixed-bottom":"",centered:"","mobile-burger":!1},scopedSlots:t._u([{key:"brand",fn:function(){return[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("div",{staticClass:"buttons-container navbar-center"},[t.showCameraButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/camera"}},[a("b-icon",{attrs:{type:"is-white",icon:"camera",pack:"fas"}})],1)],1):t._e(),t.showSpeechButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/microphone"}},[a("b-icon",{attrs:{type:"is-white",icon:"microphone",pack:"fas"}})],1)],1):t._e(),t.showFaceButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/faceai"}},[a("b-icon",{attrs:{type:"is-white",icon:"grin-stars",pack:"fas"}})],1)],1):t._e()],1)]},proxy:!0}])})},N=[],M=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"showCameraButton",get:function(){return""!==g}},{key:"showFaceButton",get:function(){return""!==y&&""!==j}},{key:"showSpeechButton",get:function(){return""!==O}}]),a}(f["c"]);M=Object(l["c"])([f["a"]],M);var V=M,H=V,z=(a("ffb0"),Object(I["a"])(H,D,N,!1,null,"2d824408",null)),G=z.exports,T=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.transitionName="forward",t.screen="home",t}return Object(o["a"])(a,[{key:"route",value:function(t,e){"forward"===t.params["stack-key-dir"]?this.transitionName="forward":this.transitionName="back"}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("$route")],T.prototype,"route",null),T=Object(l["c"])([Object(f["a"])({components:{Profile:F,ImageList:S,Navbar:G}})],T);var W=T,J=W,q=(a("5c0b"),Object(I["a"])(J,c,r,!1,null,null,null)),K=q.exports,Z=a("289d"),Q=(a("5abe"),a("ecee")),X=a("c074"),Y=a("ad3d"),tt=a("8c4f"),et=a("04e1"),at=a.n(et),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{"fixed-top":"","mobile-burger":!1},scopedSlots:t._u([{key:"brand",fn:function(){return[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("b-navbar-item",{staticClass:"title is-2",attrs:{id:"fontnavbar"}},[t._v(" Milligram ")])]},proxy:!0}])}),a("div",{staticClass:"container"},[a("Profile"),a("ImageList"),a("Navbar")],1)],1)},ct=[],rt=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(f["c"]);rt=Object(l["c"])([Object(f["a"])({components:{Profile:F,ImageList:S,Navbar:G}})],rt);var it=rt,ot=it,st=(a("aac2"),Object(I["a"])(ot,nt,ct,!1,null,"3b557880",null)),ut=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"camera"}},[a("EasyCamera",{ref:"camera",attrs:{fullscreen:""},on:{close:t.onClose},model:{value:t.picture,callback:function(e){t.picture=e},expression:"picture"}})],1)},ft=[];a("d3b7"),a("25f0");function dt(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},e="".concat(t()).concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t()).concat(t()).concat(t());return e.toLowerCase()}var bt=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.picture="",t}return Object(o["a"])(a,[{key:"onClose",value:function(){oe.back()}},{key:"savePicture",value:function(){var t=this;this.camera.close(),fetch(this.picture).then((function(t){return t.blob()})).then((function(e){var a=new File([e],"".concat(dt(),".png"),{type:"image/png"});console.log(a);var n=new FormData;return n.append("file",a),m.a.post("".concat(g,"upload/"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){t.$store.dispatch("refreshImageList")}))}))}}]),a}(f["c"]);Object(l["c"])([Object(f["b"])()],bt.prototype,"camera",void 0),Object(l["c"])([Object(f["d"])("picture")],bt.prototype,"savePicture",null),bt=Object(l["c"])([Object(f["a"])({store:_})],bt);var pt=bt,vt=pt,ht=(a("9a18"),Object(I["a"])(vt,lt,ft,!1,null,"f9380464",null)),mt=ht.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"microphone"}},[a("div",{attrs:{id:"select"}},[a("h2",[t._v("Select your language:")]),a("select",{staticClass:"custom-select",attrs:{name:"lang"},on:{change:function(e){return t.onChange(e)}}},[a("option",{attrs:{value:"de-DE",selected:""}},[t._v("German")]),a("option",{attrs:{value:"en-US"}},[t._v("English")])])]),a("br"),a("NavBarBack"),a("VueRecordAudio",{attrs:{mode:"press"},on:{stream:t.onStream,result:t.onResult}}),a("p",{staticClass:"is-large"},[t._v(t._s(t.text))])],1)},yt=[],Ot=a("743c"),jt=a("2d28"),kt=a("8d7f"),_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{"fixed-top":"","mobile-burger":!1},scopedSlots:t._u([{key:"brand",fn:function(){return[a("div",{staticClass:"buttons container"},[a("b-button",{attrs:{rounded:"",type:"is-black"},on:{click:t.onBack}},[a("b-icon",{attrs:{type:"is-white",icon:"arrow-left",pack:"fas"}})],1)],1)]},proxy:!0}])})},wt=[],Ct=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"onBack",value:function(){oe.back()}}]),a}(f["c"]);Ct=Object(l["c"])([f["a"]],Ct);var xt,It=Ct,Ut=It,St=Object(I["a"])(Ut,_t,wt,!1,null,"c6aaa43a",null),Pt=St.exports,Rt="westeurope",$t=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.text="",t.selectedLanguage="de-DE",t}return Object(o["a"])(a,[{key:"onStream",value:function(t){var e=Ot["a"].fromSubscription(O,Rt);e.speechRecognitionLanguage=this.selectedLanguage;var a=jt["a"].fromStreamInput(t);xt=new kt["a"](e,a),xt.recognizing=this.onRegonitionResult,xt.recognized=this.onRegonitionResult,xt.startContinuousRecognitionAsync()}},{key:"onRegonitionResult",value:function(t,e){this.text=e.result.text}},{key:"onResult",value:function(){xt.stopContinuousRecognitionAsync()}},{key:"onChange",value:function(t){this.selectedLanguage=t.target.value,console.log(t.target.value)}}]),a}(f["c"]);$t=Object(l["c"])([Object(f["a"])({components:{NavBarBack:Pt}})],$t);var Et=$t,Lt=Et,Bt=(a("1a3d"),Object(I["a"])(Lt,gt,yt,!1,null,"dad78278",null)),At=Bt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[0==t.faces.length?a("div",[a("canvas",{staticStyle:{display:"none"},attrs:{id:"ghostVideo"}}),t._m(0),a("EasyCamera",{ref:"camera",attrs:{fullscreenZIndex:-1,fullscreen:""},on:{close:t.onClose},model:{value:t.picture,callback:function(e){t.picture=e},expression:"picture"}})],1):t._e(),t.faces.length>0?a("section",[a("NavBarBack"),a("b-tabs",[a("b-tab-item",{attrs:{label:"Results"}},[a("b-table",{attrs:{data:t.faces,columns:t.columns}})],1)],1)],1):t._e()])},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"faceRectContainer"}},[a("canvas",{attrs:{id:"faceRect"}})])}],Nt=a("5530"),Mt=(a("d81d"),a("8e36")),Vt=a("a5e3"),Ht=new Mt["a"]({inHeader:{"Ocp-Apim-Subscription-Key":y}}),zt=new Vt["a"](Ht,j);function Gt(t,e){return t>.5?e:""}var Tt=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.picture="",t.faceInterval=-1,t.faces=[],t.liveFaces=[],t.faceRect={width:92,height:92,left:301,top:149},t.useLiveFaceDetection=!0,t.liveFaceDetectionInverval=3e3,t.columns=[{field:"age",label:"Age"},{field:"emotion",label:"Emotion"},{field:"facialHair",label:"Facial Hair"},{field:"gender",label:"Gender"},{field:"smile",label:"Smile"},{field:"glasses",label:"Glasses"}],t}return Object(o["a"])(a,[{key:"onClose",value:function(){window.clearInterval(this.faceInterval),oe.back()}},{key:"created",value:function(){var t=this;this.faceInterval=window.setInterval((function(){var e=document.getElementById("ghostVideo"),a=e.getContext("2d"),n=document.querySelector("video"),c=0,r=0,i=n;if(null!=a&&null!=i)try{c=i.videoWidth,r=i.videoHeight,e.width=c,e.height=r,a.fillRect(0,0,c,r),a.drawImage(i,0,0,c,r);var o=e.toDataURL();a.clearRect(0,0,c,r);var s=document.getElementById("faceRect");s.width=c,s.height=r;var u=s.getContext("2d");null!=u&&(u.rect(t.faceRect.left,t.faceRect.top,t.faceRect.width,t.faceRect.height),u.stroke()),"data:,"!==o&&t.useLiveFaceDetection&&fetch(o).then((function(t){return t.blob()})).then((function(e){zt.face.detectWithStream(e).then((function(e){t.liveFaces=e.map((function(e){t.faceRect=e.faceRectangle}))}))}))}catch(l){console.log(l)}}),this.liveFaceDetectionInverval)}},{key:"savePicture",value:function(){var t=this;this.camera.stop(),clearInterval(this.faceInterval),fetch(this.picture).then((function(t){return t.blob()})).then((function(e){zt.face.detectWithStream(e,{returnFaceAttributes:["age","emotion","facialHair","smile","gender","glasses"]}).then((function(e){0!=e.length?t.faces=e.map((function(t){var e=Object(Nt["a"])({},t.faceAttributes),a=e.age,n=void 0===a?0:a,c=e.emotion;c=void 0===c?{}:c;var r=c.anger,i=void 0===r?0:r,o=c.contempt,s=void 0===o?0:o,u=c.disgust,l=void 0===u?0:u,f=c.fear,d=void 0===f?0:f,b=c.happiness,p=void 0===b?0:b,v=c.neutral,h=void 0===v?0:v,m=c.sadness,g=void 0===m?0:m,y=c.surprise,O=void 0===y?0:y,j=e.facialHair;j=void 0===j?{}:j;var k=j.moustache,_=void 0===k?0:k,w=j.beard,C=void 0===w?0:w,x=j.sideburns,I=void 0===x?0:x,U=e.gender,S=void 0===U?"":U,P=e.smile,R=void 0===P?0:P,$=e.glasses,E=void 0===$?"":$;return{age:n,emotion:"".concat(Gt(i,"anger")," ").concat(Gt(s,"contempt")," ").concat(Gt(l,"disgust")," ").concat(Gt(d,"fear")," ").concat(Gt(p,"happiness")," ").concat(Gt(h,"neutral")," ").concat(Gt(g,"sadness")," ").concat(Gt(O,"surprise")),facialHair:"".concat(Gt(_,"moustache")," ").concat(Gt(C,"beard")," ").concat(Gt(I,"sideburns")),gender:S,smile:"".concat(Gt(R,"smile")),glasses:E}})):t.$confirm("The AI could not recognize your face, make sure the gray box covers most of your face.","AI Error","error").then((function(e){t.$router.go(0)})).catch((function(){t.$router.push({name:"home"})}))})).catch((function(e){t.$alert("An error occurred while trying to connect to Face AI. Try again and ask your coach if the problem persists.","Face AI not available","warning").then((function(){return t.$router.go(0)})),console.log("An error occurred:"),console.error(e)}))}))}}]),a}(f["c"]);Object(l["c"])([Object(f["b"])()],Tt.prototype,"camera",void 0),Object(l["c"])([Object(f["d"])("picture")],Tt.prototype,"savePicture",null),Tt=Object(l["c"])([Object(f["a"])({components:{NavBarBack:Pt}})],Tt);var Wt=Tt,Jt=Wt,qt=(a("35cb"),a("4398"),Object(I["a"])(Jt,Ft,Dt,!1,null,"0c60a54c",null)),Kt=qt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile is-size-4"},[a("b-image",{attrs:{src:t.profile.avatar_url,alt:"Profile Picture of User",ratio:"1by1",rounded:""}}),a("h1",[t._v(t._s(t.profile.name))]),a("b-field",{attrs:{label:"Github Username",type:t.status,message:"Check if your username is correct"}},[a("b-input",{attrs:{maxlength:"30"},model:{value:t.githubUsername,callback:function(e){t.githubUsername=e},expression:"githubUsername"}})],1),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{rounded:"",type:"is-black",expanded:"",disabled:!t.isValid},on:{click:t.saveProfile}},[t._v("Save Profile")])],1)],1)},Qt=[],Xt=a("2ef0"),Yt="https://api.github.com/users/",te=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.githubUsername=t.$store.state.githubUsername,t.isValid=!1,t.profile={},t.debouncedOnUsernameChanged=Object(Xt["debounce"])(t.onUsernameChanged,500),t}return Object(o["a"])(a,[{key:"status",get:function(){return this.isValid?"is-success":"is-danger"}},{key:"mounted",value:function(){this.onUsernameChanged()}},{key:"onUsernameChanged",value:function(){var t=this;console.log(this.githubUsername),m.a.get("".concat(Yt).concat(this.githubUsername)).then((function(e){t.profile=e.data,t.isValid=!0})).catch((function(e){console.log(e),t.isValid=!1}))}},{key:"saveProfile",value:function(){this.$store.commit("setGithubUsername",this.githubUsername),this.$router.back()}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("githubUsername")],te.prototype,"debouncedOnUsernameChanged",void 0),te=Object(l["c"])([Object(f["a"])({store:_})],te);var ee=te,ae=ee,ne=(a("d79c"),Object(I["a"])(ae,Zt,Qt,!1,null,"056a57c9",null)),ce=ne.exports;n["a"].use(tt["a"]);var re=[{path:"/",name:"home",component:ut},{path:"/camera",name:"camera",component:mt},{path:"/microphone",name:"microphone",component:At},{path:"/faceai",name:"faceai",component:Kt},{path:"/editprofile",name:"editprofile",component:ce}],ie=new tt["a"]({base:"/FemaleAIAppInnovationEcosystem/",routes:re});n["a"].use(at.a,{router:ie});var oe=ie,se=a("98f5"),ue=a("c9d0"),le=a.n(ue),fe=a("683f");Q["c"].add(X["b"],X["f"],X["e"],X["c"],X["d"],X["a"]),n["a"].use(fe["a"]),n["a"].use(le.a),n["a"].component("vue-fontawesome",Y["a"]),n["a"].use(Z["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),n["a"].component("EasyCamera",se["a"]),n["a"].config.productionTip=!1,new n["a"]({router:oe,store:_,render:function(t){return t(K)}}).$mount("#app")},d033:function(t,e,a){"use strict";a("b2db")},d27c:function(t,e,a){},d79c:function(t,e,a){"use strict";a("caaf")},fece:function(t,e,a){},ffb0:function(t,e,a){"use strict";a("c0b9")}});
//# sourceMappingURL=app.84482560.js.map