import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./feature/teams/teams.component').then(
        (mod) => mod.TeamsComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./feature/teams/listing/listing.component').then(
            (mod) => mod.TeamsListingComponent
          ),
      },
      {
        path: ':under',
        loadComponent: () =>
          import('./feature/teams/team/team.component').then(
            (mod) => mod.TeamComponent
          ),
      },
      {
        path: ':under/:team',
        loadComponent: () =>
          import('./feature/teams/team/team.component').then(
            (mod) => mod.TeamComponent
          ),
      },
    ],
  },
];
