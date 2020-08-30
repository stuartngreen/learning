import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import { Employee } from '../../../core/models/employee.model';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public isLoading = true;
  private employeeData: Array<Employee>;
  public noOfEmployees = 0;

  public pieChartOptions: ChartOptions = { responsive: true };
  public pieChartLabels: Array<Label> = [];
  public pieChartData: SingleDataSet = [];
  public pieChartColors: Array<Color> = [];

  constructor(private employeeService: EmployeeService) { }

  public ngOnInit(): void {
    this.buildPieChart();
  }

  private buildPieChart(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeData = data;

      this.noOfEmployees = this.employeeData.length;

      let achievedEmployees = 0;
      let notAchievedEmployees = 0;

      this.employeeData.forEach(employee => {
        employee.sales >= employee.target ? achievedEmployees++ : notAchievedEmployees++;
      });

      this.pieChartLabels = ['Achieved', 'Not Achieved'];
      this.pieChartData = [achievedEmployees, notAchievedEmployees];
      this.pieChartColors = [{ backgroundColor: ['rgb(39, 174, 96)', 'rgb(203, 67, 53)'] }];

      this.isLoading = false;
    }, error => {
      console.log(error);
    });
  }

}
