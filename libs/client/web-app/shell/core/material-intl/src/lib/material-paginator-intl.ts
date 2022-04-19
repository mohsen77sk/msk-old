import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService } from '@ngneat/transloco';

export class PaginatorIntl extends MatPaginatorIntl {
  /**
   * constructor
   */
  constructor(private readonly _translocoService: TranslocoService) {
    super();

    _translocoService.langChanges$.subscribe(() =>
      setTimeout(() => this.getPaginatorIntl())
    );
  }

  /**
   * Get paginationIntl
   */
  getPaginatorIntl() {
    this.itemsPerPageLabel = this._translocoService.translate(
      'paginator.items_per_page_label'
    );
    this.nextPageLabel = this._translocoService.translate(
      'paginator.next_page_label'
    );
    this.previousPageLabel = this._translocoService.translate(
      'paginator.previous_page_label'
    );
    this.firstPageLabel = this._translocoService.translate(
      'paginator.first_page_label'
    );
    this.lastPageLabel = this._translocoService.translate(
      'paginator.last_page_label'
    );

    this.changes.next();
  }

  /**
   * A label for the range of items within the current page and the length of the whole list.
   *
   * @param page
   * @param pageSize
   * @param length
   */
  override getRangeLabel: (
    page: number,
    pageSize: number,
    length: number
  ) => string = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return this._translocoService.translate('paginator.range_page_label_1', {
        length,
      });
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return this._translocoService.translate('paginator.range_page_label_2', {
      startIndex: startIndex + 1,
      endIndex,
      length,
    });
  };
}
