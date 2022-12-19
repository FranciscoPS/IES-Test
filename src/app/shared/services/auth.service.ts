import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  constructor(private readonly _http: HttpClient) {}

  public login(data: any): Observable<any> {
    console.log(data)
    return this._http.post<any>(`${this.baseUrl}/login`, data);
  }
}
