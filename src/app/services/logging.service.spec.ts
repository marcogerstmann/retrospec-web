/* tslint:disable:no-console */
import {TestBed} from '@angular/core/testing';
import {LoggingService} from './logging.service';
import {ConfigService} from './config.service';
import {Mock, MockingUtil} from '../testing/mocking.util';

describe('LoggingService', () => {
  let service: LoggingService;
  let configServiceMock: Mock<ConfigService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggingService,
        MockingUtil.createMockProvider(ConfigService),
      ]
    });

    service = TestBed.get(LoggingService);
    configServiceMock = TestBed.get(ConfigService);

    spyOn(console, 'debug').and.stub();
    spyOn(console, 'info').and.stub();
    spyOn(console, 'warn').and.stub();
    spyOn(console, 'error').and.stub();
  });

  describe('while in a DEV environment', () => {
    beforeEach(() => {
      configServiceMock.env = 'DEV';
      service = TestBed.get(LoggingService);
    });

    it('#debug should call console.debug', () => {
      service.debug('testMessage');
      expect(console.debug).toHaveBeenCalled();
    });

    it('#info should call console.info', () => {
      service.info('testMessage');
      expect(console.info).toHaveBeenCalled();
    });

    it('#warning should call console.warn', () => {
      service.warning('testMessage');
      expect(console.warn).toHaveBeenCalled();
    });

    it('e#rror should call console.error', () => {
      service.error('testMessage');
      expect(console.error).toHaveBeenCalled();
    });

    it('#fatal should call console.fatal', () => {
      service.fatal('testMessage');
      expect(console.error).toHaveBeenCalled();
    });
  });
});
