import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Observable, fromEvent, map } from 'rxjs';
import { MskOfflineComponent } from './offline/offline.component';

@Injectable()
export class MskInternetStatusService {
  private _componentRef!: ComponentRef<MskOfflineComponent>;

  private _online$: Observable<string>;
  private _offline$: Observable<string>;

  /**
   * Constructor
   */
  constructor(
    private _injector: Injector,
    private _appRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {
    /**
     * Get the online/offline status from browser window
     */
    this._online$ = fromEvent(window, 'online').pipe(map(() => 'online'));
    this._offline$ = fromEvent(window, 'offline').pipe(map(() => 'offline'));

    this._offline$
      .pipe(
        map(() => {
          this.createComponent();
        }),
      )
      .subscribe();

    this._online$
      .pipe(
        map(() => {
          this.removeComponent();
        }),
      )
      .subscribe();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the component
   */
  createComponent(): void {
    // Create a component reference from the component
    this._componentRef = this._componentFactoryResolver
      .resolveComponentFactory(MskOfflineComponent)
      .create(this._injector);

    // Set message to 'offline'
    this._componentRef.instance.message = 'offline';

    // Attach component to the appRef so that it's inside the ng component tree
    this._appRef.attachView(this._componentRef.hostView);

    // Get DOM element from component
    const domElem = (this._componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.insertBefore(domElem, document.body.firstChild);
  }

  /**
   * Remove the component
   */
  removeComponent(): void {
    // Set message to 'online'
    this._componentRef.instance.message = 'online';

    // Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      this._appRef.detachView(this._componentRef.hostView);
      this._componentRef.destroy();
    }, 1000);
  }
}
