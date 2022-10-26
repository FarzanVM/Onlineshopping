import {Injectable} from '@angular/core';
import {HttpEvent,HttpHandler,HttpInterceptor,HttpErrorResponse,HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//@injectable
export class HeaderInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');

        req=req.clone({headers:req.headers.set('Authorization','JWT'+token)});
        return next.handle(req);

    }
}