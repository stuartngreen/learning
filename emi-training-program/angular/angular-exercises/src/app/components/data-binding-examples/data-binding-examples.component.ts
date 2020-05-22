import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding-examples',
    templateUrl: './data-binding-examples.component.html',
    styleUrls: ['./data-binding-examples.component.scss']
})
export class DataBindingExamplesComponent implements OnInit {

    public message = 'This is a welcome message.';

    constructor() { }

    public ngOnInit(): void {
    }

    public doSomething(): void {
        alert('Event binding triggered');
    }
}
