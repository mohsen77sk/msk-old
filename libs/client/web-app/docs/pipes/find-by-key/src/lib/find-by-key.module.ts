import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { FindByKeyComponent } from './find-by-key.component';

const routes: Routes = [
  {
    path: '',
    component: FindByKeyComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MskHighlightModule,
  ],
  declarations: [FindByKeyComponent],
})
export class DocsFindByKeyModule {}
