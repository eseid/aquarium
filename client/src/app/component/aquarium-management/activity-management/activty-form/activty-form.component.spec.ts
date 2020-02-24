import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivtyFormComponent } from './activty-form.component';

describe('ActivtyFormComponent', () => {
  let component: ActivtyFormComponent;
  let fixture: ComponentFixture<ActivtyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivtyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivtyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
