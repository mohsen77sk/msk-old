import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

// prettier-ignore
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class MskExcelService {
  /**
   * Constructor
   */
  constructor(@Inject(DOCUMENT) private _document: any) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Export json to Excel file
   *
   * @param json data
   * @param fileName export name
   */
  public exportAsExcelFile(json: any[], fileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
      Workbook: {
        Views: [
          // prettier-ignore
          { RTL: this._document.body.getAttribute('dir') === 'rtl' ? true : false },
        ],
      },
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this._saveAsExcelFile(excelBuffer, fileName);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Save excel file
   *
   * @param buffer
   * @param fileName
   */
  private _saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION,
    );
  }
}
