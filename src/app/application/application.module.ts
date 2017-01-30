import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutes } from './application.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    ApplicationRoutes
  ],
  declarations: [
    ApplicationComponent
  ]
})
export class ApplicationModule { }
