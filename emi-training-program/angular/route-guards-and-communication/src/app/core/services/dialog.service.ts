import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  public showDialog = new BehaviorSubject<boolean>(null);

  public confirmationStatus = new Subject<boolean>();

  public show(): void {
    this.showDialog.next(true);
  }

  public hide(): void {
    this.showDialog.next(false);
  }

  public confirm(choice: boolean) {
    this.confirmationStatus.next(choice);
  }

}

// TODO: DialogService could be used for proficiency-details.component
