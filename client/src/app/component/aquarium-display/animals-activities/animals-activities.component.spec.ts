import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsActivitiesComponent } from './animals-activities.component';

describe('AnimalsActivitiesComponent', () => {
  let component: AnimalsActivitiesComponent;
  let fixture: ComponentFixture<AnimalsActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
