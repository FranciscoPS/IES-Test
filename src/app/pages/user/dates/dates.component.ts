import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UNITS_CATALOG } from 'src/app/shared/constants/dates';
import { ICatalog } from 'src/app/shared/models/dates.model';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
  providers: [DatePipe],
})
export class DatesComponent implements OnInit {
  public quantity: number = 0;
  public units: string = '';
  public dateSelected: Date = new Date();
  public result: Date = new Date();

  public unitsCatalog: ICatalog[] = UNITS_CATALOG;

  constructor() {}

  get getResult(): string {
    return this.result.toDateString();
  }

  ngOnInit() {}

  public calculateDate(): void {
    switch (this.units) {
      case 'day':
        this.result = new Date(this.addDays());
        break;

      case 'month':
        this.result = new Date(this.addMonths());
        break;

      case 'year':
        this.result = new Date(this.addYears());
        break;
    }
  }

  private addDays(): number {
    let res = new Date();

    return res.setDate(this.dateSelected.getDate() + this.quantity);
  }

  private addMonths(): number {
    let res = new Date();

    return res.setMonth(this.dateSelected.getMonth() + this.quantity);
  }

  private addYears(): number {
    let res = new Date();

    return res.setFullYear(this.dateSelected.getFullYear() + this.quantity);
  }
}
