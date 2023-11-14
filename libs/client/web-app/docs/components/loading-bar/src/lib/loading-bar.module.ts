import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MskDrawerModule } from '@msk/client/shared/ui/drawer';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { LoadingBarComponent } from './loading-bar.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingBarComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MskDrawerModule,
    MskHighlightModule,
  ],
  declarations: [LoadingBarComponent],
})
export class DocsLoadingBarModule {}
