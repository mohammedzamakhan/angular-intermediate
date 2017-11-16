import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  user: any = {};

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.searchUser(environment.user);
  }
  searchUser(username) {
    this.githubService.getUser(username)
    .switchMap((user: any) =>
      this.githubService.getRepos(user.login).map(repos => ({
        ...user,
        repos
      }))
    )
    .subscribe(user => this.user = user);
  }

}
