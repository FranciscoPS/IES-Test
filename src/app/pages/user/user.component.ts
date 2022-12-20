import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SIDENAV_MENU } from 'src/app/shared/constants/sidenav';
import { IMenu } from 'src/app/shared/models/sidenav.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public isOpen:boolean = false;
  public menu: IMenu[] = SIDENAV_MENU;

  constructor(private _router: Router) {}

  public navigate(path: string): void {
    this._router.navigate(['/user' + path]);
  }
}
