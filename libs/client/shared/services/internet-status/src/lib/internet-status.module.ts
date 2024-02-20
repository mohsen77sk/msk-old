import { NgModule } from '@angular/core';

import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope,
} from '@ngneat/transloco';

import { MskInternetStatusService } from './internet-status.service';
import { MskOfflineComponent } from './offline/offline.component';
import { switchMap } from 'rxjs';

@NgModule({
  declarations: [MskOfflineComponent],
  imports: [TranslocoModule],
  providers: [
    provideTranslocoScope({ scope: 'internetStatus' }),
    MskInternetStatusService,
  ],
})
export class MskInternetStatusModule {
  /**
   * Constructor
   */
  constructor(
    private _mskInternetStatusService: MskInternetStatusService,
    private _translocoService: TranslocoService,
  ) {
    _translocoService.langChanges$
      .pipe(
        switchMap((lang) => _translocoService.load('internetStatus/' + lang)),
      )
      .subscribe();
  }
}
