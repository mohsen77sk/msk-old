import { NgModule } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MskDateFnsAdapter } from './date-fns-adapter';
import { MSK_DATE_FNS_FORMATS } from './date-fns-formats';

import { TranslocoService } from '@ngneat/transloco';

@NgModule({
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      deps: [TranslocoService],
      useFactory: (translocoService: TranslocoService): any => {
        return translocoService.getActiveLang();
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
export class MskDateModule {}
