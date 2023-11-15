import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MskSelectSearchModule } from '@msk/client/shared/directives/select-search';

import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MskSelectSearchModule,
  ],
  declarations: [FormsComponent],
})
export class DocsFormsModule {}
