import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../entities/role.entitie';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private resourceURL = `${SERVER_URL}/roles`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Role[]>> {
    return this.http.get<Role[]>(this.resourceURL, {observe: 'response'});
  }

  public save(role: Role): Observable<HttpResponse<Role>> {
    return this.http.post<Role>(this.resourceURL, role, {observe: 'response'});
  }

  public update(role: Role): Observable<HttpResponse<Role>> {
    return this.http.put<Role>(this.resourceURL, role, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Role>> {
    return this.http.get<Role>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Role>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
