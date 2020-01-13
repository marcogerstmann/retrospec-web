import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HabitListComponent} from './habit-list.component';
import {HabitService} from '../services/habit.service';
import {Mock, MockingUtil} from '../../testing/mocking.util';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('HabitListComponent', () => {
  let component: HabitListComponent;
  let fixture: ComponentFixture<HabitListComponent>;

  let habitServiceMock: Mock<HabitService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HabitListComponent
      ],
      providers: [
        MockingUtil.createMockProvider(HabitService)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    habitServiceMock = TestBed.get(HabitService);

    fixture = TestBed.createComponent(HabitListComponent);
    component = fixture.componentInstance;
  });

  it('#ngOnInit should get all habits from via the service', () => {
    component.ngOnInit();
    expect(habitServiceMock.findAll).toHaveBeenCalled();
  });
});
