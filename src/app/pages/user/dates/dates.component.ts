import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent implements OnInit {
  public date: string = '';
  public foods: any[] = [
    { viewValue: 'Days', value: 'day' },
    { viewValue: 'Months', value: 'month' },
    { viewValue: 'Years', value: 'year' },
  ];

  constructor() {}

  ngOnInit() {}

  public calculateDate() {
    console.log(this.date);
  }
}
