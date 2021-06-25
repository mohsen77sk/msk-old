import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyLayoutModule } from './layouts/empty-layout';
import { ClassicLayoutModule } from './layouts/classic-layout';

import { LayoutComponent } from './app-layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, EmptyLayoutModule, ClassicLayoutModule],
})
export class LayoutModule {}
