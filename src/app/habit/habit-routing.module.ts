import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HabitListComponent} from './habit-list/habit-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'habit-list'},
  {path: 'habit-list', component: HabitListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitRoutingModule {
}
