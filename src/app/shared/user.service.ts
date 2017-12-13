import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  public logIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  logIn(username, password): any {
    if (username && password) {
      this.logIn$.next(true);
      return Observable.of(true);
    } else {
      this.logIn$.next(false);
      return Observable.of(false);
    }
  }

  logOut(): any {
    this.logIn$.next(false);
  }
}
