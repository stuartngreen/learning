import { Component, OnInit } from '@angular/core';
import { CustomValidatorService } from '../core/services/custom-validator-service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public jobTitles: Array<string>;
  public skills: Array<string>;
  public companyNames: Array<string>;
  public employeeDetailsForm: FormGroup;
  public validFormDetails: boolean;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private validator: CustomValidatorService
  ) {
    this.jobTitles = this.dataService.getJobTitles();
    this.skills = this.dataService.getSkills();
    this.companyNames = this.dataService.getCompanyNames();
  }

  public ngOnInit(): void {
    this.employeeDetailsForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [this.validator.validateName(), Validators.required]],
      email: ['', Validators.email],
      employmentHistory: this.formBuilder.array([this.createEmploymentHistoryFormGroup()])
    });
  }

  get name(): FormControl {
    return this.employeeDetailsForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.employeeDetailsForm.get('email') as FormControl;
  }

  get employmentHistory(): FormArray {
    return this.employeeDetailsForm.get('employmentHistory') as FormArray;
  }

  public getSkills(i: number): FormArray {
    return this.employmentHistory.controls[i].get('skills') as FormArray;
  }

  public createEmploymentHistoryFormGroup(): FormGroup {
    return this.formBuilder.group({
      companyName: ['', this.validator.validateCompanyName()],
      jobTitle: ['', this.validator.validateSelect()],
      fromDate: [''],
      toDate: [''],
      skills: this.formBuilder.array([this.createSkillFormGroup()])
    });
  }

  public createSkillFormGroup(): FormGroup {
    return this.formBuilder.group({
      skill: ['']
    });
  }

  public addEmploymentHistory(): void {
    this.employmentHistory.push(this.createEmploymentHistoryFormGroup());
  }

  public addSkill(i: number): void {
    (this.employmentHistory.controls[i].get('skills') as FormArray).push(this.createSkillFormGroup());
  }

  public onSubmit(): void {
    if (this.employeeDetailsForm.valid){
      this.validFormDetails = true;
      // do something with the data
    }
  }

  public onReset(): void {
    this.employeeDetailsForm = this.buildForm();
    this.validFormDetails = false;
  }

}
