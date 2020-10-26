import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { IUser } from './models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DatingApp-UI';

  public displayedColumns: Array<string> = ['id', 'name'];
  public users: any;

  constructor(private accountService: AccountService) {}

  public ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser(): void {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // public getUsers(): void {
  //   this.httpClient.get('https://localhost:44369/api/user').subscribe(response => {
  //     this.users = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
