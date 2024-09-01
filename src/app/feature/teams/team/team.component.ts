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
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TEAM_URL, UNDER } from '../../../shared/helpers/helpers.year';
import { TEAMS } from '@apps/ui';
import { DestroyService } from '../../../shared/services/destroy/destroy.service';
import { filter, takeUntil } from 'rxjs';

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
    JsonPipe,
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent extends DestroyService implements OnInit {
  public year = '';
  public under!: any;
  public readonly TEAMS_URL = TEAMS;
  public teamSlug = '';
  public team: any;

  public storeService = inject(StoreService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.year = this.route.snapshot.params['under'];
    this.under = UNDER(this.year);

    this.storeService.getYearGroupData();
    this.storeService.getYearTeamsData();

    this.loadData();

    this.storeService.teamSlug$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.loadData();
      },
    });
  }

  createUnderRouter(slug: string) {
    return TEAM_URL(this.year, slug);
  }

  private loadData(): void {
    console.log('tsssss');
    this.storeService
      .getTeam$(this.storeService.teamSlug$.value)
      .pipe(filter(Boolean), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          console.log('res', res);
          this.team = { ...res };
        },
      });
  }
}
