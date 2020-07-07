import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<Array<User>> {

  constructor(private userService: UserService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<User>> | Observable<never> {
    return this.userService.getUsers().pipe(delay(1500)); // artificial delay for testing
  }

}
