import { Component, OnInit, inject } from '@angular/core';
import { StoreService } from '../../../../shared/services/store/store.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { TEAMS } from '@apps/ui';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../../../../shared/services/destroy/destroy.service';

@Component({
  selector: 'app-team-template',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './team-template.component.html',
  styleUrl: './team-template.component.scss',
})
export class TeamTemplateComponent extends DestroyService implements OnInit {
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
  public route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadData();

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.loadData();
        }
      },
    });
  }

  private loadData(): void {
    this.storeService.getTeam(this.route.snapshot.params['team']);
  }
}
