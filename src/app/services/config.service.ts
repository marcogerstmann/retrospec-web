import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public production: boolean;
  public env: string;
  public apiUrl: string;

  constructor() {
    Object.assign(this, environment);
  }
}
