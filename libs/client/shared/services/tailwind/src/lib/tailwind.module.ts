import { NgModule } from '@angular/core';
import { MskTailwindService } from './tailwind.service';

@NgModule({
  providers: [MskTailwindService],
})
export class MskTailwindConfigModule {
  /**
   * Constructor
   */
  constructor(private _tailwindConfigService: MskTailwindService) {}
}
