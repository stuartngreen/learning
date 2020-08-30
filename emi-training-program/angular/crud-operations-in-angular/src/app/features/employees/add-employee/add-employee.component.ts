import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public formGroup: FormGroup;
  public isLoading = false;
  private numericRegExp = /\-?\d*\.?\d{1,2}/;

  constructor(
    private employeeService: EmployeeService,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      gender: '',
      target: ['', [Validators.required, Validators.pattern(this.numericRegExp)]],
    });
  }

  public onSubmit(formData: any): void {
    this.isLoading = true;

    const newEmployee: Employee = {
      id: null,
      name: formData.name,
      designation: formData.designation,
      department: formData.department,
      gender: formData.gender,
      sales: 0,
      // tslint:disable-next-line:radix
      target: parseInt(formData.target)
    };

    this.employeeService.addEmployee(newEmployee).subscribe(res => {
      this.router.navigate(['employees']);
    }, (error: any) => {
      console.log(error);
    });
  }

}
