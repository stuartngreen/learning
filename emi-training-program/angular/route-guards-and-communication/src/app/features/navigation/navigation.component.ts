import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public authenticatedUser: User;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
