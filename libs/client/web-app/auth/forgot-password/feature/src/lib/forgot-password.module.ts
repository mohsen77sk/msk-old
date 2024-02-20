import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MskAlertModule } from '@msk/client/shared/ui/alert';
import { MskSpinnerModule } from '@msk/client/shared/directives/spinner';

import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { ForgotPasswordComponent } from './forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MskAlertModule,
    MskSpinnerModule,
    TranslocoModule,
  ],
  providers: [
    provideTranslocoScope({
      scope: 'forgotPassword',
      loader: scopeLoader(
        (lang: string, root: string) => import(`./${root}/${lang}.json`),
      ),
    }),
  ],
  declarations: [ForgotPasswordComponent],
})
export class AuthForgotPasswordModule {}
