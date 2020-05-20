import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee.model';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    public isDataVisible = false;

    public isActiveView = true;

    public dataButtonLabel = 'Show data';

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
                isActive: true
            },
            {
                id: 2,
                name: 'Sam',
                location: 'Pune',
                isActive: false
            },
            {
                id: 3,
                name: 'Swathi',
                location: 'Pune',
                isActive: true
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
                isActive: true
            },
            {
                id: 2,
                name: 'Sam',
                location: 'Pune',
                isActive: false
            },
            {
                id: 3,
                name: 'Swathi',
                location: 'Pune',
                isActive: true
            },
            {
                id: 4,
                name: 'Swathi',
                location: 'Pune',
                isActive: true
            },
            {
                id: 5,
                name: 'Swathi',
                location: 'Pune',
                isActive: false
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



