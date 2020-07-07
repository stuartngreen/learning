import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthGuard } from 'src/app/features/auth/auth.guard';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authenticatedUser: User;
  public authError: boolean;
  public username: string;
  public password: string;

  constructor(private authService: AuthService, private authGuard: AuthGuard) { }

  public ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
  }

  public onLogin(): void {

    this.authService.authenticateUser(this.username, this.password);

    if (this.authenticatedUser) {
      this.authGuard.redirectToUrl();
    } else {
      this.authError = true;
    }

  }

}
