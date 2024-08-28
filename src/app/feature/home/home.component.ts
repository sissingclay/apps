import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';

import { UiLibFigureComponent } from '@apps/ui';
import { StoreService } from '../../shared/services/store/store.service';
import { UiLibHeroComponent } from './hero/hero.component';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { UiLibButtonComponent } from '../../shared/ui/button/button.component';
import { AppTeamsWidgetComponent } from '../../shared/components/teams/teams.component';
import { HttpService } from '../../shared/services/http/http.service';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public storeService = inject(StoreService);

  ngOnInit(): void {
    this.storeService.getYearGroupData();
    this.storeService.getValueData();
  }
}
