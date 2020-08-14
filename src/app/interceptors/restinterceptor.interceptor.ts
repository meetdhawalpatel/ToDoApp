import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor called');
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhhd2FsIiwiZW1haWwiOiJkaGF3YWwucGF0ZWxAc2VjbG9yZS5jb20iLCJ1c2VySWQiOjcyNTIzMzkyMDU3MywiaWF0IjoxNTk2NzcyNDk3LCJleHAiOjE1OTY4NTg4OTd9.OzYkXGJR94BLones92gDZHjmjilzHa6V3bs2WsRATZ81'
      }
    });
    return next.handle(request);
  }
}
