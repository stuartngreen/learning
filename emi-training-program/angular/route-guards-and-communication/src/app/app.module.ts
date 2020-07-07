import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AccessDeniedComponent } from './features/auth/access-denied/access-denied.component';
import { UsersResolveGuard } from './features/users/users-resolve.guard';
import { LoaderComponent } from './features/loader/loader.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    LoginComponent,
    AccessDeniedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [UsersResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
