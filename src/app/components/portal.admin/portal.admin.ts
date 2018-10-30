import { Component, OnInit } from '@angular/core';
import { PatientEntity } from '../../entities/patient.entity';
import { PatientService } from '../../services/patient.service';


@Component({
    
    templateUrl:'./portal.admin.html'
    
})
export class PortalAdminComponent implements OnInit {
    isDataLoaded:boolean=true;
     showPatientReg:boolean=true;
     entity:PatientEntity=new PatientEntity();
     patientList:PatientEntity[]=[];
    
    constructor(private patientService:PatientService) { }
     
    ngOnInit(): void {
     
    this.isDataLoaded=true;
    this.showPatientReg=true;
    
        this.patientList=[];
     }

addPatient():void{
    this.patientService.addPatient(this.entity).subscribe(result=>{
        console.log(result.body);
        //this.patientList.push(result.body);
    },
    
    error=>{
 console.log("error.")

    }
    );

}

}
