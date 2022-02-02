import { NgModule } from '@angular/core';
import { MskDateTimePipe } from './date-time.pipe';

@NgModule({
  declarations: [MskDateTimePipe],
  exports: [MskDateTimePipe],
})
export class MskDateTimePipeModule {}
