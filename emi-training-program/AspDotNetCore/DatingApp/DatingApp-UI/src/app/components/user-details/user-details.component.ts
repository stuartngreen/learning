import { Component, OnInit } from '@angular/core';
import { IMember } from '../../models/imember';
import { MemberService } from '../../services/member.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public member: IMember;

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getMember();

    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
  }

  public getMember(): void {
    this.memberService.getMemberById(+this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.member = response;
      this.galleryImages = this.getImages();
    });
  }

  public getImages(): NgxGalleryImage[] {
    const imageUrl = [];
    for (const photo of this.member.photos) {
      imageUrl.push({
        small: photo.url,
        medium: photo.url
      });
    }
    return imageUrl;
  }

}
