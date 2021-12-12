import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { SignOutComponent } from './sign-out.component';

const routes: Routes = [
  {
    path: '',
    component: SignOutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'auth' }],
  declarations: [SignOutComponent],
})
export class AuthSignOutModule {}
