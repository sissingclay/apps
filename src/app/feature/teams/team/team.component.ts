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
import { AsyncPipe } from '@angular/common';
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
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent extends DestroyService implements OnInit {
  public year = '';
  public under!: any;
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.year = this.route.snapshot.params['under'];
    this.under = UNDER(this.year);

    this.storeService.getYearGroupData();
    this.storeService.getYearTeamsData();
  }

  createUnderRouter(slug: string) {
    return TEAM_URL(this.year, slug);
  }
}
