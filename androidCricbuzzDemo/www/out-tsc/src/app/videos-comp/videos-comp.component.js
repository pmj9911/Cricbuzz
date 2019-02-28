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
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var VideosCompComponent = /** @class */ (function () {
    function VideosCompComponent(http) {
        this.http = http;
        this.videosData = [
            {
                link: "https://www.youtube.com/embed/oXdIlFbyfW8", desc: "India vs Australia T20I Series: Stats Preview",
            },
            {
                link: "https://www.youtube.com/embed/5mFve__eur8", desc: "Stranger XI S1E3: Who's the G.O.A.T in ODIs - Tendulkar or Kohli?",
            },
            {
                link: "https://www.youtube.com/embed/wRUM2kUqwVk", desc: "Stranger XI S1E2: Should Indian players skip some part of IPL ahead of 2019 WC?",
            },
            {
                link: "https://www.youtube.com/embed/glsk-Xf0XCA", desc: "Cricbuzz LIVE: IND vs AUS, 2nd T20I, Pre-match show",
            },
            {
                link: "https://www.youtube.com/embed/nGbCRCzdQag", desc: "Hazratullah Zazai 162 Run Against Ireland | 2nd T20 |Afghanistan vs Ireland in India 2019",
            },
            {
                link: "https://www.youtube.com/embed/JHtgA-Im-Do", desc: "Stranger XI S1E4: Are T20s a threat to Test cricket?JHtgA-Im-Do",
            },
        ];
    }
    VideosCompComponent.prototype.ngOnInit = function () { };
    VideosCompComponent = __decorate([
        Component({
            selector: 'app-videos-comp',
            templateUrl: './videos-comp.component.html',
            styleUrls: ['./videos-comp.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], VideosCompComponent);
    return VideosCompComponent;
}());
export { VideosCompComponent };
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (link) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    };
    SafePipe = __decorate([
        Pipe({ name: 'safe' }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], SafePipe);
    return SafePipe;
}());
export { SafePipe };
//# sourceMappingURL=videos-comp.component.js.map