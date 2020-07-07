import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AuthGuard } from '../auth/auth.guard';
import { CreateEmployeeUnsavedChangesGuard } from './create-employee/create-employee-unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: EmployeesComponent, children: [
    {
      path: 'create',
      canActivate: [AuthGuard],
      canDeactivate: [CreateEmployeeUnsavedChangesGuard],
      component: CreateEmployeeComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
