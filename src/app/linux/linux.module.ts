import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LinuxRoutes} from './linux.routing'
import { LinuxComponent } from './linux.component';

@NgModule({
  imports: [
    CommonModule,
    LinuxRoutes
  ],
  declarations: [LinuxComponent]
})
export class LinuxModule { }