import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MskSpinnerComponent } from './spinner.component';
import { MskSpinnerDirective } from './spinner.directive';

@NgModule({
  imports: [MatProgressSpinnerModule],
  declarations: [MskSpinnerComponent, MskSpinnerDirective],
  exports: [MskSpinnerDirective],
})
export class MskSpinnerModule {}
