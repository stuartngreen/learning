import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { UrlListComponent } from './features/url-list/url-list.component';
import { RegisterComponent } from './features/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'url-list', component: UrlListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
