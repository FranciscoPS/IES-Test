import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ILogin, ILoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  constructor(private readonly _http: HttpClient) {}

  public login(data: ILogin): Observable<ILoginResponse> {
    return this._http.post<any>(`${this.baseUrl}/login`, data);
  }

  public checkLogin(): boolean {
    const sessionLogged = sessionStorage.getItem('logged');

    return sessionLogged === 'true';
  }
}
