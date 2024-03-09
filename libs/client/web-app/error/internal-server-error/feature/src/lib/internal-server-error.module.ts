import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { InternalServerErrorComponent } from './internal-server-error.component';

const routes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  providers: [
    provideTranslocoScope({
      scope: 'internalServerError',
      loader: scopeLoader(
        (lang: string, root: string) => import(`./${root}/${lang}.json`),
      ),
    }),
  ],
  declarations: [InternalServerErrorComponent],
})
export class InternalServerErrorModule {}
