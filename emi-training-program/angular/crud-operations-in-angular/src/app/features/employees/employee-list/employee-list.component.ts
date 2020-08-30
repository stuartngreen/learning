import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../../core/models/employee.model';
import { EmployeeService } from '../../../core/services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public isLoading = true;
  public employeeDeleted: boolean;
  public employeeData: Array<Employee>;
  public tableDataSource: MatTableDataSource<Employee>;
  public tableHeaders: Array<string> = ['name', 'designation', 'department', 'gender', 'id'];

  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  public sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
    public router: Router
  ) {
    this.employeeData = new Array<Employee>();
  }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeData = data;
      this.tableDataSource = new MatTableDataSource<Employee>(this.employeeData);
      this.sort.sort({ id: 'name', start: 'asc', disableClear: false });
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
      this.isLoading = false;
    }, error => {
      console.log(error);
    });
  }

  public deleteEmployee(id: number): void {
    this.isLoading = true;
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.isLoading = false;
      this.employeeDeleted = true;
    }, (error: any) => {
      console.log(error);
    });
  }

}
