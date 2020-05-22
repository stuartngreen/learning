import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { DataBindingExamplesComponent } from './components/data-binding-examples/data-binding-examples.component';
import { PipesExamplesComponent } from './components/pipes-examples/pipes-examples.component';
import { SwitchExampleComponent } from './components/switch-example/switch-example.component';

const routes: Routes = [
    { path: 'employees', component: EmployeeComponent },
    { path: 'custom-pipes', component: CustomPipesComponent },
    { path: 'data-binding-examples', component: DataBindingExamplesComponent },
    { path: 'pipes-examples', component: PipesExamplesComponent },
    { path: 'switch-example', component: SwitchExampleComponent },
    { path: '', redirectTo: 'custom-pipes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
