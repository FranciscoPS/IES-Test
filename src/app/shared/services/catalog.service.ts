import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CATALOG_MOCK } from '../constants/mocks/maritalStatusCatalog';
import { IMaritalStatusCatalog } from '../models/catalogs.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor() {}

  public getMaritalStatusCatalog(): Observable<IMaritalStatusCatalog[]> {
    return of(CATALOG_MOCK);
  }
}
