import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employeeData: Array<Employee>;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  public ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Array<Employee>) => {
      this.employeeData = data;
    });
  }

  public onCreate(): void {
    this.router.navigate(['employees/create']);
  }

  public onActivate(componentRef: any): void {
    componentRef.saveEmployee.subscribe((employee: Employee) => {
      this.saveEmployee(employee);
    });
  }

  public saveEmployee(newEmployee: Employee): void {
    this.employeeService.addEmployee(newEmployee);
  }

  public deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
  }

}
