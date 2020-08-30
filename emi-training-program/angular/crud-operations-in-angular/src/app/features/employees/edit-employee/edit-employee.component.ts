import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../../core/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  private employeeId: number;
  public formGroup: FormGroup;
  public isLoading: boolean;
  private numericRegExp = /\-?\d*\.?\d{1,2}/;

  constructor(
    private employeeService: EmployeeService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.isLoading = true;
    this.formGroup = this.buildForm();

    this.activatedRoute.paramMap.subscribe(params => {
      this.employeeId = +(params.get('id'));
      this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
        this.formGroup.get('name').setValue(employee.name);
        this.formGroup.get('designation').setValue(employee.designation);
        this.formGroup.get('department').setValue(employee.department);
        this.formGroup.get('gender').setValue(employee.gender);
        this.formGroup.get('sales').setValue(employee.sales);
        this.formGroup.get('target').setValue(employee.target);
        this.isLoading = false;
      });
    });
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      gender: '',
      sales: ['', [Validators.required, Validators.pattern(this.numericRegExp)]],
      target: ['', [Validators.required, Validators.pattern(this.numericRegExp)]],
    });
  }

  public onSubmit(formData: any): void {
    this.isLoading = true;

    const editedEmployee: Employee = {
      id: this.employeeId,
      name: formData.name,
      designation: formData.designation,
      department: formData.department,
      gender: formData.gender,
      // tslint:disable:radix
      sales: parseInt(formData.sales),
      target: parseInt(formData.target)
    };

    this.employeeService.editEmployee(editedEmployee).subscribe(res => {
      this.router.navigate(['employees']);
    }, (error: any) => {
      console.log(error);
    });
  }

}
