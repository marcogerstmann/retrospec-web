import {TestBed} from '@angular/core/testing';
import * as HttpStatus from 'http-status-codes';
import {HttpExceptionHandlerService} from './http-exception-handler.service';
import {LoggingService} from './logging.service';
import {Mock, MockingUtil} from '../testing/mocking.util';

describe('HttpExceptionHandlerService', () => {
  let service: HttpExceptionHandlerService;
  let loggingServiceMock: Mock<LoggingService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpExceptionHandlerService,
        MockingUtil.createMockProvider(LoggingService)
      ]
    });

    service = TestBed.get(HttpExceptionHandlerService);
    loggingServiceMock = TestBed.get(LoggingService);

    spyOn(window, 'alert').and.stub();
  });

  describe('#handleError', () => {
    it('should call the logging service and alert', () => {
      service.handleError({error: {errors: []}, status: HttpStatus.UNPROCESSABLE_ENTITY} as any);
      expect(loggingServiceMock.error).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
