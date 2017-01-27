import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutes } from './contactus.routing';
import { ContactusComponent } from './contactus.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactusRoutes,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [ContactusComponent,SitemapComponent]
})
export class ContactusModule { }
