import { MatDateFormats } from '@angular/material/core';

export const MSK_DATE_FNS_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'P',
  },
  display: {
    dateInput: 'P',
    monthYearLabel: 'LLL uuuu',
    dateA11yLabel: 'PP',
    monthYearA11yLabel: 'LLLL uuuu',
  },
};
