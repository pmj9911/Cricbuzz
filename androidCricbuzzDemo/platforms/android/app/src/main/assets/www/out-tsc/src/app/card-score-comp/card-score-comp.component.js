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
var CardScoreCompComponent = /** @class */ (function () {
    function CardScoreCompComponent() {
        this.card1Link = "https://www.cricbuzz.com/live-cricket-scores/20793/nz-vs-ban-3rd-odi-bangladesh-tour-of-new-zealand-2019";
        this.card2Link = "https://www.cricbuzz.com/live-cricket-scores/21262/wi-vs-eng-2nd-odi-england-tour-of-west-indies-2019";
        this.card3Link = "https://www.cricbuzz.com/live-cricket-scores/22238/indw-vs-engw-1st-odi-icc-championship-match-england-women-tour-of-india-2019";
        this.card4link = "https://www.cricbuzz.com/live-cricket-scores/21647/afg-vs-ire-2nd-t20i-afghanistan-v-ireland-in-india-2019";
    }
    CardScoreCompComponent.prototype.ngOnInit = function () {
    };
    CardScoreCompComponent = __decorate([
        Component({
            selector: 'app-card-score-comp',
            templateUrl: './card-score-comp.component.html',
            styleUrls: ['./card-score-comp.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CardScoreCompComponent);
    return CardScoreCompComponent;
}());
export { CardScoreCompComponent };
//# sourceMappingURL=card-score-comp.component.js.map