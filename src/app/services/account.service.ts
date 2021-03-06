import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions} from '@angular/http';
import {throwError, Observable,  of} from 'rxjs';
import { map } from 'rxjs/operators';
import { window } from 'rxjs/operators';
import { Router } from '@angular/router';


import { HttpErrorResponse,HttpClient,HttpResponse, HttpHeaders } from '@angular/common/http';
import { LoginEntity } from '../entities/login.entity';
import { Body } from '@angular/http/src/body';

@Injectable()
export class AccountService {
baseUrl:string="";
constructor(private _http:HttpClient ){
  this.baseUrl="http://localhost:52734/api/account"
}


login(entity:LoginEntity):any{
  
  return this._http.post<string>(this.baseUrl+"/login",LoginEntity,{observe:'response'});
   
  
}

register(entity:LoginEntity){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'reponseType':"text"
      
      //'Authorization': 'my-auth-token'
    })
  };
      return this._http.post<any>(this.baseUrl+"/register",entity,{'responseType':'text'});

        
      
  }
/* private handleError(error: HttpErrorResponse) {
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
  }; */
}
