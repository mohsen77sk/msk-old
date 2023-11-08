import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MskAlertModule } from '@msk/client/shared/ui/alert';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { DirectoryStructureComponent } from './directory-structure.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryStructureComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MskAlertModule,
    MskHighlightModule,
  ],
  declarations: [DirectoryStructureComponent],
})
export class DocsDirectoryStructureModule {}
