import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes-examples',
    templateUrl: './pipes-examples.component.html',
    styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent implements OnInit {

    months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    todaysDate: Date = new Date();

    jsonValue = {
        name: 'Alex',
        age: 34,
        address: {
            addressLine1: 'Paris',
            addressLine2: 'France'
        }
    };

    constructor() { }

    public ngOnInit(): void {
    }

}
