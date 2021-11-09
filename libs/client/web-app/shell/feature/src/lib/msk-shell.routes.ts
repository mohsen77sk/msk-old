import { Route } from '@angular/router';

import { MskLayoutComponent } from '@msk/client/web-app/shell/ui/layout';

import { InitialDataResolver } from './msk-shell.resolvers';

export const mskShellRoutes: Route[] = [
  // Redirect empty path to '/dashboard'
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  // Landing routes
  {
    path: '',
    component: MskLayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'home',
        loadChildren: async () =>
          (await import('@msk/client/web-app/landing/home/feature')).HomeModule,
      },
    ],
  },

  // Admin routes
  {
    path: '',
    component: MskLayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      // Dashboards
      {
        path: 'dashboard',
        loadChildren: async () =>
          (await import('@msk/client/web-app/admin/dashboard/feature'))
            .DashboardModule,
      },

      // Apps
      {
        path: 'apps',
        children: [],
      },
    ],
  },
];
