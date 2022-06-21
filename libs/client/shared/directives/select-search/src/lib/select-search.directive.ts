import {
  Directive,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject } from 'rxjs';

@Directive({
  selector: '[mskSelectSearch]',
  exportAs: 'mskSelectSearch',
})
export class MskSelectSearchDirective {
  @Input()
  set searchList(val: any) {
    this._list = val;
    // Set filter list
    this.filteredList.next(this._list ? this._list.slice() : []);
    // If showing search, Disable OptionCentering in mat-select
    if (this.showSearch) {
      this._matSelect.disableOptionCentering = true;
    }
  }
  @Input() searchItems: string | string[] | undefined;
  @Input() searchPlaceholder = 'search ...';

  @Output() filteredList: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  private _list!: any[];
  private _previousSelectedValues!: any[];

  /**
   * Constructor
   */
  constructor(private _matSelect: MatSelect, private _renderer: Renderer2) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter showSearch
   */
  get showSearch(): boolean {
    return this._list && this._list.length > 5;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Decorated methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On openedChange
   */
  @HostListener('openedChange', ['$event'])
  onOpenedChange(isOpened: boolean): void {
    if (!this.showSearch) {
      return;
    }

    // If close panel, reset filter list
    if (!isOpened) {
      this.filteredList.next(this._list.slice());
      return;
    }

    // Handling <mat-select [multiple]="true"
    this._initMultipleHandling();

    // Create search input
    const input = this._renderer.createElement('input');
    this._renderer.setAttribute(input, 'placeholder', this.searchPlaceholder);
    this._renderer.addClass(input, 'mat-input-element');
    // Get the search keyword and filter the list
    this._renderer.listen(input, 'input', () => {
      const search = input.value ? input.value.toLowerCase() : '';
      // Send filtered list
      this.filteredList.next(
        this._list.filter((item) => {
          // If array is string
          if (this.searchItems == undefined) {
            return this._includes(item, search);
          }
          // If search in a item
          else if (typeof this.searchItems === 'string') {
            return this._includes(item[this.searchItems], search);
          }
          // If search in multi items
          else if (Array.isArray(this.searchItems)) {
            return this.searchItems.some((key) =>
              this._includes(item[key], search)
            );
          } else {
            return true;
          }
        })
      );
      // Active first item
      setTimeout(() => this._matSelect._keyManager.setFirstItemActive(), 0);
    });

    // Crate option
    const matOption = this._renderer.createElement('mat-option');
    this._renderer.setAttribute(matOption, 'role', 'option');
    this._renderer.addClass(matOption, 'mat-option');
    this._renderer.addClass(matOption, 'z-999');
    this._renderer.addClass(matOption, 'top-0');
    this._renderer.addClass(matOption, 'sticky');
    this._renderer.addClass(matOption, 'border-b');
    this._renderer.setStyle(matOption, 'background', 'inherit');

    // Append input to option
    this._renderer.appendChild(matOption, input);

    // Insert search option to panel
    const panel = document.querySelector('.mat-select-panel');
    if (!panel) {
      throw new Error('Cannot find mat select panel');
    }
    this._renderer.insertBefore(panel, matOption, panel.firstChild);

    // Focus input
    input.focus();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Returns true if value appears as a item of the result
   *
   * @param item
   * @param value
   * @private
   */
  private _includes(item: string, value: string): boolean {
    return item.toString().toLowerCase().includes(value);
  }

  /**
   * Initializes handling <mat-select [multiple]="true">
   * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
   *
   * @private
   */
  private _initMultipleHandling(): void {
    // if <mat-select [multiple]="true">
    // store previously selected values and restore them when they are deselected
    // because the option is not available while we are currently filtering
    this._previousSelectedValues = this._matSelect.ngControl.value;

    this._matSelect.ngControl.valueChanges?.subscribe((selectedValues) => {
      let restoreSelectedValues = false;
      const updatedSelectedValues =
        selectedValues && Array.isArray(selectedValues)
          ? [...selectedValues]
          : [];

      if (this._matSelect.multiple) {
        if (
          this._previousSelectedValues &&
          Array.isArray(this._previousSelectedValues)
        ) {
          if (!selectedValues || !Array.isArray(selectedValues)) {
            selectedValues = [];
          }
          const optionValues = this._matSelect.options.map(
            (option) => option.value
          );

          this._previousSelectedValues.forEach((previousValue) => {
            if (
              !updatedSelectedValues.some((v) =>
                this._matSelect.compareWith(v, previousValue)
              ) &&
              !optionValues.some((v) =>
                this._matSelect.compareWith(v, previousValue)
              )
            ) {
              // if a value that was selected before is deselected and not found in the options, it was deselected
              // due to the filtering, so we restore it.
              updatedSelectedValues.push(previousValue);
              restoreSelectedValues = true;
            }
          });
        }
      }
      this._previousSelectedValues = selectedValues;

      if (restoreSelectedValues) {
        this._matSelect._onChange(selectedValues);
      }
    });
  }
}
