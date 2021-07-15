import { NgModule } from '@angular/core';
import { UtilsService } from './utils.service';

@NgModule({
  providers: [UtilsService],
})
export class UtilsModule {
  /**
   * Constructor
   */
  constructor(private _utilsService: UtilsService) {}
}
