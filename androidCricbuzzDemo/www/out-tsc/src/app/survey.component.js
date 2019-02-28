var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import 'inputmask/dist/inputmask/phone-codes/phone.js';
widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);
Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
        this.submitSurvey = new EventEmitter();
    }
    SurveyComponent.prototype.click = function (result) {
        console.log(result);
    };
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var surveyModel = new Survey.Model(this.json);
        surveyModel.onAfterRenderQuestion.add(function (survey, options) {
            if (!options.question.popupdescription) {
                return;
            }
            // Add a button;
            var btn = document.createElement('button');
            btn.className = 'btn btn-info btn-xs';
            btn.innerHTML = 'More Info';
            var question = options.question;
            btn.onclick = function () {
                // showDescription(question);
                alert(options.question.popupdescription);
            };
            var header = options.htmlElement.querySelector('h5');
            var span = document.createElement('span');
            span.innerHTML = '  ';
            header.appendChild(span);
            header.appendChild(btn);
        });
        surveyModel.onComplete
            .add(function (result) {
            return _this.submitSurvey.emit(result.data);
        });
        Survey.SurveyNG.render('surveyElement', { model: surveyModel });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SurveyComponent.prototype, "submitSurvey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SurveyComponent.prototype, "json", void 0);
    SurveyComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'survey',
            template: "<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div></div>"
        })
    ], SurveyComponent);
    return SurveyComponent;
}());
export { SurveyComponent };
//# sourceMappingURL=survey.component.js.map