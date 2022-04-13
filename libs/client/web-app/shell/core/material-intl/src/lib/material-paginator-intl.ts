import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService } from '@ngneat/transloco';

export class PaginatorIntl {
  /**
   * constructor
   */
  constructor(private readonly _translocoService: TranslocoService) {}

  /**
   * Get paginationIntl
   */
  getPaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();
    paginatorIntl.itemsPerPageLabel = this._translocoService.translate(
      'paginator.items_per_page_label'
    );
    paginatorIntl.nextPageLabel = this._translocoService.translate(
      'paginator.next_page_label'
    );
    paginatorIntl.previousPageLabel = this._translocoService.translate(
      'paginator.previous_page_label'
    );
    paginatorIntl.firstPageLabel = this._translocoService.translate(
      'paginator.first_page_label'
    );
    paginatorIntl.lastPageLabel = this._translocoService.translate(
      'paginator.last_page_label'
    );
    paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);

    return paginatorIntl;
  }

  /**
   * A label for the range of items within the current page and the length of the whole list.
   *
   * @private
   * @param page
   * @param pageSize
   * @param length
   */
  private getRangeLabel(
    page: number,
    pageSize: number,
    length: number
  ): string {
    if (length === 0 || pageSize === 0) {
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
  }
}
