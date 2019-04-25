import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WebReqInterceptor implements HttpInterceptor {
  constructor(private authservice: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle the request
    request = this.addAuthHeader(request);

    // call next() and handle the response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        return throwError(error);
      })
    );
  }

  addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    //get the access token
    const token = this.authservice.getAccessToken();

    if (token) {
      // append the access token to the request header
      return request.clone({
        setHeaders: {
          "x-access-token": token
        }
      });
    }

    return request;
  }
}
