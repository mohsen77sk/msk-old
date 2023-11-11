import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MskAlertModule } from '@msk/client/shared/ui/alert';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { ThemingComponent } from './theming.component';

const routes: Routes = [
  {
    path: '',
    component: ThemingComponent,
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
  declarations: [ThemingComponent],
})
export class DocsThemingModule {}
