import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class SlackService {

constructor(private http: HttpClient) { }
send(slackObject: object) {
  const header = new HttpHeaders();
  header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  return this.http.post(environment.slackUrl, JSON.stringify(slackObject), {
    headers: header
  });
}
}

