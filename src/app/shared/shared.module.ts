import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';
import { ReposComponent } from '../repos/repos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    FormsModule
  ],
  declarations: [
    UserComponent,
    ReposComponent
  ]
})
export class SharedModule { }
