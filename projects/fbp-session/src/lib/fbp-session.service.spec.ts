import { TestBed } from '@angular/core/testing';

import { FbpSessionService } from './fbp-session.service';

describe('FbpSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbpSessionService = TestBed.get(FbpSessionService);
    expect(service).toBeTruthy();
  });
});
