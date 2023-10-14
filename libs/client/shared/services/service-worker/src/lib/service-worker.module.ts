import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';

import {
  TranslocoModule,
  TRANSLOCO_SCOPE,
  TranslocoService,
} from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { MskServiceWorkerSnackBarComponent } from './snack-bar/snack-bar.component';
import { MskServiceWorkerService } from './service-worker.service';
import { switchMap } from 'rxjs';

@NgModule({
  declarations: [MskServiceWorkerSnackBarComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    TranslocoModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'serviceWorker',
    },
    MskServiceWorkerService,
  ],
})
export class MskServiceWorkerModule {
  /**
   * Constructor
   */
  constructor(
    private _mskServiceWorkerService: MskServiceWorkerService,
    private _translocoService: TranslocoService,
  ) {
    _translocoService.langChanges$
      .pipe(
        switchMap((lang) => _translocoService.load('serviceWorker/' + lang)),
      )
      .subscribe();
  }
}
