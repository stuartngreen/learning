import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {

  public employeeId: number;

  public employee: Employee;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
  }

  public ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.employeeId = +(params.get('id'));
      this.employeeService.getEmployeeById(this.employeeId).subscribe(e => {
        this.employee = e;
      });

      if (this.employee) {
        this.router.navigate(['employees/edit', this.employee.id]);
      }
    });

  }

  public onCancel(): void {
    this.router.navigate(['employees/view', this.employee.id]);
  }

  public onSave(
    firstName: string, surname: string, department: string, designation: string,
    location: string, startDate: string, endDate: string
  ): void {

    this.employee.firstName = firstName;
    this.employee.surname = surname,
    this.employee.department = department;
    this.employee.designation = designation;
    this.employee.location = location;
    this.employee.employmentStartDate = new Date(startDate);

    if (endDate === '') {
      this.employee.employmentEndDate = null;
    } else {
      this.employee.employmentEndDate = new Date(endDate);
    }

    this.router.navigate(['employees/view', this.employee.id]);
    this.updateEmployeeDetails();
  }

  public updateEmployeeDetails(): void {
    this.employeeService.saveChanges();
  }

}
