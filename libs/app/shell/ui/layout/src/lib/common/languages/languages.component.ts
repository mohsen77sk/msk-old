/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MskConfigService } from '@msk/app/shared/services/config';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'languages',
})
export class LanguagesComponent implements OnInit {
  //
  availableLangs!: { id: string; label: string }[];
  activeLang!: string;
  flagCodes!: any;
  directionCodes!: any;

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _translocoService: TranslocoService,
    private _mskConfigService: MskConfigService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the available languages from transloco
    this.availableLangs = this._translocoService.getAvailableLangs() as {
      id: string;
      label: string;
    }[];

    // Subscribe to language changes
    this._translocoService.langChanges$.subscribe((activeLang) => {
      // Get the active lang
      this.activeLang = activeLang;
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
  setActiveLang(lang: string): void {
    // Set the active lang
    this._translocoService.setActiveLang(lang);
    // Set the active direction
    this._mskConfigService.config = { direction: this.directionCodes[lang] };
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
