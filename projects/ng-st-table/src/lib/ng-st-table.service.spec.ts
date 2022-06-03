import { TestBed } from '@angular/core/testing';

import { NgStTableService } from './ng-st-table.service';

describe('NgStTableService', () => {
  let service: NgStTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
