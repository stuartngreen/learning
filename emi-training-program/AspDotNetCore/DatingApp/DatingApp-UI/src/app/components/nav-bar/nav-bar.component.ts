import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService, private toastrService: ToastrService, private router: Router) { }

  public ngOnInit(): void {
  }

  public login(): void {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('users');
    }, error => {
      console.log(error);
      this.toastrService.error(error.error);
    });
  }

  public logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
