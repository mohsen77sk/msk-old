"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5464],{5464:(f,n,e)=>{e.r(n),e.d(n,{DocsThemeLayoutsModule:()=>g});var r=e(6814),s=e(1896),i=e(617),c=e(619),l=e(8662),t=e(5879),h=e(7454),m=e(6734);const p=function(){return["/docs/services/config"]},d=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["msk-docs-theme-layouts"]],decls:90,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],[3,"appearance","type"],[3,"routerLink"],["msk-highlight","","lang","typescript"]],template:function(a,y){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5," Documentation "),t.qZA(),t._UZ(6,"mat-icon",5),t.TgZ(7,"a",4),t._uU(8," Guides "),t.qZA(),t._UZ(9,"mat-icon",5),t.TgZ(10,"a",6),t._uU(11," Theme Layouts "),t.qZA()(),t.TgZ(12,"div",7)(13,"h2",8),t._uU(14," Theme Layouts "),t.qZA()()()(),t.TgZ(15,"div",9)(16,"p"),t._uU(17," As previously mentioned, This project comes with a variety of different layouts. These layouts are on the theme level, meaning that when changed, they can completely alter the look of your app. "),t.qZA(),t.TgZ(18,"p"),t._uU(19," By default, layouts are applied automatically via the "),t.TgZ(20,"code"),t._uU(21,"LayoutComponent"),t.qZA(),t._uU(22,". The default layout is set by the "),t.TgZ(23,"code"),t._uU(24,"layout.config.ts"),t.qZA(),t._uU(25," file from "),t.TgZ(26,"strong"),t._uU(27,"libs/client/web-app/shell/ui/layout"),t.qZA(),t._uU(28," directory. This configuration file is supplied as the default configuration to the "),t.TgZ(29,"code"),t._uU(30,"MskConfigService"),t.qZA(),t._uU(31," which is a custom made configuration service to store, write and read application wide configurations. "),t.qZA(),t.TgZ(32,"msk-alert",10),t._uU(33," More detailed information about "),t.TgZ(34,"code"),t._uU(35,"MskConfigService"),t.qZA(),t._uU(36," can be found in the "),t.TgZ(37,"a",11),t._uU(38," Services > Config "),t.qZA(),t._uU(39," section of this documentation. "),t.qZA(),t.TgZ(40,"p"),t._uU(41," After the default layout is read and set from the configuration service, "),t.TgZ(42,"code"),t._uU(43,"LayoutComponent"),t.qZA(),t._uU(44," will also read the current route tree, walk through it starting from the root all the way to the current route and look for the "),t.TgZ(45,"strong"),t._uU(46,"layout"),t.qZA(),t._uU(47," key-value from the "),t.TgZ(48,"em"),t._uU(49,"data"),t.qZA(),t._uU(50," object. If found, "),t.TgZ(51,"code"),t._uU(52,"LayoutComponent"),t.qZA(),t._uU(53," will switch to that layout. This is particularly useful if you want to have different layouts for different portions of your app. "),t.qZA(),t.TgZ(54,"p"),t._uU(55," Here's an example from "),t.TgZ(56,"code"),t._uU(57,"msk-shell.routes.ts"),t.qZA(),t._uU(58," file that loads the "),t.TgZ(59,"code"),t._uU(60,"EmptyLayout"),t.qZA(),t._uU(61," for "),t.TgZ(62,"b"),t._uU(63,"authentication"),t.qZA(),t._uU(64," pages: "),t.qZA(),t.TgZ(65,"textarea",12),t._uU(66,"      // Auth routes (guest)\n      {\n        path: '',\n        canActivate: [NoAuthGuard],\n        canActivateChild: [NoAuthGuard],\n        component: LayoutComponent,\n        data: {\n          layout: 'empty'\n        },\n        children: [\n          {\n            path: 'sign-in'\n            ...\n          },\n        ]\n      }\n    "),t.qZA(),t.TgZ(67,"p"),t._uU(68,"And here's another example that loads the "),t.TgZ(69,"b"),t._uU(70,"classic"),t.qZA(),t._uU(71," layout:"),t.qZA(),t.TgZ(72,"textarea",12),t._uU(73,"      {\n        path       : 'some-path',\n        component  : SomeComponent,\n        data: {\n            layout: 'classic' // Load the classic layout for this route\n        }\n      }\n    "),t.qZA(),t.TgZ(74,"h2"),t._uU(75,"LayoutComponent"),t.qZA(),t.TgZ(76,"p"),t._uU(77," The "),t.TgZ(78,"code"),t._uU(79,"LayoutComponent"),t.qZA(),t._uU(80," plays an important part for managing important things such as the "),t.TgZ(81,"b"),t._uU(82,"current layout"),t.qZA(),t._uU(83," and the "),t.TgZ(84,"b"),t._uU(85,"color theme"),t.qZA(),t._uU(86,". Because of it, removing the "),t.TgZ(87,"code"),t._uU(88,"LayoutComponent"),t.qZA(),t._uU(89," and using the individual layouts by themselves is not possible. "),t.qZA()()()),2&a&&(t.xp6(6),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(23),t.Q6J("appearance","border")("type","info"),t.xp6(5),t.Q6J("routerLink",t.DdM(5,p)))},dependencies:[s.rH,i.Hw,h.E,m.k],encapsulation:2})}return o})()}];let g=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[r.ez,s.Bz.forChild(d),i.Ps,c.Di,l.i]})}return o})()}}]);