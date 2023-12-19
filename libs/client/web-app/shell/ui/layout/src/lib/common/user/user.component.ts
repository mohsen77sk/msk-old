/* eslint-disable @angular-eslint/component-selector */
import { BooleanInput } from '@angular/cdk/coercion';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from '@angular/cdk/bidi';

import { User, UserService } from '@msk/client/web-app/shell/core/user';
import { MskConfigService } from '@msk/client/shared/services/config';
import { MskDrawerService } from '@msk/client/shared/ui/drawer';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'user',
})
export class UserComponent implements OnInit, OnDestroy {
  /* eslint-disable @typescript-eslint/naming-convention */
  static ngAcceptInputType_showAvatar: BooleanInput;
  /* eslint-enable @typescript-eslint/naming-convention */

  @Input() showAvatar = true;
  user!: User;

  layoutDirection!: Direction;

  private _unsubscribeAll: Subject<void> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _userService: UserService,
    private _mskConfigService: MskConfigService,
    private _mskDrawerService: MskDrawerService,
    private _changeDetectorRef: ChangeDetectorRef,
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
    // Subscribe to user changes
    this._userService.user$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user: User) => {
        this.user = user;
        // Mark for check
        this._changeDetectorRef.markForCheck();
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
   * Sign out
   */
  signOut(): void {
    this._router.navigate(['/sign-out']);
  }

  /**
   * Open layout settings
   */
  openLayoutSetting(): void {
    // Get the layoutSettings
    const layoutSettings = this._mskDrawerService.getComponent(
      'layoutSettingsDrawer',
    );

    if (layoutSettings) {
      // Toggle the opened status
      layoutSettings.open();
    }
  }
}
