import { HomeComponent } from "./home/home.component"; 
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes =[
      { path: '', redirectTo: 'git', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'linux', loadChildren: './linux/linux.module#LinuxModule' },
      { path: 'git', loadChildren: './git/git.module#GitModule' }
      
      /*,
      { path: '**', redirectTo: 'home', pathMatch: 'full' }*/
];

export const AppRoutes = RouterModule.forRoot(routes);