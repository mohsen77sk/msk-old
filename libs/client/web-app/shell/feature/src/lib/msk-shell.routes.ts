import { Route } from '@angular/router';

import { AuthGuard } from '@msk/client/web-app/shell/core/auth';
import { NoAuthGuard } from '@msk/client/web-app/shell/core/auth';
import { LayoutComponent } from '@msk/client/web-app/shell/ui/layout';

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
    component: LayoutComponent,
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
    // canMatch: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('@msk/client/web-app/auth/sign-in/feature').then(
            (m) => m.AuthSignInModule,
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('@msk/client/web-app/auth/forgot-password/feature').then(
            (m) => m.AuthForgotPasswordModule,
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('@msk/client/web-app/auth/reset-password/feature').then(
            (m) => m.AuthResetPasswordModule,
          ),
      },
      {
        path: 'two-step-verification',
        loadChildren: () =>
          import('@msk/client/web-app/auth/two-step-verification/feature').then(
            (m) => m.AuthTwoStepVerificationModule,
          ),
      },
    ],
  },

  // Auth routes for authenticated users
  {
    path: '',
    // canMatch: [AuthGuard],
    component: LayoutComponent,
    data: {
      layoutType: 'empty',
    },
    children: [
      {
        path: 'sign-out',
        loadChildren: () =>
          import('@msk/client/web-app/auth/sign-out/feature').then(
            (m) => m.AuthSignOutModule,
          ),
      },
    ],
  },

  // Admin routes
  {
    path: '',
    // canMatch: [AuthGuard],
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      // Dashboards
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@msk/client/web-app/admin/dashboard/feature').then(
            (m) => m.DashboardModule,
          ),
      },

      // Apps
      {
        path: 'apps',
        children: [],
      },
    ],
  },

  // Docs routes
  {
    path: 'docs',
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'animations',
        loadChildren: () =>
          import('@msk/client/web-app/docs/animations').then(
            (m) => m.DocsAnimationsModule,
          ),
      },
      {
        path: 'colors',
        loadChildren: () =>
          import('@msk/client/web-app/docs/colors').then(
            (m) => m.DocsColorsModule,
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('@msk/client/web-app/docs/forms').then(
            (m) => m.DocsFormsModule,
          ),
      },
      {
        path: 'typography',
        loadChildren: () =>
          import('@msk/client/web-app/docs/typography').then(
            (m) => m.DocsTypographyModule,
          ),
      },
      {
        path: 'components/alert',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/alert').then(
            (m) => m.DocsAlertModule,
          ),
      },
      {
        path: 'components/card',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/card').then(
            (m) => m.DocsCardModule,
          ),
      },
      {
        path: 'components/drawer',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/drawer').then(
            (m) => m.DocsDrawerModule,
          ),
      },
      {
        path: 'components/loading-bar',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/loading-bar').then(
            (m) => m.DocsLoadingBarModule,
          ),
      },
      {
        path: 'components/fullscreen',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/fullscreen').then(
            (m) => m.DocsFullscreenModule,
          ),
      },
      {
        path: 'components/highlight',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/highlight').then(
            (m) => m.DocsHighlightModule,
          ),
      },
      {
        path: 'components/navigation',
        loadChildren: () =>
          import('@msk/client/web-app/docs/components/navigation').then(
            (m) => m.DocsNavigationModule,
          ),
      },
      {
        path: 'services/config',
        loadChildren: () =>
          import('@msk/client/web-app/docs/services/config').then(
            (m) => m.DocsConfigModule,
          ),
      },
      {
        path: 'services/confirmation',
        loadChildren: () =>
          import('@msk/client/web-app/docs/services/confirmation').then(
            (m) => m.DocsConfirmationModule,
          ),
      },
      {
        path: 'services/media-watcher',
        loadChildren: () =>
          import('@msk/client/web-app/docs/services/media-watcher').then(
            (m) => m.DocsMediaWatcherModule,
          ),
      },
      {
        path: 'services/splash-screen',
        loadChildren: () =>
          import('@msk/client/web-app/docs/services/splash-screen').then(
            (m) => m.DocsSplashScreenModule,
          ),
      },
      {
        path: 'guides/directory-structure',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/directory-structure').then(
            (m) => m.DocsDirectoryStructureModule,
          ),
      },
      {
        path: 'guides/component-structure',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/component-structure').then(
            (m) => m.DocsComponentStructureModule,
          ),
      },
      {
        path: 'guides/theme-layouts',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/theme-layouts').then(
            (m) => m.DocsThemeLayoutsModule,
          ),
      },
      {
        path: 'guides/page-layouts',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/page-layouts').then(
            (m) => m.DocsPageLayoutsModule,
          ),
      },
      {
        path: 'guides/tailwind-css',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/tailwindCSS').then(
            (m) => m.DocsTailwindCSSModule,
          ),
      },
      {
        path: 'guides/theming',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/theming').then(
            (m) => m.DocsThemingModule,
          ),
      },
      {
        path: 'guides/component-theming',
        loadChildren: () =>
          import('@msk/client/web-app/docs/guides/component-theming').then(
            (m) => m.DocsComponentThemingModule,
          ),
      },
    ],
  },

  // Error routes & Catch all
  {
    path: '',
    component: LayoutComponent,
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
            (m) => m.MaintenanceModule,
          ),
      },
      {
        path: 'not-found',
        pathMatch: 'full',
        loadChildren: () =>
          import('@msk/client/web-app/error/not-found/feature').then(
            (m) => m.NotFoundModule,
          ),
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];
