import { TestBed } from '@angular/core/testing';

import { KgSampleLibraryService } from './kg-sample-library.service';

describe('KgSampleLibraryService', () => {
  let service: KgSampleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KgSampleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
