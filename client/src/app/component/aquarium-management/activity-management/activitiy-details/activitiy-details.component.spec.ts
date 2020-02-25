import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiyDetailsComponent } from './activitiy-details.component';

describe('ActivitiyDetailsComponent', () => {
  let component: ActivitiyDetailsComponent;
  let fixture: ComponentFixture<ActivitiyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
