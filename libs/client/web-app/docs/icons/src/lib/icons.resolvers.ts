import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IconsService } from './icons.service';
import { Icon } from './icons.types';

@Injectable()
export class IconsResolver {
  /**
   * Constructor
   */
  constructor(private _iconsService: IconsService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolve
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Icon> {
    return this._iconsService.getIcons(
      route.params['namespace'],
      route.params['type'],
    );
  }
}
