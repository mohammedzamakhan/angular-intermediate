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


@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  user: any = {};
  text$ = new Subject();
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    // this.searchUser(environment.user);
    this.text$
    .pipe(
      startWith(environment.user),
      debounceTime(500),
      filter((val: string) => val.length > 4),
      distinctUntilChanged(),
      switchMap((val) => this.githubService.getUser(val).switchMap((user: any) =>
          this.githubService.getRepos(user.login).map(repos => ({
            ...user,
            repos
          }))))
    )
      .subscribe(user => this.user = user);
  }
  // searchUser(username) {
  //   this.githubService.getUser(username)
  //   .switchMap((user: any) =>
  //     this.githubService.getRepos(user.login).map(repos => ({
  //       ...user,
  //       repos
  //     }))
  //   )
  //   .subscribe(user => this.user = user);
  // }

}
