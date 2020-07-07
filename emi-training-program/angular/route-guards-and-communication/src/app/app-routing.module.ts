import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AuthGuard } from './features/auth/auth.guard';
import { AccessDeniedComponent } from './features/auth/access-denied/access-denied.component';
import { UsersResolveGuard } from './features/users/users-resolve.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'employees',
    loadChildren: () => import('./features/employees/employees.module')
      .then(m => m.EmployeesModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    resolve: { userData: UsersResolveGuard },
    loadChildren: () => import('./features/users/users.module')
      .then(m => m.UsersModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
