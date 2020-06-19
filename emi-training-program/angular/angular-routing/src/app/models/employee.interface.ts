export interface IEmployee {
  id: number;
  firstName: string;
  surname: string;
  department: string;
  designation: string;
  location: string;
  employmentStartDate: Date;
  employmentEndDate?: Date;
}
