import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/merge';


import { map, distinctUntilChanged, filter } from 'rxjs/operators';
import { startWith } from 'rxjs/operators/startWith';
import { scan } from 'rxjs/operators/scan';
import { mapTo } from 'rxjs/operators/mapTo';
import { UserService } from './shared/user.service';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn = this._userService.logIn$;
  loginModelOpen: boolean;
  title = 'gs';
  version = '2.2.1';
  time;

  click$ = new Subject();

  constructor(private _userService: UserService) {
    Observable.merge(
      Observable.interval(1000).pipe(mapTo('seconds')),
      this.click$.pipe(mapTo('minutes'))
    )
      .pipe(
        startWith(<any>new Date()),
        scan((acc: Date, curr: string) => {
          const result: Date = new Date(acc.getTime());
          if (curr === 'seconds') {
            result.setSeconds(acc.getSeconds() + 1);
          }

          if (curr === 'minutes') {
            result.setMinutes(acc.getMinutes() + 1);
          }
          return result;
        })
      )
      .subscribe(val => this.time = val);
  }

  openLoginModel() {
    if (!this.loggedIn.getValue()) {
      this.loginModelOpen = true;
    } else {
      this._userService.logOut();
    }
  }

  login(username, password) {
    console.log(username.value, password.value);
    this._userService.logIn(username.value, password.value).subscribe(loggedIn => {
      if (loggedIn) {
        this.loginModelOpen = false;
      }
    });
  }

  closeLoginModel() {
    this.loginModelOpen = false;
  }
}
