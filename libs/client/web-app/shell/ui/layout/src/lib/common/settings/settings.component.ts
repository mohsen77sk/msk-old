/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MskConfigService } from '@msk/client/shared/services/config';
import {
  LayoutScheme,
  LayoutTheme,
  LayoutThemes,
  LayoutType,
} from '../../app-layout.types';
import { LayoutConfig } from '../../layout.config';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'layout-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutSettingsComponent implements OnInit, OnDestroy {
  layoutConfig!: LayoutConfig;
  layoutScheme!: LayoutScheme;
  layoutThemes!: LayoutThemes;
  layoutTheme!: LayoutTheme;
  layoutType!: LayoutType;

  private _unsubscribeAll: Subject<void> = new Subject();

  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _mskConfigService: MskConfigService,
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
      .subscribe((config: LayoutConfig) => {
        // Store the layoutConfig
        this.layoutConfig = config;
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
   * Set the type on the config
   *
   * @param type
   */
  setLayoutType(type: string): void {
    // Clear the 'type' query param to allow type changes
    this._router
      .navigate([], {
        queryParams: {
          type: null,
        },
        queryParamsHandling: 'merge',
      })
      .then(() => {
        // Set the config
        this._mskConfigService.config = { type };
      });
  }

  /**
   * Set the scheme on the config
   *
   * @param scheme
   */
  setLayoutScheme(scheme: LayoutScheme): void {
    this._mskConfigService.config = { scheme };
  }

  /**
   * Set the theme on the config
   *
   * @param theme
   */
  setLayoutTheme(theme: LayoutTheme): void {
    this._mskConfigService.config = { theme };
  }
}
