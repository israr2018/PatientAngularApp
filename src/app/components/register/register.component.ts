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
         this.router.navigate(['portal_admin']);
    //    this._accountService.register(this.entity).subscribe(result=>{
           
    //         this.router.navigate(['portal_admin']);
    //     },error=>{});
     }
     gotoHome():void{
        this.router.navigate(['home']);
     }

}
