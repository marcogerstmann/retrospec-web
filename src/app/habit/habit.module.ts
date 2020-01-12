import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HabitRoutingModule} from './habit-routing.module';
import {HabitListComponent} from './habit-list/habit-list.component';

@NgModule({
  declarations: [HabitListComponent],
  imports: [
    CommonModule,
    HabitRoutingModule
  ]
})
export class HabitModule {
}
