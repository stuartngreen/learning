import { IEmployee } from './employee';

export class EmployeeService {

    employeeData: IEmployee[];

    constructor() {
        this.employeeData = this.getData();
    }

    private getData(): IEmployee[] {
        return [
            {
                id: 1,
                name: 'Mayura',
                designation: 'Trainer',
                department: 'Soft Eng',
                gender: 'Female'
            },
            {
                id: 2,
                name: 'Sam',
                designation: 'HR Manager',
                department: 'Human Resource',
                gender: 'Male'
            },
            {
                id: 3,
                name: 'James',
                designation: 'Escalation Manager',
                department: 'Support',
                gender: 'Male'
            },
            {
                id: 4,
                name: 'Smitha',
                designation: 'Data Testing Engineer',
                department: 'DTS',
                gender: 'Female'
            },
            {
                id: 5,
                name: 'Swathi',
                designation: 'Tech Lead',
                department: 'Soft Eng',
                gender: 'Female'
            }
        ]
    }

    public displayEmployees(): void {
        this.employeeData.forEach(x => console.log(x));
    }

    public getEmployeeById(id: number): IEmployee[] {
        return this.employeeData.filter(x => x.id === id);
    }

    public getEmployeeCount(): number {
        return this.employeeData.length;
    }

    public getEmployeeCountByGender(gender: string): number {
        return this.employeeData.filter(x => x.gender.toLowerCase() === gender.toLowerCase()).length;
    }

    public updateEmployee(employee: IEmployee): void {
        let indexToUpdate = this.employeeData.indexOf(this.employeeData.find(x => x.id === employee.id));

        if (indexToUpdate !== -1) {
            this.employeeData[indexToUpdate] = employee;
        }
        else {
            console.log('No employee matching that ID found.');
        }
    }

    public deleteEmployee(id: number): void {
        let indexToDelete = this.employeeData.indexOf(this.employeeData.find(x => x.id === id));

        if (indexToDelete !== -1) {
            this.employeeData.splice(indexToDelete, 1);
        }
        else {
            console.log('No employee matching that ID found.');
        }
    }

    public addEmployee(name: string, designation: string, department: string, gender: string): void {
        let lastItemIndex = this.employeeData.length - 1;
        let newId = this.employeeData[lastItemIndex].id + 1;
        
        let newEmployee = {
            id: newId,
            name: name,
            designation: designation,
            department: department,
            gender: gender
        };

        this.employeeData.push(newEmployee);
    }
}
