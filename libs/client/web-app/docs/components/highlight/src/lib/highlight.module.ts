import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { HighlightComponent } from './highlight.component';

const routes: Routes = [
  {
    path: '',
    component: HighlightComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MskHighlightModule,
  ],
  declarations: [HighlightComponent],
})
export class DocsHighlightModule {}
