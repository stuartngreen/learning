import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core/services/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeUnsavedChangesGuard implements CanDeactivate<CreateEmployeeComponent> {

  constructor(private dialogService: DialogService) { }

  public canDeactivate(component: CreateEmployeeComponent): boolean | Observable<boolean> {

    if (component.createEmployeeForm.dirty) {
      this.dialogService.show();
      return this.dialogService.confirmationStatus;
    }
    return true;

  }

}
