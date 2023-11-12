import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MskAlertModule } from '@msk/client/shared/ui/alert';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { AlertComponent } from './alert.component';

const routes: Routes = [
  {
    path: '',
    component: AlertComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MskAlertModule,
    MskHighlightModule,
  ],
  declarations: [AlertComponent],
})
export class DocsAlertModule {}
