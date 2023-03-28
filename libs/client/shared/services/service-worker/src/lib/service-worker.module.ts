import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

import { MskServiceWorkerSnackBarComponent } from './snack-bar/snack-bar.component';
import { MskServiceWorkerService } from './service-worker.service';

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
      useValue: {
        scope: 'serviceWorker',
        loader: scopeLoader(
          (lang: string, root: string) => import(`${root}/${lang}.json`)
        ),
      },
    },
    MskServiceWorkerService,
  ],
})
export class MskServiceWorkerModule {
  /**
   * Constructor
   */
  constructor(private _mskServiceWorkerService: MskServiceWorkerService) {}
}
