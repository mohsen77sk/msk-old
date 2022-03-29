import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { MskVerticalNavigationComponent } from '@msk/client/shared/ui/navigation';
import { MskNavigationService } from '@msk/client/shared/ui/navigation';
import { MskNavigationItem } from '@msk/client/shared/ui/navigation';

import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'msk-vertical-navigation-spacer-item',
  templateUrl: './spacer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MskVerticalNavigationSpacerItemComponent
  implements OnInit, OnDestroy
{
  @Input() item!: MskNavigationItem;
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
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
