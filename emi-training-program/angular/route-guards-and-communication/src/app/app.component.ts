import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public loading: boolean;

  public onLoading(loading: boolean) {
    this.loading = loading;
  }

}
