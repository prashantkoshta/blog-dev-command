import { ModuleWithProviders } from '@angular/core';
import { LoginlogoutComponent } from "./loginlogout.component";
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
      { path: '', component: LoginlogoutComponent}
];
export const LoginLogoutRoutes:ModuleWithProviders = RouterModule.forChild(routes);