System.register(["./index-legacy-7660dc9c.js"],(function(t,e){"use strict";var n,i,o;return{setters:[function(t){n=t.aR,i=t.aS,o=t.aT}],execute:function(){t("startTapClick",(function(t){if(void 0!==n){var d,v,l,p=10*-f,m=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,w=function(t){p=i(t),T(t)},E=function(){l&&clearTimeout(l),l=void 0,d&&(b(!1),d=void 0)},g=function(t){d||y(e(t),t)},T=function(t){y(void 0,t)},y=function(t,e){if(!t||t!==d){l&&clearTimeout(l),l=void 0;var n=o(e),i=n.x,r=n.y;if(d){if(h.has(d))throw new Error("internal error");d.classList.contains(c)||R(d,i,r),b(!0)}if(t){var u=h.get(t);u&&(clearTimeout(u),h.delete(t)),t.classList.remove(c);var f=function(){R(t,i,r),l=void 0};a(t)?f():l=setTimeout(f,s)}d=t}},R=function(t,e,n){if(m=Date.now(),t.classList.add(c),L){var i=r(t);null!==i&&(S(),v=i.addRipple(e,n))}},S=function(){void 0!==v&&(v.then((function(t){return t()})),v=void 0)},b=function(t){S();var e=d;if(e){var n=u-Date.now()+m;if(t&&n>0&&!a(e)){var i=setTimeout((function(){e.classList.remove(c),h.delete(e)}),u);h.set(e,i)}else e.classList.remove(c)}};n.addEventListener("ionGestureCaptured",E),n.addEventListener("touchstart",(function(t){p=i(t),g(t)}),!0),n.addEventListener("touchcancel",w,!0),n.addEventListener("touchend",w,!0),n.addEventListener("pointercancel",E,!0),n.addEventListener("mousedown",(function(t){if(2!==t.button){var e=i(t)-f;p<e&&g(t)}}),!0),n.addEventListener("mouseup",(function(t){var e=i(t)-f;p<e&&T(t)}),!0)}}));
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
var e=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},a=function(t){return t.classList.contains("ion-activatable-instant")},r=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},c="ion-activated",s=100,u=150,f=2500}}}));