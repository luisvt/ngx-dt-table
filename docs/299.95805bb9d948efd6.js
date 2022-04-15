"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[299],{7299:(ct,E,r)=>{r.d(E,{NW:()=>pt,TU:()=>dt});var u=r(6970),e=r(792),m=r(3194),D=r(3981),O=r(6831),b=r(2683),y=r(7131),M=r(631),d=r(4279),S=r(4559),w=r(5116),z=r(4853),B=r(6479),L=r(7220),T=r(4288),g=r(607),F=r(6659),Y=r(2886);r(3131);const N=["tooltip"],C="tooltip-panel",R=(0,z.i$)({passive:!0}),A=new e.OlP("mat-tooltip-scroll-strategy"),U={provide:A,deps:[b.aV],useFactory:function G(o){return()=>o.scrollStrategies.reposition({scrollThrottle:20})}},H=new e.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function Q(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}});let V=(()=>{class o{constructor(t,i,s,a,l,p,c,P,I,v,_,x){this._overlay=t,this._elementRef=i,this._scrollDispatcher=s,this._viewContainerRef=a,this._ngZone=l,this._platform=p,this._ariaDescriber=c,this._focusMonitor=P,this._dir=v,this._defaultOptions=_,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new T.xQ,this._scrollStrategy=I,this._document=x,_&&(_.position&&(this.position=_.position),_.touchGestures&&(this.touchGestures=_.touchGestures)),v.change.pipe((0,g.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}get position(){return this._position}set position(t){var i;t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),null===(i=this._tooltipInstance)||void 0===i||i.show(0),this._overlayRef.updatePosition()))}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,d.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,d.su)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,d.su)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,g.R)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,s])=>{t.removeEventListener(i,s,R)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay){if(this.disabled||!this.message||this._isTooltipVisible()&&!this._tooltipInstance._showTimeoutId&&!this._tooltipInstance._hideTimeoutId)return;const i=this._createOverlay();this._detach(),this._portal=this._portal||new B.C5(this._tooltipComponent,this._viewContainerRef);const s=this._tooltipInstance=i.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe((0,g.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){this._tooltipInstance&&this._tooltipInstance.hide(t)}toggle(){this._isTooltipVisible()?this.hide():this.show()}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(){var t;if(this._overlayRef)return this._overlayRef;const i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),s=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return s.positionChanges.pipe((0,g.R)(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:s,panelClass:`${this._cssClassPrefix}-${C}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,g.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,g.R)(this._destroyed)).subscribe(()=>{var a;return null===(a=this._tooltipInstance)||void 0===a?void 0:a._handleBodyInteraction()}),this._overlayRef.keydownEvents().pipe((0,g.R)(this._destroyed)).subscribe(a=>{this._isTooltipVisible()&&a.keyCode===S.hY&&!(0,S.Vb)(a)&&(a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),(null===(t=this._defaultOptions)||void 0===t?void 0:t.disableTooltipInteractivity)&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const i=t.getConfig().positionStrategy,s=this._getOrigin(),a=this._getOverlayPosition();i.withPositions([this._addOffset(Object.assign(Object.assign({},s.main),a.main)),this._addOffset(Object.assign(Object.assign({},s.fallback),a.fallback))])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let s;"above"==i||"below"==i?s={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&t||"right"==i&&!t?s={originX:"start",originY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(s={originX:"end",originY:"center"});const{x:a,y:l}=this._invertPosition(s.originX,s.originY);return{main:s,fallback:{originX:a,originY:l}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let s;"above"==i?s={overlayX:"center",overlayY:"bottom"}:"below"==i?s={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&t||"right"==i&&!t?s={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(s={overlayX:"start",overlayY:"center"});const{x:a,y:l}=this._invertPosition(s.overlayX,s.overlayY);return{main:s,fallback:{overlayX:a,overlayY:l}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,F.q)(1),(0,g.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){const{overlayY:i,originX:s,originY:a}=t;let l;if(l="center"===i?this._dir&&"rtl"===this._dir.value?"end"===s?"left":"right":"start"===s?"left":"right":"bottom"===i&&"top"===a?"above":"below",l!==this._currentPosition){const p=this._overlayRef;if(p){const c=`${this._cssClassPrefix}-${C}-`;p.removePanelClass(c+this._currentPosition),p.addPanelClass(c+l)}this._currentPosition=l}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",()=>{this._setupPointerExitEventsIfNeeded(),this.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",()=>{this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{var s;const a=i.relatedTarget;(!a||!(null===(s=this._overlayRef)||void 0===s?void 0:s.overlayElement.contains(a)))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,s])=>{this._elementRef.nativeElement.addEventListener(i,s,R)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(t.clientX,t.clientY),s=this._elementRef.nativeElement;i!==s&&!s.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const i=this._elementRef.nativeElement,s=i.style;("on"===t||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(s.userSelect=s.msUserSelect=s.webkitUserSelect=s.MozUserSelect="none"),("on"===t||!i.draggable)&&(s.webkitUserDrag="none"),s.touchAction="none",s.webkitTapHighlightColor="transparent"}}}return o.\u0275fac=function(t){e.$Z()},o.\u0275dir=e.lG2({type:o,inputs:{position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),o})(),J=(()=>{class o extends V{constructor(t,i,s,a,l,p,c,P,I,v,_,x){super(t,i,s,a,l,p,c,P,I,v,_,x),this._tooltipComponent=j}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.aV),e.Y36(e.SBq),e.Y36(M.mF),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(z.t4),e.Y36(y.$s),e.Y36(y.tE),e.Y36(A),e.Y36(Y.Is,8),e.Y36(H,8),e.Y36(u.K0))},o.\u0275dir=e.lG2({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],exportAs:["matTooltip"],features:[e.qOj]}),o})(),$=(()=>{class o{constructor(t,i){this._changeDetectorRef=t,this._visibility="initial",this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new T.xQ,this._animationsDisabled="NoopAnimations"===i}show(t){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&this.hide(this._mouseLeaveHideDelay)}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const i=this._tooltip.nativeElement,s=this._showAnimation,a=this._hideAnimation;if(i.classList.remove(t?a:s),i.classList.add(t?s:a),this._isVisible=t,t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const l=getComputedStyle(i);("0s"===l.getPropertyValue("animation-duration")||"none"===l.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(L.Qb,8))},o.\u0275dir=e.lG2({type:o}),o})(),j=(()=>{class o extends ${constructor(t,i,s){super(t,s),this._breakpointObserver=i,this._isHandset=this._breakpointObserver.observe(w.u3.Handset),this._showAnimation="mat-tooltip-show",this._hideAnimation="mat-tooltip-hide"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(w.Yg),e.Y36(L.Qb,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(1&t&&e.Gf(N,7),2&t){let s;e.iGM(s=e.CRH())&&(i._tooltip=s.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("mouseleave",function(a){return i._handleMouseLeave(a)}),2&t&&e.Udp("zoom",i.isVisible()?1:null)},features:[e.qOj],decls:4,vars:6,consts:[[1,"mat-tooltip",3,"ngClass","animationend"],["tooltip",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0,1),e.NdJ("animationend",function(a){return i._handleAnimationEnd(a)}),e.ALo(2,"async"),e._uU(3),e.qZA()),2&t){let s;e.ekj("mat-tooltip-handset",null==(s=e.lcZ(2,4,i._isHandset))?null:s.matches),e.Q6J("ngClass",i.tooltipClass),e.xp6(3),e.Oqu(i.message)}},directives:[u.mk],pipes:[u.Ov],styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"],encapsulation:2,changeDetection:0}),o})(),X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[U],imports:[[y.rt,u.ez,b.U8,m.BQ],m.BQ,M.ZD]}),o})();var K=r(3457);function W(o,n){if(1&o&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function q(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"mat-form-field",16)(1,"mat-select",17),e.NdJ("selectionChange",function(s){return e.CHM(t),e.oxw(2)._changePageSize(s.value)}),e.YNc(2,W,2,2,"mat-option",18),e.qZA()()}if(2&o){const t=e.oxw(2);e.Q6J("appearance",t._formFieldAppearance)("color",t.color),e.xp6(1),e.Q6J("value",t.pageSize)("disabled",t.disabled)("aria-label",t._intl.itemsPerPageLabel),e.xp6(1),e.Q6J("ngForOf",t._displayedPageSizeOptions)}}function tt(o,n){if(1&o&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.pageSize)}}function et(o,n){if(1&o&&(e.TgZ(0,"div",12)(1,"div",13),e._uU(2),e.qZA(),e.YNc(3,q,3,6,"mat-form-field",14),e.YNc(4,tt,2,1,"div",15),e.qZA()),2&o){const t=e.oxw();e.xp6(2),e.hij(" ",t._intl.itemsPerPageLabel," "),e.xp6(1),e.Q6J("ngIf",t._displayedPageSizeOptions.length>1),e.xp6(1),e.Q6J("ngIf",t._displayedPageSizeOptions.length<=1)}}function it(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().firstPage()}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",22),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("matTooltipPosition","above")("disabled",t._previousButtonsDisabled()),e.uIk("aria-label",t._intl.firstPageLabel)}}function st(o,n){if(1&o){const t=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().lastPage()}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",24),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("matTooltipPosition","above")("disabled",t._nextButtonsDisabled()),e.uIk("aria-label",t._intl.lastPageLabel)}}let f=(()=>{class o{constructor(){this.changes=new T.xQ,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(t,i,s)=>{if(0==s||0==i)return`0 of ${s}`;const a=t*i;return`${a+1} \u2013 ${a<(s=Math.max(s,0))?Math.min(a+i,s):a+i} of ${s}`}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const at={provide:f,deps:[[new e.FiY,new e.tp0,f]],useFactory:function ot(o){return o||new f}},lt=new e.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),rt=(0,m.Id)((0,m.dB)(class{}));let ht=(()=>{class o extends rt{constructor(t,i,s){if(super(),this._intl=t,this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.page=new e.vpe,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),s){const{pageSize:a,pageSizeOptions:l,hidePageSize:p,showFirstLastButtons:c}=s;null!=a&&(this._pageSize=a),null!=l&&(this._pageSizeOptions=l),null!=p&&(this._hidePageSize=p),null!=c&&(this._showFirstLastButtons=c)}}get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max((0,d.su)(t),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(t){this._length=(0,d.su)(t),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max((0,d.su)(t),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(i=>(0,d.su)(i)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(t){this._hidePageSize=(0,d.Ig)(t)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(t){this._showFirstLastButtons=(0,d.Ig)(t)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;const t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;const t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const t=this.getNumberOfPages()-1;return this.pageIndex<t&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){const s=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/t)||0,this.pageSize=t,this._emitPageEvent(s)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){!this._initialized||(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,i)=>t-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return o.\u0275fac=function(t){e.$Z()},o.\u0275dir=e.lG2({type:o,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons"},outputs:{page:"page"},features:[e.qOj]}),o})(),pt=(()=>{class o extends ht{constructor(t,i,s){super(t,i,s),s&&null!=s.formFieldAppearance&&(this._formFieldAppearance=s.formFieldAppearance)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f),e.Y36(e.sBO),e.Y36(lt,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[e.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,et,5,3,"div",2),e.TgZ(3,"div",3)(4,"div",4),e._uU(5),e.qZA(),e.YNc(6,it,3,5,"button",5),e.TgZ(7,"button",6),e.NdJ("click",function(){return i.previousPage()}),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"path",8),e.qZA()(),e.kcU(),e.TgZ(10,"button",9),e.NdJ("click",function(){return i.nextPage()}),e.O4$(),e.TgZ(11,"svg",7),e._UZ(12,"path",10),e.qZA()(),e.YNc(13,st,3,5,"button",11),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",!i.hidePageSize),e.xp6(3),e.hij(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),e.xp6(1),e.Q6J("ngIf",i.showFirstLastButtons),e.xp6(1),e.Q6J("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),e.uIk("aria-label",i._intl.previousPageLabel),e.xp6(3),e.Q6J("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),e.uIk("aria-label",i._intl.nextPageLabel),e.xp6(3),e.Q6J("ngIf",i.showFirstLastButtons))},directives:[K.KE,O.gD,m.ey,D.lW,u.O5,u.sg,J],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"],encapsulation:2,changeDetection:0}),o})(),dt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[at],imports:[[u.ez,D.ot,O.LD,X,m.BQ]]}),o})()}}]);