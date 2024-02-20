import { APP_INITIALIZER, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {
  Translation,
  TranslocoModule,
  TranslocoService,
  provideTransloco,
} from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco.http-loader';
import { MskConfigService } from '@msk/client/shared/services/config';
import { availableLangs } from 'scoped-translations';
import { LocaleProvider } from './locale.provider';

import localeEn from '@angular/common/locales/en';
import localeFa from '@angular/common/locales/fa';
registerLocaleData(localeEn, 'en');
registerLocaleData(localeFa, 'fa');

@NgModule({
  providers: [
    // Provide the default Transloco configuration
    provideTransloco({
      config: {
        availableLangs: availableLangs,
        reRenderOnLangChange: true,
        prodMode: true,
      },
      loader: TranslocoHttpLoader,
    }),
    LocaleProvider,
  ],
  exports: [TranslocoModule],
})
export class MskTranslocoModule {
  /**
   * Constructor
   */
  constructor(
    private _mskConfigService: MskConfigService,
    private _translocoService: TranslocoService,
  ) {
    const defaultLang = _mskConfigService.config.language;
    _translocoService.setActiveLang(defaultLang);
    _translocoService.load(defaultLang).subscribe();
  }
}
