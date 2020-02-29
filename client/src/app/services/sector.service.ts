import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sector} from '../entities/sector.entitie';
import {Pool} from '../entities/pool.entitie';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private resourceURL = `${SERVER_URL}/sectors`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Sector[]>> {
    return this.http.get<Sector[]>(this.resourceURL, {observe: 'response'});
  }

  public findAllPoolsBySectorId(sectorId: number): Observable<HttpResponse<Pool[]>> {
    return this.http.get<Pool[]>(`${this.resourceURL}/pools/${sectorId}`, {observe: 'response'});
  }

  public save(sector: Sector): Observable<HttpResponse<Sector>> {
    return this.http.post<Sector>(this.resourceURL, sector, {observe: 'response'});
  }

  public update(sector: Sector): Observable<HttpResponse<Sector>> {
    return this.http.put<Sector>(this.resourceURL, sector, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Sector>> {
    return this.http.get<Sector>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Sector>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
