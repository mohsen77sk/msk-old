/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  DestroyRef,
  HostBinding,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { MskConfigService } from '@msk/client/shared/services/config';
import {
  LayoutScheme,
  LayoutTheme,
  LayoutThemes,
  LayoutType,
} from '../../app-layout.types';
import { LayoutConfig } from '../../layout.config';

@Component({
  selector: 'layout-settings',
  templateUrl: './settings.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutSettingsComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  layoutConfig!: LayoutConfig;
  layoutScheme!: LayoutScheme;
  layoutThemes!: LayoutThemes;
  layoutTheme!: LayoutTheme;
  layoutType!: LayoutType;

  /**
   * Constructor
   */
  constructor(
    private _router: Router,
    private _mskConfigService: MskConfigService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component inline styles
   */
  @HostBinding('style') get styleList(): object {
    return {
      width: 'auto',
      flex: 'none',
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._mskConfigService.config$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((config: LayoutConfig) => {
        // Store the layoutConfig
        this.layoutConfig = config;
      });
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
