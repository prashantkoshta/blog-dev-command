import { ModuleWithProviders } from '@angular/core';
import {LinuxComponent} from "./linux.component";
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
      { path: '', component: LinuxComponent }
];
export const LinuxRoutes:ModuleWithProviders = RouterModule.forChild(routes);