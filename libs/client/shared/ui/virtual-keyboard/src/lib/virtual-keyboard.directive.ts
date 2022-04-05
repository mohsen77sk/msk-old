/* eslint-disable @angular-eslint/directive-selector */
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MskVirtualKeyboardComponent } from './virtual-keyboard.component';

@Directive({
  selector: 'input[mskVirtualKeyboard], textarea[mskVirtualKeyboard]',
  exportAs: 'mskVirtualKeyboard',
})
export class MskVirtualKeyboardDirective implements OnInit, OnDestroy {
  isOpen = false;

  private _overlayRef!: OverlayRef;
  private _panelRef!: ComponentRef<MskVirtualKeyboardComponent>;

  /**
   * Constructor
   */
  constructor(
    private _overlay: Overlay,
    private _elementRef: ElementRef<HTMLInputElement>,
    @Inject(DOCUMENT) private _document: any
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open keyboard panel
   */
  openPanel(): void {
    // return if panel is attached
    if (this._overlayRef?.hasAttached()) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Update direction the overlay
    this._overlayRef.setDirection(this._document.body.getAttribute('dir'));

    // Attach the portal to the overlay
    this._panelRef = this._overlayRef.attach(
      new ComponentPortal(MskVirtualKeyboardComponent)
    );
    this._panelRef.instance.setActiveInput(this._elementRef.nativeElement);
    this.isOpen = true;

    // Reference the input element
    this._panelRef.instance.closePanel.subscribe(() => this.closePanel());
  }

  /**
   * Close keyboard panel
   */
  closePanel(): void {
    this._overlayRef.detach();
    this.isOpen = false;
  }

  /**
   * Toggle keyboard panel
   */
  togglePanel(): void {
    if (this.isOpen) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: false,
      scrollStrategy: this._overlay.scrollStrategies.noop(),
      width: this._inputOrigin().getBoundingClientRect().width,
      minWidth: this._inputOrigin().getBoundingClientRect().width,
      maxWidth: this._inputOrigin().getBoundingClientRect().width,
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._inputOrigin())
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]),
    });
  }

  /**
   * Get input origin
   *
   * @private
   */
  private _inputOrigin(): any {
    const element = this._elementRef.nativeElement;
    // Check input in mat-form-field
    if (element.classList.contains('mat-input-element')) {
      return element.parentNode?.parentNode; // return [mat-form-field-flex] element
    }

    return element;
  }
}
