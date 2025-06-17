import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    //loadComponent: () => import('./gifs/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    loadComponent: () => import('./gifs/pages/dashboard/dashboard.component'), // Assuming the component is exported as default
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending/trending.component').then(
            (m) => m.TrendingComponent
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
