import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './features/home/home.component';
import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { AddEmployeeComponent } from './features/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './features/employees/edit-employee/edit-employee.component';
import { DataVisualisationComponent } from './features/data-visualisation/data-visualisation.component';
import { EmployeeService } from './core/services/employee.service';
import { BarChartComponent } from './features/data-visualisation/bar-chart/bar-chart.component';
import { PieChartComponent } from './features/data-visualisation/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    NavigationComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DataVisualisationComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
