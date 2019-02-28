import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsCompComponent } from './rankings-comp.component';

describe('RankingsCompComponent', () => {
  let component: RankingsCompComponent;
  let fixture: ComponentFixture<RankingsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
