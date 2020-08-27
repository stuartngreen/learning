import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-url-modal',
  templateUrl: './add-url-modal.component.html',
  styleUrls: ['./add-url-modal.component.scss']
})
export class AddUrlModalComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUrlModalComponent>
  ) { }

  public ngOnInit(): void {
    this.formGroup = this.buildForm();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      to: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      dateCreated: new FormControl(),
      permanentLink: new FormControl('')
    });
  }

  public onSave(): void {
    this.dialogRef.close({
      id: this.formGroup.get('id').value,
      from: this.formGroup.get('from').value,
      to: this.formGroup.get('to').value,
      dateCreated: this.formGroup.get('dateCreated').value,
      permanentLink: this.formGroup.get('permanentLink').value,
    });
    this.formGroup.reset();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
