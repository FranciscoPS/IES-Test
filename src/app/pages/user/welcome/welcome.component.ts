import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputTextDialogComponent } from 'src/app/shared/components/Dialogs/inputTextDialog/inputTextDialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public name: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InputTextDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.name = result;
    });
  }
}
