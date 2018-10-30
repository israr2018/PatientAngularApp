
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ROUTE } from './app.route';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PortalAdminComponent } from './components/portal.admin/portal.admin';
import { AccountService } from './services/account.service';
import { LoginService } from './services/login.service';
import { PatientService } from './services/patient.service';
import { AGPortalAdmin } from './ag_portal_admin';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    
    PortalAdminComponent
    
    
  ],
  imports: [
 
   BrowserModule,
   FormsModule,
   
   
    HttpClientModule,
    
    RouterModule.forRoot(ROUTE)
  
  ],
  providers: [AccountService,LoginService,PatientService,AGPortalAdmin],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
