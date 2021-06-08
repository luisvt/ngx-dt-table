(self.webpackChunkngx_dt_table=self.webpackChunkngx_dt_table||[]).push([[527],{7527:function(t,e,o){"use strict";o.r(e),o.d(e,{ColumnFilterModule:function(){return L}});var n=o(2994),a=o(4500),i=o(8311),l=o(4621),r=(o(7160),o(4250)),c=o(4850),s=o(579);const u=["button"],g=["*"],d=new i.OlP("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),p=new i.OlP("MatButtonToggleGroup");let b=0;class m{constructor(t,e){this.source=t,this.value=e}}class h{}const f=(0,c.Kr)(h);let y=(()=>{class t extends f{constructor(t,e,o,n,a,l){super(),this._changeDetectorRef=e,this._elementRef=o,this._focusMonitor=n,this._isSingleSelector=!1,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new i.vpe;const r=Number(a);this.tabIndex=r||0===r?r:null,this.buttonToggleGroup=t,this.appearance=l&&l.appearance?l.appearance:"standard"}get buttonId(){return`${this.id}-button`}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){const e=(0,l.Ig)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=(0,l.Ig)(t)}ngOnInit(){const t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this.id=this.id||"mat-button-toggle-"+b++,this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){const t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){const t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new m(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(p,8),i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(s.tE),i.$8M("tabindex"),i.Y36(d,8))},t.\u0275cmp=i.Xpm({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){if(1&t&&i.Gf(u,5),2&t){let t;i.iGM(t=i.CRH())&&(e._buttonElement=t.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(t,e){1&t&&i.NdJ("focus",function(){return e.focus()}),2&t&&(i.uIk("aria-label",null)("aria-labelledby",null)("id",e.id)("name",null),i.ekj("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[i.qOj],ngContentSelectors:g,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(i.F$t(),i.TgZ(0,"button",0,1),i.NdJ("click",function(){return e._onButtonClick()}),i.TgZ(2,"span",2),i.Hsn(3),i.qZA(),i.qZA(),i._UZ(4,"span",3),i._UZ(5,"span",4)),2&t){const t=i.MAs(1);i.Q6J("id",e.buttonId)("disabled",e.disabled||null),i.uIk("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),i.xp6(5),i.Q6J("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[c.wG],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[c.BQ,c.si],c.BQ]}),t})();var _=o(9906),v=o(8401),x=o(7831),T=o(6181),A=o(9618),Z=o(7190),C=o(458);function w(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",14),i.NdJ("click",function(){return i.CHM(t),i.oxw(),i.MAs(5).applyFilters()}),i._uU(1,"Search"),i.qZA()}}function B(t,e){1&t&&(i.TgZ(0,"mat-icon"),i._uU(1,"north"),i.qZA())}function G(t,e){1&t&&(i.TgZ(0,"mat-icon"),i._uU(1,"south"),i.qZA())}function M(t,e){if(1&t&&(i.YNc(0,B,2,0,"mat-icon",15),i.YNc(1,G,2,0,"mat-icon",15)),2&t){const t=e.$implicit;i.Q6J("ngIf",t.sortable&&1===t.sortDirection),i.xp6(1),i.Q6J("ngIf",t.sortable&&-1===t.sortDirection)}}function S(t,e){1&t&&i._UZ(0,"matx-input",16),2&t&&i.Q6J("formControl",e.$implicit.name)}function I(t,e){1&t&&(i.TgZ(0,"div",17),i._UZ(1,"matx-input",18),i.TgZ(2,"span",19),i._uU(3,"<=>"),i.qZA(),i._UZ(4,"matx-input",20),i.qZA()),2&t&&i.Q6J("formGroup",e.$implicit.age)}const J=function(){return["Barcelona","Real Madrid","Liverpool","Borussia Dortmund","Manchester United","Manchester City","Juventus"]};function R(t,e){1&t&&i._UZ(0,"matx-select",21),2&t&&i.Q6J("formControl",e.$implicit.club)("options",i.DdM(2,J))}const F=function(){return["Argentina","Brazil","Portugal","England","Germany","France","Holland","Spain","Italy"]};function N(t,e){1&t&&i._UZ(0,"matx-select",22),2&t&&i.Q6J("formControl",e.$implicit.national)("options",i.DdM(2,F))}const U=[{path:"",component:(()=>{class t{constructor(){this.players=[{id:1,age:27,club:"Barcelona",name:"Leonel Messi",national:"Argentina"},{id:2,age:29,club:"Real Madrid",name:"Cristiano Ronaldo",national:"Portugal"},{id:3,age:34,club:"Liverpool",name:"Steven Gerrard",national:"England"},{id:4,age:22,club:"Barcelona",name:"Neymar",national:"Brazil"},{id:5,age:25,club:"Borussia Dortmund",name:"Marco Reus",national:"Germany"},{id:6,age:26,club:"Real Madrid",name:"Karim Benzema",national:"France"},{id:7,age:30,club:"Manchester United",name:"Robin Van Persie",national:"Holland"},{id:8,age:28,club:"Manchester City",name:"David Silva",national:"Spain"},{id:9,age:35,club:"Juventus",name:"Andrea Pirlo",national:"Italy"}],this.filteringAction="Start"}ngOnInit(){}toggleFiltering(t,e){t.source.checked?(e.startFiltering(),this.filteringAction="End"):(e.endFiltering(),this.filteringAction="Start")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-column-filter"]],decls:16,vars:3,consts:[[3,"change"],["mat-raised-button","","color","primary","style","margin-left: 15px",3,"click",4,"ngIf"],[3,"data"],["playersTable",""],["dtSortColumnIcon",""],["field","id","header","Id"],["field","name","header","Name","comparison","*=","sortable",""],[3,"formControl",4,"dtColumnFilter"],["field","age","header","Age","comparison","<=>","sortable",""],["style","display: flex; flex-direction: row; width: 100%",3,"formGroup",4,"dtColumnFilter"],["field","club","header","Club","sortable",""],["noneText","All",3,"formControl","options",4,"dtColumnFilter"],["field","national","header","National","sortable","","comparison","in"],["multiple","",3,"formControl","options",4,"dtColumnFilter"],["mat-raised-button","","color","primary",2,"margin-left","15px",3,"click"],[4,"ngIf"],[3,"formControl"],[2,"display","flex","flex-direction","row","width","100%",3,"formGroup"],["type","number","formControlName","min","min","0","max","100",2,"flex","1","min-width","25px"],[2,"margin","auto"],["type","number","formControlName","max","min","0","max","100",2,"flex","1","min-width","25px"],["noneText","All",3,"formControl","options"],["multiple","",3,"formControl","options"]],template:function(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"mat-button-toggle",0),i.NdJ("change",function(o){i.CHM(t);const n=i.MAs(5);return e.toggleFiltering(o,n)}),i._uU(2),i.qZA(),i.YNc(3,w,2,0,"button",1),i.qZA(),i.TgZ(4,"dt-table",2,3),i.YNc(6,M,2,2,"ng-template",4),i._UZ(7,"dt-column",5),i.TgZ(8,"dt-column",6),i.YNc(9,S,1,1,"matx-input",7),i.qZA(),i.TgZ(10,"dt-column",8),i.YNc(11,I,5,1,"div",9),i.qZA(),i.TgZ(12,"dt-column",10),i.YNc(13,R,1,3,"matx-select",11),i.qZA(),i.TgZ(14,"dt-column",12),i.YNc(15,N,1,3,"matx-select",13),i.qZA(),i.qZA()}2&t&&(i.xp6(2),i.hij("",e.filteringAction," Filtering"),i.xp6(1),i.Q6J("ngIf","End"===e.filteringAction),i.xp6(1),i.Q6J("data",e.players))},directives:[y,n.O5,_.W,v.Y,x.yc,T.E,A.lW,Z.Hw,C.D5,r.JJ,r.oH,r.JL,r.sg,r.u,C.CX],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.Bz.forChild(U)],a.Bz]}),t})();var D=o(7718);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.ez,q,D.TC,C.Lb,r.UX,A.ot,k,C.If,Z.Ps]]}),t})()}}]);