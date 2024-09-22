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
        children: [
          {
            path: ':team',
            loadComponent: () =>
              import(
                './feature/teams/team/team-template/team-template.component'
              ).then((mod) => mod.TeamTemplateComponent),
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./feature/teams/team/detail/detail.component').then(
                    (mod) => mod.DetailComponent
                  ),
              },
              {
                path: 'info',
                loadComponent: () =>
                  import('./feature/teams/team/info/info.component').then(
                    (mod) => mod.InfoComponent
                  ),
              },
              {
                path: 'match',
                loadComponent: () =>
                  import('./feature/teams/team/match/match.component').then(
                    (mod) => mod.MatchComponent
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./feature/about-us/about-us.component').then(
        (mod) => mod.AboutUsComponent
      ),
  },
  {
    path: 'our-mission',
    loadComponent: () =>
      import('./feature/mission/mission.component').then(
        (mod) => mod.MissionComponent
      ),
  },
];
