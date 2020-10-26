import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public registerToggle(): void {
    this.registerMode = !this.registerMode;
  }

  public cancelRegister(event: boolean): void {
    this.registerMode = event;
  }

}
