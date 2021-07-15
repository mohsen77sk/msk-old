import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MskDrawerModule } from '@msk/app/shared/ui/drawer';

import { EmptyLayoutModule } from './layouts/empty';
import { ClassicLayoutModule } from './layouts/vertical/classic';

import { LayoutComponent } from './app-layout.component';

const layoutModules = [
  // Empty
  EmptyLayoutModule,

  // Horizontal navigation

  // Vertical navigation
  ClassicLayoutModule,
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MskDrawerModule,
    ...layoutModules,
  ],
  exports: [LayoutComponent, ...layoutModules],
})
export class LayoutModule {}
