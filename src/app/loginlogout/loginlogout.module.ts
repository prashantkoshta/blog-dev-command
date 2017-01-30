import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { LoginlogoutComponent } from './loginlogout.component';
import { LoginLogoutRoutes } from './loginlogout.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginlogoutService } from './loginlogout.service'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    LoginLogoutRoutes,
    SharedModule
  ],
  declarations: [
    LoginlogoutComponent
  ],
  providers:[
    LoginlogoutService
  ],
  exports:[
    LoginlogoutComponent
  ]
})
export class LoginlogoutModule { }
