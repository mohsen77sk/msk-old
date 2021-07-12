import { Injectable } from '@angular/core';
import { MskDrawerComponent } from './drawer.component';

@Injectable({
  providedIn: 'root',
})
export class MskDrawerService {
  private _componentRegistry: Map<string, MskDrawerComponent> = new Map<
    string,
    MskDrawerComponent
  >();

  /**
   * Constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register drawer component
   *
   * @param name
   * @param component
   */
  registerComponent(name: string, component: MskDrawerComponent): void {
    this._componentRegistry.set(name, component);
  }

  /**
   * Deregister drawer component
   *
   * @param name
   */
  deregisterComponent(name: string): void {
    this._componentRegistry.delete(name);
  }

  /**
   * Get drawer component from the registry
   *
   * @param name
   */
  getComponent(name: string): MskDrawerComponent | undefined {
    return this._componentRegistry.get(name);
  }
}
