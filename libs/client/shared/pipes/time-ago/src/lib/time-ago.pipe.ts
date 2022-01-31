import { Pipe, ChangeDetectorRef, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, timer } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { MskConfigService } from '@msk/client/shared/services/config';

import { parseISO, formatDistanceToNow } from 'date-fns';
import locale_US from 'date-fns/locale/en-US';
import locale_IR from 'date-fns/locale/fa-IR';

const locale: any = {
  en: locale_US,
  fa: locale_IR,
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
    private _mskConfigService: MskConfigService
  ) {
    super(_changeDetectorRef);

    this._formatted$ = timer(0, 1000).pipe(
      map(() =>
        formatDistanceToNow(this._time ?? 0, {
          addSuffix: true,
          includeSeconds: true,
          locale: locale[_mskConfigService.config.language],
        })
      ),
      distinctUntilChanged()
    );
  }

  /**
   * Transform
   *
   * @param value Date string
   */
  override transform(value: any): any {
    this._time = parseISO(value);
    return super.transform(this._formatted$);
  }
}
