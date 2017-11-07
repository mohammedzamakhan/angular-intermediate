import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubService } from './github.service';
import { HighlightDirective } from './highlight.directive';
import { SplitByPipe } from './split-by.pipe';
import { SlackService } from './shared/slack.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    SplitByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [GithubService, SlackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
