(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[7630],{8752:(g,d,e)=>{var l={"./i18n/en.json":[7560,7560],"./i18n/fa.json":[9772,9772]};function c(i){if(!e.o(l,i))return Promise.resolve().then(()=>{var m=new Error("Cannot find module '"+i+"'");throw m.code="MODULE_NOT_FOUND",m});var p=l[i],u=p[0];return e.e(p[1]).then(()=>e.t(u,19))}c.keys=()=>Object.keys(l),c.id=8752,g.exports=c},7630:(g,d,e)=>{"use strict";e.r(d),e.d(d,{AuthTwoStepVerificationModule:()=>b});var l=e(1368),c=e(2992),i=e(6504),p=e(1560),u=e(9880),m=e(8416),v=e(7816),y=e(3840),f=e(4060),S=e(9044),x=e(2976),w=e(4700),C=e(7928),R=e(288),t=e(4496),I=e(6884),T=e(1768);const Y=["towStepNgForm"];function $(o,r){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const n=r.$implicit;t.yG2(),t.oRS(" ",n("towStep.two-step-verification")," ")}}function G(o,r){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const n=r.$implicit;t.yG2(),t.oRS(" ",n("towStep.enter-the-code-sent-to-you")," ")}}function k(o,r){if(1&o&&(t.I0R(0,"msk-alert",27),t.OEk(1),t.C$Y()),2&o){const n=t.GaO();t.E7m("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),t.yG2(),t.oRS(" ",n.alert.message," ")}}function E(o,r){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const n=r.$implicit;t.yG2(),t.oRS(" ",n("towStep.code")," ")}}function V(o,r){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const n=r.$implicit;t.yG2(),t.oRS(" ",n("required")," ")}}function A(o,r){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const n=r.$implicit;t.yG2(),t.oRS(" ",n("towStep.sign-in")," ")}}function F(o,r){1&o&&(t.I0R(0,"span"),t.yuY(1,A,2,1,"ng-container",7),t.C$Y())}const O=[{path:"",component:(()=>{class o{constructor(n){this._formBuilder=n,this.showAlert=!1,this.alert={type:"success",message:""}}ngOnInit(){this.towStepForm=this._formBuilder.group({code:["",i.AQ.required]})}verification(){this.towStepForm.invalid||(this.towStepForm.disable(),this.showAlert=!1)}static#t=this.\u0275fac=function(a){return new(a||o)(t.GI1(i.KE))};static#o=this.\u0275cmp=t.In1({type:o,selectors:[["msk-two-step-verification"]],viewQuery:function(a,s){if(1&a&&t.CC$(Y,5),2&a){let h;t.wto(h=t.Gqi())&&(s.towStepNgForm=h.first)}},decls:33,vars:7,consts:[[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center","md:p-8"],[1,"sm:bg-card","flex","overflow-hidden","sm:rounded-2xl","sm:shadow","md:w-full","md:max-w-6xl"],[1,"w-full","px-4","py-8","sm:w-auto","sm:p-12","md:p-16"],[1,"max-w-80","mx-auto","w-full","sm:mx-0","sm:w-80"],[1,"w-12"],["src","assets/images/logo/logo.svg","alt","logo"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[4,"transloco"],[1,"mt-0.5","flex","items-baseline","font-medium"],["class","-mb-4 mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["towStepNgForm","ngForm"],[1,"w-full"],["id","code","matInput","","formControlName","code"],[4,"transloco","translocoRead"],["mat-flat-button","",1,"msk-mat-button-large","mt-6","w-full",3,"color","disabled","mskSpinner","click"],[4,"ngIf"],[1,"relative","hidden","h-full","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","ltr:dark:border-l","rtl:dark:border-r","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"-mb-4","mt-8",3,"appearance","showIcon","type"]],template:function(a,s){1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.wR5(5,"img",5),t.C$Y(),t.I0R(6,"div",6),t.yuY(7,$,2,1,"ng-container",7),t.C$Y(),t.I0R(8,"div",8)(9,"div"),t.yuY(10,G,2,1,"ng-container",7),t.C$Y()(),t.yuY(11,k,2,5,"msk-alert",9),t.I0R(12,"form",10,11)(14,"mat-form-field",12)(15,"mat-label"),t.yuY(16,E,2,1,"ng-container",7),t.C$Y(),t.wR5(17,"input",13),t.I0R(18,"mat-error"),t.yuY(19,V,2,1,"ng-container",14),t.C$Y()(),t.I0R(20,"button",15),t.qCj("click",function(){return s.verification()}),t.yuY(21,F,2,0,"span",16),t.C$Y()()()(),t.I0R(22,"div",17),t.S2Z(),t.I0R(23,"svg",18)(24,"g",19),t.wR5(25,"circle",20)(26,"circle",21),t.C$Y()(),t.I0R(27,"svg",22)(28,"defs")(29,"pattern",23),t.wR5(30,"rect",24),t.C$Y()(),t.wR5(31,"rect",25),t.C$Y(),t.gRP(),t.wR5(32,"div",26),t.C$Y()()()),2&a&&(t.yG2(11),t.E7m("ngIf",s.showAlert),t.yG2(),t.E7m("formGroup",s.towStepForm),t.yG2(7),t.E7m("translocoRead","error-validation"),t.yG2(),t.E7m("color","primary")("disabled",s.towStepForm.disabled)("mskSpinner",s.towStepForm.disabled),t.yG2(),t.E7m("ngIf",!s.towStepForm.disabled))},dependencies:[l.u_,i.sz,i.ot,i.ue,i.u,i.uW,i.Wo,m.yi,f.Up,f.w5,f.wJ,v.Gw,I.W,T.c,w.IZ],encapsulation:2,data:{animation:R.w}})}return o})()}];let b=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#o=this.\u0275mod=t.a4G({type:o});static#e=this.\u0275inj=t.s3X({providers:[(0,w.oH)({scope:"towStep",loader:(0,C.s)((n,a)=>e(8752)(`./${a}/${n}.json`))})],imports:[l.MD,c.qQ.forChild(O),i.y,i.sl,p.oB,u._A,m.cN,v.oJ,y.Vn,f.wb,S.I3,x.E,w.kJ]})}return o})()}}]);