import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serverUrl = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client side error occurred => ', errorResponse.error);
    } else {
      console.log('Server side error occured => ', errorResponse.error);
    }
    return throwError('Houston, we have a problem...');
  }

  public getEmployees(): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(this.serverUrl)
      .pipe(catchError(this.handleError));
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.serverUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.serverUrl, employee);
  }

  public deleteEmployee(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.serverUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  public editEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.serverUrl}/${employee.id}`, employee)
      .pipe(catchError(this.handleError));
  }

}
