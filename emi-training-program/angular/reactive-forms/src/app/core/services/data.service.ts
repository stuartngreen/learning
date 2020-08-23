import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public jobTitles: Array<string>;
  public skills: Array<string>;
  public companyNames: Array<string>;

  constructor() {
    this.jobTitles = ['Software Engineer', 'Database Developer', 'Quality Engineer', 'UI Developer', 'Trainer'];
    this.skills = ['Angular', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
    this.companyNames = ['Apple', 'Google', 'Microsoft'];
  }

  public getJobTitles(): Array<string> {
    return this.jobTitles;
  }

  public getSkills(): Array<string> {
    return this.skills;
  }

  public getCompanyNames(): Array<string> {
    return this.companyNames;
  }

}
