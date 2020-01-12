import { TestBed } from '@angular/core/testing';

import { HttpExceptionHandlerService } from './http-exception-handler.service';

describe('HttpExceptionHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpExceptionHandlerService = TestBed.get(HttpExceptionHandlerService);
    expect(service).toBeTruthy();
  });
});
