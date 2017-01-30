import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Pagestatus404Component } from './pagestatus404/pagestatus404.component';
import { GadsenseComponent } from './utils/gadsense/gadsense.component';
import { AuthGarudService } from './guard/authgarud.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    GadsenseComponent,
    Pagestatus404Component
  ],
  providers:[
    AuthGarudService
  ],
  exports: [
    GadsenseComponent,
    Pagestatus404Component
  ]
})
export class SharedModule { }