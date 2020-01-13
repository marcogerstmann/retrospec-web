import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientService} from './http-client.service';
import {Mock, MockingUtil} from '../testing/mocking.util';
import {ConfigService} from './config.service';
import {HttpExceptionHandlerService} from './http-exception-handler.service';

describe('HttpClientService', () => {
  let service: HttpClientService;
  let httpClientMock: Mock<HttpClient>;
  let configMock: Mock<ConfigService>;
  let httpErrorServiceMock: Mock<HttpExceptionHandlerService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientService,
        MockingUtil.createMockProvider(HttpClient),
        MockingUtil.createMockProvider(ConfigService),
        MockingUtil.createMockProvider(HttpExceptionHandlerService)
      ]
    });

    service = TestBed.get(HttpClientService);
    httpClientMock = TestBed.get(HttpClient);
    configMock = TestBed.get(ConfigService);
    httpErrorServiceMock = TestBed.get(HttpExceptionHandlerService);
  });
});
