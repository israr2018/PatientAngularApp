import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { LoginEntity } from '../../entities/login.entity';
@Component({
    
    templateUrl: './login.component.html'
    
})
export class LoginComponent implements OnInit {

    constructor(private accountService:AccountService,private router:Router) { 

    }
    entity:LoginEntity=new LoginEntity();
    errMessage:any;
    ngOnInit(): void { }
    submit():void{
      
        this.accountService.login(this.entity).subscribe(result=>{
                
               

                        localStorage.setItem('token',result);
                        this.router.navigate(['/portal_admin']);
                
               
            
               
        },err=>{
            console.log("error in school login");
            this.errMessage=err;
        });
    }
    gotoHome():void{
        this.router.navigate(['/home']);
    }
}
