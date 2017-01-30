import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ApplicationComponent } from "./application.component";
import { AuthGarudService } from './../shared/guard/authgarud.service';


const routes: Routes = [
      { path: '', component: ApplicationComponent}
];
export const ApplicationRoutes:ModuleWithProviders = RouterModule.forChild(routes);