/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';

import { MskConfigService } from '@msk/client/shared/services/config';
import { MskMediaWatcherService } from '@msk/client/shared/services/media-watcher';
import {
  MskNavigationService,
  MskVerticalNavigationComponent,
} from '@msk/client/shared/ui/navigation';
import {
  Navigation,
  NavigationService,
} from '@msk/client/web-app/shell/core/navigation';

import { cloneDeep } from 'lodash-es';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'centered-layout',
  templateUrl: './centered.component.html',
  styleUrls: ['./centered.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CenteredLayoutComponent implements OnInit, OnDestroy {
  //
  navigation!: Navigation;
  isScreenSmall!: boolean;
  layoutDirection!: Direction;
  private _unsubscribeAll: Subject<void> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _mskConfigService: MskConfigService,
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
    // Subscribe to config changes
    this._mskConfigService.config$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config: any) => {
        // Store the layoutDirection
        this.layoutDirection = config.direction;
      });
    // Subscribe to navigation data
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) => {
        this.navigation = cloneDeep(navigation);
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
        name,
      );

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
