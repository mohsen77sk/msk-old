import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

import { MskHorizontalNavigationComponent } from '@msk/app/shared/ui/navigation';
import { MskNavigationService } from '@msk/app/shared/ui/navigation';
import { MskUtilsService } from '@msk/app/shared/utils';
import { NavigationItem } from '@msk/app/shared/ui/navigation';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'msk-horizontal-navigation-basic-item',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MskHorizontalNavigationBasicItemComponent
  implements OnInit, OnDestroy
{
  @Input() item!: NavigationItem;
  @Input() name!: string;

  isActiveMatchOptions: IsActiveMatchOptions;
  private _mskHorizontalNavigationComponent!: MskHorizontalNavigationComponent;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _mskNavigationService: MskNavigationService,
    private _mskUtilsService: MskUtilsService
  ) {
    // Set the equivalent of {exact: false} as default for active match options.
    // We are not assigning the item.isActiveMatchOptions directly to the
    // [routerLinkActiveOptions] because if it's "undefined" initially, the router
    // will throw an error and stop working.
    this.isActiveMatchOptions = this._mskUtilsService.subsetMatchOptions;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Set the "isActiveMatchOptions" either from item's
    // "isActiveMatchOptions" or the equivalent form of
    // item's "exactMatch" option
    this.isActiveMatchOptions =
      this.item.isActiveMatchOptions ?? this.item.exactMatch
        ? this._mskUtilsService.exactMatchOptions
        : this._mskUtilsService.subsetMatchOptions;

    // Get the parent navigation component
    this._mskHorizontalNavigationComponent =
      this._mskNavigationService.getComponent(this.name);

    // Mark for check
    this._changeDetectorRef.markForCheck();

    // Subscribe to onRefreshed on the navigation component
    this._mskHorizontalNavigationComponent.onRefreshed
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
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
}
