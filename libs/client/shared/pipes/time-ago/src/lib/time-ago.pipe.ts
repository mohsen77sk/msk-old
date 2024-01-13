import {
  Pipe,
  ChangeDetectorRef,
  PipeTransform,
  LOCALE_ID,
  Inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, timer, distinctUntilChanged, map } from 'rxjs';

import { parseISO, formatDistanceToNow } from 'date-fns';
import { enUS as locale_enUS } from 'date-fns/locale';
import { faIR as locale_faIR } from 'date-fns/locale';

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
    @Inject(LOCALE_ID) private _locale: string,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    super(_changeDetectorRef);

    this._formatted$ = timer(0, 1000).pipe(
      map(() =>
        formatDistanceToNow(this._time ?? 0, {
          addSuffix: true,
          includeSeconds: true,
          locale: locale[this._locale.valueOf()],
        }),
      ),
      distinctUntilChanged(),
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
