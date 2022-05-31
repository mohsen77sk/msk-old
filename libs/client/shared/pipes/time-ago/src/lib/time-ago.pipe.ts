import { Pipe, ChangeDetectorRef, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, timer, distinctUntilChanged, map } from 'rxjs';

import { TranslocoService } from '@ngneat/transloco';

import { parseISO, formatDistanceToNow } from 'date-fns';
import locale_enUS from 'date-fns/locale/en-US';
import locale_faIR from 'date-fns/locale/fa-IR';

const locale: any = {
  en: locale_enUS,
  fa: locale_faIR,
};

@Pipe({
  name: 'mskTimeAgo',
  pure: false,
})
export class MskTimeAgoPipe extends AsyncPipe implements PipeTransform {
  private _time: Date | undefined;
  private _formatted$: Observable<string> | undefined;

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _translocoService: TranslocoService
  ) {
    super(_changeDetectorRef);

    this._formatted$ = timer(0, 1000).pipe(
      map(() =>
        formatDistanceToNow(this._time ?? 0, {
          addSuffix: true,
          includeSeconds: true,
          locale: locale[_translocoService.getActiveLang()],
        })
      ),
      distinctUntilChanged()
    );
  }

  /**
   * Transform
   *
   * @param value A string to format
   */
  override transform(value: any): any {
    if (value == null || value === '' || value !== value) return null;

    this._time = parseISO(value);
    return super.transform(this._formatted$);
  }
}
