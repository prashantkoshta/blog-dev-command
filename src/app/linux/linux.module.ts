import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinuxRoutes} from './linux.routing'
import { LinuxComponent } from './linux.component';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LinuxRoutes,
    MaterialModule.forRoot()
  ],
  declarations: [LinuxComponent]
})
export class LinuxModule { }