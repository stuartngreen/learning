import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmDialogComponent],
  exports: [
    FormsModule,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
