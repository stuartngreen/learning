import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Output()
  public loading = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  private checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading.emit(true);
    } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.loading.emit(false);
    }
  }

  public ngOnInit(): void {
  }

}
