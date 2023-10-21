import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';
import { MskConfirmationModule } from '@msk/client/shared/services/confirmation';

import { ConfirmationComponent } from './confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MskHighlightModule,
    MskConfirmationModule,
  ],
  declarations: [ConfirmationComponent],
})
export class DocsConfirmationModule {}
