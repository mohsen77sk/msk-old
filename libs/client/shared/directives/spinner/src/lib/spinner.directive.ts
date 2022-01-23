import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Directive({
  selector: '[mskSpinner]',
  exportAs: 'mskSpinner',
})
export class MskSpinnerDirective implements OnInit {
  /**
   * Spinner diameter
   */
  @Input('mskSpinnerDiameter') diameter = 24;

  /**
   * Spinner color
   * `primary`, `accent`, `warn`.
   */
  @Input('mskSpinnerColor') color: 'primary' | 'accent' | 'warn' = 'primary';

  /**
   * Directive value - show or hide spinner
   * @param {boolean} val
   */
  @Input('mskSpinner')
  set nbSpinner(val: boolean) {
    if (this._componentFactory) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this._shouldShow = val;
    }
  }

  @HostBinding('class.relative') isSpinnerExist = false;

  private _shouldShow = false;
  private _spinner!: ComponentRef<MatProgressSpinner>;
  private _componentFactory!: ComponentFactory<MatProgressSpinner>;

  /**
   * Constructor
   */
  constructor(
    private renderer: Renderer2,
    private directiveElement: ElementRef,
    private directiveView: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(MatProgressSpinner);
    if (this._shouldShow) {
      this.show();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Hide
   */
  hide() {
    if (this.isSpinnerExist) {
      this.directiveView.remove();
      this.isSpinnerExist = false;
    }
  }

  /**
   * Show
   */
  show() {
    if (!this.isSpinnerExist) {
      this._spinner = this.directiveView.createComponent<MatProgressSpinner>(
        this._componentFactory
      );
      this._setInstanceInputs(this._spinner.instance);
      this._spinner.changeDetectorRef.detectChanges();
      // Create container element
      const container = this.renderer.createElement('msk-spinner');
      this._setContainerStyle(container);
      // Append spinner to container
      this.renderer.appendChild(
        container,
        this._spinner.location.nativeElement
      );
      // Append container to host element
      this.renderer.appendChild(this.directiveElement.nativeElement, container);
      this.isSpinnerExist = true;
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set instance spinner
   *
   * @private
   * @param instance
   */
  private _setInstanceInputs(instance: MatProgressSpinner) {
    instance.mode = 'indeterminate';
    typeof this.color !== 'undefined' && (instance.color = this.color);
    typeof this.diameter !== 'undefined' && (instance.diameter = this.diameter);
  }

  /**
   * Set container style
   *
   * @private
   * @param container
   */
  private _setContainerStyle(container: unknown) {
    this.renderer.setStyle(container, 'position', 'absolute');
    this.renderer.setStyle(container, 'top', 0);
    this.renderer.setStyle(container, 'left', 0);
    this.renderer.setStyle(container, 'right', 0);
    this.renderer.setStyle(container, 'bottom', 0);
    this.renderer.setStyle(container, 'display', 'flex');
    this.renderer.setStyle(container, 'align-items', 'center');
    this.renderer.setStyle(container, 'justify-content', 'center');
    this.renderer.setStyle(container, 'border-radius', 'inherit');
    this.renderer.setStyle(container, 'overflow', 'hidden');
    this.renderer.setStyle(container, 'z-index', '9999');
    this.renderer.setStyle(
      container,
      'background-color',
      'var(--color-bg-hover)'
    );
  }
}
