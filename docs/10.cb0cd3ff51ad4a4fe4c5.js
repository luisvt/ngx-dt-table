(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+7LJ":function(e,t,n){"use strict";n.r(t),n.d(t,"EditorTemplateModule",function(){return he});var i=n("y7v8"),s=n("3q6j"),a=n("kzT0"),o=n("kfQG"),r=n("ohzc"),l=n("9LM3"),c=n("k58K"),u=n("UWUH"),m=n("GCig"),h=n("liQK"),d=n("jiDD"),p=n("c/cj"),b=n("FXVj"),g=n("beCn"),_=n("LZMA"),f=n("nGyK"),v=n("1QKT"),y=n("xtRv"),M=n("+0KY"),k=n("1HkD"),O=n("lq+n"),w=n("R1H3"),C=n("4NZi"),I=n("nqM0"),x=n("mkfs"),P=n("h8d9"),S=n("w8K9"),j=n("5NXW"),A=n("wdBT"),R=n("gmsv");const E=["mat-menu-item",""],D=["*"];function L(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",0),a.Xb("keydown",function(t){return a.pc(e),a.bc()._handleKeydown(t)})("click",function(){return a.pc(e),a.bc().closed.emit("click")})("@transformMenu.start",function(t){return a.pc(e),a.bc()._onAnimationStart(t)})("@transformMenu.done",function(t){return a.pc(e),a.bc()._onAnimationDone(t)}),a.Qb(1,"div",1),a.ec(2),a.Pb(),a.Pb()}if(2&e){const e=a.bc();a.gc("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),a.Bb("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const T={transformMenu:Object(I.m)("transformMenu",[Object(I.j)("void",Object(I.k)({opacity:0,transform:"scale(0.8)"})),Object(I.l)("void => enter",Object(I.e)("120ms cubic-bezier(0, 0, 0.2, 1)",Object(I.k)({opacity:1,transform:"scale(1)"}))),Object(I.l)("* => void",Object(I.e)("100ms 25ms linear",Object(I.k)({opacity:0})))]),fadeInItems:Object(I.m)("fadeInItems",[Object(I.j)("showing",Object(I.k)({opacity:1})),Object(I.l)("void => *",[Object(I.k)({opacity:0}),Object(I.e)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},B=new a.r("MatMenuContent"),F=new a.r("MAT_MENU_PANEL");class z{}const Q=Object(P.u)(Object(P.v)(z));let Y=(()=>{class e extends Q{constructor(e,t,n,i){super(),this._elementRef=e,this._focusMonitor=n,this._parentMenu=i,this.role="menuitem",this._hovered=new b.a,this._focused=new b.a,this._highlighted=!1,this._triggersSubmenu=!1,i&&i.addItem&&i.addItem(this)}focus(e="program",t){this._focusMonitor?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){var e,t;const n=this._elementRef.nativeElement.cloneNode(!0),i=n.querySelectorAll("mat-icon, .material-icons");for(let s=0;s<i.length;s++){const t=i[s];null===(e=t.parentNode)||void 0===e||e.removeChild(t)}return(null===(t=n.textContent)||void 0===t?void 0:t.trim())||""}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(a.l),a.Lb(i.d),a.Lb(h.h),a.Lb(F,8))},e.\u0275cmp=a.Fb({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(e,t){1&e&&a.Xb("click",function(e){return t._checkDisabled(e)})("mouseenter",function(){return t._handleMouseEnter()}),2&e&&(a.Bb("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),a.Db("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[a.xb],attrs:E,ngContentSelectors:D,decls:2,vars:2,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"]],template:function(e,t){1&e&&(a.fc(),a.ec(0),a.Mb(1,"div",0)),2&e&&(a.Ab(1),a.gc("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()))},directives:[P.o],encapsulation:2,changeDetection:0}),e})();const X=new a.r("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let H=0,K=(()=>{class e{constructor(e,t,n){this._elementRef=e,this._ngZone=t,this._defaultOptions=n,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new a.E,this._tabSubscription=g.a.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new b.a,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new a.n,this.close=this.closed,this.panelId="mat-menu-panel-"+H++}get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(e){this._overlapTrigger=Object(d.b)(e)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(e){this._hasBackdrop=Object(d.b)(e)}set panelClass(e){const t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(e=>{this._classList[e]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(e=>{this._classList[e]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new h.g(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._tabSubscription=this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Object(y.a)(this._directDescendantItems),Object(M.a)(e=>Object(_.a)(...e.map(e=>e._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e))}ngOnDestroy(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}_hovered(){return this._directDescendantItems.changes.pipe(Object(y.a)(this._directDescendantItems),Object(M.a)(e=>Object(_.a)(...e.map(e=>e._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const t=e.keyCode,n=this._keyManager;switch(t){case p.h:Object(p.t)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case p.j:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case p.n:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:t!==p.q&&t!==p.e||n.setFocusOrigin("keyboard"),n.onKeydown(e)}}focusFirstItem(e="program"){this.lazyContent?this._ngZone.onStable.pipe(Object(k.a)(1)).subscribe(()=>this._focusFirstItem(e)):this._focusFirstItem(e)}_focusFirstItem(e){const t=this._keyManager;if(t.setFocusOrigin(e).setFirstItemActive(),!t.activeItem&&this._directDescendantItems.length){let e=this._directDescendantItems.first._getHostElement().parentElement;for(;e;){if("menu"===e.getAttribute("role")){e.focus();break}e=e.parentElement}}}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const t="mat-elevation-z"+Math.min(4+e,24),n=Object.keys(this._classList).find(e=>e.startsWith("mat-elevation-z"));n&&n!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[t]=!0,this._previousElevation=t)}setPositionClasses(e=this.xPosition,t=this.yPosition){const n=this._classList;n["mat-menu-before"]="before"===e,n["mat-menu-after"]="after"===e,n["mat-menu-above"]="above"===t,n["mat-menu-below"]="below"===t}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(Object(y.a)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(a.l),a.Lb(a.A),a.Lb(X))},e.\u0275dir=a.Gb({type:e,contentQueries:function(e,t,n){if(1&e&&(a.Eb(n,B,!0),a.Eb(n,Y,!0),a.Eb(n,Y,!1)),2&e){let e;a.mc(e=a.Yb())&&(t.lazyContent=e.first),a.mc(e=a.Yb())&&(t._allItems=e),a.mc(e=a.Yb())&&(t.items=e)}},viewQuery:function(e,t){if(1&e&&a.Cc(a.M,!0),2&e){let e;a.mc(e=a.Yb())&&(t.templateRef=e.first)}},inputs:{backdropClass:"backdropClass",xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{closed:"closed",close:"close"}}),e})(),N=(()=>{class e extends K{constructor(e,t,n){super(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(a.l),a.Lb(a.A),a.Lb(X))},e.\u0275cmp=a.Fb({type:e,selectors:[["mat-menu"]],exportAs:["matMenu"],features:[a.zb([{provide:F,useExisting:e}]),a.xb],ngContentSelectors:D,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(e,t){1&e&&(a.fc(),a.xc(0,L,3,6,"ng-template"))},directives:[i.i],styles:['.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:"";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],encapsulation:2,data:{animation:[T.transformMenu,T.fadeInItems]},changeDetection:0}),e})();const q=new a.r("mat-menu-scroll-strategy"),J={provide:q,deps:[S.c],useFactory:function(e){return()=>e.scrollStrategies.reposition()}},G=Object(j.f)({passive:!0});let V=(()=>{class e{constructor(e,t,n,i,s,o,r,l){this._overlay=e,this._element=t,this._viewContainerRef=n,this._menuItemInstance=o,this._dir=r,this._focusMonitor=l,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=g.a.EMPTY,this._hoverSubscription=g.a.EMPTY,this._menuCloseSubscription=g.a.EMPTY,this._handleTouchStart=()=>this._openedBy="touch",this._openedBy=null,this.restoreFocus=!0,this.menuOpened=new a.n,this.onMenuOpen=this.menuOpened,this.menuClosed=new a.n,this.onMenuClose=this.menuClosed,this._scrollStrategy=i,this._parentMaterialMenu=s instanceof K?s:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,G),o&&(o._triggersSubmenu=this.triggersSubmenu())}get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(e=>{this._destroyMenu(),"click"!==e&&"tab"!==e||!this._parentMaterialMenu||this._parentMaterialMenu.closed.emit(e)})))}ngAfterContentInit(){this._checkMenu(),this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,G),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!(!this._menuItemInstance||!this._parentMaterialMenu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){if(this._menuOpen)return;this._checkMenu();const e=this._createOverlay(),t=e.getConfig();this._setPosition(t.positionStrategy),t.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,e.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(),this.menu instanceof K&&this.menu._startAnimation()}closeMenu(){this.menu.close.emit()}focus(e="program",t){this._focusMonitor?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(){if(!this._overlayRef||!this.menuOpen)return;const e=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this._restoreFocus(),e instanceof K?(e._resetAnimation(),e.lazyContent?e._animationDone.pipe(Object(O.a)(e=>"void"===e.toState),Object(k.a)(1),Object(w.a)(e.lazyContent._attached)).subscribe({next:()=>e.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),e.lazyContent&&e.lazyContent.detach())}_initMenu(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this._setIsMenuOpen(!0),this.menu.focusFirstItem(this._openedBy||"program")}_setMenuElevation(){if(this.menu.setElevation){let e=0,t=this.menu.parentMenu;for(;t;)e++,t=t.parentMenu;this.menu.setElevation(e)}}_restoreFocus(){this.restoreFocus&&(this._openedBy?this.triggersSubmenu()||this.focus(this._openedBy):this.focus()),this._openedBy=null}_setIsMenuOpen(e){this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&(this._menuItemInstance._highlighted=e)}_checkMenu(){}_createOverlay(){if(!this._overlayRef){const e=this._getOverlayConfig();this._subscribeToPositions(e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(){return new S.d({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this.menu.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e){this.menu.setPositionClasses&&e.positionChanges.subscribe(e=>{this.menu.setPositionClasses("start"===e.connectionPair.overlayX?"after":"before","top"===e.connectionPair.overlayY?"below":"above")})}_setPosition(e){let[t,n]="before"===this.menu.xPosition?["end","start"]:["start","end"],[i,s]="above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],[a,o]=[i,s],[r,l]=[t,n],c=0;this.triggersSubmenu()?(l=t="before"===this.menu.xPosition?"start":"end",n=r="end"===t?"start":"end",c="bottom"===i?8:-8):this.menu.overlapTrigger||(a="top"===i?"bottom":"top",o="top"===s?"bottom":"top"),e.withPositions([{originX:t,originY:a,overlayX:r,overlayY:i,offsetY:c},{originX:n,originY:a,overlayX:l,overlayY:i,offsetY:c},{originX:t,originY:o,overlayX:r,overlayY:s,offsetY:-c},{originX:n,originY:o,overlayX:l,overlayY:s,offsetY:-c}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Object(f.a)(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Object(O.a)(e=>e!==this._menuItemInstance),Object(O.a)(()=>this._menuOpen)):Object(f.a)();return Object(_.a)(e,n,i,t)}_handleMousedown(e){Object(h.l)(e)||(this._openedBy=0===e.button?"mouse":null,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const t=e.keyCode;this.triggersSubmenu()&&(t===p.n&&"ltr"===this.dir||t===p.j&&"rtl"===this.dir)&&this.openMenu()}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(Object(O.a)(e=>e===this._menuItemInstance&&!e.disabled),Object(C.a)(0,v.a)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof K&&this.menu._isAnimating?this.menu._animationDone.pipe(Object(k.a)(1),Object(C.a)(0,v.a),Object(w.a)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new x.h(this.menu.templateRef,this._viewContainerRef)),this._portal}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(S.c),a.Lb(a.l),a.Lb(a.Q),a.Lb(q),a.Lb(F,8),a.Lb(Y,10),a.Lb(R.b,8),a.Lb(h.h))},e.\u0275dir=a.Gb({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:["aria-haspopup","true",1,"mat-menu-trigger"],hostVars:2,hostBindings:function(e,t){1&e&&a.Xb("mousedown",function(e){return t._handleMousedown(e)})("keydown",function(e){return t._handleKeydown(e)})("click",function(e){return t._handleClick(e)}),2&e&&a.Bb("aria-expanded",t.menuOpen||null)("aria-controls",t.menuOpen?t.menu.panelId:null)},inputs:{restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"],_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]}),e})(),U=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[J],imports:[P.g]}),e})(),W=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},providers:[J],imports:[[i.c,P.g,P.p,S.f,U],A.b,P.g,U]}),e})();var Z=n("GhDA");function $(e,t){1&e&&a.Mb(0,"matx-input",8),2&e&&a.gc("formControl",t.$implicit.name)}function ee(e,t){1&e&&a.Mb(0,"matx-input",9),2&e&&a.gc("formControl",t.$implicit.age)}const te=function(){return["Barcelona","Real Madrid","Liverpool","Borussia Dortmund","Manchester United","Manchester City","Juventus"]};function ne(e,t){1&e&&a.Mb(0,"matx-select",10),2&e&&a.gc("formControl",t.$implicit.club)("options",a.hc(2,te))}const ie=function(){return["Argentina","Brazil","Portugal","England","Germany","France","Holland","Spain","Italy"]};function se(e,t){1&e&&a.Mb(0,"matx-select",10),2&e&&a.gc("formControl",t.$implicit.national)("options",a.hc(2,ie))}function ae(e,t){if(1&e){const e=a.Rb();a.Qb(0,"button",15),a.Xb("click",function(){a.pc(e);const t=a.bc();return t.table.startEditing(t.row)}),a.Qb(1,"mat-icon"),a.zc(2,"edit"),a.Pb(),a.Qb(3,"span"),a.zc(4,"Edit"),a.Pb(),a.Pb()}}function oe(e,t){if(1&e){const e=a.Rb();a.Qb(0,"button",15),a.Xb("click",function(){a.pc(e);const t=a.bc();return t.table.submitRow(t.row)}),a.Qb(1,"mat-icon"),a.zc(2,"save"),a.Pb(),a.Qb(3,"span"),a.zc(4,"Save"),a.Pb(),a.Pb(),a.Qb(5,"button",15),a.Xb("click",function(){a.pc(e);const t=a.bc();return t.table.resetRow(t.row)}),a.Qb(6,"mat-icon"),a.zc(7,"cancel"),a.Pb(),a.Qb(8,"span"),a.zc(9,"Cancel"),a.Pb(),a.Pb()}}function re(e,t){if(1&e&&(a.Qb(0,"button",11),a.Qb(1,"mat-icon"),a.zc(2,"more_vert"),a.Pb(),a.Pb(),a.Qb(3,"mat-menu",null,12),a.xc(5,ae,5,0,"ng-template",13),a.xc(6,oe,10,0,"ng-template",null,14,a.yc),a.Pb()),2&e){const e=t.row,n=a.nc(4),i=a.nc(7);a.gc("matMenuTriggerFor",n),a.Ab(5),a.gc("ngIf",!e.editing)("ngIfElse",i)}}const le=function(){return{"padding-left":0,"padding-right":0,"min-width":"40px"}},ce=[{path:"",component:(()=>{class e{constructor(){this.players=[{id:1,age:27,club:"Barcelona",name:"Leonel Messi",national:"Argentina"},{id:2,age:29,club:"Real Madrid",name:"Cristiano Ronaldo",national:"Portugal"},{id:3,age:34,club:"Liverpool",name:"Steven Gerrard",national:"England"},{id:4,age:22,club:"Barcelona",name:"Neymar",national:"Brazil"},{id:5,age:25,club:"Borussia Dortmund",name:"Marco Reus",national:"Germany"},{id:6,age:26,club:"Real Madrid",name:"Karim Benzema",national:"France"},{id:7,age:30,club:"Manchester United",name:"Robin Van Persie",national:"Holland"},{id:8,age:28,club:"Manchester City",name:"David Silva",national:"Spain"},{id:9,age:35,club:"Juventus",name:"Andrea Pirlo",national:"Italy"},{id:10,age:34,club:"Juventus",name:"Andrea Pirlo",national:"Italy"},{id:11,age:34,club:"Real Madrid",name:"Andrea Pirlo",national:"Italy"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-editor-template"]],decls:11,vars:3,consts:[["editable","",3,"data"],["field","id","header","Id","width","25px"],["field","name","header","Name"],["dtEditor",""],["field","age","header","Age"],["field","club","header","Club"],["field","national","header","National"],["dtColumn","","frozen","right","width","40px",3,"columnNgStyle"],["required","","hideRequiredMarker","",3,"formControl"],["type","number","required","","hideRequiredMarker","",3,"formControl"],["required","","hideRequiredMarker","",3,"formControl","options"],["type","button","mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],[3,"ngIf","ngIfElse"],["editing",""],["mat-menu-item","",3,"click"]],template:function(e,t){1&e&&(a.Qb(0,"dt-table",0),a.Mb(1,"dt-column",1),a.Qb(2,"dt-column",2),a.xc(3,$,1,1,"ng-template",3),a.Pb(),a.Qb(4,"dt-column",4),a.xc(5,ee,1,1,"ng-template",3),a.Pb(),a.Qb(6,"dt-column",5),a.xc(7,ne,1,3,"ng-template",3),a.Pb(),a.Qb(8,"dt-column",6),a.xc(9,se,1,3,"ng-template",3),a.Pb(),a.xc(10,re,8,3,"ng-template",7),a.Pb()),2&e&&(a.gc("data",t.players),a.Ab(10),a.gc("columnNgStyle",a.hc(2,le)))},directives:[o.a,r.b,l.a,r.c,c.a,u.u,u.o,u.e,c.e,m.a,V,Z.a,N,i.k,Y],styles:[""]}),e})()}];let ue=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[s.e.forChild(ce)],s.e]}),e})();var me=n("e+wM");let he=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[i.c,ue,me.a,c.b,u.i,m.b,Z.b,W,u.t,c.f]]}),e})()}}]);