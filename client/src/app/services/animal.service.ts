import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from '../entities/animal.entitie';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private resourceURL = `${SERVER_URL}/animals`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Animal[]>> {
    return this.http.get<Animal[]>(this.resourceURL, {observe: 'response'});
  }

  public save(animal: Animal): Observable<HttpResponse<Animal>> {
    return this.http.post<Animal>(this.resourceURL, animal, {observe: 'response'});
  }

  public update(animal: Animal): Observable<HttpResponse<Animal>> {
    return this.http.put<Animal>(this.resourceURL, animal, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Animal>> {
    return this.http.get<Animal>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<Animal>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
