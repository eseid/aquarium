import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityConfirmComponent } from './delete-activity-confirm.component';

describe('DeleteActivityConfirmComponent', () => {
  let component: DeleteActivityConfirmComponent;
  let fixture: ComponentFixture<DeleteActivityConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
