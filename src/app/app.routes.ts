import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component')
            .then(c => c.MainLayoutComponent),
        title: 'Main - mandaro digital',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/main-page/main-page.component')
              .then(c => c.MainPageComponent)
          },
          {
            path: 'imprint',
            loadComponent: () => import('./pages/imprint-page/imprint-page.component')
              .then(c => c.ImprintPageComponent),
            title: 'Imprint - mandaro digital'
          },
          {
            path: 'data-policy',
            loadComponent: () => import('./pages/data-policy-page/data-policy-page.component')
              .then(c => c.DataPolicyPageComponent),
            title: 'Data-policy - mandaro digital'
          },
          {
              path: '**',
              loadComponent: () => import('./pages/not-found-page/not-found-page.component')
                  .then(c => c.NotFoundPageComponent),
              title: 'Page not found - mandaro digital'
          }
        ]
    },
];
