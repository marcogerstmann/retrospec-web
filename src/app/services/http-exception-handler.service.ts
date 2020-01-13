import {Injectable} from '@angular/core';
import * as HttpStatus from 'http-status-codes';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoggingService} from './logging.service';

interface HttpWarningDialogConfig {
  title: string;
  message: string | string[];
  reloadOnOk?: boolean;
  suppressDialog?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HttpExceptionHandlerService {

  private readonly genericWarnings: { [code: number]: HttpWarningDialogConfig } = {
    [0]: {
      title: 'Application Offline',
      message: 'Your computer appears to be offline.'
    },
    [HttpStatus.UNAUTHORIZED]: {
      title: 'Login Required',
      message: 'Please log in to continue.',
      suppressDialog: true
    },
    [HttpStatus.BAD_REQUEST]: {
      title: '400: Bad Request',
      message: 'Something went wrong. Please check the values you entered.'
    },
    [HttpStatus.FORBIDDEN]: {
      title: '403: Forbidden',
      message: 'You are not allowed to execute this action.'
    },
    [HttpStatus.NOT_FOUND]: {
      title: '404: Not Found',
      message: 'The requested resource was not found on the server.'
    },
    [HttpStatus.REQUEST_TIMEOUT]: {
      title: '408: Server Request Timeout',
      message: 'The server timed out processing the request. Please try again.'
    },
    [HttpStatus.CONFLICT]: {
      title: '409: Upgrade Necessary',
      message: 'A newer version is available. Please reload the page.',
      reloadOnOk: true
    },
    [HttpStatus.REQUEST_TOO_LONG]: {
      title: '413: Request Entity Too Large',
      message: 'File cannot be attached - must be less than 100 MB.'
    },
    [HttpStatus.UNPROCESSABLE_ENTITY]: {
      title: 'An error occurred',
      message: 'The entity could not be processed.'
    },
    [HttpStatus.INTERNAL_SERVER_ERROR]: {
      title: '500: Internal Error',
      message: 'The server encountered an error. Please try again.'
    },
    [HttpStatus.SERVICE_UNAVAILABLE]: {
      title: '503: Server Currently Under Maintenance',
      message: 'The server is currently in maintenance mode. Please try again later.'
    },
    [HttpStatus.GATEWAY_TIMEOUT]: {
      title: '504: Server Request Timeout',
      message: 'The server timed out processing the request. Please try again.'
    }
  };

  constructor(private log: LoggingService) {
  }

  /**
   * Process the HttpErrorResponse and show warning dialog
   * @param error HttpErrorResponse
   * @return Observable exception with a link to the afterClosed() of the dialog
   */
  public handleError(error: HttpErrorResponse) {
    this.log.error((error && error.message) || 'Error to handle was null or undefined');
    const config = this.getWarningDialogConfig(error);
    this.showWarning(config);
  }

  private getWarningDialogConfig(error: HttpErrorResponse): HttpWarningDialogConfig {
    let config: HttpWarningDialogConfig = this.genericWarnings[error && error.status] || this.genericWarnings[0];
    if (error && error.error && error.error.errors && error.status === HttpStatus.UNPROCESSABLE_ENTITY) {
      console.log('in the if');
      config = Object.assign({}, config);
      config.message = (error.error.errors || []).map(e => e.message);
    }
    return config;
  }

  private showWarning(config: HttpWarningDialogConfig) {
    alert(config.message);
  }
}
