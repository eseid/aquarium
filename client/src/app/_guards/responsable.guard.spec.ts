import { TestBed, async, inject } from '@angular/core/testing';

import { ResponsableGuard } from './responsable.guard';

describe('ResponsableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponsableGuard]
    });
  });

  it('should ...', inject([ResponsableGuard], (guard: ResponsableGuard) => {
    expect(guard).toBeTruthy();
  }));
});
