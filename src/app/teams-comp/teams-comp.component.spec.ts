import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCompComponent } from './teams-comp.component';

describe('TeamsCompComponent', () => {
  let component: TeamsCompComponent;
  let fixture: ComponentFixture<TeamsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
