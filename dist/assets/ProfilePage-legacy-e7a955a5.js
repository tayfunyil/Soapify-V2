!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),u=new I(n||[]);return a(i,"_invoke",{value:P(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",g="completed",m={};function b(){}function w(){}function x(){}var _={};s(_,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==o&&i.call(E,c)&&(_=E);var k=x.prototype=b.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,a,u,c){var l=p(e[o],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function P(t,e,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=S(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?g:v,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,a(k,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,f,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),s(k,f,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}System.register(["./index-legacy-7660dc9c.js","./ExploreContainer-legacy-b1f75c2b.js"],(function(t,r){"use strict";var o,i,a,u,c,l,f,s,h,p,d,v,y,g,m,b,w,x,_,L,E,k,j,O,P,S,N,G,I,T,z,F,A,U;return{setters:[function(t){o=t.d,i=t.B,a=t.u,u=t.r,c=t.c,l=t.w,f=t.b,s=t.o,h=t.a,p=t.m,d=t.n,v=t.p,y=t.i,g=t.x,m=t.f,b=t.R,w=t.aE,x=t.t,_=t.aF,L=t.aI,E=t.J,k=t.$,j=t.q,O=t.aJ,P=t.y,S=t.aK,N=t.a6,G=t.ak,I=t.z,T=t.A,z=t.aL,F=t.al,A=t._},function(t){U=t.E}],execute:function(){var r=document.createElement("style");r.textContent=".avatarIMG[data-v-28b65bb9]{width:100px;height:100px;border-radius:50%;margin:0 auto;display:block}.avatar[data-v-28b65bb9]{height:150px}.center[data-v-28b65bb9]{text-align:center}input[data-v-28b65bb9]{margin-top:80px}#logoutButton[data-v-28b65bb9]{margin-bottom:10px;float:right;right:0}input[type=file][data-v-28b65bb9]::file-selector-button{border-radius:4px;padding:0 16px;height:40px;cursor:pointer;background-color:rgba(0,0,0,.047);border:1px solid rgba(0,0,0,.16);box-shadow:0 1px rgba(0,0,0,.05);margin-right:16px;transition:background-color .2s}input[type=file][data-v-28b65bb9]::file-selector-button:hover{background-color:rgba(0,0,0,.047)}input[type=file][data-v-28b65bb9]::file-selector-button:active{background-color:rgba(0,0,0,.047)}\n",document.head.appendChild(r);var C=["src"],D=function(t){return I("data-v-28b65bb9"),t=t(),T(),t}((function(){return m("p",null,[y("Du kannst dein Profilbild ändern, indem du dein Anzeigebild bei Gravatar änderst:"),m("br"),m("a",{href:"http://www.gravatar.com",target:"_blank"},"Avatar ändern")],-1)})),R=o({__name:"ProfilePage",setup:function(t){var r=i(""),o=i(""),I=i(""),T=i(""),A=a();function R(){return V.apply(this,arguments)}function V(){return(V=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A.getUsername?o.value=A.getUsername:(o.value="",S.fire({title:"Info",text:"Vergib dir einen Nutzernamen!"}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){return B.apply(this,arguments)}function B(){return(B=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.value=A.getSessionID;case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){T.value=A.getAvatarURL+"?"+(new Date).getTime()}function J(){I.value=A.getEmail}function M(){return Y.apply(this,arguments)}function Y(){return(Y=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.graphql.request(z,{user_id:A.getSessionID,username:o.value});case 3:t.sent.error?F.fire({icon:"error",title:"Fehler beim Ändern des Nutzernamens"}):(A.setUsername(o.value),G.fire({icon:"success",title:"Nutzername erfolgreich geändert"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),F.fire({icon:"error",title:"Fehler beim Ändern des Nutzernamens"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function $(){return H.apply(this,arguments)}function H(){return(H=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.auth.signOut();case 2:r=t.sent,(n=r.error)?console.log(n):(A.resetUsername(""),A.resetCurrentDialoguePartner(),A.resetAvatarURL(),G.fire({icon:"success",title:"Logout erfolgreich"}).then((function(){self.window.location.replace("/login")})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return K(),R(),J(),q(),function(t,e){var n=u("ion-refresher-content"),i=u("ion-refresher"),a=u("ion-avatar"),S=u("ion-col"),N=u("ion-row"),G=u("ion-grid"),z=u("ion-card-content"),F=u("ion-card"),A=u("ion-label"),V=u("ion-item"),B=u("ion-list"),Y=u("ion-button"),H=u("ion-footer");return s(),c(f(P),null,{default:l((function(){return[h(f(p),{message:"Lade Profil ..."}),h(f(g),null,{default:l((function(){return[h(f(d),null,{default:l((function(){return[h(f(v),null,{default:l((function(){return[y("Profil")]})),_:1})]})),_:1})]})),_:1}),h(f(j),{fullscreen:!0},{default:l((function(){return[h(i,{slot:"fixed","pull-factor":.5,"pull-min":100,"pull-max":200,onIonRefresh:e[0]||(e[0]=function(t){return e=t,void setTimeout((function(){K(),R(),J(),q(),e.target.complete()}),1e3);var e})},{default:l((function(){return[h(n)]})),_:1}),h(F,{class:"avatar"},{default:l((function(){return[h(z,null,{default:l((function(){return[h(G,null,{default:l((function(){return[h(N,null,{default:l((function(){return[h(S,null,{default:l((function(){return[h(a,null,{default:l((function(){return[h(a,{style:{width:"100px"}},{default:l((function(){return[m("img",{class:"avatarIMG",src:T.value},null,8,C)]})),_:1})]})),_:1})]})),_:1}),h(S,null,{default:l((function(){return[D]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),h(B,{inset:!0},{default:l((function(){return[h(V,null,{default:l((function(){return[h(f(b),{"aria-hidden":"true",icon:f(w),slot:"start"},null,8,["icon"]),h(A,null,{default:l((function(){return[y(x(r.value),1)]})),_:1})]})),_:1}),h(V,null,{default:l((function(){return[h(f(b),{"aria-hidden":"true",icon:f(_),slot:"start"},null,8,["icon"]),h(A,null,{default:l((function(){return[y(x(I.value),1)]})),_:1})]})),_:1}),h(V,null,{default:l((function(){return[h(f(b),{"aria-hidden":"true",icon:f(L),slot:"start"},null,8,["icon"]),h(f(E),{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.value=t}),onKeyup:k(M,["enter"]),value:o.value,placeholder:"Nutzername"},null,8,["modelValue","onKeyup","value"])]})),_:1})]})),_:1}),h(f(g),{collapse:"condense"},{default:l((function(){return[h(f(d),null,{default:l((function(){return[h(f(v),{size:"large"},{default:l((function(){return[y(x(o.value),1)]})),_:1})]})),_:1})]})),_:1}),h(U,{name:"Tab 3 page"})]})),_:1}),h(H,null,{default:l((function(){return[h(f(d),null,{default:l((function(){return[h(Y,{id:"logoutButton",shape:"round",onClick:$},{default:l((function(){return[h(f(b),{slot:"icon-only",icon:f(O)},null,8,["icon"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}});t("default",A(R,[["__scopeId","data-v-28b65bb9"]]))}}}))}();
