"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6132],{6132:(p,i,t)=>{t.r(i),t.d(i,{DocsConfigModule:()=>u});var a=t(1368),c=t(2992),s=t(1560),l=t(1040),e=t(4496),f=t(9676);const g=[{path:"",component:(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=e.In1({type:n,selectors:[["msk-docs-config"]],decls:77,vars:2,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["msk-highlight","","lang","typescript"]],template:function(o,m){1&o&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),e.OEk(5," Documentation "),e.C$Y(),e.wR5(6,"mat-icon",5),e.I0R(7,"a",4),e.OEk(8," Services "),e.C$Y(),e.wR5(9,"mat-icon",5),e.I0R(10,"a",6),e.OEk(11," Config "),e.C$Y()(),e.I0R(12,"div",7)(13,"h2",8),e.OEk(14," Config "),e.C$Y()()()(),e.I0R(15,"div",9)(16,"p")(17,"strong"),e.OEk(18,"MskConfigService"),e.C$Y(),e.OEk(19," is a singleton service to store and access an application wide configuration object. It can be used to store any kind of data and can be accessed from anywhere within your application. "),e.C$Y(),e.I0R(20,"h2"),e.OEk(21,"Module"),e.C$Y(),e.I0R(22,"textarea",10),e.OEk(23,"      import { MskConfigModule } from '@msk/client/shared/services/config';\n    "),e.C$Y(),e.I0R(24,"h2"),e.OEk(25,"Default configuration"),e.C$Y(),e.I0R(26,"p"),e.OEk(27," By default, the application wide configuration is stored in "),e.I0R(28,"code"),e.OEk(29,"@msk/client/web-app/shell/ui/layout"),e.C$Y(),e.OEk(30," file and it includes the "),e.I0R(31,"strong"),e.OEk(32,"layout style"),e.C$Y(),e.OEk(33," as well as the "),e.I0R(34,"strong"),e.OEk(35,"color theme"),e.C$Y(),e.OEk(36," configurations: "),e.C$Y(),e.I0R(37,"textarea",10),e.OEk(38,"      import { LayoutConfig } from '@msk/client/web-app/shell/ui/layout';\n\n      // Types\n      export type LayoutDirection = 'ltr' | 'rtl';\n      export type LayoutScheme = 'auto' | 'dark' | 'light';\n      export type LayoutScreens = { [key: string]: string };\n      export type LayoutTheme = 'theme-default' | string;\n      export type LayoutThemes = { id: string; name: string }[];\n\n      /**\n        * LayoutConfig interface. Update this interface to strictly type your config\n        * object.\n        */\n      export interface AppConfig\n      {\n        language: string;\n        direction: LayoutDirection;\n        screens: LayoutScreens;\n        scheme: LayoutScheme;\n        themes: LayoutThemes;\n        theme: LayoutTheme;\n        type: LayoutType;\n      }\n\n      /**\n        * Default configuration for the entire application. This object is used by\n        * MskConfigService to set the default configuration.\n        *\n        * If you need to store global configuration for your app, you can use this\n        * object to set the defaults. To access, update and reset the config, use\n        * MskConfigService and its methods.\n        *\n        * \"Screens\" are carried over to the BreakpointObserver for accessing them within\n        * components, and they are required.\n        *\n        * \"Themes\" are required for Tailwind to generate themes.\n        */\n      export const appConfig: AppConfig = {\n        language: 'en',\n        direction: 'ltr',\n        layout : 'classy',\n        scheme : 'light',\n        screens: {\n          sm: '600px',\n          md: '960px',\n          lg: '1280px',\n          xl: '1440px'\n        },\n        theme  : 'theme-default',\n        themes : [\n          {\n            id  : 'theme-default',\n            name: 'Default'\n          },\n          {\n            id  : 'theme-teal',\n            name: 'Teal'\n          },\n          {\n            id  : 'theme-purple',\n            name: 'Purple'\n          },\n          {\n            id  : 'theme-amber',\n            name: 'Amber'\n          }\n        ]\n      };\n    "),e.C$Y(),e.I0R(39,"p"),e.OEk(40," The default configuration is supplied to the "),e.I0R(41,"strong"),e.OEk(42,"MskConfigService"),e.C$Y(),e.OEk(43," using the "),e.I0R(44,"code"),e.OEk(45,"MskConfigModule.forRoot()"),e.C$Y(),e.OEk(46," in "),e.I0R(47,"strong"),e.OEk(48,"MskWebShellModule"),e.C$Y(),e.OEk(49,": "),e.C$Y(),e.I0R(50,"textarea",10),e.OEk(51,"      import { layoutConfig } from '@msk/client/web-app/shell/ui/layout';\n\n      ...\n\n      imports: [\n        MskConfigModule.forRoot(layoutConfig),\n      ...\n    "),e.C$Y(),e.I0R(52,"h2"),e.OEk(53,"Methods"),e.C$Y(),e.I0R(54,"p"),e.OEk(55," To set a configuration use "),e.I0R(56,"code"),e.OEk(57,"config"),e.C$Y(),e.OEk(58," setter on "),e.I0R(59,"strong"),e.OEk(60,"MskConfigService"),e.C$Y(),e.OEk(61,". The setter will intelligently merge the configuration by replacing only the given options if they exist while preserving others. If the supplied option does not exist on the configuration, it will be added: "),e.C$Y(),e.I0R(62,"textarea",10),e.OEk(63,"      import { MskConfigService } from '@msk/client/shared/services/config';\n\n      /**\n        * Constructor\n        */\n      constructor(private _mskConfigService: MskConfigService)\n      {\n        this._mskConfigService.config = { type: 'classy' };\n      }\n    "),e.C$Y(),e.I0R(64,"p"),e.OEk(65," To get the configuration use "),e.I0R(66,"code"),e.OEk(67,"config$"),e.C$Y(),e.OEk(68," getter on "),e.I0R(69,"strong"),e.OEk(70,"MskConfigService"),e.C$Y(),e.OEk(71," which returns an "),e.I0R(72,"code"),e.OEk(73,"Observable"),e.C$Y(),e.OEk(74," of the configuration object: "),e.C$Y(),e.I0R(75,"textarea",10),e.OEk(76,"      import { MskConfigService } from '@msk/client/shared/services/config';\n      import { layoutConfig } from '@msk/client/web-app/shell/ui/layout';\n\n      config!: layoutConfig;\n\n      /**\n        * Constructor\n        */\n      constructor(private _mskConfigService: MskConfigService)\n      {\n        this._mskConfigService.config$\n          .pipe(takeUntil(this._unsubscribeAll))\n          .subscribe((layoutConfig: LayoutConfig) => {\n            this.layoutConfig = layoutConfig;\n          }\n      });\n    "),e.C$Y()()()),2&o&&(e.yG2(6),e.E7m("svgIcon","heroicons_solid:chevron-right"),e.yG2(3),e.E7m("svgIcon","heroicons_solid:chevron-right"))},dependencies:[s.qL,f._],encapsulation:2})}return n})()}];let u=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=e.a4G({type:n});static#t=this.\u0275inj=e.s3X({imports:[a.MD,c.qQ.forChild(g),s.oB,l.e]})}return n})()}}]);