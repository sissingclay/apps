import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { OfficialsComponent, UiLibFigureComponent } from '@apps/ui';
import { UiLibButtonComponent } from '../../../../shared/ui/button/button.component';
import { StoreService } from '../../../../shared/services/store/store.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { TEAMS } from '../../../../shared/constants/routes.constants';

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
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  public year = '';
  public under!: any;
  public readonly TEAMS_URL = TEAMS;

  public storeService = inject(StoreService);
}
