import { Injectable } from '@angular/core';
import {Animal} from '../entities/animal';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../utils/app.const';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private resourceURL = `${SERVER_URL}/animals`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Animal[]>> {
    return this.http.get<Animal[]>(this.resourceURL, {observe: 'response'});
  }
}
