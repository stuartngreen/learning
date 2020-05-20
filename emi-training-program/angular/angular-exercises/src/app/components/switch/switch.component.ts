import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee.model';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

    constructor() { }

    public selectedEmployee: Array<IEmployee> = [];

    public employees: Array<IEmployee> = [
        {
            id: 1,
            name: 'Mayura',
            location: 'Pune',
            isActive: true
        },
        {
            id: 2,
            name: 'Smitha',
            location: 'Bangalore',
            isActive: true
        },
        {
            id: 3,
            name: 'James',
            location: 'Chennai',
            isActive: true
        },
        {
            id: 4,
            name: 'Swathi',
            location: 'Bangalore',
            isActive: true
        }
    ];

    public ngOnInit(): void {
    }

}
