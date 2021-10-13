/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { MskMediaWatcherService } from '@msk/app/shared/services/media-watcher';
import {
  MskNavigationService,
  MskVerticalNavigationComponent,
} from '@msk/app/shared/ui/navigation';
import { Navigation, NavigationService } from '@msk/app/shell/core/navigation';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dense-layout',
  templateUrl: './dense.component.html',
  styleUrls: ['./dense.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DenseLayoutComponent implements OnInit, OnDestroy {
  //
  navigation!: Navigation;
  isScreenSmall!: boolean;
  navigationAppearance: 'default' | 'dense' = 'dense';
  private _unsubscribeAll: Subject<unknown> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _navigationService: NavigationService,
    private _mskNavigationService: MskNavigationService,
    private _mskMediaWatcherService: MskMediaWatcherService
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
        this.navigation = navigation;
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
    this._unsubscribeAll.next();
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
        name
      );

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }

  /**
   * Toggle the navigation appearance
   */
  toggleNavigationAppearance(): void {
    this.navigationAppearance =
      this.navigationAppearance === 'default' ? 'dense' : 'default';
  }
}
