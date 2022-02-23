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
import { MskPasswordStrengthMeterModule } from '@msk/client/shared/ui/password-strength-meter';
import { MskSpinnerModule } from '@msk/client/shared/directives/spinner';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
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
    MskPasswordStrengthMeterModule,
    MskSpinnerModule,
    TranslocoModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'auth' }],
  declarations: [ResetPasswordComponent],
})
export class AuthResetPasswordModule {}
