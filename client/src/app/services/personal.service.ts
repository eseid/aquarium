import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personal} from '../entities/personal.entitie';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private resourceURL = `${SERVER_URL}/personals`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Personal[]>> {
    return this.http.get<Personal[]>(this.resourceURL, {observe: 'response'});
  }

  public save(pool: Personal): Observable<HttpResponse<Personal>> {
    return this.http.post<Personal>(this.resourceURL, pool, {observe: 'response'});
  }

  public update(pool: Personal): Observable<HttpResponse<Personal>> {
    return this.http.put<Personal>(this.resourceURL, pool, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Personal>> {
    return this.http.get<Personal>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Personal>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
