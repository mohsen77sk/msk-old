import { APP_INITIALIZER, NgModule } from '@angular/core';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
  TranslocoService,
} from '@ngneat/transloco';
import { MskConfigService } from '@msk/app/shared/services/config';
import { environment } from '../../../../../../../apps/web-app/src/environments/environment';
import { TranslocoHttpLoader } from './transloco.http-loader';

@NgModule({
  providers: [
    {
      // Provide the default Transloco configuration
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: [
          {
            id: 'en',
            label: 'English',
          },
          {
            id: 'fa',
            label: 'فارسی',
          },
        ],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
    {
      // Provide the default Transloco loader
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
    {
      // Preload the default language before the app starts to prevent empty/jumping content
      provide: APP_INITIALIZER,
      deps: [TranslocoService, MskConfigService],
      useFactory:
        (
          translocoService: TranslocoService,
          mskConfigService: MskConfigService
        ): any =>
        (): Promise<Translation> => {
          const defaultLang = mskConfigService.config.language; // translocoService.getDefaultLang();
          translocoService.setActiveLang(defaultLang);
          return translocoService.load(defaultLang).toPromise();
        },
      multi: true,
    },
  ],
  exports: [TranslocoModule],
})
export class TranslocoCoreModule {}
