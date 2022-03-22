"use strict";(self.webpackChunkprvi_projekat=self.webpackChunkprvi_projekat||[]).push([[2349],{2349:(fe,O,b)=>{b.r(O),b.d(O,{ion_modal:()=>$});var S=b(5861),h=b(2361),D=b(8686),C=b(2407),y=b(206),I=b(410),E=b(3986),V=b(7300),H=b(358),p=b(6304),Y=b(7438),L=b(1363);b(2733);const T=(e,t)=>{const o=1/(1-t);return e*o+-t*o},W=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,r=void 0===o||o<t,n=r?`calc(var(--backdrop-opacity) * ${t})`:"0",a=(0,p.c)("backdropAnimation").fromTo("opacity",0,n);return r&&a.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:a}},N=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,r=`calc(var(--backdrop-opacity) * ${T(t,o)})`,n=[{offset:0,opacity:r},{offset:1,opacity:0}],a=[{offset:0,opacity:r},{offset:o,opacity:0},{offset:1,opacity:0}],s=(0,p.c)("backdropAnimation").keyframes(0!==o?a:n);return{wrapperAnimation:(0,p.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},K=(e,t)=>{const{presentingEl:o,currentBreakpoint:r}=t,n=(0,y.g)(e),{wrapperAnimation:a,backdropAnimation:s}=void 0!==r?W(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(n.querySelector("ion-backdrop")),a.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const c=(0,p.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(o){const d=window.innerWidth<768,w="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,g=(0,y.g)(o),l=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),m=document.body;if(d){const k=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",u=`translateY(${w?"-10px":k}) scale(0.93)`;l.afterStyles({transform:u}).beforeAddWrite(()=>m.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"}]),c.addAnimation(l)}else if(c.addAnimation(s),w){const i=`translateY(-10px) scale(${w?.93:1})`;l.afterStyles({transform:i}).addElement(g.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:i}]);const f=(0,p.c)().afterStyles({transform:i}).addElement(g.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:i}]);c.addAnimation([l,f])}else a.fromTo("opacity","0","1")}else c.addAnimation(s);return c},j=(e,t,o=500)=>{const{presentingEl:r,currentBreakpoint:n}=t,a=(0,y.g)(e),{wrapperAnimation:s,backdropAnimation:c}=void 0!==n?N(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};c.addElement(a.querySelector("ion-backdrop")),s.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,p.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(s);if(r){const w=window.innerWidth<768,g="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,l=(0,y.g)(r),m=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(i=>{1===i&&(r.style.setProperty("overflow",""),Array.from(k.querySelectorAll("ion-modal")).filter(u=>void 0!==u.presentingElement).length<=1&&k.style.setProperty("background-color",""))}),k=document.body;if(w){const i=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",v=`translateY(${g?"-10px":i}) scale(0.93)`;m.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:v,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(m)}else if(d.addAnimation(c),g){const f=`translateY(-10px) scale(${g?.93:1})`;m.addElement(l.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:f},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const u=(0,p.c)().addElement(l.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:f},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([m,u])}else s.fromTo("opacity","1","0")}else d.addAnimation(c);return d},ee=(e,t)=>{const{currentBreakpoint:o}=t,r=(0,y.g)(e),{wrapperAnimation:n,backdropAnimation:a}=void 0!==o?W(t):{backdropAnimation:(0,p.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return a.addElement(r.querySelector("ion-backdrop")),n.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,n])},oe=(e,t)=>{const{currentBreakpoint:o}=t,r=(0,y.g)(e),{wrapperAnimation:n,backdropAnimation:a}=void 0!==o?N(t):{backdropAnimation:(0,p.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,p.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return a.addElement(r.querySelector("ion-backdrop")),n.addElement(r.querySelector(".modal-wrapper")),(0,p.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,n])},$=class{constructor(e){(0,h.r)(this,e),this.didPresent=(0,h.e)(this,"ionModalDidPresent",7),this.willPresent=(0,h.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,h.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,h.e)(this,"ionModalDidDismiss",7),this.didPresentShorthand=(0,h.e)(this,"didPresent",7),this.willPresentShorthand=(0,h.e)(this,"willPresent",7),this.willDismissShorthand=(0,h.e)(this,"willDismiss",7),this.didDismissShorthand=(0,h.e)(this,"didDismiss",7),this.modalIndex=se++,this.coreDelegate=(0,C.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:r}=this;r&&r();const n=void 0!==t?document.getElementById(t):null;n&&(this.destroyTriggerInteraction=((s,c)=>{const d=()=>{c.present()};return s.addEventListener("click",d),()=>{s.removeEventListener("click",d)}})(n,o))},this.onBackdropTap=()=>{this.dismiss(void 0,E.B)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const o=this.usersElement,r=ie[t.type];if(o&&r){const n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(n)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}connectedCallback(){(0,E.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,this.isSheetModal=void 0!==e&&void 0!==t,void 0!==e&&void 0!==t&&!e.includes(t)&&console.warn("[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.")}componentDidLoad(){!0===this.isOpen&&(0,y.r)(()=>this.present()),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}present(){var e=this;return(0,S.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:o,delegate:r}=e.getDelegate(!0);e.usersElement=yield(0,C.a)(r,e.el,e.component,["ion-page"],t,o),yield(0,H.e)(e.usersElement),(0,h.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,E.d)(e,"modalEnter",K,ee,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():e.swipeToClose&&e.initSwipeToClose(),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,y.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(I.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,D.b)(this))return;const t=this.leaveAnimation||D.c.get("modalLeave",j),o=this.animation=t(this.el,{presentingEl:this.presentingElement});this.gesture=((e,t,o)=>{const r=e.offsetHeight;let n=!1;const w=(0,L.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:g=>{const l=g.event.target;return null===l||!l.closest||null===l.closest("ion-content, ion-footer")},onStart:()=>{t.progressStart(!0,n?1:0)},onMove:g=>{const l=(0,y.k)(1e-4,g.deltaY/r,.9999);t.progressStep(l)},onEnd:g=>{const l=g.velocityY,m=(0,y.k)(1e-4,g.deltaY/r,.9999),i=(g.deltaY+1e3*l)/r>=.5;let f=i?-.001:.001;i?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),f+=(0,Y.g)([0,0],[.32,.72],[0,1],[1,1],m)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),f+=(0,Y.g)([0,0],[1,0],[.68,.28],[1,1],m)[0]);const u=((e,t)=>(0,y.k)(400,e/Math.abs(1.1*t),500))(i?m*r:(1-m)*r,l);n=i,w.enable(!1),t.onFinish(()=>{i||w.enable(!0)}).progressEnd(i?1:0,f,u),i&&o()}});return w})(this.el,o,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,S.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){var t,e=this;const{wrapperEl:o,initialBreakpoint:r,backdropBreakpoint:n}=this;if(!o||void 0===r)return;const a=this.enterAnimation||D.c.get("modalEnter",K),s=this.animation=a(this.el,{presentingEl:this.presentingElement,currentBreakpoint:r,backdropBreakpoint:n});s.progressStart(!0,1);const c=(null===(t=this.breakpoints)||void 0===t?void 0:t.sort((d,w)=>d-w))||[];this.gesture=((e,t,o,r,n,a,s=[],c,d)=>{const l={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==n?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-n,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},m=e.querySelector("ion-content"),k=o.clientHeight;let i=r,f=0;const u=a.childAnimations.find(x=>"wrapperAnimation"===x.id),v=a.childAnimations.find(x=>"backdropAnimation"===x.id),de=s[s.length-1],F=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},U=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};u&&v&&(u.keyframes([...l.WRAPPER_KEYFRAMES]),v.keyframes([...l.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-i),i>n?F():U()),m&&i!==de&&(m.scrollY=!1);const P=(0,L.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:x=>{const A=x.event.target.closest("ion-content");return!(1===i&&A)},onStart:()=>{m&&(m.scrollY=!1),(0,y.r)(()=>{e.focus()}),a.progressStart(!0,1-i)},onMove:x=>{f=(0,y.k)(1e-4,1-i+x.deltaY/k,.9999),a.progressStep(f)},onEnd:x=>{const z=i-(x.deltaY+100*x.velocityY)/k,_=s.reduce((B,Z)=>Math.abs(Z-z)<Math.abs(B-z)?Z:B),G=0!==_;i=0,u&&v&&(u.keyframes([{offset:0,transform:`translateY(${100*f}%)`},{offset:1,transform:`translateY(${100*(1-_)}%)`}]),v.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${T(1-f,n)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${T(_,n)})`}]),a.progressStep(0)),P.enable(!1),a.onFinish(()=>{G&&(u&&v?(0,y.r)(()=>{u.keyframes([...l.WRAPPER_KEYFRAMES]),v.keyframes([...l.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-_),i=_,d(i),m&&i===s[s.length-1]&&(m.scrollY=!0),i>n?F():U(),P.enable(!0)}):P.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),G||c()}});return P})(this.el,this.backdropEl,o,r,n,s,c,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,S.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))},d=>{this.currentBreakpoint=d}),this.gesture.enable(!0)}dismiss(e,t){var o=this;return(0,S.Z)(function*(){if(o.gestureAnimationDismissing&&"gesture"!==t)return!1;"undefined"!=typeof window&&o.keyboardOpenCallback&&window.removeEventListener(I.KEYBOARD_DID_OPEN,o.keyboardOpenCallback),void 0!==o.currentTransition&&(yield o.currentTransition);const r=E.h.get(o)||[];o.currentTransition=(0,E.f)(o,e,t,"modalLeave",j,oe,{presentingEl:o.presentingElement,currentBreakpoint:o.currentBreakpoint||o.initialBreakpoint,backdropBreakpoint:o.backdropBreakpoint});const n=yield o.currentTransition;if(n){const{delegate:a}=o.getDelegate();yield(0,C.d)(a,o.usersElement),(0,h.c)(()=>o.el.classList.remove("show-modal")),o.animation&&o.animation.destroy(),o.gesture&&o.gesture.destroy(),r.forEach(s=>s.destroy())}return o.currentTransition=void 0,o.animation=void 0,n})()}onDidDismiss(){return(0,E.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,E.g)(this.el,"ionModalWillDismiss")}render(){const{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:r}=this,n=!1!==e&&t,a=(0,D.b)(this),{modalId:s}=this,c=void 0!==o&&"ios"===a;return(0,h.h)(h.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!c&&!t,"modal-card":c,"modal-sheet":t,"overlay-hidden":!0},(0,V.g)(this.cssClass)),id:s,onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,h.h)("ion-backdrop",{ref:d=>this.backdropEl=d,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,h.h)("div",{class:"modal-shadow"}),(0,h.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:d=>this.wrapperEl=d},n&&(0,h.h)("div",{class:"modal-handle",part:"handle"}),(0,h.h)("slot",null)))}get el(){return(0,h.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},ie={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let se=0;$.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);