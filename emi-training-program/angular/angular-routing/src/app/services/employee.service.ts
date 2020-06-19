import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import json from '../../assets/employee-data.json';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private employeeData: Array<Employee>;

  constructor() {
    console.log('EmployeeService constructor invoked.');

    // TODO: use HttpClient instead of the below solution
    this.employeeData = new Array<Employee>();

    const jsonData = Array.of(json);

    jsonData[0].forEach(e => {
      this.employeeData.push(new Employee(
        e.id,
        e.firstName,
        e.surname,
        e.department,
        e.designation,
        e.location,
        new Date(e.employmentStartDate),
        e.employmentEndDate ? new Date(e.employmentEndDate) : null
      ));
    });
  }

  public getData(): Observable<Array<Employee>> {
    // return of(this.employeeData);
    return from([this.employeeData]);
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return of(this.employeeData.find(e => e.id === id));
  }

  public saveChanges(): void {
    console.log('Save to file!');
  }
}
