import {CanActivate} from '@angular/router';
import{Routes} from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { PortalAdminComponent} from './components/portal.admin/portal.admin';
import { AGPortalAdmin } from './ag_portal_admin';

export const ROUTE: Routes = [
    
    { path: "home", component: HomeComponent },
    { path: "", component: HomeComponent },
   
   
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    
    {path:"portal_admin", component:PortalAdminComponent,
     canActivate:[AGPortalAdmin]
    
  }
    
    
  ];