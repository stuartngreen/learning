import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { UpdateToDoComponent } from './update-to-do/update-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddToDoComponent,
    UpdateToDoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
