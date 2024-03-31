"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6240],{6240:(y,n,e)=>{e.r(n),e.d(n,{DocsThemeLayoutsModule:()=>f});var l=e(1368),s=e(2992),i=e(1560),c=e(9044),h=e(1040),t=e(4496),u=e(6884),m=e(9676);const d=()=>["/docs/services/config"],p=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["msk-docs-theme-layouts"]],decls:90,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],[3,"appearance","type"],[3,"routerLink"],["msk-highlight","","lang","typescript"]],template:function(a,E){1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t.OEk(5," Documentation "),t.C$Y(),t.wR5(6,"mat-icon",5),t.I0R(7,"a",4),t.OEk(8," Guides "),t.C$Y(),t.wR5(9,"mat-icon",5),t.I0R(10,"a",6),t.OEk(11," Theme Layouts "),t.C$Y()(),t.I0R(12,"div",7)(13,"h2",8),t.OEk(14," Theme Layouts "),t.C$Y()()()(),t.I0R(15,"div",9)(16,"p"),t.OEk(17," As previously mentioned, This project comes with a variety of different layouts. These layouts are on the theme level, meaning that when changed, they can completely alter the look of your app. "),t.C$Y(),t.I0R(18,"p"),t.OEk(19," By default, layouts are applied automatically via the "),t.I0R(20,"code"),t.OEk(21,"LayoutComponent"),t.C$Y(),t.OEk(22,". The default layout is set by the "),t.I0R(23,"code"),t.OEk(24,"layout.config.ts"),t.C$Y(),t.OEk(25," file from "),t.I0R(26,"strong"),t.OEk(27,"libs/client/web-app/shell/ui/layout"),t.C$Y(),t.OEk(28," directory. This configuration file is supplied as the default configuration to the "),t.I0R(29,"code"),t.OEk(30,"MskConfigService"),t.C$Y(),t.OEk(31," which is a custom made configuration service to store, write and read application wide configurations. "),t.C$Y(),t.I0R(32,"msk-alert",10),t.OEk(33," More detailed information about "),t.I0R(34,"code"),t.OEk(35,"MskConfigService"),t.C$Y(),t.OEk(36," can be found in the "),t.I0R(37,"a",11),t.OEk(38," Services > Config "),t.C$Y(),t.OEk(39," section of this documentation. "),t.C$Y(),t.I0R(40,"p"),t.OEk(41," After the default layout is read and set from the configuration service, "),t.I0R(42,"code"),t.OEk(43,"LayoutComponent"),t.C$Y(),t.OEk(44," will also read the current route tree, walk through it starting from the root all the way to the current route and look for the "),t.I0R(45,"strong"),t.OEk(46,"layout"),t.C$Y(),t.OEk(47," key-value from the "),t.I0R(48,"em"),t.OEk(49,"data"),t.C$Y(),t.OEk(50," object. If found, "),t.I0R(51,"code"),t.OEk(52,"LayoutComponent"),t.C$Y(),t.OEk(53," will switch to that layout. This is particularly useful if you want to have different layouts for different portions of your app. "),t.C$Y(),t.I0R(54,"p"),t.OEk(55," Here's an example from "),t.I0R(56,"code"),t.OEk(57,"msk-shell.routes.ts"),t.C$Y(),t.OEk(58," file that loads the "),t.I0R(59,"code"),t.OEk(60,"EmptyLayout"),t.C$Y(),t.OEk(61," for "),t.I0R(62,"b"),t.OEk(63,"authentication"),t.C$Y(),t.OEk(64," pages: "),t.C$Y(),t.I0R(65,"textarea",12),t.OEk(66,"      // Auth routes (guest)\n      {\n        path: '',\n        canActivate: [NoAuthGuard],\n        canActivateChild: [NoAuthGuard],\n        component: LayoutComponent,\n        data: {\n          layout: 'empty'\n        },\n        children: [\n          {\n            path: 'sign-in'\n            ...\n          },\n        ]\n      }\n    "),t.C$Y(),t.I0R(67,"p"),t.OEk(68,"And here's another example that loads the "),t.I0R(69,"b"),t.OEk(70,"classic"),t.C$Y(),t.OEk(71," layout:"),t.C$Y(),t.I0R(72,"textarea",12),t.OEk(73,"      {\n        path       : 'some-path',\n        component  : SomeComponent,\n        data: {\n            layout: 'classic' // Load the classic layout for this route\n        }\n      }\n    "),t.C$Y(),t.I0R(74,"h2"),t.OEk(75,"LayoutComponent"),t.C$Y(),t.I0R(76,"p"),t.OEk(77," The "),t.I0R(78,"code"),t.OEk(79,"LayoutComponent"),t.C$Y(),t.OEk(80," plays an important part for managing important things such as the "),t.I0R(81,"b"),t.OEk(82,"current layout"),t.C$Y(),t.OEk(83," and the "),t.I0R(84,"b"),t.OEk(85,"color theme"),t.C$Y(),t.OEk(86,". Because of it, removing the "),t.I0R(87,"code"),t.OEk(88,"LayoutComponent"),t.C$Y(),t.OEk(89," and using the individual layouts by themselves is not possible. "),t.C$Y()()()),2&a&&(t.yG2(6),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(3),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(23),t.E7m("appearance","border")("type","info"),t.yG2(5),t.E7m("routerLink",t.q4q(5,d)))},dependencies:[s.ER,i.qL,u.W,m._],encapsulation:2})}return o})()}];let f=(()=>{class o{static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275mod=t.a4G({type:o});static#o=this.\u0275inj=t.s3X({imports:[l.MD,s.qQ.forChild(p),i.oB,c.I3,h.e]})}return o})()}}]);