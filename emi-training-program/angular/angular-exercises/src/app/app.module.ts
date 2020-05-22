import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SwitchExampleComponent } from './components/switch-example/switch-example.component';
import { PipesExamplesComponent } from './components/pipes-examples/pipes-examples.component';
import { DataBindingExamplesComponent } from './components/data-binding-examples/data-binding-examples.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { NavComponent } from './components/nav/nav.component';
import { AlphaCharCounterPipe } from './pipes/alpha-char-counter.pipe';
import { ExponentCalcPipe } from './pipes/exponent-calc.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SwitchExampleComponent,
    PipesExamplesComponent,
    DataBindingExamplesComponent,
    CustomPipesComponent,
    NavComponent,
    AlphaCharCounterPipe,
    ExponentCalcPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
