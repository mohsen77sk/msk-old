"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8025],{8025:(J,l,o)=>{o.r(l),o.d(l,{DocsCardModule:()=>I});var r=o(6814),h=o(1896),p=o(617),c=o(4104),d=o(2296),m=o(2495),g=o(5120),t=o(9212);function f(a,s){1&a&&(t.ynx(0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"div",2),t.Hsn(4,1),t.qZA(),t.BQk())}function x(a,s){1&a&&(t.TgZ(0,"div",4),t.Hsn(1,3),t.qZA()),2&a&&t.Q6J("@expandCollapse",void 0)}function u(a,s){if(1&a&&(t.ynx(0),t.Hsn(1,2),t.YNc(2,x,2,1,"div",3),t.BQk()),2&a){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",n.expanded)}}const v=[[["","mskCardFront",""]],[["","mskCardBack",""]],"*",[["","mskCardExpansion",""]]],b=["[mskCardFront]","[mskCardBack]","*","[mskCardExpansion]"];let Z=(()=>{class a{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"msk-card-expanded":this.expanded,"msk-card-face-back":this.flippable&&"back"===this.face,"msk-card-face-front":this.flippable&&"front"===this.face,"msk-card-flippable":this.flippable}}ngOnChanges(n){"expanded"in n&&(this.expanded=(0,m.Ig)(n.expanded.currentValue)),"flippable"in n&&(this.flippable=(0,m.Ig)(n.flippable.currentValue))}static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["msk-card"]],hostVars:2,hostBindings:function(e,i){2&e&&t.Tol(i.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["mskCard"],features:[t.TTD],ngContentSelectors:b,decls:2,vars:2,consts:[[4,"ngIf"],[1,"msk-card-front"],[1,"msk-card-back"],["class","msk-card-expansion",4,"ngIf"],[1,"msk-card-expansion"]],template:function(e,i){1&e&&(t.F$t(v),t.YNc(0,f,5,0,"ng-container",0)(1,u,3,1,"ng-container",0)),2&e&&(t.Q6J("ngIf",i.flippable),t.xp6(),t.Q6J("ngIf",!i.flippable))},dependencies:[r.O5],styles:["msk-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--color-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}msk-card.msk-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}msk-card.msk-card-flippable.msk-card-face-back .msk-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}msk-card.msk-card-flippable.msk-card-face-back .msk-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}msk-card.msk-card-flippable .msk-card-front,msk-card.msk-card-flippable .msk-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--color-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}msk-card.msk-card-flippable .msk-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}msk-card.msk-card-flippable .msk-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:g.w}})}return a})(),k=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[r.ez]})}return a})();var _=o(8662),w=o(6734);function T(a,s){1&a&&(t.TgZ(0,"div",24)(1,"div",25)(2,"msk-card"),t._uU(3," This content is in the card and it doesn't have any style applied to it! "),t.qZA()()())}function y(a,s){1&a&&t._UZ(0,"mat-icon",35),2&a&&t.Q6J("svgIcon","heroicons_solid:chevron-down")}function A(a,s){1&a&&t._UZ(0,"mat-icon",35),2&a&&t.Q6J("svgIcon","heroicons_solid:chevron-up")}function C(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"msk-card",26,27)(4,"div",28),t._uU(5,"Title of the card"),t.qZA(),t.TgZ(6,"div",7),t._uU(7," A paragraph, an image, a form or simply anything can go here to create the content of the card. "),t.qZA(),t.TgZ(8,"div",29)(9,"button",30),t.NdJ("click",function(){t.CHM(n);const i=t.MAs(3);return t.KtG(i.expanded=!i.expanded)}),t.TgZ(10,"span",31),t._uU(11,"Details"),t.qZA(),t.YNc(12,y,1,1,"mat-icon",32)(13,A,1,1,"mat-icon",32),t.qZA()(),t.ynx(14,33),t.TgZ(15,"div",34),t._uU(16," This is the expansion and holds an extra information! "),t.qZA(),t.BQk(),t.qZA()()()}if(2&a){const n=t.MAs(3);t.xp6(12),t.Q6J("ngIf",!n.expanded),t.xp6(),t.Q6J("ngIf",n.expanded)}}function U(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"msk-card",36,27),t.ynx(4,37),t.TgZ(5,"div",38)(6,"div",28),t._uU(7,"Title of the card"),t.qZA(),t.TgZ(8,"div",7),t._uU(9," A paragraph, an image, a form or simply anything can go here to create the content of the card. "),t.qZA(),t.TgZ(10,"div",39)(11,"button",40),t.NdJ("click",function(){t.CHM(n);const i=t.MAs(3);return t.KtG(i.face="back")}),t._UZ(12,"mat-icon",35),t.qZA()()(),t.BQk(),t.ynx(13,41),t.TgZ(14,"div",42)(15,"div",43)(16,"button",40),t.NdJ("click",function(){t.CHM(n);const i=t.MAs(3);return t.KtG(i.face="front")}),t._UZ(17,"mat-icon",35),t.qZA()(),t.TgZ(18,"p",44),t._uU(19," This is the back of the card and holds an extra information! "),t.qZA(),t.TgZ(20,"p",44),t._uU(21," Also, the "),t.TgZ(22,"em"),t._uU(23,"back"),t.qZA(),t._uU(24," side of the card holds more information than the "),t.TgZ(25,"em"),t._uU(26,"front"),t.qZA(),t._uU(27," of the card which causes scrollbars to appear. "),t.qZA()(),t.BQk(),t.qZA()()()}2&a&&(t.xp6(2),t.Q6J("flippable",!0),t.xp6(9),t.Q6J("color","primary"),t.xp6(),t.Q6J("svgIcon","heroicons_outline:arrow-right"),t.xp6(4),t.Q6J("color","primary"),t.xp6(),t.Q6J("svgIcon","heroicons_outline:arrow-left"))}const q=[{path:"",component:(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["msk-docs-card"]],decls:135,vars:8,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["msk-highlight","","lang","typescript"],[1,"bg-card","rounded","px-6","py-3","shadow"],[1,"text-md","text-secondary","font-mono"],[1,"whitespace-nowrap"],[1,"bg-card","mt-4","rounded","shadow"],[1,"text-secondary","border-b","px-6","py-3","font-mono"],[1,"p-6"],[1,"example-viewer"],[1,"title"],[3,"animationDuration"],["label","Preview"],["matTabContent",""],["label","HTML"],["msk-highlight","",3,"lang"],[1,"bg-gray-100","p-4"],[1,"max-w-80","mx-auto"],[1,"flex","flex-col","px-8","py-6","pb-4"],["mskCard",""],[1,"text-lg","font-bold"],[1,"-mx-3","mt-3"],["mat-button","","color","primary",1,"px-3",3,"click"],[1,"ml-1"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mskCardExpansion",""],[1,"my-2"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col",3,"flippable"],["mskCardFront",""],[1,"flex","flex-col","px-8","py-6","pb-3"],[1,"-mx-3","mt-3","self-end"],["mat-icon-button","",3,"color","click"],["mskCardBack",""],[1,"flex","flex-auto","flex-col","px-8","py-6","pt-3"],[1,"-mx-3","mb-2"],[1,"text-secondary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5," Documentation "),t.qZA(),t._UZ(6,"mat-icon",5),t.TgZ(7,"a",4),t._uU(8," Components "),t.qZA(),t._UZ(9,"mat-icon",5),t.TgZ(10,"a",6),t._uU(11," Card "),t.qZA()(),t.TgZ(12,"div",7)(13,"h2",8),t._uU(14," Card "),t.qZA()()()(),t.TgZ(15,"div",9)(16,"p")(17,"strong"),t._uU(18,"msk-card"),t.qZA(),t._uU(19," is a basic card component to show any kind of information or content with features like flipping and expanding. "),t.qZA(),t.TgZ(20,"p")(21,"strong"),t._uU(22,"Exported as: "),t.qZA(),t.TgZ(23,"code"),t._uU(24,"mskCard"),t.qZA()(),t.TgZ(25,"h2"),t._uU(26,"Module"),t.qZA(),t.TgZ(27,"textarea",10),t._uU(28,"      import { MskCardModule } from '@msk/client/shared/ui/card';\n    "),t.qZA(),t.TgZ(29,"h2"),t._uU(30,"Properties"),t.qZA(),t.TgZ(31,"div",11)(32,"table")(33,"thead")(34,"tr")(35,"th"),t._uU(36,"Name"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Description"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Default"),t.qZA()()(),t.TgZ(41,"tbody")(42,"tr")(43,"td",12)(44,"div"),t._uU(45,"@Input()"),t.qZA(),t.TgZ(46,"div"),t._uU(47,"flippable: boolean"),t.qZA()(),t.TgZ(48,"td"),t._uU(49,"Whether the card is flippable."),t.qZA(),t.TgZ(50,"td")(51,"code",13),t._uU(52,"false"),t.qZA()()()()()(),t.TgZ(53,"h2"),t._uU(54,"Methods"),t.qZA(),t.TgZ(55,"div",14)(56,"div",15),t._uU(57," expand(): void "),t.qZA(),t.TgZ(58,"div",16),t._uU(59,"Expands the expansion of the card."),t.qZA()(),t.TgZ(60,"div",14)(61,"div",15),t._uU(62," collapse(): void "),t.qZA(),t.TgZ(63,"div",16),t._uU(64,"Collapses the expansion of the card."),t.qZA()(),t.TgZ(65,"div",14)(66,"div",15),t._uU(67," toggleExpanded(): void "),t.qZA(),t.TgZ(68,"div",16),t._uU(69,"Toggles the expanded status of the expansion."),t.qZA()(),t.TgZ(70,"div",14)(71,"div",15),t._uU(72," flip(): void "),t.qZA(),t.TgZ(73,"div",16),t._uU(74,"Flip the card."),t.qZA()(),t.TgZ(75,"h2"),t._uU(76,"Usage"),t.qZA(),t.TgZ(77,"p"),t._uU(78," Just wrap the content or the information with "),t.TgZ(79,"code"),t._uU(80,"msk-card"),t.qZA(),t._uU(81," to show them within the card. "),t.TgZ(82,"strong"),t._uU(83,"msk-card"),t.qZA(),t._uU(84," doesn't apply any kind of style to its content to make customization simpler: "),t.qZA(),t.TgZ(85,"div",17)(86,"div",18)(87,"h6"),t._uU(88,"Example"),t.qZA()(),t.TgZ(89,"mat-tab-group",19)(90,"mat-tab",20),t.YNc(91,T,4,0,"ng-template",21),t.qZA(),t.TgZ(92,"mat-tab",22)(93,"textarea",23),t._uU(94,"            <msk-card>\n              This content is in the card and it doesn't have any style applied to it!\n            </msk-card>\n          "),t.qZA()()()(),t.TgZ(95,"h3"),t._uU(96,"Expandable"),t.qZA(),t.TgZ(97,"p"),t._uU(98," Expandable "),t.TgZ(99,"strong"),t._uU(100,"msk-card"),t.qZA(),t._uU(101," holds an extra content or information hidden in its expandable area which can be toggled by accessing the component itself via a template reference: "),t.qZA(),t.TgZ(102,"div",17)(103,"div",18)(104,"h6"),t._uU(105,"Example"),t.qZA()(),t.TgZ(106,"mat-tab-group",19)(107,"mat-tab",20),t.YNc(108,C,17,2,"ng-template",21),t.qZA(),t.TgZ(109,"mat-tab",22)(110,"textarea",23),t._uU(111,'            <msk-card\n              class="flex flex-col px-8 py-6 pb-4"\n              #mskCard>\n              <div class="text-lg font-bold">Title of the card</div>\n              <div class="mt-2">\n                  A paragraph, an image, a form or simply anything can go here to create the content of the card.\n              </div>\n              <div class="mt-3 -mx-3">\n                <button\n                  class="px-3"\n                  mat-button\n                  [color]="\'primary\'"\n                  (click)="mskCard.expanded = !mskCard.expanded">\n                  <span class="ml-1">Details</span>\n                  <mat-icon\n                    class="icon-size-5"\n                    *ngIf="!mskCard.expanded"\n                    [svgIcon]="\'heroicons_solid:chevron-down\'"></mat-icon>\n                  <mat-icon\n                    class="icon-size-5"\n                    *ngIf="mskCard.expanded"\n                    [svgIcon]="\'heroicons_solid:chevron-up\'"></mat-icon>\n                </button>\n              </div>\n\n              \x3c!-- Expansion --\x3e\n              <ng-container mskCardExpansion>\n                <div class="my-2">\n                  This is the expansion and holds an extra information!\n                </div>\n              </ng-container>\n            </msk-card>\n          '),t.qZA()()()(),t.TgZ(112,"h3"),t._uU(113,"Flippable"),t.qZA(),t.TgZ(114,"p"),t._uU(115," Flippable card holds content or information on both sides and can be flipped by accessing the component itself via a template reference. The only limitation with this type of cards is that the "),t.TgZ(116,"em"),t._uU(117,"back"),t.qZA(),t._uU(118," of the card will share the same height as the "),t.TgZ(119,"em"),t._uU(120,"front"),t.qZA(),t._uU(121," of the card. If the "),t.TgZ(122,"em"),t._uU(123,"back"),t.qZA(),t._uU(124," side has more content, scrollbar will appear. "),t.qZA(),t.TgZ(125,"div",17)(126,"div",18)(127,"h6"),t._uU(128,"Example"),t.qZA()(),t.TgZ(129,"mat-tab-group",19)(130,"mat-tab",20),t.YNc(131,U,28,5,"ng-template",21),t.qZA(),t.TgZ(132,"mat-tab",22)(133,"textarea",23),t._uU(134,'            <msk-card\n              class="flex flex-col"\n              [flippable]="true"\n              #mskCard>\n              \x3c!-- Front --\x3e\n              <ng-container mskCardFront>\n                <div class="flex flex-col px-8 py-6 pb-3">\n                  <div class="text-lg font-bold">Title of the card</div>\n                  <div class="mt-2">\n                    A paragraph, an image, a form or simply anything can go here to create the content of the card.\n                  </div>\n                  <div class="mt-3 -mx-3 self-end">\n                    <button\n                      mat-icon-button\n                      [color]="\'primary\'"\n                      (click)="mskCard.face = \'back\'">\n                        <mat-icon\n                          class="icon-size-5"\n                          [svgIcon]="\'heroicons_outline:arrow-right\'"></mat-icon>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n\n              \x3c!-- Back --\x3e\n              <ng-container mskCardBack>\n                <div class="flex flex-col flex-auto px-8 py-6 pt-3">\n                  <div class="mb-2 -mx-3">\n                    <button\n                      mat-icon-button\n                      [color]="\'primary\'"\n                      (click)="mskCard.face = \'front\'">\n                      <mat-icon\n                        class="icon-size-5"\n                        [svgIcon]="\'heroicons_outline:arrow-left\'"></mat-icon>\n                    </button>\n                  </div>\n                  <p class="text-secondary">\n                    This is the back of the card and holds an extra information!\n                  </p>\n                  <p class="text-secondary">\n                    Also, the <em>back</em> side of the card holds more information than the <em>front</em> of the card\n                    which causes scrollbars to appear.\n                  </p>\n                </div>\n              </ng-container>\n            </msk-card>\n          '),t.qZA()()()()()()),2&e&&(t.xp6(6),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(80),t.Q6J("animationDuration","0ms"),t.xp6(4),t.Q6J("lang","html"),t.xp6(13),t.Q6J("animationDuration","0ms"),t.xp6(4),t.Q6J("lang","html"),t.xp6(19),t.Q6J("animationDuration","0ms"),t.xp6(4),t.Q6J("lang","html"))},dependencies:[r.O5,p.Hw,c.Vc,c.uX,c.SP,d.lW,d.RK,Z,w.k],styles:["msk-docs-card .example-viewer{display:flex;flex-direction:column;margin:32px 0;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--color-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}msk-docs-card .example-viewer .title{display:flex;align-items:center;justify-content:space-between;height:56px;min-height:56px;max-height:56px;padding:0 40px;border-bottom-width:1px}msk-docs-card .example-viewer .title h6{font-weight:700}msk-docs-card .example-viewer .title .controls{display:flex;align-items:center}\n"],encapsulation:2})}return a})()}];let I=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[r.ez,h.Bz.forChild(q),p.Ps,c.Nh,d.ot,k,_.i]})}return a})()}}]);