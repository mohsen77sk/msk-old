import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { InternalServerErrorComponent } from './internal-server-error.component';

const routes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'error' }],
  declarations: [InternalServerErrorComponent],
})
export class InternalServerErrorModule {}
