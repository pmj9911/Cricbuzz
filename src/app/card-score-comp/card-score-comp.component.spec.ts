import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScoreCompComponent } from './card-score-comp.component';

describe('CardScoreCompComponent', () => {
  let component: CardScoreCompComponent;
  let fixture: ComponentFixture<CardScoreCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardScoreCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardScoreCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
