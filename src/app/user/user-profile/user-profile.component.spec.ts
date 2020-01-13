import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserProfileComponent} from './user-profile.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
  });
});
