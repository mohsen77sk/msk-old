"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6409],{6409:(Z,a,e)=>{e.r(a),e.d(a,{DocsComponentStructureModule:()=>g});var l=e(6814),r=e(1896),s=e(617),i=e(619),p=e(8662),t=e(9212),d=e(7454),c=e(6734);const h=()=>["../theme-layouts"],m=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["msk-docs-component-structure"]],decls:115,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],[3,"appearance","type"],[1,"bg-card","my-8","rounded","p-8","shadow"],[1,"h-120","relative","rounded","border-2","border-gray-400","p-6","pt-12"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-gray-500"],[1,"relative","h-full","w-full","rounded","border-2","border-purple-400","p-6","pt-12"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-purple-500"],[1,"relative","h-full","w-full","rounded","border-2","border-green-400"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-green-500"],[1,"flex","h-full","w-full"],[1,"relative","w-1/4","border-r-2","border-green-400"],[1,"absolute","left-0","top-0","p-3","pl-6","font-medium","text-green-700"],[1,"flex","w-3/4","flex-col"],[1,"relative","h-12","w-full","border-b-2","border-green-400"],[1,"relative","flex","w-full","flex-auto"],[1,"relative","h-12","w-full","border-t-2","border-green-400"],["msk-highlight","","lang","typescript"],[3,"routerLink"]],template:function(n,y){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t._uU(5," Documentation "),t.qZA(),t._UZ(6,"mat-icon",5),t.TgZ(7,"a",4),t._uU(8," Guides "),t.qZA(),t._UZ(9,"mat-icon",5),t.TgZ(10,"a",6),t._uU(11," Component Structure "),t.qZA()(),t.TgZ(12,"div",7)(13,"h2",8),t._uU(14," Component Structure "),t.qZA()()()(),t.TgZ(15,"div",9)(16,"msk-alert",10)(17,"span"),t._uU(18," This project uses a route-based component loading strategy. There is component less and empty-path routes specifically structured to load components without hard coding them into templates. This provides great extensibility and scalability to the app and we strongly suggest you follow the same path. "),t.qZA()(),t.TgZ(19,"p"),t._uU(20," Here's the diagram of this project default component structure for the reference: "),t.qZA(),t.TgZ(21,"div",11)(22,"div",12)(23,"span",13),t._uU(24," AppComponent "),t.qZA(),t.TgZ(25,"div",14)(26,"span",15),t._uU(27," LayoutComponent "),t.qZA(),t.TgZ(28,"div",16)(29,"span",17),t._uU(30," Layout "),t.qZA(),t.TgZ(31,"div",18)(32,"div",19)(33,"span",20),t._uU(34," Navigation "),t.qZA()(),t.TgZ(35,"div",21)(36,"div",22)(37,"span",20),t._uU(38," Header "),t.qZA()(),t.TgZ(39,"div",23)(40,"span",20),t._uU(41," <router-outlet> "),t.qZA()(),t.TgZ(42,"div",24)(43,"span",20),t._uU(44," Footer "),t.qZA()()()()()()()(),t.TgZ(45,"h2"),t._uU(46,"AppComponent"),t.qZA(),t.TgZ(47,"p"),t._uU(48," This is the entry point of the application. It imports all the necessary modules in order for Project and your app to work. All 3rd party modules are also imported and configured here. "),t.qZA(),t.TgZ(49,"h2"),t._uU(50,"LayoutComponent"),t.qZA(),t.TgZ(51,"p"),t._uU(52," This component makes the layout switching easier. This project provides variety of different layouts like "),t.TgZ(53,"strong"),t._uU(54,"ClassicLayout"),t.qZA(),t._uU(55," or "),t.TgZ(56,"strong"),t._uU(57,"EnterpriseLayout"),t.qZA(),t._uU(58," and this component can load or switch those layouts at any time. "),t.qZA(),t.TgZ(59,"p"),t._uU(60," To understand how "),t.TgZ(61,"strong"),t._uU(62,"LayoutComponent"),t.qZA(),t._uU(63," works, look at this portion of the "),t.TgZ(64,"code"),t._uU(65,"msk-shell.routes.ts"),t.qZA(),t._uU(66," file: "),t.qZA(),t.TgZ(67,"textarea",25),t._uU(68,"      // Admin routes\n      {\n        path       : '',\n        canActivate: [AuthGuard],\n        canActivateChild: [AuthGuard],\n        component  : LayoutComponent,\n        resolve    : {\n          initialData: InitialDataResolver,\n        },\n        children   : [\n\n          // Dashboards\n          { path: 'dashboard', children: [\n\n          // Apps\n          { path: 'apps', children: [\n\n          ...\n        ]\n      }\n    "),t.qZA(),t.TgZ(69,"p"),t._uU(70," As you can see, there is an empty-path route at the beginning of the "),t.TgZ(71,"strong"),t._uU(72,"Admin"),t.qZA(),t._uU(73," routes which essentially loads the "),t.TgZ(74,"code"),t._uU(75,"LayoutComponent"),t.qZA(),t._uU(76," into the "),t.TgZ(77,"code"),t._uU(78,"<router-outlet>"),t.qZA(),t._uU(79," of the "),t.TgZ(80,"em"),t._uU(81,"AppComponent"),t.qZA(),t._uU(82,". "),t.qZA(),t.TgZ(83,"p"),t._uU(84," After that, "),t.TgZ(85,"code"),t._uU(86,"LayoutComponent"),t.qZA(),t._uU(87," loads the selected layout. All layouts includes a "),t.TgZ(88,"code"),t._uU(89,"<router-outlet>"),t.qZA(),t._uU(90," in their templates which then loads the actual component that's being requested depending on the active route. "),t.qZA(),t.TgZ(91,"p"),t._uU(92," More detailed information about layouts can be found in the "),t.TgZ(93,"a",26),t._uU(94,"Theme layouts"),t.qZA(),t._uU(95," section of this documentation. "),t.qZA(),t.TgZ(96,"h2"),t._uU(97,"Layout"),t.qZA(),t.TgZ(98,"p"),t._uU(99," This is the selected layout that's being loaded by the "),t.TgZ(100,"code"),t._uU(101,"LayoutComponent"),t.qZA(),t._uU(102,". All layouts located at the "),t.TgZ(103,"code"),t._uU(104,"libs/client/web-app/shell/ui/layout"),t.qZA(),t._uU(105," directory and these layouts include common components like "),t.TgZ(106,"strong"),t._uU(107,"Navigation"),t.qZA(),t._uU(108,", "),t.TgZ(109,"strong"),t._uU(110,"Header"),t.qZA(),t._uU(111," and "),t.TgZ(112,"strong"),t._uU(113,"Footer"),t.qZA(),t._uU(114,". "),t.qZA()()()),2&n&&(t.xp6(6),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(7),t.Q6J("appearance","border")("type","info"),t.xp6(77),t.Q6J("routerLink",t.DdM(5,h)))},dependencies:[r.rH,s.Hw,d.E,c.k],encapsulation:2})}return o})()}];let g=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.ez,r.Bz.forChild(m),s.Ps,i.Di,p.i]})}return o})()}}]);