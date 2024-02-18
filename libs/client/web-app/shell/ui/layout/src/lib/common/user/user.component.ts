/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  inject,
  DestroyRef,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { User, UserService } from '@msk/client/web-app/shell/core/user';
import { MskDrawerService } from '@msk/client/shared/ui/drawer';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'user',
})
export class UserComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  @Input({ transform: booleanAttribute }) showAvatar = true;
  user!: User;

  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _userService: UserService,
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
    // Subscribe to user changes
    this._userService.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user: User) => {
        this.user = user;
        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
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
