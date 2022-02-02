import { NgModule } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MskDateFnsAdapter } from './date-fns-adapter';
import { MSK_DATE_FNS_FORMATS } from './date-fns-formats';

import { MskConfigService } from '@msk/client/shared/services/config';

@NgModule({
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      deps: [MskConfigService],
      useFactory: (mskConfigService: MskConfigService): any => {
        return mskConfigService.config.language;
      },
    },
    {
      provide: DateAdapter,
      useClass: MskDateFnsAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MSK_DATE_FNS_FORMATS },
  ],
})
export class DateCoreModule {}
