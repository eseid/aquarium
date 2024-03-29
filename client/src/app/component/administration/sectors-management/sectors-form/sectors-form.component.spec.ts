import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsFormComponent } from './sectors-form.component';

describe('SectorsFormComponent', () => {
  let component: SectorsFormComponent;
  let fixture: ComponentFixture<SectorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
