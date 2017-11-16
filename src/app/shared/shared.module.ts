import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { SlackService } from './slack.service';
import { ReposComponent } from './repos/repos.component';

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
  providers: [SlackService],
  declarations: [
    UserComponent,
    ReposComponent
]
})
export class SharedModule { }
