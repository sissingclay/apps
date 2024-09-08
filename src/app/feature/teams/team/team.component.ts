import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { OfficialsComponent, UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../../shared/ui/button/button.component';
import { StoreService } from '../../../shared/services/store/store.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import {
  TEAM_URL,
  UNDER,
  yearsArrayList,
} from '../../../shared/helpers/helpers.year';
import { TEAMS } from '@apps/ui';
import { DestroyService } from '../../../shared/services/destroy/destroy.service';
import { filter, takeUntil } from 'rxjs';
import {
  Team,
  YearGroupCollection,
  YearMetaData,
} from '../../../shared/interface/teams.interface';
import { Observable } from '@apollo/client';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    UiLibButtonComponent,
    UiLibFigureComponent,
    OfficialsComponent,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf,
    JsonPipe,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent extends DestroyService implements OnInit {
  public year!: Date;
  public under!: number;
  public yearData!: YearMetaData;
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
  public route = inject(ActivatedRoute);

  ngOnInit(): void {
    const yearParams = this.route.snapshot.params['under'];
    this.under = parseInt(yearParams?.substring(6), 10);

    let count = 0;
    while (this.under > 7) {
      count = count + 1;
      this.under = this.under - 1;
    }

    const date = new Date(`${new Date().getFullYear()}-08-01T00:00:00.000Z`);
    this.year = new Date(date.setFullYear(date.getFullYear() - count));
    this.yearData = UNDER(this.year);

    this.storeService.getTeams(this.year);
  }

  createUnderRouter(teamSlug: string, page?: string) {
    return TEAM_URL(this.year, teamSlug, page);
  }
}
