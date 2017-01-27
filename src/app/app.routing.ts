import { HomeComponent } from "./home/home.component"; 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagestatus404Component } from './shared/pagestatus404/pagestatus404.component';

const routes:Routes =[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'linux', loadChildren: './linux/linux.module#LinuxModule' , pathMatch: 'full' },
      { path: 'git', loadChildren: './git/git.module#GitModule', pathMatch: 'full' },
      { path: 'login', loadChildren: './loginlogout/loginlogout.module#LoginlogoutModule', pathMatch: 'full'},
      { path: 'info', loadChildren: './contactus/contactus.module#ContactusModule'},
      { path: '*', component: Pagestatus404Component },
      { path: '**', component: Pagestatus404Component }
      
      /*,
      { path: '**', redirectTo: 'home', pathMatch: 'full' }*/
];

export const AppRoutes = RouterModule.forRoot(routes);