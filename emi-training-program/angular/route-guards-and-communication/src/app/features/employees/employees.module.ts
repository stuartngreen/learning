import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { RatingComponent } from './employee-list/proficiency-details/rating/rating.component';
import { ProficiencyDetailsComponent } from './employee-list/proficiency-details/proficiency-details.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeesComponent,
    RatingComponent,
    ProficiencyDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule {
  constructor() {
    console.log('EmployeesModule loaded.');
  }
}
