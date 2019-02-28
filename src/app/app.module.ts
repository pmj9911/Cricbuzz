import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiveScoresCompComponent } from './live-scores-comp/live-scores-comp.component';
import { ScheduleCompComponent } from './schedule-comp/schedule-comp.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

import { RouterModule,Routes } from '@angular/router';

import { TeamsCompComponent } from './teams-comp/teams-comp.component';
import { VideosCompComponent } from './videos-comp/videos-comp.component';
import { RankingsCompComponent } from './rankings-comp/rankings-comp.component';
import { CardScoreCompComponent } from './card-score-comp/card-score-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import {HttpClientModule} from'@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { SafePipe} from './videos-comp/videos-comp.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { SurveyAnswersCompComponent } from './survey-answers-comp/survey-answers-comp.component';

const appRoutes: Routes  = [
  { path:'Home', component: HomeCompComponent},
  { path:'Live Scores', component: LiveScoresCompComponent },
  { path:'More', component: ScheduleCompComponent },
  { path:'Q and A', component: NewsCompComponent },
  { path:'Rankings', component: RankingsCompComponent },
  { path:'Schedule', component: ScheduleCompComponent },
  { path:'SurveyAnswers', component: SurveyAnswersCompComponent },
  { path:'Teams', component: TeamsCompComponent },
  { path:'Videos', component: VideosCompComponent },
  
  { path:'', redirectTo: 'Home', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LiveScoresCompComponent,
    ScheduleCompComponent,
    NewsCompComponent,
    HomeCompComponent,
    RankingsCompComponent,
    TeamsCompComponent,
    VideosCompComponent,
    CardScoreCompComponent,
    FooterCompComponent,
    SafePipe,
    SurveyComponent,
    SurveyEditorComponent,
    SurveyAnswersCompComponent,
  ],
  imports: [
    BrowserModule,RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    [ RouterModule.forRoot( appRoutes,
      { enableTracing: true })
    ],
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
