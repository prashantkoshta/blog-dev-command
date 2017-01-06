import { ModuleWithProviders } from '@angular/core';
import {GitComponent} from "./git.component";
import { RouterModule,Routes} from '@angular/router';

const routes: Routes = [
      { path: '', component: GitComponent },
];
export const GitRoutes:ModuleWithProviders = RouterModule.forChild(routes);