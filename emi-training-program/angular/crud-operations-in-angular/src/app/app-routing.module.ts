import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './features/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './features/employees/edit-employee/edit-employee.component';
import { DataVisualisationComponent } from './features/data-visualisation/data-visualisation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'data-visualisation', component: DataVisualisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
