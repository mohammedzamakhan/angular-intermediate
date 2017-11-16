import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { filter, flatMap,  } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { map } from 'rxjs/operators/map';
import { switchMap, } from 'rxjs/operators/switchMap';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { startWith } from 'rxjs/operators/startWith';
import { SpeechService } from '../speech.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  user: any = {};
  text$ = new Subject();
  dictateClick$ = new Subject();
  spokenKeyword$ = this.dictateClick$.switchMap(() => this.speechService.listen());
  constructor(private githubService: GithubService, private speechService: SpeechService) { }

  ngOnInit() {
    Observable.merge(
      this.text$,
      this.spokenKeyword$
    )
    .pipe(
      startWith(environment.user),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) => this.githubService.getUser(val).switchMap((user: any) =>
          this.githubService.getRepos(user.login).map(repos => ({
            ...user,
            repos
          }))))
    )
      .subscribe(user => this.user = user);
  }
}
