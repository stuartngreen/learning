import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private userData: Array<User>;
  private authenticatedUser = new BehaviorSubject<User>(null);

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: Array<User>) => {
      this.userData = users;
    });
  }

  public authenticateUser(username: string, password: string): void {
    this.userData.forEach((user: User) => {
      if (user.username === username && user.password === password) {
        this.login(user);
      }
    });
  }

  public login(user: User): void {
    this.authenticatedUser.next(user);
  }

  public logout(): void {
    this.authenticatedUser.next(null);
  }

  public getAuthenticatedUser(): BehaviorSubject<User> {
    return this.authenticatedUser;
  }

}
