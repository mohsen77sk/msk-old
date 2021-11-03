import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MskCardComponent } from './card.component';

@NgModule({
  declarations: [MskCardComponent],
  imports: [CommonModule],
  exports: [MskCardComponent],
})
export class FuseCardModule {}
