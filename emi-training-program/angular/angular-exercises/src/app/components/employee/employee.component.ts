import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee.interface';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    public isDataVisible = true;

    public isActiveView = true;

    public dataButtonLabel = this.isDataVisible ? 'Hide data' : 'Show data';

    public viewButtonLabel = 'View inactive';

    // TODO: make a service for employees
    public id: string;

    public employees: IEmployee[];

    constructor() {
        this.employees = [
            {
                id: 1,
                name: 'Mayura',
                location: 'Pune',
                gender: 'Female',
                isActive: true
            },
            {
                id: 2,
                name: 'Sam',
                location: 'Pune',
                gender: 'Male',
                isActive: false
            },
            {
                id: 3,
                name: 'Swathi',
                location: 'Pune',
                gender: 'Female',
                isActive: true
            },
            {
                id: 4,
                name: 'Stuart',
                location: 'Cape Town',
                gender: 'Male',
                isActive: true
            },
            {
                id: 5,
                name: 'Francois',
                location: 'Cape Town',
                gender: 'Male',
                isActive: false
            }
        ];
    }

    public ngOnInit(): void {
    }

    public getEmployees(): void {
        this.employees = [
            {
                id: 1,
                name: 'Mayura',
                location: 'Pune',
                gender: 'Female',
                isActive: true
            },
            {
                id: 2,
                name: 'Sam',
                location: 'Pune',
                gender: 'Male',
                isActive: false
            },
            {
                id: 3,
                name: 'Swathi',
                location: 'Pune',
                gender: 'Female',
                isActive: true
            },
            {
                id: 4,
                name: 'Stuart',
                location: 'Cape Town',
                gender: 'Male',
                isActive: true
            },
            {
                id: 5,
                name: 'Francois',
                location: 'Cape Town',
                gender: 'Male',
                isActive: false
            },
            {
                id: 6,
                name: 'Phindi',
                location: 'Cape Town',
                gender: 'Female',
                isActive: true
            },
            {
                id: 7,
                name: 'Liam',
                location: 'Cape Town',
                gender: 'Male',
                isActive: true
            }
        ];
    }

    public trackByEmployeeId(id: string): string {
        return this.id;
    }

    public toggleData(): void {
        this.isDataVisible = !this.isDataVisible;
        this.isDataVisible ? this.dataButtonLabel = 'Hide data' : this.dataButtonLabel = 'Show data';
    }

    public toggleView(): void {
        this.isActiveView = !this.isActiveView;
        this.isActiveView ? this.viewButtonLabel = 'View inactive' : this.viewButtonLabel = 'View active';
    }
}



