import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private dataPath = '/assets/users.json';

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.dataPath);
  }

}
