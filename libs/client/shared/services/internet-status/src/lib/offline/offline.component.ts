import {
  Component,
  ViewEncapsulation,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'msk-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MskOfflineComponent {
  @Input() message!: string;

  /**
   * Constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component classes
   */
  @HostBinding('class') get classList(): any {
    return ['w-full', 'bg-warn', 'text-white', 'text-center', 'py-1'];
  }
}
