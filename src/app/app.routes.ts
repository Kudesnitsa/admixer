import {Routes} from '@angular/router';
import {AppRoutesEnum} from "@shared/enums";

export const routes: Routes = [
  {
    path: AppRoutesEnum.HOME,
    loadComponent: () => import('./+home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: AppRoutesEnum.ADVERTISERS,
    loadComponent: () => import('./+advertisers/advertisers.component').then((m) => m.AdvertisersComponent),
  },
  {
    path: '**',
    redirectTo: AppRoutesEnum.HOME,
  },
];


