import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MskSpinnerDirective } from './spinner.directive';

@NgModule({
  imports: [MatProgressSpinnerModule],
  declarations: [MskSpinnerDirective],
  exports: [MskSpinnerDirective],
})
export class MskSpinnerModule {}
