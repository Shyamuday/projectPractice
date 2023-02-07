import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './services/logging.service';
import { ErrorService } from './services/error.service';
import { NotificationService } from './services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  message = '';
  stackTrace = '';
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const loggingService = this.injector.get(LoggingService);
    const notificationService = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {
      // Server Error
      this.message = errorService.getServerMessage(error);
      notificationService.showError(this.message);
    } else {
      // Client Error
      this.message = errorService.getClientMessage(error);
      notificationService.showError(this.message);
    }

    // Always log errors
    loggingService.logError(this.message, this.stackTrace);

    console.error(error);
  }
}
