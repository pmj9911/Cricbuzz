import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScoresCompComponent } from './live-scores-comp.component';

describe('LiveScoresCompComponent', () => {
  let component: LiveScoresCompComponent;
  let fixture: ComponentFixture<LiveScoresCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveScoresCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveScoresCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
