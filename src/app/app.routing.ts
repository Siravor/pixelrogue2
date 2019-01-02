import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { ComissionComponent } from './comission/comission.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'youtube', component: YoutubeComponent},
  { path: 'comission', component: ComissionComponent},
  { path: 'xxxlogin-rogviado', component: LoginComponent }
];

export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
