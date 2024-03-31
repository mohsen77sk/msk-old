"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[6832],{6832:(k,o,e)=>{e.r(o),e.d(o,{DocsFindByKeyModule:()=>h});var r=e(1368),c=e(2992),s=e(1560),l=e(1040),t=e(4496),d=e(9676);const g=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275cmp=t.In1({type:n,selectors:[["msk-docs-find-by-key"]],decls:73,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-y-auto"],[1,"flex-0","bg-card","flex","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","space-x-1","font-medium","leading-4","rtl:space-x-reverse"],[1,"text-primary-500","whitespace-nowrap"],[1,"icon-size-4","text-secondary","mat-icon-rtl-mirror",3,"svgIcon"],[1,"text-secondary","whitespace-nowrap"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["msk-highlight","","lang","typescript"],["msk-highlight","","lang","html"]],template:function(a,p){1&a&&(t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t.OEk(5," Documentation "),t.C$Y(),t.wR5(6,"mat-icon",5),t.I0R(7,"a",4),t.OEk(8," Pipes "),t.C$Y(),t.wR5(9,"mat-icon",5),t.I0R(10,"a",6),t.OEk(11," FindByKey "),t.C$Y()(),t.I0R(12,"div",7)(13,"h2",8),t.OEk(14," FindByKey "),t.C$Y()()()(),t.I0R(15,"div",9)(16,"p")(17,"strong"),t.OEk(18,"mskFindByKey"),t.C$Y(),t.OEk(19," is a helper pipe that finds entries from an object using given key-source set. "),t.C$Y(),t.I0R(20,"h2"),t.OEk(21,"Module"),t.C$Y(),t.I0R(22,"textarea",10),t.OEk(23,"      import { MskFindByKeyPipeModule } from '@msk/client/shared/pipe/find-by-key';\n    "),t.C$Y(),t.I0R(24,"h2"),t.OEk(25,"Usage"),t.C$Y(),t.I0R(26,"textarea",11),t.OEk(27,"      value | mskFindByKey:key:source\n    "),t.C$Y(),t.I0R(28,"p"),t.OEk(29," Consider this array of objects representing the "),t.I0R(30,"em"),t.OEk(31,"tags"),t.C$Y(),t.OEk(32," and "),t.I0R(33,"em"),t.OEk(34,"tasks"),t.C$Y(),t.OEk(35," data stored on the backend: "),t.C$Y(),t.I0R(36,"textarea",10),t.OEk(37,"      const tags = [\n        {\n          id   : 'tag-00',\n          title: 'Api',\n          color: 'red'\n        },\n        {\n          id   : 'tag-01',\n          title: 'Frontend',\n          color: 'blue'\n        },\n        {\n          id   : 'tag-02',\n          title: 'Bug',\n          color: 'green'\n        }\n      ];\n\n      const tasks = [\n        {\n          id   : 'task-00',\n          title: 'Company internal application v2.0.0',\n          tags : [\n            'tag-00',\n            'tag-01'\n          ]\n        },\n        {\n          id   : 'task-01',\n          title: 'Create the landing/marketing page and host it on the beta channel',\n          tags : [\n            'tag-02'\n          ]\n        },\n        {\n          id   : 'task-01',\n          title: 'Move dependency system to Yarn for easier package management',\n          tags : [\n            'tag-00',\n            'tag-01',\n            'tag-02'\n          ]\n        }\n      ]\n    "),t.C$Y(),t.I0R(38,"p"),t.OEk(39," Normally, you would "),t.I0R(40,"em"),t.OEk(41,"join"),t.C$Y(),t.OEk(42," these two data together in the backend before sending it to the frontend so you can access tags of a task right from the task itself: "),t.C$Y(),t.I0R(43,"textarea",10),t.OEk(44,"      const tasksWithTags = [\n        {\n          id   : 'task-00',\n          title: 'Company internal application v2.0.0',\n          tags : [\n            {\n              id   : 'tag-00',\n              title: 'Api',\n              color: 'red'\n            },\n            {\n              id   : 'tag-01',\n              title: 'Frontend',\n              color: 'blue'\n            }\n          ]\n        },\n        {\n          id   : 'task-01',\n          title: 'Create the landing/marketing page and host it on the beta channel',\n          tags : [\n            {\n              id   : 'tag-02',\n              title: 'Bug',\n              color: 'green'\n            }\n          ]\n        },\n        {\n          id   : 'task-01',\n          title: 'Move dependency system to Yarn for easier package management',\n          tags : [\n            {\n              id   : 'tag-00',\n              title: 'Api',\n              color: 'red'\n            },\n            {\n              id   : 'tag-01',\n              title: 'Frontend',\n              color: 'blue'\n            },\n            {\n              id   : 'tag-02',\n              title: 'Bug',\n              color: 'green'\n            }\n          ]\n        }\n      ]\n    "),t.C$Y(),t.I0R(45,"p"),t.OEk(46," But, let's say you cannot "),t.I0R(47,"em"),t.OEk(48,"join"),t.C$Y(),t.OEk(49," them. You have no access to the backend app or you cannot make any changes to it and you have to work with what you have. In this case, you can use the "),t.I0R(50,"code"),t.OEk(51,"mskFindByKey"),t.C$Y(),t.OEk(52," pipe to get the tags of a task without joining the two data using javascript: "),t.C$Y(),t.I0R(53,"textarea",11),t.OEk(54),t.C$Y(),t.I0R(55,"p"),t.OEk(56," The above code will iterate through the tasks, and for each task, it will also iterate the task's tags. "),t.C$Y(),t.I0R(57,"p")(58,"code"),t.OEk(59,"task.tags"),t.C$Y(),t.OEk(60," array normally holds the "),t.I0R(61,"em"),t.OEk(62,"ids"),t.C$Y(),t.OEk(63," of the assigned tags. But using "),t.I0R(64,"code"),t.OEk(65,"mskFindByKey"),t.C$Y(),t.OEk(66," pipe, we can use those "),t.I0R(67,"em"),t.OEk(68,"ids"),t.C$Y(),t.OEk(69," to extract the actual tag object from the "),t.I0R(70,"em"),t.OEk(71,"tags"),t.C$Y(),t.OEk(72," array. "),t.C$Y()()()),2&a&&(t.yG2(6),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(3),t.E7m("svgIcon","heroicons_solid:chevron-right"),t.yG2(45),t.APW("      \x3c!-- Iterate through the tasks --\x3e\n      <ng-container *ngFor=\"let task of tasks\">\n\n        \x3c!-- Iterate through the tags of the task but rather than returning\n          the tag id, use that id to find the actual tag object from 'tags'\n          so we can access the properties like title and color of the tag --\x3e\n        <ng-container *ngFor=\"let tag of (task.tags | mskFindByKey:'id':tags);\">\n          <div>","{","","{","tag.title","}","","}","</div>\n        </ng-container>\n\n      </ng-container>\n    "))},dependencies:[s.qL,d._],encapsulation:2})}return n})()}];let h=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.a4G({type:n});static#e=this.\u0275inj=t.s3X({imports:[r.MD,c.qQ.forChild(g),s.oB,l.e]})}return n})()}}]);