import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { SignOutComponent } from './sign-out.component';

const routes: Routes = [
  {
    path: '',
    component: SignOutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  providers: [
    provideTranslocoScope({
      scope: 'signOut',
      loader: scopeLoader(
        (lang: string, root: string) => import(`./${root}/${lang}.json`),
      ),
    }),
  ],
  declarations: [SignOutComponent],
})
export class AuthSignOutModule {}
