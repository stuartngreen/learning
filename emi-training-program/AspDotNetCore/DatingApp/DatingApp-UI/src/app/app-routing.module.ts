import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', runGuardsAndResolvers: 'always', canActivate: [AuthenticationGuard], children: [
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'user/edit', component: UserEditComponent, canDeactivate: [PreventUnsavedChangesGuard]},
    { path: 'lists', component: ListsComponent },
    { path: 'messages', component: MessagesComponent },
  ] },
  { path: '**', component: MessagesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
