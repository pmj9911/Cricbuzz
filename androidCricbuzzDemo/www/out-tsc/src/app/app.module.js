var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LiveScoresCompComponent } from './live-scores-comp/live-scores-comp.component';
import { ScheduleCompComponent } from './schedule-comp/schedule-comp.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { RouterModule } from '@angular/router';
import { SeriesCompComponent } from './series-comp/series-comp.component';
import { TeamsCompComponent } from './teams-comp/teams-comp.component';
import { VideosCompComponent } from './videos-comp/videos-comp.component';
import { RankingsCompComponent } from './rankings-comp/rankings-comp.component';
import { CardScoreCompComponent } from './card-score-comp/card-score-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { SafePipe } from './videos-comp/videos-comp.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { SurveyAnswersCompComponent } from './survey-answers-comp/survey-answers-comp.component';
var appRoutes = [
    { path: 'Home', component: HomeCompComponent },
    { path: 'Live Scores', component: LiveScoresCompComponent },
    { path: 'More', component: ScheduleCompComponent },
    { path: 'Survey', component: NewsCompComponent },
    { path: 'Rankings', component: RankingsCompComponent },
    { path: 'Schedule', component: ScheduleCompComponent },
    { path: 'Series', component: SeriesCompComponent },
    { path: 'SurveyAnswers', component: SurveyAnswersCompComponent },
    { path: 'Teams', component: TeamsCompComponent },
    { path: 'Videos', component: VideosCompComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LiveScoresCompComponent,
                ScheduleCompComponent,
                NewsCompComponent,
                HomeCompComponent,
                RankingsCompComponent,
                SeriesCompComponent,
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
                BrowserModule, RouterModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                AngularFireDatabaseModule,
                AngularFireAuthModule,
                [RouterModule.forRoot(appRoutes, { enableTracing: true })
                ],
                HttpClientModule,
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map