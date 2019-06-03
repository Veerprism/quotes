import { TestBed } from '@angular/core/testing';

import { FinalquotesService } from './finalquotes.service';

describe('FinalquotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinalquotesService = TestBed.get(FinalquotesService);
    expect(service).toBeTruthy();
  });
});
