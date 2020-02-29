import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pool} from '../entities/pool.entitie';
import {Animal} from '../entities/animal.entitie';

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  private resourceURL = `${SERVER_URL}/pools`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Pool[]>> {
    return this.http.get<Pool[]>(this.resourceURL, {observe: 'response'});
  }

  public findAllAnimalsByPoolId(poolId: number): Observable<HttpResponse<Animal[]>> {
    return this.http.get<Animal[]>(`${this.resourceURL}/animals/${poolId}`, {observe: 'response'});
  }

  public save(pool: Pool): Observable<HttpResponse<Pool>> {
    return this.http.post<Pool>(this.resourceURL, pool, {observe: 'response'});
  }

  public update(pool: Pool): Observable<HttpResponse<Pool>> {
    return this.http.put<Pool>(this.resourceURL, pool, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Pool>> {
    return this.http.get<Pool>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Pool>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
