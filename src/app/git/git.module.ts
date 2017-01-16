import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitRoutes } from './git.routing'
import { GitComponent } from './git.component';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GitRoutes,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    GitComponent
  ]
})
export class GitModule { }
