import * as moment from 'moment';
import { BOAppConstants } from '../../commons/constants/bo.app.constants';

export class BOBasePageComponent {

    moment = moment;

    constructor() {
    }

    formatDate(date: string): string {
        let dateParse: string;
        if (date && date.length > 0) {
            dateParse = this.moment(date).format(BOAppConstants.MOMENT_FORMATS.parse.dateInput);
            return dateParse;
        }
        return null;
    }

    calcActualPage(pageOffset: number = 0, rowsPerPage: number = 10): number {
        return pageOffset / rowsPerPage;
    }

    checkEmptyArray(array: Array<any>): boolean {
        if (array && array.length) {
            return array.length <= 0;
        }
        return true;
    }

    getNestedRowData(rowData: any, field: string) {
        const fields = field.split('.');
        return rowData[fields[0]][fields[1]];
    }

    /** Returns the name of a namespace or variable reference at runtime. */
    /** Retorna el literal con el atributo del objeto que se le pasa */
    /** Modificado para que si se indica el fullpath no retorne el primer elemento para evitar usar el nombre de la clase que se invoca */
    /** Ejemplo: { name: 'Total', prop: CDAppConstants.nameof(() => CDAppConstants.moviMod.total), sortable: true } */

    nameof(selector: () => any, fullname = false) {
        const s = '' + selector;
        const m = s.match(/return\s+([A-Z$_.]+)/i)
            || s.match(/.*?(?:=>|function.*?{(?!\s*return))\s*([A-Z$_.]+)/i);
        const name = m && m[1] || '';
        return fullname ? name.split('.').slice(2).join('.') : name.split('.').reverse()[0];
    }
}
