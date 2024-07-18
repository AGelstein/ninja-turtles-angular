import { TestBed } from '@angular/core/testing';

import { SearchNameService } from './search-name.service';

describe('SearchNameService', () => {
  let service: SearchNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
