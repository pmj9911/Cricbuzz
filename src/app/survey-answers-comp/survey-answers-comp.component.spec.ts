import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnswersCompComponent } from './survey-answers-comp.component';

describe('SurveyAnswersCompComponent', () => {
  let component: SurveyAnswersCompComponent;
  let fixture: ComponentFixture<SurveyAnswersCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnswersCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnswersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
