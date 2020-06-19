import { IEmployee } from './employee.interface';

export class Employee implements IEmployee {

  constructor(
    public id: number,
    public firstName: string,
    public surname: string,
    public department: string,
    public designation: string,
    public location: string,
    public employmentStartDate: Date,
    public employmentEndDate?: Date
  ) {
  }

  public getFullName(): string {
    return `${ this.firstName } ${ this.surname }`;
  }
}
