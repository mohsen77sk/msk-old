import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'auth' }],
  declarations: [SignInComponent],
})
export class AuthSignInModule {}
