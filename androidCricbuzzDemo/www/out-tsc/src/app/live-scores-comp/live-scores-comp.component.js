var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LiveScoresCompComponent = /** @class */ (function () {
    function LiveScoresCompComponent(http) {
        this.http = http;
    }
    LiveScoresCompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://cricapi.com/api/matches?apikey=hPhA9oucE9hnpzELbgcqjO74dQg1')
            .subscribe(function (result) {
            _this.apiData = result;
            console.log(result);
        }, function (error) { return console.log("error encountered"); });
    };
    LiveScoresCompComponent = __decorate([
        Component({
            selector: 'app-live-scores-comp',
            templateUrl: './live-scores-comp.component.html',
            styleUrls: ['./live-scores-comp.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], LiveScoresCompComponent);
    return LiveScoresCompComponent;
}());
export { LiveScoresCompComponent };
//# sourceMappingURL=live-scores-comp.component.js.map