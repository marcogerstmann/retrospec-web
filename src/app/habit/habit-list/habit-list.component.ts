import {Component, OnInit} from '@angular/core';
import {Habit} from '../models/habit.model';
import {HabitService} from '../services/habit.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'dt-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {

  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService) {
  }

  ngOnInit() {
    this.habits = this.habitService.findAll();
  }

}
