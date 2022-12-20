import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  constructor() {}

  public addDays(date: Date, quantity: number): number {
    let res = new Date(date);

    return res.setDate(date.getDate() + quantity);
  }

  public addMonths(date: Date, quantity: number): number {
    let res = new Date(date);

    return res.setMonth(date.getMonth() + quantity);
  }

  public addYears(date: Date, quantity: number): number {
    let res = new Date(date);

    return res.setFullYear(date.getFullYear() + quantity);
  }
}
