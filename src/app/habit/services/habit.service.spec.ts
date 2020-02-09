import {TestBed} from '@angular/core/testing';
import {HabitService} from './habit.service';
import {Mock, MockingUtil} from '../../testing/mocking.util';
import {HttpClientService} from '../../services/http-client.service';

describe('HabitService', () => {
  let service: HabitService;
  let httpClientServiceMock: Mock<HttpClientService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HabitService,
        MockingUtil.createMockProvider(HttpClientService)
      ]
    });

    service = TestBed.inject(HabitService);
    httpClientServiceMock = TestBed.inject(HttpClientService);
  });

  it('#findAll should call the correct endpoint', () => {
    service.findAll();
    expect(httpClientServiceMock.get).toHaveBeenCalledWith('v1/habits');
  });
});
