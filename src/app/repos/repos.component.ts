import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  @Input() username;
  @Input() repos;

  constructor() { }

  ngOnInit() {
  }

}
