"use strict";(self.webpackChunkprvi_projekat=self.webpackChunkprvi_projekat||[]).push([[3804],{3804:(Ce,z,k)=>{k.r(z),k.d(z,{ion_popover:()=>Z});var L=k(5861),d=k(2361),N=k(8686),R=k(2407),_=k(206),E=k(3986),H=k(7300),J=k(358),v=k(6304);const K=(o,e,r)=>{const t=e.getBoundingClientRect(),n=t.height;let i=t.width;return"cover"===o&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},te=(o,e,r)=>{let t=[];switch(e){case"hover":let n;t=[{eventName:"mouseenter",callback:(i=(0,L.Z)(function*(a){a.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{(0,_.r)(()=>{r.presentFromTrigger(a),n=void 0})},100)}),function(s){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);const a=i.relatedTarget;!a||a.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;case"context-menu":t=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),r.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;default:t=[{eventName:"click",callback:i=>r.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}]}var i;return t.forEach(({eventName:n,callback:i})=>o.addEventListener(n,i)),o.setAttribute("data-ion-popover-trigger","true"),()=>{t.forEach(({eventName:n,callback:i})=>o.removeEventListener(n,i)),o.removeAttribute("data-ion-popover-trigger")}},F=(o,e)=>e&&"ION-ITEM"===e.tagName?o.findIndex(r=>r===e):-1,$=o=>{const r=(0,_.g)(o).querySelector("button");r&&(0,_.r)(()=>r.focus())},ie=o=>{const e=function(){var r=(0,L.Z)(function*(t){const n=document.activeElement;let i=[];try{i=Array.from(o.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(a){}switch(t.key){case"ArrowLeft":(yield o.getParentPopover())&&o.dismiss(void 0,void 0,!1);break;case"ArrowDown":t.preventDefault();const s=((o,e)=>o[F(o,e)+1])(i,n);void 0!==s&&$(s);break;case"ArrowUp":t.preventDefault();const c=((o,e)=>o[F(o,e)-1])(i,n);void 0!==c&&$(c);break;case"Home":t.preventDefault();const l=i[0];void 0!==l&&$(l);break;case"End":t.preventDefault();const u=i[i.length-1];void 0!==u&&$(u);break;case"ArrowRight":case" ":case"Enter":if(n&&(o=>o.hasAttribute("data-ion-popover-trigger"))(n)){const f=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(f)}}});return function(n){return r.apply(this,arguments)}}();return o.addEventListener("keydown",e),()=>o.removeEventListener("keydown",e)},U=(o,e,r,t,n,i,a,s,c,l,u)=>{var f;let b={top:0,left:0,width:0,height:0};if("event"===i){if(!u)return c;b={top:u.clientY,left:u.clientX,width:1,height:1}}else{const p=u,I=l||(null===(f=null==p?void 0:p.detail)||void 0===f?void 0:f.ionShadowTarget)||(null==p?void 0:p.target);if(!I)return c;const y=I.getBoundingClientRect();b={top:y.top,left:y.left,width:y.width,height:y.height}}const m=ce(a,b,e,r,t,n,o),g=pe(s,a,b,e,r),w=m.top+g.top,P=m.left+g.left,{arrowTop:h,arrowLeft:D}=ae(a,t,n,w,P,e,r,o),{originX:x,originY:A}=se(a,s,o);return{top:w,left:P,referenceCoordinates:b,arrowTop:h,arrowLeft:D,originX:x,originY:A}},se=(o,e,r)=>{switch(o){case"top":return{originX:V(e),originY:"bottom"};case"bottom":return{originX:V(e),originY:"top"};case"left":return{originX:"right",originY:M(e)};case"right":return{originX:"left",originY:M(e)};case"start":return{originX:r?"left":"right",originY:M(e)};case"end":return{originX:r?"right":"left",originY:M(e)}}},V=o=>{switch(o){case"start":return"left";case"center":return"center";case"end":return"right"}},M=o=>{switch(o){case"start":return"top";case"center":return"center";case"end":return"bottom"}},ae=(o,e,r,t,n,i,a,s)=>{const c={arrowTop:t+a/2-e/2,arrowLeft:n+i-e/2},l={arrowTop:t+a/2-e/2,arrowLeft:n-1.5*e};switch(o){case"top":return{arrowTop:t+a,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:t-r,arrowLeft:n+i/2-e/2};case"left":return c;case"right":return l;case"start":return s?l:c;case"end":return s?c:l;default:return{arrowTop:0,arrowLeft:0}}},ce=(o,e,r,t,n,i,a)=>{const s={top:e.top,left:e.left-r-n},c={top:e.top,left:e.left+e.width+n};switch(o){case"top":return{top:e.top-t-i,left:e.left};case"right":return c;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return s;case"start":return a?c:s;case"end":return a?s:c}},pe=(o,e,r,t,n)=>{switch(o){case"center":return de(e,r,t,n);case"end":return le(e,r,t,n);default:return{top:0,left:0}}},le=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},de=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},q=(o,e,r,t,n,i,a,s,c,l,u,f,b=0,m=0,g=0)=>{let x,w=b,h=r,D=e,A=l,T=u,p=!1,I=!1;const y=f?f.top+f.height:i/2-s/2,O=f?f.height:0;let S=!1;return h<t+c?(h=t,p=!0,A="left"):a+t+h+c>n&&(I=!0,h=n-a-t,A="right"),y+O+s>i&&("top"===o||"bottom"===o)&&(y-s>0?(D=y-s-O-(g-1),w=D+s,T="bottom",S=!0):x=t),{top:D,left:h,bottom:x,originX:A,originY:T,checkSafeAreaLeft:p,checkSafeAreaRight:I,arrowTop:w,arrowLeft:m,addPopoverBottomClass:S}},ve=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:a,side:s,align:c}=e,l=o.ownerDocument,u="rtl"===l.dir,f=l.defaultView.innerWidth,b=l.defaultView.innerHeight,m=(0,_.g)(o),g=m.querySelector(".popover-content"),w=m.querySelector(".popover-arrow"),P=i||(null===(r=null==t?void 0:t.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==t?void 0:t.target),{contentWidth:h,contentHeight:D}=K(n,g,P),{arrowWidth:x,arrowHeight:A}=(o=>{if(!o)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=o.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(w),p=U(u,h,D,x,A,a,s,c,{top:b/2-D/2,left:f/2-h/2,originX:u?"right":"left",originY:"top"},i,t),I="cover"===n?0:5,y="cover"===n?0:25,{originX:O,originY:S,top:j,left:C,bottom:W,checkSafeAreaLeft:Y,checkSafeAreaRight:Pe,arrowTop:De,arrowLeft:_e,addPopoverBottomClass:Ae}=q(s,p.top,p.left,I,f,b,h,D,y,p.originX,p.originY,p.referenceCoordinates,p.arrowTop,p.arrowLeft,A),Te=(0,v.c)(),B=(0,v.c)(),G=(0,v.c)();return B.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),G.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Te.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${h}px`),Ae&&o.classList.add("popover-bottom"),void 0!==W&&g.style.setProperty("bottom",`${W}px`);let X=`${C}px`;Y&&(X=`${C}px + var(--ion-safe-area-left, 0)`),Pe&&(X=`${C}px - var(--ion-safe-area-right, 0)`),g.style.setProperty("top",`calc(${j}px + var(--offset-y, 0))`),g.style.setProperty("left",`calc(${X} + var(--offset-x, 0))`),g.style.setProperty("transform-origin",`${S} ${O}`),null!==w&&(((o,e=!1,r,t)=>!(!r&&!t||"top"!==o&&"bottom"!==o&&e))(s,p.top!==j||p.left!==C,t,i)?(w.style.setProperty("top",`calc(${De}px + var(--offset-y, 0))`),w.style.setProperty("left",`calc(${_e}px + var(--offset-x, 0))`)):w.style.setProperty("display","none"))}).addAnimation([B,G])},ue=o=>{const e=(0,_.g)(o),r=e.querySelector(".popover-content"),t=e.querySelector(".popover-arrow"),n=(0,v.c)(),i=(0,v.c)(),a=(0,v.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),t&&(t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("display"))}).duration(300).addAnimation([i,a])},ge=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:a,side:s,align:c}=e,l=o.ownerDocument,u="rtl"===l.dir,f=l.defaultView.innerWidth,b=l.defaultView.innerHeight,m=(0,_.g)(o),g=m.querySelector(".popover-content"),w=i||(null===(r=null==t?void 0:t.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==t?void 0:t.target),{contentWidth:P,contentHeight:h}=K(n,g,w),x=U(u,P,h,0,0,a,s,c,{top:b/2-h/2,left:f/2-P/2,originX:u?"right":"left",originY:"top"},i,t),A="cover"===n?0:12,{originX:T,originY:p,top:I,left:y,bottom:O}=q(s,x.top,x.left,A,f,b,P,h,0,x.originX,x.originY,x.referenceCoordinates),S=(0,v.c)(),j=(0,v.c)(),C=(0,v.c)(),W=(0,v.c)(),Y=(0,v.c)();return j.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),C.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),W.addElement(g).beforeStyles({top:`calc(${I}px + var(--offset-y, 0px))`,left:`calc(${y}px + var(--offset-x, 0px))`,"transform-origin":`${p} ${T}`}).beforeAddWrite(()=>{void 0!==O&&g.style.setProperty("bottom",`${O}px`)}).fromTo("transform","scale(0.8)","scale(1)"),Y.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),S.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${P}px`),"bottom"===p&&o.classList.add("popover-bottom")}).addAnimation([j,C,W,Y])},be=o=>{const e=(0,_.g)(o),r=e.querySelector(".popover-content"),t=(0,v.c)(),n=(0,v.c)(),i=(0,v.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Z=class{constructor(o){(0,d.r)(this,o),this.didPresent=(0,d.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,d.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,d.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,d.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,d.e)(this,"didPresent",7),this.willPresentShorthand=(0,d.e)(this,"willPresent",7),this.willDismissShorthand=(0,d.e)(this,"willDismiss",7),this.didDismissShorthand=(0,d.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=ke++,this.coreDelegate=(0,R.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,E.B)},this.onLifecycle=e=>{const r=this.usersElement,t=ye[e.type];if(r&&t){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:t,destroyTriggerInteraction:n}=this;n&&n();const i=this.triggerEl=void 0!==e?document.getElementById(e):null;!i||(this.destroyTriggerInteraction=te(i,r,t))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ie(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:t,triggerEl:n,el:i}=this;!r||!n||(e&&e(),this.destroyDismissInteraction=((o,e,r,t)=>{let n=[];const a=(0,_.g)(t).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:s=>{document.elementFromPoint(s.clientX,s.clientY)!==o&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:s=>{s.target.closest("[data-ion-popover-trigger]")!==o?r.dismiss(void 0,void 0,!1):s.stopPropagation()}}],n.forEach(({eventName:s,callback:c})=>a.addEventListener(s,c)),()=>{n.forEach(({eventName:s,callback:c})=>a.removeEventListener(s,c))}})(n,t,i,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(o,e){!0===o&&!1===e?this.present():!1===o&&!0===e&&this.dismiss()}connectedCallback(){(0,E.e)(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,N.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:o,isOpen:e}=this;!0===e&&(0,_.r)(()=>this.present()),o&&(0,_.a)(o,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(o,e=!1){var r=this;return(0,L.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(o),r.focusDescendantOnPresent=!1})()}getDelegate(o=!1){if(this.workingDelegate&&!o)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(o){var e=this;return(0,L.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),{inline:t,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,R.a)(n,e.el,e.component,["popover-viewport"],r,t),yield(0,J.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.currentTransition=(0,E.d)(e,"popoverEnter",ve,ge,{event:o||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,E.j)(e.el,e.el)})()}dismiss(o,e,r=!0){var t=this;return(0,L.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition);const{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=t;r&&t.parentPopover&&t.parentPopover.dismiss(o,e,r),t.currentTransition=(0,E.f)(t,o,e,"popoverLeave",ue,be,t.event);const a=yield t.currentTransition;if(a){n&&(n(),t.destroyKeyboardInteraction=void 0),i&&(i(),t.destroyDismissInteraction=void 0);const{delegate:s}=t.getDelegate();yield(0,R.d)(s,t.usersElement)}return t.currentTransition=void 0,a})()}getParentPopover(){var o=this;return(0,L.Z)(function*(){return o.parentPopover})()}onDidDismiss(){return(0,E.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,E.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,N.b)(this),{onLifecycle:e,popoverId:r,parentPopover:t,dismissOnSelect:n,side:i,arrow:a,htmlAttributes:s}=this,c=(0,N.a)("desktop"),l=a&&!t&&!c;return(0,d.h)(d.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},s,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,H.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":c,[`popover-side-${i}`]:!0,"popover-nested":!!t}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!t&&(0,d.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,d.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:n?()=>this.dismiss():void 0},l&&(0,d.h)("div",{class:"popover-arrow",part:"arrow"}),(0,d.h)("div",{class:"popover-content",part:"content"},(0,d.h)("slot",null))))}get el(){return(0,d.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ye={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let ke=0;Z.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);