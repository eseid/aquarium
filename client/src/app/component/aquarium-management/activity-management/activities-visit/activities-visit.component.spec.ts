import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesVisitComponent } from './activities-visit.component';

describe('ActivitiesVisitComponent', () => {
  let component: ActivitiesVisitComponent;
  let fixture: ComponentFixture<ActivitiesVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
