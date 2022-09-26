import { NgModule } from '@angular/core';
import { MskPlatformService } from './platform.service';

@NgModule({
  providers: [MskPlatformService],
})
export class MskPlatformModule {
  /**
   * Constructor
   */
  constructor(private _mskPlatformService: MskPlatformService) {}
}
