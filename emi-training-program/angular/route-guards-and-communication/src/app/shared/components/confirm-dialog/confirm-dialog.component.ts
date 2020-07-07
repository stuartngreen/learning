import { Component } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  public showDialog: boolean;

  constructor(private dialogService: DialogService) {
    this.dialogService.showDialog.subscribe((showDialog: boolean) => {
      this.showDialog = showDialog;
    });
  }

  public confirm(choice: boolean): void {
    this.dialogService.hide();
    this.dialogService.confirm(choice);
  }

}
