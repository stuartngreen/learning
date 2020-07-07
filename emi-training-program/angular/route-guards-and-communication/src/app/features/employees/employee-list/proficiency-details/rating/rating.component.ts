import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, AfterContentChecked {

  public rating: number;
  public maxRating = 5;
  public message: string;

  // TODO: This could be a messages service
  private messages = [
    {
      rating: 1,
      message: 'A rating of 1 star means the employee performs poorly in all aspects of the role and should be placed under review.'
    },
    {
      rating: 2,
      message: 'A rating of 2 stars means the employee performs poorly in most aspects of the role and may require training and motivation.'
    },
    {
      rating: 3,
      // tslint:disable-next-line:max-line-length
      message: `A rating of 3 stars means the employee performs adequately in most aspects of the role but may require additional training and motivation.`
    },
    {
      rating: 4,
      message: 'A rating of 4 stars means the employee performs very well in all aspects of the role.'
    },
    {
      rating: 5,
      message: 'A rating of 5 stars means the employee performs excellently in all aspects of the role and often overachieves.'
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterContentChecked(): void {
    this.message = this.messages.find(item => item.rating === this.rating).message;
  }

}
