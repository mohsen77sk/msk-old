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
import { MskSpinnerComponent } from './spinner.component';

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
  private _spinner!: ComponentRef<MskSpinnerComponent>;
  private _componentFactory!: ComponentFactory<MskSpinnerComponent>;

  /**
   * Constructor
   */
  constructor(
    private renderer: Renderer2,
    private directiveElement: ElementRef,
    private directiveView: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        MskSpinnerComponent,
      );
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
      this._spinner = this.directiveView.createComponent<MskSpinnerComponent>(
        this._componentFactory,
      );
      this._setInstanceInputs(this._spinner.instance);
      this._spinner.changeDetectorRef.detectChanges();
      switch (this.directiveElement.nativeElement.tagName) {
        case 'MAT-SELECT':
          this.renderer.appendChild(
            // render in mat-form-field-flex
            this.directiveElement.nativeElement.parentElement?.parentElement,
            this._spinner.location.nativeElement,
          );
          break;

        default:
          this.renderer.appendChild(
            // render in root element
            this.directiveElement.nativeElement,
            this._spinner.location.nativeElement,
          );
          break;
      }
      this.isSpinnerExist = true;
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set instance spinner
   *
   * @param instance
   * @private
   */
  private _setInstanceInputs(instance: MskSpinnerComponent) {
    typeof this.color !== 'undefined' && (instance.color = this.color);
    typeof this.diameter !== 'undefined' && (instance.diameter = this.diameter);
  }
}
