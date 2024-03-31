"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6104],{6104:(k,a,e)=>{e.r(a),e.d(a,{DocsComponentStructureModule:()=>f});var i=e(1368),r=e(2992),s=e(1560),p=e(9044),d=e(1040),t=e(4496),c=e(6884),u=e(9676);const m=()=>["../theme-layouts"],h=[{path:"",component:(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["msk-docs-component-structure"]],decls:115,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],[3,"appearance","type"],[1,"bg-card","my-8","rounded","p-8","shadow"],[1,"h-120","relative","rounded","border-2","border-gray-400","p-6","pt-12"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-gray-500"],[1,"relative","h-full","w-full","rounded","border-2","border-purple-400","p-6","pt-12"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-purple-500"],[1,"relative","h-full","w-full","rounded","border-2","border-green-400"],[1,"bg-card","absolute","left-0","top-0","-mt-px","ml-3","-translate-y-1/2","px-2","font-medium","text-green-500"],[1,"flex","h-full","w-full"],[1,"relative","w-1/4","border-r-2","border-green-400"],[1,"absolute","left-0","top-0","p-3","pl-6","font-medium","text-green-700"],[1,"flex","w-3/4","flex-col"],[1,"relative","h-12","w-full","border-b-2","border-green-400"],[1,"relative","flex","w-full","flex-auto"],[1,"relative","h-12","w-full","border-t-2","border-green-400"],["msk-highlight","","lang","typescript"],[3,"routerLink"]],template:function(n,y){1&n&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t.OEk(5," Documentation "),t.C$Y(),t.wR5(6,"mat-icon",5),t.I0R(7,"a",4),t.OEk(8," Guides "),t.C$Y(),t.wR5(9,"mat-icon",5),t.I0R(10,"a",6),t.OEk(11," Component Structure "),t.C$Y()(),t.I0R(12,"div",7)(13,"h2",8),t.OEk(14," Component Structure "),t.C$Y()()()(),t.I0R(15,"div",9)(16,"msk-alert",10)(17,"span"),t.OEk(18," This project uses a route-based component loading strategy. There is component less and empty-path routes specifically structured to load components without hard coding them into templates. This provides great extensibility and scalability to the app and we strongly suggest you follow the same path. "),t.C$Y()(),t.I0R(19,"p"),t.OEk(20," Here's the diagram of this project default component structure for the reference: "),t.C$Y(),t.I0R(21,"div",11)(22,"div",12)(23,"span",13),t.OEk(24," AppComponent "),t.C$Y(),t.I0R(25,"div",14)(26,"span",15),t.OEk(27," LayoutComponent "),t.C$Y(),t.I0R(28,"div",16)(29,"span",17),t.OEk(30," Layout "),t.C$Y(),t.I0R(31,"div",18)(32,"div",19)(33,"span",20),t.OEk(34," Navigation "),t.C$Y()(),t.I0R(35,"div",21)(36,"div",22)(37,"span",20),t.OEk(38," Header "),t.C$Y()(),t.I0R(39,"div",23)(40,"span",20),t.OEk(41," <router-outlet> "),t.C$Y()(),t.I0R(42,"div",24)(43,"span",20),t.OEk(44," Footer "),t.C$Y()()()()()()()(),t.I0R(45,"h2"),t.OEk(46,"AppComponent"),t.C$Y(),t.I0R(47,"p"),t.OEk(48," This is the entry point of the application. It imports all the necessary modules in order for Project and your app to work. All 3rd party modules are also imported and configured here. "),t.C$Y(),t.I0R(49,"h2"),t.OEk(50,"LayoutComponent"),t.C$Y(),t.I0R(51,"p"),t.OEk(52," This component makes the layout switching easier. This project provides variety of different layouts like "),t.I0R(53,"strong"),t.OEk(54,"ClassicLayout"),t.C$Y(),t.OEk(55," or "),t.I0R(56,"strong"),t.OEk(57,"EnterpriseLayout"),t.C$Y(),t.OEk(58," and this component can load or switch those layouts at any time. "),t.C$Y(),t.I0R(59,"p"),t.OEk(60," To understand how "),t.I0R(61,"strong"),t.OEk(62,"LayoutComponent"),t.C$Y(),t.OEk(63," works, look at this portion of the "),t.I0R(64,"code"),t.OEk(65,"msk-shell.routes.ts"),t.C$Y(),t.OEk(66," file: "),t.C$Y(),t.I0R(67,"textarea",25),t.OEk(68,"      // Admin routes\n      {\n        path       : '',\n        canActivate: [AuthGuard],\n        canActivateChild: [AuthGuard],\n        component  : LayoutComponent,\n        resolve    : {\n          initialData: InitialDataResolver,\n        },\n        children   : [\n\n          // Dashboards\n          { path: 'dashboard', children: [\n\n          // Apps\n          { path: 'apps', children: [\n\n          ...\n        ]\n      }\n    "),t.C$Y(),t.I0R(69,"p"),t.OEk(70," As you can see, there is an empty-path route at the beginning of the "),t.I0R(71,"strong"),t.OEk(72,"Admin"),t.C$Y(),t.OEk(73," routes which essentially loads the "),t.I0R(74,"code"),t.OEk(75,"LayoutComponent"),t.C$Y(),t.OEk(76," into the "),t.I0R(77,"code"),t.OEk(78,"<router-outlet>"),t.C$Y(),t.OEk(79," of the "),t.I0R(80,"em"),t.OEk(81,"AppComponent"),t.C$Y(),t.OEk(82,". "),t.C$Y(),t.I0R(83,"p"),t.OEk(84," After that, "),t.I0R(85,"code"),t.OEk(86,"LayoutComponent"),t.C$Y(),t.OEk(87," loads the selected layout. All layouts includes a "),t.I0R(88,"code"),t.OEk(89,"<router-outlet>"),t.C$Y(),t.OEk(90," in their templates which then loads the actual component that's being requested depending on the active route. "),t.C$Y(),t.I0R(91,"p"),t.OEk(92," More detailed information about layouts can be found in the "),t.I0R(93,"a",26),t.OEk(94,"Theme layouts"),t.C$Y(),t.OEk(95," section of this documentation. "),t.C$Y(),t.I0R(96,"h2"),t.OEk(97,"Layout"),t.C$Y(),t.I0R(98,"p"),t.OEk(99," This is the selected layout that's being loaded by the "),t.I0R(100,"code"),t.OEk(101,"LayoutComponent"),t.C$Y(),t.OEk(102,". All layouts located at the "),t.I0R(103,"code"),t.OEk(104,"libs/client/web-app/shell/ui/layout"),t.C$Y(),t.OEk(105," directory and these layouts include common components like "),t.I0R(106,"strong"),t.OEk(107,"Navigation"),t.C$Y(),t.OEk(108,", "),t.I0R(109,"strong"),t.OEk(110,"Header"),t.C$Y(),t.OEk(111," and "),t.I0R(112,"strong"),t.OEk(113,"Footer"),t.C$Y(),t.OEk(114,". "),t.C$Y()()()),2&n&&(t.yG2(6),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(3),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(7),t.E7m("appearance","border")("type","info"),t.yG2(77),t.E7m("routerLink",t.q4q(5,m)))},dependencies:[r.ER,s.qL,c.W,u._],encapsulation:2})}return o})()}];let f=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.a4G({type:o});static#o=this.\u0275inj=t.s3X({imports:[i.MD,r.qQ.forChild(h),s.oB,p.I3,d.e]})}return o})()}}]);