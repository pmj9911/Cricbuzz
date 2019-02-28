import { async, TestBed } from '@angular/core/testing';
import { LiveScoresCompComponent } from './live-scores-comp.component';
describe('LiveScoresCompComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LiveScoresCompComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LiveScoresCompComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=live-scores-comp.component.spec.js.map