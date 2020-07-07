import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: Array<User>;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.users = this.route.snapshot.data.userData;
  }

}
