import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompComponent } from './news-comp.component';

describe('NewsCompComponent', () => {
  let component: NewsCompComponent;
  let fixture: ComponentFixture<NewsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
