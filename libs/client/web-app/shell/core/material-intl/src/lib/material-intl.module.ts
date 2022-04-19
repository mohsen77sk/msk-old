import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService } from '@ngneat/transloco';
import { PaginatorIntl } from './material-paginator-intl';

@NgModule({
  providers: [
    {
      provide: MatPaginatorIntl,
      deps: [TranslocoService],
      useClass: PaginatorIntl,
    },
  ],
})
export class MaterialIntlCoreModule {}
