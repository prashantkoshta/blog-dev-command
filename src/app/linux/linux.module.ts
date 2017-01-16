import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinuxRoutes} from './linux.routing'
import { LinuxComponent } from './linux.component';
import {MaterialModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LinuxRoutes,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [LinuxComponent]
})
export class LinuxModule { }