import { Component, OnInit } from '@angular/core';

// Survey.Survey.cssType = "bootstrap";
import * as Survey from 'survey-angular';
var surveyJSON = {
    pages:
    [
        {
            name:"page1",
            elements:[
                    {
                        type:"radiogroup", 
                        name:"Which is first Indian cricket tournament ?",
                        choices:["Bombay Series","Pepsi Cup","Bombay Triangular","None of these"]
                    }
            ]
        },
        {
            name:"page2",
            elements:[
                    {
                        type:"radiogroup", 
                        name:"Which of the following is first cricket club in India ?",
                        choices:["Oriental Cricket Club","Maharashtra Cricket Club","Bombay Cricket Club"]
                    }
            ]
        },
        {
            name:"page3",
            elements:[
                    {
                        type:"radiogroup", 
                        name:"Indian played first test match against ________ .",
                        choices:["Pakistan","Australia","England"]
                    }
            ]
        },  
    ]
};

function sendDataToServer(survey) {
    alert( "your answers are" +  JSON.stringify(survey.data));
}

@Component({
  selector: 'app-news-comp',
  templateUrl: './news-comp.component.html',
  styleUrls: ['./news-comp.component.css'],
  template: 
  " <div class='container'> <div id='surveyElement'> </div> </div>"
})



export class NewsCompComponent {
    ngOnInit() {
        var survey = new Survey.Model(surveyJSON);
        survey.onComplete.add(sendDataToServer);
       Survey.SurveyNG.render("surveyElement", { model: survey });
    }
}