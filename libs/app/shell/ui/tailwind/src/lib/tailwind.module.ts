import { NgModule } from '@angular/core';
import { TailwindService } from './tailwind.service';

@NgModule({
  providers: [TailwindService],
})
export class TailwindConfigModule {
  /**
   * Constructor
   */
  constructor(private _tailwindConfigService: TailwindService) {}
}
