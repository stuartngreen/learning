import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IUser } from '../models/iuser';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public baseUrl = environment.apiUrl;

  private currentUserValue = new ReplaySubject<IUser>(1);

  public currentUser = this.currentUserValue.asObservable();

  constructor(private httpClient: HttpClient) { }

  public login(model: IUser): any {
    return this.httpClient.post(this.baseUrl + 'account/login', model).pipe(map((response: IUser) => {
      const user = response;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserValue.next(user);
      }
      return user;
    }));
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.currentUserValue.next(null);
  }

  public setCurrentUser(user: IUser): void {
    this.currentUserValue.next(user);
  }

  public register(model: any): any {
    return this.httpClient.post(this.baseUrl + 'account/register', model).pipe(map((user: IUser) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserValue.next(user);
      }
    }));
  }
}
