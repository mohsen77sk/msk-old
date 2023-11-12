"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[931],{931:(d,h,i)=>{i.r(h),i.d(h,{DocsHighlightModule:()=>u});var s=i(6814),a=i(1896),n=i(617),l=i(8662),t=i(5879),r=i(6734);const c=[{path:"",component:(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["msk-docs-highlight"]],decls:112,vars:2,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["msk-highlight","","lang","typescript"],["msk-highlight","","lang","html"],[1,"bg-card","rounded","px-6","py-3","shadow"],[1,"text-md","text-secondary","font-mono"],["href","https://highlightjs.org/usage/","rel","noreferrer","target","_blank"]],template:function(o,m){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5," Documentation "),t.qZA(),t._UZ(6,"mat-icon",5),t.TgZ(7,"a",4),t._uU(8," Components "),t.qZA(),t._UZ(9,"mat-icon",5),t.TgZ(10,"a",6),t._uU(11," Highlight "),t.qZA()(),t.TgZ(12,"div",7)(13,"h2",8),t._uU(14," Highlight "),t.qZA()()()(),t.TgZ(15,"div",9)(16,"p")(17,"strong"),t._uU(18,"msk-highlight"),t.qZA(),t._uU(19," is a syntax highlighter component to display syntax highlighted codes within the content. Internally, it uses "),t.TgZ(20,"em"),t._uU(21,"highlight.js"),t.qZA(),t._uU(22,". "),t.qZA(),t.TgZ(23,"p")(24,"strong"),t._uU(25,"Exported as: "),t.qZA(),t.TgZ(26,"code"),t._uU(27,"mskHighlight"),t.qZA()(),t.TgZ(28,"h2"),t._uU(29,"Module"),t.qZA(),t.TgZ(30,"textarea",10),t._uU(31,"            import { MskHighlightModule } from '@msk/client/shared/ui/highlight';\n        "),t.qZA(),t.TgZ(32,"h2"),t._uU(33,"Usage"),t.qZA(),t.TgZ(34,"p"),t._uU(35,"Here's the basic usage of the "),t.TgZ(36,"code"),t._uU(37,"msk-highlight"),t.qZA(),t._uU(38,":"),t.qZA(),t.TgZ(39,"textarea",11),t._uU(40,"      <"),t._uU(41,'textarea msk-highlight lang="html">'),t._uU(42,"\n        <"),t._uU(43,"div>"),t._uU(44,"Some HTML code to highlight<"),t._uU(45,"/div>"),t._uU(46,"\n      <"),t._uU(47,"/textarea>"),t._uU(48,"\n    "),t.qZA(),t.TgZ(49,"p")(50,"code"),t._uU(51,"msk-highlight"),t.qZA(),t._uU(52," doesn't have its own selector and cannot be used like any other components. It must be used with a "),t.TgZ(53,"code"),t._uU(54,"<textarea>"),t.qZA(),t._uU(55,". "),t.qZA(),t.TgZ(56,"p"),t._uU(57," The main reason of this is that the Angular parses the templates before binding and running components. Because of this mechanic, anything you place into templates will be taken as a literal content and parsed by Angular. Only the contents of a "),t.TgZ(58,"code"),t._uU(59,"<textarea>"),t.qZA(),t._uU(60," can be preserved as is. "),t.qZA(),t.TgZ(61,"h2"),t._uU(62,"Properties"),t.qZA(),t.TgZ(63,"div",12)(64,"table")(65,"thead")(66,"tr")(67,"th"),t._uU(68,"Name"),t.qZA(),t.TgZ(69,"th"),t._uU(70,"Description"),t.qZA(),t.TgZ(71,"th"),t._uU(72,"Default"),t.qZA()()(),t.TgZ(73,"tbody")(74,"tr")(75,"td",13)(76,"div"),t._uU(77,"@Input()"),t.qZA(),t.TgZ(78,"div"),t._uU(79,"code: string"),t.qZA()(),t.TgZ(80,"td"),t._uU(81," Piece of code to highlight. If "),t.TgZ(82,"strong"),t._uU(83,"code"),t.qZA(),t._uU(84," input is not provided, the actual content of the "),t.TgZ(85,"strong"),t._uU(86,"textarea"),t.qZA(),t._uU(87," will be used. "),t.qZA(),t.TgZ(88,"td"),t._uU(89,"-"),t.qZA()(),t.TgZ(90,"tr")(91,"td",13)(92,"div"),t._uU(93,"@Input()"),t.qZA(),t.TgZ(94,"div"),t._uU(95,"lang: string"),t.qZA()(),t.TgZ(96,"td"),t._uU(97," Which language to highlight the code. See: "),t.TgZ(98,"a",14),t._uU(99,"https://highlightjs.org/usage/ "),t.qZA(),t._uU(100," for full list of supported languages. "),t.qZA(),t.TgZ(101,"td"),t._uU(102,"-"),t.qZA()()()()(),t.TgZ(103,"h2"),t._uU(104,"Service"),t.qZA(),t.TgZ(105,"p"),t._uU(106," The "),t.TgZ(107,"code"),t._uU(108,"MskHighlightService"),t.qZA(),t._uU(109," can also be used to format and highlight code: "),t.qZA(),t.TgZ(110,"textarea",10),t._uU(111,"      import { MskHighlightService } from '@msk/client/shared/ui/highlight';\n\n      code = '<div> Some code to highlight </div>'\n\n      /**\n        * Constructor\n        */\n      constructor(private _mskHighlightService: MskHighlightService)\n      {\n        const highlightedCode = this._mskHighlightService.highlight(code, 'html');\n      }\n    "),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"))},dependencies:[n.Hw,r.k],encapsulation:2})}return e})()}];let u=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[s.ez,a.Bz.forChild(c),n.Ps,l.i]})}return e})()}}]);