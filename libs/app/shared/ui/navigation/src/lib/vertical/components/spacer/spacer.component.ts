import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { MskVerticalNavigationComponent } from '@msk/app/shared/ui/navigation';
import { MskNavigationService } from '@msk/app/shared/ui/navigation';
import { NavigationItem } from '@msk/app/shared/ui/navigation';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'msk-vertical-navigation-spacer-item',
  templateUrl: './spacer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MskVerticalNavigationSpacerItemComponent
  implements OnInit, OnDestroy
{
  @Input() item!: NavigationItem;
  @Input() name!: string;

  private _mskVerticalNavigationComponent!: MskVerticalNavigationComponent;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _mskNavigationService: MskNavigationService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the parent navigation component
    this._mskVerticalNavigationComponent =
      this._mskNavigationService.getComponent(this.name);

    // Subscribe to onRefreshed on the navigation component
    this._mskVerticalNavigationComponent.onRefreshed
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