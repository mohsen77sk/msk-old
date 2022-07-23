import { NgModule } from '@angular/core';

import { MskExcelService } from './excel.service';

@NgModule({
  providers: [MskExcelService],
})
export class MskExcelModule {
  /**
   * Constructor
   */
  constructor(private _mskExcelService: MskExcelService) {}
}
