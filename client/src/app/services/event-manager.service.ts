import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { share, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  observable: Observable<any>;
  observer: Observer<any>;

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }


  broadcast(event) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }


  subscribe(eventName, callback) {
    const subscriber: Subscription = this.observable.pipe(filter((event) => {
      return event.name === eventName;
    })).subscribe(callback);
    return subscriber;
  }


  destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
