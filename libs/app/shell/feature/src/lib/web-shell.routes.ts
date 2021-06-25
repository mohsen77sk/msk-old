import { Route } from '@angular/router';

import { LayoutComponent } from '@msk/app/shell/ui/layout';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@msk/app/home/feature')).HomeModule,
      },
    ],
  },
];
