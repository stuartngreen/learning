import { Component, OnInit, Input } from '@angular/core';
import { IMember } from '../../models/imember';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  public member: IMember;

  constructor() { }

  public ngOnInit(): void {
  }

}
