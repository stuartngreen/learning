import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  private adminRoutes = ['/users'];
  private authenticatedUser: User;
  private redirectUrl: string;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  public canLoad(route: Route): boolean {
    return this.checkAccess('/' + route.path);
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAccess(state.url);
  }

  private checkAccess(requestedRoute: string): boolean {

    if (this.authenticatedUser) {

      if (!this.authenticatedUser.adminRights && this.adminRoutes.some((route: string) => route === requestedRoute)) {
        this.router.navigate(['access-denied']);
        return false;
      }
      return true;

    } else {
      this.redirectUrl = requestedRoute;
      this.router.navigate(['login']);
      return false;
    }
  }

  public redirectToUrl(): void {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      this.redirectUrl = null;
    } else {
      this.router.navigate(['login']);
    }
  }

}
