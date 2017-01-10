import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import {ContactusComponent} from "./contactus.component";
import {SitemapComponent} from "./sitemap/sitemap.component";

const routes: Routes = [
      { path: '', component: ContactusComponent,pathMatch: 'full' },
      { path: 'sitemap', component: SitemapComponent,pathMatch: 'full' }
];
export const ContactusRoutes:ModuleWithProviders = RouterModule.forChild(routes);