import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import {AppRoutes} from './app.routing';

import { ContactusComponent } from './contactus/contactus.component';
import { Pagestatus404Component } from './shared/pagestatus404/pagestatus404.component';
import { GadsenseComponent } from './shared/utils/gadsense/gadsense.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagestatus404Component,
    GadsenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
