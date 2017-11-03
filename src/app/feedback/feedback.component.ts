import { Component, OnInit } from '@angular/core';
import { SlackService } from '../shared/slack.service';

@Component({
  selector: 'gs-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  sent: boolean;
  feedback: any;

  constructor(private slackService: SlackService) { }

  ngOnInit() {
  }

  sendFeedback() {
    this.slackService.send({
      text: this.feedback
    }).subscribe(() => this.sent = true);
  }

}
