import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { StoreService } from '../../../shared/services/store/store.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { tap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TEAMS } from '../../../shared/constants/routes.constants';

@Component({
  selector: 'app-ui-hero',
  standalone: true,
  imports: [AsyncPipe, NgIf, JsonPipe, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLibHeroComponent implements OnInit {
  public readonly routeTeam = TEAMS;

  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.homeData$
      .pipe(
        tap((res) => {
          if (!res) {
            this.storeService.getHomeData();
          }
        })
      )
      .subscribe();
  }
}
