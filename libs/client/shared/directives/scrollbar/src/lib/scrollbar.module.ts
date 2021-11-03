import { NgModule } from '@angular/core';
import { MskScrollbarDirective } from './scrollbar.directive';

@NgModule({
  declarations: [MskScrollbarDirective],
  exports: [MskScrollbarDirective],
})
export class MskScrollbarModule {}
