import { PatientEntity } from '../entities/patient.entity';
import { Injectable } from '@angular/core';
import { HttpErrorResponse,HttpClient } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';


import { catchError } from 'rxjs/operators';
import { LoginEntity } from './../entities/login.entity';
import { HttpResponse } from '@angular/common/http';


import { environment } from './../../environments/environment';



@Injectable()
export class PatientService {
    baseUrl:String;
    constructor(private _http:HttpClient ) {

      this.baseUrl="http://localhost:52734/api";
     }

getPatientById(id: string): Observable<HttpResponse<PatientEntity>> {
  return this._http.get<PatientEntity>(this.baseUrl+"/patients"+id,{observe:'response'});
   
  
  
}
getAllPatients (): Observable<HttpResponse<PatientEntity[]>> {
  return this._http.get<PatientEntity[]>(this.baseUrl+"/patients",{observe:'response'});
   
  
}

addPatient (entity: PatientEntity):Observable<HttpResponse<PatientEntity>> {
   return this._http.post<PatientEntity>(this.baseUrl+"/patients", entity,{observe:'response'});
   
   
}
updatePatient (id:number,entity: PatientEntity):Observable<HttpResponse<PatientEntity>> {
   return this._http.put<PatientEntity>(this.baseUrl+"/patients/"+id, entity,{observe:'response'});
   
   
}
deletePatient (id:number,entity: PatientEntity):Observable<HttpResponse<PatientEntity>> {
   return this._http.delete<PatientEntity>(this.baseUrl+"/patients/"+id,{observe:'response'});
   
   
}

}