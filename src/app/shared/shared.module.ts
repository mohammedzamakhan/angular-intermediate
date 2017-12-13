import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserComponent } from '../user/user.component';
import { ReposComponent } from './repos/repos.component';
import { SlackService } from './slack.service';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,

    UserComponent,
    ReposComponent,
  ],
  providers: [SlackService, UserService],
  declarations: [
    UserComponent,
    ReposComponent
]
})
export class SharedModule { }
