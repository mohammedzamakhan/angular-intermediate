import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(username) {
    return this.http
      .get(
        `${environment.apiUrl}/${username}?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
      )
      .catch(() => Observable.of({
        error: true
      }));
  }

  getRepos(username): Observable<any> {
    return this.http
      .get(
        `https://api.github.com/users/${username}/repos?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`
      )
      .catch(() => Observable.of({
        error: true,
      }));
  }

}
