import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCompComponent } from './schedule-comp.component';

describe('ScheduleCompComponent', () => {
  let component: ScheduleCompComponent;
  let fixture: ComponentFixture<ScheduleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
