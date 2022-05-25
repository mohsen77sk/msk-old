import { Route } from '@angular/router';

import { AuthGuard } from '@msk/client/web-app/shell/core/auth';
import { NoAuthGuard } from '@msk/client/web-app/shell/core/auth';
import { MskLayoutComponent } from '@msk/client/web-app/shell/ui/layout';

import { InitialDataResolver } from './msk-shell.resolvers';

export const mskShellRoutes: Route[] = [
  // Redirect empty path to '/dashboard'
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  // Redirect signed in user to the '/dashboards/project'
  //
  // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

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

  // Auth routes for guests
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: MskLayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('@msk/client/web-app/auth/sign-in/feature').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('@msk/client/web-app/auth/forgot-password/feature').then(
            (m) => m.AuthForgotPasswordModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('@msk/client/web-app/auth/reset-password/feature').then(
            (m) => m.AuthResetPasswordModule
          ),
      },
      {
        path: 'two-step-verification',
        loadChildren: () =>
          import('@msk/client/web-app/auth/two-step-verification/feature').then(
            (m) => m.AuthTwoStepVerificationModule
          ),
      },
    ],
  },

  // Auth routes for authenticated users
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MskLayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'sign-out',
        loadChildren: () =>
          import('@msk/client/web-app/auth/sign-out/feature').then(
            (m) => m.AuthSignOutModule
          ),
      },
    ],
  },

  // Admin routes
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MskLayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      // Dashboards
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@msk/client/web-app/admin/dashboard/feature').then(
            (m) => m.DashboardModule
          ),
      },

      // Apps
      {
        path: 'apps',
        children: [],
      },
    ],
  },

  // Error routes & Catch all
  {
    path: '',
    component: MskLayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'internal-server-error',
        pathMatch: 'full',
        loadChildren: () =>
          import(
            '@msk/client/web-app/error/internal-server-error/feature'
          ).then((m) => m.InternalServerErrorModule),
      },
      {
        path: 'maintenance',
        pathMatch: 'full',
        loadChildren: () =>
          import('@msk/client/web-app/error/maintenance/feature').then(
            (m) => m.MaintenanceModule
          ),
      },
      {
        path: 'not-found',
        pathMatch: 'full',
        loadChildren: () =>
          import('@msk/client/web-app/error/not-found/feature').then(
            (m) => m.NotFoundModule
          ),
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];
