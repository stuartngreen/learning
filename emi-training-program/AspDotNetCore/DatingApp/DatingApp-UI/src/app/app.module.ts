import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MessagesComponent } from './components/messages/messages.component';
import { UsersComponent } from './components/users/users.component';
import { ListsComponent } from './components/lists/lists.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MessagesComponent,
    UsersComponent,
    ListsComponent,
    RegisterComponent,
    HomeComponent,
    UserCardComponent,
    UserDetailsComponent,
    UserEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
