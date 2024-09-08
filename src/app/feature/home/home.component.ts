import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { MISSION, UiLibFigureComponent } from '@apps/ui';
import { StoreService } from '../../shared/services/store/store.service';
import { UiLibHeroComponent } from './hero/hero.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { UiLibButtonComponent } from '../../shared/ui/button/button.component';
import { AppTeamsWidgetComponent } from '../../shared/components/teams/teams.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UiLibHeroComponent,
    UiLibButtonComponent,
    UiLibFigureComponent,
    AsyncPipe,
    JsonPipe,
    AppTeamsWidgetComponent,
    AsyncPipe,
    NgIf,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public storeService = inject(StoreService);
  ourMission = MISSION;

  ngOnInit(): void {
    this.storeService.getYearGroupData();
    this.storeService.getValueData();
  }
}
