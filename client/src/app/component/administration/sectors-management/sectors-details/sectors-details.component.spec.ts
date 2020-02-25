import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsDetailsComponent } from './sectors-details.component';

describe('SectorsDetailsComponent', () => {
  let component: SectorsDetailsComponent;
  let fixture: ComponentFixture<SectorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
