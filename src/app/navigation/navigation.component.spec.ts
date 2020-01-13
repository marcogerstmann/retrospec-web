import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NavigationComponent} from './navigation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });
});
