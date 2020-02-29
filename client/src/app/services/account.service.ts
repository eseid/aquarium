import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Personal} from '../entities/personal.entitie';
import {Observable} from 'rxjs';
import {LoginResponse} from '../entities/login-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private resourceUrl = `${SERVER_URL}/account`;

  constructor(private http: HttpClient) { }

  /*
  * Authentification d'un utilisateur
  */
  public login(user: Personal): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.resourceUrl}/login`, user, { observe: 'response' });
  }

  public isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem('currentUser'));
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }

  public isResponsable(): boolean {
    const loginResponse: LoginResponse = this.getCurrentUser();
    if (loginResponse) {
      loginResponse.currentUser.listOfRoles.some(item => item.roleName === 'ROLE_RESPONSIBLE');
    }
    return false;
  }

  public isEmployee(): boolean {
    const loginResponse: LoginResponse = this.getCurrentUser();
    if (loginResponse) {
      loginResponse.currentUser.listOfRoles.some(item => item.roleName === 'ROLE_EMPLOYEE');
    }
    return false;
  }

  public isAdmin(): boolean {
    const loginResponse: LoginResponse = this.getCurrentUser();
    if (loginResponse) {
      loginResponse.currentUser.listOfRoles.some(item => item.roleName === 'ROLE_ADMIN');
    }
    return false;
  }

  public getCurrentUser(): LoginResponse {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : undefined;
  }
}
