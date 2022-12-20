import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

interface IMenu {
  icon: string;
  description: string;
  path: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public isOpen:boolean = true;

  public menu: IMenu[] = [
    {
      icon: 'home',
      description: 'Welcome',
      path: '/welcome',
    },
    {
      icon: 'calculate',
      description: 'Conversions',
      path: '/conversions',
    },
    {
      icon: 'insert_invitation',
      description: 'Dates',
      path: '/dates',
    },
    {
      icon: 'pending_actions',
      description: 'Form',
      path: '/form',
    },
  ];

  constructor(private _router: Router) {}

  public navigate(path: string): void {
    this._router.navigate(['/user' + path]);
  }
}
