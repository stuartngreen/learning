import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'employees',
    loadChildren: () => import('./feature-modules/employees/employees.module')
      .then(m => m.EmployeesModule)
  },
  {
    path: 'organisational-structure',
    loadChildren: () => import('./feature-modules/organisational-structure/organisational-structure.module')
      .then(m => m.OrganisationalStructureModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
