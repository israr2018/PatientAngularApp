import { Component, OnInit } from '@angular/core';
import { LoginEntity } from './../../entities/login.entity';
import { AccountService } from './../../services/account.service';
import { Router } from '@angular/router';



@Component({
  
    templateUrl: './register.component.html',
   
})
export class RegisterComponent implements OnInit {
    entity:LoginEntity=new LoginEntity();
    
    constructor(private _accountService:AccountService,private router:Router) { 
        
    }

    ngOnInit(): void {
    
     }
     register():void{
         console.log("register is called");
       

       this._accountService.register(this.entity).subscribe((result) => {
          // console.log("Accunt Created successfully."+JSON.stringify(result));
           localStorage.setItem('token',result);
           this.router.navigate(['portal_admin']);

       },
       error=>{console.log("err"+JSON.stringify(error))}
       
     }
     gotoHome():void{
        this.router.navigate(['home']);
     }

}
