import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyLayoutModule } from './layouts/empty';
import { ClassicLayoutModule } from './layouts/vertical/classic';
import { ClassyLayoutModule } from './layouts/vertical/classy';
import { CompactLayoutModule } from './layouts/vertical/compact';
import { DenseLayoutModule } from './layouts/vertical/dense';
import { FuturisticLayoutModule } from './layouts/vertical/futuristic';
import { ThinLayoutModule } from './layouts/vertical/thin';
import { CenteredLayoutModule } from './layouts/horizontal/centered';
import { EnterpriseLayoutModule } from './layouts/horizontal/enterprise';
import { MaterialLayoutModule } from './layouts/horizontal/material';
import { ModernLayoutModule } from './layouts/horizontal/modern';

import { MskLayoutComponent } from './app-layout.component';

const layoutModules = [
  // Empty
  EmptyLayoutModule,

  // Horizontal navigation
  CenteredLayoutModule,
  EnterpriseLayoutModule,
  MaterialLayoutModule,
  ModernLayoutModule,

  // Vertical navigation
  ClassicLayoutModule,
  ClassyLayoutModule,
  CompactLayoutModule,
  DenseLayoutModule,
  FuturisticLayoutModule,
  ThinLayoutModule,
];

@NgModule({
  declarations: [MskLayoutComponent],
  imports: [CommonModule, ...layoutModules],
  exports: [MskLayoutComponent, ...layoutModules],
})
export class MskLayoutModule {}
