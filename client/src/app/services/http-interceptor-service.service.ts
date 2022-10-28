import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.loginService.isUserLoggedIn() &&
      req.url.indexOf('basicauth') === -1
    ) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa(
            sessionStorage.getItem(
              this.loginService.USER_NAME_SESSION_ATTRIBUTE_NAME
            ) +
              ':' +
              sessionStorage.getItem(
                this.loginService.USER_NAME_SESSION_ATTRIBUTE_PASSWORD
              )
          )}`,
        }),
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
