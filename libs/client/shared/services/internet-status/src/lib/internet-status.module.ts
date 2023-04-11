import { NgModule } from '@angular/core';

import {
  TranslocoModule,
  TRANSLOCO_SCOPE,
  TranslocoService,
} from '@ngneat/transloco';

import { MskInternetStatusService } from './internet-status.service';
import { MskOfflineComponent } from './offline/offline.component';
import { switchMap } from 'rxjs';

@NgModule({
  declarations: [MskOfflineComponent],
  imports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'internetStatus',
    },
    MskInternetStatusService,
  ],
})
export class MskInternetStatusModule {
  /**
   * Constructor
   */
  constructor(
    private _mskInternetStatusService: MskInternetStatusService,
    private _translocoService: TranslocoService
  ) {
    _translocoService.langChanges$
      .pipe(
        switchMap((lang) => _translocoService.load('internetStatus/' + lang))
      )
      .subscribe();
  }
}
