import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClassicLayoutComponent } from './classic-layout.component';

@NgModule({
  declarations: [ClassicLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
