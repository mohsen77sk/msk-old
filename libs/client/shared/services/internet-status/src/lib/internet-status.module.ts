import { NgModule } from '@angular/core';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { MskInternetStatusService } from './internet-status.service';
import { MskOfflineComponent } from './offline/offline.component';

@NgModule({
  declarations: [MskOfflineComponent],
  imports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'internetStatus',
        loader: scopeLoader(
          (lang: string, root: string) => import(`${root}/${lang}.json`)
        ),
      },
    },
    MskInternetStatusService,
  ],
})
export class MskInternetStatusModule {
  /**
   * Constructor
   */
  constructor(private _mskInternetStatusService: MskInternetStatusService) {}
}
