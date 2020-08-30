import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.service';
import { Employee } from '../../../core/models/employee.model';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public isLoading = true;
  private employeeData: Array<Employee>;
  public chartView = 'all';

  public barChartOptions: ChartOptions;
  public barChartLabels: Array<Label>;
  public barChartData: Array<ChartDataSets>;
  public barChartColors = { target: 'rgb(213, 219, 219)', achieved: 'rgb(39, 174, 96)', notAchieved: 'rgb(203, 67, 53)' };

  constructor(private employeeService: EmployeeService) {
    this.barChartOptions = {
      responsive: true,
      scales : {
        xAxes: [{ ticks: { min: 0 } }]
      }
    };
  }

  public ngOnInit(): void {
    this.buildBarChart();
  }

  private buildBarChart(): void {
    this.barChartLabels = new Array<Label>();
    this.barChartData = [{ data: [] }];

    const salesData: Array<number> = [];
    const targetData: Array<number> = [];
    const barColors: Array<string> = [];

    this.employeeService.getEmployees().subscribe(data => {
      this.employeeData = data;

      if (this.chartView === 'achieved') {
        this.employeeData = this.employeeData.filter(employee => employee.sales >= employee.target);
      }

      if (this.chartView === 'notAchieved') {
        this.employeeData = this.employeeData.filter(employee => employee.sales < employee.target);
      }

      this.employeeData.forEach(employee => {
        this.barChartLabels.push(employee.name);
        salesData.push(employee.sales);
        targetData.push(employee.target);
        employee.sales >= employee.target ? barColors.push(this.barChartColors.achieved) : barColors.push(this.barChartColors.notAchieved);
      });

      this.barChartData = [
        {
          data: salesData,
          backgroundColor: barColors,
          borderColor: barColors,
          hoverBackgroundColor: barColors,
          hoverBorderColor: barColors,
          barThickness: 10
        },
        {
          data: targetData,
          backgroundColor: this.barChartColors.target,
          borderColor: this.barChartColors.target,
          hoverBackgroundColor: this.barChartColors.target,
          hoverBorderColor: this.barChartColors.target,
          barThickness: 10
        }
      ];

      this.isLoading = false;
    }, error => {
      console.log(error);
    });
  }

  public updateChartView(): void {
    this.buildBarChart();
  }

}
