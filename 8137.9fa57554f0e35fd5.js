(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8137],{5001:(w,f,r)=>{var l={"./i18n/en.json":[33,2306],"./i18n/fa.json":[333,333]};function c(e){if(!r.o(l,e))return Promise.resolve().then(()=>{var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d});var m=l[e],p=m[0];return r.e(m[1]).then(()=>r.t(p,19))}c.keys=()=>Object.keys(l),c.id=5001,w.exports=c},8137:(w,f,r)=>{"use strict";r.r(f),r.d(f,{AuthForgotPasswordModule:()=>O});var l=r(6814),c=r(1896),e=r(6223),m=r(617),p=r(7988),d=r(4516),x=r(2296),v=r(5986),g=r(4170),y=r(619),P=r(2813),u=r(6560),Z=r(3025),F=r(5120),o=r(5879),T=r(7454),C=r(3965);const A=["forgotPasswordNgForm"];function U(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.forgot-password")," ")}}function N(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.forgot-password-description")," ")}}function k(t,s){if(1&t&&(o.TgZ(0,"msk-alert",29),o._uU(1),o.qZA()),2&t){const n=o.oxw();o.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),o.xp6(1),o.hij(" ",n.alert.message," ")}}function Q(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.username")," ")}}function j(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("required")," ")}}function B(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.send-reset-link")," ")}}function J(t,s){1&t&&(o.TgZ(0,"span"),o.YNc(1,B,2,1,"ng-container",7),o.qZA())}function Y(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.return-to")," ")}}function I(t,s){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const n=s.$implicit;o.xp6(1),o.hij(" ",n("forgotPassword.sign-in")," ")}}const b=function(){return["/sign-in"]},$=[{path:"",component:(()=>{class t{constructor(n){this._formBuilder=n,this.showAlert=!1,this.alert={type:"success",message:""}}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({username:["",e.kI.required]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1)}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(e.QS))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["msk-forgot-password"]],viewQuery:function(i,a){if(1&i&&o.Gf(A,5),2&i){let h;o.iGM(h=o.CRH())&&(a.forgotPasswordNgForm=h.first)}},decls:37,vars:9,consts:[[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center","md:p-8"],[1,"sm:bg-card","flex","overflow-hidden","sm:rounded-2xl","sm:shadow","md:w-full","md:max-w-6xl"],[1,"w-full","px-4","py-8","sm:w-auto","sm:p-12","md:p-16"],[1,"max-w-80","mx-auto","w-full","sm:mx-0","sm:w-80"],[1,"w-12"],["src","assets/images/logo/logo.svg","alt","logo"],[1,"mt-8","text-3xl","font-extrabold","leading-tight","tracking-tight"],[4,"transloco"],[1,"mt-0.5","font-medium"],["class","-mb-4 mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","username","matInput","","formControlName","username"],[4,"transloco","translocoRead"],["mat-flat-button","",1,"msk-mat-button-large","mt-3","w-full",3,"color","disabled","mskSpinner","click"],[4,"ngIf"],[1,"text-secondary","text-md","mt-8","font-medium"],[1,"text-primary-500","ml-1","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","ltr:dark:border-l","rtl:dark:border-r","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"-mb-4","mt-8",3,"appearance","showIcon","type"]],template:function(i,a){1&i&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),o._UZ(5,"img",5),o.qZA(),o.TgZ(6,"div",6),o.YNc(7,U,2,1,"ng-container",7),o.qZA(),o.TgZ(8,"div",8),o.YNc(9,N,2,1,"ng-container",7),o.qZA(),o.YNc(10,k,2,5,"msk-alert",9),o.TgZ(11,"form",10,11)(13,"mat-form-field",12)(14,"mat-label"),o.YNc(15,Q,2,1,"ng-container",7),o.qZA(),o._UZ(16,"input",13),o.TgZ(17,"mat-error"),o.YNc(18,j,2,1,"ng-container",14),o.qZA()(),o.TgZ(19,"button",15),o.NdJ("click",function(){return a.sendResetLink()}),o.YNc(20,J,2,0,"span",16),o.qZA(),o.TgZ(21,"div",17)(22,"span"),o.YNc(23,Y,2,1,"ng-container",7),o.qZA(),o.TgZ(24,"a",18),o.YNc(25,I,2,1,"ng-container",7),o.qZA()()()()(),o.TgZ(26,"div",19),o.O4$(),o.TgZ(27,"svg",20)(28,"g",21),o._UZ(29,"circle",22)(30,"circle",23),o.qZA()(),o.TgZ(31,"svg",24)(32,"defs")(33,"pattern",25),o._UZ(34,"rect",26),o.qZA()(),o._UZ(35,"rect",27),o.qZA(),o.kcU(),o._UZ(36,"div",28),o.qZA()()()),2&i&&(o.xp6(10),o.Q6J("ngIf",a.showAlert),o.xp6(1),o.Q6J("formGroup",a.forgotPasswordForm),o.xp6(7),o.Q6J("translocoRead","error-validation"),o.xp6(1),o.Q6J("color","primary")("disabled",a.forgotPasswordForm.disabled)("mskSpinner",a.forgotPasswordForm.disabled),o.xp6(1),o.Q6J("ngIf",!a.forgotPasswordForm.disabled),o.xp6(4),o.Q6J("routerLink",o.DdM(8,b)))},dependencies:[l.O5,c.rH,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,d.Nt,g.KE,g.hX,g.TO,x.lW,T.E,C.M,u.KI],encapsulation:2,data:{animation:F.w}})}return t})()}];let O=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({providers:[{provide:u.Hn,useValue:{scope:"forgotPassword",loader:(0,Z.Q)((n,i)=>r(5001)(`./${i}/${n}.json`))}}],imports:[l.ez,c.Bz.forChild($),e.u5,e.UX,m.Ps,p.Tx,d.c,x.ot,v.p9,g.lN,y.Di,P.N,u.y4]})}return t})()}}]);