import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Animal} from './animal'

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'applications/json'})
};

@Injectable()
export class AnimalService {

  constructor(private http:HttpClient) { }

  getAnimals() : Observable<Array<Animal>>{
    return this.http.get<Array<Animal>>('server/api/animals');
  }
}
