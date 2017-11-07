import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../github.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Subject } from 'rxjs/Subject';


import { filter, flatMap, startWith, debounceTime, switchMap, distinctUntilChanged, tap, map } from 'rxjs/operators';


import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  terms$ = new Subject();
  progressbaractive = true;

  user: any = {};
  searchFieldControl = new FormControl();
  constructor(private githubService: GithubService, fb: FormBuilder) {
    this.terms$
      .pipe(
        startWith(environment.user),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.progressbaractive = true),
        map(x =>  x = x.length > 0 ? x : environment.user),
        switchMap((username) => this.githubService
          .getUser(username)
          .switchMap((user: any) =>
            this.githubService.getRepos(username)
              .map((repos: any) => ({
                ...user,
                repos
              }))
          ))
      )
      .do(() => this.progressbaractive = false)
      .subscribe((user: any) => this.user = user);

  }

  ngOnInit() {
  }

}
