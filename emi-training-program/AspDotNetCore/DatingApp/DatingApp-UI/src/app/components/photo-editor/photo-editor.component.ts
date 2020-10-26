import { Component, OnInit, Input } from '@angular/core';
import { IMember } from '../../models/imember';
import { AccountService } from '../../services/account.service';
import { MemberService } from '../../services/member.service';
import { IUser } from '../../models/iuser';
import { IPhoto } from '../../models/iphoto';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {

  @Input()
  public member: IMember;

  public user: IUser;

  constructor(private accountService: AccountService, private memberService: MemberService) {
    this.accountService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  public ngOnInit(): void {
  }

  public setMainPhoto(photo: IPhoto): void {
    this.memberService.setMainPhoto(photo.id).subscribe(() => {
      this.user.photoUrl = photo.url;
      this.member.photoUrl = photo.url;

      this.member.photos.forEach(p => {
        if (p.isMain) {
          p.isMain = false;
        }
        if (p.id === photo.id) {
          p.isMain = true;
        }
      });
    });
  }

  public deletePhoto(photoId: number): void {
    this.memberService.deletePhoto(photoId).subscribe(() => {
      this.member.photos = this.member.photos.filter(p => p.id !== photoId);
    });
  }

}
