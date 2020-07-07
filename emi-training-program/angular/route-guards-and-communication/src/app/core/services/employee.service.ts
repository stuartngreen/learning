import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private employeeData: Array<Employee>;

  constructor() {
    this.employeeData = [
      {
        id: 1,
        name: 'Jane Doe',
        location: 'Cape Town',
        role: 'Software Engineer',
        rating: 5,
        comments: 'Jane is an excellent employee.'
      },
      {
        id: 2,
        name: 'John Doe',
        location: 'Cape Town',
        role: 'Quality Engineer',
        rating: 1,
        comments: 'John is a terrible employee and should probably be fired as soon as possible.'
      }
    ];
  }

  public getEmployees(): Observable<Array<Employee>> {
    return of(this.employeeData);
  }

  public addEmployee(employee: Employee): void {
    let newId: number;

    if (this.employeeData.length > 0) {
      newId = this.employeeData[this.employeeData.length - 1].id + 1;
    } else {
      newId = 1;
    }

    this.employeeData.push(
      {
        id: newId,
        name: employee.name,
        location: employee.location,
        role: employee.role,
        rating: +employee.rating,
        comments: employee.comments
      }
    );
  }

  public deleteEmployee(id: number): void {
    const item = this.employeeData.find(employee => employee.id === id);

    if (item !== undefined) {
      const itemIndex = this.employeeData.indexOf(item);
      this.employeeData.splice(itemIndex, 1);
    }
  }

}
