import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MskAlertModule } from '@msk/client/shared/ui/alert';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { ThemeLayoutsComponent } from './theme-layouts.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayoutsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MskAlertModule,
    MskHighlightModule,
  ],
  declarations: [ThemeLayoutsComponent],
})
export class DocsThemeLayoutsModule {}
