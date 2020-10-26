import { Component, OnInit } from '@angular/core';
import { IMember } from '../../models/imember';
import { MemberService } from '../../services/member.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public members: Observable<Array<IMember>>;

  constructor(private memberService: MemberService) { }

  public ngOnInit(): void {
    this.members = this.memberService.getMembers();
    //this.getMembers();
  }

  // public getMembers(): void {
  //   this.memberService.getMembers().subscribe(response => {
  //     this.members = response;
  //   });
  // }

}
