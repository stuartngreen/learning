import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  public authenticatedUser: User;

  @Input()
  public employeeData: Array<Employee>;

  @Output()
  public deleteEmployee = new EventEmitter<number>();

  public selectedEmployee: Employee;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  public onClickDelete(id: number): void {
    this.deleteEmployee.emit(id);
  }

  public onClickDetails(id: number): void {
    this.selectedEmployee = this.employeeData.find(employee => employee.id === id);
  }

  public closeModal(): void {
    this.selectedEmployee = null;
  }

}
