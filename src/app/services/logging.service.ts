import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private config: ConfigService) {
  }

  public debug(message: string, data?: any) {
    this.sendLog(message, 'DEBUG', data);
  }

  public info(message: string, data?: any) {
    this.sendLog(message, 'INFO', data);
  }

  public warning(message: string, data?: any) {
    this.sendLog(message, 'WARN', data);
  }

  public error(message: string, data?: any) {
    this.sendLog(message, 'ERROR', data);
  }

  public fatal(message: string, data?: any) {
    this.sendLog(message, 'FATAL', data);
  }

  private sendLog(message: string, level: string, data?: any) {
    if (this.config.env === 'DEV' || level === 'DEBUG') {
      const severity = (level === 'FATAL') ? 'error' : level.toLowerCase();
      const stackTrace = data && data.environment || '';
      console[severity](message, stackTrace);
    } else {
      // TODO: Alternative logging for other environments than local machine
    }
  }
}
