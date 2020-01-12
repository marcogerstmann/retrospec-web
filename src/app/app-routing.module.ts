import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DailyJournalComponent} from './daily-journal/daily-journal.component';

const routes: Routes = [
  {path: '', redirectTo: 'daily-journal', pathMatch: 'full'},
  {path: 'daily-journal', component: DailyJournalComponent},
  {path: 'habits', loadChildren: () => import('./habit/habit.module').then(mod => mod.HabitModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
