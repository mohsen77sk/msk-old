import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MskCardModule } from '@msk/client/shared/ui/card';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { CardComponent } from './card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MskCardModule,
    MskHighlightModule,
  ],
  declarations: [CardComponent],
})
export class DocsCardModule {}
