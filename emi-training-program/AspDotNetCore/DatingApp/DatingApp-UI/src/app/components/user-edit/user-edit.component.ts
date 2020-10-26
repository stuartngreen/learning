import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from '../../services/member.service';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { IMember } from '../../models/imember';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @ViewChild('editForm') public editForm: NgForm;
  public member: IMember;
  public user: IUser;
  @HostListener('window:beforeunload', ['$event'])  public unloadNotification($event: any): any {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private accountService: AccountService, private memberService: MemberService,
              private toastrService: ToastrService) { }

  public ngOnInit(): void {
    this.accountService.currentUser.subscribe((response) => {
      this.user = response;

    });
    this.loadMembers();
  }

  public loadMembers(): void {
    this.memberService.getMemberById(this.user.id).subscribe((response) => {
      this.member = response;
    });
  }
  public editUser(): void {

      this.memberService.updateUser(this.member).subscribe((response) => {
        this.toastrService.success('your data has been successfully updated!!');
        this.editForm.reset(this.member);
      });

      console.log(this.member);
  }
}
