import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ColorsComponent } from './colors.component';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule],
  declarations: [ColorsComponent],
})
export class DocsColorsModule {}
