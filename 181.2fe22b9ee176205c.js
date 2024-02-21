"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[181],{181:(u,s,a)=>{a.r(s),a.d(s,{DocsMustMatchModule:()=>m});var i=a(6814),d=a(1896),r=a(617),h=a(8662),t=a(9212),c=a(6734);const l=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["msk-docs-must-match"]],decls:77,vars:2,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["msk-highlight","","lang","typescript"],[1,"bg-card","mb-4","rounded","px-6","py-3","shadow"],[1,"text-md","text-secondary","font-mono"],["msk-highlight","","lang","html"]],template:function(o,p){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5," Documentation "),t.qZA(),t._UZ(6,"mat-icon",5),t.TgZ(7,"a",4),t._uU(8," Validators "),t.qZA(),t._UZ(9,"mat-icon",5),t.TgZ(10,"a",6),t._uU(11," MustMatch "),t.qZA()(),t.TgZ(12,"div",7)(13,"h2",8),t._uU(14," MustMatch "),t.qZA()()()(),t.TgZ(15,"div",9)(16,"p"),t._uU(17," The "),t.TgZ(18,"code"),t._uU(19,"mustMatch"),t.qZA(),t._uU(20," validator can be used to check if two different form fields has the same value. For example, a "),t.TgZ(21,"strong"),t._uU(22,"Confirm password"),t.qZA(),t._uU(23," should have the same value with the "),t.TgZ(24,"strong"),t._uU(25,"Password"),t.qZA(),t._uU(26," field. To validate that, the "),t.TgZ(27,"code"),t._uU(28,"mustMatch"),t.qZA(),t._uU(29," validator can be used. "),t.qZA(),t.TgZ(30,"h3"),t._uU(31,"Usage"),t.qZA(),t.TgZ(32,"textarea",10),t._uU(33,"      MskValidators.mustMatch(controlPath, matchingControlPath)\n    "),t.qZA(),t.TgZ(34,"h3"),t._uU(35,"Parameters"),t.qZA(),t.TgZ(36,"div",11)(37,"table")(38,"thead")(39,"tr")(40,"th"),t._uU(41,"Name"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Description"),t.qZA()()(),t.TgZ(44,"tbody")(45,"tr")(46,"td",12)(47,"div"),t._uU(48,"controlPath: string"),t.qZA()(),t.TgZ(49,"td"),t._uU(50," A dot-delimited string values that define the path to the control. "),t.qZA()(),t.TgZ(51,"tr")(52,"td",12)(53,"div"),t._uU(54,"matchingControlPath: string"),t.qZA()(),t.TgZ(55,"td"),t._uU(56," A dot-delimited string values that define the path to the matching control. "),t.qZA()()()()(),t.TgZ(57,"p"),t._uU(58," Because the "),t.TgZ(59,"code"),t._uU(60,"mustMatch"),t.qZA(),t._uU(61," validator requires parameters, it must be used within the "),t.TgZ(62,"code"),t._uU(63,"validators"),t.qZA(),t._uU(64," option of the form builder: "),t.qZA(),t.TgZ(65,"textarea",10),t._uU(66,"      import { MskValidators } from '@msk/client/shared/validators';\n\n      // Create the reset password form\n      this.resetPasswordForm = this._formBuilder.group(\n        {\n          password       : ['', Validators.required],\n          passwordConfirm: ['', Validators.required]\n        },\n        {\n          validators: MskValidators.mustMatch('password', 'passwordConfirm')\n        }\n      );\n    "),t.qZA(),t.TgZ(67,"p"),t._uU(68," To show an error message on the field, the "),t.TgZ(69,"code"),t._uU(70,"mat-error"),t.qZA(),t._uU(71," element can be used within the "),t.TgZ(72,"code"),t._uU(73,"mat-form-field"),t.qZA(),t._uU(74,": "),t.qZA(),t.TgZ(75,"textarea",13),t._uU(76,"      <mat-error *ngIf=\"resetPasswordForm.get('passwordConfirm').hasError('mustMatch')\">\n        Passwords must match\n      </mat-error>\n    "),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"))},dependencies:[r.Hw,c.k],encapsulation:2})}return e})()}];let m=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[i.ez,d.Bz.forChild(l),r.Ps,h.i]})}return e})()}}]);