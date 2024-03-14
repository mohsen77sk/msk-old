import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Icon, ICONS } from './icons.types';

@Injectable()
export class IconsService {
  // Private
  private _icons: BehaviorSubject<Icon> = new BehaviorSubject<Icon>(ICONS[0]);

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for icons
   */
  get icons(): Observable<Icon> {
    return this._icons.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get icons
   *
   * @param namespace
   * @param type
   */
  getIcons(namespace: string, type: string): Observable<Icon> {
    return of(ICONS[`${namespace}_${type}`]).pipe(
      tap((response) => {
        this._icons.next(response);
      }),
    );
  }
}
