import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('createEmployeeForm', { static: true })
  createEmployeeForm: NgForm;

  public newEmployee: Employee;

  @Output()
  public saveEmployee = new EventEmitter<Employee>();

  constructor(private router: Router) {
    this.newEmployee = {
      id: null,
      name: null,
      location: null,
      role: null,
      rating: null,
      comments: null
    };
  }

  public ngOnInit(): void {
  }

  public onCancel(): void {
    this.router.navigate(['employees']);
  }

  public onSave(): void {
    if (this.createEmployeeForm.dirty) {
      this.saveEmployee.emit(this.newEmployee);
      this.createEmployeeForm.resetForm();
    }
  }

}
