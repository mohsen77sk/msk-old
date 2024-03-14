import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'msk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MskSpinnerComponent {
  /**
   * Spinner diameter
   */
  @Input() diameter = 24;

  /**
   * Spinner color
   * `primary`, `accent`, `warn`.
   */
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
}
