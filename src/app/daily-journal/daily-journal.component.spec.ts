import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DailyJournalComponent} from './daily-journal.component';

describe('DailyJournalComponent', () => {
  let component: DailyJournalComponent;
  let fixture: ComponentFixture<DailyJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DailyJournalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
