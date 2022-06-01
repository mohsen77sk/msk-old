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
import { MskVirtualKeyboardModule } from '@msk/client/shared/directives/virtual-keyboard';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { TwoStepVerificationComponent } from './two-step-verification.component';

const routes: Routes = [
  {
    path: '',
    component: TwoStepVerificationComponent,
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
    MskVirtualKeyboardModule,
    MskSpinnerModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'towStep',
        loader: scopeLoader(
          (lang: string, root: string) => import(`./${root}/${lang}.json`)
        ),
      },
    },
  ],
  declarations: [TwoStepVerificationComponent],
})
export class AuthTwoStepVerificationModule {}
