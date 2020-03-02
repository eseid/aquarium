import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalActivitiesComponent } from './personal-activities.component';

describe('PersonalActivitiesComponent', () => {
  let component: PersonalActivitiesComponent;
  let fixture: ComponentFixture<PersonalActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
