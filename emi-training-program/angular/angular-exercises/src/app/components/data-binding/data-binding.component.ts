import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

    public message = 'This is a welcome message.';

    constructor() { }

    public ngOnInit(): void {
    }

    public doSomething(): void {
        alert('Event binding triggered');
    }
}
