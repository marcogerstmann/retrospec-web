import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Habit} from '../models/habit.model';
import {HttpClientService} from '../../services/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(private http: HttpClientService) {
  }

  public findAll(): Observable<Habit[]> {
    return this.http.get('v1/habits');
  }
}
