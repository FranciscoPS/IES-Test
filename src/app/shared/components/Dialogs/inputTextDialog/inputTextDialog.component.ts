import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inputTextDialog',
  templateUrl: './inputTextDialog.component.html',
  styleUrls: ['./inputTextDialog.component.scss'],
})
export class InputTextDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<InputTextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
