import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { UserService } from '@msk/client/web-app/shell/core/user';
import { NavigationService } from '@msk/client/web-app/shell/core/navigation';
import { MessageService } from '@msk/client/web-app/shell/core/message';
import { NotificationService } from '@msk/client/web-app/shell/core/notification';

@Injectable({
  providedIn: 'root',
})
export class InitialDataResolver  {
  /**
   * Constructor
   */
  constructor(
    private _userService: UserService,
    private _navigationService: NavigationService,
    private _messageService: MessageService,
    private _notificationService: NotificationService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Use this resolver to resolve initial api for the application
   *
   * @param route
   * @param state
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
      this._userService.get(),
      this._navigationService.get(),
      this._messageService.getAll(),
      this._notificationService.getAll(),
    ]);
  }
}
