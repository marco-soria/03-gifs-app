import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard/dashboard'),
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/pages/trending/trending').then(
            (m) => m.TrendingComponent
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/pages/search/search').then((m) => m.SearchComponent),
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gif-history/gif-history'),
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
