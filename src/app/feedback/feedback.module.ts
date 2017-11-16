import { NgModule } from '@angular/core';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FeedbackRoutingModule
  ],
  declarations: [FeedbackComponent]
})
export class FeedbackModule { }
