import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserSettingsComponent} from './user-settings.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserSettingsComponent', () => {
  let component: UserSettingsComponent;
  let fixture: ComponentFixture<UserSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSettingsComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(UserSettingsComponent);
    component = fixture.componentInstance;
  });
});
