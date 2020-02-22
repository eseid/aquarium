import { Injectable } from '@angular/core';
import {SERVER_URL} from '../utils/app.const';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../entities/activity.entitie';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private resourceURL = `${SERVER_URL}/activities`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<HttpResponse<Activity[]>> {
    return this.http.get<Activity[]>(this.resourceURL, {observe: 'response'});
  }

  public save(activity: Activity): Observable<HttpResponse<Activity>> {
    return this.http.post<Activity>(this.resourceURL, activity, {observe: 'response'});
  }

  public update(activity: Activity): Observable<HttpResponse<Activity>> {
    return this.http.put<Activity>(this.resourceURL, activity, {observe: 'response'});
  }

  public findById(id: number): Observable<HttpResponse<Activity>> {
    return this.http.get<Activity>(`${this.resourceURL}/${id}`, {observe: 'response'});
  }

  public deleteById(id: number): Observable<HttpResponse<any>> {
    console.log('delete $$$$');
    console.log(`${this.resourceURL}/${id}`);

    return this.http.delete(`${this.resourceURL}/${id}`, {observe: 'response'});
  }
}
