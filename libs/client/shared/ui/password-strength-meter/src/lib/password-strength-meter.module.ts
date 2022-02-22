import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MskPasswordStrengthMeterService } from './password-strength-meter.service';
import { MskPasswordStrengthMeterComponent } from './password-strength-meter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MskPasswordStrengthMeterComponent],
  providers: [MskPasswordStrengthMeterService],
  exports: [MskPasswordStrengthMeterComponent],
})
export class MskPasswordStrengthMeterModule {
  /**
   * Constructor
   */
  constructor(
    private _mskPasswordStrengthMeterService: MskPasswordStrengthMeterService
  ) {}
}
