/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { MskMediaWatcherService } from '@msk/client/shared/services/media-watcher';
import {
  MskNavigationService,
  MskVerticalNavigationComponent,
} from '@msk/client/shared/ui/navigation';
import {
  Navigation,
  NavigationService,
} from '@msk/client/web-app/shell/core/navigation';
import { User, UserService } from '@msk/client/web-app/shell/core/user';

import { cloneDeep } from 'lodash-es';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'futuristic-layout',
  templateUrl: './futuristic.component.html',
  styleUrls: ['./futuristic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FuturisticLayoutComponent implements OnInit, OnDestroy {
  //
  navigation!: Navigation;
  isScreenSmall!: boolean;
  user!: User;
  private _unsubscribeAll: Subject<unknown> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _userService: UserService,
    private _navigationService: NavigationService,
    private _mskNavigationService: MskNavigationService,
    private _mskMediaWatcherService: MskMediaWatcherService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to navigation data
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) => {
        this.navigation = cloneDeep(navigation);
      });

    // Subscribe to the user service
    this._userService.user$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user: User) => {
        this.user = user;
      });

    // Subscribe to media changes
    this._mskMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {
        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle navigation
   *
   * @param name
   */
  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation =
      this._mskNavigationService.getComponent<MskVerticalNavigationComponent>(
        name,
      );

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
