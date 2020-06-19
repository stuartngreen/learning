import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

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
        this.router.navigate(['employees/view', this.employee.id]);
      }
    });

  }

  public onEdit(): void {
    this.router.navigate(['employees/edit', this.employee.id]);
  }

}
