import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, Subscription, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
const AUTHORIZATION = 'Authorization'
@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor{
  isLogged:boolean=false;
  subscriptions: Subscription[] = [];
  constructor(
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = environment.token;
    let intReq = req;
    intReq = this.addToken(req, token);
    return next
      .handle(intReq)
      .pipe(
        catchError((error: HttpErrorResponse) =>{
          return this.processRequestError(error, req, next)
        })
      );
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set(AUTHORIZATION, 'Bearer ' + token),
    });
  }

  private processRequestError(
    error: HttpErrorResponse,
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (error instanceof HttpErrorResponse) {
      //tratar error
    }
    return throwError(() => {
      error;
    });
  }
}


export const interceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorsInterceptor, multi: true },
];
