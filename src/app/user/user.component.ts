import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
