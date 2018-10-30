

export class PatientEntity {
 public _id?: string;
 public  FirstName: string;
 public  LastName: string;
 public  Email: string;
 public  Mobile: string;
 public  Address: string;
 
  constructor() {
     this.FirstName="";
     this.LastName="";
     this.Email="";
     this.Mobile="";
     this.Address="";
 }
}