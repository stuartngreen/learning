import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee.interface';

@Component({
    selector: 'app-switch-example',
    templateUrl: './switch-example.component.html',
    styleUrls: ['./switch-example.component.scss']
})
export class SwitchExampleComponent implements OnInit {

    constructor() { }

    public selectedEmployee: Array<IEmployee> = [];

    public employees: Array<IEmployee> = [
        {
            id: 1,
            name: 'Mayura',
            location: 'Pune',
            gender: 'Female',
            isActive: true
        },
        {
            id: 2,
            name: 'Smitha',
            location: 'Bangalore',
            gender: 'Female',
            isActive: true
        },
        {
            id: 3,
            name: 'James',
            location: 'Chennai',
            gender: 'Male',
            isActive: true
        },
        {
            id: 4,
            name: 'Swathi',
            location: 'Bangalore',
            gender: 'Female',
            isActive: true
        }
    ];

    public ngOnInit(): void {
    }

}
