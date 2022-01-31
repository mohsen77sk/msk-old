import { NgModule } from '@angular/core';
import { MskTimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [MskTimeAgoPipe],
  exports: [MskTimeAgoPipe],
})
export class MskTimeAgoPipeModule {}
