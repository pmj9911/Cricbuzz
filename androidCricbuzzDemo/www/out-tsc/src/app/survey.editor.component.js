var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyEditor from "surveyjs-editor";
import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";
widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);
var CkEditor_ModalEditor = {
    afterRender: function (modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function () {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function (modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
SurveyEditor.SurveyPropertyModalEditor.registerCustomWidget("html", CkEditor_ModalEditor);
var SurveyEditorComponent = /** @class */ (function () {
    function SurveyEditorComponent() {
        var _this = this;
        this.surveySaved = new EventEmitter();
        this.saveMySurvey = function () {
            console.log(JSON.stringify(_this.editor.text));
            _this.surveySaved.emit(JSON.parse(_this.editor.text));
        };
    }
    SurveyEditorComponent.prototype.ngOnInit = function () {
        SurveyKo.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
        SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
        var editorOptions = { showEmbededSurveyTab: true, generateValidJSON: true };
        this.editor = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
        this.editor.text = JSON.stringify(this.json);
        this.editor.saveSurveyFunc = this.saveMySurvey;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SurveyEditorComponent.prototype, "json", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SurveyEditorComponent.prototype, "surveySaved", void 0);
    SurveyEditorComponent = __decorate([
        Component({
            selector: "survey-editor",
            template: "<div id=\"surveyEditorContainer\"></div>"
        })
    ], SurveyEditorComponent);
    return SurveyEditorComponent;
}());
export { SurveyEditorComponent };
//# sourceMappingURL=survey.editor.component.js.map