import { NgModule } from '@angular/core';
import { MskUtilsService } from './utils.service';

@NgModule({
  providers: [MskUtilsService],
})
export class MskUtilsModule {
  /**
   * Constructor
   */
  constructor(private _utilsService: MskUtilsService) {}
}
