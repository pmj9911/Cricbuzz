import { async, TestBed } from '@angular/core/testing';
import { SurveyAnswersCompComponent } from './survey-answers-comp.component';
describe('SurveyAnswersCompComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SurveyAnswersCompComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SurveyAnswersCompComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=survey-answers-comp.component.spec.js.map