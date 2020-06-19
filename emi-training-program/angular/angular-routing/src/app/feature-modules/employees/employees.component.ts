import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employeeData: Array<Employee>;

  public selectedEmployeeId: number;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
  }

  public ngOnInit(): void {
    this.employeeService.getData().subscribe(data => {
      this.employeeData = data;
    });

    this.router.navigate(['employees/view']);
  }

  public onAdd(): void {
    this.router.navigate(['employees/add']);
  }

}
