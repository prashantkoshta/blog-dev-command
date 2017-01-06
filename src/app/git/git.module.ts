import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GitRoutes} from './git.routing'
import { GitComponent } from './git.component';

@NgModule({
  imports: [
    CommonModule,
    GitRoutes
  ],
  declarations: [GitComponent]
})
export class GitModule { }
