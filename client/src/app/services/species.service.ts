import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Species} from '../entities/species.entitie';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  private resourceURL = `${SERVER_URL}/species`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Species[]>> {
    return this.http.get<Species[]>(this.resourceURL, {observe: 'response'});
  }

  public save(species: Species): Observable<HttpResponse<Species>> {
    return this.http.post<Species>(this.resourceURL, species, {observe: 'response'});
  }

  public update(species: Species): Observable<HttpResponse<Species>> {
    return this.http.put<Species>(this.resourceURL, species, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Species>> {
    return this.http.get<Species>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Species>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
