import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-software-engineering-employee',
  templateUrl: './software-engineering-employee.component.html',
  styleUrls: ['./software-engineering-employee.component.scss']
})
export class SoftwareEngineeringEmployeeComponent implements OnInit {

  public employeeLevel: string;

  public employeesData: Array<Employee>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  public ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.employeeLevel = params.get('level');

      if (this.employeeLevel) {
        this.employeeService.getData().subscribe(employees => {
          this.employeesData = employees.filter(
            e => e.designation.toLowerCase() === this.employeeLevel.split('-').join(' ')
          );
        });
      }
    });

  }

}
