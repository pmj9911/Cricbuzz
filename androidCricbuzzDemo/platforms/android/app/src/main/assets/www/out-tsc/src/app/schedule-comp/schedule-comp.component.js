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
var ScheduleCompComponent = /** @class */ (function () {
    function ScheduleCompComponent(http) {
        this.http = http;
    }
    ScheduleCompComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://cricapi.com/api/matchCalendar?apikey=yVPEhpG31SU3LasIQ7WwT82ZhR53')
            .subscribe(function (result) {
            _this.apiData = result;
            console.log(result);
        }, function (error) { return console.log("error encountered"); });
    };
    ScheduleCompComponent = __decorate([
        Component({
            selector: 'app-schedule-comp',
            templateUrl: './schedule-comp.component.html',
            styleUrls: ['./schedule-comp.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ScheduleCompComponent);
    return ScheduleCompComponent;
}());
export { ScheduleCompComponent };
//# sourceMappingURL=schedule-comp.component.js.map