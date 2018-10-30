import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions} from '@angular/http';
import {throwError, Observable,  of} from 'rxjs';
import { map } from 'rxjs/operators';
import { window } from 'rxjs/operators';
import { Router } from '@angular/router';


import { HttpErrorResponse,HttpClient,HttpResponse } from '@angular/common/http';
import { LoginEntity } from '../entities/login.entity';

@Injectable()
export class AccountService {
baseUrl:string="";
constructor(private _router:Router,private _http:HttpClient ){
  this.baseUrl="http://localhost:8000/api/account"
}


login(entity:LoginEntity):Observable<string>{
  
  return this._http.post<string>(this.baseUrl,LoginEntity,{observe:'response'});
   
  
}

register(entity:LoginEntity):Observable<String>{
      
      return this._http.post<String>(this.baseUrl+"/",entity,{observe:'response'});
  }
private handleError(error: HttpErrorResponse) {
    let errMessage;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      
      errMessage.status = error.status;
      errMessage.message = error.error;
    }
    // return an observable with a user-facing error message
    return throwError(
      errMessage);
  };
}
