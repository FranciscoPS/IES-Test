import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UNITS_CATALOG } from 'src/app/shared/constants/dates';
import { ICatalog } from 'src/app/shared/models/dates.model';
import { DatesService } from 'src/app/shared/services/dates.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
  providers: [DatePipe],
})
export class DatesComponent {
  public quantity: number = 0;
  public units: string = '';
  public dateSelected: Date = new Date();
  public result: Date = new Date();

  public unitsCatalog: ICatalog[] = UNITS_CATALOG;

  constructor(private _datesServie: DatesService) {}

  get getResult(): string {
    return this.result.toDateString();
  }

  public calculateDate(): void {
    switch (this.units) {
      case 'day':
        this.result = new Date(
          this._datesServie.addDays(this.dateSelected, this.quantity)
        );
        break;

      case 'month':
        this.result = new Date(
          this._datesServie.addMonths(this.dateSelected, this.quantity)
        );
        break;

      case 'year':
        this.result = new Date(
          this._datesServie.addYears(this.dateSelected, this.quantity)
        );
        break;
    }
  }
}
