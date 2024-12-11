import { TestBed } from '@angular/core/testing';

import { DocumentRefService } from './document-ref.service';

describe('DocumentRefService', () => {
  let service: DocumentRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
