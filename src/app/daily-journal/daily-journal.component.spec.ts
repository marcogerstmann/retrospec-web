import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DailyJournalComponent} from './daily-journal.component';
import {HabitListComponent} from '../habit/habit-list/habit-list.component';
import {MockingUtil} from '../testing/mocking.util';
import {HabitService} from '../habit/services/habit.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DailyJournalComponent', () => {
  let component: DailyJournalComponent;
  let fixture: ComponentFixture<DailyJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyJournalComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(DailyJournalComponent);
    component = fixture.componentInstance;
  });
});
