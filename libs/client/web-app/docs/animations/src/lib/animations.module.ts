import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { AnimationsComponent } from './animations.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MskHighlightModule,
  ],
  declarations: [AnimationsComponent],
})
export class DocsAnimationsModule {}
