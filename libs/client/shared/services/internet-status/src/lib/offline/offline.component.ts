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

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component classes
   */
  @HostBinding('class') get classList(): any {
    return {
      'py-1': this.message,
      'w-full': this.message,
      'text-white': this.message,
      'text-center': this.message,
      'text-opacity-87': this.message,
      'transition-colors': this.message,
      'duration-500': this.message,
      'bg-green-500': this.message == 'online',
      'bg-warn-500': this.message == 'offline',
    };
  }
}
