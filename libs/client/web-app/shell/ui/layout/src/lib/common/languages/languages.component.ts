/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslocoService } from '@ngneat/transloco';
import { MskConfigService } from '@msk/client/shared/services/config';

import { Locale } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';
import { faIR } from 'date-fns-jalali/locale';
import { AvailableLangs, AvailableLangsIds } from 'scoped-translations';

const locale = {
  en: enUS,
  fa: faIR,
};

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'languages',
})
export class LanguagesComponent implements OnInit {
  //
  availableLangs!: AvailableLangs[];
  activeLang!: AvailableLangsIds;
  flagCodes!: any;
  directionCodes!: any;

  /**
   * Constructor
   */
  constructor(
    private _dateAdapter: DateAdapter<Locale>,
    private _translocoService: TranslocoService,
    private _mskConfigService: MskConfigService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the available languages from transloco
    this.availableLangs =
      this._translocoService.getAvailableLangs() as AvailableLangs[];

    // Subscribe to language changes
    this._translocoService.langChanges$.subscribe((activeLang) => {
      // Get the active lang
      this.activeLang = activeLang as AvailableLangsIds;
    });

    // Set the country iso codes for languages for flags
    this.flagCodes = {
      en: 'us',
      fa: 'ir',
    };

    // Set the direction codes for languages for direction
    this.directionCodes = {
      en: 'ltr',
      fa: 'rtl',
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set the active lang
   *
   * @param lang
   */
  setActiveLang(lang: AvailableLangsIds): void {
    // Set the active locale
    this._dateAdapter.setLocale(locale[lang]);
    // Set the active lang
    this._translocoService.setActiveLang(lang);
    // Set the active lang & direction in config
    this._mskConfigService.config = {
      language: lang,
      direction: this.directionCodes[lang],
    };
  }
}
