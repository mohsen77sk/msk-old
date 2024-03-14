import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MskHighlightModule } from '@msk/client/shared/ui/highlight';

import { IconsComponent } from './icons.component';
import { IconsService } from './icons.service';
import { IconsResolver } from './icons.resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'heroicons/outline',
  },
  {
    path: 'heroicons',
    pathMatch: 'full',
    redirectTo: 'heroicons/outline',
  },
  {
    path: 'material',
    pathMatch: 'full',
    redirectTo: 'material/outline',
  },
  {
    path: ':namespace/:type',
    component: IconsComponent,
    resolve: {
      icons: IconsResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MskHighlightModule,
  ],
  declarations: [IconsComponent],
  providers: [IconsService, IconsResolver],
})
export class DocsIconsModule {}
