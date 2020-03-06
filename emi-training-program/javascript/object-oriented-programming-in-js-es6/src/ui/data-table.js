import { BaseElement } from './base-element.js';

export class DataTable extends BaseElement {

    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    formatHeaderString(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    getElementString() {
        let thTags = '';
        for (let header of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${ header }</th>`;
        }

        let trTags = '';
        for (let row of this.data) {
            trTags += '<tr>'
            for (let property of this.headers) {
                let field = row[this.formatHeaderString(property)];
                trTags += `
                    <td class="mdl-data-table__cell--non-numeric">${ field }</td>
                `;
            }
            trTags += '</tr>';
        }

        return `
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        ${ thTags }
                    </tr>
                </thead>
                <tbody>
                    ${ trTags }
                </tbody>
            </table>
        `;
    }

}









