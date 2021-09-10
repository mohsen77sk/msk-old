import { Route } from '@angular/router';

import { MskLayoutComponent } from '@msk/app/shell/ui/layout';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: MskLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('@msk/app/home/feature')).HomeModule,
      },
    ],
  },
];
