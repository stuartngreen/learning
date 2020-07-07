import { Component, ContentChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { Employee } from 'src/app/core/models/employee.model';

@Component({
  selector: 'app-proficiency-details',
  templateUrl: './proficiency-details.component.html',
  styleUrls: ['./proficiency-details.component.scss']
})
export class ProficiencyDetailsComponent implements OnChanges {

  @ContentChild(RatingComponent, { static: true })
  public ratingComponent: RatingComponent;

  @Input()
  public selectedEmployee: Employee;

  @Output()
  public clickClose = new EventEmitter<void>();

  constructor() { }

  public ngOnChanges(): void {
    this.ratingComponent.rating = this.selectedEmployee.rating;
  }

  public onClickClose(): void {
    this.clickClose.emit();
  }

}
