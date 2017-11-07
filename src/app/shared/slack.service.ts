import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class SlackService {

constructor(private http: HttpClient) { }

send(slackObject: object) {
  const header = new HttpHeaders();
  header.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  return this.http.post(environment.slackWebhook, JSON.stringify(slackObject), {
    headers: header
  });
}

}
