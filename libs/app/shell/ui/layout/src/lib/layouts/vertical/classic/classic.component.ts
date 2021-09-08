/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MediaWatcherService } from '@msk/app/shell/ui/media-watcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall!: boolean;
  private _unsubscribeAll: Subject<unknown> = new Subject();

  /**
   * Constructor
   */
  constructor(private _mediaWatcherService: MediaWatcherService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to media changes
    this._mediaWatcherService.onMediaChange$
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
}
