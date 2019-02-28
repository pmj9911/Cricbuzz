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
var HomeCompComponent = /** @class */ (function () {
    function HomeCompComponent(http) {
        this.http = http;
        this.SAHeading = "https://www.cricbuzz.com/cricket-news/106746/batting-adversities-root-cause-of-south-africa-cricket-teams-durban-shock";
        this.subtitle1 = "https://www.cricbuzz.com/cricket-news/106724/india-cricket-failure-gets-martin-guptill-to-rectify-errors-new-zealand-cricket";
        this.subtitle2 = "https://www.cricbuzz.com/cricket-news/106748/tamim-iqbal-bangladesh-cricket-team-new-zealand-tour-2019";
        this.subtitle3 = "https://www.cricbuzz.com/cricket-news/106750/excited-adil-rashid-awaits-gayle-challenge";
        this.articleimage1 = "assets/images/faf.jpeg";
    }
    HomeCompComponent.prototype.ngOnInit = function () { };
    HomeCompComponent = __decorate([
        Component({
            selector: 'app-home-comp',
            templateUrl: './home-comp.component.html',
            styleUrls: ['./home-comp.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HomeCompComponent);
    return HomeCompComponent;
}());
export { HomeCompComponent };
//# sourceMappingURL=home-comp.component.js.map