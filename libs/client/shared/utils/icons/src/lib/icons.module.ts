import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class MskIconsModule {
  /**
   * Constructor
   */
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ) {
    //
    this._matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
    //
    this._matIconRegistry.registerFontClassAlias('mat_solid', 'material-icons');
    this._matIconRegistry.registerFontClassAlias(
      'mat_outline',
      'material-icons-outlined'
    );
    this._matIconRegistry.registerFontClassAlias(
      'mat_symbols_rounded',
      'material-symbols-rounded'
    );
  }
}
